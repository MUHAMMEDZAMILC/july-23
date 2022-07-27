
    console.log(fname);
function clickr(){
    
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let full = fname+lname;
    // document.write(full);
    document.querySelector('#view').innerHTML=full;
    }
/*let head1 = document.getElementsByClassName('head1');
let head2 = document.getElementsByClassName('head2');

head1.innerHTML="Welcome to PMNA";
head1.style.color="yellow";
head1.style.fontSize="1000"
console.log(head1);
head1[0].innerHTML="Welcome to PMNA"
head1[1].innerHTML="hello"
head2[0].innerHTML="fine";*/

/*let head1 = document.getElementsByTagName('h2');
for( var i=0; i<head1.length;i++)
{
head1[i].innerHTML="hellooooi";
}*/
