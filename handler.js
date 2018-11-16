const render = require("./render");
const getCat = require("./getCat");

module.exports.gifs = async (event, context) => {
  const cat = await getCat();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
    body: render(cat),
  };
};
