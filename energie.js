document.addEventListener("DOMContentLoaded", function() {

let input = document.getElementById("input")
let NotFound = document.getElementById("NotFound")
let calculateBttn = document.getElementById("Calculate")
let reset = document.getElementById("Reset")

let Result = document.getElementById("Result")
let selected = document.getElementById("Selected")

const foodNames = [
  "chleb",
  "ryze",
  "testoviny",
  "ovesne",
  "kure",
  "veprove",
  "hovezi",
  "losos",
  "tunak",
  "mleko",
  "jogurt",
  "tvaroh",
  "jablko",
  "banan",
  "pomeranc",
  "hrozny",
  "jahody",
  "mrkev",
  "okurka",
  "rajce",
  "paprika",
  "brambory",
  "ořechy",
  "mandle",
  "cokolada",
  "cukr",
  "med",
  "maslo"
];
const calories = [
  265,
  130,
  130,
  370,
  165,
  242,
  250,
  206,
  116,
  50,
  61,
  66,
  52,
  89,
  47,
  69,
  33,
  41,
  15,
  18,
  31,
  87,
  654,
  579,
  535,
  387,
  304,
  717
];

let selectedArray = []
var total = 0;

calculateBttn.addEventListener("click",
function()
{
  var found = false;

  if (input)
  {

    let inputValue = document.getElementById("input").value
    for (let i = 0; i < foodNames.length; i++)
    {

      if (inputValue == foodNames[i])
      {
        found = true
        total += calories[i]
        input.value = "" //reset input
        selectedArray.push(inputValue)
        selected.innerHTML = "Vybráno: " + selectedArray
      }
    }

    if(!found)
    {
      NotFound.innerHTML = "položka nenalezena";
    }

    console.log(inputValue)
    Result.innerHTML = total + "kCal"

  } else Result.innerHTML = "Zadejte položku!!"
});

reset.addEventListener("click", 
  function()
  {
    total = 0
    selectedArray = []

    Result.innerHTML = total + "kCal"
    selected.innerHTML = "Vybráno: " + selectedArray
  }
)
});