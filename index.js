function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  }

  function temperatureConverter(valNum1){
    valNum1 = parseFloat(valNum1);
    document.getElementById("outputFahrenheit").innerHTML=((valNum1*(9/5))+32);
  }