
    var test = "Jeni duke studiuar javascript";
    var extension = "Shtese Stingesh";

    var problem_result = "Rezultati";

    var a = 3;
    var b = 4;

     //test, extension etj etj
    //Concatenation
    console.log(test +' '+extension+' kot');
    console.log(a+''+b);
    console.log(problem_result+': '+(a+b));

function showData() {
   document.getElementById('mesazhi').innerHTML = Date();
}

function ngjyrosTekstin(){
    document.getElementById('ngjyrosjeBlu').style.color = "#00f";
}

function showPershendetja() {
  var persh;
  var time = new Date().getHours();
  console.log(time);
   time = 2;
  if(time<10 && time>5){
    persh = "Miremengjes";
  }else if(time<20 && time>10){
    persh = "Pershendetje";
  }else {
    persh = "Mbaroi 24";
  }

  document.getElementById("mesazhiPershendetje").innerHTML = persh;
}

function ditaJaves(){
  var dita;

  switch (new Date().getDay()){
    case 0:
      dita = "Sunday";
      break;
    case 1:
      dita = "Monday";
      break;
    case 2:
      dita = "Tuesday";
      break;
  }
  document.getElementById("ditaJaves").innerHTML = "Sot eshte" + dita;
}
//------------- 0 ---- 1 --------- 2 --- 3 ---------- 4
var makinat = ["BMW","MERCEDEZ","FORD","FIAT","RANGE ROVER"];
var text = "";
var i;

var array2 = [];

for(i=0; i<makinat.length; i++){
  if( makinat[i] = "BMW"){
    text = makinat[i] + "<br>";
  }else{
    text = "Nuk kemi BMW";
  }
}

document.getElementById("listimMakinash").innerHTML = text;

/* ===== Shfaqja me objekt ==== */
var txt = "";
var person = {
  fname:"Florie",
  lname: "Islamaj",
  age: 25
};

var x;

for (x in person){
  txt += person[x] + " ";
}

document.getElementById("listimPersonash").innerHTML = txt;

/* ===== Cikli while ===== */
var numrat = "";
var i = 1;
do {
  numrat += "<br>Numri eshte " + i ;
  i++;
}
while(i<=10);

document.getElementById("mesazhiWhile").innerHTML = numrat;

/* ==== Ushtrimi 1 ==== */
function getColoredElement() {
  var a = 5;
  var b = 6;
  var c = a*b;
  document.getElementById("totali30").innerHTML = c;
}

/* ==== Ushtrimi 2 ==== */
function getOnlyDizifenktant() {
  var farmaciElements = ["Maske", "Ilace", "Dizifektant", "Doreza"];
  var i;
  var index;
  for(i=1; i<farmaciElements.length; i++){
    if(farmaciElements[i] = "Dizifektant"){
      index = i;
    }
  }
  document.getElementById("vendiTabela").innerHTML = index;
}


/* ==== Mbushja e nje array bosh ==== */
var fruits = ["Molle", "Rrush", "Bananane", "Ananas"];
var frutaPerime = ["Domate"];
var junkFood = ["Sufllaqe", "Krahe Pule", "Hamburger"];
var j;
var indekset = fruits.keys(); //eshte nje objekt

function mbushTabelFrutash() {
  console.log(fruits);
   for(j=0; j<fruits.length; j++){
     frutaPerime.push(fruits[j]);
   }
    for (x of indekset) {
      document.getElementById("celesatTabela").innerHTML += x + "<br>";
    }
   console.log(frutaPerime);
   console.log(frutaPerime.slice(1,4));
}

function bashkimDietik(){
  var dieta = fruits.concat(frutaPerime, junkFood);
  alert(dieta);
}

/* ==== Array Itteration ==== */
var numbersOne = [45,4,9,16,14,13];
var numbersTwo = numbersOne.map(dyfishi);

function dyfishi(value, index, array){
  return value*2;
}

document.getElementById("mapping").innerHTML = numbersTwo;

var numratEMedhenj = [104, 102, 100, 120, 700];

var over104 = numratEMedhenj.filter(gjejNumrat);

function gjejNumrat(value, index, array){
  return value > 104;
}

document.getElementById("filtering").innerHTML = over104;

/* ==== Libraria Math ==== */
var numratParaMath = [9,16,36,64,65];
var i;
var numratErrenjosur = [];
for(i=0; i<numratParaMath.length;i++){
    var res = numratParaMath[i];
    numratErrenjosur.push(Math.floor(Math.sqrt(res)));
}

document.getElementById("rrenja").innerHTML = numratErrenjosur;

var indeksi = numratParaMath.indexOf(65);
console.log(indeksi);

var makinatShtepi = ["Mercedez", "Fiat", "Range Rover", "BMW", "Ford", "Porche"];
var i;
var arrayZgjidhja = [];

var j = makinatShtepi.indexOf("BMW");


for(i=0; i<makinatShtepi.length; i++){
  if(i<=j){
    arrayZgjidhja.push(makinatShtepi[i]);
  }else{
    //alert("Nuk ka BMW ne tabele")
  }

}

/* ==== 
array = ["el1", "el2", "el2"]
string = "fsdfdsfsdfsdfsfs";
object =>
el1 = {
  fname:"Florie",
  lname: "Islamaj",
  age: 25
};
==== */

var xx = "";

for(var t=0; t<arrayZgjidhja.length; t++){
  document.getElementById("rrenja").innerHTML += xx + "<br>";
}

console.log(arrayZgjidhja);
