function calculateExpense() {
    var monthlyExpense = parseFloat(document.getElementById("monthlyExpense").value);
    var inflationRate = parseFloat(document.getElementById("inflationRate").value);
    var numYears = parseInt(document.getElementById("numYears").value);

    var totalAmountAllYears = 0;
    var result = "<h2>Amount needed for each subsequent year:</h2>";

    for (var year = 1; year <= numYears; year++) {
        var totalExpense = monthlyExpense * 12;
        totalExpense *= Math.pow((1 + inflationRate / 100), year);
        totalAmountAllYears += totalExpense;

        result += "<p>Year " + year + ": ₹" + totalExpense.toFixed(2) + "</p>";
    }

    result += "<h2>Total amount needed for all " + numYears + " years: ₹" + totalAmountAllYears.toFixed(2) + "</h2>";

    document.getElementById("result").innerHTML = result;
}