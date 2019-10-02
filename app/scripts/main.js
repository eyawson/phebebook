const runJS = () => {
    const synopsis = 'Tyese is known for being reserved and quiet, but when she accidentally peels back the facade from her family secrets she must rise up to lead her friends and family in a war against an ancient evil. While fighting for the future of all she holds dear, she must also battle ghosts from her past and her changing identity. Not just anyone can be <strong>The Alpha</strong>, and she never expected to be anything but human.';

    const aboutHer ='In 2002, Phebe Yawson volunteered her services to a non-profit in Ghana, West Africa after graduating from DeVry. In 2015, she relocated back to America to raise her family. Now able to pursue her dreams, she spends her days with her husband and kids and her nights with her pen. Phebe is now an award winning author and poet.';

    const summary = document.getElementById('synopsis');
    summary.innerHTML = synopsis;

    const aboutPhebe = document.getElementById('aboutPhebe');
    aboutPhebe.innerHTML = aboutHer;

    /* $(document).ready(() => {
        $('#hide').on('click',() => {
            $('main, footer, .fab, .fas').hide();
            $('#show').show();
            $('#hide').hide()
        });
        $('#show').on('click',() => {
            $('main, footer, .fab, .fas').show();
            $('#show').hide();
            $('#hide').show();
        });
        $('#about').on('click',() => {
            if ($('p#test').text() == summary) { 
                $('p#test').text(aboutHer); 
            } else { 
                $('p#test').text(summary); 
            }
        });
    }); */
}

runJS();

const timer = () => {
    // Set the date we're counting down to
let countDownDate = new Date('Sep 27, 2019 23:59:27').getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById('giveAway').innerHTML = days + ' days and ' + hours + ' hours'
  //+ minutes + 'mins ' + seconds + 's ';
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('giveAway').innerHTML = 'Giveaway is over. Stay tuned!';
  }
}, 1000);
}
timer();