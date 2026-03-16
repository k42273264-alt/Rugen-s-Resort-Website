document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     ROOM DETAILS MODAL
  =============================== */

  const modal = document.getElementById("roomModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDetails = document.getElementById("modalDetails");
  const closeModal = document.querySelector(".modal-close");

  const roomDetails = {

    standard: {
      title: "Standard Double Room",
      details:
        "Peaceful garden views with natural decorative elements such as wood and linen. A relaxing atmosphere perfect for unwinding during your stay on Rügen."
    },

    superior: {
      title: "Superior Double Room",
      details:
        "Classic continental style with additional comfort, a sleeper chair for an extra guest and a furnished balcony overlooking the Jasmunder Bodden."
    },

    junior: {
      title: "Junior Suite",
      details:
        "Ideal for couples or families with one child. Features a double bed, comfortable seating area, work desk and private balcony with scenic views."
    },

    landauer: {
      title: "Landauer Suite",
      details:
        "Spacious two-bedroom suite for up to six guests with a living room, sofa bed, dining area and furnished balcony."
    }

  };

  document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

      const roomType = button.dataset.room;

      modalTitle.textContent = roomDetails[roomType].title;
      modalDetails.textContent = roomDetails[roomType].details;

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



  /* ===============================
     ROOM FILTER SYSTEM
  =============================== */

  const filterButtons = document.querySelectorAll(".filter-btn");
  const roomCards = document.querySelectorAll(".room-card");

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      const filter = button.dataset.filter;

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      roomCards.forEach(card => {

        const type = card.dataset.type;

        if (filter === "all" || filter === type) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }

      });

    });

  });



  /* ===============================
     SCROLL ANIMATION
     (safe version so text never disappears)
  =============================== */

  const animatedElements = document.querySelectorAll("[data-animate]");

  if (animatedElements.length > 0) {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }

      });

    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));
  }

});