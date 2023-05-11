window.addEventListener( "load", function (){
    const song = document.querySelector( "#song" );
    const prevButton = document.querySelector( ".player-prev" );
    const nextButton = document.querySelector( ".player-next" );
    const playButton = document.querySelector( ".player-play" );
    const durationTime = document.querySelector( ".player-duration" );
    const remaining = document.querySelector( ".player-remaining" );
    const progressBar = document.querySelector( "#progress-bar" );
    const image = document.querySelector( ".player-image" );
    const progressRange = document.querySelector( ".progress-range" );
    const list = [ "holo.mp3", "home.mp3", "spark.mp3", "summer.mp3" ];
    let index = 0;
    let playing = true;

    playButton.addEventListener("click",function(event){
        handleMusicPlay()
    } )
    
    prevButton.addEventListener("click",function(){
        handleChangeMusic(-1);
    } )
    
    nextButton.addEventListener("click",function(){
        handleChangeMusic(1);
    } )
    
    song.addEventListener("ended",function(){
        handleChangeMusic(1)
    } )
    
    progressBar.addEventListener("change",function(){
        song.currentTime = progressBar.value;
    } )
    
    handleRangeProgressBar();
    setInterval( handleRangeProgressBar, 500 );
    function formatTimer(timer){
        const minutes = parseInt(timer / 60);
        const seconds = parseInt(timer % 60);
        return `${minutes}:${seconds <10 ? `0${seconds}`:`${seconds}`}`
    }
    function handleRangeProgressBar(){
        const { duration, currentTime } = song;
        progressBar.max = duration;
        progressBar.value = currentTime;
        progressRange.style = `width:${(currentTime/duration)*progressBar.offsetWidth}px`
        durationTime.textContent = formatTimer( duration );
        remaining.textContent = formatTimer(duration-currentTime );
    }

    function handleChangeMusic(direction){
        if(direction===1){
            index = ( index + 1 ) % list.length;
            song.setAttribute( "src", `./files/${ list[ index ] }` );
            playing = true;
            handleMusicPlay();
        }else{
            index--;
            if(index<0){
                index = list.length - 1;
            }
            song.setAttribute("src", `./files/${list[index]}`)
            playing = true
            handleMusicPlay()
        }
    }

    function handleMusicPlay(){
        if(playing){
            song.play();
            image.classList.add( "is-playing" );
            playButton.classList.add( "fa-pause" );
            playing = false;
        } else{
            song.pause();
            image.classList.remove( "is-playing" );
            playButton.classList.remove( "fa-pause" );
            playing = true;
        }
    }
})