import { useState} from "react";
import CalculatorNumbers from "./CalculatorNumbers";
import CalculatorOperators from "./CalculatorOperators";

export default function Calculator() {

    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [operator, setOperator] = useState("+")
    const [sum, setSum] = useState(0)
  
    const calculateSum = () => {
      switch(operator) {
        case "+":
          setSum(number1 + number2);
          break;
        case "-":
          setSum(number1 - number2);
          break;
        case "*":
          setSum(number1 * number2);
          break;
        case "÷":
          setSum(number1 / number2);
          break;
      }
    }
  
    return (
      <div className="calculator">
        <CalculatorNumbers setValue={setNumber1} value={number1} />
        <CalculatorOperators setValue={setOperator} value={operator} />
        <CalculatorNumbers setValue={setNumber2} value={number2} />
  
        <div className="panel answer">
        <p>{sum}</p>
          <div>
            <button className="sum" onClick={() => calculateSum()}>=</button>
            <button className="reset" onClick={() => setSum(0)}>Clear</button>
          </div>
        </div>
      </div>
    )
}

