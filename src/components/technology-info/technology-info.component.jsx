import "./technology-info.style.css";

const TechnologyInfo = ({ num }) => {
    const technologyInfoList = [
        {
            name: "LAUNCH VEHICLE",
            text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            imageName: "launch-vehicle",
        },
        {
            name: "SPACEPORT",
            text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            imageName: "spaceport",
        },
        {
            name: "SPACE CAPSULE",
            text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            imageName: "space-capsule",
        },
    ];

    return (
        <div className="technology-info">
            <div className="technology-info-text">
                <div className="body-text">THE TERMINOLOGY...</div>
                <h3>{technologyInfoList[num - 1].name}</h3>
                <div className="body-text">
                    {technologyInfoList[num - 1].text}
                </div>
            </div>
            <img
                className="technology-image"
                src={require(`../../assets/technology/image-${
                    technologyInfoList[num - 1].imageName
                }-portrait.jpg`)}
                alt={`${technologyInfoList[num - 1].name}`}
            />
            {/* <div
                className={`technology-image ${technologyInfoList[num].className}`}
            ></div> */}
        </div>
    );
};

export default TechnologyInfo;
