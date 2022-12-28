import './styles/header.css';
import LogoIMBN from './resources/IMDB.png';
import { BsPlayCircle } from "react-icons/bs";


export function Header () {
    return (
        <div className="Header__Main">
            <div className="Header__Content">
                <p className='info1'>2021 | PG-13 | 2h 28m</p>
                <h1 className='titleMovie'>SPIDER-MAN: NO WAY HOME</h1>
                <p className='info2'>Action | Adventure | Fantasy</p>
                <div className='IMDB-Content'>
                    <img src={LogoIMBN} alt='logoIMB' className='IMDb-Content'/>
                    <p className='calificacion'>8.5</p>
                </div>
                <button className='btnTrailer'><BsPlayCircle /> Watch Now</button>
            </div>
        </div>
    )
}