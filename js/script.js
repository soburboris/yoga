window.addEventListener('DOMContentLoaded', function () {

            'use strict';

            let tab = document.querySelectorAll('.info-header-tab'),
                info = document.querySelector('.info-header'),
                tabContent = document.querySelectorAll('.info-tabcontent');

            function hideTabContent(a) {
                for (let i = a; i < tabContent.length; i++) {

                    tabContent[i].classList.remove('show');
                    tabContent[i].classList.add('hide');
                }
            }

            hideTabContent(1);

            function showTabContent(b) {

                if (tabContent[b].classList.contains('hide')) {

                    tabContent[b].classList.remove('hide');
                    tabContent[b].classList.add('show');


                }
            }

            info.addEventListener('click', function (event) {
                let target = event.target;
                if (target && target.classList.contains('info-header-tab')) {
                    for (let i = 0; i < tab.length; i++) {
                        if (target == tab[i]) {
                            hideTabContent(0);
                            showTabContent(i);
                            break;

                        }

                    }

                }
            });


            //// TIMER
            let deadline = '2020-03-06',
                region = 6;

            function getTimeRemaining(endtime) {
                let time = Date.parse(deadline) - Date.parse(new Date()),
                    seconds = Math.floor((time / 1000) % 60),
                    minutes = Math.floor((time / 1000 / 60) % 60),
                    hours = Math.floor(((time / 1000 / 60 / 60)-region) % 24),
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

            });