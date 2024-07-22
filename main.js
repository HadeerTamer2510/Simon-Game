function Sound(color) {
    const voice = document.getElementById(`${color}-sound`);
   voice.play();
    document.getElementById('text').innerHTML = `LEVEL ${color.toUpperCase()}`;
  }