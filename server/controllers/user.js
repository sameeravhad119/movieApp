const movies = require("../models/movies");

class User {

    static signUp(req, res, next) {
        res.send('sign up');
    }

    static addMovie(req, res, next) {
        console.log('req.body', req.body);
        let popularity = req.body.popularity;
        let director = req.body.director;
        let genre = ['abc', 'xyz']//req.body.genre;
        let imdb_score = req.body.imdb_score
        let name = req.body.name;

        const movie = new movies({
            popularity: popularity,
            director: director,
            genre: genre,
            imdb_score: imdb_score,
            name: name,
        });

        movie.save().then(movie => {
            res.send(movie);
        }).catch(error => {
            next(error);
        })
    }

    static async getMovie(req, res, next) {
        try {
            console.log('getMovies');
            let movieList = await movies.find().exec();
            console.log('movieList', movieList);
            res.send({
                data: movieList,
                status: true,
                message: 'Success'
            })
        } catch (error) {
            next(error)
        }
    }


}
module.exports = User;