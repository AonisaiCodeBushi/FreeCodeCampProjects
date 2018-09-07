function checkCashRegister(price, cash, cid) {
    //In essence, turning the cid array into an array of object that also unclude type value:
    let cidObjects = [
      { cashType: "ONE HUNDRED", amountInDrawer: cid[8][1], typeValue: 100.00 },
      { cashType: "TWENTY", amountInDrawer: cid[7][1], typeValue:  20.00 },
      { cashType: "TEN", amountInDrawer: cid[6][1], typeValue:  10.00 },
      { cashType: "FIVE", amountInDrawer: cid[5][1], typeValue:   5.00 },
      { cashType: "ONE", amountInDrawer: cid[4][1], typeValue:   1.00 },
      { cashType: "QUARTER", amountInDrawer: cid[3][1], typeValue:    .25 },
      { cashType: "DIME", amountInDrawer: cid[2][1], typeValue:    .10 },
      { cashType: "NICKEL", amountInDrawer: cid[1][1], typeValue:    .05 },
      { cashType: "PENNY", amountInDrawer: cid[0][1], typeValue:    .01 }
    ]; 
  
    //Create a receipt object to return:
    let receiptObject = {
      status: "OPEN",
      change: []
    };
    
    // //Test to see if not enough cash was given or exact cash:
    // if(price > cash){
    //   receiptObject.status = "PAY_UP!!";
    //   return receiptObject;
    // } else if(price == cash){
    //   addCashGivenToCID(cash, cidObjects);
    //   return receiptObject;
    // }
  
    // //function to add received money into cash register:
    // function addCashGivenToCID(cash, cidObjects){
    //   for(let i = 0; i < cidObjects.length; i++){
    //     cidObjects[i].amountInDrawer += Math.round(cash / cidObjects[i].typeValue) * cidObjects[i].typeValue;
    //     cash %= cidObjects[i].typeValue;
    //   }
    // }
  
    //Figure out what change total is needed & add money received to CID:
    let changeTotal = cash - price;
    //addCashGivenToCID(cash, cidObjects);
  
    //Function to calculate the various moneyTypes needed retrieve:
    function subtractChangeFromCID(changeTotal, cidObjects, receiptObject){
      for(let i = 0; i < cidObjects.length; i++){
        let amountOfTypeReturning = 0;
        //Go through cidObjects and pull needed moneys for change to return:
        while(cidObjects[i].amountInDrawer > 0 && changeTotal >= cidObjects[i].typeValue){
          changeTotal -= cidObjects[i].typeValue;
          cidObjects[i].amountInDrawer -= cidObjects[i].typeValue;
          amountOfTypeReturning += cidObjects[i].typeValue;
          changeTotal = Math.round(changeTotal * 100) / 100;
        }
  
        //Corrects any number formatting issues:
        amountOfTypeReturning = Math.round(amountOfTypeReturning * 100) / 100;
  
        if(amountOfTypeReturning > 0){
          receiptObject.change.push([ cidObjects[i].cashType, amountOfTypeReturning ]);
        }
      }
  
      //Checks to see if we had the change to return:
      if(receiptObject.change.length < 1 || changeTotal > 0){
        receiptObject.status = 'INSUFFICIENT_FUNDS';
        receiptObject.change = [];
      } 
      
      if(cidObjects.every(function(element){
        if (element.amountInDrawer <= 0) {
          return true;
        }
          return false;}
      ) & changeTotal <= 0){
        receiptObject.status = "CLOSED";
        receiptObject.change = cid;
        return receiptObject;
      } else {
        return receiptObject;
      }
    }
    //Call function to perform calulations:
    return subtractChangeFromCID(changeTotal, cidObjects, receiptObject);
  }
  
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
  //should return an object.
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
  
  //console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); 
  //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  //should return {status: "INSUFFICIENT_FUNDS", change: []}.
  
  //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  //should return {status: "INSUFFICIENT_FUNDS", change: []}.
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); 
  //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.