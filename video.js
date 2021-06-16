// faz o vídeo desaparecer de leve assim que terminar
const TEMPO = 4800;  // 11s, duração do vídeo
setTimeout(() => {
  // faz o vídeo desaparecer colocando a classe .desaparecido
  document.querySelector('.backdrop').classList.add('desaparecido');
  // faz o conteúdo principal surgir, retirando a classe .desaparecido
  document.querySelector('main').classList.remove('desaparecido');
}, TEMPO);


// no clique do botão #unmute, tira o atributo muted to video
document.querySelector('#unmute').addEventListener('click', e => {
  document.querySelector('.backdrop video').muted = false;
  e.currentTarget.classList.add('desaparecido');
});