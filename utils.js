// Const
const RAW_SELECT_CHECKBOX = 0;
const RAW_NAME = 1;
const RAW_DATE = 2;
const RAW_PRODUCT = 3;
const RAW_STREET_NUMBER = 4;
const RAW_STREET = 5;
const RAW_ZIP_CODE = 6;

const RAW_DATA_FILENAME = "Raw Data";
const PROCESSED_DATA_FILENAME = "Processed Data";

const SPREADSHEET = SpreadsheetApp.openById('11HaYd7RQCaItioJ8V7eEMmxWVyE83E5IEJILYKxXr0M');
const RAW_DATA_SHEET = SPREADSHEET.getSheetByName(RAW_DATA_FILENAME);
const PROCESSED_DATA_SHEET = SPREADSHEET.getSheetByName(PROCESSED_DATA_FILENAME);

// Util functions
function validRawData(entry) {
  let valid = true;
  entry.map((col) => {
    if (!col) {
      valid = false
    }
  })
  return valid;
}

function deleteRows(sheet, rows) {
  for (let i = rows.length - 1; i >= 0; i--) {
    sheet.deleteRow(rows[i]);
  }
}