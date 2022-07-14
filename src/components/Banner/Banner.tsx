import { useState, useEffect } from "react"

import { movieApi, requests } from "../../api/";

import { NetflixOriginals, OriginalsResult } from '../../interfaces/';

import { truncateDesc } from '../../utils';

import "./Banner.css";

const Banner = () => {

  const [movie, setMovie] = useState<OriginalsResult | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<NetflixOriginals> => {
      
      const { data } = await movieApi.get<NetflixOriginals>(requests.fetchNetflixOriginals);
      
      let position = Math.floor( Math.random() * data.results.length - 1 ) 

      if (position < 0) {        
        setMovie(data.results[0]);        
      } else {
        setMovie(data.results[position]);        
      }
      
      return data;
    }    

    fetchData();
  }, []);

  return movie && (    
    <header className="banner" style={{ 
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,      
      backgroundSize: "cover ",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          { movie?.name || movie?.original_name }
        </h1>
        <p className="banner__description">
          {
            truncateDesc( movie?.overview , 150)
          }
        </p>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>

      <div className="banner--fadeBottom" />

    </header>
  )
}
export default Banner