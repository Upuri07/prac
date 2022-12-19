var num=12;
var factor=0;
for(var i=0;i<=num;i++){
    if(num%i==0){
        factor++;
    }
}
if(factor==2){
    console.log(num,"is a prime number");
}
else{
    console.log(num,"is not a prime number");
}