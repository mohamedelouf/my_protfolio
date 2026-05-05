 const cursor = document.getElementById('cursor');
 const ring = document.getElementById('cursor-ring');
 let ringX=window.innerWidth/2;
 let ringY=window.innerHeight/2;
 let started=false;

 document.addEventListener('mousemove', e => {
    if(!started){
        cursor.style.opacity='1';
        ring.style.opacity='0.4';
        started=true;

        ringX=e.clientX;
        ringY=e.clientY;
    }
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    ringX+=(e.clientX - ringX) * 0.5;
    ringY+=(e.clientY - ringY) * 0.5;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';  
   
   
 });

 const elements = document.querySelectorAll('a,button');

 elements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
        ring.style.opacity='0.8';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        ring.style.transform = 'translate(-50%, -50%) scale(1)';
        ring.style.opacity='0.4';
    });
 });
