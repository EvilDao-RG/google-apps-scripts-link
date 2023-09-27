function createOrderNumber(entry){
  let date = new Date(entry[RAW_DATE]);
  return `${entry[RAW_NAME][0]}${entry[RAW_PRODUCT]}${date.getMonth()}${date.getDate()}${date.getFullYear()}${entry[RAW_ZIP_CODE]}`;
}

function formatAddress(entry){
  return `${entry[RAW_STREET_NUMBER]} ${entry[RAW_STREET]}, ${entry[RAW_ZIP_CODE]}`;
}

function processRawData(data){
  let rowsToDelete = [];
  data.map((row, index) => {
    if(row[RAW_SELECT_CHECKBOX]){
      if(validRawData(row)){
        let orderNumber = createOrderNumber(row);
        let address = formatAddress(row)
        let processedEntry = [row[RAW_NAME], row[RAW_PRODUCT], row[RAW_DATE], orderNumber, address];
        PROCESSED_DATA_SHEET.appendRow(processedEntry);
        rowsToDelete.push(index + 2);
      }
    }
  });
  deleteRows(RAW_DATA_SHEET, rowsToDelete);
}


function buildPayload(data){
  SpreadsheetApp.getUi().alert(data);
}


