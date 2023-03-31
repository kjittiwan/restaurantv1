function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function createHeaderText(text) {
  const header = document.createElement('h2');
  header.textContent = text;
  return header;
}

function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  const ownerImg = document.createElement('img');
  ownerImg.src = 'images/owner.png';
  ownerImg.alt = 'owner';
  home.appendChild(createHeaderText('Welcome to Khiang!'));
  home.appendChild(ownerImg);
  home.appendChild(createParagraph('"You will never look at Thai food the same again.."'));
  return home;
}

function loadHome() {
  const main = document.getElementById('main');
  main.appendChild(createHome());
}
export default loadHome();
