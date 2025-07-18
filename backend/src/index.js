// # Main entry file for the backend

require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schemas/typeDefs");
const resolvers = require("./resolvers");

async function startServer() {
  const app = express();

  app.use('/graphql', cors()); // Allow cross-origin requests
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start(); // Needed before applyMiddleware

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
