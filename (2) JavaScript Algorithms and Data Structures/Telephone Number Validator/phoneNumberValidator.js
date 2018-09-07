function telephoneCheck(str) {
    let regexOne = /(((^1{1}\s?)((\d{3})|([(]\d{3}[)])))|(((^\d{3})|(^[(]\d{3}[)]))))((\s|-)?(\d{3})(\s|-)?(\d{4}\b))/m;
    
    if(regexOne.test(str)){
      return true;
    }
    return false;
  }
  
  telephoneCheck("555-555-5555");