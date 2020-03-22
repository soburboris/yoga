function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        localStorage.setItem("people", personsSum);
        total = (daysSum + personsSum) * 7000;

        if (restDays.value == '' && isNaN(restDays)) {
            totalValue.textContent = 0;

        } else if (persons.value == '') {
            totalValue.textContent = 0;

        } else {
            totalValue.textContent = total;
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        localStorage.setItem("days", daysSum);
        total = (daysSum + personsSum) * 7000;

        if (persons.value == '' && isNaN(persons)) {
            totalValue.textContent = 0;

        } else if (restDays.value == '') {
            totalValue.textContent = 0;

        } else {
            totalValue.textContent = total;
        }
    });


    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.textContent = 0;
        } else {
            let a = total;

            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }

    });

}

module.exports = calc;