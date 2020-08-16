const { default: Api } = require(".");

class MovieApi extends Api {
    getMovies() {
        return this.fetch('user/getMovie')
    }
}
export default MovieApi;