const buttonHappy = document.getElementById('btn-happy')
const buttonDead = document.getElementById('btn-dead')
const img = document.querySelector('.imagine')

buttonHappy.addEventListener('click', function () {
	img.style.display = 'inline'
	buttonHappy.disabled = true
	buttonDead.disabled = false
})// have 2 arguments ().(callBackFunction) Другий аргумент виповниться після здійсноної умови першого аргумента

buttonDead.addEventListener('click', function () {
	img.style.display = 'none'
	buttonDead.disabled = true
	buttonHappy.disabled = false
})