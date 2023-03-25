fetch("./dados.json")
    .then((response) => response.json())
    .then((data) => {
        const faturamentoDiario = data.map((item) => item.valor);

        const menorFaturamento = Math.min(...faturamentoDiario);
        console.log(`Menor valor de faturamento diário: ${menorFaturamento}`);

        const maiorFaturamento = Math.max(...faturamentoDiario);
        console.log(`Maior valor de faturamento diário: ${maiorFaturamento}`);

        const mediaFaturamentoMensal =
            faturamentoDiario.reduce((total, valor) => total + valor) /
            faturamentoDiario.length;

        let diasAcimaDaMedia = 0;
        for (let i = 0; i < faturamentoDiario.length; i++) {
            if (faturamentoDiario[i] > mediaFaturamentoMensal) {
                diasAcimaDaMedia++;
            }
        }
        console.log(`Dias com faturamento diário acima da média mensal: ${diasAcimaDaMedia}`);
    })
    .catch((error) => console.error(error));