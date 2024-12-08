let slider = document.getElementById("yearly");
let time = document.getElementById("time");
let interest = document.getElementById("interest");
let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");
let range3 = document.getElementById("range3");
let emi = document.getElementsByClassName('emi')
let pamount = document.getElementsByClassName('pamount')
let iamount = document.getElementsByClassName('iamount')
let tamount = document.getElementsByClassName('tamount')


let principalValue = parseFloat(slider.value) || 0;
let timeValue = parseFloat(time.value) || 1;
let annualInterestValue = parseFloat(interest.value) || 1;

slider.addEventListener("change", function (event) {
  range1.value = event.target.value;
});

slider.addEventListener("mousemove", function (event) {
    range1.value = event.target.value;
    principalValue = parseFloat(event.target.value);
    calculateTotal();
  });

time.addEventListener("change", function (event) {
  range2.value = event.target.value;

});

time.addEventListener("mousemove", function (event) {
  range2.value = event.target.value;
  timeValue = parseFloat(event.target.value);
  calculateTotal();
});

interest.addEventListener("change", function (event) {
  range3.value = event.target.value;
});

interest.addEventListener("mousemove", function (event) {
  range3.value = event.target.value;
  annualInterestValue = parseFloat(event.target.value);
  calculateTotal();
});

function calculateTotal() {
  let p = principalValue;
  let n = timeValue;
  let i = annualInterestValue;

  let tenureInMonths=timeValue * 12;

  const monthlyInterestRate = (annualInterestValue / 12) / 100;
  const emivalue = (principalValue * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) / (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);

  const totalAmountPayable = emivalue * tenureInMonths;
  const interestAmount = totalAmountPayable - principalValue;


  emi[0].innerHTML = Math.round( emivalue);
  pamount[0].innerHTML = Math.round(principalValue);
  iamount[0].innerHTML = Math.round(interestAmount);
  tamount[0].innerHTML = Math.round(totalAmountPayable);


  const xArray = ["Principal Amount", "Interest Amount", ];
const yArray = [principalValue,interestAmount];

const layout = {title:"Emi Calculator in Graphics"};

const data = [{labels:xArray, values:yArray, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);

}
  

calculateTotal();


range1.addEventListener("keyup", function (event) {
    slider.value = event.target.value;
});
range2.addEventListener("keyup", function (event) {
  time.value = event.target.value;
});
range3.addEventListener("keyup", function (event) {
    interest.value = event.target.value;
});