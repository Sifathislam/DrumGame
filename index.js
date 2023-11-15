// Click Section 
const containerOfButtons = document.querySelector('.set').children;
for(i = 0 ; i < containerOfButtons.length; i++){
        containerOfButtons[i].addEventListener('click', function(){
            let buttonName = this.innerHTML; 
            soundMake(buttonName)
        })
    } 

// Keybord Section 

document.addEventListener('keydown',function(event){
  soundMake(event.key)
})

function soundMake (key){
    switch (key) {
        case 'f':
            var audio = new Audio('sounds/tom-1.mp3')
            return audio.play();

            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3')
            return audio.play();

            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3')
            return audio.play();

            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3')
            return audio.play();

            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3')
            return audio.play();

            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3')
            return audio.play();

            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3')
            return audio.play();

            break;
    
        default:
            break;
    }
}