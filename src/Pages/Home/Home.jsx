import Footer from "../Shared/Footer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <Banner></Banner>
                <About></About>
                <Services></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;