"use strict";

const LEARNBRIDGE_BOOKMARK_STORAGE_KEY =
  "learnbridge-bookmarks";

const CATEGORY_TRANSLATION_KEYS = Object.freeze({
  "web-development": "categories.webDevelopment",
  programming: "categories.programming",
  "data-science": "categories.dataScience",
  "artificial-intelligence":
    "categories.artificialIntelligence",
  mathematics: "categories.mathematics",
  "career-development":
    "categories.careerDevelopment"
});

const DIFFICULTY_TRANSLATION_KEYS = Object.freeze({
  beginner: "resourceLabels.beginner",
  intermediate: "resourceLabels.intermediate",
  advanced: "resourceLabels.advanced"
});

const TYPE_TRANSLATION_KEYS = Object.freeze({
  article: "resourceLabels.article",
  video: "resourceLabels.video",
  tutorial: "resourceLabels.tutorial",
  course: "resourceLabels.course",
  documentation: "resourceLabels.documentation",
  exercise: "resourceLabels.exercise"
});

const LANGUAGE_TRANSLATION_KEYS = Object.freeze({
  en: "resourceLabels.english",
  ar: "resourceLabels.arabic",
  bilingual: "resourceLabels.bilingual"
});

const resourceState = {
  searchTerm: "",
  category: "all",
  difficulty: "all",
  type: "all",
  language: "all",
  sort: "title-asc",
  bookmarkedOnly: false
};

const resourceElements = {};

let bookmarkedResourceIds = new Set();


/**
 * Returns the current interface language.
 *
 * @returns {string}
 */
function getResourceInterfaceLanguage() {
  if (
    window.LearnBridgeI18n &&
    typeof window.LearnBridgeI18n
      .getCurrentLanguage === "function"
  ) {
    return window.LearnBridgeI18n
      .getCurrentLanguage();
  }

  return document.documentElement.lang || "en";
}


/**
 * Returns translated interface text.
 *
 * @param {string} key
 * @returns {string}
 */
function translateResourceText(key) {
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
 * Replaces placeholders such as {count} and {title}.
 *
 * @param {string} template
 * @param {object} values
 * @returns {string}
 */
function formatResourceMessage(template, values) {
  return Object.keys(values).reduce(
    function (message, placeholder) {
      return message.replaceAll(
        `{${placeholder}}`,
        String(values[placeholder])
      );
    },
    template
  );
}


/**
 * Returns one language value from a bilingual object.
 *
 * @param {object | string} value
 * @param {string} language
 * @returns {string}
 */
function getLocalizedResourceValue(value, language) {
  if (typeof value === "string") {
    return value;
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  return value[language] || value.en || "";
}


/**
 * Returns the resource array safely.
 *
 * @returns {Array}
 */
function getResourceData() {
  if (!Array.isArray(window.learnBridgeResources)) {
    console.error(
      "LearnBridge resource data is unavailable."
    );

    return [];
  }

  return window.learnBridgeResources;
}


/**
 * Returns the IDs that currently exist in resource data.
 *
 * @returns {Set<number>}
 */
function getValidResourceIds() {
  return new Set(
    getResourceData().map(function (resource) {
      return resource.id;
    })
  );
}


/**
 * Loads saved bookmark IDs from localStorage.
 *
 * Invalid or removed IDs are ignored.
 *
 * @returns {Set<number>}
 */
function loadBookmarks() {
  try {
    const savedBookmarks = localStorage.getItem(
      LEARNBRIDGE_BOOKMARK_STORAGE_KEY
    );

    if (!savedBookmarks) {
      return new Set();
    }

    const parsedBookmarks =
      JSON.parse(savedBookmarks);

    if (!Array.isArray(parsedBookmarks)) {
      return new Set();
    }

    const validResourceIds =
      getValidResourceIds();

    const validBookmarks =
      parsedBookmarks.filter(function (resourceId) {
        return (
          Number.isInteger(resourceId) &&
          validResourceIds.has(resourceId)
        );
      });

    return new Set(validBookmarks);
  } catch (error) {
    console.warn(
      "LearnBridge could not load bookmarks.",
      error
    );

    return new Set();
  }
}


/**
 * Saves bookmark IDs to localStorage.
 */
function saveBookmarks() {
  try {
    const bookmarkIds = [
      ...bookmarkedResourceIds
    ].sort(function (firstId, secondId) {
      return firstId - secondId;
    });

    localStorage.setItem(
      LEARNBRIDGE_BOOKMARK_STORAGE_KEY,
      JSON.stringify(bookmarkIds)
    );
  } catch (error) {
    console.warn(
      "LearnBridge could not save bookmarks.",
      error
    );
  }
}


/**
 * Checks whether one resource is bookmarked.
 *
 * @param {number} resourceId
 * @returns {boolean}
 */
function isResourceBookmarked(resourceId) {
  return bookmarkedResourceIds.has(resourceId);
}


/**
 * Normalizes text for searching.
 *
 * @param {string} value
 * @returns {string}
 */
function normalizeSearchText(value) {
  return String(value)
    .trim()
    .toLocaleLowerCase();
}


/**
 * Creates searchable content from both languages.
 *
 * @param {object} resource
 * @returns {string}
 */
function createResourceSearchText(resource) {
  const englishKeywords =
    resource.keywords.en || [];

  const arabicKeywords =
    resource.keywords.ar || [];

  return normalizeSearchText(
    [
      resource.title.en,
      resource.title.ar,
      resource.description.en,
      resource.description.ar,
      ...englishKeywords,
      ...arabicKeywords
    ].join(" ")
  );
}


/**
 * Checks whether a resource matches the search term.
 *
 * @param {object} resource
 * @returns {boolean}
 */
function resourceMatchesSearch(resource) {
  if (!resourceState.searchTerm) {
    return true;
  }

  return createResourceSearchText(resource).includes(
    normalizeSearchText(
      resourceState.searchTerm
    )
  );
}


/**
 * Checks a standard select filter.
 *
 * @param {string} resourceValue
 * @param {string} selectedValue
 * @returns {boolean}
 */
function resourceMatchesFilter(
  resourceValue,
  selectedValue
) {
  return (
    selectedValue === "all" ||
    resourceValue === selectedValue
  );
}


/**
 * Checks the resource-language filter.
 *
 * Selecting English or Arabic also includes
 * bilingual resources.
 *
 * @param {object} resource
 * @returns {boolean}
 */
function resourceMatchesLanguage(resource) {
  if (resourceState.language === "all") {
    return true;
  }

  if (resourceState.language === "bilingual") {
    return resource.language === "bilingual";
  }

  return (
    resource.language === resourceState.language ||
    resource.language === "bilingual"
  );
}


/**
 * Checks the bookmarked-only filter.
 *
 * @param {object} resource
 * @returns {boolean}
 */
function resourceMatchesBookmarkFilter(resource) {
  if (!resourceState.bookmarkedOnly) {
    return true;
  }

  return isResourceBookmarked(resource.id);
}


/**
 * Returns resources matching the current state.
 *
 * @returns {Array}
 */
function filterResources() {
  return getResourceData().filter(
    function (resource) {
      return (
        resourceMatchesSearch(resource) &&
        resourceMatchesFilter(
          resource.category,
          resourceState.category
        ) &&
        resourceMatchesFilter(
          resource.difficulty,
          resourceState.difficulty
        ) &&
        resourceMatchesFilter(
          resource.type,
          resourceState.type
        ) &&
        resourceMatchesLanguage(resource) &&
        resourceMatchesBookmarkFilter(resource)
      );
    }
  );
}


/**
 * Returns a sorted copy of the supplied array.
 *
 * @param {Array} resources
 * @returns {Array}
 */
function sortResources(resources) {
  const language =
    getResourceInterfaceLanguage();

  const sortedResources = [...resources];

  sortedResources.sort(function (
    firstResource,
    secondResource
  ) {
    const firstTitle =
      getLocalizedResourceValue(
        firstResource.title,
        language
      );

    const secondTitle =
      getLocalizedResourceValue(
        secondResource.title,
        language
      );

    switch (resourceState.sort) {
      case "title-desc":
        return secondTitle.localeCompare(
          firstTitle,
          language,
          { sensitivity: "base" }
        );

      case "duration-asc":
        return (
          firstResource.duration -
          secondResource.duration
        );

      case "duration-desc":
        return (
          secondResource.duration -
          firstResource.duration
        );

      case "title-asc":
      default:
        return firstTitle.localeCompare(
          secondTitle,
          language,
          { sensitivity: "base" }
        );
    }
  });

  return sortedResources;
}


/**
 * Creates an element with optional class and text.
 *
 * @param {string} tagName
 * @param {string} className
 * @param {string} text
 * @returns {HTMLElement}
 */
function createResourceElement(
  tagName,
  className = "",
  text = ""
) {
  const element =
    document.createElement(tagName);

  if (className) {
    element.className = className;
  }

  if (text) {
    element.textContent = text;
  }

  return element;
}


/**
 * Creates a translated badge.
 *
 * @param {string} translationKey
 * @param {string} modifierClass
 * @returns {HTMLElement}
 */
function createResourceBadge(
  translationKey,
  modifierClass = ""
) {
  return createResourceElement(
    "span",
    `badge ${modifierClass}`.trim(),
    translateResourceText(translationKey)
  );
}


/**
 * Creates one metadata term and value.
 *
 * @param {string} label
 * @param {string} value
 * @returns {HTMLElement}
 */
function createResourceDetail(label, value) {
  const wrapper = createResourceElement(
    "div",
    "resource-detail"
  );

  const term = createResourceElement(
    "dt",
    "resource-detail__label",
    label
  );

  const description = createResourceElement(
    "dd",
    "resource-detail__value",
    value
  );

  wrapper.append(term, description);

  return wrapper;
}


/**
 * Announces a message below the resource library.
 *
 * @param {string} translationKey
 * @param {object} values
 */
function announceResourceAction(
  translationKey,
  values = {}
) {
  const template = translateResourceText(
    translationKey
  );

  resourceElements.actionMessage.textContent =
    formatResourceMessage(
      template,
      values
    );
}


/**
 * Updates one bookmark button to match its state.
 *
 * @param {HTMLButtonElement} button
 * @param {object} resource
 */
function updateBookmarkButton(button, resource) {
  const language =
    getResourceInterfaceLanguage();

  const resourceTitle =
    getLocalizedResourceValue(
      resource.title,
      language
    );

  const bookmarked =
    isResourceBookmarked(resource.id);

  const icon = button.querySelector(
    "[data-bookmark-icon]"
  );

  const label = button.querySelector(
    "[data-bookmark-text]"
  );

  const ariaLabelTemplate =
    translateResourceText(
      bookmarked
        ? "resources.removeBookmarkLabel"
        : "resources.addBookmarkLabel"
    );

  button.setAttribute(
    "aria-pressed",
    String(bookmarked)
  );

  button.setAttribute(
    "aria-label",
    formatResourceMessage(
      ariaLabelTemplate,
      {
        title: resourceTitle
      }
    )
  );

  if (icon) {
    icon.textContent =
      bookmarked ? "★" : "☆";
  }

  if (label) {
    label.textContent =
      translateResourceText(
        bookmarked
          ? "resources.bookmarked"
          : "resources.bookmark"
      );
  }
}


/**
 * Toggles one bookmark.
 *
 * @param {object} resource
 * @param {HTMLButtonElement} button
 */
function toggleResourceBookmark(
  resource,
  button
) {
  const wasBookmarked =
    isResourceBookmarked(resource.id);

  if (wasBookmarked) {
    bookmarkedResourceIds.delete(
      resource.id
    );
  } else {
    bookmarkedResourceIds.add(
      resource.id
    );
  }

  saveBookmarks();

  const isNowBookmarked =
    isResourceBookmarked(resource.id);

  const language =
    getResourceInterfaceLanguage();

  const resourceTitle =
    getLocalizedResourceValue(
      resource.title,
      language
    );

  if (
    resourceState.bookmarkedOnly &&
    !isNowBookmarked
  ) {
    renderResources();

    resourceElements.bookmarkedOnly.focus();
  } else {
    updateBookmarkButton(
      button,
      resource
    );
  }

  announceResourceAction(
    isNowBookmarked
      ? "resources.bookmarkAdded"
      : "resources.bookmarkRemoved",
    {
      title: resourceTitle
    }
  );
}


/**
 * Creates a bookmark button.
 *
 * @param {object} resource
 * @returns {HTMLButtonElement}
 */
function createBookmarkButton(resource) {
  const button = createResourceElement(
    "button",
    "bookmark-button"
  );

  button.type = "button";

  const icon = createResourceElement(
    "span",
    "bookmark-button__icon"
  );

  icon.dataset.bookmarkIcon = "";
  icon.setAttribute(
    "aria-hidden",
    "true"
  );

  const text = createResourceElement(
    "span",
    "bookmark-button__text"
  );

  text.dataset.bookmarkText = "";

  button.append(icon, text);

  updateBookmarkButton(
    button,
    resource
  );

  button.addEventListener(
    "click",
    function () {
      toggleResourceBookmark(
        resource,
        button
      );
    }
  );

  return button;
}


/**
 * Announces that a placeholder resource
 * has no final URL.
 *
 * @param {string} resourceTitle
 */
function announceUnavailableResource(
  resourceTitle
) {
  announceResourceAction(
    "resources.linkUnavailable",
    {
      title: resourceTitle
    }
  );
}


/**
 * Creates the resource action.
 *
 * @param {object} resource
 * @param {string} resourceTitle
 * @returns {HTMLElement}
 */
function createResourceAction(
  resource,
  resourceTitle
) {
  if (resource.url) {
    const link = createResourceElement(
      "a",
      "button button--secondary",
      translateResourceText(
        "resources.viewResource"
      )
    );

    link.href = resource.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    return link;
  }

  const button = createResourceElement(
    "button",
    "button button--secondary",
    translateResourceText(
      "resources.viewResource"
    )
  );

  button.type = "button";

  button.addEventListener(
    "click",
    function () {
      announceUnavailableResource(
        resourceTitle
      );
    }
  );

  return button;
}


/**
 * Creates one complete resource card.
 *
 * @param {object} resource
 * @returns {HTMLElement}
 */
function createResourceCard(resource) {
  const language =
    getResourceInterfaceLanguage();

  const resourceTitle =
    getLocalizedResourceValue(
      resource.title,
      language
    );

  const resourceDescription =
    getLocalizedResourceValue(
      resource.description,
      language
    );

  const card = createResourceElement(
    "article",
    "card resource-card resource-library-card"
  );

  card.dataset.resourceId =
    String(resource.id);

  const cardTop = createResourceElement(
    "div",
    "resource-card__top"
  );

  const icon = createResourceElement(
    "div",
    "resource-card__icon",
    resource.icon
  );

  icon.setAttribute(
    "aria-hidden",
    "true"
  );

  const bookmarkButton =
    createBookmarkButton(resource);

  cardTop.append(
    icon,
    bookmarkButton
  );

  const badges = createResourceElement(
    "div",
    "resource-card__badges"
  );

  badges.append(
    createResourceBadge(
      DIFFICULTY_TRANSLATION_KEYS[
        resource.difficulty
      ]
    ),
    createResourceBadge(
      TYPE_TRANSLATION_KEYS[
        resource.type
      ],
      "badge--accent"
    )
  );

  const title = createResourceElement(
    "h3",
    "resource-card__title",
    resourceTitle
  );

  const description = createResourceElement(
    "p",
    "resource-card__description",
    resourceDescription
  );

  const details = createResourceElement(
    "dl",
    "resource-details"
  );

  const durationTemplate =
    translateResourceText(
      "resources.durationValue"
    );

  const durationValue =
    formatResourceMessage(
      durationTemplate,
      {
        count: resource.duration
      }
    );

  details.append(
    createResourceDetail(
      translateResourceText(
        "resources.categoryMeta"
      ),
      translateResourceText(
        CATEGORY_TRANSLATION_KEYS[
          resource.category
        ]
      )
    ),
    createResourceDetail(
      translateResourceText(
        "resources.difficultyMeta"
      ),
      translateResourceText(
        DIFFICULTY_TRANSLATION_KEYS[
          resource.difficulty
        ]
      )
    ),
    createResourceDetail(
      translateResourceText(
        "resources.languageMeta"
      ),
      translateResourceText(
        LANGUAGE_TRANSLATION_KEYS[
          resource.language
        ]
      )
    ),
    createResourceDetail(
      translateResourceText(
        "resources.durationMeta"
      ),
      durationValue
    )
  );

  const action = createResourceAction(
    resource,
    resourceTitle
  );

  card.append(
    cardTop,
    badges,
    title,
    description,
    details,
    action
  );

  return card;
}


/**
 * Updates the visible result count.
 *
 * @param {number} count
 */
function updateResourceCount(count) {
  const template =
    translateResourceText(
      "resources.resultsCount"
    );

  resourceElements.count.textContent =
    formatResourceMessage(
      template,
      {
        count
      }
    );
}


/**
 * Updates the correct empty-state text.
 */
function updateNoResultsMessage() {
  const titleKey =
    resourceState.bookmarkedOnly
      ? "resources.noBookmarksTitle"
      : "resources.noResultsTitle";

  const descriptionKey =
    resourceState.bookmarkedOnly
      ? "resources.noBookmarksDescription"
      : "resources.noResultsDescription";

  resourceElements.noResultsTitle.dataset.i18n =
    titleKey;

  resourceElements.noResultsDescription.dataset.i18n =
    descriptionKey;

  resourceElements.noResultsTitle.textContent =
    translateResourceText(titleKey);

  resourceElements.noResultsDescription.textContent =
    translateResourceText(descriptionKey);
}


/**
 * Renders the filtered and sorted resources.
 */
function renderResources() {
  const matchingResources =
    sortResources(
      filterResources()
    );

  resourceElements.library.replaceChildren();

  resourceElements.actionMessage.textContent =
    "";

  updateResourceCount(
    matchingResources.length
  );

  updateNoResultsMessage();

  const hasResults =
    matchingResources.length > 0;

  resourceElements.library.hidden =
    !hasResults;

  resourceElements.noResults.hidden =
    hasResults;

  matchingResources.forEach(
    function (resource) {
      resourceElements.library.append(
        createResourceCard(resource)
      );
    }
  );
}


/**
 * Copies form values into resource state.
 */
function updateResourceStateFromControls() {
  resourceState.searchTerm =
    resourceElements.search.value;

  resourceState.category =
    resourceElements.category.value;

  resourceState.difficulty =
    resourceElements.difficulty.value;

  resourceState.type =
    resourceElements.type.value;

  resourceState.language =
    resourceElements.language.value;

  resourceState.sort =
    resourceElements.sort.value;

  resourceState.bookmarkedOnly =
    resourceElements.bookmarkedOnly.checked;
}


/**
 * Resets filters and sorting.
 *
 * Bookmarks themselves are not deleted.
 */
function resetResourceFilters() {
  resourceElements.form.reset();

  resourceState.searchTerm = "";
  resourceState.category = "all";
  resourceState.difficulty = "all";
  resourceState.type = "all";
  resourceState.language = "all";
  resourceState.sort = "title-asc";
  resourceState.bookmarkedOnly = false;

  renderResources();

  resourceElements.search.focus();
}


/**
 * Connects events to the controls.
 */
function bindResourceEvents() {
  resourceElements.form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
    }
  );

  resourceElements.search.addEventListener(
    "input",
    function () {
      updateResourceStateFromControls();
      renderResources();
    }
  );

  [
    resourceElements.category,
    resourceElements.difficulty,
    resourceElements.type,
    resourceElements.language,
    resourceElements.sort,
    resourceElements.bookmarkedOnly
  ].forEach(function (control) {
    control.addEventListener(
      "change",
      function () {
        updateResourceStateFromControls();
        renderResources();
      }
    );
  });

  resourceElements.resetButtons.forEach(
    function (button) {
      button.addEventListener(
        "click",
        resetResourceFilters
      );
    }
  );

  document.addEventListener(
    "languageChanged",
    function () {
      renderResources();
    }
  );
}


/**
 * Finds the Resources-page elements.
 *
 * @returns {boolean}
 */
function cacheResourceElements() {
  resourceElements.form =
    document.querySelector(
      "[data-resource-filters]"
    );

  resourceElements.search =
    document.querySelector(
      "[data-resource-search]"
    );

  resourceElements.category =
    document.querySelector(
      "[data-category-filter]"
    );

  resourceElements.difficulty =
    document.querySelector(
      "[data-difficulty-filter]"
    );

  resourceElements.type =
    document.querySelector(
      "[data-type-filter]"
    );

  resourceElements.language =
    document.querySelector(
      "[data-resource-language-filter]"
    );

  resourceElements.sort =
    document.querySelector(
      "[data-resource-sort]"
    );

  resourceElements.bookmarkedOnly =
    document.querySelector(
      "[data-bookmarked-only]"
    );

  resourceElements.library =
    document.querySelector(
      "[data-resource-library]"
    );

  resourceElements.count =
    document.querySelector(
      "[data-resource-count]"
    );

  resourceElements.noResults =
    document.querySelector(
      "[data-no-resources]"
    );

  resourceElements.noResultsTitle =
    document.querySelector(
      "[data-no-results-title]"
    );

  resourceElements.noResultsDescription =
    document.querySelector(
      "[data-no-results-description]"
    );

  resourceElements.actionMessage =
    document.querySelector(
      "[data-resource-action-message]"
    );

  resourceElements.resetButtons =
    document.querySelectorAll(
      "[data-reset-filters]"
    );

  return Boolean(
    resourceElements.form &&
    resourceElements.search &&
    resourceElements.category &&
    resourceElements.difficulty &&
    resourceElements.type &&
    resourceElements.language &&
    resourceElements.sort &&
    resourceElements.bookmarkedOnly &&
    resourceElements.library &&
    resourceElements.count &&
    resourceElements.noResults &&
    resourceElements.noResultsTitle &&
    resourceElements.noResultsDescription &&
    resourceElements.actionMessage
  );
}


/**
 * Starts the resource library.
 */
function initializeResourceLibrary() {
  if (!cacheResourceElements()) {
    return;
  }

  bookmarkedResourceIds =
    loadBookmarks();

  bindResourceEvents();

  updateResourceStateFromControls();

  renderResources();
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeResourceLibrary
  );
} else {
  initializeResourceLibrary();
}