import Hobbies from "../models/Hobbies.js";
import Student from "../models/Student.js";

const globalResolver = {
  Query: {
    async getHobbies(root, { id }) {
      const hobbieSearch = await Hobbies.findByPk(id);

      if (!hobbieSearch) {
        throw new Error("Hobbie not found in database");
      }

      return hobbieSearch;
    },

    async getStudent(root, { id }) {
      const studentSearch = await Student.findByPk(id);

      if (!studentSearch) {
        throw new Error("Student not found in database");
      }

      return studentSearch;
    },

    async getAllStudents(root, args) {
      return await Student.findAll();
    },
  },

  Mutation: {
    async createHobbies(root, { student_id, title }) {
      return await Hobbies.create({ student_id, title });
    },

    async createStudent(root, { first_name, email }) {
      const existsStudentByEmail = await Student.findOne({ where: { email } });

      if (existsStudentByEmail) {
        throw new Error("Email already exists in database");
      }

      return await Student.create({
        first_name,
        email,
      });
    },
  },

  Hobbies: {
    async student(Hobbies) {
      return await Student.findOne({
        where: { id: Hobbies.dataValues.student_id },
      });
    },
  },

  Student: {
    async hobbies(student) {
      return await Hobbies.findAll({
        where: { student_id: student.dataValues.id },
      });
    },
  },
};

export default globalResolver;
