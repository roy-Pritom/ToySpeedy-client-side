import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
             <Header></Header>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;