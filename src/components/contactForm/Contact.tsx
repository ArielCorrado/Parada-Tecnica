import "./contact.css";
import { useRef, useContext } from "react";
import "./contact.css";
import { SpinnerContext } from "../../context/spinnerContext";
import { swalPopUp } from "../../utils/swal";

type formValues = {
    nombre: string;
    telefono: string;
    email: string;
    empresa: string;
    mensaje: string;
}

const Contact = (props: {close: () => void}) => {

    const {showSpinner} = useContext(SpinnerContext)
    const formRef = useRef <HTMLFormElement | null> (null);
            
    const validateForm = async () => {
                            
        const formData = new FormData(formRef.current as HTMLFormElement);
        const data = Object.fromEntries(formData) as formValues;
        const formValues = Object.values(data);
        
        if (formValues.every((input) => input.trim() !== "")) {
            sendForm();    
        } else {
            swalPopUp("Ops!", "Falta Ingresar Algún Dato", "warning");       
        }
    }    

    const sendForm = async () => {
       
        const formData = new FormData(formRef.current as HTMLFormElement);
        const data = Object.fromEntries(formData) as formValues;

        try {
            showSpinner(true);
            const respJSON = await fetch ("/sendmail.php", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const respOBJ = await respJSON.json();
            showSpinner(false);
            if (respOBJ.msg.includes("Error")) {
                swalPopUp("Ops!", `${respOBJ.msg}, Intente otra vez`, "error");
            } else {
                const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".inputForm");
                inputs.forEach((input) => input.value = "");
                swalPopUp("Enviado!", "Mensaje enviado con éxito, gracias por contactarnos!", "success");
            } 
            
        } catch (err: unknown) {
            showSpinner(false); 
            swalPopUp("Ops!", err instanceof Error ? `Error al enviar el mensaje: ${err.message}` : `Error al enviar el mensaje: problema desconocido`, "error");
        }
        document.body.style.overflow = "initial";
    }
          
    return (
        <div className='contactFormCont flex column'>
            <img src="/images/icons/close.png" alt="Close" className="contactFormCloseIcon invert100" onClick={props.close}/>
            <div className="telEmailCont fadeInIzq flex wrap">
                <div className='tel-contacto flex'>
                    <a href="https://wa.me/+542477204949" target='_blank' rel="noreferrer" className='flex'>
                        <img src="/images/icons/ws.png" alt="phone" className='imgContactoPhone' />
                        <h2>+54 2477 204949</h2>
                    </a>
                </div>
                <div className='email-contacto flex'>
                    <a href="mailto:info@paradatecnica.com.ar" className='flex'>
                        <img src="/images/icons/email.png" alt="email" className='imgContactoEmail' />
                        <h2>info@paradatecnica.com.ar</h2>
                    </a>
                </div>
            </div>
            <div className='contFormContacto fadeInIzq flex column'>
                <form className='contactForm' ref={formRef}>
                    <div className='contTituloContacto flex'>
                        <h2 className='tituloContacto'>ENVIANOS TU CONSULTA</h2>
                    </div>
                    <input type="text" name="nombre" className='formNom inputForm' placeholder='NOMBRE' />
                    <input type="tel" name="telefono" className='formTel inputForm' placeholder='WHATSAPP' />
                    <input type="email" name="email" className='formEmail inputForm' placeholder='E-MAIL' />
                    <textarea name="mensaje" className='formMsj inputForm' placeholder='MENSAJE' />
                </form>
                <div className='contBotonContacto flex'><button type="button" className='formButton' onClick={validateForm}> Enviar </button></div>
            </div>
        </div>
    );
}

export default Contact;

