function centuryFromYear(year){
  if(year % 100 === 0){
    console.log((Math.floor(year / 100)))
  }else {
  	console.log(Math.floor(year / 100) + 1)
  }
}

centuryFromYear(1920);
