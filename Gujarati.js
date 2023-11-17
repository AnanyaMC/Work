const songData = [
            {name:"Chelaji re",  source:"Chelaji re.mp3" ,image:"Chelaji re.jpg"},
            {name:"Chogada tara",  source:"Chogada tara.mp3" ,image:"Chogada tara.jpg"},
           {name:"He mune ekline", source:"He mune ekline.mp3" ,image:"He mune ekline.jpg"},
            {name:"Tara veena shyam", source:"Tara veena shyam.mp3" ,image:"Tara veena shyam.jpg"},
            
            // Add more song data here...
        ];
        
  const audioPlayer = document.getElementById('audio-player');
        const songListContainer = document.getElementById('song-list');
        

        // Function to create and append a song element
        function createSongElement(song) {
            const songElement = document.createElement('div');
            songElement.classList.add('song');
            songElement.textContent = song.name;

            songElement.addEventListener('click', () => {
                audioPlayer.src = song.source;
                audioPlayer.play();
            });

            return songElement;
        }

        // Populate the song list
        songData.forEach((song, index) => {
            const songElement = createSongElement(song);
            songListContainer.appendChild(songElement);
        });


const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentSongIndex = 0;

// Function to play the next song
function playNextSong() {
    if (currentSongIndex < songData.length - 1) {
        currentSongIndex++;
        playCurrentSong();
    }
}

// Function to play the previous song
function playPrevSong() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
        playCurrentSong();
    }
}

// Function to play the current song
function playCurrentSong() {
    const song = songData[currentSongIndex];
    audioPlayer.src = song.source;
    audioPlayer.play();
}

// Add event listeners to the next and previous buttons
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);

// Play the first song when the page loads
playCurrentSong();

const songElements = document.querySelectorAll('.song');
const musicPopup = document.getElementById('music-popup');
const closePopupButton = document.getElementById('closePopupButton');

songElements.forEach((songElement) => {
    songElement.addEventListener('click', () => {
        musicPopup.style.display = 'flex'; // Show the popup
    });
});

closePopupButton.addEventListener('click', () => {
    musicPopup.style.display = 'none'; // Hide the popup when the close button is clicked
});


// Function to update the album art
function updateAlbumArt(imageSource) {
    const albumArt = document.getElementById('album-art');
    albumArt.src = imageSource;
}

// Function to play a song and update the album art
function playSongAndUpdateAlbumArt(song) {
    audioPlayer.src = song.source;
    audioPlayer.play();
    updateAlbumArt(song.image);
}

// Update the album art when a song is clicked
songElements.forEach((songElement, index) => {
    songElement.addEventListener('click', () => {
        const song = songData[index];
        playSongAndUpdateAlbumArt(song);
        musicPopup.style.display = 'flex'; // Show the popup
    });
});

// Update the album art when the next button is clicked
nextButton.addEventListener('click', () => {
    if (currentSongIndex < songData.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0; // Loop back to the first song if at the end
    }
    const song = songData[currentSongIndex];
    playSongAndUpdateAlbumArt(song);
});

// Update the album art when the previous button is clicked
prevButton.addEventListener('click', () => {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = songData.length - 1; // Loop to the last song if at the beginning
    }
    const song = songData[currentSongIndex];
    playSongAndUpdateAlbumArt(song);
});

// Play the first song and update the album art when the page loads
playSongAndUpdateAlbumArt(songData[currentSongIndex]);



