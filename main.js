let bitcoinAmount = document.getElementById('bitcoinAmount');
let dollarAmount = document.getElementById('dollarAmount');

const getRates = fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,NGN')
   .then((res) => res.json())
   .then((data) => {
      let rates;
      rates = data;
   })
   .catch((e) => {
      console.log(e);
   });
