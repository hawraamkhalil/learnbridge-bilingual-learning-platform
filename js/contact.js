"use strict";

const CONTACT_EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactElements = {};


/**
 * Returns translated Contact-page text.
 *
 * @param {string} key
 * @returns {string}
 */
function translateContactText(key) {
  if (
    window.LearnBridgeI18n &&
    typeof window.LearnBridgeI18n.translate ===
      "function"
  ) {
    return window.LearnBridgeI18n.translate(key);
  }

  return key;
}


/**
 * Displays an error below a field.
 *
 * @param {HTMLElement} field
 * @param {HTMLElement} errorElement
 * @param {string} translationKey
 */
function showContactFieldError(
  field,
  errorElement,
  translationKey
) {
  field.setAttribute(
    "aria-invalid",
    "true"
  );

  errorElement.dataset.errorKey =
    translationKey;

  errorElement.textContent =
    translateContactText(
      translationKey
    );
}


/**
 * Removes an error from one field.
 *
 * @param {HTMLElement} field
 * @param {HTMLElement} errorElement
 */
function clearContactFieldError(
  field,
  errorElement
) {
  field.removeAttribute(
    "aria-invalid"
  );

  errorElement.textContent = "";

  delete errorElement.dataset.errorKey;
}


/**
 * Validates the full-name field.
 *
 * @returns {boolean}
 */
function validateContactName() {
  const value =
    contactElements.name.value.trim();

  if (!value) {
    showContactFieldError(
      contactElements.name,
      contactElements.nameError,
      "contact.errors.nameRequired"
    );

    return false;
  }

  if (value.length < 2) {
    showContactFieldError(
      contactElements.name,
      contactElements.nameError,
      "contact.errors.nameTooShort"
    );

    return false;
  }

  clearContactFieldError(
    contactElements.name,
    contactElements.nameError
  );

  return true;
}


/**
 * Validates the email field.
 *
 * @returns {boolean}
 */
function validateContactEmail() {
  const value =
    contactElements.email.value.trim();

  if (!value) {
    showContactFieldError(
      contactElements.email,
      contactElements.emailError,
      "contact.errors.emailRequired"
    );

    return false;
  }

  if (!CONTACT_EMAIL_PATTERN.test(value)) {
    showContactFieldError(
      contactElements.email,
      contactElements.emailError,
      "contact.errors.emailInvalid"
    );

    return false;
  }

  clearContactFieldError(
    contactElements.email,
    contactElements.emailError
  );

  return true;
}


/**
 * Validates the subject field.
 *
 * @returns {boolean}
 */
function validateContactSubject() {
  const value =
    contactElements.subject.value.trim();

  if (!value) {
    showContactFieldError(
      contactElements.subject,
      contactElements.subjectError,
      "contact.errors.subjectRequired"
    );

    return false;
  }

  if (value.length < 4) {
    showContactFieldError(
      contactElements.subject,
      contactElements.subjectError,
      "contact.errors.subjectTooShort"
    );

    return false;
  }

  clearContactFieldError(
    contactElements.subject,
    contactElements.subjectError
  );

  return true;
}


/**
 * Validates the message field.
 *
 * @returns {boolean}
 */
function validateContactMessage() {
  const value =
    contactElements.message.value.trim();

  if (!value) {
    showContactFieldError(
      contactElements.message,
      contactElements.messageError,
      "contact.errors.messageRequired"
    );

    return false;
  }

  if (value.length < 10) {
    showContactFieldError(
      contactElements.message,
      contactElements.messageError,
      "contact.errors.messageTooShort"
    );

    return false;
  }

  clearContactFieldError(
    contactElements.message,
    contactElements.messageError
  );

  return true;
}


/**
 * Returns the currently selected preferred
 * contact radio button.
 *
 * @returns {HTMLInputElement | null}
 */
function getSelectedContactMethod() {
  return document.querySelector(
    '[name="preferred-contact"]:checked'
  );
}


/**
 * Validates the preferred contact method.
 *
 * @returns {boolean}
 */
function validatePreferredContactMethod() {
  const selectedMethod =
    getSelectedContactMethod();

  const isValid =
    Boolean(selectedMethod);

  contactElements.preferredContactInputs
    .forEach(function (input) {
      input.setAttribute(
        "aria-invalid",
        String(!isValid)
      );
    });

  contactElements.preferredContactGroup
    .classList.toggle(
      "has-error",
      !isValid
    );

  if (!isValid) {
    contactElements.preferredContactError
      .dataset.errorKey =
        "contact.errors.preferredContactRequired";

    contactElements.preferredContactError
      .textContent =
        translateContactText(
          "contact.errors.preferredContactRequired"
        );

    return false;
  }

  contactElements.preferredContactInputs
    .forEach(function (input) {
      input.removeAttribute(
        "aria-invalid"
      );
    });

  contactElements.preferredContactError
    .textContent = "";

  delete contactElements.preferredContactError
    .dataset.errorKey;

  return true;
}


/**
 * Validates all fields.
 *
 * @returns {boolean}
 */
function validateContactForm() {
  const validationResults = [
    validateContactName(),
    validateContactEmail(),
    validateContactSubject(),
    validateContactMessage(),
    validatePreferredContactMethod()
  ];

  return validationResults.every(
    function (result) {
      return result;
    }
  );
}


/**
 * Finds and focuses the first invalid control.
 */
function focusFirstInvalidContactField() {
  const invalidField =
    contactElements.form.querySelector(
      '[aria-invalid="true"]'
    );

  if (invalidField) {
    invalidField.focus();
  }
}


/**
 * Clears the success/status message.
 */
function clearContactStatus() {
  contactElements.status.hidden = true;
  contactElements.status.textContent = "";

  delete contactElements.status
    .dataset.statusType;
}


/**
 * Displays the successful demonstration state.
 */
function showContactSuccess() {
  contactElements.status.textContent =
    translateContactText(
      "contact.successMessage"
    );

  contactElements.status.dataset.statusType =
    "success";

  contactElements.status.hidden = false;

  contactElements.status.focus();
}


/**
 * Clears all field-level validation messages.
 */
function clearAllContactErrors() {
  clearContactFieldError(
    contactElements.name,
    contactElements.nameError
  );

  clearContactFieldError(
    contactElements.email,
    contactElements.emailError
  );

  clearContactFieldError(
    contactElements.subject,
    contactElements.subjectError
  );

  clearContactFieldError(
    contactElements.message,
    contactElements.messageError
  );

  contactElements.preferredContactInputs
    .forEach(function (input) {
      input.removeAttribute(
        "aria-invalid"
      );
    });

  contactElements.preferredContactGroup
    .classList.remove("has-error");

  contactElements.preferredContactError
    .textContent = "";

  delete contactElements.preferredContactError
    .dataset.errorKey;
}


/**
 * Updates currently visible errors when
 * the interface language changes.
 */
function refreshContactValidationLanguage() {
  const errorElements =
    contactElements.form.querySelectorAll(
      "[data-error-key]"
    );

  errorElements.forEach(
    function (errorElement) {
      errorElement.textContent =
        translateContactText(
          errorElement.dataset.errorKey
        );
    }
  );

  if (
    contactElements.status.dataset.statusType ===
    "success"
  ) {
    contactElements.status.textContent =
      translateContactText(
        "contact.successMessage"
      );
  }
}


/**
 * Handles a successful or invalid form submission.
 *
 * @param {SubmitEvent} event
 */
function handleContactSubmit(event) {
  event.preventDefault();

  clearContactStatus();

  const formIsValid =
    validateContactForm();

  if (!formIsValid) {
    focusFirstInvalidContactField();
    return;
  }

  contactElements.form.reset();

  clearAllContactErrors();

  showContactSuccess();
}


/**
 * Connects validation behavior to a text field.
 *
 * @param {HTMLElement} field
 * @param {Function} validationFunction
 */
function bindTextFieldValidation(
  field,
  validationFunction
) {
  field.addEventListener(
    "blur",
    validationFunction
  );

  field.addEventListener(
    "input",
    function () {
      clearContactStatus();

      if (
        field.getAttribute(
          "aria-invalid"
        ) === "true"
      ) {
        validationFunction();
      }
    }
  );
}


/**
 * Connects all Contact-page events.
 */
function bindContactEvents() {
  contactElements.form.addEventListener(
    "submit",
    handleContactSubmit
  );

  contactElements.form.addEventListener(
    "reset",
    function () {
      window.setTimeout(
        function () {
          clearAllContactErrors();
          clearContactStatus();
        },
        0
      );
    }
  );

  bindTextFieldValidation(
    contactElements.name,
    validateContactName
  );

  bindTextFieldValidation(
    contactElements.email,
    validateContactEmail
  );

  bindTextFieldValidation(
    contactElements.subject,
    validateContactSubject
  );

  bindTextFieldValidation(
    contactElements.message,
    validateContactMessage
  );

  contactElements.preferredContactInputs
    .forEach(function (input) {
      input.addEventListener(
        "change",
        function () {
          clearContactStatus();
          validatePreferredContactMethod();
        }
      );
    });

  document.addEventListener(
    "languageChanged",
    refreshContactValidationLanguage
  );
}


/**
 * Finds required Contact-page elements.
 *
 * @returns {boolean}
 */
function cacheContactElements() {
  contactElements.form =
    document.querySelector(
      "[data-contact-form]"
    );

  contactElements.status =
    document.querySelector(
      "[data-contact-status]"
    );

  contactElements.name =
    document.querySelector(
      "[data-contact-name]"
    );

  contactElements.email =
    document.querySelector(
      "[data-contact-email]"
    );

  contactElements.subject =
    document.querySelector(
      "[data-contact-subject]"
    );

  contactElements.message =
    document.querySelector(
      "[data-contact-message]"
    );

  contactElements.preferredContactGroup =
    document.querySelector(
      "[data-preferred-contact-group]"
    );

  contactElements.preferredContactInputs =
    document.querySelectorAll(
      "[data-preferred-contact]"
    );

  contactElements.nameError =
    document.querySelector(
      '[data-field-error="name"]'
    );

  contactElements.emailError =
    document.querySelector(
      '[data-field-error="email"]'
    );

  contactElements.subjectError =
    document.querySelector(
      '[data-field-error="subject"]'
    );

  contactElements.messageError =
    document.querySelector(
      '[data-field-error="message"]'
    );

  contactElements.preferredContactError =
    document.querySelector(
      '[data-field-error="preferredContact"]'
    );

  return Boolean(
    contactElements.form &&
    contactElements.status &&
    contactElements.name &&
    contactElements.email &&
    contactElements.subject &&
    contactElements.message &&
    contactElements.preferredContactGroup &&
    contactElements.preferredContactInputs.length &&
    contactElements.nameError &&
    contactElements.emailError &&
    contactElements.subjectError &&
    contactElements.messageError &&
    contactElements.preferredContactError
  );
}


/**
 * Starts Contact-page behavior.
 */
function initializeContactPage() {
  if (!cacheContactElements()) {
    return;
  }

  bindContactEvents();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeContactPage
  );
} else {
  initializeContactPage();
}