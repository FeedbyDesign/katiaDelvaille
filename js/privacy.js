var phoneNode = document.getElementById('phone')
var emailNode = document.getElementById('email')

if (window) {
  phoneNode.innerHTML = "+32 476 491 128"
  emailNode.innerHTML = "katia@delvaille.be"
  emailNode.href = "mailto:katia@delvaille.be"
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    phoneNode.href = "tel:+32476491128"
  }
}
