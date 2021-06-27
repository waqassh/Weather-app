import React from 'react';

const API = {
  key: "f56de2b6265613bd7d2df3332f12782f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            className="search-bar"
            placeholder="Search..."
            />
        </div>

        <div className="location-box">
          <div className="location"> Antwerpen city, Belgium</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="weather-box">
          <div className="temp">
            15°c
          </div>
          <div className="weather"> Sunny</div>
        </div>

      </main>

    </div>
  );
}

export default App;
