import { Logo } from './Atoms/Logo';
import { Options } from './Atoms/Options';
import { Avatar } from './Atoms/Avatar';
import './Atoms/styles/NavBar.css';

export function NavBar () {
    return (
        <div className="NavBar__Main">
            <div className="NavBar__Content">
                <Logo />
                <Options />
                <Avatar />
            </div>
        </div>
    )
}