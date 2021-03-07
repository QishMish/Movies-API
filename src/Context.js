import React, { useState, useContext, useEffect } from 'react';


export const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
export const SingleMovie_API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('horror');

  const fetchMovies = async (url) => {
    
    setIsLoading(true);

        try {
            const response = await fetch(url);
            const data = await response.json();

        if (data.Response === 'True') {
            setMovies(data.Search);
            setIsError(false);
        } else {
            setIsError(true);
        }
    setIsLoading(false);
    
        } catch (error) {
        
            console.log(error);
        }
  };

  
    useEffect(() => {
        fetchMovies(`${API_KEY}&s=${query}`);
      }, [query]);
   


    return (
        <AppContext.Provider
          value={{ isLoading, isError, movies, query, setQuery }}
        >
          {children}
        </AppContext.Provider>
      );
    };

export const useGlobalContext = () => {
      return useContext(AppContext);
};
    
export { AppContext, AppProvider };