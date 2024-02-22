import "./footer.css";

function Footer() {
    return (
        <div className="footerCont flex column OoS">
            <div className="flex contactParadaLogo logoFooterCont">
                <img src="/images/logo2.png" alt="Logo" className="homeMainLogo logoFooter" />
                <div className="homeMainDivider"></div>
                <div className="homeMainTexts flex column">
                    <p className="homeMainText1">Parada</p>
                    <p className="homeMainText1 cursive">técnica</p>
                </div>
            </div>
            <div className="footerDescCont flex column">
                <p>Muro de escalada en</p>
                <p>Pergamino, BA</p>
            </div>
            <div className="footerLine"></div>
            <div className="footerNetworksCont flex wrap">
                <a className="footerNetworkCont flex" href="https://www.facebook.com/profile.php?id=100093172881580" target="_blank" rel="noreferrer">
                    <img src="/images/icons/facebook.png" alt="Facebook" className="footerIcons"/>
                    <p className="footerNetworksText">Parada Técnica</p>
                </a>
                <a className="footerNetworkCont flex" href="https://www.instagram.com/paradatecnica_/" target="_blank" rel="noreferrer">
                    <img src="/images/icons/instagram.png" alt="Instagram" className="footerIcons"/>
                    <p className="footerNetworksText">paradatecnica_</p>
                </a>
                <a className="footerNetworkCont flex" href="https://www.tiktok.com/@parada.tecnica" target="_blank" rel="noreferrer">
                    <img src="/images/icons/tiktok.png" alt="Tik Tok" className="footerIcons"/>
                    <p className="footerNetworksText">parada.tecnica</p>
                </a>
                <a className="footerNetworkCont flex" href="https://wa.me/+542477204949" target="_blank" rel="noreferrer">
                    <img src="/images/icons/ws.png" alt="Whatsapp" className="footerIcons"/>
                    <p className="footerNetworksText">2477 204949</p>
                </a>
                <a className="footerNetworkCont flex" href="mailto:info@paradatecnica.com.ar" target="_blank" rel="noreferrer">
                    <img src="/images/icons/email2.png" alt="Mail" className="footerIcons"/>
                    <p className="footerNetworksText">info@paradatecnica.com.ar</p>
                </a>
            </div>
        </div>
    )
}

export default Footer