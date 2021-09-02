const { MongoClient } = require('mongodb');

const MONGO_URL = process.env.MONGO_URL;
const MONGO_DATABASE = process.env.MONGO_DATABASE;

const client = new MongoClient(MONGO_URL);

async function connect() {
  await client.connect();
  console.log('Connected successfully to server');
  return client.db(MONGO_DATABASE);
}

module.exports = {
  connect
}
