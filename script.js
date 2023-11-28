function submitForm() {
    // Get form values
    var selectedDoctor = document.getElementById('doctorName').value;
    var selectedTime = document.getElementById('appointmentTime').value;
  
    // Display confirmation message
    document.getElementById('confirmedDoctor').innerHTML = 'Doctor: ' + selectedDoctor;
    document.getElementById('confirmedTime').innerHTML = 'Time: ' + selectedTime;
    document.getElementById('appointmentForm').style.display = 'none';
    document.getElementById('confirmationMessage').classList.remove('hidden');
  }
  