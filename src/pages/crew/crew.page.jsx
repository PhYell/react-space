import { useState } from "react";

import "./crew.style.css";

import PageName from "../../components/page-name/page-name.component";
import CrewMemberInfo from "../../components/crew-member-info/crew-member-info.component";
import DotButton from "../../components/dot-button/dot-button.component";

const Crew = () => {
    const [onCrewmember, setOnCrewmember] = useState(0);
    const getName = (num) => {
        switch (num) {
            case 0:
                return "douglas-hurley";
            case 1:
                return "mark-shuttleworth";
            case 2:
                return "victor-glover";
            case 3:
                return "anousheh-ansari";
        }
    };

    return (
        <main className="page">
            <PageName num={"02"} text={"meet your crew"} />
            <div className="content crew-page-content">
                <div className="crew-member">
                    <CrewMemberInfo num={onCrewmember} />
                    <div className="dot-buttons">
                        {[0, 1, 2, 3].map((item) => (
                            <DotButton
                                isHere={onCrewmember == item}
                                onClick={() => {
                                    setOnCrewmember(item);
                                }}
                                key={item}
                            />
                        ))}
                    </div>
                </div>
                <img
                    src={require(`../../assets/crew/image-${getName(
                        onCrewmember
                    )}.png`)}
                    className="crew-member-image"
                />
            </div>
        </main>
    );
};

export default Crew;
