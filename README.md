# Google_AS-Sheets-Finance-CCpaymentIntSch
Google Sheets automation for calculating credit card payments and interest amounts

## Google Apps Script Configuration

### Triggers

| Function | Event Source ( - t)^ | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| sendEmailIntroWarn | Time-driven | Week timer - Saturday | 5pm to 6pm | Daily |
| arpFreezeActive | Time-driven | Day timer | Midnight to 1am | Daily |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected* \
*\^Event type if `From spreadsheet` is selected*

<sup><sub>Spreadsheet Name: `Credit Card Payment/Interest Schedule`</sup></sub>
