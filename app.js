const inputValue = document.getElementById("input-value");
const convertBtn = document.getElementById("btn-convert");

const lengthField = document.getElementById("output-length");
const volumeField = document.getElementById("output-volume");
const massField = document.getElementById("output-mass");

convertBtn.addEventListener("click", () => {
  const currentValue = Number(inputValue.value);

  const meter = currentValue / 3.281;
  const foot = currentValue * 3.281;
  const liters = currentValue * 3.785;
  const gallon = currentValue / 3.785;
  const kilogram = currentValue / 2.205;
  const pounds = currentValue * 2.205;

  lengthField.textContent = `${currentValue} meters = ${foot} feet | ${currentValue} feet = ${meter} meters`;
  volumeField.textContent = `${currentValue} liters = ${gallon} gallons | ${currentValue} gallons = ${liters} liters`;
  massField.textContent = `${currentValue} kilos = ${pounds} pounds | ${currentValue} pounds = ${kilogram} kilos`;
});
