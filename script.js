//container
var contain=document.createElement("div");
contain.setAttribute("class","container");

//display 
var dis=document.createElement("div");
dis.setAttribute("class","display");

//input
var inp=document.createElement("input");
inp.setAttribute("type","input");
inp.setAttribute("id","userinp");
inp.classList.add("userinp","col-md-12");

//btn creation
function btn(content)
{
    var btns=document.createElement("input");
    btns.setAttribute("type","button");
    btns.setAttribute("class","col-md-3");
    btns.addEventListener("click",foo)
    function foo()
    {
        inp.value +=content;
    }
    btns.value=content;
    return btns;
}


function acc(content)
{
    var btns=document.createElement("input");
    btns.setAttribute("type","button");
    btns.setAttribute("class","col-md-3");
    btns.addEventListener("click",foo)
    function foo()
    {
        inp.value ="";
    }
    btns.value=content;
    return btns;

}

function equal(content)
{
    var btns=document.createElement("input");
    btns.setAttribute("type","button");
    btns.setAttribute("class","col-md-3");
    btns.addEventListener("click",foo)
    function foo()
    {   
         inp.value =eval(inp.value);    
    }
    btns.value=content;
    return btns;

}

function dele(content)
{
    var btns=document.createElement("input");
    btns.setAttribute("type","button");
    btns.setAttribute("class","col-md-3");
    btns.addEventListener("click",foo)
    function foo()
    {
        inp.value =inp.value.slice(0,-1);
    }
    btns.value=content;
    return btns;
}
var btn1=btn("1");
var btn2=btn("2");
var btn3=btn("3");
var btn4=btn("4");
var btn5=btn("5");
var btn6=btn("6");
var btn7=btn("7");
var btn8=btn("8");
var btn9=btn("9");
var btn0=btn("0");
var btndouble=btn("00");
var btndot=btn(".");
var btnac=acc("AC");
var btndel=dele("Del");
var btnequal=equal("=");
var btndiv=btn("/");
var btnmul=btn("*");
var btnsub=btn("-");
var btnadd=btn("+");


dis.append(inp,btnac,btndel,btndot,btndiv,btn7,btn8,btn9,btnmul,btn4,btn5,btn6,btnsub,btn1,btn2,btn3,btnadd,btndouble,btn0,btnequal);

contain.append(dis);
document.body.append(contain);