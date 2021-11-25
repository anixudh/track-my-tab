const Alert = ({ drug }) => {
  return (
    <div className="alert" id={drug.id}>
      <div className="alert-name">{drug.name}</div>
      <div className="alert-duration">{drug.duration}</div>
    </div>
  );
};

export default Alert;
