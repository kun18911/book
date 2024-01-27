var buttonRead = document.getElementById("app3")
var inputRead = document.querySelector(".a")
buttonRead.addEventListener("click", click1)
var dal = true


var i = 0
var id = 0
    function click1() {
        document.querySelector(".daDoc").classList.remove("nonee")
        buttonRead.classList.add("nonee")
        inputRead.classList.add("nonee")
        document.querySelector(".stop1").classList.remove("nonee")
        var valueInput = document.querySelector(".a").value
        var arrayText = valueInput.split(" ")

        document.querySelector(".daDoc2").innerHTML = arrayText.length
        console.log(arrayText)
        console.log()
    
          
        var mybae = function() { 
            document.querySelector(".tu2").innerHTML = ""
            console.log(i, arrayText[i])
            document.querySelector(".daDoc1").innerHTML = i + 1
           
            

            var y = arrayText[i]
            var b = y.split("")

            if (b.length > 1) {
                document.querySelector(".tu1").innerHTML = b[0]
                var t = 1
                document.querySelector(".tu2").innerHTML = ""
                var ad = setInterval(function() {
                    document.querySelector(".tu2").innerHTML = document.querySelector(".tu2").innerHTML + b[t]
                    t++
                    if (t == b.length) {
                        
                        clearInterval(ad)}
                },0.05)
                
            } else if (b.length == 1) {
               
                document.querySelector(".tu1").innerHTML = b[0]
                document.querySelector(".tu2").innerHTML = ""
                 
            }
            if (i == 0) { clearInterval(id)
                setTimeout(function(){
                    i++
                    click1()},280)}
            else if ((b[b.length - 1] == "." || b[b.length - 1] == "," || b[b.length - 1] == "-" || b[b.length - 1] == ":" || b[b.length - 1] == "?" || b[b.length - 1] == "!" || b[b.length - 1] == " ") && i != arrayText.length - 1) {clearInterval(id)
            setTimeout(function(){
                i++
                click1()},320)} else {i++}

                if (i == arrayText.length) {clearInterval(id)
                    setTimeout(function(){
                        buttonRead.classList.remove("nonee")
                        inputRead.classList.remove("nonee")
                        document.querySelector(".stop1").classList.add("nonee")  
                        document.querySelector(".a").value = ""
                        i = 0
    
                        document.querySelector(".daDoc1").innerHTML = 0
                        document.querySelector(".daDoc2").innerHTML = 0
                        document.querySelector(".daDoc").classList.add("nonee")
    
                        document.getElementById("tu2").innerHTML = ""
                        document.getElementById("tu1").innerHTML = ""
                    },800)
                }
            
        }
                if (i < arrayText.length) {
                    id = setInterval(mybae,150)
                }
    
        }


function stop() {
    clearInterval(id)
    document.querySelector(".stop1").classList.add("clickStop")          
                setTimeout(function () {
                    document.querySelector(".stop1").classList.add("nonee")
                    document.querySelector(".stop1").classList.remove("clickStop")
                    document.querySelector(".stop2").classList.remove("nonee")

                    document.querySelector(".buttonLeft").classList.remove("nonee")
                    document.querySelector(".buttonRight").classList.remove("nonee")
                    // document.querySelector(".stop2").addEventListener("click", click3)
                },400)

}
// document.querySelector(".stop1").addEventListener("click", stop)


function continuee() {
    click1()
    document.querySelector(".stop2").classList.add("clickCon")          
                setTimeout(function () {
                    document.querySelector(".stop2").classList.add("nonee")
                    document.querySelector(".stop2").classList.remove("clickCon")
                    document.querySelector(".stop1").classList.remove("nonee")
                    // document.querySelector(".stop2").addEventListener("click", click3)
                },400)

}

function tru10() {
    i = i - 10
}

function cong10() {
    i = i + 10
}