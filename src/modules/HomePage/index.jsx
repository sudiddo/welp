import { useEffect, useState } from "react";
import { useHomepageBusinesses } from "../shared/hooks/useQueryYelp";
import LoadingIndicator from "../shared/components/LoadingIndicator";
import BusinessCard from "../shared/components/BusinessCard";

function HomePage() {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { data, isLoading } = useHomepageBusinesses({ limit, offset });

  useEffect(() => {
    if (!isLoading) {
      setTotalPages(Math.ceil(data.total / limit));
    }
  }, [data, limit, isLoading]);

  const handleNext = () => {
    setOffset((offset) => offset + limit);
  };

  const handlePrevious = () => {
    setOffset((offset) => Math.max(0, offset - limit));
  };

  return (
    <div className="relative h-screen">
      {totalPages !== 0 && (
        <div className="flex justify-between fixed top-0 w-full bg-white px-5 py-2 shadow">
          <button onClick={handlePrevious} disabled={offset === 0}>
            Previous
          </button>
          <span>
            Page {offset / limit + 1} of {totalPages}
          </span>
          <button onClick={handleNext} disabled={offset + limit >= data?.total}>
            Next
          </button>
        </div>
      )}
      <div className="flex flex-col h-full">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <LoadingIndicator />
          </div>
        ) : (
          <div className="space-y-4 p-5 mt-10">
            {data.businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
