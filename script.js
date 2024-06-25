var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");


fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd')
  .then(response => response.json())
  .then(data => {
    btc.innerHTML = '$'+data.bitcoin.usd;
    eth.innerHTML = '$'+data.ethereum.usd;
    doge.innerHTML =  '$'+data.dogecoin.usd;
  })
  .catch(err => console.error('Error: ' + err));

