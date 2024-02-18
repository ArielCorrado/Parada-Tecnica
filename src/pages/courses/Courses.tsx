import "./courses.css";

function Courses() {
    return (
        <div className="coursesCont seccionsPadding flex column">

            <div className="activitiesOptionCont flex column OoS" id="cursos">
                <img src="/images/icons/cursos.png" alt="Cursos" className="activitiesOptionsIcon" />
                <p className="activitiesOptionText iconsTextBold">Cursos</p>
            </div>   

            <div className="coursesCalendarCont flex OoS">
                <div className="coursesCalendarIconCont flex">
                    <img src="/images/icons/calendar.png" alt="Calendar" className="coursesCalendarIcon coursesCalendarIconFirst"/>
                    <p className="coursesCalendarText flex">MAR.</p>
                </div>
                <div className="coursesCalendarIconCont flex">
                    <img src="/images/icons/calendar.png" alt="Calendar" className="coursesCalendarIcon"/>
                    <p className="coursesCalendarText flex">MAY.</p>
                </div>
                <div className="coursesCalendarIconCont flex">
                    <img src="/images/icons/calendar.png" alt="Calendar" className="coursesCalendarIcon"/>
                    <p className="coursesCalendarText flex">JUL.</p>
                </div>
                <div className="coursesCalendarIconCont flex">
                    <img src="/images/icons/calendar.png" alt="Calendar" className="coursesCalendarIcon"/>
                    <p className="coursesCalendarText flex">SEP.</p>
                </div>
            </div>

            <div className="coursesDescriptionCont flex column OoS">
                <div className="coursesDescriptionMainTextCont flex">
                    <p className="coursesDescriptionMainText coursesDescriptionMainTextShort">BÁSICO</p>
                </div>
                <p className="coursesDescriptionTitle coursesDescriptionTitleFirst">MODULO 1.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">1.</span> Introducción al equipo de escalada.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">2.</span> Técnica de progresión.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">3.</span> Nudo de encordamieto.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">4.</span> Correcta utilizacion de los dispositivos de seguro.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">5.</span> Cómo chapar.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">6.</span> Cómo clipar.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">7.</span> Top deportivo <span className="coursesDescriptionTextCursive">(mosquetón con seguro + express).</span></p>
                
                <p className="coursesDescriptionTitle">MODULO 2.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">1.</span> Revisión.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">2.</span> Voladas.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">3.</span> Dinamización.</p>
                <p className="coursesDescriptionText"><span className="coursesDescriptionTextNumber">4.</span> Descuelgue.</p>

                <div className="coursesDescriptionBackTextCont flex">
                    <p className="coursesDescriptionBackText flex">VER FECHAS</p>
                </div>
            </div>

            <div className="coursesModuleCont flex OoS">
                <div className="coursesModuleDivIzq flex column">
                    <p className="coursesModuleText1">PRIMER</p>
                    <p className="coursesModuleText2">MÓDULO</p>
                </div>
                <div className="coursesModuleDivDer flex column">
                    <p className="coursesModuleDivDerText">6 DE ABRIL | 14H</p>
                    <p className="coursesModuleDivDerText">22 DE JUNIO | 14H</p>
                </div>
                <p className="coursesModuleDay">SÁBADO</p>
            </div>

            <div className="coursesModuleCont coursesModuleCon2 flex OoS">
                <div className="coursesModuleDivIzq flex column">
                    <p className="coursesModuleText1">SEGUNDO</p>
                    <p className="coursesModuleText2">MÓDULO</p>
                </div>
                <div className="coursesModuleDivDer flex column">
                    <p className="coursesModuleDivDerText">1 DE MAYO | 14H</p>
                    <p className="coursesModuleDivDerText">6 DE JULIO | 14H</p>
                </div>
                <p className="coursesModuleDay coursesModuleDay2">SÁBADO</p>
            </div>

            <div className="coursesDescriptionBackTextCont coursesDescriptionBackTextContDBlock flex OoS">
                <p className="coursesDescriptionBackText">!AVISARME NUEVAS FECHAS!</p>
            </div>

        </div>
    )
}

export default Courses