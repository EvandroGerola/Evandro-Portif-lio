// NAVBAR muda ao rolar
window.addEventListener("scroll", () => {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// EFEITO DE DIGITAÇÃO
const text = "Evandro Gerola";
let index = 0;
function typing() {
    if(index < text.length){
        document.querySelector(".typing").textContent += text.charAt(index);
        index++;
        setTimeout(typing, 100);
    }
}
typing();

// SCROLL REVEAL
const handleReveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
};

// Executa ao rolar e AO CARREGAR a página
window.addEventListener("scroll", handleReveal);
window.addEventListener("DOMContentLoaded", handleReveal);

// EFEITO RIPPLE
document.querySelectorAll(".ripple").forEach(button => {
    button.addEventListener("click", function(e){
        const circle = document.createElement("span");
        circle.style.left = e.offsetX + "px";
        circle.style.top = e.offsetY + "px";
        circle.classList.add("ripple-effect");
        this.appendChild(circle);
        setTimeout(()=> circle.remove(), 600);
    });
});
// ANIMAR BARRAS DE HABILIDADE
window.addEventListener("scroll", () => {
    document.querySelectorAll(".progress").forEach(bar => {
        const position = bar.getBoundingClientRect().top;
        if(position < window.innerHeight - 50){
            bar.style.width = bar.dataset.width;
        }
    });
});
// EFEITO TILT 3D
document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});
// VALIDAÇÃO DO FORMULÁRIO
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();

        let valid = true;

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");
        const success = document.querySelector(".success-message");

        document.querySelectorAll(".error").forEach(e => e.textContent = "");
        success.textContent = "";

        if(nome.value.trim().length < 3){
            nome.nextElementSibling.nextElementSibling.textContent = "Nome deve ter no mínimo 3 caracteres.";
            valid = false;
        }

        if(!email.value.includes("@") || !email.value.includes(".")){
            email.nextElementSibling.nextElementSibling.textContent = "Email inválido.";
            valid = false;
        }

        if(mensagem.value.trim().length < 10){
            mensagem.nextElementSibling.nextElementSibling.textContent = "Mensagem deve ter no mínimo 10 caracteres.";
            valid = false;
        }

        if(valid){
            success.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        }
    });
}
// DESTACAR LINK ATIVO NA NAVBAR
const activePage = window.location.pathname; // Pega o caminho da URL atual
const navLinks = document.querySelectorAll('.navbar a'); // Seleciona todos os links da nav

navLinks.forEach(link => {
  // Verifica se o href do link está contido no caminho da URL atual
  if (activePage.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});