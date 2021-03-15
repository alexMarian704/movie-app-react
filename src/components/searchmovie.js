import React, { useState } from 'react'
import useFetch from '../useFetch';
import { Link } from 'react-router-dom';
const key = process.env.REACT_APP_API_KEY;

export default function Searchmovie() {
    const [search, setSearch] = useState('');

    const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=${search}`;
    const TOPMOVIES = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
    const IMAGE_API = "https://image.tmdb.org/t/p/w500";

    const { data, error } = useFetch(search ? `${SEARCHAPI}` : `${TOPMOVIES}`, true, false, search)

    const change = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <div>
                <div id="container">
                    <div id="search-container">
                        <label> Search movie</label>
                        <br />
                        <input type="text" id="search" onChange={change} value={search} autoComplete="off" autoCorrect="off" />
                    </div>
                    {!data && !error && <div>Loading...</div>}
                    {error && <h1>{error}</h1>}
                    {data &&
                        data.map((movie, index) => {
                            if (movie.backdrop_path != null) {
                                return (
                                    <Link to={`movies/${movie.id}`} id="link-container" key={index}>
                                        <div id="movie-container">
                                            <h1 id="title">{movie.title}</h1>
                                            <img src={`${IMAGE_API}${movie.backdrop_path}`} alt="" id="poster" />
                                            <p id="overview">{movie.overview}</p>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
