$(document).ready(function () {

    //var redCrystal = $("<img>");

    console.log("this bitch is ready");

    var dealerHand;
    var wins;
    var losses;
    var totalScore;
    var runningTotal;
    var red = 0;
   // console.log(red);
    var green = 0;
    //console.log(green);
    var blue = 0;
    var yellow = 0;
    var cystalRandom;

   //array of crystal variables
   var crystals = [red,green,blue,yellow];
    //on game start 

//BOOLEAN 
//IF TRUE - USE HIGH
// IF FALSE - USE LOW
  
//generate random number for dealer between 19 and 120
    function getRandomDealer() {
      var dealerMax = 120;
      var dealerMin = 19;
      return Math.floor(Math.random() * (dealerMax - dealerMin + 1)) + dealerMin;

    }


    function getRandomCrystal() {
      var crystalMax = 12;
      var crystalMin = 1;
      return Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;

    }

    //map to 
    var newCrystalArray = crystals.map(crystals => getRandomCrystal());

    console.log(newCrystalArray);

    /* 
    function resetStuff() {
      //for each index of crystals
      //getRandomCrystal();
      // crystals[i] = crystalRandom;
    } */
    /*
    crystals.forEach(function(elem) {
      crystals = getRandomCrystal();

    });*/
    
    
    
    //for each crystal 
     //run function on crystal random
     // assign crystal random to crystal
    



    //console.log(dealerHand);
    //console.log(crystalRandom);

    //displayToUser dealerHand
    //$("#dealer_hand").text(dealerHand);

    //display 4 crystals
    /* $("#red").prepend('<img src="assets/images/red.jpg" />')
    $("#green").prepend('<img src="assets/images/green.jpg" />')
    $("#blue").prepend('<img src="assets/images/blue.jpg" />')
    $("#yellow").prepend('<img src="assets/images/yellow.jpg" />') */
      // red, green, yellow, blue


  // each of the 4 crystals gets a random number between 1 and 12
  

    //on crystal click
      // add this crystals worth to totalScore
      // displayToUser totalScore

    
    //if totalScore === dealerHand
      // display "You won" to user
      // add 1 to wins counter
      
      //
      // generate new random number for dealerHand
      // reset totalScore to 0
      // assign new random number to each crystal

    //if totalScore > dealerHand
      // displayToUser "You lost!!"
      // add 1 to Losses
      
      // 
      // generate new random number for dealerHand
      // reset totalScore to 0
      // assign new random number to each crystal



  });


