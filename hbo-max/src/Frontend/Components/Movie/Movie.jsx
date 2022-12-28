import { Link } from 'react-router-dom';

export function Movie ({path}) {
    return (
        <div className="Movie__Main">
            <div className="Movie__Content">
                <Link to={'/PYB'}>
                    <img src={path} alt="pelicula" />
                </Link>
            </div>
        </div>
    )
}