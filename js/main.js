'use strict';

// ---alert---
{
  // alert('Kai Island（海島）はフリー動画や画像を使って想像で作った物です。ご了承ください。');
}

// ---menu---
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

// ---header---
{
  function currentTime(){
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
  
    let countTime=`${hour}:${minute}`;
  
    document.getElementById('view-time').textContent=countTime;
    refresh();
  }
  function refresh(){
    setTimeout(currentTime,1000);
  }
  currentTime();
}

// ---main2---
{
  const targets = document.querySelectorAll('.storybox');

  function callback(entries,obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold:1,
  };

  const observer = new IntersectionObserver(callback,options);

  targets.forEach(target => {
    observer.observe(target);
  });
}

// {
//   const storys = document.querySelectorAll('.story');

// function callback(entries,obs) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     }
//     entry.target.classList.add('appear');
//     obs.unobserve(entry.target);
//   });
// }

// const options = {
//   threshold:1,
// };

// const observer = new IntersectionObserver(callback,options);

// storys.forEach(target => {
//   observer.observe(target);
// });
// }
