// js/form.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var modalElems = document.querySelectorAll('.modal');
    var modalInstances = M.Modal.init(modalElems);
  
    if (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
  
        // Get user inputs
        var firstName = document.getElementById('first_name').value;
        var lastName = document.getElementById('last_name').value;
        var city = document.getElementById('city').value;
        var password = document.getElementById('password').value;
  
        // Log user inputs
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('City:', city);
        console.log('Password:', password);
  
        // Display successful message and close the modal
        M.toast({html: 'Submitted successfully!', classes: 'rounded center-align'});
        var modalInstance = M.Modal.getInstance(document.querySelector('#formModal'));
        modalInstance.close();
      });
    }
  });
  