import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../useFetch';
import { useHistory } from 'react-router-dom'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const key = process.env.REACT_APP_API_KEY;

export default function SingleMovie() {
    const { id } = useParams()
    const API = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    const CAST = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`

    const IMAGE_API = "https://image.tmdb.org/t/p/w500";

    const { data, error } = useFetch(API, false)
    const { data: persons } = useFetch(CAST, false, true)

    const history = useHistory();

    const back = ()=>{
        history.goBack(-1)
    }

    return (
        <motion.div id="single-main"
            initial={{opacity : 0 , scale: 0.45}}
            animate = {{opacity: 1 , scale: 1}}
            exit={{opacity : 1 , scale:1}}
            transition = {{duration : 0.7}}
        >
            {!data && !error && <div id="loading">Loading....</div>}
            {error && <div>{error}</div>}
            {data &&
                <div className="single-container">
                    <button onClick={back} id="goBack"><FontAwesomeIcon icon="arrow-left"/></button>
                    <h1 id="single-title">{data.title}</h1>
                    <img src={`${IMAGE_API}/${data.backdrop_path}`} alt="movie poster" id="movie-backdrop" />
                    <p id="single-overview">{data.overview}</p>
                    <h2 id="vote">Vote average: <span >{data.vote_average}</span></h2>
                    <hr/>
                    <div id="photo-container">
                        <h2 id="photo-title">Cast</h2>
                        {persons && persons.map((person, index) => {
                            if (person.profile_path != null) {
                                return (
                                    <div key={index} id="main-photo">
                                        <div id="photo-div">
                                            <img src={`${IMAGE_API}/${person.profile_path}`} id="profile" alt={person.profile_path}/>
                                        </div>
                                        <h3 id="person-name">{person.name}</h3>
                                    </div>
                                )
                            }
                        })}</div>
                </div>}
        </motion.div>
    )
}
