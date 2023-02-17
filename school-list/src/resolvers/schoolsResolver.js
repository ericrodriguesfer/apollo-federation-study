import School from "../models/School.js";

const schoolsResolver = {
  Query: {
    async getSchool(root, { id }) {
      const schollSearch = await School.findByPk(id);

      if (!schollSearch) {
        throw new Error("School not found in database");
      }

      return schollSearch;
    },

    async getAllSchools(root, { id }) {
      const schollsSearch = await School.findAll();

      return schollsSearch;
    },
  },

  Mutation: {
    async createSchool(
      root,
      { name, street, number, district, city, uf, country }
    ) {
      return await School.create({
        name,
        street,
        number,
        district,
        city,
        uf,
        country,
      });
    },
  },
};

export default schoolsResolver;
