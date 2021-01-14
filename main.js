let naira;
let dollars;
let dollarsRate;
let nairaRate;

const endpoint = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,NGN'
 
fetch(endpoint)
    .then(res =>res.json())
    .then(data => {
            dollarsRate = data.BTC.USD; 
            nairaRate = data.BTC.NGN; 
    })
    .catch((e) => {console.log(e)});


    input.addEventListener('click', toggleMenu.bind(null, param1, param2), false);