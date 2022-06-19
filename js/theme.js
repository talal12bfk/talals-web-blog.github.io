const themeSwitchBtn = document.querySelector('#themeSwitch');

const blogEntry = document.querySelector('.blog-entry');
const entryTitleText = document.querySelector('.entry-title-text');
const toc = document.querySelector('.toc');
const tocText = document.querySelector('.toc-text');
const contentsItem = document.querySelectorAll('.contents-item');
const entrySection = document.querySelectorAll('.entry-section');
const entrySectionText = document.querySelectorAll('.entry-section-text');
const entrySectionTitle = document.querySelectorAll('.entry-section-title');
const sectionImgDesc = document.querySelectorAll('.section-img-description');

const upBtnSvg = document.querySelector('.up-button-svg');

const contentsBgc = document.querySelectorAll('.content');
const contentsText = document.querySelectorAll('.content-text');
const contentWrapper = document.querySelector('.content-wrapper');


let theme = 'light';
themeSwitchBtn.addEventListener("click", () => {
  if (theme == 'light') {
    theme = 'dark';setDarkTheme();
  } else {
    theme = 'light';setLightTheme();
  }
});

let color0Dark = '000000';let color2Dark = '1c1c1c';let color3Dark = '212121';let colorLight = 'edededed';let contentBgc = 'e2e2e2';

function setLightTheme() {
  
  upBtnSvg.style.fill = '#' + color2Dark;

  if (document.location.pathname == '/index.html') {
    body.style.backgroundColor = '#' + colorLight
    contentsBgc.forEach(content => {content.style.backgroundColor = '#' + contentBgc})
    contentsText.forEach(contentText => {contentText.style.color = '#' + color2Dark})
  }
  
  if (document.location.pathname == '/entries/firstEntry.html') {
    body.style.backgroundColor = '#' + colorLight
    entryTitleText.style.color = '#' + color0Dark
    toc.style.backgroundColor = '#' + contentBgc
    tocText.style.color = '#' + color0Dark
    contentsItem.forEach(item => {item.style.color = '#' + color0Dark})
    entrySection.forEach(section => {section.style.backgroundColor = '#' + contentBgc})
    entrySectionTitle.forEach(title => {title.style.color = '#' + color0Dark})
    entrySectionText.forEach(text => {text.style.color = '#' + color0Dark})
    sectionImgDesc.forEach(desc => {desc.style.color = '#' + color0Dark})
  }
}

function setDarkTheme() {
  upBtnSvg.style.fill = '#' + colorLight
  if (document.location.pathname == '/index.html') {
    body.style.backgroundColor = '#' + color3Dark
    contentsBgc.forEach(content => {content.style.backgroundColor = '#' + color2Dark})
    contentsText.forEach(contentText => {contentText.style.color = '#' + contentBgc})
  }
  
  if (document.location.pathname == '/entries/') {
    body.style.backgroundColor = '#' + color3Dark
    entryTitleText.style.color = '#' + contentBgc
    toc.style.backgroundColor = '#' + color2Dark
    tocText.style.color = '#' + contentBgc
    contentsItem.forEach(item => {item.style.color = '#' + contentBgc})
    entrySection.forEach(section => {section.style.backgroundColor = '#' + color2Dark})
    entrySectionTitle.forEach(title => {title.style.color = '#' + contentBgc})
    entrySectionText.forEach(text => {text.style.color = '#' + contentBgc})
    sectionImgDesc.forEach(desc => {desc.style.color = '#' + contentBgc})
  }
}

