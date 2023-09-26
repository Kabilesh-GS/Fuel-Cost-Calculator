function displaykm() {
  document.getElementById("dddinkm").style.display = "block";
  document.getElementById("dddinmil").style.display = "none";
}
function displaymil() {
  document.getElementById("dddinkm").style.display = "none";
  document.getElementById("dddinmil").style.display = "block";
}
document.getElementById("Calculate").onclick = function () {
  let mp = document.getElementById("MileagePet").value;
  let md = document.getElementById("MileageDie").value;
  let mc = document.getElementById("MileageCng").value;

  let cp = document.getElementById("CostPet").value;
  let cd = document.getElementById("CostDie").value;
  let cc = document.getElementById("CostCng").value;

  let dddkm = document.getElementById("dailydrivediskm").value;
  let dddmil = document.getElementById("dailydrivedismil").value;

  if (document.getElementById("kilometer").checked) {
    let pricedaypet = (cp / mp) * dddkm;
    let pricemontpet = (cp / mp) * 30 * dddkm;
    let priceyearpet = (cp / mp) * 365 * dddkm;

    let pricedaydie = (cd / md) * dddkm;
    let pricemontdie = (cd / md) * 30 * dddkm;
    let priceyeardie = (cd / md) * 365 * dddkm;

    let pricedaycng = (cc / mc) * dddkm;
    let pricemontcng = (cc / mc) * 30 * dddkm;
    let priceyearcng = (cc / mc) * 365 * dddkm;

    document.getElementById("DailyPet").innerHTML =
      "₹" + pricedaypet.toFixed(2);
    document.getElementById("MonthlyPet").innerHTML =
      "₹" + pricemontpet.toFixed(2);
    document.getElementById("yearlyPet").innerHTML =
      "₹" + priceyearpet.toFixed(2);

    document.getElementById("DailyDie").innerHTML =
      "₹" + pricedaydie.toFixed(2);
    document.getElementById("MonthlyDie").innerHTML =
      "₹" + pricemontdie.toFixed(2);
    document.getElementById("yearlyDie").innerHTML =
      "₹" + priceyeardie.toFixed(2);

    document.getElementById("DailyCng").innerHTML =
      "₹" + pricedaycng.toFixed(2);
    document.getElementById("MonthlyCng").innerHTML =
      "₹" + pricemontcng.toFixed(2);
    document.getElementById("yearlyCng").innerHTML =
      "₹" + priceyearcng.toFixed(2);
  } else if (document.getElementById("miles").checked) {
    document.getElementById("tabledata01").innerHTML =
      "Miles/Liter (Mileage of vehicle)";
    let pricedaypet = (cp / (mp / 1.621)) * dddmil;
    let pricemontpet = (cp / (mp / 1.621)) * 30 * dddmil;
    let priceyearpet = (cp / (mp / 1.621)) * 365 * dddmil;

    let pricedaydie = (cd / (md / 1.621)) * dddmil;
    let pricemontdie = (cd / (md / 1.621)) * 30 * dddmil;
    let priceyeardie = (cd / (md / 1.621)) * 365 * dddmil;

    let pricedaycng = (cc / (mc / 1.621)) * dddmil;
    let pricemontcng = (cc / (mc / 1.621)) * 30 * dddmil;
    let priceyearcng = (cc / (mc / 1.621)) * 365 * dddmil;

    document.getElementById("DailyPet").innerHTML =
      "₹" + pricedaypet.toFixed(2);
    document.getElementById("MonthlyPet").innerHTML =
      "₹" + pricemontpet.toFixed(2);
    document.getElementById("yearlyPet").innerHTML =
      "₹" + priceyearpet.toFixed(2);

    document.getElementById("DailyDie").innerHTML =
      "₹" + pricedaydie.toFixed(2);
    document.getElementById("MonthlyDie").innerHTML =
      "₹" + pricemontdie.toFixed(2);
    document.getElementById("yearlyDie").innerHTML =
      "₹" + priceyeardie.toFixed(2);

    document.getElementById("DailyCng").innerHTML =
      "₹" + pricedaycng.toFixed(2);
    document.getElementById("MonthlyCng").innerHTML =
      "₹" + pricemontcng.toFixed(2);
    document.getElementById("yearlyCng").innerHTML =
      "₹" + priceyearcng.toFixed(2);
  } else {
    alert("Select KiloMeter or Miles");
  }
};
