const express = require("express");
require('dotenv').config()
const colors = require('colors')
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema/testSchema")

const app = express();

// connection to DB
connectDB()



app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: process.env.NODE_ENV === "development"
}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!!!`.cyan.bold));
