const playButton = document.getElementById("play-button");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const songNameElement = document.getElementById("song-name").getElementsByTagName("h5")[0];
const songCoverElement = document.getElementById("song-name").getElementsByTagName("img")[0];
const audio = new Audio(); // Create an audio element

let songs = [
    {songName : "Rema, Selena Gomez - Calm Down (Official Music Video)" ,
     filePath : "./assets/songs and covers/calm down/Calm-Down-Calm-Down_320(PaglaSongs).mp3" ,
     coverPath : "./assets/songs and covers/calm down/Calm Down .jpg" } ,

     {songName : "David Kushner - Daylight (Official Music Video)" ,
     filePath : "./assets/songs and covers/daylight/Daylight-David-Kushner(pagalworld.co.uk).mp3" ,
     coverPath : "./assets/songs and covers/daylight/daylight.jpg" } ,

     {songName : "Coolio - Gangsta's Paradise (feat. L.V.) [Official Music Video]" ,
     filePath : "./assets/songs and covers/gangsta paradise/gangsta-paradise-djlunatique.com.mp3" ,
     coverPath : "./assets/songs and covers/gangsta paradise/gangsta paradise.jpg" } ,

     {songName : "Maroon 5 - Girls Like You ft. Cardi B (Official Music Video)" ,
     filePath : "./assets/songs and covers/girls like you/Maroon 5 - Girls Like You ft. Cardi B (Official Music Video).mp3" ,
     coverPath : "./assets/songs and covers/girls like you/girls like you.jpg" } ,

     {songName : "KALEO - Way Down We Go (Official Music Video)" ,
     filePath : "./assets/songs and covers/kaleo way down we go/KALEO - Way Down We Go (Lyrics).mp3" ,
     coverPath : "./assets/songs and covers/kaleo way down we go/kaleo way down we go.jpg" } ,

     {songName : "Martin Garrix & Dua Lipa - Scared To Be Lonely (Official Video)" ,
     filePath : "./assets/songs and covers/scared to be lonely/Martin Garrix & Dua Lipa - Scared To Be Lonely (Official Video).mp3" ,
     coverPath : "./assets/songs and covers/scared to be lonely/scared to be lonely.jpg" } ,

     {songName : "Gym Class Heroes: Stereo Hearts ft. Adam Levine [OFFICIAL VIDEO]" ,
     filePath : "./assets/songs and covers/stereo heart/Gym Class Heroes Stereo Hearts ft. Adam Levine [OFFICIAL VIDEO].mp3" ,
     coverPath : "./assets/songs and covers/stereo heart/stereo heart.jpg" } ,

     {songName : "Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez) [Official Video]" ,
     filePath : "./assets/songs and covers/we dont talk anymore/Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez) [Official Video].mp3" ,
     coverPath : "./assets/songs and covers/we dont talk anymore/we dont talk anymore.jpg" }
]


let currentSongIndex = 0;

// Function to load and play a song
function playSong(index) {
  if (index < 0) {
    currentSongIndex = songs.length - 1;
  } else if (index >= songs.length) {
    currentSongIndex = 0;
  }
  audio.src = songs[currentSongIndex].filePath;
  songNameElement.textContent = songs[currentSongIndex].songName;
  songCoverElement.src = songs[currentSongIndex].coverPath;
  audio.play();
}

// Play button click event
playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.src = "./assets/pause.svg"; // Change the play button to a pause button
  } else {
    audio.pause();
    playButton.src = "./assets/play.svg"; // Change the pause button to a play button
  }
});

// Next button click event
nextButton.addEventListener("click", () => {
  currentSongIndex++;
  playSong(currentSongIndex);
  playButton.src = "./assets/pause.svg"; // Change to pause button when next song starts
});

// Previous button click event
previousButton.addEventListener("click", () => {
  currentSongIndex--;
  playSong(currentSongIndex);
  playButton.src = "./assets/pause.svg"; // Change to pause button when previous song starts
});

// Event listener to update the play button when the song ends
audio.addEventListener("ended", () => {
  playButton.src = "./assets/play.svg"; // Change to play button when song ends
  currentSongIndex++;
  playSong(currentSongIndex);
});

// Initial play
playSong(currentSongIndex);

const lengthSlider = document.getElementById("length");

// Event listener for the input range (slider)
lengthSlider.addEventListener("input", () => {
  const time = (lengthSlider.value / 100) * audio.duration;
  audio.currentTime = time;
});

// Update the slider as the song plays
audio.addEventListener("timeupdate", () => {
  const currentTime = (audio.currentTime / audio.duration) * 100;
  lengthSlider.value = currentTime;
});

// Event listener to handle seeking when the user clicks on the slider
lengthSlider.addEventListener("mousedown", () => {
  audio.pause();
});

lengthSlider.addEventListener("mouseup", () => {
  const time = (lengthSlider.value / 100) * audio.duration;
  audio.currentTime = time;
  audio.play();
});
const songElements = document.querySelectorAll('.song-info');

// Event listener for each song to play when clicked
songElements.forEach((song, index) => {
  song.addEventListener('click', () => {
    currentSongIndex = index;
    playSong(currentSongIndex);
    playButton.src = './assets/pause.svg'; // Change to pause button when a new song starts
  });
});

