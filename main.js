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

  document.getElementById('me').addEventListener('click', favoriteThings);

  var newDiv = document.createElement('div');
  newDiv.innerHTML = '<ul><li>Music</li><li>culture</li><li>Nina Simone</li></ul>';

  var contentEle = document.getElementsByClassName('content-container')[0];
  var article = document.getElementsByClassName('text-content')[0];
  contentEle.insertBefore(newDiv, article);
};

function favoriteThings() {
  var arr = ['music', 'culture', 'Nina Simone', 'traveling'];
  var arrSize = arr.length;
  var str = 'My favorite things are ';

  for (var i = 0;  i < arrSize; i++) {
    if (i === (arrSize - 1)) {
      str = str + '& ' + arr[i] + '.';
    } else {
      str = str + arr[i] + ', ';  
    };
  };
  alert(str);

  
};

// var newDiv = document.createElement('div');
// newDiv.innerHTML = '<ul><li>Music</li><li>culture</li><li>Nina Simone</li></ul>';

// var header = document.getElementByTagName('header');
// header.appendChild(newDiv);


