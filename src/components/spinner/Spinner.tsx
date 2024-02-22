// https://www.npmjs.com/package/react-spinners
// https://www.davidhu.io/react-spinners/

import PuffLoader from "react-spinners/PuffLoader";
import FadeLoader from "react-spinners/FadeLoader";
import "./spinner.css";

const Spinner = () => {
    document.body.style.overflow = "hidden";
    return (
        <div className="contSpinners flex">
            <PuffLoader color="#ffffff" size={100}/>
        </div>
    );
}

const ImageSpinner = () => {
    return (
        <div className="imageSpinner flex">
            <FadeLoader color="#7a8dc2"/>
        </div>
    );
}

export {Spinner, ImageSpinner};