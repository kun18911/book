var buttonRead = document.getElementById("app3")
var inputRead = document.querySelector(".a")
buttonRead.addEventListener("click", click1)
var dal = true
var stop = true
function click1() {
    buttonRead.classList.add("nonee")
    inputRead.classList.add("nonee")
    document.querySelector(".stop1").classList.remove("nonee")
    var valueInput = document.querySelector(".a").value
    var arrayText = valueInput.split(" ")
    console.log(arrayText)
    console.log()

    var i = 0
    startRead()
    function startRead() {
        if(dal == true) {
            console.log(i, arrayText[i])
            document.getElementById("app2").innerHTML = arrayText[i]
            i++
            document.querySelector(".stop1").addEventListener("click", click2)
            function click2() {
                console.log("i hiện tại là:" + i)
                if (stop == true) {
                dal = false
                document.querySelector(".stop1").classList.add("clickStop")

                setTimeout(function () {
                    document.querySelector(".stop1").classList.add("nonee")
                    document.querySelector(".stop1").classList.remove("clickStop")

                    document.querySelector(".stop2").classList.remove("nonee")
                    document.querySelector(".stop2").addEventListener("click", click3)
            function click3() {
                stop = false
                if (stop == false) {
                dal = true
                document.querySelector(".stop2").classList.add("clickCon")

                setTimeout(function () {
                

                document.querySelector(".stop1").classList.remove("nonee")
                document.querySelector(".stop2").classList.add("nonee")
                stop = true
                startRead()},400)
                
            }
        }
                },400)

                
            }
           
            }}
            if (i < arrayText.length) {
                setTimeout(function() {startRead()},200)
            }
      
       

    }

}



// var i = 0
// startReadd()
// function startReadd() {
 
//     startReaddd()
//     function startReaddd() {
     
            
//             console.log(i + 100)
        
//     }
//         console.log(i)
    
//         i++
//         if (i<10){startReadd()}
//     }