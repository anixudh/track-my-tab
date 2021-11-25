import CardSection from "./Cards/CardSection";
import Alerts from "./Alerts";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Home = ({ portfolio, removeDrugCard }) => {
  return (
    <div className="home-page">
      <h1> This is home! </h1>

      {portfolio.length === 0 ? (
        false
      ) : (
        <CardSection portfolio={portfolio} removeDrugCard={removeDrugCard} />
      )}
      <Link to="/browse/">
        <AiOutlinePlusCircle size={60} />
      </Link>

      <div className="alerts-section">
        <Alerts portfolio={portfolio} />
      </div>
    </div>
  );
};

export default Home;
