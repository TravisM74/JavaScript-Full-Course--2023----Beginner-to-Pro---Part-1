function toggleButton(button){
    if(document.querySelector(`.${button}-button`).classList.contains('button-toggle')){
       document.querySelector(`.${button}-button`).classList.remove('button-toggle');
   } else {
       document.querySelector(`.${button}-button`).classList.add('button-toggle');
   }
   if (button ==='music'){
    document.querySelector(`.tech-button`).classList.remove('button-toggle');
    document.querySelector(`.gaming-button`).classList.remove('button-toggle');
   };
   if (button ==='tech'){
    document.querySelector(`.music-button`).classList.remove('button-toggle');
    document.querySelector(`.gaming-button`).classList.remove('button-toggle');
   };
   if (button ==='gaming'){
    document.querySelector(`.music-button`).classList.remove('button-toggle');
    document.querySelector(`.tech-button`).classList.remove('button-toggle');
   };
};