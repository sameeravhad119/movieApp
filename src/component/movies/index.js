import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Movies extends Component {


    render() {
        return (
            <div>
                View all Movies
            </div>
        )
    }
}
export default Movies;
// export default process.env.NODE_ENV === 'development' ? hot(Movies) : Movies;