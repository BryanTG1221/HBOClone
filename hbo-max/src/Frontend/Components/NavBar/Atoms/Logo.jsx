import LogoHBO from './resources/LogoHBO.svg';

export function Logo () {

    return (
        <div className="Logo__Main">
            <div className="Logo__Content">
                <img src={LogoHBO} alt="Your SVG" />
            </div>
        </div>
    )
}