unction setInformationRows() {

  let last_row = SpreadsheetApp.getActiveSheet().getRange("L2:L").getValues()
  

   let listValues = last_row.filter((r) =>{
   if(r[0] != "")
   return r[0]
 })

  var canva_row_init= 2
  var canva_columns_init = 13
  var canva_rows_number = 1
  var canva_columns_number = 1
  let rows = ""

  //var info_row_init= 2
 // var info_columns_init = 1
  //var info_rows_number = 1
  //var info_columns_number = 10
 
  if(listValues){


    listLength = []
    for(let i = listValues.length-1; i >= 0;i--){
      let stringNoSpaces = listValues[i].toString().replace(/^\s+|\s+$/g, "");
      rows = stringNoSpaces.split("\n")


      listLength.push(rows.length)

    }

    var ini = new Date().getTime();

    insertRows(listLength)

    var fin = new Date().getTime();

    var res = fin - ini

    Logger.log(res)

    Utilities.sleep(1000);

      let canva =  SpreadsheetApp.getActiveSheet()
     
    for(let i = 0 ; i < listValues.length;i++){
      let stringNoSpaces = listValues[i].toString().replace(/^\s+|\s+$/g, "");
       rows = stringNoSpaces.split("\n")
       for(let j = 0 ; j <= rows.length;j++){
        if(rows[j] != ""){
           canva.getRange(canva_row_init,canva_columns_init,canva_rows_number,canva_columns_number).setValue(rows[j])
          |canva_row_init++
        }


         
       }
    }
    
  }
}





function insertRows(numbers){

  let column = "L"
  let sheet = SpreadsheetApp.getActiveSheet()
  let maxRows = sheet.getMaxRows()


  let values_len = sheet.getRange(column + "1:" + column + maxRows).getValues()
  for(;values_len[maxRows -1] == "" && maxRows > 0; maxRows--){
    }
  
  let maxValue = maxRows

  let counter = 0
  let index = 0;
  while((maxValue - counter) >= 2 ){
    if( counter == 0 ){
    let insertRow = sheet.getRange(column + "2:"+column+(maxValue - counter))
    let activeRow = insertRow.activate()
        sheet.insertRowsAfter(activeRow.getLastRow(),numbers[index])
    }else if(counter >= 1 && counter <= maxValue){
      ++index
      let insertRow = sheet.getRange(column + "2:"+column+(maxValue - counter))
      let activeRow = insertRow.activate()
        sheet.insertRowsAfter(activeRow.getLastRow(),numbers[index])
    }
       counter++

  }

}


function copyInformationRows(){

  let sheet =  SpreadsheetApp.getActiveSheet()
  let insertRange = getRangeLength();
  let sumValues = 0;
  let column = 1
  let insertFila = 2;
  let filaLimit = 1;
  let getValues = ""
  let insertValues = "";
  let filaLimitAdjusted = 0;


      for(let i = 0; i <= insertRange.length; i++){
       
        filaLimit = insertRange[insertRange.length - i - 1]
      
        if(i == 0 ){
          getValues = sheet.getRange('A' + insertFila + ':K' + insertFila).getValues(); 
          insertFila += filaLimit
          Logger.log(insertFila +  " - " +  filaLimit) 
            Logger.log(getValues)  
            if(filaLimit > 1){
              insertValues = sheet.getRange(insertFila,column,filaLimit,11).setValues(getValues)
            }
          
          sumValues = insertFila + filaLimit

        }else {
          filaLimitAdjusted  = filaLimit - 1
           Logger.log(sumValues + 1  + " - " +  filaLimitAdjusted ) 
          getValues = sheet.getRange('A' + sumValues + ':K' + sumValues).getValues(); 

              if(filaLimit > 1){
                let valuesRepeated = []
                for (let j = 1; j <= filaLimitAdjusted;j++){
                  valuesRepeated.push(getValues[0]);
                }
                Logger.log(valuesRepeated)
                insertValues = sheet.getRange(sumValues + 1 ,column,filaLimitAdjusted,11).activate().setValues(valuesRepeated)
            }
         
          sumValues = sumValues + filaLimit + 1
        }


      }
}

function getRangeLength(){
  let last_row = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("VALID_DATA_MYSQL_V1").getRange("L2:L").getValues()
  
   let listValues = last_row.filter((r) =>{
   if(r[0] != "")
   return r[0]
 })

  let rows = ""
  let listLength = []

  if(listValues){

    for(let i = listValues.length -1; i >= 0;i--){
      let stringNoSpaces = listValues[i].toString().replace(/^\s+|\s+$/g, "");
      rows = stringNoSpaces.split("\n")
      listLength.push(rows.length)

    }
}

return listLength;

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


