var cover = $('.cover');
var slike = $('.pct img');

$(slike).on('click', function() {
  var cover = $('.cover');
  var sl = $(this).parent().find('img');

  $(cover).html(sl.clone());

})
