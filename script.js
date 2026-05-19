document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-redorange");
  const programmes = document.querySelectorAll(
    ".programme, .Short-courses, .professional-programme"
  );
  const dropdown = document.getElementById("programmeSelect");

  // 🔹 Handle category buttons
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.textContent.trim();

      // Reset active state
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      programmes.forEach(prog => {
        if (category === "All") {
          prog.style.display = "block";
        } else if (
          (category === "Diploma" && prog.classList.contains("diploma")) ||
          (category === "Certificate" && prog.classList.contains("certificate")) ||
          (category === "Short Courses" && prog.classList.contains("Short-courses")) ||
          (category === "Professional Programs" && prog.classList.contains("professional-programme"))
        ) {
          prog.style.display = "block";
        } else {
          prog.style.display = "none";
        }
      });

      // Reset dropdown when category filter is used
      dropdown.selectedIndex = 0;
    });
  });

  // 🔹 Handle dropdown filter
  dropdown.addEventListener("change", function () {
    const selectedValue = dropdown.options[dropdown.selectedIndex].text.trim();

    programmes.forEach(prog => {
      const title = prog.querySelector(".card-title").textContent.trim();
      if (selectedValue === "Choose a programme..." || selectedValue === "All") {
        prog.style.display = "block";
      } else if (title === selectedValue) {
        prog.style.display = "block";
      } else {
        prog.style.display = "none";
      }
    });

    // Reset button active state when dropdown filter is used
    buttons.forEach(btn => btn.classList.remove("active"));
  });
});

