//todo make work by comparing to GAS-OneTabExportOrganizer

function MergeSplitMatrixsisSelect(inputRange,discardAllButX) {

  inputRange = (inputRange === undefined) ? sheet.getRange('Input!B1:B300') : inputRange;
  
  function removeDups2(array) {
    var uniqueArray = []
    array.sort(lowerCase);
    function lowerCase(a,b){
      return a.toLowerCase()>b.toLowerCase() ? 1 : -1;// sort function that does not "see" letter case
    }
    var temp = array[0];
    for(var n=1 ;n<array.length ; n++){
      Logger.log(temp+'  =  '+array[n]+' ?');
      if(temp.toLowerCase()!=array[n].toLowerCase()){
        uniqueArray.push(array[n]);
        temp = array[n];
      }else if(uniqueArray[uniqueArray.length-1]==temp){
        uniqueArray.pop();// remove it from result if one of the duplicate values
      }
    }
    return uniqueArray;
  }
  
    function selectSecondOccurence(item, index, arr) {
      arr[index] = item.split(",")[discardAllButX-1]
    }
      
       const combined = inputRange.join('\''); 
       const re = combined.split(";")
      
       const ages = re
       const uniqueAges = ages.removeDups2(ages)
      
   uniqueAges.forEach(selectSecondOccurence);
}