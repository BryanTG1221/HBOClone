import { Route, Routes } from 'react-router-dom';

import './Styles/App.css'
import { NavBar } from './Components/NavBar/NavBar';
import { HomePage } from './Components/homepage';
import { FinalPage } from './Components/FinalPage';


export function App () {
    return (
        <div className="App__Main" id='MainWallpapaer'>
            <div className="App__Content">
                <NavBar />
                <Routes>
                    <Route path='/' element= { <HomePage /> }/>
                    <Route path='/PYB' element= { <FinalPage /> }/>
                </Routes>
            </div>
        </div>
    )
}