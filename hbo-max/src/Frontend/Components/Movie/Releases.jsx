import { Link } from "react-router-dom"

export function Release ({path}) {
    return (
        <div className="Release__Main">
            <div className="Release__Content">
                <Link to={'/PYB'}>
                    <img src={path} alt="release" />
                </Link>
            </div>
        </div>
    )
}