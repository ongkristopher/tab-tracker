import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());          // enable CORS
app.use(express.json());  // built-in body parser

app.post('/register', (req, res) => {
    const { email } = req.body;
    res.json({ message: `Hello ${email}! You were registered!` });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
