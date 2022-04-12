import "./home.style.css";
import BigButton from "../../components/big-button/big-button.component";

const Home = () => {
    return (
        <main className="homepage-content">
            <div className="text-holder">
                <h5>so you want to travel to</h5>
                <h1>space</h1>
                <div className="body-text">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </div>
            </div>
            <BigButton text="explore" />
        </main>
    );
};

export default Home;
