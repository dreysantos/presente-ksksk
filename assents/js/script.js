function aceitou() {
    document.getElementById("card").innerHTML = `
        <h1>💙 EU SABIAAA 💙</h1>
        <p>
            Agora é oficial!  
            Você é minha pessoa favorita no mundo 🌍💙
        </p>
        <h1>Te amo! 💍💙</h1>
    `;
    criarCoracoes();
}

function fugir(botao) {
    const x = Math.random() * (window.innerWidth - botao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botao.offsetHeight);
    botao.style.position = "absolute";
    botao.style.left = x + "px";
    botao.style.top = y + "px";
}

function criarCoracoes() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💙";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }, 200);
}

/* Dark Mode */
function toggleTheme() {
    document.body.classList.toggle("dark");
}