module.exports = function acceptableSequence(str) {
  // write your code here
// regular expressions --

  for (let i = 0; i< str.length; i++) {
    if(str[0].match(/[a-z]/i) || str[str.length - 1].match(/[a-z]/i)){
      return false;
    }else{
      if (str[i].match(/[a-z]/i) && (str[i-1] !== "+" || str[i + 1] !== "+")){
        return false;
      }
    }
   }
return true

}

