function domainType(arr) {
	 let result = [];
   let split = (arr.map(one => one.split('.').pop()))

   let domains = {
   "org": "organization",
   "com": "commerical",
   "net": "network",
   "info": "information"
   }

  for(let x in split){
  result.push(domains[split[x]])
  }

  console.log(result)
}

domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"])
