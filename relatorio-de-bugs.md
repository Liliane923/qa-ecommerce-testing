# Relatório de Bugs Encontrados

## [BUG-001] Desconto acumulativo indevido ao clicar repetidamente em "Aplicar Cupom"

- **ID:** BUG-001
- **Severidade:** Alta
- **Prioridade:** Alta
- **Ambiente:** Homologação / Web Desktop

### Descrição
Ao aplicar um cupom válido (ex: `PRIMEIRACOMPRA` de 15%) e clicar repetidamente no botão "Aplicar" antes do recarregamento da página, a aplicação recalcula o desconto sobre o valor já reduzido, gerando valor incorreto ou negativo no carrinho.

### Passos para Reproduzir
1. Adicionar qualquer produto ao carrinho.
2. Digitar o cupom `PRIMEIRACOMPRA`.
3. Clicar rapidamente 4 a 5 vezes consecutivas no botão "Aplicar".

### Comportamento Esperado
O cupom deve ser aplicado uma única vez e o botão "Aplicar" deve ser desabilitado enquanto a requisição é processada.

### Comportamento Obtido
O desconto é recalculado em loop, zerando ou negativando o total da compra.