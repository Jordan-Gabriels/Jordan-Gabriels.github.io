// Grab values from the submitted form in the URL
const inputValues = new URLSearchParams(window.location.search);

// Assigning variables with values that the user input
const tasklength = Number(inputValues.get('length'));
const taskTime = Number(inputValues.get('time'));
const taskLocation = Number(inputValues.get('location'));
const taskAnxiety = Number(inputValues.get('anxiety'));
const taskFailureProb = Number(inputValues.get('failureProb'));




// Grabbing the failure probability 
// const result = document.getElementById('calculatedProbability');
const prob = document.getElementById('calculatedProbability');

const probabilityOfSuccess = (1-taskFailureProb)*tasklength*taskTime*taskLocation*taskAnxiety*100;

// Populating the failure probability  with text
prob.innerHTML = Math.round(probabilityOfSuccess) + '%';



 // console.log(result.innerHTML);
console.log(tasklength);
console.log(taskTime);
console.log(taskLocation);
console.log(taskAnxiety);
console.log(taskFailureProb);
console.log(probabilityOfSuccess);

