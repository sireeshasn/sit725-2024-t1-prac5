const { MongoClient } = require('mongodb');

async function createCat(catData, uri) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('yourDatabaseName');
        const collection = database.collection('cats');
        
        // Insert the cat data into the MongoDB collection
        const result = await collection.insertOne(catData);
        console.log('Cat created successfully');
        return result;
    } catch (error) {
        console.error('Error creating cat:', error);
        throw error;
    } finally {
        await client.close();
    }
}

module.exports = { createCat };
