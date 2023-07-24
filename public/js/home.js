// Simple home button to send user back to home page.

const home = () => {
    console.log('Home button clicked'); 
    document.location.replace('/homepage');
  };
  
  document.querySelector('#home').addEventListener('click', home);
  