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
  let dddmiles = dddmil * 1.62;

  if (document.getElementById("liter").checked) {
    if (document.getElementById("kilometer").checked) {
      document.getElementById("tabledata01").innerHTML =
        "kilometer/liter (Mileage of vehicle)";
      let pricedaypet = (dddkm / mp) * cp;
      let pricemontpet = (dddkm / mp) * 30 * cp;
      let priceyearpet = (dddkm / mp) * 365 * cp;

      let pricedaydie = (dddkm / md) * cd;
      let pricemontdie = (dddkm / md) * 30 * cd;
      let priceyeardie = (dddkm / md) * 365 * cd;

      let pricedaycng = (dddkm / mc) * cc;
      let pricemontcng = (dddkm / mc) * 30 * cc;
      let priceyearcng = (dddkm / mc) * 365 * cc;

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
      let pricedaypet = (dddmiles / mp) * cp;
      let pricemontpet = (dddmiles / mp) * 30 * cp;
      let priceyearpet = (dddmiles / mp) * 365 * cp;

      let pricedaydie = (dddmiles / md) * cd;
      let pricemontdie = (dddmiles / md) * 30 * cd;
      let priceyeardie = (dddmiles / md) * 365 * cd;

      let pricedaycng = (dddmiles / mc) * cc;
      let pricemontcng = (dddmiles / mc) * 30 * cc;
      let priceyearcng = (dddmiles / mc) * 365 * cc;

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
    }
  } else if (document.getElementById("gallon").checked) {
    if (document.getElementById("kilometer").checked) {
      document.getElementById("tabledata01").innerHTML =
        "kilometer/gallon (Mileage of vehicle)";
      let pricedaypet = (cp / (mp / 3.785)) * dddkm;
      let pricemontpet = (cp / (mp / 3.785)) * 30 * dddkm;
      let priceyearpet = (cp / (mp / 3.785)) * 365 * dddkm;

      let pricedaydie = (cd / (md / 3.785)) * dddkm;
      let pricemontdie = (cd / (md / 3.785)) * 30 * dddkm;
      let priceyeardie = (cd / (md / 3.785)) * 365 * dddkm;

      let pricedaycng = (cc / (mc / 3.785)) * dddkm;
      let pricemontcng = (cc / (mc / 3.785)) * 30 * dddkm;
      let priceyearcng = (cc / (mc / 3.785)) * 365 * dddkm;

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
        "Miles/gallon (Mileage of vehicle)";
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
    }
  } else {
    alert("Select KiloMeter or Miles and Liter or Gallon");
  }
};
