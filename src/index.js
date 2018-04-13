import _ from 'lodash';
import './css/style.css';
import dog from './img/dog.jpg';

function component(){
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let dogPic = new Image();
  dogPic.src = dog;

  element.appendChild(dogPic);

  return element;
}

document.body.appendChild(component());

