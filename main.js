//DOMS for INPUT
var r=document.querySelector('#r');
var g=document.querySelector('#g');
var b=document.querySelector('#b');
//DOMS for OUTPUT
var r_out=document.querySelector('#r_out');
var g_out=document.querySelector('#g_out');
var b_out=document.querySelector('#b_out');
var hex_out=document.querySelector('.hex_show');
var rgb_out=document.querySelector('.rgb_show');
var body=document.body;
function setcolor()
{
    var r_hex=parseInt(r.value,10).toString(16);
    var g_hex=parseInt(g.value,10).toString(16);
    var b_hex=parseInt(b.value,10).toString(16);
    
    var hex='#'+Pad(r_hex)+Pad(g_hex)+Pad(b_hex);
    var rg_color="rgb"+'('+r.value+','+ g.value+','+ b.value+')';

    hex_out.innerHTML=hex;
    rgb_out.innerHTML=rg_color;
    //change background color
    body.style.backgroundColor = hex;
    console.log(hex);
}

function Pad(n)
{
    return (n.length<2)? '0'+n :n;
}
//listener - R
r.addEventListener('input',function(){
setcolor();
r_out.innerHTML=r.value;
},false);
r.addEventListener('change',function(){
setcolor();
},false);
//listener - G
g.addEventListener('input',function(){
setcolor();
g_out.innerHTML=g.value;
},false);
g.addEventListener('change',function(){
setcolor();
},false);
//listener - B
b.addEventListener('input',function(){
setcolor();
b_out.innerHTML=b.value;
},false);
b.addEventListener('change',function(){
setcolor();
},false);

//copy function - HEX  
function copyHEX()
{
    var copyText = document.getElementById("hex_show");
    var range=document.createRange();
    range.selectNode(copyText);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert("Copied the text: " + range);
}
//copy function - RGB
function copyRGB()
{
    var copyTex= document.getElementById("rgb");
    var rang=document.createRange();
    rang.selectNode(copyTex);
    window.getSelection().addRange(rang);
    document.execCommand('copy');
    alert("Copied the text: " + rang);
}
