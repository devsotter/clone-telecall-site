
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('passconfirmation');
const errorParagraph = document.getElementById('password-match-error');
const successParagraph = document.getElementById('success-message');
const submitButton = document.getElementById('btn-submit');

function validarSenhas() {
  if (passwordInput.value !== confirmInput.value) {
    errorParagraph.textContent = 'As senhas não coincidem';
    successParagraph.textContent = '';
    submitButton.disabled = true;
  } else {
    errorParagraph.textContent = '';
    successParagraph.textContent = 'Parabéns, que Deus te abençoe!';
    submitButton.disabled = false;
  }
}

function redirecionar() {
  if (!submitButton.disabled) {
    window.location.href = 'https://classic.yarnpkg.com/en/docs/cli/run';
  }
}

confirmInput.addEventListener('input', validarSenhas);
submitButton.addEventListener('click', redirecionar);


// Definição da classe de validação
class FormValidator {
  // Método para exibir inputs que são necessários
  required(input) {
    let inputValue = input.value;

    if (inputValue === '') {
      let errorMessage = `Este campo é obrigatório`;

      this.printMessage(input, errorMessage);
    }
  }

  // Método para exibir mensagens de erro
  printMessage(input, message) {
    let errorElement = document.createElement('p');
    errorElement.classList.add('error-validation');
    errorElement.innerText = message;

    let container = input.parentNode;
    container.appendChild(errorElement);
  }
}

// Instanciando a classe FormValidator
const formValidator = new FormValidator();

// Evento de envio do formulário
const form = document.getElementById('register-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Lógica de validação para cada campo do formulário
  const emailInput = document.getElementById('email');
  formValidator.required(emailInput);

  const nameInput = document.getElementById('name');
  formValidator.required(nameInput);

  const lastnameInput = document.getElementById('lastname');
  formValidator.required(lastnameInput);

  const celularInput = document.getElementById('celular');
  formValidator.celularFormato(celularInput);

  const fixoInput = document.getElementById('fixo');
  formValidator.fixoFormato(fixoInput);

  // Se todas as validações passarem, você pode enviar o formulário
  if (form.checkValidity()) {
    form.submit();
  }
});

