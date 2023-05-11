window.addEventListener("load", () => {
    const next = document.querySelector(".slider-next")
    const prev = document.querySelector(".slider-prev")
    const sliderMain = document.querySelector(".slider-main")
    const sliderItems = document.querySelectorAll(".slider-item")
    const dotItems = document.querySelectorAll(".slider-dot-item")

    const sliderItemWidth = sliderItems[0].offsetWidth
    const slidesLength = sliderItems.length

    let postionX = 0
    let index = 0

    ;[...dotItems].forEach((item) =>
        item.addEventListener("click", handleClickDot)
    )
    next.addEventListener("click", function () {
        handleChangeSlide(1)
    })
    prev.addEventListener("click", function () {
        handleChangeSlide(-1)
    })

    function handleClickDot(event) {
        ;[...dotItems].forEach((item) => item.classList.remove("active"))
        event.target.classList.add("active")
        index = parseInt(event.target.dataset.index)
        postionX = -sliderItemWidth * index
        sliderMain.style = `transform: translateX(${postionX}px);`
    }

    function handleChangeSlide(direction) {
        if (direction === 1) {
            if (index >= slidesLength-1) {
                index = slidesLength - 1
                return
            }
            index++
            postionX = -index * sliderItemWidth
            sliderMain.style = `transform: translateX(${postionX}px)`
            ;[...dotItems].forEach((item) => item.classList.remove("active"))
            ;[...dotItems][index].classList.add("active")
        } else {
            if (index <= 0) {
                index = 0
                return
            }
            index--
            postionX = -index * sliderItemWidth
            sliderMain.style = `transform: translateX(${postionX}px)`
            ;[...dotItems].forEach((item) => item.classList.remove("active"))
            ;[...dotItems][index].classList.add("active")
        }
    }
})
