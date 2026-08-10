"use strict";

document.documentElement.classList.add(
  "js-enabled"
);


/* =========================================================
   Shared constants
   ========================================================= */

const MOBILE_NAVIGATION_QUERY =
  "(max-width: 768px)";

const DARK_MODE_QUERY =
  "(prefers-color-scheme: dark)";

const LEARNBRIDGE_THEME_STORAGE_KEY =
  "learnbridge-theme";

const THEMES = Object.freeze({
  LIGHT: "light",
  DARK: "dark"
});

/*
 * Replace this placeholder with the real WhatsApp number
 * before publication.
 *
 * Required format:
 * country code + number
 * no + sign
 * no spaces
 * no dashes
 *
 * Example format only:
 * 961XXXXXXXX
 */
const WHATSAPP_PHONE_NUMBER =
  "9613234567";

const NEWSLETTER_EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BACK_TO_TOP_THRESHOLD = 500;

let themePreferenceIsManual = false;


/* =========================================================
   Translation helper
   ========================================================= */

/**
 * Returns translated shared text when the i18n
 * system is available.
 *
 * @param {string} key
 * @returns {string}
 */
function getSharedTranslation(key) {
  if (
    window.LearnBridgeI18n &&
    typeof window.LearnBridgeI18n.translate ===
      "function"
  ) {
    return window.LearnBridgeI18n.translate(
      key
    );
  }

  const englishFallbacks = {
    "common.openMenu":
      "Open navigation menu",

    "common.closeMenu":
      "Close navigation menu",

    "common.darkMode":
      "Dark mode",

    "common.lightMode":
      "Light mode",

    "common.switchToDarkMode":
      "Switch to dark mode",

    "common.switchToLightMode":
      "Switch to light mode",

    "common.whatsappPrefilledMessage":
      "Hello, I would like to ask about the educational resources available on LearnBridge.",

    "home.newsletterInvalid":
      "Please enter a valid email address.",

    "home.newsletterSuccess":
      "Your email is valid. This is a demonstration, so it was not subscribed or stored."
  };

  return englishFallbacks[key] || key;
}


/* =========================================================
   Responsive navigation
   ========================================================= */

/**
 * Opens or closes the mobile navigation.
 *
 * @param {HTMLButtonElement} menuButton
 * @param {HTMLElement} navigation
 * @param {boolean} shouldOpen
 * @param {boolean} restoreFocus
 */
function setMobileMenuState(
  menuButton,
  navigation,
  shouldOpen,
  restoreFocus = false
) {
  const mobileLayout =
    window.matchMedia(
      MOBILE_NAVIGATION_QUERY
    ).matches;

  const menuIsOpen =
    mobileLayout && shouldOpen;

  const ariaLabelKey =
    menuIsOpen
      ? "common.closeMenu"
      : "common.openMenu";

  menuButton.setAttribute(
    "aria-expanded",
    String(menuIsOpen)
  );

  menuButton.dataset.i18nAriaLabel =
    ariaLabelKey;

  menuButton.setAttribute(
    "aria-label",
    getSharedTranslation(
      ariaLabelKey
    )
  );

  navigation.classList.toggle(
    "is-open",
    menuIsOpen
  );

  document.body.classList.toggle(
    "mobile-menu-open",
    menuIsOpen
  );

  if (restoreFocus) {
    menuButton.focus();
  }
}


/**
 * Initializes mobile-navigation behavior.
 */
function initializeMobileNavigation() {
  const menuButton =
    document.querySelector(
      "[data-menu-toggle]"
    );

  const navigation =
    document.querySelector(
      "[data-primary-navigation]"
    );

  if (!menuButton || !navigation) {
    return;
  }

  const mobileNavigation =
    window.matchMedia(
      MOBILE_NAVIGATION_QUERY
    );

  menuButton.addEventListener(
    "click",
    function () {
      const currentlyOpen =
        menuButton.getAttribute(
          "aria-expanded"
        ) === "true";

      setMobileMenuState(
        menuButton,
        navigation,
        !currentlyOpen
      );
    }
  );

  navigation.addEventListener(
    "click",
    function (event) {
      const clickedLink =
        event.target.closest("a");

      if (
        !clickedLink ||
        !mobileNavigation.matches
      ) {
        return;
      }

      setMobileMenuState(
        menuButton,
        navigation,
        false
      );
    }
  );

  document.addEventListener(
    "keydown",
    function (event) {
      const menuIsOpen =
        menuButton.getAttribute(
          "aria-expanded"
        ) === "true";

      if (
        event.key !== "Escape" ||
        !menuIsOpen
      ) {
        return;
      }

      setMobileMenuState(
        menuButton,
        navigation,
        false,
        true
      );
    }
  );

  document.addEventListener(
    "click",
    function (event) {
      const menuIsOpen =
        menuButton.getAttribute(
          "aria-expanded"
        ) === "true";

      if (
        !mobileNavigation.matches ||
        !menuIsOpen
      ) {
        return;
      }

      const clickedInsideNavigation =
        navigation.contains(
          event.target
        );

      const clickedMenuButton =
        menuButton.contains(
          event.target
        );

      if (
        clickedInsideNavigation ||
        clickedMenuButton
      ) {
        return;
      }

      setMobileMenuState(
        menuButton,
        navigation,
        false
      );
    }
  );

  function handleViewportChange(event) {
    if (event.matches) {
      return;
    }

    setMobileMenuState(
      menuButton,
      navigation,
      false
    );
  }

  if (
    typeof mobileNavigation
      .addEventListener === "function"
  ) {
    mobileNavigation.addEventListener(
      "change",
      handleViewportChange
    );
  } else {
    mobileNavigation.addListener(
      handleViewportChange
    );
  }

  document.addEventListener(
    "languageChanged",
    function () {
      const menuIsOpen =
        menuButton.getAttribute(
          "aria-expanded"
        ) === "true";

      setMobileMenuState(
        menuButton,
        navigation,
        menuIsOpen
      );
    }
  );

  setMobileMenuState(
    menuButton,
    navigation,
    false
  );
}


/* =========================================================
   Theme system
   ========================================================= */

/**
 * Checks whether a value is a valid theme.
 *
 * @param {string | null} theme
 * @returns {boolean}
 */
function isSupportedTheme(theme) {
  return (
    theme === THEMES.LIGHT ||
    theme === THEMES.DARK
  );
}


/**
 * Reads the saved theme safely.
 *
 * @returns {string | null}
 */
function getSavedTheme() {
  try {
    const savedTheme =
      localStorage.getItem(
        LEARNBRIDGE_THEME_STORAGE_KEY
      );

    return isSupportedTheme(savedTheme)
      ? savedTheme
      : null;
  } catch (error) {
    console.warn(
      "LearnBridge could not read the saved theme.",
      error
    );

    return null;
  }
}


/**
 * Saves the user's chosen theme safely.
 *
 * @param {string} theme
 */
function saveTheme(theme) {
  try {
    localStorage.setItem(
      LEARNBRIDGE_THEME_STORAGE_KEY,
      theme
    );
  } catch (error) {
    console.warn(
      "LearnBridge could not save the theme preference.",
      error
    );
  }
}


/**
 * Gets the browser/system theme preference.
 *
 * @returns {string}
 */
function getSystemTheme() {
  return window.matchMedia(
    DARK_MODE_QUERY
  ).matches
    ? THEMES.DARK
    : THEMES.LIGHT;
}


/**
 * Returns the currently active theme.
 *
 * @returns {string}
 */
function getCurrentTheme() {
  return (
    document.documentElement.dataset.theme ||
    THEMES.LIGHT
  );
}


/**
 * Updates the theme-toggle button.
 *
 * @param {string} theme
 */
function updateThemeToggle(theme) {
  const themeButton =
    document.querySelector(
      "[data-theme-toggle]"
    );

  const themeLabel =
    document.querySelector(
      "[data-theme-label]"
    );

  if (!themeButton || !themeLabel) {
    return;
  }

  const darkThemeIsActive =
    theme === THEMES.DARK;

  const visibleLabelKey =
    darkThemeIsActive
      ? "common.lightMode"
      : "common.darkMode";

  const accessibleLabelKey =
    darkThemeIsActive
      ? "common.switchToLightMode"
      : "common.switchToDarkMode";

  themeButton.setAttribute(
    "aria-pressed",
    String(darkThemeIsActive)
  );

  themeButton.setAttribute(
    "aria-label",
    getSharedTranslation(
      accessibleLabelKey
    )
  );

  themeButton.dataset.i18nAriaLabel =
    accessibleLabelKey;

  themeLabel.dataset.i18n =
    visibleLabelKey;

  themeLabel.textContent =
    getSharedTranslation(
      visibleLabelKey
    );
}


/**
 * Updates the browser theme-color metadata.
 *
 * @param {string} theme
 */
function updateThemeColor(theme) {
  const themeColorMeta =
    document.querySelector(
      'meta[name="theme-color"]'
    );

  if (!themeColorMeta) {
    return;
  }

  themeColorMeta.setAttribute(
    "content",
    theme === THEMES.DARK
      ? "#0b1120"
      : "#2563eb"
  );
}


/**
 * Applies a theme.
 *
 * @param {string} theme
 */
function applyTheme(theme) {
  const safeTheme =
    isSupportedTheme(theme)
      ? theme
      : THEMES.LIGHT;

  document.documentElement.dataset.theme =
    safeTheme;

  updateThemeToggle(safeTheme);
  updateThemeColor(safeTheme);
}


/**
 * Switches between light and dark themes.
 */
function toggleTheme() {
  const currentTheme =
    getCurrentTheme();

  const nextTheme =
    currentTheme === THEMES.DARK
      ? THEMES.LIGHT
      : THEMES.DARK;

  themePreferenceIsManual = true;

  saveTheme(nextTheme);
  applyTheme(nextTheme);
}


/**
 * Initializes theme behavior.
 */
function initializeTheme() {
  const themeButton =
    document.querySelector(
      "[data-theme-toggle]"
    );

  const savedTheme =
    getSavedTheme();

  themePreferenceIsManual =
    Boolean(savedTheme);

  applyTheme(
    savedTheme || getSystemTheme()
  );

  if (themeButton) {
    themeButton.addEventListener(
      "click",
      toggleTheme
    );
  }

  const systemThemePreference =
    window.matchMedia(
      DARK_MODE_QUERY
    );

  function handleSystemThemeChange() {
    if (themePreferenceIsManual) {
      return;
    }

    applyTheme(
      getSystemTheme()
    );
  }

  if (
    typeof systemThemePreference
      .addEventListener === "function"
  ) {
    systemThemePreference.addEventListener(
      "change",
      handleSystemThemeChange
    );
  } else {
    systemThemePreference.addListener(
      handleSystemThemeChange
    );
  }

  document.addEventListener(
    "languageChanged",
    function () {
      updateThemeToggle(
        getCurrentTheme()
      );
    }
  );
}


/* =========================================================
   Copyright year
   ========================================================= */

/**
 * Updates every copyright year automatically.
 */
function updateCurrentYear() {
  const currentYear =
    new Date().getFullYear();

  const yearElements =
    document.querySelectorAll(
      "[data-current-year]"
    );

  yearElements.forEach(
    function (element) {
      element.textContent =
        String(currentYear);
    }
  );
}


/* =========================================================
   WhatsApp links
   ========================================================= */

/**
 * Returns true only when a real digits-only
 * WhatsApp number has been configured.
 *
 * @returns {boolean}
 */
function isWhatsAppNumberConfigured() {
  return /^\d{8,15}$/.test(
    WHATSAPP_PHONE_NUMBER
  );
}


/**
 * Builds the language-specific WhatsApp URL.
 *
 * @returns {string | null}
 */
function buildWhatsAppUrl() {
  if (!isWhatsAppNumberConfigured()) {
    return null;
  }

  const message =
    getSharedTranslation(
      "common.whatsappPrefilledMessage"
    );

  return (
    `https://wa.me/${WHATSAPP_PHONE_NUMBER}` +
    `?text=${encodeURIComponent(message)}`
  );
}


/**
 * Updates every WhatsApp link on the page.
 *
 * While the placeholder number is present,
 * existing internal Contact-page fallback links
 * are preserved.
 */
function updateWhatsAppLinks() {
  const whatsappLinks =
    document.querySelectorAll(
      "[data-whatsapp-link]"
    );

  const whatsappUrl =
    buildWhatsAppUrl();

  whatsappLinks.forEach(
    function (link) {
      if (!whatsappUrl) {
        return;
      }

      link.href = whatsappUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  );
}


/**
 * Initializes shared WhatsApp behavior.
 */
function initializeWhatsAppLinks() {
  updateWhatsAppLinks();

  document.addEventListener(
    "languageChanged",
    updateWhatsAppLinks
  );
}


/* =========================================================
   Home newsletter demonstration
   ========================================================= */

/**
 * Updates the newsletter message.
 *
 * @param {string} translationKey
 * @param {"success" | "error" | ""} state
 */
function setNewsletterMessage(
  translationKey,
  state
) {
  const messageElement =
    document.querySelector(
      "[data-newsletter-message]"
    );

  if (!messageElement) {
    return;
  }

  if (!translationKey) {
    messageElement.textContent = "";
    messageElement.dataset.state = "";

    delete messageElement.dataset.messageKey;

    return;
  }

  messageElement.dataset.messageKey =
    translationKey;

  messageElement.dataset.state =
    state;

  messageElement.textContent =
    getSharedTranslation(
      translationKey
    );
}


/**
 * Initializes the Home newsletter demo.
 */
function initializeNewsletter() {
  const newsletterForm =
    document.querySelector(
      "[data-newsletter-form]"
    );

  if (!newsletterForm) {
    return;
  }

  const emailInput =
    newsletterForm.querySelector(
      'input[type="email"]'
    );

  if (!emailInput) {
    return;
  }

  newsletterForm.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();

      const emailValue =
        emailInput.value.trim();

      const emailIsValid =
        NEWSLETTER_EMAIL_PATTERN.test(
          emailValue
        );

      if (!emailIsValid) {
        emailInput.setAttribute(
          "aria-invalid",
          "true"
        );

        setNewsletterMessage(
          "home.newsletterInvalid",
          "error"
        );

        emailInput.focus();

        return;
      }

      emailInput.removeAttribute(
        "aria-invalid"
      );

      newsletterForm.reset();

      setNewsletterMessage(
        "home.newsletterSuccess",
        "success"
      );
    }
  );

  emailInput.addEventListener(
    "input",
    function () {
      if (
        emailInput.getAttribute(
          "aria-invalid"
        ) === "true"
      ) {
        emailInput.removeAttribute(
          "aria-invalid"
        );
      }

      setNewsletterMessage("", "");
    }
  );

  document.addEventListener(
    "languageChanged",
    function () {
      const messageElement =
        document.querySelector(
          "[data-newsletter-message]"
        );

      if (
        !messageElement ||
        !messageElement.dataset.messageKey
      ) {
        return;
      }

      messageElement.textContent =
        getSharedTranslation(
          messageElement.dataset.messageKey
        );
    }
  );
}


/* =========================================================
   Back-to-top control
   ========================================================= */

/**
 * Shows or hides the Back-to-top link based
 * on scroll position.
 */
function updateBackToTopVisibility() {
  const backToTop =
    document.querySelector(
      ".back-to-top"
    );

  if (!backToTop) {
    return;
  }

  const shouldShow =
    window.scrollY >=
    BACK_TO_TOP_THRESHOLD;

  backToTop.classList.toggle(
    "is-visible",
    shouldShow
  );
}


/**
 * Initializes Back-to-top behavior.
 */
function initializeBackToTop() {
  const backToTop =
    document.querySelector(
      ".back-to-top"
    );

  if (!backToTop) {
    return;
  }

  updateBackToTopVisibility();

  window.addEventListener(
    "scroll",
    updateBackToTopVisibility,
    {
      passive: true
    }
  );
}


/* =========================================================
   Shared initialization
   ========================================================= */

/**
 * Starts all shared LearnBridge functionality.
 */
function initializePage() {
  initializeMobileNavigation();
  initializeTheme();
  updateCurrentYear();
  initializeWhatsAppLinks();
  initializeNewsletter();
  initializeBackToTop();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializePage
  );
} else {
  initializePage();
}