import _ from 'lodash';
import './styles/main.scss';
import gitlogo from './images/github.svg';
import logoImg from './images/flower-logo.jpg';
import homepage from './home.js';

const content = document.querySelector('#content');
const header = document.createElement('header');
const nav = document.createElement('nav');
const article = document.createElement('article');
const footer = document.createElement('footer');

function headerDiv(){
  const div = document.createElement('div');
  const logo = new Image();
  logo.src = logoImg;
  const title = document.createElement('h1');
  title.innerHTML = 'Welcome to Kebab resort';
  div.append(logo,title);

  return div;
}

const navDiv = document.createElement('div');
const homeBtn = document.createElement('button');
homeBtn.innerText = 'Home';
const menuBtn = document.createElement('button');
menuBtn.innerText = 'Menu';
const contactBtn = document.createElement('button');
contactBtn.innerText = 'Contact';
navDiv.append(homeBtn,menuBtn,contactBtn);

footer.innerHTML = 'Copyright &#169 2022 ebubejisos';
const gitlink = document.createElement('a');
gitlink.href = 'https://github.com/Ebubejisos';
const github = new Image();
github.src = gitlogo;
gitlink.append(github);
footer.appendChild(gitlink);

// Controller
homeBtn.addEventListener('click', ()=>{
  article.innerHTML = '';
  article.append(homepage());
  menuBtn.classList.remove('btn-border');
  contactBtn.classList.remove('btn-border');
  homeBtn.classList.add('btn-border');
});
menuBtn.addEventListener('click', ()=>{
  article.innerHTML = '';
  homeBtn.classList.remove('btn-border');
  contactBtn.classList.remove('btn-border');
  menuBtn.classList.add('btn-border');
});
contactBtn.addEventListener('click', ()=>{
  article.innerHTML = '';
  menuBtn.classList.remove('btn-border');
  homeBtn.classList.remove('btn-border');
  contactBtn.classList.add('btn-border');
});


nav.append(navDiv);
header.append(headerDiv(),nav);
content.append(header,article,footer);

/*
if (module.hot) {
  module.hot.accept('./home.js', () => {
    console.log('Accepting the updated printMe module!');
    content.removeChild(element);
    element = homepage(); // Re-render the "component" to update the click handler
    content.appendChild(element);
  });
}
*/