import { useEffect, useState } from "react";
import Drug from "./Drugs/Drug";
import { AiOutlineSearch } from "react-icons/ai";
import "../styles/Browse.css";
import Loading from "./Loading";
const Browse = ({ setCurrentDrug }) => {
  const [drugName, setDrugName] = useState();
  const [drugInfo, setDrugInfo] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false);

  const updateDrugName = (e) => {
    setDrugName(e.target.value);
  };
  const getMedicine = async (e) => {
    document.querySelector(".loading").style.display = "block";
    const url = "https://rxnav.nlm.nih.gov/REST/drugs.json?name=" + drugName;
    const response = await fetch(url);
    const drugInfo = await response.json();
    document.querySelector(".loading").style.display = "none";
    if (Object.keys(drugInfo.drugGroup).length <= 1) {
      setSubmitClicked(true);
      setDrugInfo([]);
      return;
    }
    const drugArr = [...drugInfo.drugGroup.conceptGroup[1].conceptProperties];

    console.log(drugArr);
    setSubmitClicked(true);
    setDrugInfo(drugArr);
    console.log(drugArr);
  };

  useEffect(() => {
    document.querySelector(".loading").style.display = "none";
    console.log(drugInfo);
  }, []);

  return (
    <div className="browse-page">
      <h1> Enter Medicine Name </h1>
      <div className="search">
        <input
          type="text"
          className="search-med-name"
          onChange={updateDrugName}
        />
        <br></br>
        <button className="submit-button" onClick={getMedicine}>
          Submit
        </button>
        <Loading />
      </div>
      {submitClicked ? (
        <div className="med-info">
          {drugInfo.length === 0
            ? "Could not find the drug, please check spelling!"
            : drugInfo.map((drug) => {
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
