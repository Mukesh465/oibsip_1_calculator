var prev, oper;
function num(s)
{
var n=parseInt(document.f1.t1.value);
var sum=(n*10)+s;
document.f1.t1.value=sum;
}
function op(k)
{
oper=k; 
prev=parseInt(document.f1.t1.value);
document.f1.t1.value=0;
}
function mod()
{
a=parseInt(document.f1.t1.value);
b=Math.floor(a/10);
document.f1.t1.value=b;
}
function enter()
{
    document.f1.t1.value=padEnd();
}
function eq()
{
curr=parseInt(document.f1.t1.value);
switch(oper)
{
case 1: var result=prev+curr;break;
case 2: var result=prev-curr;break;
case 3: var result=prev*curr;break;
case 4: var result=prev/curr;break;
case 5: var result=prev%curr;break;
case 6:var result = prev+ "."+ curr+"."; break;
}
document.f1.t1.value=result;
}