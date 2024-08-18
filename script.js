var bitcoinElement = document.getElementById("bitcoin");
var ethereumElement = document.getElementById("ethereum");
var dogecoinElement = document.getElementById("dogecoin");

const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-dzmbJysgkK79mJHYVjaKkMUv' }
};

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd', options)
    .then(response => response.json())
    .then(response => {
        bitcoinElement.innerText = response.bitcoin.usd;
        ethereumElement.innerText = response.ethereum.usd;
        dogecoinElement.innerText = response.dogecoin.usd;
    })
    .catch(err => console.error(err));
