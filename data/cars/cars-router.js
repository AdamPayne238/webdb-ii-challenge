const express = require('express');

const knex = require('../dbConfig.js');

const router = express.Router();

// WORKING
router.get('/', (req, res) => {
    knex
    .select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json(cars)
})
.catch(error => {
    res.status(500).json({ error: "failed to get cars from database"})
})
});

// WORKING
router.get('/:id', (req, res) => {
    knex
    .select('*')
    .from('cars')
    .where('id', '=', req.params.id)
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to locate car by that id"})
    })
});

// WORKING // Requires Make and Model // Sets others to null by default
router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to insert car"})
    })
});

// WORKING
router.delete('/:id', (req, res) => {
    knex('cars')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to delete"})
    })
});

// WORKING
router.put('/:id', (req, res) => {
    const changes = req.body;

    knex('cars')
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ err: "failed to update car"})
    })
});

module.exports = router;
