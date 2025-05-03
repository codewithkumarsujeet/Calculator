const input = document.getElementById("number-input");
const equalButton = document.querySelector(".equal");
const result = document.getElementById("result");
const AC = document.querySelector(".AC");
const x = document.querySelector(".x");

function handleClicButton(el) {
  input.value += el.innerText;
}

equalButton.addEventListener("click", () => {
  try {
    result.value = eval(input.value); // Use with caution
    // input.value = "";
  } catch (error) {
    alert("Invalid expression");
  }
});

AC.addEventListener("click", ()=>{
  result.value = "";
  input.value = "";
})

x.addEventListener("click", ()=>{
 input.value = input.value.slice(0, -1);
})