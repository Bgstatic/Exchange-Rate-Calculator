// currency one
const currencyEl_one = document.getElementById('currency-one');

// amount one
const amountEl_one = document.getElementById('amount-one');

// amount two
const amountEl_two = document.getElementById('amount-two');

// currency two
const currencyEl_two = document.getElementById('currency-two');

// rate
const rateEl = document.getElementById('rate');

// swap
const swap = document.getElementById('swapBtn');


function calculate() {

    // Catch DOM Values.
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/8aecfbb87d7e13980ca318cc/latest/USD`) //USD Based API.
        .then(res => res.json())
        .then(data => {

            console.log(data);

            const currency1 = data.conversion_rates[currency_one]; // USD BASE
            const currency2 = data.conversion_rates[currency_two]; // TRY BASE

            const RATE = 1 / currency1; // RATE Calculation
            const ActualValue = RATE * currency2; // Actual Value.
            var showedResult = ActualValue.toFixed(2);

            rateEl.innerHTML = `1 ${currency_one} = ${showedResult} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * ActualValue).toFixed(2);
        });
}

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    console.log("CurrenctEl_two value: " + temp);
    calculate();
});


calculate();