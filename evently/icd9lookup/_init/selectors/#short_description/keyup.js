function(){
  var db = $$(this).app.db,
      term = $(this).val(),
      nonce = Math.random();
  $$($(this)).nonce = nonce;
  db.view("icd9lookup/by_short_description", {
    startkey : term,
    endkey : term+"\u9999", //I don't know why only \u9999 works, not \uFFFF
    limit : 25,
    success : function(names){
      if($$($(this)).nonce = nonce){
      $("#results").html(
        "<tr><th>ICD-9 Code</th><th>Long Description</th><th>Short Description</th></tr>"+
        names.rows.map(function(r){
          return '<tr><td>'+r.value.icd9code+'</td><td>'+r.value.long_description+'</td><td>'+r.value.short_description+'</td></tr>';
        }).join(""));
    }}});
}
