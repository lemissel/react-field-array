const fetchData = async (cnpj) => {
    try {
      const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data; // Assuming data is an array of objects
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return empty array or handle error accordingly
    }
  }

  export default fetchData;