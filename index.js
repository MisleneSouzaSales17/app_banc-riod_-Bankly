// Lê a linha de entrada do usuário
const entrada = gets();

// TODO: Separe o nome do usuário e o saldo em centavos a partir da entrada
const [nome, saldoCentavosStr] = entrada.split(" ");
const saldoCentavos = parseInt(saldoCentavosStr);

// Converte centavos para reais
const reais = Math.floor(saldoCentavos / 100);
const centavos = saldoCentavos % 100;

// Formata o saldo com duas casas decimais e vírgula
const saldoFormatado = `${reais},${centavos.toString().padStart(2, "0")}`;

// Exibe a mensagem final
print(`Bem-vindo, ${nome}! Seu saldo é R$${saldoFormatado}`);
