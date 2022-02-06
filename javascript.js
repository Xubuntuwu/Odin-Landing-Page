window.onload=function(){ 

    const buttonpress = document.querySelector('.sign-up');
    const normalbuttton = document.querySelector('.normalpage');

        function greet() {
            const userName = prompt('What is your name?');
            if (userName != null) {
            alert(`Welcome ${userName}, nice to meet you!`);
            alert('You turn my world upside down!');
            document.querySelector('body').style.transform = "rotate(180deg)";
            }
        }
        function normalgreet() {
            const name = prompt('What was your name again?');
            if (name != null) {
                alert(`Welcome back ${name}, you found the right button!`);
                alert('You turn my world back rightside up!')
                document.querySelector('body').style.transform = "rotate(0deg)";
            }
        }


    buttonpress.addEventListener('click',greet);
    normalbuttton.addEventListener('click', normalgreet);
    }