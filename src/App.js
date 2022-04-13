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
        console.log("e.target", e.target);
    };

    const getPath = (str) => {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] == "/") result = "";
            result += str[i];
        }
        return result;
    };

    useEffect(() => {
        switch (getPath(window.location.href)) {
            case "/":
                document.body.removeAttribute("class");
                document.body.classList.add("home-page");
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
