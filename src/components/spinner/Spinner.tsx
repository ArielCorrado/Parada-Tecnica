// https://www.npmjs.com/package/react-spinners
// https://www.davidhu.io/react-spinners/

import PuffLoader from "react-spinners/PuffLoader";
import FadeLoader from "react-spinners/FadeLoader";
import "./spinner.css";

const Spinner = () => {
    return (
        <div className="contSpinners flex">
            <PuffLoader color="#ffffff" size={100}/>
        </div>
    );
}

const ImageSpinner = () => {
    return (
        <div className="imageSpinner flex">
            <FadeLoader color="#ffffff"/>
        </div>
    );
}

export {Spinner, ImageSpinner};