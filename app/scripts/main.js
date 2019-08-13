console.log('\'Phebe\' \'Yawson!\'');

const timer = () => {
    // Set the date we're counting down to
    let countDownDate = new Date('Sept 20, 2019 07:00:00').getTime();

    // Update the count down every 1 second
    let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();
            
        // Find the distance between now and the count down date
        let distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        // Output the result in an element with id="demo"
        document.getElementById('demo').innerHTML = hours + 'h '
        + minutes + 'm ' + seconds + 's ';
            
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById('demo').innerHTML = 'THE BOOK HAS LAUNCHED!';
        }
    }, 1000);
}

const summary = 'Tyese is known for being reserved and quiet, but when she accidentally peels back the facade from her family secrets she must rise up to lead her friends and family in a war against an ancient evil. While fighting for the future of all she holds dear, she must also battle ghosts from her past and her changing identity. Not just anyone can be The Alpha, and she never expected to be anything but human.';

const aboutHer ='In 2002 Phebe Yawson volunteered her services to a NGO in Ghana, West Africa. In 2015 she relocated back to America to raise her family. Now able to pursue her dreams she spends her days with her husband and kids and her nights with her pen.'

document.getElementById('test').innerHTML = summary;