import "./childs.css";

function Childs() {
    return (
        <div className="childsCont seccionsPadding flex column">

            <div className="activitiesOptionCont activitiesOptionContPagesHead flex column OoS" id="ninos">
                <img src="/images/icons/ninos.png" alt="Niños y adolescentes" className="activitiesOptionsIcon" />
                <p className="activitiesOptionText iconsTextBold">Niños y adolescentes</p>
            </div>

            <div className="coursesDescriptionCont childsDescriptionCont flex column OoS">
                <div className="coursesDescriptionMainTextCont flex">
                    <p className="coursesDescriptionMainText">CLASE PARA CHICOS</p>
                </div>
                <p className="coursesDescriptionText"> 
                    Estas clases ofrecen una variedad de propuestas que abarcan
                    tanto el boulder como actividades al estilo "Ninja Warrior". Estas
                    actividades consisten en <span className="textBold"> recorridos o circuitos con obstáculos
                    diseñados para desafiar todas las habilidades </span> de quienes
                    participan. Cada clase se planifica meticulosamente, siguiendo
                    múltiples objetivos establecidos por nuestros profesores de
                    educación física.
                </p>
                <br />
                <p className="coursesDescriptionText">
                    El propósito principal es lograr un <span className="textBold"> desarrollo integral durante la
                    diversión. </span> En este contexto, las actividades no solo buscan
                    mejorar la destreza física, sino también promover el bienestar
                    general y la diversión durante el proceso. Unite a nosotros y
                    descubrí un enfoque integral para el desarrollo personal a través
                    de experiencias emocionantes y desafiantes.
                </p>
                <div className="coursesDescriptionBackDiv"></div>                        
            </div>

        </div>
    )
}

export default Childs