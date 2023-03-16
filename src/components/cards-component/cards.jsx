import "./cards.style.css";

const Cards = ({ number, name, date_mm, date_yy, cvc }) => {
  return (
    <div className="cards-container">
      <div className="card-front">
        <img className="card-image" src={require("../../images/bg-card-front.png")} alt="card-front" />
        <div className="card-info-container">
          <div className="card-logo">
            <span className="dot"></span>
            <span className="circle"></span>
          </div>
          <h2>{number ? number : "0000 0000 0000 0000"}</h2>
          <div className="card-name-date">
            <p>{name ? name : "Jane Appleseed"}</p>
            <div className="card-date">
              <p className="date-place">{date_mm ? date_mm : "00"}</p>
              <p>/</p>
              <p className="date-place">{date_yy ? date_yy : "00"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-back">
        <img className="card-image" src={require("../../images/bg-card-back.png")} alt="card-back" />
        <div className="cvc-container">
          <p>{cvc ? cvc : "000"}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
