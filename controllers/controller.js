const Cat = require('../models/cat');

async function getAllCats(req, res) {
    try {
        const cats = await Cat.getAllCats();
        res.json(cats);
    } catch (error) {
        console.error('Error fetching cats:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function createCat(req, res) {
    try {
        const catData = req.body;
        const result = await Cat.createCat(catData);
        res.send('Cat created successfully');
    } catch (error) {
        console.error('Error creating cat:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { getAllCats, createCat };
