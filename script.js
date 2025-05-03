function togglemode() {
    const html = document.documentElement

    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } 
    else {
        html.classList.add('light')
    }

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light'))
        img.setAttribute ('src', './vs.code/assets/ChatGPTlight_files/e884b184-9b87-4140-af9a-84c3f66e9e77-removebg-preview.png')
    else {
        img.setAttribute ('src', './vs.code/assets/ChatGPT_Image_25_de_abr._de_2025__16_45_52-removebg-preview.png' )
    }
}


