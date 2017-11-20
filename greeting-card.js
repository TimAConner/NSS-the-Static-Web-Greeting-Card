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



var ValentineCard = Object.create(CardMaker);
ValentineCard.prototype.setFrontMessage("<h2 class='card'>Happy Valentines!</h2>");
output.innerHTML += ValentineCard.prototype.makeInsideMessage(ValentineCard.prototype.greetingMessage);

var ChristmasCard = Object.create(CardMaker);
ChristmasCard.prototype.setFrontMessage("<h2 class='card'>Merry Christmas!</h2>");
output.innerHTML += ChristmasCard.prototype.makeInsideMessage(ChristmasCard.prototype.greetingMessage);

var HannukahCard = Object.create(CardMaker);
HannukahCard.prototype.setFrontMessage("<h2 class='card'>Happy Hannukah!</h2>");
output.innerHTML += HannukahCard.prototype.makeInsideMessage(HannukahCard.prototype.greetingMessage);

var BirthdayCard = Object.create(CardMaker);
BirthdayCard.prototype.setFrontMessage("<h2 class='card'>Happy Birthday!</h2>");
output.innerHTML += BirthdayCard.prototype.makeInsideMessage(BirthdayCard.prototype.greetingMessage);
