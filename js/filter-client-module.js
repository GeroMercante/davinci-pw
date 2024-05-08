document.addEventListener("DOMContentLoaded", function() {
  const allInformationBtn = document.getElementById('all_information');
  const enfermedadesBtn = document.getElementById('enfermedades');
  const diagnosticosBtn = document.getElementById('diagnosticos');
  const historialBtn = document.getElementById('historial');

  const enfermedadesBody = document.getElementById('enfermedades_body');
  const diagnosticosBody = document.getElementById('diagnosticos_body');
  const historialBody = document.getElementById('historial_body');

  allInformationBtn.addEventListener('click', function() {
    toggleActiveButton(this);
    showAllInformation();
  });

  enfermedadesBtn.addEventListener('click', function() {
    toggleActiveButton(this);
    hideAllInformation();
    enfermedadesBody.classList.remove('hidden');
  });

  diagnosticosBtn.addEventListener('click', function() {
    toggleActiveButton(this);
    hideAllInformation();
    diagnosticosBody.classList.remove('hidden');
  });

  historialBtn.addEventListener('click', function() {
    toggleActiveButton(this);
    hideAllInformation();
    historialBody.classList.remove('hidden');
  });

  function toggleActiveButton(clickedBtn) {
    const buttons = document.querySelectorAll('.filters .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
  }

  function hideAllInformation() {
    enfermedadesBody.classList.add('hidden');
    diagnosticosBody.classList.add('hidden');
    historialBody.classList.add('hidden');
  }

  function showAllInformation() {
    const bodies = document.querySelectorAll('#body_information > div');
    bodies.forEach(body => body.classList.remove('hidden'));
  }
});
