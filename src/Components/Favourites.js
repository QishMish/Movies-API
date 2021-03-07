import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";

export default function Popular() {

    const [popularMovies, setPopularMovies] = useState([])

 

    const getLocalStorageMovies = ()=>{
        let data = [];

         data =  JSON.parse(localStorage.getItem('favorites'))

        setPopularMovies(data)
    }

    

    useEffect(() => {
       
       
        getLocalStorageMovies()
         

    }, [])
    

    const deleteMovieHandler=(id)=>{
        let getDataToDelete =  JSON.parse(localStorage.getItem('favorites'))

        let filteredData = getDataToDelete.filter((el)=>{
           return el.imdbID !== id
        })

        localStorage.setItem('favorites', JSON.stringify(filteredData))
        getLocalStorageMovies()
    }

    

    if(popularMovies !== null && popularMovies.length !== 0){
        return (
            <>
                <div className='movies-title'>
                    <h1>Favourites</h1>
                    <span className='strip'></span>
                </div>
                <div className='movies-container'>
                    {
                        popularMovies.map((item, index)=>{

                            const{Poster,Title, Year, imdbID} = item;

                                return (
                                    <article key={index}>
                                            <div className='movie'>
                                                <Link to={`/movies/${imdbID}`}>
                                                    <div className='poster'>
                                                            <img  src={Poster} alt={Title} />
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
                                                </Link>
                                                
                                                <div className='delete' onClick={()=>deleteMovieHandler(imdbID)}>
                                                    <div className='delete-icon'>
                                                        <i className="fas fa-trash-alt fa-2x"></i>
                                                    </div>
                                                    <button className='delete-button'>
                                                        Delete Movie
                                                    </button>
                                                </div>
                                            </div>                                        
                                    </article>
                            );
                        })
                    }
                </div>
            </>
        )
    }

    return (

        <>
        
           <div  className = 'empty-favourites'>No Favorites Movie</div>
        
            
        </>
        
    )
}
