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


  document.querySelector("form").addEventListener("submit", handleSubmit);

  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('my-form');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }
  