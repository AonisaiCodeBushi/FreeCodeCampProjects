function rot13(str) { // LBH QVQ VG!
    //New string that will hold the deciphered str argument:
    let decipheredStr = "";
  
    //For-loop goes through each char in 'str':
    for(let i = 0; i < str.length; i++){
      let uniCodeNum = str[i].charCodeAt();
  
      //If-statement runs through each char and shifts 13 chars over in the alphabet:
      if(uniCodeNum >= 65 && uniCodeNum <= 77){
        decipheredStr +=String.fromCharCode(uniCodeNum + 13);
      } else if(uniCodeNum >= 78 && uniCodeNum <=90){
        decipheredStr += String.fromCharCode(uniCodeNum - 13);
      } else {
        decipheredStr += str[i];
      }
    }
  
    //Return deciphered string:
    return decipheredStr;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  console.log(rot13("LBH QVQ VG"));