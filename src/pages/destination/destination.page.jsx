import { useState } from "react";

import "./destination.style.css";

import PageName from "../../components/page-name/page-name.component";
import PlanetImage from "../../components/planet-image/planet-image.component";
import PlanetSelectButton from "../../components/planet-select-button/planet-select-button.component";
import PlanetInfo from "../../components/planet-info/planet-info.component";

const Destination = () => {
    const [selectedPlanet, setSelectedPlanet] = useState("moon");
    const planets = ["moon", "mars", "europa", "titan"];

    const onButtonClick = (e) => {
        setSelectedPlanet(e.target.innerText.toLowerCase());
    };

    return (
        <main className="page">
            <PageName num={"01"} text={"pick your destination"} />
            <div className="content">
                <PlanetImage planet={selectedPlanet} />
                <div className="planet-panel">
                    <div className="planet-select-buttons">
                        {planets.map((planet) => (
                            <PlanetSelectButton
                                key={planet}
                                planet={planet}
                                onButtonClick={onButtonClick}
                                onThis={planet === selectedPlanet}
                            />
                        ))}
                    </div>
                    <PlanetInfo planet={selectedPlanet} />
                </div>
            </div>
        </main>
    );
};

export default Destination;
