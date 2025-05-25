fetch('/api/env')
  .then(res => res.json())
  .then(data => {
    console.log('My API Key is:', data.apiKey);
    // Use data.apiKey in your client-side logic
  });