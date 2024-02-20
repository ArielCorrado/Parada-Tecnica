import "./activities.css";
import { HashLink } from "react-router-hash-link";
import { scrollWithoffset } from "../../utils/scrollWithOffset";

export default function Activities() {
    return (
        <div className="activitiesCont seccionsPadding flex column">
            <div className="activitiesTitleCont flex column mb2 OoS">
                <p className="activitiesTitle1" id="actividades">Nuestras</p>
                <p className="activitiesTitle2">ACTIVIDADES</p>
            </div>
            <div className="activitiesDescCont flex column OoS">
                <p>Encontrá <span className="textBold"> todo lo que necesitas </span> para formar parte de nuestra comunidad.</p>
                <p>Unite a nosotros y descubrí <span className="textBold"> un espacio donde </span></p>
                <p><span className="textBold"> la colaboración, el aprendizaje y el crecimiento son fundamentales. </span></p>
                <p className="activitiesDesc2">¡Te damos la bienvenida a nuestra comunidad!</p>
            </div>
            <div className="activitiesOptionsCont flex wrap">
                <HashLink className="activitiesOptionCont activitiesOptionContHover flex column OoS" to="/#ninos" scroll={(e) => scrollWithoffset(e) }>
                    <img src="/images/icons/ninos.png" alt="Niños y adolescentes" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Niños y <br /> adolescentes</p>
                </HashLink>
                <HashLink className="activitiesOptionCont activitiesOptionContHover flex column OoS" to="/#cursos" scroll={(e) => scrollWithoffset(e)}>
                    <img src="/images/icons/cursos.png" alt="Cursos" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Cursos</p>
                </HashLink>
                <HashLink className="activitiesOptionCont activitiesOptionContHover flex column OoS" to="/#adultos" scroll={(e) => scrollWithoffset(e)}>
                    <img src="/images/icons/adultos.png" alt="Adultos" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Adultos</p>
                </HashLink>
                <HashLink className="activitiesOptionCont activitiesOptionContHover flex column OoS" to="/#escalada" scroll={(e) => scrollWithoffset(e)}>
                    <img src="/images/icons/escala.png" alt="Escalada con cuerda" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Escalada <br /> con cuerda</p>
                </HashLink>
                <div className="activitiesOptionCont activitiesOptionContHover flex column OoS">
                    <img src="/images/icons/salida.png" alt="Salida a la roca" className="activitiesOptionsIcon" />
                    <p className="activitiesOptionText">Salida a <br /> la roca</p>
                </div>
            </div>
            <div className="activitiesMountainImgCont flex OoS"><img src="/images/mountain1.png" alt="Mountain" className="activitiesMountainImg"/></div>
            <div className="activitiesTitleCont flex column OoS">
                <p className="activitiesTitle1">Conocé</p>
                <p className="activitiesTitle2">Y EXPLORÁ</p>
            </div>
        </div>
    )
}
