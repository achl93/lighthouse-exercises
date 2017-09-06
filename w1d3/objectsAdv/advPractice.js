var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var resultObj = {};
  for (var i = 0; i < salesData.length; i++) {
    if (salesData[i].name in resultObj) resultObj[salesData[i].name] = tallyTotals(salesData, taxRates, salesData[i].name); 
    else resultObj[salesData[i].name] = tallyTotals(salesData, taxRates, salesData[i].name);
  }
  return resultObj;
}

// returns an obj with the sales total
function tallyTotals(salesData, taxRates, companyName) {
  var saleSum = 0;
  var bcSum = 0;
  var abSum = 0;
  var skSum = 0;
  var taxSum = 0;
  var bcTax = 0;
  var abTax = 0;
  var skTax = 0;
  var obj = {};
  for (var i = 0; i < salesData.length; i++) {
    if (salesData[i].name === companyName) {
      for (var j = 0; j < salesData[i].sales.length; j++) {
        if (salesData[i].province === "BC") {
          bcSum += salesData[i].sales[j];
          bcTax += salesData[i].sales[j] * taxRates.BC;
        }
        if (salesData[i].province === "AB") {
          abSum += salesData[i].sales[j];
          abTax += salesData[i].sales[j] * taxRates.AB;
        }
        if (salesData[i].province === "SK") {
          skSum += salesData[i].sales[j];
          skTax += salesData[i].sales[j] * taxRates.SK;
        }
      }
    }
  }
  saleSum = bcSum + abSum + skSum;
  taxSum = bcTax + abTax + skTax;
  obj.totalSales = saleSum;
  obj.totalTaxes = taxSum;
  return obj;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));

// var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/