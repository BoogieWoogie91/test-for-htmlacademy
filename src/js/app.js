import '../css/style.css';

const api = {
  apiKey: 'c11a864308cc4de789d2d084aad69e5d',
  apiUrl: 'https://newsapi.org/v2/top-headlines',
};

class FormData {
  constructor(country, category, query) {
    this.country = country;
    this.category = category;
    this.query = query;
  }
}

function fetcher(formData) {
  return new Promise((resolve, reject) => {
    fetch(`${api.apiUrl}?country=${formData.country}${formData.category}${formData.query}&apiKey=${api.apiKey}`)
      .then((response) => response.json())
      .then((results) => resolve(results))
      .catch((err) => reject(err));
  });
}

function readChecker() {
  const checkButtons = document.querySelectorAll('.status');
  const urls = document.querySelectorAll('.readMoreUrl');
  checkButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('green');
      btn.parentElement.classList.toggle('transitioned');
    });
  });

  urls.forEach((url) => {
    url.addEventListener('click', () => {
      url.parentElement.classList.toggle('transitioned');
    });
  });
}

function newsDeleter() {
  const news = document.querySelectorAll('.newsCard');
  if (news.length) {
    news.forEach((element) => {
      element.remove();
    });
  }
}

function sideBarCloser(starterBtn, sideBar) {
  const closeBtn = document.querySelector('.closeSideBar');
  closeBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    starterBtn.classList.toggle('active');
  });
}

function sideBarStarter(fetchResult) {
  const starterBtn = document.querySelector('.sideBarSwitch');
  const sideBar = document.querySelector('.sideBar');
  starterBtn.classList.add('active');
  starterBtn.innerHTML = fetchResult.length;

  fetchResult.forEach((element, index) => {
    const template = `
    <div class='sideCard'>
      <a class='sideCardAnchor' href="#${index}">
        <img src="${element.urlToImage}" alt="">
        <p>${element.title}</p>
      </a>
    </div>
    `;

    sideBar.insertAdjacentHTML('beforeend', template);
  });

  starterBtn.addEventListener('click', () => {
    const sideCard = document.querySelectorAll('.sideCard');
    sideBar.classList.add('active');
    starterBtn.classList.remove('active');
    console.log(sideCard);
    setTimeout(() => {
      sideCard.forEach((element, index) => {
        element.style.transition = `${100 * index}ms`;
        element.classList.toggle('active');
      });
    }, 700);
  });
  sideBarCloser(starterBtn, sideBar);
}

function cardCreator(fetchResult) {
  const parentNode = document.querySelector('#mainArea');
  newsDeleter();
  fetchResult.forEach((element, index) => {
    const date = new Date(Date.parse(element.publishedAt));
    let monthNumber;
    if (date.getMonth() < 10) {
      monthNumber = `0${date.getMonth()}`;
    }
    const template = `
      <div id=${index} class='newsCard'>
        <img src="${element.urlToImage || 'https://picsum.photos/id/1062/5092/3395'}" alt="img">
        <h2 class='title'>${element.title}</h2>
        <p class='author'>${element.author || ''}</p>
        <p class='date'><span>${date.getDate()}</span>-<span>${monthNumber}</span>-<span>${date.getFullYear()}</span>
        <span>${date.getHours()}:</span><span>${date.getMinutes()}</span></p>
        <a class='readMoreUrl' href="${element.url}" target="_blank">Read more >>></a>
        <button class='status'></button>
      </div>
  `;
    parentNode.insertAdjacentHTML('beforeend', template);
  });
  sideBarStarter(fetchResult);
  readChecker();
}

document.forms.news.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = document.forms.news;
  const country = form.querySelector('#countySelect').value;
  let category = form.querySelector('#category').value;
  let query = form.querySelector('#query').value;

  if (!category) {
    category = '';
  } else {
    category = `&category=${category}`;
  }

  if (!query) {
    query = '';
  } else {
    query = `&q=${query}`;
  }
  const formData = new FormData(country, category, query);
  fetcher(formData).then((result) => cardCreator(result.articles));
});
