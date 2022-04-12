import "./planet-select-button.style.css";

const PlanetSelectButton = ({ planet, onButtonClick, onThis }) => {
    return (
        <button
            onClick={onButtonClick}
            className={`planet-select-button ${
                onThis ? "selected-planet-select-button" : ""
            }`}
        >
            {planet}
        </button>
    );
};

export default PlanetSelectButton;
