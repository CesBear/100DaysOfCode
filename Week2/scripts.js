var name;
name = 'Cesar';
console.log(name);


var ageAsString = promt("whats is your age?", "");
var age = Number(ageAsString);

if (age < 40)
{
  alert("Oh you're so young ...");
}
else
{
  alert("Don't worry, you're at heart")
}
alert ("Thank you");


/* anotherway of same code above*/
var age = Number(promt("whats is your age?", ""));

var string = "";
for  (var theAge = age; theAge  > 0; theAge -=1)
{
  string += "Happy Birthday \n";
}
alert(string);




var age = Number(promt("whats is your age?", ""));

var string = "";
for  (var counter = 1; counter  < age; counter +=1)
{
  string += "Happy Birthday \n";
  if (counter %7 ==0)
      break;
}

alert(string);


var animal = "dog";

switch (animal)
{
  case "cat":
    alert("meow")
    break;
  case "dog":
    alert("woof")
    break;
  case "horse"
    alert(whinny)
    break;
    defautl:
    alert("no alert")
    break;
}
