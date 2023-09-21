document.getElementById("Calculate").onclick = function () {
  let mp = document.getElementById("MileagePet").value;
  let md = document.getElementById("MileageDie").value;
  let mc = document.getElementById("MileageCng").value;

  let cp = document.getElementById("CostPet").value;
  let cd = document.getElementById("CostDie").value;
  let cc = document.getElementById("CostCng").value;

  let pricedaypet = cp / mp;
  let pricemontpet = (cp / mp) * 30;
  let priceyearpet = (cp / mp) * 365;

  let pricedaydie = cd / md;
  let pricemontdie = (cd / md) * 30;
  let priceyeardie = (cd / md) * 365;

  let pricedaycng = cc / mc;
  let pricemontcng = (cc / mc) * 30;
  let priceyearcng = (cc / mc) * 365;

  document.getElementById("DailyPet").innerHTML = "₹" + pricedaypet.toFixed(2);
  document.getElementById("MonthlyPet").innerHTML =
    "₹" + pricemontpet.toFixed(2);
  document.getElementById("yearlyPet").innerHTML =
    "₹" + priceyearpet.toFixed(2);

  document.getElementById("DailyDie").innerHTML = "₹" + pricedaydie.toFixed(2);
  document.getElementById("MonthlyDie").innerHTML =
    "₹" + pricemontdie.toFixed(2);
  document.getElementById("yearlyDie").innerHTML =
    "₹" + priceyeardie.toFixed(2);

  document.getElementById("DailyCng").innerHTML = "₹" + pricedaycng.toFixed(2);
  document.getElementById("MonthlyCng").innerHTML =
    "₹" + pricemontcng.toFixed(2);
  document.getElementById("yearlyCng").innerHTML =
    "₹" + priceyearcng.toFixed(2);
};
