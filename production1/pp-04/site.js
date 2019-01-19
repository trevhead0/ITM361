// Use IIFE (Immediately Invoked Function Expression)
// See https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(function(){
  // First, make sure we're dealing with an A-grade browser
  if (typeof(document.querySelector)==="undefined")
  {//-------------------------------------------------
    // if document.querySelector is undefined, then just
    // return and get out
    return;
  }//-------------------------------------------------
    // Now we can get down to business and write modern
    // unobtrusive JavaScript...
  document.addEventListener('DOMContentLoaded', function() {
  // Pretty much all of our page's JavaScript that works
  // on the DOM will be written in here...
  // Add a js class on the <html> element...

  document.querySelector('html').className = 'js';
  // Select and replace the contents of #doorbell
  var mydoorbell = new Audio('media/doorbell.mp3');
  var doorbell = document.querySelector('#doorbell');
  doorbell.outerHTML =  "\t<figure id=\"this\" class=\"noaudio\" title=\"Satans doorbell that is mwhahaha\">"+
                          "\n\t\ \ <img aria-pressed=\"false\"id=\"doorbell\"src=\"media/doorbell.jpeg\" alt=\"supposedly a doorbell image\"/>"+
                          "\n\t\t<figcaption class=\"caption\">"+
                            "\n\t\t\ \ Ring My Doorbell"+
                          "\n\t\t</figcaption>"+
                        "\n\t</figure>"
  ;

  //reset doorbell qualities to make it kool and hip hop
  var doorbell = document.querySelector('#doorbell');
  doorbell.style.cursor="cell";
  var figureid = document.querySelector('#this');
  var count=0;
  console.log(doorbell);
  var doorbellfunction=function()
  {//-------------------------------------------------
    //declare function to play

    function ringDoorbell()
    {//-------------------------------------------------
      mydoorbell.play();
    }//-------------------------------------------------

    if (doorbell.getAttribute('aria-pressed')==='false')
    {
    //console.log(doorbell.getAttribute('aria-pressed')) debugger
    ringDoorbell();
    //sets pressed button toggle to true
    doorbell.setAttribute('aria-pressed','true');
    figureid.classList.remove('noaudio');
    if (count===0)
    {
      doorbell.nextElementSibling.innerText='Satans Doorbell Is Ringing, SHOULD HAVE CHECKED THE DOORBELLS TITLE MORTAL';
      count=1;
    }
    else
    {
      doorbell.nextElementSibling.innerText='Satans Doorbell is ringing again you foooooooool';
    }
    //console.log(figureid.classList);
    //lets button pressed again after duration
    setTimeout(function()
      {
        doorbell.setAttribute('aria-pressed','false');
        doorbell.nextElementSibling.innerText='Want to ring again?';
        figureid.classList.add('noaudio');
        //console.log(figureid.classList);
      },
      (mydoorbell.duration*1000)
    );
    }
  }
  // Listen for click events on the doorbell...
  doorbell.addEventListener('click', doorbellfunction);//-------------------------------------------------
  document.addEventListener('keydown', (event)=>{
    if(event.key=='d')
      doorbellfunction();
  });
  });


})();
