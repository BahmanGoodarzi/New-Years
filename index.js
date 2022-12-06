const daysE1 = document.querySelector('.days .big-text')
const hoursE1 = document.querySelector('.hours .big-text')
const minsE1 = document.querySelector('.mins .big-text')
const secondE1 = document.querySelector('.second .big-text')



const newYears = '1 Jan 2023';

function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalsecond = (newYearsDate - currentDate) / 1000;


    const days = Math.floor(totalsecond/3600/24);
    const hours = Math.floor(totalsecond/3600)%24;
    const minutes = Math.floor(totalsecond/60)%60;
    const second = Math.floor(totalsecond)%60;


    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime (hours);
    minsE1.innerHTML = formatTime (minutes);
    secondE1.innerHTML = formatTime (second);

}

function formatTime(time){
    return time<10 ? `0${time}` : time
}

setInterval(countdown, 1000)
countdown();




function createSnow(){
    const snow = document.createElement('i')
    snow.classList.add('fas');
    snow.classList.add('fa-snowflake');
    snow.style.left = Math.random() * window.innerWidth - 20 + 'px';
    snow.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() * 10 + 8 + 'px';

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove()
    }, 3000);
}

setInterval(createSnow , 40)

