const start = () => {
    console.log('\'Phebe\' \'Yawson!\'');

    document.getElementById('show').style.display = 'none';
    const summary = 'Tyese is known for being reserved and quiet, but when she accidentally peels back the facade from her family secrets she must rise up to lead her friends and family in a war against an ancient evil. While fighting for the future of all she holds dear, she must also battle ghosts from her past and her changing identity. Not just anyone can be The Alpha, and she never expected to be anything but human.';

    const aboutHer ='In 2002 Phebe Yawson volunteered her services to a non-profit in Ghana, West Africa after graduating from DeVry. In 2015 she relocated back to America to raise her family. Now able to pursue her dreams she spends her days with her husband and kids and her nights with her pen. Phebe is now an award winning author and poet.'

    document.getElementById('test').innerHTML = summary;
}
start();


$(document).ready(function(){
    $('#hide').click(function(){
      $('main, footer, .fab, .fas').hide();
      $('#show').show();
      $('#hide').hide()
    });
    $('#show').click(function(){
      $('main, footer, .fab, .fas').show();
      $('#show').hide();
      $('#hide').show();
    });
  });

