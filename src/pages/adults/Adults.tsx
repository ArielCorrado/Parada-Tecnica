import "./adults.css";

function Adults () {
    return (
        <div className="childsCont seccionsPadding flex column">

            <div className="activitiesOptionCont activitiesOptionContPagesHead flex column">
                <img src="/images/icons/adultos.png" alt="Niños y adolescentes" className="activitiesOptionsIcon" />
                <p className="activitiesOptionText iconsTextBold">Adultos</p>
            </div>

            <div className="coursesDescriptionCont adultsDescriptionCont flex column">
                <div className="coursesDescriptionMainTextCont flex">
                    <p className="coursesDescriptionMainText">NUESTRA PROPUESTA</p>
                </div>
                <p className="coursesDescriptionText"> 
                    Proponemos comenzar tu aventura en la escalada, para aquellos
                    que desean desafiarse a sí mismos y vivir una experiencia
                    emocionante indoor, con nuestros
                    boulderes y vías de escalada. <br />
                    <span className="textBold coursesAdultsTextColor">Y, ¿por qué no explorar también el mundo outdoor? </span>Te
                    invitamos a alejarte un poco de la rutina diaria y disfrutar de un
                    fin de semana conectado con la naturaleza y con vos mismo.
                </p>
                <br />
                <p className="coursesDescriptionText">
                    <span className="textBold"> Descubrí la posibilidad de cursos que ofrecemos para que
                    puedas profundizar en este fascinante mundo. </span> Informate más
                    acerca de nuestras opciones y preparate para vivir experiencias
                    que te desafiarán física y mentalmente mientras te conectas con
                    la belleza natural que nos rodea.
                </p>
                <p className="coursesDescriptionAdultsFinalText">!LA AVENTURA TE ESPERA!</p>
                <div className="coursesDescriptionBackDiv adultsDescriptionBackDiv"></div>                        
            </div>

            <div className="coursesDescriptionCont adultsBeginnersClassCont">
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