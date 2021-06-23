
const configurate = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    errorOrigin: 'popup__input-error_active'
};
//добавление класса с ошибкой
const showInputError = (formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorOrigin);
}
//удаление класса с ошибкой
const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorOrigin);
    errorElement.textContent = '';
}
//проверка валидности поля
const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    }
    else {
        hideInputError(formElement, inputElement, config);
    }
}

//слушатель живой проверки валидации
const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
    const submitButton = document.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, submitButton, config);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () =>{
            isValid(formElement, inputElement, config);

            toggleButtonState(inputList, submitButton, config);
        })
    })
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

//переключение кнопки
const toggleButtonState = (inputList, submitButton, config) => {
    if (hasInvalidInput(inputList)) {
        submitButton.classList.add(config.inactiveButtonClass);
        submitButton.disabled = 'true';
    }
    else
    {
        submitButton.classList.remove(config.inactiveButtonClass);
        submitButton.disabled = '';
    }
}

const enableValidation = (config) => {
     const formList = Array.from(document.querySelectorAll(config.formElement));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault;
        });
        setEventListeners(formElement, config);
    })
}


enableValidation(configurate);