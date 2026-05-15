import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

//get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "What do you call a fake noodle? An impasta!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",                     
        "Why don't skeletons fight each other? They don't have the guts!",
        "What do you call cheese that isn't yours? Nacho cheese!"
    ];
    res.json(jokes);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
