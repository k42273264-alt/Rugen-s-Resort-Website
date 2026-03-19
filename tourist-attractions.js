document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("attractionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");
  function t(key, fallback) {
    if (window.translations && window.currentLang) {
      return window.translations[window.currentLang][key] || fallback;
    }
    return fallback;
  }

  const attractionDetails = {
    jasmund: {
      titleKey: "ta_jasmund_title",
      detailsKey: "ta_jasmund_modal",
      title: "Jasmund National Park",
      details:
        "A UNESCO natural heritage site famous for its chalk cliffs and ancient beech forests.",
    },

    beach: {
      titleKey: "ta_beach_title",
      detailsKey: "ta_beach_modal",
      title: "Schaabe Beach",
      details:
        "A beautiful 12 km sandy Baltic Sea beach ideal for relaxing walks and swimming.",
    },

    museum: {
      titleKey: "ta_museum_title",
      detailsKey: "ta_museum_modal",
      title: "Rügen Chalk Museum",
      details:
        "Europe's only museum dedicated to chalk mining and fossils from the Cretaceous period.",
    },

    festival: {
      titleKey: "ta_festival_title",
      detailsKey: "ta_festival_modal",
      title: "Störtebeker Festival",
      details:
        "A spectacular open-air theatre event with ships, horses and fireworks every summer.",
    },

    cycling: {
      titleKey: "ta_cycling_title",
      detailsKey: "ta_cycling_modal",
      title: "Cycling & Hiking",
      details:
        "The island offers extensive cycling routes and scenic hiking trails through forests and coastal cliffs.",
    },
  };

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const attraction = btn.dataset.attraction;

      const item = attractionDetails[attraction];
      if (!item) return;

      modalTitle.textContent = t(item.titleKey, item.title);
      modalDetails.textContent = t(item.detailsKey, item.details);

      modal.classList.add("active");
    });
  });

  closeModal.onclick = () => modal.classList.remove("active");

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  };
});
