document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('#progress_bar').offsetTop;
  
     if (isVisible) {
       document.getElementById('anim_p_1').classList.add('progress_anim');
       document.getElementById('anim_p_2').classList.add('progress_anim');
       document.getElementById('anim_p_3').classList.add('progress_anim');
       document.getElementById('anim_p_4').classList.add('progress_anim');
       document.getElementById('anim_p_5').classList.add('progress_anim');
     }
  });