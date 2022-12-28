import { Header } from './Header/Header';
import { Movie } from './Movie/Movie';
import { Release } from './Movie/Releases';

import pacemaker from './Movie/resources/1.png'; 
import euphoria from './Movie/resources/2.png'; 
import drive from './Movie/resources/3.png'; 
import dune from './Movie/resources/4.png'; 
import moneyheist from './Movie/resources/5.png'; 
import tickBom from './Movie/resources/6.png'; 
import monnfall from './Movie/resources/releases/1.png';
import kingRichard from './Movie/resources/releases/Rectangle.png';
import archivo81 from './Movie/resources/releases/3.png';
import ticktickBom from './Movie/resources/releases/4.png';

export function HomePage () {
    return (
        <>
            <Header />  
            <div className='popularCollections__Main'>
                <div className='popularCollections__Content'>
                    <h3 className='titleSection'>Popular Collections</h3>
                    <div className='MoviesRow'>
                        <Movie path={pacemaker}/>
                        <Movie path={euphoria}/>
                        <Movie path={drive}/>
                        <Movie path={dune}/>
                        <Movie path={moneyheist}/>
                        <Movie path={tickBom}/>
                    </div>
                </div>
            </div>
            <div className='popularCollections__Main'>
                <div className='popularCollections__Content'>
                    <h3 className='titleSection'>New Release</h3>
                    <div className='MoviesRow'>
                        <Release path={monnfall} />
                        <Release path={kingRichard} />
                        <Release path={archivo81} />
                        <Release path={ticktickBom} />
                    </div>
                </div>
            </div>
        </>

    )
}