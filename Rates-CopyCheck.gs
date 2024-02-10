function copyCheckRateData() {
     var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("index");
     //var sh = ss.getActiveSheet();
     //sh.insertColumnAfter(2); 
     var range = ss.getRange("E2");
     var values = range.getValues();
     var add = ss.getRange("L2");
     add.setValue(values);
     var range = ss.getRange("E3");
     var values = range.getValues();
     var add = ss.getRange("L3");
     add.setValue(values);
     var range = ss.getRange("E4");
     var values = range.getValues();
     var add = ss.getRange("L4");
     add.setValue(values);
}