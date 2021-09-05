while(n>0){
	int digit = n%10;
	sum = sum + digit*digit*digit;
	n = n/10;
}