import { useState, useEffect, MouseEvent, useRef } from 'react';

import { movieApi } from '../../api';
import { MovieResult, MovieType, Trailers } from '../../interfaces/';
import { truncateDesc } from '../../utils';

import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';



import './Row.css';

interface Props {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

interface Trailer {
  url: string;
  name: string;
}

const BASE_URL = 'https://image.tmdb.org/t/p/original/';
const NO_NAME_MESSAGE = 'Name not available';
const NO_TRAILER_MESSAGE = 'Trailer not available';

const Row = ({ title, fetchUrl, isLargeRow = false }: Props) => {
  const [movies, setMovies] = useState<MovieResult[] | null>(null);
  const [trailer, setTrailer] = useState<Trailer>({ name: '', url: '' });
  const [handleTrailer, setHandleTrailer] = useState(false);
  const [errorTrailer, setErrorTrailer] = useState<string | null>('');
  
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async (): Promise<MovieType> => {
      const { data } = await movieApi.get<MovieType>(fetchUrl);

      setMovies(data.results);

      return data;
    };

    fetchData();
  }, [fetchUrl]);



  const showTrailer = async (e: MouseEvent<HTMLSpanElement>, id: string) => {
    try {
      const { data } = await movieApi.get<Trailers>(
        `/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      const { results } = data;

      if (results.length > 0) {
        setHandleTrailer(true);
        setTrailer({
          name: results[0].name,
          url: results[0].key,
        });
      } else {
        setHandleTrailer(false);
        setErrorTrailer(NO_TRAILER_MESSAGE);
      }
    } catch (error) {
      setHandleTrailer(false);
      setErrorTrailer(NO_TRAILER_MESSAGE);
    }
  };

  const closeTrailer = () => {
    setTimeout(() => {
      setHandleTrailer(false);
      setErrorTrailer(null);
    }, 500);
  };

  
  

  const moveRight = () => {        
    if (posterRef.current === null) return; 
    posterRef.current.scrollLeft = posterRef.current.scrollLeft + 500;                        
  }
  
  const moveLeft = () => {
    if (posterRef.current === null) return; 
    posterRef.current.scrollLeft = posterRef.current.scrollLeft - 500;                             
  }
  return (
    movies && (
      <>
        <div className='row'>
          <div className='row__container'>
            <h2>{title}</h2>
            <div className='row__scroll'>            
                <img src={leftArrow} alt='left-arrow' onClick={moveLeft}/>                        
                <img src={rightArrow} alt='right-arrow' onClick={moveRight}/>            
            </div>          
          </div>
          <div 
            className='row__posters' 
            ref={posterRef}            
          >          
            {movies.map(
              (movie) =>
                ((isLargeRow && movie.poster_path) ||
                  (!isLargeRow && movie.backdrop_path)) && (
                  <div className='row__poster-container' key={movie.id}>
                    <img
                      className={`row__poster ${
                        isLargeRow && 'row__posterLarge'
                      }`}
                      src={`${BASE_URL}${
                        isLargeRow ? movie?.poster_path : movie?.backdrop_path
                      }`}
                      alt={movie.name}
                    />
                    <p className='row__name row__details'>
                      {title === 'NETFLIX ORIGINALS'
                        ? movie.name || NO_NAME_MESSAGE
                        : movie.title || NO_NAME_MESSAGE}
                    </p>
                    <p className='row__rate row__details'>
                      ⭐{movie.vote_average.toFixed(1)}
                    </p>
                    <p className='row__description row__details'>
                      {truncateDesc(movie.overview, 50)}
                      <span
                        className='row__seeMore'
                        onClick={(e) => showTrailer(e, movie.id)}
                      >
                        {' '}
                        see more
                      </span>
                    </p>
                  </div>
                )
            )}                          
          </div>
          {handleTrailer && (
            <div className='row__trailer' onMouseLeave={closeTrailer}>
              <iframe
                title={trailer.name}
                width='420'
                height='315'
                src={`https://www.youtube.com/embed/${trailer.url}`}
                className=''
              ></iframe>
            </div>
          )}
          {errorTrailer && (
            <p className='row__errorTrailer' onMouseLeave={closeTrailer}>
              {errorTrailer}
            </p>
          )}
        </div>
      </>
    )
  );
};
export default Row;
