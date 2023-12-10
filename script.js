function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let c=0;
	let val = 1;
	while(val<num){
		
		a=b;
		b=c;
		c=a+b;
		val++;
	}
	console.log(c);
}

module.exports = fibonacci;
