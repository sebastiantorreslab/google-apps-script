function actualizarCali() {
  let cali_sheet = SpreadsheetApp.openById("1aaT2dqWd0mzg_jhtoyK7w3xkKz9Y92pMpLQQzndstYk")
  let cs = cali_sheet.getSheets();
  let fila = 6;
  let ultimaCol = 8
  let counter = 0;
  
  for(let i = 2; i < cs.length;i++){
    var sh = cs[i];
    let cells = sh.getSheetValues(12,3,80,8)
    let vector = sh.getSheetValues(12,121,80,1)
    //Logger.log(cells)

    let sheet = SpreadsheetApp.getActiveSpreadsheet()
    let seg_tutorias = sheet.getSheetByName("SEGUIMIENTO_CALI")

    if(counter == 0){
        let range = seg_tutorias.getRange(fila,4,80,ultimaCol)
        range.setValues(cells);
        let range_vector = seg_tutorias.getRange(fila,17,80,1)
        range_vector.setValues(vector)       
    }else {
      Logger.log("else")
      fila+=80
          let range = seg_tutorias.getRange(fila,4,80,ultimaCol)
          range.setValues(cells);
          let range_vector = seg_tutorias.getRange(fila,17,80,1)
           range_vector.setValues(vector)   
    }
      counter++;
   
  }

  let date = new Date();
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SEGUIMIENTO_CALI").getRange("E3").setValue(date);


  }

  function actualizarMedellin() {

    let medellin_sheet = SpreadsheetApp.openById("1LgLKNXggUDDi-SLxLNqRQj6H1o9kqydaAK8v2H6PsKQ")
    let ms = medellin_sheet.getSheets();
    let fila = 6;
    let ultimaCol = 8
    let counter = 0;

 for(let i = 1; i < ms.length;i++){
    var sh = ms[i];
    let cells = sh.getSheetValues(12,3,80,8)
    let vector = sh.getSheetValues(12,109,80,1)
    //Logger.log(cells)

    let sheet = SpreadsheetApp.getActiveSpreadsheet()
    let seg_tutorias = sheet.getSheetByName("SEGUIMIENTO_MEDELLIN")

    if(counter == 0){
        let range = seg_tutorias.getRange(fila,4,80,ultimaCol)
        range.setValues(cells);  
         let range_vector = seg_tutorias.getRange(fila,17,80,1)
        range_vector.setValues(vector)    
    }else {
      Logger.log("else")
      fila+=80
          let range = seg_tutorias.getRange(fila,4,80,ultimaCol)
          range.setValues(cells);
           let range_vector = seg_tutorias.getRange(fila,17,80,1)
        range_vector.setValues(vector)   

    }
      counter++;
   
  }

  let date = new Date();
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SEGUIMIENTO_MEDELLIN").getRange("E3").setValue(date);

  }


  function actualizarBarranquilla() {

    let barranquilla_sheet = SpreadsheetApp.openById("1DjdDIyt3lAUVX-kpdVNuKVB5dsu0V64034cW4Z-iYro")
    let bs = barranquilla_sheet.getSheets();
    let fila = 6;
    let ultimaCol = 8
    let counter = 0;

 for(let i = 2; i < bs.length;i++){
    var sh = bs[i];
    let cells = sh.getSheetValues(12,3,80,8)
    let vector = sh.getSheetValues(12,109,80,1)

    let sheet = SpreadsheetApp.getActiveSpreadsheet()
    let seg_tutorias = sheet.getSheetByName("SEGUIMIENTO_BARRANQUILLA")

    if(counter == 0){
        let range = seg_tutorias.getRange(fila,4,80,ultimaCol)
        range.setValues(cells);
        let range_vector = seg_tutorias.getRange(fila,17,80,1)
        range_vector.setValues(vector)   
    }else {
      Logger.log("else")
      fila+=80
          let range = seg_tutorias.getRange(fila,4,80,ultimaCol)
          let range_vector = seg_tutorias.getRange(fila,17,80,1)
          range.setValues(cells);
          range_vector.setValues(vector)   
    }
      counter++;
   
  }

  let date = new Date();
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SEGUIMIENTO_BARRANQUILLA").getRange("E3").setValue(date);


}
