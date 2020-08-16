const fetchHeader = { "Content-Type": "application/json" };

class Api {
    fetch(url, method, body) {
        let options = {
            method: method,
            body: body,
            headers: fetchHeader,
            credentials: 'same-origin'
        }
        return fetch('/api/' + url, options).then(response => response.json());
    }
}
export default Api;