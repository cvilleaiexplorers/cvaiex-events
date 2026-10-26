// Cville AI Explorers — small enhancements. The page works without this script
// (it then shows the "TBA" meetup state and keeps the sponsor details collapsed).
(function () {
  "use strict";

  // Next meetup: show the event while its date hasn't passed, otherwise "TBA".
  var card = document.getElementById("next");
  if (card) {
    var parts = (card.getAttribute("data-date") || "").split("-").map(Number);
    var eventUrl = card.getAttribute("data-url");
    if (parts.length === 3 && eventUrl) {
      // Treat the meetup as upcoming through the end of its day, local time.
      var endOfDay = new Date(parts[0], parts[1] - 1, parts[2], 23, 59, 59);
      var upcoming = new Date() <= endOfDay;
      document.querySelectorAll("[data-when]").forEach(function (el) {
        el.hidden = el.getAttribute("data-when") !== (upcoming ? "upcoming" : "tba");
      });
      if (upcoming) {
        document.querySelectorAll("[data-meetup-link]").forEach(function (a) {
          a.href = eventUrl;
        });
        var navBtn = document.querySelector(".nav [data-meetup-link]");
        if (navBtn) navBtn.textContent = "RSVP on Meetup";
      }
    }
  }

  // Sponsor "Learn more" toggle.
  var toggle = document.querySelector("[data-toggle]");
  if (toggle) {
    var panel = document.getElementById(toggle.getAttribute("aria-controls"));
    var thanks = document.querySelector("[data-thanks]");
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Show less −" : "Learn more +";
      panel.hidden = !open;
      if (thanks) thanks.hidden = open;
    });
  }
})();
