function init() {
  $('body').click(function() {
		    setTimeout(function() { set('3');}, 1000);
		    setTimeout(function() { set('2');}, 2000);
		    setTimeout(function() { set('1');}, 3000);
		    setTimeout(function() { set(randomLetter());}, 4000);
		   });
}

function set(c) {
  $('#letter').html(c);
}

function randomLetter() {
  var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomPoz = Math.floor(Math.random() * charSet.length);
  return charSet.substring(randomPoz,randomPoz+1);
}

$(init);