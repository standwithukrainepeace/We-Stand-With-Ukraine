function copytext() {
  /* Get the text field */
  var copyText = document.getElementById('textInput');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = 'Wallet Address Copied';
}
