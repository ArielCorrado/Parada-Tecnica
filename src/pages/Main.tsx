import Home from "./home/Home";
import Activities from "./activities/Activities";
import Gallery3 from "../components/gallery3/Gallery3";
import Contact from "./contact/Contact";
import Courses from "./courses/Courses";
import Childs from "./childs/Childs";
import Adults from "./adults/Adults";

export default function Main() {
    
    return (
        <div className="seccionToWaitImages">
            <Home />
            <Activities />
            <Gallery3 
                numberOfImagesInLandsCape={3} /* Numero de imagenes que se muestran en modo landscape cuando la galeria no esta maximizada, por defecto(1)*/
                autoPlay={true}               /* Las fotos se pasan solas, por defecto (true) */  
                autoPlayInterval={5000}       /* Indica cada cuanto tiempo se pasan fotos (ms), por defecto(5000) */  
                autoPlayChangeTime={600}      /* Indica cuanto tarda la animacion al pasar de una foto a otra (ms), por defecto (600) */  
            />    
            <Contact/>       
            <Courses/>
            <Childs/>
            <Adults/>
        </div>
    )
}
