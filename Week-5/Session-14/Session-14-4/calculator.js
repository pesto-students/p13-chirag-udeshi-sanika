window.addEventListener("DOMContentLoaded", attachListeners);
let allSelected = false;

function attachListeners() {
  let radioButtons = document.querySelectorAll("input[type='radio']");
  for (let button of radioButtons) {
    button.addEventListener("click", function () {
      updateScore();
    });
  }
}
function updateScore() {
  //First check if all values are selected by the user
  checkAllValuesSelected();
  if (allSelected) {
    document.getElementById("warning").setAttribute("style", "display:none");
    //calculate score

    const scoreFinal =
      getScopeStatus() *
      (3.326258289 * getScoreBase() + 1.1 * getScoreExploitability());

    document.getElementById("score").innerHTML = scoreFinal.toFixed(2);
  }
}

function getScopeStatus() {
  const scopeStatus = document.querySelector(
    'input[name="scope"]:checked'
  ).value;
  return scopeStatus;
}

function getScoreBase() {
  const BaseConfidentialityReference = [
    [0.0, 0.22, 0.56],
    [0.0, 0.65, 0.75],
    [0.0, 0.85, 0.95],
  ];

  const sensitivity = document.querySelector(
    'input[name="sens"]:checked'
  ).value;
  const confidentiality = document.querySelector(
    'input[name="conf"]:checked'
  ).value;

  const baseConfidentiality =
    BaseConfidentialityReference[parseInt(sensitivity)][
      parseInt(confidentiality)
    ];

  const BaseIntegrityReference = [
    [0.0, 0.22, 0.56],
    [0.55, 0.6, 0.75],
    [0.85, 0.9, 0.95],
  ];

  const healthImpact = document.querySelector(
    'input[name="health"]:checked'
  ).value;
  const integrity = document.querySelector('input[name="integ"]:checked').value;

  const baseIntegrity =
    BaseIntegrityReference[parseInt(healthImpact)][parseInt(integrity)];

  const BaseAvailabilityReference = [
    [0.0, 0.22, 0.56],
    [0.55, 0.6, 0.65],
    [0.85, 0.9, 0.95],
  ];

  const availability = document.querySelector(
    'input[name="avail"]:checked'
  ).value;

  const baseAvailability =
    BaseAvailabilityReference[parseInt(healthImpact)][parseInt(availability)];

  return baseConfidentiality + baseIntegrity + baseAvailability;
}

function getScoreExploitability() {
  const attackVector = document.querySelector('input[name="AV"]:checked').value;

  const attackComplexity = document.querySelector(
    'input[name="AC"]:checked'
  ).value;

  const priviledgeRequired = document.querySelector(
    'input[name="PR"]:checked'
  ).value;

  const userInteraction = document.querySelector(
    'input[name="UI"]:checked'
  ).value;

  return attackVector * attackComplexity * priviledgeRequired * userInteraction;
}
function checkAllValuesSelected() {
  const radioFields = [
    "AV",
    "AC",
    "PR",
    "UI",
    "scope",
    "conf",
    "integ",
    "avail",
    "health",
    "sens",
  ];

  radioFields.every((radioGroup) => {
    const group = document.querySelectorAll(`input[name=${radioGroup}]`);
    let i = 0;
    for (i = 0; i < group.length; i++) {
      if (group[i].checked) break;
    }
    if (i == group.length) {
      allSelected = false;
      return false;
    } else {
      allSelected = true;
      return true;
    }
  });
}
