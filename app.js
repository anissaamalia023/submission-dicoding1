document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const bioTextarea = document.getElementById('bio');
    const saveButton = document.getElementById('save-button');
  

    function populateProfile() {
      fetch('/profile')
        .then((response) => response.json())
        .then((data) => {
          nameInput.value = data.name;
          emailInput.value = data.email;
          bioTextarea.value = data.bio;
        });
    }
  
    
    function saveProfile() {
      const data = {
        name: nameInput.value,
        email: emailInput.value,
        bio: bioTextarea.value,
      };
  
      fetch('/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          
          console.log('Profil disimpan:', data);
        });
    }
  
    populateProfile();
  
    saveButton.addEventListener('click', saveProfile);
  });
  