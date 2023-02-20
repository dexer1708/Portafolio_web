window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish')
});

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("Ilustrator");
        habilidades[4].classList.add("Figma");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//const $form = document.querySelector('form')
    //const $buttonMailto = document.querySelector('trucazo')

    //$form.addEventListener('submit', handleSubmit)

    //function handleSubmit(event) {
      //event.preventDefault()
      //const form = new FormData(this)
      //$buttonMailto.setAttribute('href', `mailto:dexer1708@gmail.com?subject=nombre ${form.get('nombre')} correo ${form.get('email')}&body=${form.get('textarea')}`)
      //$buttonMailto.click()
    //}
