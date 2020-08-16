import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { getMovieList } from '../../../redux/actions/movies';
import Movie from '../../organism/movie';
import GenreChips from '../../organism/genreChips';
import produce from 'immer';
import SearchBar from '../../organism/searchBar';
import { sortOptions, sort } from '../../../helper/constant';
import SortOptions from '../../organism/sortOptions';
import _ from 'lodash';

class Movies extends Component {
    constructor(props) {
        super();
        this.state = {
            movies: [],//this.props.movies
            genreList: [],//all
            selectedGenreList: [],//selected genre

            searchText: '',//movie or director name
            sortBy: '',//pop,dir,movie
        }
    }
    componentDidMount() {
        this.props.getMovieList()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.movies !== this.props.movies) {
            let genreSet;
            let genreArray = [];
            this.props.movies.forEach(({ genre }) => {
                let tempGenre = genre.map(value => value.trim())
                genreArray = [...genreArray, ...tempGenre];
            })

            genreSet = new Set(genreArray);
            genreArray = Array.from(genreSet);

            this.setState({
                movies: this.props.movies,
                genreList: genreArray//distinct genre
            })
        }
    }

    handleClickOnChip = (value) => {
        this.setState(prevState => produce(prevState, draft => {
            let index = draft.selectedGenreList.indexOf(value);
            if (index > -1) {//prev present now remove
                draft.selectedGenreList.splice(index, 1);
            } else {//prev not.now add
                draft.selectedGenreList.push(value);
            }
        }))

    }

    clickOnSearch = () => {

    }

    handleInputChange = (e) => {
        let { value } = e.currentTarget;
        this.setState({
            searchText: value
        })
    }

    setSortOption = (value) => {
        this.setState(prevState => produce(prevState, draft => {
            if (draft.sortBy === value) {
                draft.sortBy = '';
            } else {
                draft.sortBy = value
            }
        }))
    }

    calculateMovieList = () => {
        let allMovies = this.state.movies;
        let calculatedMovies = [];

        //#region genre chip filter
        if (this.state.selectedGenreList.length > 0) {//chips are selected
            allMovies.forEach(movie => {
                let movieGenre = movie.genre;//each movie genre
                let found = true;
                for (let i = 0; i < this.state.selectedGenreList.length; i++) {
                    if (movieGenre.indexOf(this.state.selectedGenreList[i].trim()) < 0) {//not found
                        found = false;
                        break;
                    }
                }
                if (found) {
                    calculatedMovies.push(movie);
                }

            })

        } else {
            calculatedMovies = allMovies;
        }
        //#endregion

        // #region search term filter 
        if (this.state.searchText) {
            calculatedMovies = calculatedMovies.filter(movie => {
                let name = movie.name;
                let director = movie.director;

                let regExp = new RegExp(this.state.searchText, 'gi')

                return (regExp.test(name) || regExp.test(director));

            })
        }
        //#endregion

        //#region sort option selected
        if (this.state.sortBy) {
            switch (this.state.sortBy) {
                case sort.popularity:
                    calculatedMovies = _.sortBy(calculatedMovies, ['popularity'])
                    break;
                case sort.movie:
                    calculatedMovies = _.sortBy(calculatedMovies, ['name'])
                    break;
                case sort.director:
                    calculatedMovies = _.sortBy(calculatedMovies, ['director'])
                    break;
                default:

            }

        }
        console.log('calculatedMovies', calculatedMovies);
        return calculatedMovies;
    }


    render() {
        let calculatedList = this.calculateMovieList();
        console.log('calculatedList', calculatedList)
        return (
            <>
                <GenreChips
                    allChips={this.state.genreList}
                    selectedChips={this.state.selectedGenreList}
                    handleClick={this.handleClickOnChip}
                />

                <SearchBar
                    searchText={this.state.searchText}
                    onChange={this.handleInputChange}
                />

                <SortOptions
                    options={sortOptions}
                    sortBy={this.state.sortBy}
                    setSortOption={this.setSortOption}
                />

                {/* <div onClick={this.clickOnSearch}>Search</div> */}

                {
                    calculatedList.length > 0
                        ?
                        calculatedList.map((movie, index) => <Movie key={movie._id} movie={movie} />)
                        : <></>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies || []
})

const mapDispatchProps = (dispatch) => ({
    getMovieList: () => dispatch(getMovieList())
})

export default connect(mapStateToProps, mapDispatchProps)(Movies);
// export default process.env.NODE_ENV === 'development' ? hot(Movies) : Movies;