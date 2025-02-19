import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import Hero from "./components/Hero/Hero";


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