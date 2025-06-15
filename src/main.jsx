import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";

import App from "./App.jsx";

import "./Index.css"

createRoot(document.getElementById("root")).render(

    <>
<App />
<ToastContainer  position="top-center" />
    
    </>

);
