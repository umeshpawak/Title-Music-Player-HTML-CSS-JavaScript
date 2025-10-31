var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/pahle.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg"}
]
var allsongs =  document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")


var audio = new Audio()
var selectedsong = 0

 function mainfunction(){ 
  var clutter = ""
 arr.forEach(function(elem,indx){
    clutter += `<div class="song-card" id= ${indx}>
                         <div class="part1" > 
                         <img src=${elem.img} alt="">
                          <h2>${elem.songName} </h2>
                        </div>
                        <h6>3:56</h6>
                  </div>`
 })
    allsongs.innerHTML = clutter  

     audio.src = arr[selectedsong].url
     poster.style.backgroundImage = `url(${arr[selectedsong].img})`
}
mainfunction()

allsongs.addEventListener("click",function(dets){
selectedsong = dets.target.id
mainfunction()
play.innerHTML = `<i class="ri-pause-mini-line"></i>`
flag = 1 
audio.play()

})

// for controlling buttons  play/pause 
var flag = 0

play.addEventListener("click",function(){
  if(flag == 0){
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`
    mainfunction()
    audio.play()
    flag = 1
  } else{
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`
    mainfunction()
    audio.pause()
    flag = 0
  }
})
//forward or backward k liye 
forward.addEventListener("click",function(){
  if(selectedsong < arr.length - 1){
     selectedsong++
     mainfunction()
     audio.play()
  } else{
    forward.style.opacity = 0.4
  } 
})
//backward k liye 
backward.addEventListener("click",function(){
  if(selectedsong > 0){
     selectedsong--
     mainfunction()
     audio.play()
  } else{
    backward.style.opacity = 0.4
  } 
})
