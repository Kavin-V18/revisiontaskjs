let textvalue = document.getElementById("inputField")
let error = document.getElementById("errorMsg")
let button = document.getElementById("findButton")
let result = document.getElementById("resultDiv")

button.addEventListener("click", function () {
    result.innerHTML = ""
    error.innerHTML = ""
    let inputvalue = textvalue.value.trim()

    if (inputvalue === "") {
        error.innerHTML = "enter a sentence"
        return
    }
    let arr = inputvalue.split(" ")

    let largeword = arr.reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr
    })
    let smallword = arr.reduce((acc, curr) => {
        return acc.length < curr.length ? acc : curr
    })
    result.innerText = `the largest word is : ${largeword}
           the smallest word is :${smallword} `
})
