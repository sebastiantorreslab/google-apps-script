function setInformationRows() {

  var last_row = SpreadsheetApp.getActiveSheet().getRange("B4:B").getValues()

   var listValues = last_row.filter((r) =>{
   if(r[0] != "")
   return r[0]
 })

  var canva_row_init= 3
  var canva_columns_init = 3
  var canva_rows_number = 0
  var canva_columns_number = 1
  var rows = ""

  var canva =  SpreadsheetApp.getActiveSheet()
  canva_row_init += rows.length

  if(listValues){


    listLength = []
    for(let i = listValues.length-1; i >= 0;i--){

      let stringNoSpaces = listValues[i].toString().replace(/^\s+|\s+$/g, "");
      rows = stringNoSpaces.split("\n")
      listLength.push(rows.length)

    }

    insertRows(listLength)
    
  }
}





function insertRows(numbers){

  let column = "A"
  let sheet = SpreadsheetApp.getActiveSheet()
  let maxRows = sheet.getMaxRows()

  let values_len = sheet.getRange(column + "1:" + column + maxRows).getValues()
  for(;values_len[maxRows -1] == "" && maxRows > 0; maxRows--){
    }
  Logger.log(maxRows)

  let maxValue = maxRows

  let counter = 0
  let index = 0;
  while((maxValue - counter) >= 4 ){
    if( counter == 0 ){
    let insertRow = sheet.getRange(column + "4:"+column+(maxValue - counter))
    let activeRow = insertRow.activate()
     sheet.insertRowsAfter(activeRow.getLastRow(),numbers[index])
    }else if(counter >= 1 && counter <= 3){
      ++index
      let insertRow = sheet.getRange(column + "4:"+column+(maxValue - counter))
      let activeRow = insertRow.activate()
      sheet.insertRowsAfter(activeRow.getLastRow(),numbers[index])

    }
       counter++

  }


  
}


