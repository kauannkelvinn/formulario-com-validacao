const enviar = document.querySelector(".btn")
const mensagensErro = document.querySelectorAll(".incompleto")
const inputs = document.querySelectorAll("input")

enviar.addEventListener("click", function (event) {
    event.preventDefault();

    inputs.forEach((input, index) => {
        const mensagem = mensagensErro[index];

        if (input.value.trim() === "") {
            input.classList.remove("verde");
            input.classList.add("vermelho");

            mensagem.classList.add("vermelho")
        } else {
            input.classList.remove("vermelho");
            input.classList.add("verde");

            mensagem.classList.remove("vermelho");
        }
    });
});



