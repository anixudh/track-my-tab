import { useEffect, useState } from "react";
import Drug from "./Drugs/Drug";

const Browse = ({ setCurrentDrug }) => {
  const [drugName, setDrugName] = useState();
  const [drugInfo, setDrugInfo] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);

  const updateDrugName = (e) => {
    setDrugName(e.target.value);
  };
  const getMedicine = async (e) => {
    const url = "https://rxnav.nlm.nih.gov/REST/drugs.json?name=" + drugName;
    const response = await fetch(url);
    const drugInfo = await response.json();
    const drugArr = [...drugInfo.drugGroup.conceptGroup[1].conceptProperties];
    console.log(drugArr);
    setSubmitClicked(true);
    setDrugInfo(drugArr);
  };

  useEffect(() => {
    console.log(drugInfo);
  }, []);

  return (
    <div className="browse-page">
      <h1> This is browse! </h1>
      <input
        type="text"
        className="search-med-name"
        onChange={updateDrugName}
      />
      <button onClick={getMedicine}>Submit</button>
      {submitClicked ? (
        <div className="med-info">
          {drugInfo.map((drug) => {
            return (
              <Drug
                key={drug.rxcui}
                drug={drug}
                setCurrentDrug={setCurrentDrug}
              />
            );
          })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Browse;
