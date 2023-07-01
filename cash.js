
var  input = document.querySelector("#txt-ip");
var cash = document.querySelector("#cash-ip");
var  touch = document.querySelector("#btn");
var massage = document.querySelector("#error-msg");

var noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000,500,100,20,10,5,1] ;


function calCulate(amountBeReturned){              //   step 2. logic and calculation part for retruning  minimum  no of notes 

    for(let i=0;i<notes.length;i++){
        const numberofnotes = Math.trunc(amountBeReturned /notes[i]);
        amountBeReturned %= notes[i];
        noOfNotes[i].innerText = numberofnotes;
    }

}

// callback fuction of addEventListenr 
function addEventHandler(){          

    hideMassage();
    validationCashAndBill();                     //    step 1.  main  concept  part 

}

function validationCashAndBill(){

    

    if(input.value > 0){

        if(cash.value >= input.value){                      //nested loop
                    
            const amountBeReturned = cash.value -input.value ;
            calCulate(amountBeReturned);                            // this fuction for calacution 
        }
        else 
        {
            showMassage("Do you wanna wash plates? ...");             // this function shows output of v
        }
    }
    else {
        // showMassage("Invalid Bill Amount  ");
        showMassage("hint : fill the both field.. with greater then zero ");

   
    } 
}

touch.addEventListener("click",addEventHandler);       // button  ->   using addEventListener  for result 


function hideMassage(){                 // hide masaage after validation 
    massage.style.display = "none";
}


function showMassage(msg){                     // show output -> validation  part
    massage.style.display ="block";
    massage.innerText = msg;
}