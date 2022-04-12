import "./dot-button.style.css";

const DotButton = ({ onClick, isHere }) => {
    return (
        <div
            onClick={onClick}
            className={`dot-button ${isHere ? "selected-dot-button" : ""}`}
        />
    );
};

export default DotButton;
