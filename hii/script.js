var names=new Array();
names[0]="firas";
names[1]="john";
names[2]="jen";
names[3]="jason	";
names[4]="paul";
names[5]="frank";
names[6]="laury";
names[7]="paula";
names[8]="laura";
names[9]="jim";

for(var i=0; i < names.length; i++){
if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
	console.log("goodbye " +names[i])
}
else{
	console.log("hello "+names[i])
}
}
