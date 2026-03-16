document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("attractionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  const attractionDetails = {
    jasmund: {
      title: "Jasmund National Park",
      details:
        "A UNESCO natural heritage site famous for its chalk cliffs and ancient beech forests.",
    },

    beach: {
      title: "Schaabe Beach",
      details:
        "A beautiful 12 km sandy Baltic Sea beach ideal for relaxing walks and swimming.",
    },

    museum: {
      title: "Rügen Chalk Museum",
      details:
        "Europe's only museum dedicated to chalk mining and fossils from the Cretaceous period.",
    },

    festival: {
      title: "Störtebeker Festival",
      details:
        "A spectacular open-air theatre event with ships, horses and fireworks every summer.",
    },

    cycling: {
      title: "Cycling & Hiking",
      details:
        "The island offers extensive cycling routes and scenic hiking trails through forests and coastal cliffs.",
    },
  };

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const attraction = btn.dataset.attraction;

      modalTitle.textContent = attractionDetails[attraction].title;
      modalDetails.textContent = attractionDetails[attraction].details;

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
