import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* id는 useParams를 사용하여 넘겨줌 */}
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;