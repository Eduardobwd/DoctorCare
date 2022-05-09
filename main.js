// É assim que faz comentario em JS

// String (textos)
// Number (numeros)
// Boolean (true | false)

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2 //Constante  (o valor nao pode ser alterado)

  // verificar se a seção passou da linha
  // quias dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeigth = section.offsetHeigth
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeigth
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[hfer*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}



function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
  #home img, 
  #home .stats, 
  #services, 
  #services header, 
  #services .card,
  #about,
  #about header,
  #about .content`)
