var noDuplicate = false;
var noDuplicatepoint = false;

function number(x){ //gets element
    var num=x.value;  //gets element's value and equals it to variable num   
    document.getElementById("screen-bottom").innerHTML=document.getElementById("screen-bottom").innerHTML+num; //writes the numer into innerHTML and memorizes it
    noDuplicate=false; //it means we can place a calculation symbol after a number
}

function point(x){ //i decided to create another function for point "."
    var calc=document.getElementById("screen-bottom").innerHTML;
    var control=calc.charAt(calc.length-1);
    if(control!="."){
        if(noDuplicatepoint==false){
            var num=x.value;
            document.getElementById("screen-bottom").innerHTML=document.getElementById("screen-bottom").innerHTML+num;
            noDuplicatepoint=true;
        }else{} 
    }
    
}

function calculations(x){
    var a=x.value;
    switch(a){
        case "+" : //if value is a "+"
            var calc=document.getElementById("screen-bottom").innerHTML;
            if(noDuplicate==false){ //checking duplication of calculation symbols
                calc=calc+"+"; //places a "+" on memory
                document.getElementById("screen-bottom").innerHTML=calc; // writes memory to innerHTML
                noDuplicate=true; // marks that we placed a "+" in the end of string
                noDuplicatepoint=false; // marks that we can place a point "."
            }else{ // if theres a duplication of calculation symbols
                calc = calc.substring(0, calc.length - 1); //removes last letter or symbol
                document.getElementById("screen-bottom").innerHTML=calc+"+"; //replaces with a new symbol, so we can dynamically change between symbols
                noDuplicatepoint=false;
            }
        break;
        case "-" :
            var calc=document.getElementById("screen-bottom").innerHTML;
            if(noDuplicate==false){
                calc=calc+"-";
                document.getElementById("screen-bottom").innerHTML=calc;
                noDuplicate=true;
                noDuplicatepoint=false;
            }else{
                calc = calc.substring(0, calc.length - 1);
                document.getElementById("screen-bottom").innerHTML=calc+"-";
                noDuplicatepoint=false;
            }
        break;
        case "×" :
            var calc=document.getElementById("screen-bottom").innerHTML;
            if(noDuplicate==false){
                calc=calc+"*";
                document.getElementById("screen-bottom").innerHTML=calc;
                noDuplicate=true;
                noDuplicatepoint=false;
            }else{
                calc = calc.substring(0, calc.length - 1);
                document.getElementById("screen-bottom").innerHTML=calc+"*";
                noDuplicatepoint=false;
            }
        break;
        case "÷" :
            var calc=document.getElementById("screen-bottom").innerHTML;
            if(noDuplicate==false){
                calc=calc+"/";
                document.getElementById("screen-bottom").innerHTML=calc;
                noDuplicate=true;
                noDuplicatepoint=false;
            }else{
                calc = calc.substring(0, calc.length - 1);
                document.getElementById("screen-bottom").innerHTML=calc+"/";
                noDuplicatepoint=false;
            }
        break;
        case "AC" :
            //picks innerHTML and removes last string - v below v
            var calc=document.getElementById("screen-bottom").innerHTML;
            calc = calc.substring(0, calc.length - 1);
            document.getElementById("screen-bottom").innerHTML=calc;
            //checks if the last word is a calculation - v below v 
            var control=calc.charAt(calc.length-1);
            if(control=="+" || control=="-" || control=="/" || control=="*"){
                noDuplicate=true;
            }else{noDuplicate=false;}  
        break;
        case "RV" :
            document.getElementById("screen-bottom").innerHTML="";
            document.getElementById("screen-top").innerHTML="";
        break;
    }
}

function calculate(){
    var calc=document.getElementById("screen-bottom").innerHTML;
    if(calc==""){ //if innerHTML is empty return empty. to avoid "undefined" string that appears
        document.getElementById("screen-bottom").innerHTML="";
        document.getElementById("screen-top").innerHTML="";
    }else {
        document.getElementById("screen-top").innerHTML=calc+"=";
        var result = eval(calc); //im aware of eval() but im a beginner javascripter so i cannot build my own string calc function i will see it later.
        document.getElementById("screen-bottom").innerHTML=result;
    }
}