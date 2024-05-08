const turnModal = document.getElementById("turnModal");
const closeModalButton = document.getElementById("closeModal");
const turnBtn = document.getElementById("turnBtn");
const confirmTurn = document.getElementById("confirmTurn");
const copyright = document.getElementById("copyright");
const timeSelected = document.getElementById("time");
const currentYear = new Date().getFullYear();

copyright.innerHTML = `&copy; ${currentYear} Gerónimo Mercante. Todos los derechos reservados.`;

closeModalButton.addEventListener("click", function () {
  turnModal.classList.add("hidden");
});

turnBtn.addEventListener("click", () => {
  turnModal.classList.remove("hidden");
});

confirmTurn.addEventListener("click", () => {
  turnModal.classList.add("hidden");
  if (timeSelected.value) {
    const currentDate = new Date(timeSelected.value);
    console.log(currentDate.toISOString());
  }
  alert("Turno reservado");
});

document.addEventListener("DOMContentLoaded", function () {
  const calendarLink = document.querySelector('a[href="#calendar"]');
  const historyClinicLink = document.querySelector('a[href="#history_clinic"]');

  const calendarContent = document.getElementById("calendar");
  const historyClinicContent = document.getElementById("history_clinic");

  calendarLink.addEventListener("click", function (event) {
    event.preventDefault();

    calendarContent.classList.remove("hidden");

    historyClinicContent.classList.add("hidden");
  });

  historyClinicLink.addEventListener("click", function (event) {
    event.preventDefault();

    historyClinicContent.classList.remove("hidden");

    calendarContent.classList.add("hidden");
  });
});
