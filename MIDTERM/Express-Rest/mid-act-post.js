const express = require('express');
const app = express();
app.use(express.json());

// get all movies
app.get('/api/movies', (req, res) =>{
    res.send(movies);
});


//Array for GET Method
const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Thor'
},
{
    id: 3,
    title: 'Iron Man'
}
];


app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});


app.listen(3000, () => console.log('Listening on port 3000'));  