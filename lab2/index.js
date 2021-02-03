const firstTab = document.querySelector('h2[data-id="0"]');
const secondTab = document.querySelector('h2[data-id="1"]');
const thirdTab = document.querySelector('h2[data-id="2"]');
const content = document.querySelector('[data-type="content"]');

const texts = ['Sample content 1', 'Sample content 2', 'Sample content 3'];

const cb = (event) => {
  const el = event.target;

  document.querySelectorAll('h2').forEach((el) => el.classList.remove('selected'));
  el.classList.add('selected');
  content.innerText = texts[el.dataset.id];

};

firstTab.addEventListener('click', cb);
secondTab.addEventListener('click', cb);
thirdTab.addEventListener('click', cb);


