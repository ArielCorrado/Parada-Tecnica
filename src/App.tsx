import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import "./styles/generalStyles.css";
import NavBar from "./components/navBar/NavBar";
import { SpinnerContextType } from "./types/types";
import { SpinnerContext } from "./context/spinnerContext";
import Main from "./pages/Main";
import WhatsAppFloating from "./components/whatsAppFloating/WhatsAppFloating";
import Footer from "./components/footer/Footer";

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
            <Footer/>
        </BrowserRouter>
    );
}

export default App;