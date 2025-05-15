const depoimentos = [
  '"Tomaz é um excelente profissional, sempre disposto a ajudar!" – João',
  '"Trabalhar com o Tomaz é sempre uma experiência produtiva e leve." – Maria',
  '"Pontual, organizado e muito focado nos resultados." – Carlos',
  '"Com o Tomaz na equipe, o trabalho flui melhor!" – Ana',
  '"Tomaz é dedicado, aprende rápido e sempre ajuda quem precisa." – Larissa',
  '"Trabalhar com o Tomaz é sinônimo de parceria e confiança." – Felipe',
  '"Sempre calmo, educado e pronto pra resolver qualquer desafio." – Bruna',
  '"Tomaz tem domínio em HTML, CSS e JavaScript. Sempre entrega código limpo." – Lucas',
  '"Ele não só entende de tecnologia, como aplica com criatividade." – Rafael',
  '"Mesmo com pouco tempo, o Tomaz já se destacou pela vontade de aprender." – Michele',
  '"Pontual, confiável e sempre com boa energia." – Carla'
];

let indiceAtual = 0;

function mostrarDepoimento() {
  document.getElementById("mensagem-depoimento").textContent = depoimentos[indiceAtual];
}

function proximoDepoimento() {
  indiceAtual = (indiceAtual + 1) % depoimentos.length;
  mostrarDepoimento();
}

function anteriorDepoimento() {
  indiceAtual = (indiceAtual - 1 + depoimentos.length) % depoimentos.length;
  mostrarDepoimento();
}

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    document.getElementById("mensagem-status").innerText =
        `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    document.getElementById("form-contato").reset();
});

const btnTopo = document.getElementById('btn-topo');
    btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
