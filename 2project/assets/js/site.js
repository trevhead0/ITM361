(function(){
  if(typeof (document.querySelector)==="undefined"){
    return;}
  else{
    console.log("we are good");
  }})();
//  ---------------------------------------------
document.addEventListener('DOMContentLoaded', function(){
  // only use java(this function) if page fully loaded
  var figure;
  var urls;
  var pg;
  var i;
  var image;
  var video;
  var qs=document.querySelector('html');
  qs.className='js';
  // grab my photogallery i want to work with
  if(document.querySelector('#family-page')!==null)
  {
    pg=document.querySelector('#photo-gallery');
    console.log(pg);

    // setup photo gallery and i Probably should have made them class hidden and just used toggle,  but eh
    // I am going for no photgallery if they dont have js(but once again it could be default hidden and js unhides it.)
    document.querySelector('.focus').remove();
    urls= ['../assets/images/family', '../assets/images/unicorns.jpg', '../assets/images/cruise.jpg', '../assets/images/notdamomma.jpg', '../assets/images/adelinegaming.jpg'];

    for(i=0; i<urls.length; i++){
      figure=document.createElement('figure');
      image=document.createElement('img');
      if(i===0)
      {
        figure.setAttribute('class', 'focus');
      }
      image.setAttribute('src', urls[i]);
      image.classList.add('pg-content');
      if(i!==0)
      {
        figure.setAttribute('class', 'nonfocus');
      }
      figure.append(image);
      pg.append(figure);
    }
    for(i=0; i<1; i++){
      figure=document.createElement('figure');
      video=document.createElement('video');
      video.setAttribute('src', '../assets/images/to_cool.mp4');
      video.setAttribute('id', 'video-1');
      figure.setAttribute('class', 'nonfocus');
      figure.append(video);
      pg.append(figure);
    }
    // modify photogallery

    pg.addEventListener('click', function(e)
    {
      var focus=document.querySelector('.focus');
      focus.classList.toggle('focus');
      focus.classList.toggle('nonfocus');
      e.target.parentElement.classList.toggle('focus');
      e.target.parentElement.classList.toggle('nonfocus');
      if(e.target!==document.querySelector('#video-1'))
      {
        video.removeAttribute('controls');
      }
      if(e.target===document.querySelector('#video-1'))
      {
        video.toggleAttribute('controls');
      }
    });

  }
});
