import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(
    3000,
    '0.0.0.0', // listen on all network interfaces for Docker
    () => {
        console.log('App is running!');
    },
);
