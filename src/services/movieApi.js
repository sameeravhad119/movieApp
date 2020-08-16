const { default: Api } = require(".");

class MovieApi extends Api {
    getMovies() {
        this.fetch('user/getMovie')
    }
}
export default MovieApi;