(function(){
    // megkeresem a szükséges elemeket
    const clock = document.querySelector('.clock');
    const playBtn = document.querySelector('.start')
    const pauseBtn = document.querySelector('.pause')
    const stopBtn = document.querySelector('.stop')

    // gyorsabb lenne
    const btnGroup = document.querySelector('.btn-group')
    // és onnan már nem kell az egész doksi, hanem csak a gtn group
    // const play = btnGroup.querySelector('.start')

    let isTiming = false;
    let currentTime = 0;
     playBtn.addEventListener('click', () => isTiming = true );
     pauseBtn.addEventListener('click', () => isTiming = false );
     stopBtn.addEventListener('click', () => currentTime = 0);
    
    //  idő megjelenítése
    setInterval( () => {
        if (!isTiming) {
            
        }
    }



    )
}

)