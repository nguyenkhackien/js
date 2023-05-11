window.addEventListener("load", () => {
    const daysText = document.querySelector(".days")
    const hoursText = document.querySelector(".hours")
    const minutesText = document.querySelector(".minutes")
    const secondsText = document.querySelector(".seconds")
    const endDate = new Date("2023-4-30")

    countdown(endDate)
    function countdown(endDate) {
        setInterval(() => {
            const currentDate = new Date()
            let timeRemaining = parseInt((endDate.getTime() - currentDate.getTime()) / 1000)

            if ( isNaN( endDate.getTime() ) || timeRemaining <= 0 ) return;
            let days = parseInt( timeRemaining / ( 24 * 60 * 60 ) )
            timeRemaining = timeRemaining % (24 * 60 * 60)
            let hours = parseInt(timeRemaining / (60 * 60))
            timeRemaining = timeRemaining % (60 * 60)
            let minutes = parseInt(timeRemaining / 60)
            let seconds = parseInt(timeRemaining % 60)

            daysText.textContent = `0${days}`.slice(-2);
            hoursText.textContent = `0${hours}`.slice(-2)
            minutesText.textContent = `0${minutes}`.slice(-2)
            secondsText.textContent = `0${seconds}`.slice(-2)
        }, 10)
    }
})
