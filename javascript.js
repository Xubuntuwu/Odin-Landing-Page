window.onload=function(){ 
    const buttonpress = document.querySelector('.sign-up');
        function greet() {
            const userName = prompt('What is your name?');
            if (userName != null) {
            alert(`Welcome ${userName}, nice to meet you!`);
            }
        }
    buttonpress.addEventListener('click',greet);
    }