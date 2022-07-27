var head = document.createElement("h1");
function create(){
    head.className = "head1";
    var txt = document.createTextNode("hi how are you");
   head.appendChild(txt);
   document.body.appendChild(head);
   head.style.color="yellow";
}
function deletee()
{
    head.remove();
}