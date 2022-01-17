const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

const isLampBroken = () => lamp.src.indexOf('broken') > -1

const lampOn = () => {
    if(!isLampBroken()) {
        lamp.src = './img/turnOn.jpg'
    }
}

const lampOff = () => {
    if(!isLampBroken()) {
        lamp.src = './img/turnOff.jpg'
    }
}

const lampBroken = () => {
    lamp.src = './img/broken.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)