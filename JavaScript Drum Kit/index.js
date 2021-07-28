document.addEventListener('keydown', (e) => {
    //let grab every audio and beatbox with its data key
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const box = document.querySelector(`div[data-key="${e.keyCode}"]`);

    // check if any any audio correspond to the keyCode
    if(!audio) return; //if we don't find any audio, we don't do anything
    audio.currentTime = 0;
    audio.play();

    //adding the effect
    box.classList.add('playing');
    
    //now we will remove the effects
    const keys = document.querySelectorAll('.key');
    const removeTransition = (e) => {
        box.classList.remove('playing');
    }
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
})