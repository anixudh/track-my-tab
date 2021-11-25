import { Link } from "react-router-dom";
const Drug = ({ drug, setCurrentDrug }) => {
  return (
    <Link to={`/browse/${drug.rxcui}`}>
      <div
        className="drug"
        onClick={(e) => {
          setCurrentDrug(drug);
        }}
      >
        <div className="drug-id">ID:{drug.rxcui}</div>
        <div className="drug-name">Name:{drug.name}</div>
      </div>
    </Link>
  );
};

export default Drug;
