import "./form.style.css";
import { useEffect, useState } from "react";
import Input from "../input-component/input";

const FormContainer = ({ onSetInputs, onSubmit }) => {
  const [inputs, setInputs] = useState({
    name: {
      value: "",
      isValid: true,
      error_message: "",
    },
    number: {
      value: "",
      isValid: true,
      error_message: "",
    },
    date_mm: {
      value: "",
      isValid: true,
      error_message: "",
    },
    date_yy: {
      value: "",
      isValid: true,
      error_message: "",
    },
    cvc: {
      value: "",
      isValid: true,
      error_message: "",
    },
  });

  const inputHandler = (inputVariant, e) => {
    if (
      inputVariant === "number" &&
      e.target.value.split(" ").join("").length <
        inputs.number.value.split(" ").join("").length &&
      (e.target.value.split(" ").join("").length === 4 ||
        e.target.value.split(" ").join("").length === 8 ||
        e.target.value.split(" ").join("").length === 12)
    ) {
      e.target.value = e.target.value.slice(0, -1);
    }

    if (
      inputVariant === "number" &&
      e.target.value.split(" ").join("").length === 5 &&
      e.target.value.split(" ").join("").length >
        inputs.number.value.split(" ").join("").length
    ) {
      e.target.value =
        e.target.value.substring(0, 4) + " " + e.target.value.substring(4, 8);
    }
    if (
      inputVariant === "number" &&
      e.target.value.split(" ").join("").length === 9 &&
      e.target.value.split(" ").join("").length >
        inputs.number.value.split(" ").join("").length
    ) {
      e.target.value =
        e.target.value.substring(0, 9) + " " + e.target.value.substring(9, 12);
    }
    if (
      inputVariant === "number" &&
      e.target.value.split(" ").join("").length === 13 &&
      e.target.value.split(" ").join("").length >
        inputs.number.value.split(" ").join("").length
    ) {
      e.target.value =
        e.target.value.substring(0, 14) +
        " " +
        e.target.value.substring(14, 16);
    }
    setInputs((current) => {
      return {
        ...current,
        [inputVariant]: {
          value: e.target.value,
          isValid: true,
          error_message: "",
        },
      };
    });
  };

  const onSubmitHandler = () => {
    const nameIsValid = inputs.name.value.length > 0;
    const numberIsValid =
      !isNaN(inputs.number.value.split(" ").join("")) &&
      inputs.number.value.length > 0;
    const date_mmIsValid =
      !isNaN(inputs.date_mm.value) && inputs.date_mm.value.length > 0;
    const date_yyIsValid =
      !isNaN(inputs.date_yy.value) && inputs.date_yy.value.length > 0;
    const cvcIsValid = !isNaN(inputs.cvc.value) && inputs.cvc.value.length > 0;

    if (
      !numberIsValid ||
      !nameIsValid ||
      !date_mmIsValid ||
      !date_yyIsValid ||
      !cvcIsValid
    ) {
      setInputs((current) => {
        return {
          name: {
            value: current.name.value,
            isValid: nameIsValid,
            error_message: "Can't be blank",
          },
          number: {
            value: current.number.value,
            isValid: numberIsValid,
            error_message:
              inputs.number.value.length !== 0 && !numberIsValid
                ? "Wrong format, numbers only"
                : "Can't be blank",
          },
          date_mm: {
            value: current.date_mm.value,
            isValid: date_mmIsValid,
            error_message:
              inputs.date_mm.value.length !== 0
                ? "Wrong format, numbers only"
                : "Can't be blank",
          },
          date_yy: {
            value: current.date_yy.value,
            isValid: date_yyIsValid,
            error_message:
              inputs.date_yy.value.length !== 0
                ? "Wrong format, numbers only"
                : "Can't be blank",
          },
          cvc: {
            value: current.cvc.value,
            isValid: cvcIsValid,
            error_message:
              inputs.cvc.value.length !== 0
                ? `Wrong format, numbers only`
                : "Can't be blank",
          },
        };
      });
      return;
    }
      onSubmit();
    
  };

  useEffect(() => {
    onSetInputs(inputs);
  }, [inputs]);

  return (
    <div className="form-container">
      <Input
        label="CARDHOLDER NAME"
        isValid={inputs.name.isValid}
        inputConfig={{
          type: "text",
          name: "name",
          id: "name",
          placeholder: "e.g. Jane Appleseed",
          onChange: inputHandler.bind(this, "name"),
          className: !inputs.name.isValid ? "invalid" : "",
        }}
        error_message={inputs.name.error_message}
        labelConfig={{
          className: "label error-label",
        }}
      />
      <Input
        label="CARD NUMBER"
        isValid={inputs.number.isValid}
        inputConfig={{
          type: "text",
          name: "number",
          id: "number",
          maxLength: "19",

          placeholder: "e.g. 1234 5678 9123 0000",
          onChange: inputHandler.bind(this, "number"),
          className: !inputs.number.isValid ? "invalid" : "",
        }}
        error_message={inputs.number.error_message}
        labelConfig={{
          className: "label error-label",
        }}
      />

      <div className="card-details-container">
        <div>
          <label className="label" htmlFor="name">
            EXP. DATE(MM/YY)
          </label>
          <div className="card-date">
            <Input
              isValid={inputs.date_mm.isValid}
              inputConfig={{
                type: "text",
                name: "date_mm",
                id: "date_mm",
                maxLength: "2",
                placeholder: "MM",
                onChange: inputHandler.bind(this, "date_mm"),
                className: !inputs.date_mm.isValid
                  ? "invalid card-date-input"
                  : "card-date-input",
              }}
              error_message={inputs.date_mm.error_message}
              labelConfig={{
                className: "label error-label error-label-date",
              }}
            />
            <Input
              isValid={inputs.date_yy.isValid}
              inputConfig={{
                type: "text",
                name: "date_yy",
                id: "date_yy",
                maxLength: "2",
                placeholder: "YY",
                onChange: inputHandler.bind(this, "date_yy"),
                className: !inputs.date_yy.isValid
                  ? "invalid card-date-input"
                  : "card-date-input",
              }}
              error_message={inputs.date_yy.error_message}
              labelConfig={{
                className: "label error-label error-label-date",
              }}
            />
          </div>
        </div>

        <div>
          <div>
            <label className="label" htmlFor="cvc">
              CVC
            </label>
            <div className="card-cvc">
              <Input
                isValid={inputs.cvc.isValid}
                inputConfig={{
                  type: "text",
                  name: "cvc",
                  id: "cvc",
                  maxLength: "3",
                  placeholder: "e.g. 123",
                  onChange: inputHandler.bind(this, "cvc"),
                  className: !inputs.cvc.isValid
                    ? "invalid card-cvc-input"
                    : "card-cvc-input",
                }}
                error_message={inputs.cvc.error_message}
                labelConfig={{
                  className: "label error-label",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <button onClick={onSubmitHandler}>
        Confirm
      </button>
    </div>
  );
};

export default FormContainer;
