import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import "./styles/generalStyles.css";
import NavBar from "./components/navBar/NavBar";
import { SpinnerContextType } from "./types/types";
import { SpinnerContext } from "./context/spinnerContext";
import Main from "./pages/Main";
import WhatsAppFloating from "./components/whatsAppFloating/WhatsAppFloating";

function App() {
    const { spinner } = useContext <SpinnerContextType> (SpinnerContext);

    return (
        <BrowserRouter>
            { spinner }
            <NavBar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            <WhatsAppFloating/>
        </BrowserRouter>
    );
}

export default App;