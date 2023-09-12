document.addEventListener('DOMContentLoaded', () => {
  const countryInfo = document.querySelector('.country-info');
  const inputField = document.querySelector('#country-input');
  const submitButton = document.querySelector('#submit-button');

  submitButton.addEventListener('click', () => {
      const countryName = inputField.value;

      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
      const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

      fetch(apiUrl)
          .then((response) => {
              if (!response.ok) {
                  throw new Error(`Network response was not ok: ${response.status}`);
              }
              return response.json();
          })
          .then((data) => {
              // Handle the data here and update the DOM
              const countryInfoData = data[0];
              const countryName = countryInfoData.name.common;
              const countryCapital = countryInfoData.capital[0];
              const countryPopulation = countryInfoData.population;
              const countryRegion = countryInfoData.region;

              const countryInfoHTML = `
                  <h2>${countryName}</h2>
                  <p>Capital: ${countryCapital}</p>
                  <p>Population: ${countryPopulation}</p>
                  <p>Region: ${countryRegion}</p>
                  <!-- Add more information as needed -->
              `;

              countryInfo.innerHTML = countryInfoHTML;
          })
          .catch((error) => {
              console.error('Error:', error);
              countryInfo.innerHTML = '<p>Failed to fetch country information.</p>';
          });
  });
});
