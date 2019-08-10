function inputBB() {
  
  //todo. translate =join(",tag,url," & Input!C1 & ",has," & 1 & ";",unique(transpose(Input!C1:O1))) and repeat over whole column b as long as there is ressult in column A
 
  var SheetName = "input";
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SheetName);
  
  sh.activate();
  
  var lastR = bySheetnrRangeString(SheetName,"C:C");
  var ressultset = [];
  
  for (i=0;i < lastR;i++)
  {
    var my2DArrayFromRng = sh.getRange("C" & i & ":O" & i).getValues();
    var a = my2DArrayFromRng.join().split(',').filter(Boolean);
    
    for (j=1;j<a.lenght;j++)
    {
      ressultset[i] += a[1] & ",tag,url," & a[j] & ",has," & nodeWeight & ";";
    }
  }
  
  sh.setRange(1,2,1,i);
  
  
}


function bySheetnrRangeString(SheetName, RangeString) {
  //answered Oct 25 '18 at 19:40 Luciano Pivi @ https://stackoverflow.com/questions/17632165/determining-the-last-row-in-a-single-column

  var spreadsheetN = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SheetName);
  
  spreadsheetN.activate();
  
  try {
  spreadsheetN.getRange(RangeString).getFilter().remove();
  
 
  var criteria = SpreadsheetApp
  .newFilterCriteria()
  .whenCellNotEmpty()
  .build();
 }
  finally
   var theFilter = spreadsheetN.getRange(RangeString).createFilter();
   theFilter.setColumnFilterCriteria(1,criteria);
  
  var rg = spreadsheetN.getRange(RangeString);
  
  var row = rg.getNextDataCell (SpreadsheetApp.Direction.DOWN);  

  LastRow = row.getRow();

  spreadsheet.getActiveSheet().getFilter().remove();

  spreadsheet.getActiveSheet().getRange(LaåstRow+1, 1).activate();

};