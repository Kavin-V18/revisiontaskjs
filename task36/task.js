let contentContainer = document.getElementById("content-container");

let page = 1
let loading = false
async function displayImages() {
        if (loading) return
        loading = true
        let photos = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=13&_page=${page}`).then(data => { return data.json() })
        let gallery = document.getElementById("gallery")
        photos.forEach(pics => {

                let img = document.createElement("img")

                img.src = pics.thumbnailUrl

                gallery.appendChild(img)
        })
        page++
        if (page > 4) return
        loading = false

}
displayImages()

window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {

                displayImages()
        }
})
