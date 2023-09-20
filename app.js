function convertTemp(val) {
    let celcius = (val - 32) / 1.8
    return celcius 
}

function darkMode () {
    let body = document.body
    body.classList.toggle("dark-mode")
}

darkMode()

document.getElementById("convert").addEventListener("click", function() {
    let fTemp = document.getElementById("fahrenheit").value
    if(fTemp == "") {
        window.alert("Values must be numbers!")
    } else {
        let celcius = convertTemp(fTemp).toFixed(2)
        document.getElementById("celcius").value = celcius
    }
})

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("fahrenheit").value = 0;
    document.getElementById("celcius").value = 0;
})

document.getElementById("darkmode").addEventListener("click", darkMode)






