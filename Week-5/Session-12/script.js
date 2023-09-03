//Async Await Exchange Rates

async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    if (!response.ok) {
      throw new Error("Exchange Rates not found");
    }
    const exchangeData = await response.json();

    if (currencyCode in exchangeData.rates) {
      return parseFloat(exchangeData.rates[currencyCode].toFixed(2));
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching exchange rates:", error.message);
    return null;
  }
}

getExchangeRate("INR")
  .then((rate) => {
    console.log(rate); //Outout 89.22
  })
  .catch((error) => {
    console.log(error);
  });

getExchangeRate("ABC")
  .then((rate) => {
    console.log(rate); //Output null
  })
  .catch((error) => {
    console.log(error);
  });
