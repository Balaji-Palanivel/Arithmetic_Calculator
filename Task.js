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
         store(operationName,x,y);
      }
      else
      {
        document.getElementById("resultHere").innerHTML = "Given Input is not a number";
      }
      };
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
