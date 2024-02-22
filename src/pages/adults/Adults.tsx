import "./adults.css";

function Adults () {
    return (
        <div className="childsCont seccionsPadding flex column">

            <div className="activitiesOptionCont activitiesOptionContPagesHead flex column OoS" id="adultos">
                <img src="/images/icons/adultos.png" alt="Niños y adolescentes" className="activitiesOptionsIcon" />
                <p className="activitiesOptionText iconsTextBold">Adultos</p>
            </div>

            <div className="coursesDescriptionCont adultsDescriptionCont flex column OoS">
                <div className="coursesDescriptionMainTextCont flex">
                    <p className="coursesDescriptionMainText">NUESTRA PROPUESTA</p>
                </div>
                    <p className="coursesDescriptionText"> 
                        Que comiences tu aventura en la escalada. Es ideal para quienes desean desafiarse a sí mismos y vivir una experiencia emocionante. <br />    
                        Esto es posible: tenés la opción de venir libre a escalar vías o bloques, si nunca tuviste experiencia en este deporte o simplemente lo preferís, 
                        <a className="textBold coursesAdultsTextColor" href="https://wa.me/+542477204949" target='_blank' rel="noreferrer"> súmate a las clases guiadas. </a>
                    </p>
                    <br />
                    <p className="coursesDescriptionText">
                        Y además podes coparte con los viajes que realizamos todos los meses, en los que te desconectas para conectar 
                        con vos mismo, y con la naturaleza. <a className="textBold" href="https://wa.me/+542477204949" target='_blank' rel="noreferrer">Ponete en contacto con nosotros!</a>
                    </p>
                    <p className="coursesDescriptionAdultsFinalText">!LA AVENTURA TE ESPERA!</p>
                <div className="coursesDescriptionBackDiv adultsDescriptionBackDiv"></div>                        
            </div>

            <div className="coursesDescriptionCont adultsBeginnersClassCont OoS">
                <p className="adultsBeginnersClassTitle">Clases para principiantes</p>
                <p> <span className="textBold"> ¿Sos nuevo en el mundo de la escalada y no sabes por dónde
                    empezar? </span> ¡No te preocupes! Unite a nuestras clases diseñadas
                    especialmente para principiantes como vos. No importa si no
                    tenes experiencia previa, para todos hay una primera vez.
                    ¡Te invitamos a sumarte!
                </p>
            </div>
        </div>
    )
}

export default Adults