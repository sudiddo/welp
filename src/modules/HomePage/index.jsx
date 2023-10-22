import { useEffect, useState } from "react";
import { useHomepageBusinesses } from "../shared/hooks/useQueryYelp";
import LoadingIndicator from "../shared/components/LoadingIndicator";
import Maps from "../shared/components/Maps";
import Pagination from "./components/Pagination";
import BusinessList from "./components/BusinessList";
import Header from "../shared/components/Header";

function HomePage() {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [hoveredBusiness, setHoveredBusiness] = useState(null);

  const { data, isLoading } = useHomepageBusinesses({ limit, offset });

  useEffect(() => {
    if (!isLoading && data) {
      setTotalPages(Math.ceil(data.total / limit));
    }
  }, [data, limit, isLoading]);

  const handleNext = () => setOffset((prevOffset) => prevOffset + limit);
  const handlePrevious = () =>
    setOffset((prevOffset) => Math.max(0, prevOffset - limit));

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className="relative">
      <Header />
      <Pagination
        offset={offset}
        totalPages={totalPages}
        limit={limit}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />

      <div className="w-screen relative flex md:flex-row">
        <div className="flex h-full w-full">
          <BusinessList
            businesses={data.businesses}
            offset={offset}
            setHoveredBusiness={setHoveredBusiness}
          />
        </div>
        <div className="flex-col items-stretch w-full hidden md:flex shadow-inner">
          <div className="sticky top-[56px] h-[calc(100vh-70px)] items-stretch">
            <div className="absolute inset-0">
              <Maps
                businesses={data.businesses}
                onHover={setHoveredBusiness}
                region={data.region}
                offset={offset}
                hoveredBusiness={hoveredBusiness}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default HomePage;
