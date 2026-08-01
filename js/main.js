"use strict";

document.documentElement.classList.add("js-enabled");

const MOBILE_NAVIGATION_QUERY = "(max-width: 768px)";

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
  const mobileLayout = window.matchMedia(
    MOBILE_NAVIGATION_QUERY
  ).matches;

  const menuIsOpen = mobileLayout && shouldOpen;

  menuButton.setAttribute(
    "aria-expanded",
    String(menuIsOpen)
  );

  menuButton.setAttribute(
    "aria-label",
    menuIsOpen
      ? "Close navigation menu"
      : "Open navigation menu"
  );

  menuButton.dataset.i18nAriaLabel = menuIsOpen
    ? "common.closeMenu"
    : "common.openMenu";

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
 * Creates the responsive navigation behavior.
 */
function initializeMobileNavigation() {
  const menuButton = document.querySelector(
    "[data-menu-toggle]"
  );

  const navigation = document.querySelector(
    "[data-primary-navigation]"
  );

  if (!menuButton || !navigation) {
    return;
  }

  const mobileNavigation = window.matchMedia(
    MOBILE_NAVIGATION_QUERY
  );

  menuButton.addEventListener("click", function () {
    const currentlyOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    setMobileMenuState(
      menuButton,
      navigation,
      !currentlyOpen
    );
  });

  navigation.addEventListener("click", function (event) {
    const clickedLink = event.target.closest("a");

    if (!clickedLink || !mobileNavigation.matches) {
      return;
    }

    setMobileMenuState(
      menuButton,
      navigation,
      false
    );
  });

  document.addEventListener("keydown", function (event) {
    const menuIsOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (event.key !== "Escape" || !menuIsOpen) {
      return;
    }

    setMobileMenuState(
      menuButton,
      navigation,
      false,
      true
    );
  });

  document.addEventListener("click", function (event) {
    const menuIsOpen =
      menuButton.getAttribute("aria-expanded") === "true";

    if (!mobileNavigation.matches || !menuIsOpen) {
      return;
    }

    const clickedInsideNavigation =
      navigation.contains(event.target);

    const clickedMenuButton =
      menuButton.contains(event.target);

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
  });

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
    typeof mobileNavigation.addEventListener ===
    "function"
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

  setMobileMenuState(
    menuButton,
    navigation,
    false
  );
}


/**
 * Starts shared page functionality after the HTML is ready.
 */
function initializePage() {
  initializeMobileNavigation();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializePage
  );
} else {
  initializePage();
}