import "./technology-button.style.css";

const TechnologyButton = ({ onUserClick, onIt, num }) => {
    return (
        <button
            onClick={onUserClick}
            className={`technology-button ${
                onIt ? "selected-technology-button" : ""
            }`}
        >
            {num + 1}
        </button>
    );
};

export default TechnologyButton;
