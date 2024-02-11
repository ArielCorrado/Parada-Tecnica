import "./home.css";

function Home() {
    return (
        <div className="homeMainCont flex">
            <div className="homeMainTextCont flex column">
                <div className="flex">
                    <img src="/images/logo.png" alt="Logo" className="homeMainLogo"/>
                    <div className="homeMainDivider"></div>
                    <div className="homeMainTexts flex column"> 
                        <p className="homeMainText1">Parada</p>
                        <p className="homeMainText1 cursive">técnica</p>
                    </div>
                </div>
                <p className="homeMainText2">Actividades indoor y outdoors</p>
            </div>
            <img src="/images/homeMain.jpg" alt="Home" className="homeMainBgImg"/>    
        </div>
    )
}

export default Home