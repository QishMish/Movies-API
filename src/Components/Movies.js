import React from 'react'
import { useGlobalContext  } from "../Context";
import preloader from "../Images/preloader.svg";
import defaultposter from "../Images/defaultposter.png";
import {Link} from "react-router-dom";

export default function Movies() {

    const {isLoading, movies, isError} = useGlobalContext()
       
        const loadingIcon =  <img src={preloader} alt='preloader'/>

        const renderedMovies = movies.map((movie)=>{

        const {Title,Poster,Year, imdbID} = movie

         return <Link to={`/movies/${imdbID}`} key = {imdbID}>
                    <div className='movie'>
                        <div className='poster'>
                                <img  src={Poster === 'N/A' ? defaultposter : Poster} alt={Title}/>
                                <div className='detail'>
                                    <i className="fas fa-play-circle fa-3x"></i>
                                </div>
                        </div>
                            <h2 className='title'>{Title}</h2>
                            <div className='info'>
                                    <i className="fab fa-imdb fa-2x"></i>
                                    <span className='imdbRating'>7.8</span>
                                    <p className='release-date'>{Year}</p>
                            </div>
                            {/* <p className='genre'>Drama, War</p> */}
                        
                    </div>
                </Link>
        })
        

    return (
        <>
            <div className='movies-title'>
                <h1>Movies</h1>
                <span className='strip'></span>
            </div>
            {isError?<div className='center'>Movie Not Found</div> :null}
            {
                isLoading 
                ?<div className='center'> {loadingIcon}</div>  
                :<div className='movies-container'>{renderedMovies}</div>
            }
            
            
                
            
            
            
      </>
    ); 
}
