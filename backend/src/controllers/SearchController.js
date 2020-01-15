const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    // console.log(request.query);

    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);
    // console.log(techsArray);
    const devs = await Dev.find({
      techs: {
        // se o desenvolvedor tiver as tecnologia do techarray
        // $in: operador logico do mongo
        $in: techsArray
      },
      location: {
        //encontrar usuarios numa distancia maxima de 10km, na determinada long, e lat
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return response.json({ devs });
  }
};
