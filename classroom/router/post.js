const express = require('express');
const router = express.Router();

// INDEX - Get all posts
router.get('/', (req, res) => {
    res.send("GET request for all posts");
});

// SHOW - Get a specific post by ID
router.get('/:id', (req, res) => {
    res.send("GET request for post with ID: " + req.params.id);
});

// CREATE - Create a new post
router.post("/", (req, res) => {
    res.send("POST request to create a new post");
});

// DELETE - Delete a specific post by ID
router.delete("/:id", (req, res) => {
    res.send("DELETE request for post with ID: " + req.params.id);
});

module.exports = router;
