

let r = .00625;  // r is the rate per period ie. 7.5% divided by 12
let t = 60;     // t is the term
let p = 20000;  // p is the original princial amount


var convertToTwoDecimals = (value) => {
	
	console.log(`This is the typeOf for value: ${value.typeof}`)
}
var amount = (r, t, p) => {

    let sum = 1 + r
	let exp = sum ** t ;
	let top = r * exp;
	let bottom = exp - 1;
	let fraction = (top / bottom);
	return p * fraction;

	//console.log(exp);
	//console.log(bottom);
} 

let monthlyPmtAmount = amount(r, t, p);
monthlyPmtAmount = monthlyPmtAmount
console.log(monthlyPmtAmount);

let sched = []; 

for (i=0; i<t; i++) {
    console.log(`Balance: ${p}`);
    var interest = (p * r)

/*    if (monthlyPmtAmount > p) {
    	var diff = monthlyPmtAmount - p
    	

      princReduc = p;
      interest = monthlyPmtAmount - princReduc;


    }else {
*/


	
	//interest = convertToTwoDecimals(interest);
	var princReduc = monthlyPmtAmount - interest;
	
//}

	
	//princReduc = convertToTwoDecimals(princReduc)
	p =  p - princReduc;
	

	var result = {"period": i ,"amount": monthlyPmtAmount.toFixed(2), "interest": interest.toFixed(2), "principal": princReduc.toFixed(2), "balance": p.toFixed(2)};  
			sched.push(result)
}

console.log(sched)

	




