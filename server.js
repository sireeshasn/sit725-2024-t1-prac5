const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const uri = "mongodb+srv://sireesha2622:Siri12345@cluster0.ekefhyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = process.env.PORT || 3000;
let collection;

app.use(express.static(__dirname)); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function runDBConnection() {
  try {
    await client.connect();
    collection = client.db().collection('Cat');
    console.log(collection);
  } catch (ex) {
    console.error(ex);
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
});


app.get('/api/cats', async (req, res) => {
  try {
    
    const cats = await collection.find({}).toArray();
    res.json(cats);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post('/api/cats', async (req, res) => {
  try {
    const catData = req.body;
    await collection.insertOne(catData); 
    console.log("Cat post successful");
    res.send("Cat post successful");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  runDBConnection();
});
