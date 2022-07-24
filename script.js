console.log("Welcome To Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songsitems= Array.from(document.getElementsByClassName('songsitems'));



let songs=[
    {songsname:"salam-e-ishq",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songsname:"Let me love You",filepath:"songs/2.mp3",coverpath:"cover/2.jpg"},
    {songsname:"Mera Phela",filepath:"songs/3.mp3",coverpath:"cover/3.jpg"},
    {songsname:"Psl 7 Official Anthem",filepath:"songs/4.mp3",coverpath:"cover/4.jpg"},
    {songsname:"Tera zikr",filepath:"songs/5.mp3",coverpath:"cover/5.jpg"},
    {songsname:"salam-e-ishq",filepath:"songs/6.mp3",coverpath:"cover/6.jpg"},
    {songsname:"salam-e-ishq",filepath:"songs/7.mp3",coverpath:"cover/7.jpg"},
    {songsname:"salam-e-ishq",filepath:"songs/8.mp3",coverpath:"cover/8.jpg"},
    {songsname:"salam-e-ishq",filepath:"songs/9.mp3",coverpath:"cover/9.jpg"},
    {songsname:"salam-e-ishq",filepath:"songs/4.mp3",coverpath:"cover/10.jpg"},
]

songsitems.forEach((Element,i)=>{
    console.log(Element,i);
   Element.getElementsByTagName('img')[0].src=songs[i].coverpath;
   Element.getElementsByClassName('songsname')[0].innerText=songs[i].songsname;
})


//   audioElement.play();
//handle play/pause button
masterplay.addEventListener('click', ()=>{
       if (audioElement.pause||audioElement.currentTime<=0){
           audioElement.play();
           masterplay.classList.remove('fa-play-circle');
           masterplay.classList.add('fa-pause-circle');
           gif.style.opacity=1;
       }
       else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
       }
})
   


  //listening to events
  audioElement.addEventListener('timeupdate',()=>{
     //seekbar update
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
         myProgressBar.value=progress;
  })

myProgressBar.addEventListener('change',()=> {
   audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

