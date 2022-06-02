//Copyright Vojtík Suchánek 2021

const videos = [
    {
        vid: document.getElementById("video__sendvic"),
        offset: 500
    },
    {
        vid: document.getElementById("video__sendvic2"),
        offset: 0
    },
    {
        vid: document.getElementById("video__sendvic3"),
        offset: 0
    }
]

document.addEventListener("scroll", () => {
    const height = window.screen.height
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const videoPositionY = video.vid.getBoundingClientRect().bottom
        const videoHeight = video.vid.clientHeight
        const videoLenght = video.vid.duration

        let time = (videoPositionY - videoHeight / 2 + video.offset) / height
        if (time < 1 || time > 0) {
            time = Math.floor(videoLenght * 100) / 100 - Math.floor(time * videoLenght * 100) / 100
            video.vid.currentTime = time
        }
    }
})

document.querySelectorAll(".button.button--buy").forEach(button => {
    button.addEventListener("click", () => {
        gtag('event', 'click-order', {
            'event_category': 'order',
            'event_label': 'landing-page'
        })
    })
})