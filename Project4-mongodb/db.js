//code for directly inserting data to db
const express = require('express');
const path = require('path');
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/project3', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'project3.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const uri = "mongodb+srv://dhash:DILU1234hashi@cluster0.c5mwu4v.mongodb.net"; // defining MongoDB connection URI
const dbName = "test"; // defining database name
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function connectToDatabase() {
    try {
      await client.connect();
      console.log("Connected to the database");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  async function insertData(data) {
    const db = client.db(dbName);
    const collection = db.collection("test"); // defining collection name
  
    try {
      const result = await collection.insertOne(data);
      console.log("Inserted data:", result.insertedId);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  }
  
  async function main() {
    await connectToDatabase();
  
    const myobj = { name: "Ajeet Kumar2", age: "28", address: "Delhi" };
    await insertData(myobj);
  
    // Close the connection
    client.close();
  }
  
  main();
  
