
import React from 'react'
import Movie from '../components/Movie';

async function Movies() {
    const moviesData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)

    const response = await moviesData.json();
  return (
    <div>
        <h1>List of Movies</h1>
        <div className='grid gap-4 grid-cols-fluid'>
        {response.results.map((movie:any) => (
            <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            />
        ))}
        </div>
    </div>

  )
}

export default Movies
