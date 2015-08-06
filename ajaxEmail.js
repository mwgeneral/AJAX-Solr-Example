$(document).ready(function() {
  $("#close").click(function(){
  	var input = $('#userInput').val();
    $.getJSON("http://localhost:8983/solr/select?q="+ input +"&wt=json&json.wrf=?&indent=true", function(result){
    var Parent = document.getElementById('rs');
    var thisResult = "";
    for (var i = 0; i < result.response.docs.length; i++) {
      thisResult = thisResult + "<br><b>" + result.response.docs[i].name + "</b><br>" + result.response.docs[i].popularity
      + ", " + result.response.docs[i].price + "<br>";
      var NewDiv = document.createElement("DIV");
      //NewDiv.innerHTML = thisResult;
      //Parent.appendChild(NewDiv);
    }
    $('#underInput').html(thisResult);
  });
  });
});
