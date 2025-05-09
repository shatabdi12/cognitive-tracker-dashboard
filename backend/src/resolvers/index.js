//# Resolver functions to handle requests

const scores = [];  // Temporary in-memory data

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
    deleteScore: (_, { id }) => {
      const index = scores.findIndex((score) => score.id === id);
      if (index === -1) return null;
      const deleted = scores.splice(index, 1)[0];
      return deleted;
    }    
  },
};

module.exports = resolvers;
