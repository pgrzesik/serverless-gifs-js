const axios = require("axios");
const sample = require("lodash.sample");

const getCat = async () => {
  const url = "https://api.giphy.com/v1/gifs/search";
  const q = "cats";
  const apiKey = process.env.GIPHY_API_KEY;
  const limit = 30;

  const response = await axios.get(url, {
    params: {
      q,
      api_key: apiKey,
      limit,
    },
  });

  return sample(response.data.data);
};

module.exports = getCat;
