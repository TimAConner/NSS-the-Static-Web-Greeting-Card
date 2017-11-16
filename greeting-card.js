var output = document.getElementById("output");

const CardMaker = function(){
    this.greetingMessage = "",
    this.makeFrontMessage = function(string) {
        return `<h2>${string}</h2>`
    }
};
  
CardMaker.prototype.makeInsideMessage = function(string){
   return "<h2>" + string + "</h2>";
};

CardMaker.prototype.setFrontMessage = function(string){
    this.greetingMessage = string;
};



var ValentineCard = Object.create(CardMaker.prototype);
ValentineCard.setFrontMessage("Happy Valentines!");
output.innerHTML += ValentineCard.makeInsideMessage(ValentineCard.greetingMessage);
console.log(ValentineCard.greetingMessage);

var ChristmasCard = Object.create(CardMaker.prototype);
ChristmasCard.setFrontMessage("Merry Christmas!");
output.innerHTML += ChristmasCard.makeInsideMessage(ChristmasCard.greetingMessage);
console.log(ChristmasCard.greetingMessage);

var HannukahCard = Object.create(CardMaker.prototype);
HannukahCard.setFrontMessage("Happy Hannukah!");
output.innerHTML += HannukahCard.makeInsideMessage(HannukahCard.greetingMessage);
console.log(HannukahCard.greetingMessage);

var BirthdayCard = Object.create(CardMaker.prototype);
BirthdayCard.setFrontMessage("Happy Birthday!");
output.innerHTML += BirthdayCard.makeInsideMessage(BirthdayCard.greetingMessage);
console.log(BirthdayCard.greetingMessage);

