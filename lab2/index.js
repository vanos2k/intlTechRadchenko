const content = document.querySelector('[data-type="content"]');
const listOfTabs = document.querySelectorAll('h2[data-id]');

const texts = ['Sample content 1', 'Sample content 2', 'Sample content 3'];

const cb = (event) => {
  const el = event.target;
  document.querySelectorAll('h2').forEach((el) => el.classList.remove('selected'));
  el.classList.add('selected');
  content.innerText = texts[el.dataset.id];

};

listOfTabs.forEach((el) => el.addEventListener('click', cb));
