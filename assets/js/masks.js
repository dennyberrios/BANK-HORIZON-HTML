export function applyCurrencyMask(input) {
    // Define o valor inicial como R$ 0,00 se estiver vazio
    if (!input.value) {
        input.value = 'R$ 0,00';
    }

    input.addEventListener('input', (e) => {
        let value = e.target.value;

        // Remove qualquer caractere que não seja número
        value = value.replace(/\D/g, '');

        // Se o valor for vazio, define como 0 (ou seja, R$ 0,00)
        if (value === '') {
            e.target.value = 'R$ 0,00';
            return;
        }

        // Converte o valor para formato numérico e aplica a formatação
        const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
        const formattedValue = (parseFloat(value) / 100).toLocaleString('pt-BR', options);

        // Aplica o prefixo R$ e o valor formatado
        e.target.value = `R$ ${formattedValue}`;
    });

    // Evita que qualquer caractere que não seja número seja digitado
    input.addEventListener('keypress', (e) => {
        const char = String.fromCharCode(e.keyCode);
        if (!/[\d]/.test(char)) {
            e.preventDefault();
        }
    });
}