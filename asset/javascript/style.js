var buttonRead = document.getElementById("app3")
var inputRead = document.querySelector(".a")
buttonRead.addEventListener("click", click1)
var dal = true

// function click1() {
//     buttonRead.classList.add("nonee")
//     inputRead.classList.add("nonee")
//     document.querySelector(".stop1").classList.remove("nonee")
//     var valueInput = document.querySelector(".a").value
//     var arrayText = valueInput.split(" ")
//     console.log(arrayText)
//     console.log()

//     var i = 0
//     startRead()
//     function startRead() {
//         if(dal == true) {
//             console.log(i, arrayText[i])
//             document.getElementById("app2").innerHTML = arrayText[i]
//             i++
//             document.querySelector(".stop1").addEventListener("click", click2)
//             function click2() {
//                 console.log("i hiện tại là:" + i)
//                 if (stop == true) {
//                 dal = false
//                 document.querySelector(".stop1").classList.add("clickStop")

//                 setTimeout(function () {
//                     document.querySelector(".stop1").classList.add("nonee")
//                     document.querySelector(".stop1").classList.remove("clickStop")

//                     document.querySelector(".stop2").classList.remove("nonee")
//                     document.querySelector(".stop2").addEventListener("click", click3)
//             function click3() {
//                 stop = false
//                 if (stop == false) {
//                 dal = true
//                 document.querySelector(".stop2").classList.add("clickCon")

//                 setTimeout(function () {
                

//                 document.querySelector(".stop1").classList.remove("nonee")
//                 document.querySelector(".stop2").classList.add("nonee")
//                 stop = true
//                 startRead()},400)
                
//             }
//         }
//                 },400)

                
//             }
           
//             }}
//             if (i < arrayText.length) {
//                 setTimeout(function() {startRead()},140)
//             }
      
       

//     }

// }



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


// function click1() {
//     buttonRead.classList.add("nonee")
//     inputRead.classList.add("nonee")
//     document.querySelector(".stop1").classList.remove("nonee")
//     var valueInput = document.querySelector(".a").value
//     var arrayText = valueInput.split(" ")
//     console.log(arrayText)
//     console.log()

//     var i = 0
//     startRead()
//     function startRead() {
//         if(dal == true) {
//             console.log(i, arrayText[i])
//             document.getElementById("app2").innerHTML = arrayText[i]
//             i++
//             document.querySelector(".stop1").addEventListener("click", click2)
//             function click2() {
//                 console.log("i hiện tại là:" + i)
//                 if (stop == true) {
//                 dal = false
//                 document.querySelector(".stop1").classList.add("clickStop")

//                 setTimeout(function () {
//                     document.querySelector(".stop1").classList.add("nonee")
//                     document.querySelector(".stop1").classList.remove("clickStop")

//                     document.querySelector(".stop2").classList.remove("nonee")
//                     document.querySelector(".stop2").addEventListener("click", click3)
//             function click3() {
//                 stop = false
//                 if (stop == false) {
//                 dal = true
//                 document.querySelector(".stop2").classList.add("clickCon")

//                 setTimeout(function () {
                

//                 document.querySelector(".stop1").classList.remove("nonee")
//                 document.querySelector(".stop2").classList.add("nonee")
//                 stop = true
//                 startRead()},400)
                
//             }
//         }
//                 },400)

                
//             }
           
//             }}
//             if (i < arrayText.length) {
//                 setTimeout(function() {startRead()},140)
//             }
      
       

//     }



//     startRead()
//     function startRead() {
//         if(dal == true) {
//             dal = false
            
           
          
//             document.querySelector(".stop1").addEventListener("click", click2)
//             function click2() {
//                 document.querySelector(".stop1").classList.add("clickStop")
               
//                 setTimeout(function () {
//                     document.querySelector(".stop1").classList.add("nonee")
//                     document.querySelector(".stop1").classList.remove("clickStop")
//                     document.querySelector(".stop1").removeEventListener("click", click2)
//                     document.querySelector(".stop2").classList.remove("nonee")
//                     dal = true
//                     clearInterval(id)
                    

//                     document.querySelector(".stop2").addEventListener("click", click3)
//             function click3() {
               
                
//                 document.querySelector(".stop2").classList.add("clickCon")

               
                
//                 document.querySelector(".stop2").removeEventListener("click", click3)
//                 document.querySelector(".stop1").classList.remove("nonee")
//                 document.querySelector(".stop2").classList.add("nonee")
//     startRead()
                
                
            
//         }
//                 },400)

                
//             }
           
//             }}
//             if (i < arrayText.length) {
//                 var id = setInterval(function() { 
//                     console.log(i, arrayText[i])
//                     document.getElementById("app2").innerHTML = arrayText[i]
//                     i++
//                     if (i == arrayText.length) {clearInterval(id)}
//                 },140)
//             }
      
       

//     }

var i = 0
var id = 0
var adaDoc = Number(document.querySelector(".daDoc1").innerHTML)
var bdaDoc = Number(document.querySelector(".daDoc1").innerHTML)
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
            console.log(i, arrayText[i])
            document.querySelector(".daDoc1").innerHTML = i + 1
            document.getElementById("app2").innerHTML = arrayText[i]
            i++
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

                },1200)
            }
        }
                if (i < arrayText.length) {
                    id = setInterval(mybae,140)
                }
    
        }


function stop() {
    clearInterval(id)
    document.querySelector(".stop1").classList.add("clickStop")          
                setTimeout(function () {
                    document.querySelector(".stop1").classList.add("nonee")
                    document.querySelector(".stop1").classList.remove("clickStop")
                    document.querySelector(".stop2").classList.remove("nonee")
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