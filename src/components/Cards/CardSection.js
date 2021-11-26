import Card from "./Card";
import { FcPlus } from "react-icons/fc";
import { Link } from "react-router-dom";
import "../../styles/CardSection.css";
const CardSection = ({ portfolio, removeDrugCard }) => {
  return (
    <div className="card-section">
      {portfolio.map((drug) => {
        return (
          <Card drug={drug} key={drug.id} removeDrugCard={removeDrugCard} />
        );
      })}
      <Link to="/browse/">
        <FcPlus size={60} />
      </Link>
    </div>
  );
};

export default CardSection;
