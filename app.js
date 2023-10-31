const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const infoBox = document.querySelector(".info-weather");
const error = document.querySelector(".not-found");

search.addEventListener('click', () => {

  const city = document.querySelector('.search-box input').value;

  const countries = {
  paris: {
    temperature: 10,
    description: "cloudy ",
    image: 'https://images.unsplash.com/photo-1612297728955-a0ad12a75df9?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  casablanca:{
    temperature: 18,
    description: "sunny ",
    image: 'https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bnxlbnwwfHwwfHx8MA%3D%3D'
  },
  tokyo:{
    temperature: 16,
    description: "sunny ",
    image: "https://images.unsplash.com/photo-1609881142760-298c2e76725b?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  };

  let image = document.querySelector('.weather-box img');
  const temperature = document.querySelector('.weather-box .temperature');
  const description = document.querySelector('.weather-box .description');
  if (countries.hasOwnProperty(city)){
    container.style.height = '555px';
    weatherBox.classList.add('active');
    infoBox.classList.add('active');
    error.classList.remove('active');
  } else {
    container.style.height = '400px';
    weatherBox.classList.remove('active');
    infoBox.classList.remove('active');
    error.classList.add('active');
  }
    if (countries[city]) {
      image.src = countries[city].image;
      temperature.innerHTML = `${countries[city].temperature} <span>°C</span>`;
      description.innerText = countries[city].description;
    }
});
