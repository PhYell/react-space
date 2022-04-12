import "./planet-info.style.css";

const PlanetInfo = ({ planet }) => {
    const planetText = {
        moon: {
            text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            time: "3 days",
        },
        mars: {
            text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            time: "9 months",
        },
        europa: {
            text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            time: "3 years",
        },
        titan: {
            text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            time: "7 years",
        },
    };

    return (
        <div className="planet-info">
            <h2>{planet}</h2>
            <div className="body-text">{planetText[planet].text}</div>
            <div className="info-line" />
            <div className="planet-info-numbers">
                <div className="planet-info-distance">
                    <p>avg. distance</p>
                    {planetText[planet].distance}
                </div>
                <div className="planet-info-time">
                    <p>st. travel time</p>
                    {planetText[planet].time}
                </div>
            </div>
        </div>
    );
};

export default PlanetInfo;
