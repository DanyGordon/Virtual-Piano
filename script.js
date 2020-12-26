(function () {
  window.initPiano = () => {
    document.addEventListener('keydown', (event) => {
      if(event.code == 'KeyA' ||
      event.code == 'KeyW' ||
      event.code == 'KeyS' ||
      event.code == 'KeyE' ||
      event.code == 'KeyD' ||
      event.code == 'KeyF' ||
      event.code == 'KeyT' ||
      event.code == 'KeyG' ||
      event.code == 'KeyY' ||
      event.code == 'KeyH' ||
      event.code == 'KeyU' ||
      event.code == 'KeyJ'
      ) {
        let audio = new Audio();
        audio.src = `./keys/${event.code.slice(3)}.mp3`;
        audio.play()
          .then(_ => {})
          .catch((error) => {
            console.log(error);
          })
      }
    })
  }
  window.initPiano();

}());
