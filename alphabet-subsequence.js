function alphabetSubsequence(str) {
  const arr = str.split('');
  const charCodes = arr.map((letter) => letter.charCodeAt(0)); //there is only one letter
  //forEach didn't work

  if(new Set(arr).size !== arr.length){
  	return false;
  }

  for (let i = 0; i < charCodes.length - 1; i++) {
        if(charCodes[i] > charCodes[i + 1]) {
            return false;
        }
        	return true;
}
}

console.log(alphabetSubsequence('effg'))
