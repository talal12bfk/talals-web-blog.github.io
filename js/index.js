const body = document.querySelector('body')


// checking if loged in and setting the text of the login link

const loginLink = document.querySelector('#loginLink')

let isLogin = true
if (isLogin) {
  loginLink.textContent = 'LogOut'
} else {
  loginLink.textContent = 'LogIn/SignUp'
}


// checking for a click on themeSwitchBtn and toggling dark/light theme

const themeSwitchBtn = document.querySelector('#themeSwitch')

let theme = 'light'
themeSwitchBtn.addEventListener("click", themeSwitcher())

function themeSwitcher() {
  if (theme == 'light') {
    theme = 'dark'
    setDarkTheme()
  } else {
    theme = 'light'
    setLightTheme()
  }
}

function setLightTheme() {
  
}

function setDarkTheme() {
  
}


// checking for a click on menuBtn and toggling menu on and off

const menuBtn = document.querySelector('#menuBtn')
const menu = document.querySelector('#menu')

menuBtn.addEventListener("click", () => {
  if (menu.style.opacity == '1') {
    gsap.to('#menu', {
      opacity: 0,
      duration: 0.3,
      onComplete() {
        menu.style.pointerEvents = 'none'
      }
    })
  } else {
    gsap.to('#menu', {
      opacity: 1,
      duration: 0.3,
      onComplete() {
        menu.style.pointerEvents = 'auto'
      }
    })
  }
})


// checking for a click on searchBtn and toggling search bar on and off

const searchBtn = document.querySelector('#searchBtn')
const search = document.querySelector('#search')

if (document.location.pathname == '/index.html') {
  searchBtn.addEventListener("click", () => {
    if (search.style.opacity == '1') {
      gsap.to('#search', {
        opacity: 0,
        duration: 0.3,
        onComplete() {
          search.style.pointerEvents = 'none'
        }
      })
    } else {
      gsap.to('#search', {
        opacity: 1,
        duration: 0.3,
        onComplete() {
          search.style.pointerEvents = 'auto'
        }
      })
    }
  })
}


// checking for click on a content object then redirect the user to the page using the data-url attribute

const contents = document.querySelectorAll('.content')

contents.forEach(content => {
  content.addEventListener("click", (e) => {
    url = content.getAttribute('data-url')
    window.location.pathname = url
  })
})


// hidding/showing navbar

const navbar = document.querySelector('.nav-container')

window.addEventListener('scroll', (e) => {
  if (e.path[1].scrollY >= 39) {
    navbar.style.display = 'none'
  } else {
    navbar.style.display = 'block'
  }
})


// hidding/showing upBtn

window.addEventListener('scroll', (e) => {
  if (e.path[1].scrollY >= 150) {
    gsap.to('#upBtn', {
      opacity: 1,
      duration: 0.3,
      onComplete() {
        upBtn.style.pointerEvents = 'auto'
      }
    })
  } else {
    gsap.to('#upBtn', {
      opacity: 0,
      duration: 0.3,
      onComplete() {
        upBtn.style.pointerEvents = 'none'
      }
    })
  }
})


// upBtn functionality

const upBtn = document.querySelector('#upBtn')

upBtn.addEventListener("click", () => {
  window.scrollTo(0, 0)
})