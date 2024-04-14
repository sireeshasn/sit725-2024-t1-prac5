const { client } = require('../dbconnection');

const db = client.db('test');
const collection = db.collection('Cat');

async function getAllCats() {
    return await collection.find({}).toArray();
}

async function createCat(catData) {
    return await collection.insertOne(catData);
}

module.exports = { getAllCats, createCat };
