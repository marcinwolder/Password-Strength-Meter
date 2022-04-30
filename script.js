const btn = document.querySelector('#btn');
const input = document.querySelector('#passwd');
const box = document.querySelector('.content');

const check = new Check(btn, input, (passwordLevel) => {
  box.classList.remove('-yellow', '-red', '-green', '-gray');
  switch (passwordLevel) {
    case 0:
      box.classList.add('-red');
      break;
    case 1:
      box.classList.add('-yellow');
      break;
    case 2:
      box.classList.add('-green');
      break;
    default:
      box.classList.add('-gray');
      break;
  }
});
