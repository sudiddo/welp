import { useQuery } from "react-query";
import yelpApi from "../../../api/yelpApi";

// Search API
const searchBusinesses = async (searchTerm) => {
  const response = await yelpApi(`/search?term=${searchTerm}`);
  return response.data;
};

export const useSearchBusinesses = (searchTerm) => {
  return useQuery(["searchBusinesses", searchTerm], () =>
    searchBusinesses(searchTerm)
  );
};

// Business Detail API
const getBusinessDetail = async (businessId) => {
  const response = await yelpApi(`/${businessId}`);
  return response.data;
};

export const useBusinessDetail = (businessId) => {
  return useQuery(["businessDetail", businessId], () =>
    getBusinessDetail(businessId)
  );
};

// Homepage API
const getHomepageBusinesses = async ({ limit, offset }) => {
  const response = await yelpApi(
    `/search?location=San+Francisco&limit=${limit}&offset=${offset}&sort_by=rating`
  );
  return response.data;
};

export const useHomepageBusinesses = ({ limit, offset }) => {
  return useQuery(
    ["homepageBusinesses", { limit, offset }],
    () => getHomepageBusinesses({ limit, offset }),
    {
      keepPreviousData: true,
    }
  );
};
