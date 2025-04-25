//# Resolver functions to handle requests

let scores = [];  // Temporary in-memory data

const resolvers = {
  Query: {
    scores: () => scores,
  },
  Mutation: {
    addScore: (_, { score, date }) => {
      const newScore = {
        id: String(scores.length + 1),
        score,
        date,
      };
      scores.push(newScore);
      return newScore;
    },
  },
};

module.exports = resolvers;
