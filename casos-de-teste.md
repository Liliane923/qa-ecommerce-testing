# Plano de Testes e Cenários em BDD (Gherkin)

## 1. Módulo: Cupom de Desconto

### Cenário 1: Aplicação com sucesso de cupom válido
* **Dado** que o usuário possui o produto "Tênis Esportivo" no valor de R$ 200,00 no carrinho
* **Quando** digita o cupom "DESC10" no campo "Cupom de Desconto"
* **E** clica no botão "Aplicar"
* **Então** o sistema deve aplicar 10% de desconto no valor total da compra (R$ 20,00)
* **E** exibir a mensagem "Cupom aplicado com sucesso!"
* **E** atualizar o valor total do carrinho para R$ 180,00.

---

### Cenário 2: Tentativa de aplicação de cupom expirado
* **Dado** que o usuário possui produtos no carrinho
* **Quando** insere o cupom "EXPIRADO2023"
* **E** clica em "Aplicar"
* **Então** o sistema deve manter o valor original do carrinho
* **E** exibir a mensagem de alerta "Este cupom expirou e não é mais válido."

---

## 2. Módulo: Cálculo de Frete

### Cenário 3: Cálculo de frete para CEP inválido
* **Dado** que o usuário está na etapa de cálculo de frete
* **Quando** preenche o CEP com "00000-000"
* **E** clica em "Calcular Frete"
* **Então** o sistema deve exibir a mensagem "CEP não encontrado. Verifique o número digitado."
* **E** desabilitar o botão de avanço para o pagamento.