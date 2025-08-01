import { Header } from "../../componennts/header/header";
import './home.css';
import logo from "../../assets/logo2.png"
import { Featuredpoet } from "../../componennts/featuredpoet/featuredpoet";
const Home = ({ theme, toggleTheme }) => {
    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <section className="home-page text-center py-5 " style={{height:'70vh'}}>
                {/* Logo and Title */}
                <div className="logo-section d-flex flex-column align-items-center mb-4">
                    <img src={logo} alt="Logo" width={40} height={55} />
                    <h1 className="display-5  fw-bold text-orange my-3">काव्यकला</h1>
                    <p className="lead text-secondary ">
                        हिंदी कविता का डिजिटल संग्रह • महान कवियों की अमर रचनाएं
                    </p>
                </div>

                {/* Buttons */}
                <div className="button-section d-flex justify-content-center gap-3 mb-5">
                    <button className="btn btn-orange px-4">
                        🖋 कवि संग्रह देखें
                    </button>
                    <button className="btn btn-outline-secondary px-4">
                        📖 रचनाएं पढ़ें
                    </button>
                </div>

                {/* Stats Section */}
                <div className="container d-flex justify-content-center gap-4 flex-wrap">
                    <div className="stat-card text-center p-4 rounded shadow-sm">
                        <div className="icon fs-3 text-orange"></div>
                        <span className="bi bi-people-fill fs-3"><h4 className="fw-bold  mt-2">50+</h4></span>
                        <p className="text-mute">प्रसिद्ध कवि</p>
                    </div>
                    <div className="stat-card text-center p-4 rounded shadow-sm">
                        <div className="icon fs-3 text-orange"></div>
                        <span className="bi bi-book-fill fs-3"><h4 className="fw-bold mt-2">500+</h4></span>
                        <p className="text-mute">काव्य रचनाएं</p>
                    </div>
                    <div className="stat-card text-center p-4 rounded shadow-sm">
                        <div className="icon fs-3 text-orange"></div>
                        <span className="bi bi-heart-fill fs-3"><h4 className="fw-bold mt-2">10K+</h4></span>
                        <p className="text-mute">पाठक</p>
                    </div>
                </div>
            </section>
            <Featuredpoet/>
        </>

    )
}
export default Home;