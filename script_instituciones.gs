function ObtenerIdInstituciones() {
  var idFolder = "1xlk6zXDHHS5wSLvQ0vy-NsUeAfZVJQFy"
  var folderSede = DriveApp.getFolderById(idFolder)
  Logger.log(folderSede)
  var folderInst = folderSede.getFolders()
  
  var contador=1
  while(folderInst.hasNext()){
    var instituciones = folderInst.next()
    if(instituciones.getName().startsWith("I.E.")){
       Logger.log("Nombre:"+ instituciones.getName() + "_id:" +instituciones.getId())
        contador++

    }
   
    }
    console.log(contador)

}
