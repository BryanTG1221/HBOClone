

export function FinalPage () {

    const path = window.location.href;
    const lastPart = path.split('/').pop();
    console.log(lastPart);

    if (lastPart === 'PYB') {
        //add class to the div
        document.querySelector('.App__Main').classList.add('PYBClass');

    }

    return (
        <>
            <div className="PYB__Main">
                <div className="PYB__Content">
                    <p className='info1'>2022 | PG-18 | SIEMPRE</p>
                    <h1 className='titleMovie'>PAOLA + BRYAN</h1>
                    <p className='info2'>Action | Adventure | Fantasy</p>
                    <p className='info3'>Holaaa, se que fue algo inesperado este momento, pero la verdad me encanta pasar tiempo a tu lado y quisiera estar mas tiempo contigo, te aprecio muchisimo te admiro, te quiero
                    y eres una person super importante en mi vida asi que creo que llego el momento debido mas deseado y es que por fin podamos formar algo juntos hoy y siempre, en verdad te adoro y eres super linda conmigo
                    no se como agradecerte tantas cosas pero de algo estoy seguro y es que te QUIERO MUCHO, si quieres saber mas baja un poco mas.</p>  
                </div>
            </div>
            <div className="PYB_Question">
                <h1 className="h1Final">¿Quieres ser mi novia?</h1>
            </div>

        </>
    )
}