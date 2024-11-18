import { BrowserRouter, Route, Routes } from "react-router-dom";
import Worktime from "./pages/Worktime";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Worktime/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
