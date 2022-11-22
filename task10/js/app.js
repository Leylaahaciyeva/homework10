/*function myFunction() {
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      document.getElementById("img")
    } else {
        document.getElementById("img").style.display='none';
    }
    
  }
  myFunction()*/
  /*function myFunction() {
    let text;
    let age = prompt("Please enter your age");
    if (age>18) {
        document.getElementById("img")
        document.getElementById("demo").style.display='none';
    }else{
        text="OLMAZ!!!"
        document.getElementById("img").style.display='none';

    }
    document.getElementById("demo").innerHTML = text;
  }
  myFunction()*/


  function Show(){
    let x = document.getElementById('input').value;
    let y= x.slice(-3, -2);
    if(y ==1){
    document.body.style.backgroundColor='yellow'
   }else if(y==2) {
    document.body.style.backgroundColor='red'
   }else if (y==3) {
    document.body.style.backgroundColor='black'
   }else{

   }

  }
  Show()