import { useState } from "react";
import { useHomepageBusinesses } from "../modules/shared/hooks/useQueryYelp";

function Homepage() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const { data, isLoading } = useHomepageBusinesses({ limit, offset });

  if (isLoading) {
    return <h1 className="text-3xl font-bold underline">Loading...</h1>;
  }

  return <h1 className="text-3xl font-bold underline">Homepage</h1>;
}

export default Homepage;
