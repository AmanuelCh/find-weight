'use strict';
// select elements
const weightOnEarthEl = document.querySelector('.input-weight');
const result = document.querySelector('.result');
const calculateBtn = document.querySelector('.calculate-weight');

// calculate weight for each planet
const calculateWeight = (weightOnEarth) => {
  const planets = [
    {
      name: 'mercury',
      mass: weightOnEarth * 0.38,
    },
    {
      name: 'venus',
      mass: weightOnEarth * 0.91,
    },
    {
      name: 'earth',
      mass: weightOnEarth * 1,
    },
    {
      name: 'mars',
      mass: weightOnEarth * 0.38,
    },
    {
      name: 'jupiter',
      mass: weightOnEarth * 2.34,
    },
    {
      name: 'saturn',
      mass: weightOnEarth * 1.06,
    },
    {
      name: 'uranus',
      mass: weightOnEarth * 0.92,
    },
    {
      name: 'neptune',
      mass: weightOnEarth * 1.19,
    },
  ];

  return planets;
};

const showWeight = () => {
  const weightOnEarth = weightOnEarthEl.value;
  // check if the input is valid
  if (!weightOnEarth) {
    result.innerHTML = 'Enter valid input';
    return;
  }
  // reset the result container
  result.innerHTML = '';

  const weightOnPlanets = calculateWeight(weightOnEarth);

  weightOnPlanets.forEach((planet) => {
    // populate HTML for each planet
    const html = `
      <div class="planet">
      <img src="./assets/${planet.name}.png" alt="" />
      <div>
        <p>${planet.name.charAt(0).toUpperCase() + planet.name.slice(1)}</p>
        <p>${planet.mass.toFixed(2)}</p>
      </div>
      </div>
    `;
    // insert the populated HTML
    result.insertAdjacentHTML('beforeend', html);
  });
};

calculateBtn.addEventListener('click', showWeight);
