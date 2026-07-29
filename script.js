
// Theme toggle — toggles .tatin for light theme
const btn = document.getElementById('themeBtn');
btn.addEventListener('click', () => document.body.classList.toggle('tatin'));

//project sky
const sky = document.getElementById('projectSky');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if(sky){
    const starCount = reduceMotion ? 45 : 90;

    for(let i = 0; i < starCount; i++){
        const star = document.createElement('span');
        const size = Math.random() * 2.2 + 1;

        star.className = 'sky-star';
        star.style.setProperty('--x', `${Math.random() * 100}%`);
        star.style.setProperty('--y', `${Math.random() * 100}%`);
        star.style.setProperty('--size', `${size}px`);
        star.style.setProperty('--opacity', `${Math.random() * 0.65 + 0.25}`);    
        star.style.setProperty('--duration', `${Math.random() * 2.5 + 1.5}s`);    
        star.style.setProperty('--delay', `${Math.random() * -4}s`);    

        sky.appendChild(star);
    }
}
