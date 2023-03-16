import "./confirmed.style.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmedCard = ({ onSubmit }) => {
  const onSubmitHandler = () => {
    onSubmit();
  };

  return (
    <div className="confirm-container">
      <span className="check-icon">
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <h1>THANK YOU!</h1>
      <p className="conf-paragraph">We've added your card details</p>
      <button onClick={onSubmitHandler} type="submit" className="btn-continue">
        Continue
      </button>
    </div>
  );
};

export default ConfirmedCard;
