//добавление класса с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorOrigin);
}
//удаление класса с ошибкой
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorOrigin);
    errorElement.textContent = '';
}
//проверка валидности поля
const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid){
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
        hideInputError(formElement, inputElement);
    }
}

//слушатель живой проверки валидации
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputElement));
    const submitButtonSelector = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(inputList, submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () =>{
            isValid(formElement, inputElement);

            toggleButtonState(inputList, submitButtonSelector);
        })
    })
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

//переключение кнопки
const toggleButtonState = (inputList, submitButtonSelector) => {
    if (hasInvalidInput(inputList)) {
        submitButtonSelector.classList.add(config.inactiveButtonClass);
        submitButtonSelector.disabled = 'true';
    }
    else
    {
        submitButtonSelector.classList.remove(config.inactiveButtonClass);
        submitButtonSelector.disabled = '';
    }
}

const enableValidation = (config) => {
     const formList = Array.from(document.querySelectorAll(config.formElement));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault;
        });
        setEventListeners(formElement);
    })
}

const config = ({
    formElement: '.popup__form',
    inputElement: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    errorOrigin: 'popup__input-error_active'
});

enableValidation(config);