import CardSection from "./Cards/CardSection";
import AlertsSection from "./Alerts/AlertsSection";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = ({ portfolio, removeDrugCard }) => {
  return (
    <div className="home-page">
      <h1> Welcome to your dashboard! </h1>
      <h2>Your current prescription:</h2>
      {portfolio.length === 0 ? (
        <Link to="/browse/">
          <AiOutlinePlusCircle size={60} />
        </Link>
      ) : (
        <CardSection portfolio={portfolio} removeDrugCard={removeDrugCard} />
      )}

      <AlertsSection portfolio={portfolio} />
    </div>
  );
};

export default Home;
