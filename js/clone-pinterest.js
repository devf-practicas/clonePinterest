const menu = document.getElementById('menu')
const menuButton = document.getElementById('menu-button')

const notifications = document.getElementById('notifications')
const notificationsButton = document.getElementById('notifications-button')

const pin = document.getElementById('pin')
const pinButton = document.getElementById('pin-button')

const help = document.getElementById('help')
const helpButton = document.getElementById('help-button')

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active')
})

notificationsButton.addEventListener('click', () => {
    notifications.classList.toggle('active')
})

pinButton.addEventListener('click', () => {
    pin.classList.toggle('active')
})

helpButton.addEventListener('click', () => {
    help.classList.toggle('active')
})