let number = "";
let num1 = "";
let operator = "";
let result_tmp = "";
let answerField = document.querySelector(".answer-field");
answerField.value = "0";

function GetValue(element) 
{
    let digit = element.textContent.trim();
    
    if (digit == "AC") 
    {
        answerField.value = "0";
        number = "";
        num1 = "";
        operator = "";
        result_tmp = "";
    } 
    else 
    {
        if (digit != "+" && digit != "-" && digit != "×" && digit != "÷" && digit != "=") 
        {
            if (digit == "+/-") 
            {
                if (number !== "") 
                {
                    number = (parseFloat(number) * -1).toString();
                    answerField.value = number;
                }
            } 
            else if (digit == "%") 
            {
                if (number !== "") {
                    number = (parseFloat(number) / 100).toString();
                    answerField.value = number;
                }
            } else {
                if (number == "0" && digit != "0") 
                {   
                    number = digit;
                } 
                else 
                {   
                    number += digit;
                }
                answerField.value = number;
            }
        } 
        else 
        {
            if (num1 == "") 
            {
                num1 = parseFloat(number);
            } 
            else if (number != "") 
            {
                let num2 = parseFloat(number); 
                result_tmp = calculate(num1, operator, num2); 
                num1 = result_tmp; 
            }
            
            if (digit == "=") 
            {
                answerField.value = result_tmp; 
                number = "";
            } 
            else 
            {
                operator = digit;
                number = "";
            }
        }
    }
}

function calculate(num1, operator, num2) 
{
    let result;
    if(operator == "+")
        result = num1 + num2;
    if(operator == "-")
        result = num1 - num2;
    if(operator == "×")
        result = num1 * num2;
    if(operator == "÷")
    {
        if(num2 != 0)
            result = num1 / num2;
        else
            result = Infinity;
    }
        
    return result;
}