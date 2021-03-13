import React from 'react'
import useFetch from '../useFetch'
import { motion } from "framer-motion"
import { Link} from 'react-router-dom';
const key = process.env.REACT_APP_API_KEY;

export default function Movies() {

    const API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=1`;

    const { data, error } = useFetch(API , true)
    const IMAGE_API = "https://image.tmdb.org/t/p/w500";

    return (
        <motion.div id="container"
            initial={{ 
                opacity: 0,
                scale:0.3
            }}
            animate={{
                 opacity: 1,
                  scale:1
                }}
            exit={{ 
                opacity: 1,
                scale:1 
            }}
            transition={{ duration: 0.8 }}
        >
            {!data && !error && <div>Loading</div>}
            {error && <div>{error}</div>}
            {data &&
                data.map((movie, index) => {
                    return (
                        <Link to={`movies/${movie.id}`} id="link-container" key={index}>
                            <div  id="movie-container">
                            <h1 id="title">{movie.title}</h1>
                            <img src={`${IMAGE_API}${movie.backdrop_path}`} alt="" id="poster" />
                            <p id="overview">{movie.overview}</p>
                        </div>
                        </Link>
                    )
                })
            }
        </motion.div>
    )
}
