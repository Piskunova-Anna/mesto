//добавление класса с ошибкой
const showInputError = (formSelector, inputSelector, errorMessage) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.add(enableValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}
//удаление класса с ошибкой
const hideInputError = (formSelector, inputSelector) => {
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`);
    inputSelector.classList.remove(enableValidation.inputErrorClass);
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
}
//проверка валидности поля
const isValid = (formSelector, inputSelector) => {
    if (!inputSelector.validity.valid){
        showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    }
    else {
        hideInputError(formSelector, inputSelector);
    }
}

//слушатель живой проверки валидации
const setEventListeners = (formSelector) => {
    const inputList = Array.from(formSelector.querySelectorAll(enableValidation.inputSelector));
    const submitButtonSelector = formSelector.querySelector(enableValidation.submitButtonSelector);

    toggleButtonState(inputList, submitButtonSelector);
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () =>{
            isValid(formSelector, inputSelector);

            toggleButtonState(inputList, submitButtonSelector);
        })
    })
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    })
}

//переключение кнопки
const toggleButtonState = (inputList, submitButtonSelector) => {
    if (hasInvalidInput(inputList)) {
        submitButtonSelector.classList.add(enableValidation.inactiveButtonClass);
    }
    else
    {
        submitButtonSelector.classList.remove(enableValidation.inactiveButtonClass);
    }
}

const validation = (enableValidation) => {
     const formList = Array.from(document.querySelectorAll(enableValidation.formSelector));

    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault;
        });
        setEventListeners(formSelector);
    })
}

const enableValidation = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

validation(enableValidation);