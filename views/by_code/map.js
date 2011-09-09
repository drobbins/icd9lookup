function(doc){
  if(doc.icd9code){
    emit(doc.icd9code, doc);
  }
}
