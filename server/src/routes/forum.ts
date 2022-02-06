import express from 'express';

const forum = express.Router();

forum.get('/api/forum', (req, res) => {
    res.send('Hello from forum router');
})

export default forum;