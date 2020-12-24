function clockCheck(str){
let arr = str.split(':')
if(arr[0] < 23 && arr[0] > 0 && arr[1] <= 59 && arr[1] >= 0){
	console.log(true)
} else {
	console.log(false)
}
}

clockCheck('13:58')
clockCheck('25:51')
clockCheck('02:76')
