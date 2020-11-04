import React, { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { MovieForm } from "./components/MovieForm";
import { Container } from "semantic-ui-react";
import Title from './components/Title';

function App() {
  const [movies, setMovies] = useState([]);
  //console.log((movies))
  //console.log(typeof(setMovies))

  useEffect(() => {
    fetch("/movies").then(response =>
      response.json().then(data => {
        setMovies(data.movies);
      })
    );
  }, []);

  return (
    
    
    <Container style={{ marginTop: 40 }}>
      <div classname="App">
        <Title />
      </div>
      
      <MovieForm
        //onNewMovie = { movies }
        onNewMovie={movie =>
          setMovies(currentMovies => [movie, ...currentMovies])
        }
        //console.log(typeof(onNewMovie))

      />
      
      <Movies movies={movies} />
      
    </Container>
   
  );
}

export default App;
