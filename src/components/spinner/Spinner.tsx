// https://www.npmjs.com/package/react-spinners
// https://www.davidhu.io/react-spinners/

import PuffLoader from "react-spinners/PuffLoader";
import "./spinner.css";
import { useEffect } from "react";

const Spinner = () => {
    document.body.style.overflow = "hidden";
    
    useEffect(() => {
        return () => {document.body.style.overflow = "initial"};
    }, []) 
    
    return (
        <div className="contSpinners flex">
            <PuffLoader color="#ffffff" size={100}/>
        </div>
    );
}

export {Spinner};