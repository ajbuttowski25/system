import axios from 'axios';

axios.defaults.withCredentials = true;

axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
  axios.post('http://localhost:8000/api/register', formData)
    .then(response => {
      // success
    })
    .catch(error => {
      console.error('Registration error:', error);
    });
});
