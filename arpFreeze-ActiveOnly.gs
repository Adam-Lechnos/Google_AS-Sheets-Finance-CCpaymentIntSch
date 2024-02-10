function arpFreezeActive() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets();
  
  excludeList = ["Summary", "Template", "Backtest"]
  for(i in sheet){
    sheetName = ss.getSheets()[i].getSheetName()

    if(!["Summary", "Template", "Backtest", "index"].includes(sheetName)){

      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      var testActive = sheet.getRange("I2").getValues()

      if(testActive){
        var range = sheet.getRange("C8:C367");
        var values = range.getValues();
        for (var i = 0; i < values.length; i++) {
          if (values[i][0] > 0) {
            var cell = range.offset(i, 0, 1, 1);   
            cell.copyTo(cell, {contentsOnly:true});
          }
        }
      }
    }
  }
}
