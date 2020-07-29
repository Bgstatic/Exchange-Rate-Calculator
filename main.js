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
const swap = document.getElementById('swap');


function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
   console.log("Currency two" + currency_two);

    fetch(`https://v6.exchangerate-api.com/v6/8aecfbb87d7e13980ca318cc/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
            const conversionRates = data.conversion_rates[currency_two];
            rateEl.innerHTML = `1 ${currency_one} = ${conversionRates} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * conversionRates).toFixed(2);
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