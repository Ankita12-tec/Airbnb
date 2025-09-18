const express = require('express');
const router = express.Router();

// INDEX - Get all users
router.get('/', (req, res) => {
    res.send("GET request for all users");
});

// SHOW - Get a specific user by ID
router.get('/:id', (req, res) => {
    res.send("GET request for user with ID: ");
});

// CREATE - Create a new user
router.post("/", (req, res) => {
    res.send("POST request to create a new user");
});

// DELETE - Delete a specific user by ID
router.delete("/:id", (req, res) => {
    res.send("DELETE request for user with ID: ") ;
});

module.exports = router;
