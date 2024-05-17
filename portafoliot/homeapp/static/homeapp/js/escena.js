// miapp/static/miapp/js/escena.js

// Configurar el escenario
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear elementos holográficos
var geometry = new THREE.BoxGeometry(2,2,2); // Cambia la geometría a un cuadrado simple
var texture = new THREE.TextureLoader().load('/static/homeapp/img/2.png'); // Carga la textura de la imagen desde los archivos estáticos de Django
var material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.7 }); 
var button = new THREE.Mesh(geometry, material);
scene.add(button);

// Posicionar elementos holográficos
button.position.z = -5;

// Renderizar
function animate() {
    requestAnimationFrame(animate);
    button.rotation.x += 0.01;
    button.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Mostrar "Loading..." con animación de aparición gradual de letras
var loadingText = document.getElementById('loading');
var textContent = loadingText.textContent;
loadingText.textContent = '';
var index = 0;
function showLoadingText() {
    if (index < textContent.length) {
        loadingText.textContent += textContent.charAt(index);
        index++;
        setTimeout(showLoadingText, 400); // Ajusta el tiempo de espera entre letras
    }
}
showLoadingText();
