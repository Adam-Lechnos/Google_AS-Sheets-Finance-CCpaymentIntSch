function sendEmailIntroWarn() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Summary").getRange("M1"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'A credit card with a carried balance is approaching the end of its intro APR period. Ensure that the autopayment settings are returned to the Statement Balance method. Check the "Summary" tab: https://docs.google.com/spreadsheets/d/18Ng_tEm6SkCveEPIvjLPGlipZFXnusci2AZIm9VorT8'; // Second column
    var subject = 'Intro APR Period End Warning';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}
