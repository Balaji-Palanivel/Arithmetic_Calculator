
var Hist = [];
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
         retrieveRecords(operationName,x,y,output);         
      }
      else
      {
        document.getElementById("resultHere").innerHTML = "Given Input is not a number";
      }
      };
//------------------------------------------------------------------------------------------------------------------

 
function retrieveRecords(key,x,y,output)
   { 
    string=""
    if (key=='add'){
    	string += +x+ " + " +y+ " = " +output+ "";}
    else if (key=='sub'){
    	string += +x+ " - " +y+ " = " +output+ "";}
    else if (key=='mul'){
    	string += +x+ " * " +y+ " = " +output+ "";}
    else{
    	string += +x+ " / " +y+ " = " +output+ "";}
    Hist.push(string);
   if (window.localStorage.getItem("cal") == null)
       {
         window.localStorage.setItem("cal",JSON.stringify(Hist));
       }
   else{
         window.localStorage.setItem("cal",JSON.stringify(Hist));
       }
   
         window.movies2 = JSON.parse(window.localStorage.getItem("cal")); 
  }
//------------------------------------------------------------------------------------------------------------------ 
   
   function myFunction() {
   
   document.getElementById("history").innerHTML =`<div style="background-color:black;color:white;padding:20px;">
     <h2>History</h2>
     <ul id="myList" >
     <li style="list-style-type:none;"></li>
     </ul>            
     </div>`
     if (Hist.length != 0){
     for (var i = 0; i < window.movies2.length; i++) 
        {
    	const node = document.createElement("li");
        const textnode = document.createTextNode(window.movies2[i]);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node); 	     
    	}
	}
     }
   
   function del()
   {
      var arr2 = Hist; 
      Hist = [];
   }  
    


