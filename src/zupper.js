(function() {
  offenders = document.querySelectorAll('[background]');
  for (var i = 0; i < offenders.length; i ++) { 
    offenders[i].setAttribute('background', ''); 
  }
})()
