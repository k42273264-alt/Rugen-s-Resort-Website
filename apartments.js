document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("roomModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  const apartmentDetails = {
    onebed: {
      title: "One-Bedroom Apartment",
      details:
        "Bedroom with double bed, living area with sofa bed, dining area and fully equipped kitchenette.",
    },

    twobed: {
      title: "2-Bedroom Apartment",
      details:
        "Perfect for families with a double bedroom, children's bunk room and spacious living room.",
    },

    superior: {
      title: "Superior 2-Bedroom Apartment",
      details:
        "Two-storey apartment with terrace, open living area and fully equipped kitchen.",
    },

    deluxe: {
      title: "Deluxe 2-Bedroom Apartment",
      details: "Luxury apartment with balcony, terrace and modern living area.",
    },

    fourbed: {
      title: "4-Bedroom Apartment",
      details:
        "Large apartment ideal for families or groups with multiple bedrooms and living space.",
    },
  };

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.room;

      modalTitle.textContent = apartmentDetails[type].title;
      modalDetails.textContent = apartmentDetails[type].details;

      modal.classList.add("active");
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  // ===== Animation Fix =====

  const animatedElements = document.querySelectorAll("[data-animate]");

  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );

  animatedElements.forEach((el) => observer.observe(el));

  // ===== FILTER FUNCTIONALITY =====

  const filterButtons = document.querySelectorAll(".filter-btn");
  const roomCards = document.querySelectorAll(".room-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter rooms
      roomCards.forEach((card) => {
        const type = card.getAttribute("data-type");

        if (filter === "all" || type === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
