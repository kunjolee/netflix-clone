import { useState, useEffect } from 'react';
import { movieApi } from '../../api';
import { MovieResult, MovieType } from '../../interfaces/';
import { truncateDesc } from '../../utils'; 

import './Row.css'

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const BASE_URL = 'https://image.tmdb.org/t/p/original/';
const NO_NAME_MESSAGE = "No Name Available"

const Row = ({ title, fetchUrl, isLargeRow = false }: Props) => {

  const [movies, setMovies] = useState<MovieResult[] | null>(null);  

  useEffect(() => {

    const fetchData = async (): Promise<MovieType> => {
      const { data } = await movieApi.get<MovieType>(fetchUrl);
      
      setMovies(data.results)
      
      return data;
    }

    fetchData();
  }, [fetchUrl]);
  
  return movies && (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>        
        {movies.map((movie) =>          
          ((isLargeRow && movie.poster_path)  ||
            (!isLargeRow && movie.backdrop_path)) && (
              <div className='row__poster-container'  key={movie.id}>
                <img
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}                 
                  src={`${BASE_URL}${ isLargeRow ? movie?.poster_path : movie?.backdrop_path }`} 
                  alt={movie.name}
                />  
                <p className='row__name row__details'>
                  {
                    title === "NETFLIX ORIGINALS"
                    ? movie.name || NO_NAME_MESSAGE
                    : movie.title || NO_NAME_MESSAGE  
                  }
                </p>
                <p className='row__rate row__details'>⭐{movie.vote_average.toFixed(1)}</p>
                <p className='row__description row__details'>{truncateDesc(movie.overview, 50)}</p>     
              </div>
          )                    
        )}
      </div>      
    </div>
  )
}
export default Row