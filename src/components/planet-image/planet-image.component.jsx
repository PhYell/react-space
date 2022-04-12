import "./planet-image.style.css";

const PlanetImage = ({ planet }) => {
    return (
        <img
            className="planet-image"
            src={require(`../../assets/destination/image-${planet}.png`)}
            alt={planet}
        />
    );
};

export default PlanetImage;
