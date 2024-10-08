import { useEffect, useContext/*, useState */} from "react";
import { Link, useLocation } from 'react-router-dom';
import "./navBar.css";
import { SpinnerContext } from "../../context/spinnerContext";
import { SpinnerContextType } from "../../types/types";
import waitAllImagesCharged from "../../utils/waitAllImagesCharged";
import { HashLink } from "react-router-hash-link";
import { scrollWithoffset } from "../../utils/scrollWithOffset";
// import Contact from "../contactForm/Contact";

const NavBar = () => {
    
    const { showSpinner } = useContext <SpinnerContextType> (SpinnerContext);
    const thisLocation = useLocation();
        
    useEffect(() => {   

        /****************************************** OoS ************************************************/

        const OoS = () => {
            const OoSElements: NodeListOf<HTMLElement> = document.querySelectorAll(".OoS");
            OoSElements.forEach((element) => {            //Mostramos el elemento cuando ocupa el 15% de la pantalla o mas
                if(((element.getBoundingClientRect().top ) <= (window.innerHeight * 0.85))) element.classList.add("OoSS");   
            })
        }
        window.addEventListener("resize", OoS);
        window.addEventListener("orientationchange", OoS);
        window.addEventListener("scroll", OoS);
        OoS();

        let tempo: NodeJS.Timeout;     //Si estamos 1 segundo sin hacer scroll y hay alguna parte de un elemento OoS visible lo mostramos
        const handleTempo = () => {     //Se borra el temporizador actual y se crea un nuevo cada vez que hacemos scroll
            clearTimeout(tempo);  
            tempo = setTimeout(() => {
                const OoSElements = document.querySelectorAll(".OoS");
                OoSElements.forEach((element) => {
                    if(((element.getBoundingClientRect().top) < (window.innerHeight))) element.classList.add("OoSS");
                })
            }, 750);
        }
        window.addEventListener("resize", handleTempo);
        window.addEventListener("orientationchange", handleTempo);
        window.addEventListener("scroll", handleTempo);
        handleTempo();


        /*********************************************************************************************************/
        //Espera que se carguen todas las imágenes en la pagina actual si esta tiene la clase "seccionToWaitImages"
                 
        const checkImages = async () => {
            const componentToWaitImages: HTMLElement | null = document.querySelector(".seccionToWaitImages");
            if (componentToWaitImages) {
                const animations = componentToWaitImages.getAnimations({ subtree: true });
                animations.forEach((animation) => {                                 //Pausamos las animaciones
                    animation.pause();
                })

                showSpinner(true);
                await waitAllImagesCharged();
                showSpinner(false);

                componentToWaitImages.classList.add("opacityOnCharge");
                animations.forEach((animation) => {                                 //Reanudamos las animaciones
                    animation.play();
                })
            }
        }
        checkImages();
      
        // eslint-disable-next-line
    }, [thisLocation])
    

    /*********************************************************************************************/
                
    useEffect(() => {

        const iconoMenu = document.querySelector(".iconoMenu");
        iconoMenu?.setAttribute("name", "iconoMenu");
        const menu = document.querySelector(".menu");
        menu?.setAttribute("name", "menu")
        const opciones = document.getElementsByClassName("opcion");
        let initialWidth = window.innerWidth;
        let REM: number;
        let breakPoint: number = 0;
        let menuBajo = false;
        let flagEnterMenuToggle = true;
        iconoMenu?.addEventListener("click", () => {                         //Manejo de clases para bajar y subir menu
            if (flagEnterMenuToggle) {
                flagEnterMenuToggle = false;
                if (!menuBajo) {
                    menu?.classList.remove("menuSube", "menuBaja");
                    menu?.classList.add("menuBaja");
                    menuBajo = !menuBajo;    
                    const animations = menu?.getAnimations() as Animation[];
                    animations[0].addEventListener("finish", () => {
                        flagEnterMenuToggle = true;
                    })
                } else {
                    menu?.classList.remove("menuBaja", "menuSube");
                    menu?.classList.add("menuSube");
                    menuBajo = !menuBajo;  
                    const animations = menu?.getAnimations() as Animation[];
                    animations[0].addEventListener("finish", () => {
                        flagEnterMenuToggle = true;
                    })
                }
            }
        })

        const calcularREM = () => {
            if (window.innerWidth >= window.innerHeight) REM = 0.01 * window.innerHeight + 10;
            if (window.innerWidth < window.innerHeight) REM = 0.01 * window.innerWidth + 10;
            breakPoint = 65 * REM;
        }
         
        calcularREM();
        if(window.innerWidth < breakPoint) {                                        //Cargamos página con un ancho menor a BreakPoint
            const userAuthenticationComponent = document.querySelector(".userAuthenticationCont")
            menu?.classList.add("iconoMenuON", "menuOFF");
            iconoMenu?.classList.add("iconoMenuON");
            for (const opcion of opciones) {
                opcion.classList.add("opcion2");
            }
            userAuthenticationComponent?.classList.add("userAuthenticationContCenter");
        }
        
        const check = () => {
            const userAuthenticationComponent = document.querySelector(".userAuthenticationCont")
            calcularREM();           
            if(initialWidth <= breakPoint && window.innerWidth > breakPoint) {                   //Pasamos de un ancho de pantalla menor a breakPoint a uno mayor
                menu?.classList.remove("menuSube", "menuBaja", "menuOFF");
                iconoMenu?.classList.remove("iconoMenuON");
                for (const opcion of opciones) {
                    opcion.classList.remove("opcion2");
                }
                menuBajo = false;
                initialWidth = window.innerWidth;
                userAuthenticationComponent?.classList.remove("userAuthenticationContCenter")
            }     
            if(initialWidth > breakPoint && window.innerWidth < breakPoint) {                   //Pasamos de un ancho de pantalla mayor a breakPoint a uno menor
                menu?.classList.add("menuOFF");
                iconoMenu?.classList.add("iconoMenuON");
                for (const opcion of opciones) {
                    opcion.classList.add("opcion2");
                }
                initialWidth = window.innerWidth;
                userAuthenticationComponent?.classList.add("userAuthenticationContCenter")
            }     
        }        

        window.addEventListener("resize", () => check());                                        //Manejo de clases al hacer resize o cambio de orientacion
        check();

        window.addEventListener("click", (e) => {                                               //Cerramos en menu desplegado al hacer click en cualquier lado menos en el icono de menu
            const sameElement = e.target as HTMLElement
            if (sameElement.getAttribute("name") !== "iconoMenu" && menuBajo === true) {
                menu?.classList.remove("menuBaja", "menuSube");
                menuBajo = false;
            }
        })

        // eslint-disable-next-line
    }, []);    

    /*********************************************************************************************/

    // const [form, setForm] = useState <JSX.Element> (<></>);

    // const hiddeContactForm = () => {
    //     document.body.style.overflow = "initial";
    //     setForm(<></>);
    // }

    // const showContactForm = () => {
    //     document.body.style.overflow = "hidden";
    //     setForm(<Contact close={hiddeContactForm}/>);
    // }
    
    return (
        <>
            {/* {form} */}
            <div className="contMenu flex opacityOnCharge">
                <div className="navBarContLogoEidioma flex">
                    <Link to="/home" className="navBarContLogo flex"><img src="/images/logo.png" alt="Logo Tropicalia" className="navBarLogo" /></Link>
                </div>
                <img className="iconoMenu" src="/images/icons/menu.png" alt="Icono Menu" />
                <div className="tapaMenu"></div>
                <div className="menu flex">
                    <HashLink className="opcion flex" to="#actividades" smooth={true} scroll={(e) => scrollWithoffset(e, -40)}>Actividades</HashLink>
                    <HashLink className="opcion flex" to="#espacio" smooth={true} scroll={(e) => scrollWithoffset(e)}>Espacio</HashLink>
                    <a className="opcion navBarContactOption flex" /*onClick={() => showContactForm()}*/ href="https://wa.me/+542477204949" target='_blank' rel="noreferrer">Contacto</a>
                    <a className="opcion flex" href="https://wa.me/+542477204949" target='_blank' rel="noreferrer">Proba una clase gratis</a>
                    {/*<div className="opcion flex">Staff</div>*/}
                </div>
            </div>
        </>
    )  
}   

export default NavBar;
