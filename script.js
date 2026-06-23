/* =========================
SHACAU AI V7 PREMIUM ELITE
========================= */

/* MENU */
function abrirAba(id) {
document.querySelectorAll(".aba").forEach(sec => {
sec.classList.add("hidden");
});

document.getElementById(id).classList.remove("hidden");
}

/* =========================
CONFIGURAÇÕES
========================= */

function salvarConfig() {

// FIX: corrigido erro de sintaxe (isso estava quebrando o código)
const apiKeyInput = document.getElementById("apiKey");
const apiKey = apiKeyInput.value;

const modelo = document.getElementById("modelo").value;

if (!apiKey) {
alert(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);
return;
}

localStorage.setItem("openrouter_api", apiKey);
localStorage.setItem("modelo_ia", modelo);

alert("Configurações salvas!");
}

/* =========================
CONTADORES
========================= */

let totalAnalises = 0;
let totalBilhetes = 0;

/* =========================
FUTEBOL IA
========================= */

async function analisarFutebol() {

const jogo = document.getElementById("jogo").value;

if (!jogo) {
alert("Digite uma partida");
return;
}

const apiKey = localStorage.getItem("openrouter_api");
const modelo = localStorage.getItem("modelo_ia");

if (!apiKey) {
alert("Cadastre sua API");
abrirAba("config");
return;
}

document.getElementById("resultadoFutebol").innerHTML =
"⏳ Analisando partida...";

try {

const response = await fetch(
"https://openrouter.ai/api/v1/chat/completions",
{
method: "POST",
headers: {
"Authorization": "Bearer " + apiKey,
"Content-Type": "application/json"
},

body: JSON.stringify({
model: modelo,
messages: [
{
role: "system",
content: `
Você é um analista esportivo profissional de futebol.

Analise o jogo e traga:

Over 1.5 / 2.5 / 3.5

Ambas Marcam

Escanteios

Cartões

Finalizações no gol

Bilhete seguro, moderado e agressivo

Grau de confiança (0-10)
`
},
{
role: "user",
content: jogo
}
]
})
}
);


const data = await response.json();

const resposta =
data?.choices?.[0]?.message?.content ||
"Sem resposta da IA";

document.getElementById("resultadoFutebol").innerHTML =
resposta;

totalAnalises++;
document.getElementById("totalAnalises").innerText = totalAnalises;

} catch (error) {
console.error(error);
document.getElementById("resultadoFutebol").innerHTML =
"❌ Erro ao consultar a IA";
}
}

/* =========================
NBA
========================= */

function analisarNBA() {

const jogo = document.getElementById("jogoNBA").value;

if (!jogo) {
alert("Digite um jogo NBA");
return;
}

document.getElementById("resultadoNBA").innerHTML = `
🏀 ${jogo}

• Total de pontos
• Handicap
• Rebotes
• Assistências
• Duplo-Duplo
• Triplo-Duplo

⭐ Confiança 8/10
`;

totalAnalises++;
document.getElementById("totalAnalises").innerText = totalAnalises;
}

/* =========================
PRINT
========================= */

const imagemInput = document.getElementById("imagem");

if (imagemInput) {
imagemInput.addEventListener("change", function () {

const arquivo = this.files[0];
if (!arquivo) return;

const reader = new FileReader();

reader.onload = function (e) {
const preview = document.getElementById("preview");
preview.src = e.target.result;
preview.style.display = "block";
};

reader.readAsDataURL(arquivo);

});
}

function analisarPrint() {
document.getElementById("resultadoPrint").innerHTML =
`📸 Imagem carregada

⚠️ Módulo de IA de imagem será adicionado na V8`;
}

/* =========================
BILHETES
========================= */

function atualizarBilhetes() {
totalBilhetes++;
document.getElementById("totalBilhetes").innerText = totalBilhetes;
}

function bilheteSeguro() {
atualizarBilhetes();

document.getElementById("resultadoBilhete").innerHTML = `
🛡 BILHETE SEGURO

• Over 1.5 Gols
• Over 7.5 Escanteios
• Over 2.5 Cartões

⭐ Confiança 8.5/10
`;
}

function bilheteModerado() {
atualizarBilhetes();

document.getElementById("resultadoBilhete").innerHTML = `
⚡ BILHETE MODERADO

• Over 2.5 Gols
• Ambas Marcam
• Over 8.5 Escanteios

⭐ Confiança 7.5/10
`;
}

function bilheteAgressivo() {
atualizarBilhetes();

document.getElementById("resultadoBilhete").innerHTML = `
🔥 BILHETE AGRESSIVO

• Over 3.5 Gols
• Ambas Marcam
• Over 9.5 Escanteios

⭐ Confiança 6.5/10
`;
}

function bilhetePremium() {
atualizarBilhetes();

document.getElementById("resultadoBilhete").innerHTML = `
👑 BILHETE PREMIUM

• Over 2.5 Gols
• Ambas Marcam
• Over 8.5 Escanteios
• Over 3.5 Cartões

⭐ Confiança 8.8/10
`;
}

function bilheteElite() {
atualizarBilhetes();

document.getElementById("resultadoBilhete").innerHTML = `
💎 BILHETE ELITE

• Over 2.5 Gols
• Ambas Marcam
• Over 9.5 Escanteios
• Over 4.5 Cartões
• Finalização no Gol

⭐ Confiança 9.0/10
`;
}

/* =========================
BANCA
========================= */

function calcularStake() {

const banca = parseFloat(
document.getElementById("bancaValor").value
);

if (isNaN(banca)) {
alert("Digite uma banca válida");
return;
}

document.getElementById("resultadoBanca").innerHTML = `
💰 Banca: R$ ${banca.toFixed(2)}

1% = R$ ${(banca * 0.01).toFixed(2)}
2% = R$ ${(banca * 0.02).toFixed(2)}
3% = R$ ${(banca * 0.03).toFixed(2)}
5% = R$ ${(banca * 0.05).toFixed(2)}
10% = R$ ${(banca * 0.10).toFixed(2)}

📈 Recomendação: 2% por entrada
`;
}

/* =========================
INIT
========================= */

window.onload = () => {

const modeloSalvo = localStorage.getItem("modelo_ia");

if (modeloSalvo && document.getElementById("modelo")) {
document.getElementById("modelo").value = modeloSalvo;
}

};
