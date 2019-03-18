$(document).ready(function () {

    console.log("this bitch is ready");

    //display scoreboard
    //wins and losses
    



    var dealerHand = 0;
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var runningTotal = 0;
    var red = 0;
    var green = 0;
    var blue = 0;
    var yellow = 0;
    
    $("#scoreboard").append("Wins: " + wins);
    $("#scoreboard").append("Losses: " + losses);
   //array of crystal variables
   var crystals = [red,green,blue,yellow];
  
  //generate random number for dealer between 19 and 120
    function getRandomDealer() {
      var dealerMax = 120;
      var dealerMin = 19;
      return Math.floor(Math.random() * (dealerMax - dealerMin + 1)) + dealerMin;
    };

    function getRandomCrystal() {
      var crystalMax = 12;
      var crystalMin = 1;
      return Math.floor(Math.random() * (crystalMax - crystalMin + 1)) + crystalMin;
    };

    // generate new random number for dealerHand
    // reset totalScore to 0
    // assign new random number to each crystal
    function resetStuff() {
      runningTotal = 0;
      dealerHand = getRandomDealer();
      newCrystalArray = crystals.map(crystals => getRandomCrystal());

    };

    //map random crystal number to each crystal
    var newCrystalArray = crystals.map(crystals => getRandomCrystal());
    
    console.log("Array is: " + newCrystalArray);
    

    //display dealer hand
    dealerHand = getRandomDealer();
    $("#dealer_hand").append(dealerHand);
    
    console.log("Dealer hand is: " + dealerHand);

    
      
    //on crystal click
    $("#red").on("click", function() {
      runningTotal += newCrystalArray[0];      
      console.log("Running total is: " + runningTotal);
      $("#total_score").text(runningTotal);
    });
    $("#green").on("click", function() {
      runningTotal += newCrystalArray[1];
      console.log("Running total is: " + runningTotal);
      $("#total_score").text(runningTotal);
    });
    $("#blue").on("click", function() {
      runningTotal += newCrystalArray[2];
      console.log("Running total is: " + runningTotal);
      $("#total_score").text(runningTotal);
    });
    $("#yellow").on("click", function() {
      runningTotal += newCrystalArray[3];
      console.log(runningTotal);
      $("#total_score").text(runningTotal);
      console.log("Running total is: " + runningTotal);
    });
 

    if(runningTotal === dealerHand) {
      
      $("#scoreboard").append("<p>You won!!</p>");
      wins++;
      $("#scoreboard").append("Wins: " + wins);
      resetStuff();
    };

    
    //if totalScore > dealerHand
    // displayToUser "You lost!!"
      // add 1 to Losses
    if(runningTotal > dealerHand){
      $("#scoreboard").append("You lost!!");
      losses++;
      $("#scoreboard").append("Losses: " + losses);
      resetStuff();
    };

   });


