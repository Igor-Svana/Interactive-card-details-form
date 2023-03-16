const Input = ({label, isValid, inputConfig, error_message, labelConfig}) => {
    return(
        <div className="field">
        <label className="label">
            {label}
        </label>
        <input
          {...inputConfig}
          
        />
        <label {...labelConfig}>
          {!isValid && error_message}
        </label>
      </div>
    )
}

export default Input;