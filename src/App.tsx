import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Hero from "./components/Hero/Hero";
import Homepage from "./Pages/Homepage/Homepage/Homepage";


export default function App() {
    return (
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route path="/" element={<Homepage/>} />
            </Routes>
            </Layout>
        </BrowserRouter>
    )
}