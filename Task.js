 var calculation = function(operationName, valueOfX, valueOfY) {
      if(operationName == 'add')
        return valueOfX + valueOfY;
      else if(operationName == 'sub')
        return valueOfX - valueOfY;
      else if(operationName == 'mul')
        return valueOfX * valueOfY;
      else if(operationName == 'div')
        return valueOfX / valueOfY
    } 
    var operation = function(operationName){
      x = document.getElementById("valueOfX").value
      y = document.getElementById("valueOfY").value
      if((x*1 == x) && (y*1 == y))
      {  
         output = calculation(operationName, parseInt(x), parseInt(y));
         document.getElementById("resultHere").innerHTML = output; 
<<<<<<< HEAD
=======
         store(operationName,x,y);
>>>>>>> 17c681131582a8c6aefcbab23eda9559a3351776
      }
      else
      {
        document.getElementById("resultHere").innerHTML = "Given Input is not a number";
      }
      };
<<<<<<< HEAD
=======
//-------------------------------------------------------------------------------------------
 function store(Operation,x,y){ //stores items in the localStorage
    var key = Operation //gets the key from the user
    const cal = {
        Number1: x,
        Number2: y,
    }
    window.localStorage.setItem(key,JSON.stringify(cal));  
    //converting object to string
}
>>>>>>> 17c681131582a8c6aefcbab23eda9559a3351776
