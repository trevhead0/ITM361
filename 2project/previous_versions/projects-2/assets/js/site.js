(function(){
  if(typeof (document.querySelector)==="undefined")
    {
      return;
    }
    else{
  console.log("we are good")
    }
  })();
///////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded',function(){
  // only use java(this function) if page fully loaded

  var qs=document.querySelector('html');
    qs.className='js';

});
