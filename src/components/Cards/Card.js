import "../../styles/Card.css";
const Card = ({ drug, removeDrugCard }) => {
  return (
    <div className="card" id={drug.id}>
      <div className="card-drug-name">{drug.name}</div>
      <div className="card-drug-name">{drug.dosage}</div>
      <div className="card-drug-name">{drug.duration}</div>
      <button className="remove-drug-card" onClick={removeDrugCard}>
        {" "}
        X{" "}
      </button>
    </div>
  );
};

export default Card;
