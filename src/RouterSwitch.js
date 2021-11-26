import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Nav from "./components/Nav";
import DrugPage from "./components/Drugs/DrugPage";
import { useState } from "react";
import App from "./App";
const RouterSwitch = () => {
  const [currentDrug, setCurrentDrug] = useState({});
  const [portfolio, setPortfolio] = useState([]);
  const addToPortfolio = (e) => {
    const id = currentDrug.rxcui;
    const name = currentDrug.name;
    const duration = document.querySelector(".medicine-duration-form").value;
    const dosage = document.querySelector(".daily-dosage-form").value;
    console.log({ id, name, duration, dosage });
    setPortfolio([...portfolio, { id, name, duration, dosage }]);
  };
  const removeDrugCard = (e) => {
    let tempPortfolio = portfolio;
    let delId = e.target.parentNode.id;
    let delIndex = -1;
    for (let i = 0; i < tempPortfolio.length; i++) {
      if (tempPortfolio[i].id === delId) {
        delIndex = i;
        break;
      }
    }
    tempPortfolio = tempPortfolio
      .slice(0, delIndex)
      .concat(tempPortfolio.slice(delIndex + 1));
    console.log(tempPortfolio);
    setPortfolio([...tempPortfolio]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path="/" element={<App />} />
        <Route
          path="/home"
          element={
            <Home portfolio={portfolio} removeDrugCard={removeDrugCard} />
          }
        />
        <Route
          path="/browse"
          element={<Browse setCurrentDrug={setCurrentDrug} />}
        />
        <Route
          path="/browse/:id"
          element={
            <DrugPage drug={currentDrug} addToPortfolio={addToPortfolio} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
