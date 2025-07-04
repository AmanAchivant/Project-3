var istatus = document.querySelector("h5")

var btn= document.querySelector("#add")
// var removeFr=document.querySelector("#remove")
var check=0

btn.addEventListener('click',function(){
    if(check ==0){
        istatus.innerHTML='Friends'
        istatus.style.color='green'
        btn.innerHTML='Remove Friend'
        check=1
    }
    else{
        istatus.innerHTML='Stranger'
        istatus.style.color='red'
        btn.innerHTML='Add Friend'
        check=0
    }
})

// removeFr.addEventListener('click',function(){
//     istatus.innerHTML='Stranger'
//     istatus.style.color='red'
// })
