import PropTypes from 'prop-types'
CalculatorOperators.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,

}

export default function CalculatorOperators ({value, setValue}){
    return (
      <div className="panel">
        <p>{value}</p>
        <div className="numbers">
          <button onClick={() => setValue("+")}>+</button>
          <button onClick={() => setValue("-")}>-</button>
          <button onClick={() => setValue("*")}>*</button>
          <button onClick={() => setValue("÷")}>÷</button>
        </div>
      </div>
    )
}