Vue.component('navbar-item', {
    template: `<ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="discografia.html">Discografia</a></li>
                    <li><a href="videos.html">Vídeos</a></li>
                    <li><a href="sobre.html">Sobre nós</a></li>
                    <li><a href="agenda.html">Agenda</a></li>
                    <li><a href="contato.html">Contato</a></li>
               </ul>
                `
  })
Vue.component('redes-item',{
    template: `
                <div class="redes">
                    <a href="https://open.spotify.com/artist/7eF965AyVu2dhte59lKT1g?si=p8TwA3UVRs6m0yrwqMErcw" target="_blank"><i class="fab fa-spotify"></i></a>
                    <a href="https://www.instagram.com/pausaprocafee/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCTWY1gzhBRoKTrtlBM_kwPw" target="_blank"><i class="fab fa-youtube"></i></a>                    
                </div>
    
              `
})
Vue.component('footer-item',{
    template: `
                <footer>
                        <div class="container">
                            <div class="center">
                                <small>Contato:pausaprocafee@gmail.com</small>
                                <small>Desenvolvido por Pedro Oliveira</small>
                            </div>
                        </div>
                    </footer>

               `
})

Vue.component('video-item',{
    template: `                    
                <div class="video-item">
                    <slot name="video"></slot>
                    <slot name="titulo"></slot>
                </div>
              `
})

let vm = new Vue({
    el: '#app',
    data: {
        title: 'teste'
    }
})