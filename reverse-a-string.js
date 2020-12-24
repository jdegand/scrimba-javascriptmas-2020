function reverse(str){
	console.log(str.split('').reduce((acc, curr)=> curr + acc, ''))
}

reverse('Howdy')
