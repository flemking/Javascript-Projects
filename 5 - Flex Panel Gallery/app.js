const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('open')
        panel.classList.toggle('clicked')
    })
})