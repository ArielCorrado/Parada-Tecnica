import "./activities.css";

export default function Activities() {
    return (
        <div className="activitiesCont seccionsPadding flex column">
            <div className="activitiesTitleCont flex column">
                <p className="activitiesTitle1">Nuestras</p>
                <p className="activitiesTitle2">ACTIVIDADES</p>
            </div>
            <div className="activitiesDescCont flex column">
                <p>Encontrá <span className="textBold"> todo lo que necesitas </span> para formar parte de nuestra comunidad.</p>
                <p>Unite a nosotros y descubrí <span className="textBold"> un espacio donde </span></p>
                <p><span className="textBold"> la colaboración, el aprendizaje y el crecimiento son fundamentales. </span></p>
                <p className="activitiesDesc2">¡Te damos la bienvenida a nuestra comunidad!</p>
            </div>
            <div className="activitiesOptionsCont flex wrap">
                <div className="activitiesOptionCont flex column">
                    <img src="/images/icons/ninos.png" alt="Niños y adolescentes" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Niños y <br /> adolescentes</p>
                </div>
                <div className="activitiesOptionCont flex column">
                    <img src="/images/icons/cursos.png" alt="Cursos" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Cursos</p>
                </div>
                <div className="activitiesOptionCont flex column">
                    <img src="/images/icons/adultos.png" alt="Adultos" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Adultos</p>
                </div>
                <div className="activitiesOptionCont flex column">
                    <img src="/images/icons/salida.png" alt="Salida a la roca" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Salida a <br /> la roca</p>
                </div>
                <div className="activitiesOptionCont flex column">
                    <img src="/images/icons/escala.png" alt="Escala con cuerda" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Escala <br /> con cuerda</p>
                </div>
            </div>
            <img src="/images/mountain1.png" alt="Mountain" className="activitiesMountainImg"/>
            <div className="activitiesTitleCont flex column">
                <p className="activitiesTitle1">Conocé</p>
                <p className="activitiesTitle2">Y EXPLORÁ</p>
            </div>
        </div>
    )
}
