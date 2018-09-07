function palindrome(str) {
    //Changes string to correct format by 
    //removing spaces & special chars & sets to lowercase:
    let newStr = str.toLowerCase(str)
                    .replace(/[^a-zA-Z0-9]/g,"");
  
    //Reverses the string:
    let newStrReverse = newStr.split('')
                              .reverse()
                              .join('');
  
    //Tests whether the reversed string is the same as the original string: 
    if (newStrReverse === newStr){
      return true;
    } else {
      return false;
    }
  }
  
  palindrome("eye");