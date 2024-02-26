import PropTypes from 'prop-types';

export default function CalculatorNumbers ({ value, setValue }){

    const SetNumberButton = () => {
        if(value[0] === 0 && value[1] !== null || value[0] === 0 && value[1] === 0){
            value.shift();
        }

        return value;
    }
    
    return (
        <div className="panel">
        <p>{SetNumberButton()}</p>
          <div className="numbers">
            <button onClick={() => setValue(value += "1")}>1</button>
            <button onClick={() => setValue(value += "2")}>2</button>
            <button onClick={() => setValue(value += "3")}>3</button>
            <button onClick={() => setValue(value += "4")}>4</button>
            <button onClick={() => setValue(value += "5")}>5</button>
            <button onClick={() => setValue(value += "6")}>6</button>
            <button onClick={() => setValue(value += "7")}>7</button>
            <button onClick={() => setValue(value += "8")}>8</button>
            <button onClick={() => setValue(value += "9")}>9</button>
            <button onClick={() => setValue(value += "0")}>0</button>
            <button onClick={() => setValue(0)}>Clear</button>
          </div>
        </div>
    )
}

CalculatorNumbers.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
}