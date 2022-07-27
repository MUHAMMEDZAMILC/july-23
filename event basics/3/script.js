let btn =document.getElementById('button');
btn.addEventListener("click", clickeffect);
btn.addEventListener("mouseover",overeffect);
btn.addEventListener("mouseout",outeffect);
function clickeffect()
{
    document.getElementById("para").innerHTML=Date();
}
function overeffect()
{
    document.getElementById("para").innerHTML="mouse is over"
}
function outeffect()
{
    document.getElementById("para").innerHTML="mouse is out"
}