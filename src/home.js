import Icon from './images/lighthouse-ga44c26762_1920.jpg';


function homepage() {
  const element = document.createElement('div');

  element.innerHTML = 'Home Page';

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = 50;
  myIcon.height = 30;
  myIcon.style = 'border-radius: 50px;';

  element.appendChild(myIcon);

  return element;
}

export default homepage;
