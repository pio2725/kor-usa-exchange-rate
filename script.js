function onClickKor(e) {
    e.preventDefault();
    const korValue = document.getElementById("korInput").value;
    var myHeaders = new Headers();
    myHeaders.append("apikey", "dFWjVGTPv2LJgw0uZAumzb1I6JP4i7Gx");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=usd&from=krw&amount="+korValue, requestOptions)
      .then(response => response.json())
      .then(result => {
          document.getElementById("usaInput").value = "$ " + result.result;
          let description = "<p>₩ " + korValue + " is $ " + Math.round((result.result + Number.EPSILON) * 100) / 100 + " on " + result.date + "</p>";
          document.getElementById("des").innerHTML = description;
      })
      .catch(error => console.log('error', error));
}

function onClickUsa(e) {
    e.preventDefault();
    const usaValue = document.getElementById("usaInput").value;
    var myHeaders = new Headers();
    myHeaders.append("apikey", "dFWjVGTPv2LJgw0uZAumzb1I6JP4i7Gx");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=krw&from=usd&amount="+usaValue, requestOptions)
      .then(response => response.json())
      .then(result => {
          document.getElementById("korInput").value = "₩ " + result.result;
          let description = "<p>$ " + usaValue + " is ₩ " + Math.round((result.result + Number.EPSILON) * 100) / 100 + " on " + result.date + "</p>";
          document.getElementById("des").innerHTML = description;
      })
      .catch(error => console.log('error', error));
}



document.getElementById("korSubmit").addEventListener("click", onClickKor);
document.getElementById("usaSubmit").addEventListener("click", onClickUsa);