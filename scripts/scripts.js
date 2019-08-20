var x = 0;
var text = 'Turner Jordan';
var typingSpeed = 100;

function typing() {
    setTimeout(function type() {
        if (x < text.length) {
            document.getElementById("heading-text").innerHTML += text.charAt(x);
            x++;
            setTimeout(type, typingSpeed);
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', typing);