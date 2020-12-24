function depositProfit(deposit, rate, threshold) {
 let year = 0;
 while(deposit < threshold){
 deposit += (deposit * rate/100);
 year++;
 }
 console.log(year);
}


depositProfit(100, 20, 170)
