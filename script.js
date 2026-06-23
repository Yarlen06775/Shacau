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

const apiKey =
document.getElementById("apiKey").value.trim();

const modelo =
document.getElementById("modelo").value;

if (!apiKey) {

alert("Cole sua chave da OpenRouter");

return;

}

localStorage.setItem(
"openrouter_api",
apiKey
);

localStorage.setItem(
"modelo_ia",
modelo
);

alert(
"Configurações salvas com sucesso!"
);

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

const jogo =
document.getElementById("jogo").value;

if (!jogo) {

alert("Digite uma partida");

return;

}

const apiKey =
localStorage.getItem(
"openrouter_api"
);

const modelo =
localStorage.getItem(
"modelo_ia"
) || "openai/gpt-4o-mini";

if (!apiKey) {

alert(
"Cadastre sua API"
);

abrirAba("config");

return;

}

document.getElementById(
"resultadoFutebol"
).innerHTML =
"⏳ Analisando partida...";

try {

const response =
await fetch(
"https://openrouter.ai/api/v1/chat/completions",
{
method: "POST",

headers: {

"Authorization":
"Bearer " + apiKey,

"Content-Type":
"application/json"

},

body: JSON.stringify({

model: modelo,

messages: [

{
role: "system",

content: `

Você é o SHACAU ANALYTICS AI V7 PREMIUM ELITE.

Especialista em:

- Futebol Mundial
- Trading Esportivo
- Estatística Avançada
- Probabilidades
- Gestão de Risco
- Mercados Alternativos

Analise qualquer partida de forma profissional.

📊 CONTEXTO

- Competição
- Importância da partida
- Motivação
- Momento das equipes
- Desfalques

📈 ESTATÍSTICAS

- Tendência de gols
- Tendência de escanteios
- Tendência de cartões
- Tendência de finalizações

⚽ GOLS

- Over 0.5
- Over 1.5
- Over 2.5
- Over 3.5
- Over 4.5

Informar:

- Probabilidade
- Risco
- Valor

🎯 AMBAS MARCAM

- Sim
- Não

🚩 ESCANTEIOS

- Over 7.5
- Over 8.5
- Over 9.5
- Over 10.5

🟨 CARTÕES

- Over 2.5
- Over 3.5
- Over 4.5
- Over 5.5

🥅 FINALIZAÇÕES

- Chutes no gol esperados
- Equipe mais ofensiva

💰 TOP 5 MELHORES MERCADOS

🛡 BILHETE SEGURO

⚡ BILHETE MODERADO

🔥 BILHETE AGRESSIVO

👑 BILHETE PREMIUM

⭐ CONFIANÇA

Dar nota de 0 a 10.

Organize tudo em seções bem formatadas.

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

const data =
await response.json();

console.log(
"Resposta OpenRouter:",
data
);

if (!response.ok) {

document.getElementById(
"resultadoFutebol"
).innerHTML =

`❌ Erro da API<br><pre>${JSON.stringify(data, null, 2)}</pre>`;

return;

}

const resposta =

data?.choices?.[0]?.message?.content ||

"Sem resposta da IA";

document.getElementById(
"resultadoFutebol"
).innerHTML =

resposta.replace(/\n/g,"<br>");

totalAnalises++;

document.getElementById(
"totalAnalises"
).innerText =
totalAnalises;

}

catch(error) {

console.error(error);

document.getElementById(
"resultadoFutebol"
).innerHTML =

"❌ Erro ao consultar a IA";
/* =========================
NBA
========================= */

function analisarNBA() {

const jogo =
document.getElementById(
"jogoNBA"
).value;

if (!jogo) {

alert(
"Digite um jogo NBA"
);

return;

}

document.getElementById(
"resultadoNBA"
).innerHTML =

`
🏀 ${jogo}

📊 ANÁLISE NBA

• Total de Pontos
• Handicap
• Rebotes
• Assistências
• Cestas de 3 Pontos
• Duplo-Duplo
• Triplo-Duplo

⭐ Confiança: 8/10
`;

totalAnalises++;

document.getElementById(
"totalAnalises"
).innerText =
totalAnalises;

}

/* =========================
UPLOAD DE IMAGEM
========================= */

const imagemInput =
document.getElementById(
"imagem"
);

if (imagemInput) {

imagemInput.addEventListener(
"change",

function () {

const arquivo =
this.files[0];

if (!arquivo) return;

const reader =
new FileReader();

reader.onload =
function (e) {

const preview =
document.getElementById(
"preview"
);

preview.src =
e.target.result;

preview.style.display =
"block";

};

reader.readAsDataURL(
arquivo
);

}

);

}

function analisarPrint() {

document.getElementById(
"resultadoPrint"
).innerHTML =

`
📸 IMAGEM CARREGADA

✅ Preview gerado com sucesso.

⚠️ Em futuras versões será possível:

• Ler bilhetes automaticamente
• Extrair odds
• Calcular EV+
• Identificar apostas de valor
• Montar proteção automática
`;

}

/* =========================
BILHETES
========================= */

function atualizarBilhetes() {

totalBilhetes++;

document.getElementById(
"totalBilhetes"
).innerText =
totalBilhetes;

}

function bilheteSeguro() {

atualizarBilhetes();

document.getElementById(
"resultadoBilhete"
).innerHTML =

`
🛡 BILHETE SEGURO

• Over 1.5 Gols

• Over 7.5 Escanteios

• Over 2.5 Cartões

⭐ Confiança: 8.5/10
`;

}

function bilheteModerado() {

atualizarBilhetes();

document.getElementById(
"resultadoBilhete"
).innerHTML =

`
⚡ BILHETE MODERADO

• Over 2.5 Gols

• Ambas Marcam

• Over 8.5 Escanteios

⭐ Confiança: 7.5/10
`;

}

function bilheteAgressivo() {

atualizarBilhetes();

document.getElementById(
"resultadoBilhete"
).innerHTML =

`
🔥 BILHETE AGRESSIVO

• Over 3.5 Gols

• Ambas Marcam

• Over 9.5 Escanteios

⭐ Confiança: 6.5/10
`;

}

function bilhetePremium() {

atualizarBilhetes();

document.getElementById(
"resultadoBilhete"
).innerHTML =

`
👑 BILHETE PREMIUM

• Over 2.5 Gols

• Ambas Marcam

• Over 8.5 Escanteios

• Over 3.5 Cartões

⭐ Confiança: 8.8/10
`;

}

function bilheteElite() {

atualizarBilhetes();

document.getElementById(
"resultadoBilhete"
).innerHTML =

`
💎 BILHETE ELITE

• Over 2.5 Gols

• Ambas Marcam

• Over 9.5 Escanteios

• Over 4.5 Cartões

• Finalização no Alvo

⭐ Confiança: 9.0/10
`;

}

/* =========================
GESTÃO DE BANCA
========================= */

function calcularStake() {

const banca =
parseFloat(

document.getElementById(
"bancaValor"
).value

);

if (isNaN(banca)) {

alert(
"Digite uma banca válida"
);

return;

}

document.getElementById(
"resultadoBanca"
).innerHTML =

`
💰 Banca: R$ ${banca.toFixed(2)}

<br><br>

1% = R$ ${(banca * 0.01).toFixed(2)}

<br>

2% = R$ ${(banca * 0.02).toFixed(2)}

<br>

3% = R$ ${(banca * 0.03).toFixed(2)}

<br>

5% = R$ ${(banca * 0.05).toFixed(2)}

<br>

10% = R$ ${(banca * 0.10).toFixed(2)}

<br><br>

📈 Gestão recomendada:

2% por entrada.
`;

}

/* =========================
INICIALIZAÇÃO
========================= */

window.onload = () => {

const modeloSalvo =
localStorage.getItem(
"modelo_ia"
);

if (
modeloSalvo &&
document.getElementById(
"modelo"
)
) {

document.getElementById(
"modelo"
).value =
modeloSalvo;

}

const apiSalva =
localStorage.getItem(
"openrouter_api"
);

if (
apiSalva &&
document.getElementById(
"apiKey"
)
) {

document.getElementById(
"apiKey"
).value =
apiSalva;

}

};
}

}
