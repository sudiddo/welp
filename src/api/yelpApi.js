import axios from "axios";

/**
 * @description Create an axios instance with the Yelp API base URL and the API key as a default header
 *
 * @reference https://chaoyue-zhao.medium.com/how-to-make-axios-api-calls-with-yelp-fusion-inside-react-js-10755d8485c5
 * we're using the cors-anywhere proxy to avoid CORS issues
 *
 */

// const baseURL = `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses`;
// const baseURL = `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses`;

const yelpApi = axios.create({
  baseURL: import.meta.env.VITE_YELP_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`,
    "Content-type": "application/json",
  },
});

export default yelpApi;
