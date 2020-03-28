function timer() {
    let deadline = '2020-04-30',
        region = 6;

    function getTimeRemaining(endtime) {
        let time = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor((time / 1000 / 60) % 60),
            hours = Math.floor(((time / 1000 / 60 / 60) - region) % 24),
            days = Math.floor((time / 1000 / 60 / 60 / 24));

        return {

            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function SetClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        // timer.style.padding = '20px';

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.days >= 10) {
                days.textContent = t.days;

            } else {
                days.textContent = '0' + t.days;

            }

            if (t.hours >= 10) {
                hours.textContent = t.hours;

            } else {
                hours.textContent = '0' + t.hours;

            }

            if (t.minutes >= 10) {
                minutes.textContent = t.minutes;

            } else {
                minutes.textContent = '0' + t.minutes;

            }

            if (t.seconds >= 10) {
                seconds.textContent = t.seconds;

            } else {
                seconds.textContent = '0' + t.seconds;

            }


            if (t.total <= 0) {
                clearInterval(timeInterval);

            }
        }



    }
    SetClock('timer', deadline);

}

module.exports = timer;