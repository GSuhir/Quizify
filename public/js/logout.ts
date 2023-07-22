const logout = async (): Promise<void> => {
    try {
      const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      // Handle any errors that occur during the fetch or processing of the response
      console.error('An error occurred during logout:', error);
    }
  };
  
  document.querySelector('#logout')?.addEventListener('click', logout);
  
  