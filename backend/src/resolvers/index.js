//# Resolver functions to handle requests

const Score = require("../models/Score")

const resolvers = {
  Query: {
    scores: async() => {
      return await Score.find();
    },
  },
  Mutation: {
    addScore: async (_, { score, date }) => {
      const newScore = new Score({
        score,
        date,
      });
      return await newScore.save();
    },
    deleteScore: async (_, { id }) => {
      return await Score.findByIdAndDelete(id);
    }    
  },
};

module.exports = resolvers;
