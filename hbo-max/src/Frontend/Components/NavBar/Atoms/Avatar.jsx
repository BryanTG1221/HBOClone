import './styles/avatar.css';
import avatar from '../../resources/avatar.png'

export function Avatar () {
    return (
        <div className="Avatar__Main">
            <div className="Avatar__Content">
                <img src={avatar} alt="Imagen" className='avatarPNG'/>
            </div>
        </div>
    )
}