import { useState } from "react";

const DrugPage = ({ drug, addToPortfolio }) => {
  const [form, setForm] = useState(false);
  const openForm = (e) => {
    setForm(true);
  };
  const closeForm = (e) => {
    setForm(false);
  };

  return (
    <div className="drug-details">
      <h1> Drug info page</h1>
      <h1> {drug.name}</h1>
      <button className="open-form" onClick={openForm}>
        Add{" "}
      </button>
      {form ? (
        <div className="portfolio-form">
          Duration: <input type="date" className="medicine-duration-form" />
          Daily Dosage: <input type="text" className="daily-dosage-form" />
          <button className="add-to-portfolio" onClick={addToPortfolio}>
            Submit
          </button>
          <button className="close-form" onClick={closeForm}>
            {" "}
            X{" "}
          </button>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default DrugPage;
