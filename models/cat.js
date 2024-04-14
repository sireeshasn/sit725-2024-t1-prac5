const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://sireesha2622:Siri12345@cluster0.ekefhyn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


async function createCat(catData) {
    let client;

    try {
       
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

        await client.connect();

        const database = client.db('test'); 
        const catsCollection = database.collection('Cat');

        const result = await catsCollection.insertOne(catData);
        console.log('Cat created successfully:', result.insertedId);

        return result;
    } catch (error) {
        console.error('Error creating cat:', error);
        throw error;
    } finally {
        await client.close();
    }
}

module.exports = { createCat };

