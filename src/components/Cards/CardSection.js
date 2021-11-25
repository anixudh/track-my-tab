import Card from "./Card";

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
    </div>
  );
};

export default CardSection;
