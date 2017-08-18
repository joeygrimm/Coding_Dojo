function Slots(quarters){
  while(quarters > 0){
    var win = Math.floor(Math.random()*100);
    if(win > 1){
      var amountWon = Math.random()*50 + 50
      console.log("You win.");
      return amountWon + quarters
    }
  }
  return 0
}
Slots()
