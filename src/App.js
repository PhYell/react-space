import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import Home from "./pages/home/home.page";
import Destination from "./pages/destination/destination.page";
import Crew from "./pages/crew/crew.page";
import Technology from "./pages/technology/technology.page";

function App() {
    const [onPage, setOnPage] = useState("home");

    const onUserClick = (e) => {
        console.log(e.target);
    };

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                document.body.removeAttribute("class");
                document.body.classList.add("home-page");
                break;
            case "/destination":
                document.body.removeAttribute("class");
                document.body.classList.add("destination-page");
                break;
            case "/crew":
                document.body.removeAttribute("class");
                document.body.classList.add("crew-page");
                break;
            case "/technology":
                document.body.removeAttribute("class");
                document.body.classList.add("technology-page");
                break;
        }
        console.log(
            `url(../assets/${onPage}/background-${onPage}-desktop.jpg)`
        );
    });

    return (
        <div
            className="App"
            style={{
                // background: "red",
                backgroundImage: `url(../assets/${onPage}/background-${onPage}-desktop.jpg)`,
            }}
        >
            <Header />
            <Routes>
                <Route path="/" element={<Home onUserClick={onUserClick} />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </div>
    );
}

export default App;
