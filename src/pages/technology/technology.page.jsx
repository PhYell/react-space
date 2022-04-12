import { useState } from "react";

import "./technology.style.css";

import PageName from "../../components/page-name/page-name.component";
import TechnologyInfo from "../../components/technology-info/technology-info.component";
import TechnologyButton from "../../components/technology-button/technology-button.component";

const Technology = () => {
    const [onTechnology, setOnTechnology] = useState(1);

    const technologyInfoList = ["launch-vehicle", "spaceport", "space-capsule"];

    const changeTechnology = (e) => {
        setOnTechnology(e.target.innerHTML);
    };

    return (
        <main className="page">
            <PageName num={"03"} text={"space launch 101"} />
            <div className="content technology-page-content">
                <img
                    className="technology-page-image"
                    src={require(`../../assets/technology/image-${
                        technologyInfoList[onTechnology - 1]
                    }-landscape.jpg`)}
                    alt={`${technologyInfoList[onTechnology - 1]}`}
                />
                <div className="technology-buttons">
                    {[0, 1, 2].map((item) => (
                        <TechnologyButton
                            onUserClick={changeTechnology}
                            onIt={onTechnology - 1 === item}
                            num={item}
                            key={item}
                        />
                    ))}
                </div>
                <TechnologyInfo num={onTechnology} />
            </div>
        </main>
    );
};

export default Technology;
