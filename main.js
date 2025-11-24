const dateOfBirth=document.querySelector("#date-of-birth");
const luckynumber=document.querySelector("#lucky-number");
const submit=document.querySelector("#submit");
const outputBox=document.querySelector("#output-box");

outputBox.innerText="";
function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++)
    {
        sum+=Number(dob.charAt(index));
    }
    return sum;
}
function compareValues(sum,luckyNumberA){
    if(sum%luckyNumberA==0)
        outputBox.innerText="Your Birthday is lucky 💫🌠"
    else
        outputBox.innerText="Your Birthday is not lucky 😔🥺"
}
function checkBirthdayIsLucky(){
    const dob=dateOfBirth.value;
const sum=calculateSum(dob);
if(sum&&dob)
    compareValues(sum,luckynumber.value);
else{
outputBox.innerText="Please enter both the fields 😡"
}
}

submit.addEventListener("click",checkBirthdayIsLucky);