import './Styles/App.css'
import { NavBar } from './Components/NavBar/NavBar';
import { Header } from './Components/Header/Header';

export function App () {
    return (
        <div className="App__Main">
            <div className="App__Content">
                <NavBar />
                <Header />
            </div>
        </div>
    )
}