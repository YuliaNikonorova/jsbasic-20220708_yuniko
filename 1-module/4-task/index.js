function checkSpam(str) {
  if((str.toUpperCase().includes("1xBet".toUpperCase())) || (str.toUpperCase().includes("XXX".toUpperCase()))){
    return true;
  }
 else {
   return false;
 }
}
