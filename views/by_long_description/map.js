function(doc){
  function cleanup_word(word){
    var cleaned_word = word;
    cleaned_word = cleaned_word.replace(/[\(\)\]\[]/,"");
    return cleaned_word;
  }
  if(doc.icd9code && doc.long_description){
    var description_words = doc.long_description.split(" ");
    description_words.forEach(function(word){
      word = cleanup_word(word)
      if (word && word !== "-"){
        emit(word, doc);
      }
    });
  }
}
