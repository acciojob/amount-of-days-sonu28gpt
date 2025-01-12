//your JS code here. If required.
function daysOfAYear(n){
	n=+n;
	if(n%400==0 && n%4==0)return 366;
	return 365;
}