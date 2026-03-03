function fonction1() {
 alert ("Hello World") ;
}

function fonction2() {
    let age = prompt("Quel age avez-vous",30);
    alert ("Vous avez "+age+" ans");
}

function fonction3() {
 let etat = confirm("Etes-vous malade?");
 if (etat){
    alert("Pensez à prendre un rendez-vous avec votre médecin");
 } else {
    alert("Superbe");
 }
}

function fonction4() {
   let txtTemp=document.getElementById("txtTemperature");
   let Temp= txtTemp.value ;
   if (Temp>100){
      alert("vapeur");
   }
   else if(txtTemp<=0){
      alert("glace");
   }
   else{
      alert("liquide");
   }
}

function fonction5() {
   let n= document.getElementById("txtN").value;
   let div ="Les diviseurs de n sont ";
   for (let i = 1; i<=n ; i++){
      if (n % i ==0){
         div= div +" "+ i ;
      }
   }
   alert (div);
}

function fonction6(color) {
   let imgFeu = document.getElementById("imgFeu"); 
   if ( color == "rogue"){
      imgFeu.src="img/feu_rouge.jpg" ;
   }
   if (color == "vert"){
      imgFeu.src="img/feu_vert.jpg" ;
   }
}

function fonction7() {
   let voiture = document.getElementById("imgVoiture");
   let marginLeft = parseInt(window.getComputedStyle(voiture).marginLeft);
   marginLeft+=100;
   voiture.style.marginLeft = marginLeft+"px";
}

function fonction8() {
   let str= " ";
   let divList = document.getElementById("divList");
   str += "<ul>";
   str += "<li>Item1</li>";
   str += "<li>Item2</li>";
   str += "<li>Item3</li>";
   str += "</ul>";
   divList.innerHTML= str;
}