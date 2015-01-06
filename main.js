window.onload = function() {
  setTimeout(renderModal, 3000);

  function renderModal() {
    var modal = document.getElementById('modal');
    modal.style.visibility = 'visible';
  };

  var button = document.getElementById('close');
  button.addEventListener('click', hideModal);

  function hideModal() {
    var element = document.getElementById('modal');
    element.style.visibility = 'hidden';
  };
};
