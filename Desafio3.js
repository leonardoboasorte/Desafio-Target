const fs = require('fs');  // Módulo para manipulação de arquivos

// Função para ler o arquivo JSON
function lerArquivoJSON(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

function calcularFaturamento(faturamento) {
    // Filtrar apenas os dias com faturamento maior que 0
    const faturamentoValido = faturamento.filter(item => item.valor > 0);
    
    // Menor valor de faturamento
    const menorFaturamento = Math.min(...faturamentoValido.map(item => item.valor));
    
    // Maior valor de faturamento
    const maiorFaturamento = Math.max(...faturamentoValido.map(item => item.valor));
    
    // Média de faturamento mensal
    const somaFaturamento = faturamentoValido.reduce((acc, item) => acc + item.valor, 0);
    const mediaFaturamento = somaFaturamento / faturamentoValido.length;
    
    // Número de dias com faturamento acima da média
    const diasAcimaMedia = faturamentoValido.filter(item => item.valor > mediaFaturamento).length;
    
    console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
}

// Caminho do arquivo JSON (ajuste conforme necessário)
const caminhoArquivo = './dados.json';

// Ler o arquivo JSON e executar o cálculo
lerArquivoJSON(caminhoArquivo)
    .then(faturamento => {
        calcularFaturamento(faturamento);
    })
    .catch(err => {
        console.error('Erro ao ler o arquivo:', err);
    });
