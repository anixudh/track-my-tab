import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Alert from "./Alert";
import "../../styles/Alerts.css";
const AlertsSection = ({ portfolio }) => {
  const [weekAlerts, setWeekAlerts] = useState([]);
  const [dayAlerts, setDayAlerts] = useState([]);
  const date = dayjs(new Date());
  useEffect(() => {
    const computeWeekAlerts = () => {
      let temp = portfolio.filter((drug) => {
        return date.isSame(drug.duration, "week");
      });
      setWeekAlerts([...temp]);
    };
    const computeDayAlerts = () => {
      let temp = portfolio.filter((drug) => {
        return date.isSame(drug.duration, "day");
      });
      setDayAlerts([...temp]);
    };
    computeDayAlerts();
    computeWeekAlerts();
  }, []);
  return (
    <div className="alerts-section">
      <div className="day-alerts">
        <h3>Daily Alerts </h3>
        {dayAlerts.length === 0
          ? "No daily alerts..."
          : dayAlerts.map((drug) => {
              return <Alert key={drug.id} drug={drug} />;
            })}
      </div>
      <div className="weekly-alerts">
        <h3>Weekly Alerts </h3>
        {weekAlerts.length === 0
          ? "No weekly alerts..."
          : weekAlerts.map((drug) => {
              return <Alert key={drug.id} drug={drug} />;
            })}
      </div>
    </div>
  );
};

export default AlertsSection;
