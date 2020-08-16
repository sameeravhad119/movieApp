import React, { Component } from 'react'
import './movie.css';

class Movie extends Component {
    render() {
        const { name, director, popularity, imdb_score, _id, genre = [] } = this.props.movie;
        return (
            <div className={'movieCard'}>
                <div>
                    <span>Name: </span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>Director: </span>
                    <span>{director}</span>
                </div>
                <div>
                    <span>Popularity: </span>
                    <span>{popularity}</span>
                </div>
                <div>
                    <span>Imdb Score: </span>
                    <span>{imdb_score}</span>
                </div>
                <div>
                    <span>Genre: </span>
                    <span>{genre.map(value => <span>{value} </span>)}</span>
                </div>

            </div>
        )
    }
}
export default Movie;