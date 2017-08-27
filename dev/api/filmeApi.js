class FilmeApi {
    static getAllFilme() {
        const request = new Request(`http://localhost:3000/movies`, {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        });

        return fetch(request).then(response => {
          return response.json();
        }).catch(error => {
          return error;
        });
    }
    static updateFilm(film) {
        let data = {id:film.id, title: film.title, year: film.year, description: film.description, poster: film.poster, trailer:film.trailer, nota: film.nota};
        const request = new Request(`http://localhost:3000/movies/${film.id}`, {
          method: 'PUT',
          mode: 'CORS',
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(data)
        });
        return fetch(request).then(response => {
          return response.json();
        }).catch(error => {
          return error;
        });
    }
    static createFilm(film) {
        let data = {id:film.id, title: film.title, year: film.year, description: film.description, poster: film.poster, trailer:film.trailer, nota: film.nota};
        const request = new Request('http://localhost:3000/movies/', {
          method: 'POST',
          mode: 'CORS',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(data)
        });
        return fetch(request).then(response => {
          return response.json();
        }).catch(error => {
          return error;
        });
    }
    static deleteFilm(film) {
      const request = new Request(`http://localhost:3000/movies/${film.id}`, {
        method: 'DELETE'
      });
      return fetch(request).then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}
export default FilmeApi;