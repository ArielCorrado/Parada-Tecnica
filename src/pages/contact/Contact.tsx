import "./contact.css";

function Contact () {

    return (
        <div className="contactCont flex column">
            <div className='seccionsPadding flex column'>
                <p className="activitiesTitle2">CONTACTANOS</p>
                <div className="activitiesDescCont flex column">
                    <p>¡Escribinos <span className="textBold">  por cualquiera de nuestras redes! </span></p>
                </div>
                <div className='contactNetworksCont flex'>
                    <img src="/images/icons/facebook.png" alt="Facebook icon" className='contactNetworksIcon'/>
                    <img src="/images/icons/instagram.png" alt="Instagram icon" className='contactNetworksIcon'/>
                    <img src="/images/icons/tiktok.png" alt="Tik Tok icon" className='contactNetworksIcon'/>
                    <img src="/images/icons/ws.png" alt="Whatsapp icon" className='contactNetworksIcon'/>
                </div>
            </div>
            <div className="contactFreeClassCont">
                <img src="/images/free.jpg" alt="Free class" className="contactFreeClassImg"/>
                <div className="contactFreeClassTextCont flex">
                    <p className="contactFreeClassText"> !Probá una clase <span className="contactFreeClassTextFree">GRATIS!</span></p>
                </div>
            </div>
            <iframe title="Map" className="contactMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4683.735566790299!2d-60.56485257145868!3d-33.892198786822675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9b51bffda85a7%3A0xb30f444d963b1870!2sEscuela%20de%20escalada%20pergamino!5e0!3m2!1ses-419!2sar!4v1707869375868!5m2!1ses-419!2sar"></iframe>
            <div className="flex contactParadaLogo">
                <img src="/images/logo.png" alt="Logo" className="homeMainLogo" />
                <div className="homeMainDivider"></div>
                <div className="homeMainTexts flex column">
                    <p className="homeMainText1">Parada</p>
                    <p className="homeMainText1 cursive">técnica</p>
                </div>
            </div>
            <img src="/images/escala.jpg" alt="Scala" className="contactScalaImg"/>
        </div>
    )
}

export default Contact