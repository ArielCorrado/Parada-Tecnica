import "./climbing.css";

function Climbing () {
    return (
        <div className="childsCont seccionsPadding flex column">

            <div className="activitiesOptionCont activitiesOptionContPagesHead flex column OoS" id="escalada">
                <img src="/images/icons/escala.png" alt="Escalada con cuerda" className="activitiesOptionsIcon" />
                <p className="activitiesOptionText iconsTextBold">Escalada con cuerda</p>
            </div>

            <div className="coursesDescriptionCont climbingDescriptionCont flex column OoS">
                <div className="coursesDescriptionMainTextCont flex">
                    <p className="coursesDescriptionMainText">ESCALADA CON CUERDA</p>
                </div>
                <p className="coursesDescriptionText">
                    <span className="textBold"> Torre de 10mts de altura escalable, </span>
                    Cuenta con 3 caras (dos placas y un desplome de 7grados).
                </p>
                <br />
                <p className="coursesDescriptionText">
                    Podes sacar turno con nosotros a través de wsp y venir a disfrutarla un fin de semana!! No importa que no tengas idea, estamos para cuidarte.
                    Si ya sos escalador, también te esperamos.
                </p>
                <br />
                <p className="coursesDescriptionText">
                    También podes utilizarla durante la diaria, pero eso sí: es requisito indispensable realizar los cursos que proponemos para que seas un escalador autónomo, 
                    <span className="textBold"> pero lo más importante para nosotros es TU SEGURIDAD. </span>
                </p>
                <div className="coursesDescriptionBackDiv backDivClimbing"></div>
            </div>

        </div>
    )
}

export default Climbing