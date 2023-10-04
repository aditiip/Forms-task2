//using usestate for managing component level
import React,{useState} from "react";


function Calculator(){
    //we declare 3 state variables
    const [input1,setState1]=useState("");
    const [input2,setState2]=useState("");
    const[sum,setSum]=useState("")

    //handleInputchange whenever change occur in input it assign value  to statevar
    const handleInputChange =(e)=>{
        if (e.target.name==="input1"){
            setState1(e.target.value);
        }
            else {
            setState2(e.target.value);
            }
        };
        //sum calculated by this function
    const calsum=()=>{
       const num1=parseFloat(input1);//convert to float
       const num2=parseFloat(input2);

       if(!isNaN(num1) && !isNaN(num2)){//if its not a  nonnumber
        setSum(num1+num2);
       }
       else{
        setSum("invalid input")
       }

    };

        return(
            <div>
                <h1>enter two numbers</h1>
                <form>
                    
                    <input type="text" name="input1" value={input1} onChange={handleInputChange} placeholder="enter 1st number" />
                    <input type="text" name="input2" value={input2} onChange={handleInputChange} placeholder="enter 2nd number"/>
                    <br></br><button type="button" onClick={calsum}>calculate</button>
                </form>
                <div>

                <strong>sum:</strong>{sum}
                </div>
            </div>

        );
    }

    export default Calculator;



