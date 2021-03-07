import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { SingleMovie_API_KEY } from '../Context';
import preloader from "../Images/preloader.svg";


export default function SingleMovie() {

    const {id}=useParams();
    const [SingleMovie, setSingleMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [disabled, setDisabled] = useState(false)

    const fetchMovie = async (url) =>{
        setLoading(true)
        const response = await fetch(url);
        const data = await response.json();

        setSingleMovie(data)        
        setLoading(false)
    }


    const addToLocalStorage=(params)=>{

        let favorites;

        let exist = localStorage.getItem('favorites')

        if(exist === null){
            favorites = []
        } else {
            favorites = JSON.parse(localStorage.getItem("favorites"))
        }
        favorites.push(params)

        localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    useEffect(() => {

        fetchMovie(`${SingleMovie_API_KEY}&i=${id}`)

    }, [id])

    


    const {Poster,Title,Year,Genre,Country,imdbRating,Director,Plot, imdbID}=SingleMovie



    useEffect(() => {
    
        getFromStorage(imdbID)

    }, [imdbID])

    const getFromStorage = (imdbID) => {

        let added = JSON.parse(localStorage.getItem("favorites"))
        
        

        if(added !== null && added.length !== 0){
            const found = added.find((element) =>{
                if(element.imdbID === imdbID){
                    setDisabled(!disabled)
                }
                
            })
           
        }

    }

    
        

    
    if(loading){
       return <div className='center'><img src={preloader} alt='preloader'/></div>
    }
    return (
        
        <>
            <div className = 'single-movie-container'>
                <div className='poster-container'>
                    <div className='single-movie-poster'>
                        <img src={Poster} alt={Title}/>
                    </div>
                    <div className='add-to-favorites' onClick={()=>getFromStorage(imdbID)}>
                        <button className='favorites-button'
                         disabled={disabled}
                         onClick={()=>addToLocalStorage({Poster,Title,Year,Genre,Country,imdbRating,Director,Plot, imdbID})} 
                         >{disabled ? `Movie Already Added` : `Add To Favorite`}
                        </button>
                    </div>
                </div>
                <div className='movie-info'>
                    <div className='movie-brief'>
                        <div className='single-title'>
                            <h1>{Title}</h1>
                        </div>
                        <div className='release-year'>
                            Released Year : <span>{Year}</span>
                        </div>
                        <div className='movie-genre'>
                            Genre : <span>{Genre}</span>
                        </div>
                        <div className='country'>
                            Country : <span>{Country}</span>
                        </div>
                        <div className='rating'>
                            IMDB Rating : <span>{imdbRating}</span>
                        </div>
                    </div>
                    
                    <div className='director'>
                        Director  : <span>{Director}</span>
                    </div>

                    <div className='description'>
                        Description <p>{Plot}</p>
                    </div>

                </div>
                
            </div>
        </>
    )
}
