function handleRun(){
  let data = RAW_DATA_SHEET.getDataRange().getValues();
  processRawData(data.slice(1));
}

function handleSubmit(){
  let data = PROCESSED_DATA_SHEET.getDataRange().getValues();
  buildPayload(data.slice(1));
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('Utils');
  menu.addItem('Run', 'handleRun');
  menu.addItem('Submit', 'handleSubmit');
  menu.addToUi();
}



