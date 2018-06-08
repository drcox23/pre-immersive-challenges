module.exports = function checkAscOrder(numArray) {
  // write your code in here
  // check ascending order

for (var i=0; i<numArray.length-1; i++) {

  if (numArray[i] > numArray[i+1]){
    return false;
  }
}
return true;

}