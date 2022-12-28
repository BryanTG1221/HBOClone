import { Link } from 'react-router-dom';
import './styles/options.css';


export function Options () {
    return (
        <div className="Options__Main">
            <ul className="Options__Content">
                <Link to={'/PYB'} className='Link'>
                    <li>Movies</li>
                </Link>
                <Link to={'/PYB'} className='Link'>
                    <li>TV shows</li>
                </Link>
                <Link to={'/PYB'} className='Link'>
                    <li>Animations</li>
                </Link>
                <Link to={'/PYB'} className='Link'>
                    <li>Upgrade</li>
                </Link>
            </ul>
        </div>
    )
}