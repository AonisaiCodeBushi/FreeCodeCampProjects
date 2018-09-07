function convertToRoman(totalAmountLeft) {
    //An array to hold all properly placed Roman Numerals:
    let romanNumeralArray = [];
  
    //function creates given numeral & adds proper repitition to main array; also,
    //updates the totalAmountLeft for next computation.
    function computation(totalAmountLeft, romanNumeral, numericalEquiv){
      let numOfRomNumeral = Math.floor(totalAmountLeft / numericalEquiv);
      let placeHolderArray = insertRomanNumeral(romanNumeral, numOfRomNumeral);
    
      //Nested function to create array that holds proper repetitions of given numeral:
      function insertRomanNumeral(numeralNum, amountOfNumeral){
        let arrayToReturn = [];
        for(let i = 0; i <= amountOfNumeral - 1; i++){
          arrayToReturn[i] = numeralNum;
        }
        return arrayToReturn;
      }
      
      //Add newly created array of given numeral to romanNumeralArray:
      romanNumeralArray = romanNumeralArray.concat(placeHolderArray);
      totalAmountLeft %= numericalEquiv;
  
      return totalAmountLeft;
    }
  
    //Run computation on each numeral, pulling from result of higher Numerals computation:
    totalAmountLeft = computation(
                        computation(
                          computation(
                            computation(
                              computation(
                                computation(
                                  computation(
                                    computation(
                                      computation(
                                        computation(
                                          computation(
                                            computation(
                                              computation(
                                                totalAmountLeft, "M", 1000)
                                              , "CM", 900)
                                            , "D", 500)
                                          , "CD", 400)
                                        , "C", 100)
                                      , "XC", 90)
                                    , "L", 50)
                                  , "XL", 40)
                                , "X", 10)
                              , "IX", 9)
                            , "V", 5)
                          , "IV", 4)
                      , "I", 1);
  
    return romanNumeralArray.join('');
}