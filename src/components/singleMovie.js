import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../useFetch';
const key = process.env.REACT_APP_API_KEY;

export default function SingleMovie() {
    const { id } = useParams()
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`

    const IMAGE_API = "https://image.tmdb.org/t/p/w500";

    const { data, error } = useFetch(API , false)

    return (
        <div>
            {!data && !error && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {data &&
                <div className="single-container">
                    <h1 id="single-title">{data.title}</h1>
                    <img src={`${IMAGE_API}/${data.backdrop_path}`} alt="movie poster" id="movie-backdrop"/>
                    <p>{data.overview}</p>
                </div>}
        </div>
    )
}
