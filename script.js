// Seleciona os elementos dos formulários.
const form = document.querySelector("form")
const expense = document.getElementById("expense")
const amount = document.getElementById("amount")
const category = document.getElementById("category")

// Captura o evento de input para formatar o valor.
amount.oninput = () => {
    // Obtém o valor atual do input e remove os caracteres não numéricos.
    let value = amount.value.replace(/\D/g, "")

    // Converte o valor para centavos. (Ex. 150/100 = 1.5 que é equivalente a R$ 1,50).
    value = Number(value) / 100

    // Atualiza o valor no input.
    amount.value = formatCurrencyBRL(value)
}

// Formata o valor no padrão BRL (Real Brasileiro).
function formatCurrencyBRL(value){
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    return value
}


form.onsubmit = (event) => {
    event.preventDefault()

    // Cria um objeto com as informações da nova despesa.
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }
    console.log(newExpense)
}