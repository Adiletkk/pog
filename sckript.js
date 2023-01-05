
// let url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${41.882004}&lon=${45.582748}&lang=ru&units=metric&appid=${key}`

// let url3 = `https://api.openweathermap.org/data/2.5/onecall?lat=${20.213123}&lon=${54.12354}&lang=ru&units=metric&appid=${key}`




// let $osnova = document.querySelector('.osnova')
// let $h1 = document.querySelector('.h1')
// let $description1 = document.querySelector('.description1')
// let $feels1 = document.querySelector('.feels1')
// let $h2 = document.querySelector('.h2')
// let $description2 = document.querySelector('.description2')
// let $feels2 = document.querySelector('.feels2')
// let $age = document.querySelector('.age')
// let $hourly = document.querySelector('.hourly')
// fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//      let current = data.current
//      $title.textContent = current.temp
//      $description.textContent = current.weather[0].description
//      $feels.textContent = current.feels_like

// })
// .then

// fetch(url)
// .then(resp => resp.json())
// .then(data => { 
//     console.log(data);
//     let current = data.current
//     $h1.textContent = data.timezone

// })

// fetch(url)
// .then(resp => resp.json())
// .then(data => { 
//     let current = data.current
//     $h2.textContent = data.timezone_offset
//     $description2.textContent = current.minutely[0].description2
// })





// const endpoint = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";
// class WeatherData {
//     constructor(temperature, humidity, windSpeed) {
//       this.temperature = temp;
//       this.humidity = weather;
//       this.windSpeed = feels_like;
//     }
//   }
  
//   async function getWeather(key, city) {

//     try {
//       const response = await fetch(endpoint);
//       const data = await response.json();
//       const temperature = data.main.temp;
//       const humidity = data.main.humidity;
//       const windSpeed = data.wind.speed;
//       return new WeatherData(temperature, humidity, windSpeed);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
// function 
//   const weather = await getWeather(key, 'New York');


// let key = "f5d9234be1bfda95ccf0f5b0a787d029" 
 
// let cities = [ 
//     { 
//         lat: 42.882004, 
//         lon: 74.582748 
//     }, 
//     { 
//         lat: 40.513996, 
//         lon: 72.816101 
//     } 
// ] 
// getData(cities[0]) 
 
// async function getData(city) { 
//     let url = (`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&lang=ru&units=metric&appid=${key}`) 
//     let resp = await fetch(url) 
//     let data = await resp.json() 
 
//     currentWeather(data.current) 
//     hourlyWeather(data.hourly)
// } 
 
// function currentWeather(data) { 
//     let $title = document.querySelector('.title') 
//     let $currentImg = document.querySelector('.icon') 
//     let $description = document.querySelector('.description') 
//     let $feels = document.querySelector('.feels') 
 
//     $title.textContent = data.temp 
//     $description.textContent = data.weather[0].description 
//     $feels.textContent = 'Ощущается' + data.feels_like 
//     $currentImg.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`) 
 
// } 
// function hourlyWeather(data){ 
//     let $hourly = document.querySelector('.hourly')
//     data.forEach((element ,index) => { 
//         $hourly.insertAdjacentHTML('beforeend',`
//         <div class='hour'>
//         <p>${index == 0 ? 'Сейчас': times[new Date().getHours() + index]}</p>
//         <img src='http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png'
//         <p>${element.temp}</p>
//         </div>
//         `)
//     })
// }



// document.querySelector('select').addEventListener('change', function () { 
//     switch (this.value) { 
//         case 'osh': 
//             getData(cities[1]) 
//             break 
//         case 'bishkek': 
//             getData(cities[0]) 
//             break 
        
//     } 
// })


// let times = [
//     "24",
//     "01",
//     "02",
//     "03",
//     "04",
//     "05",
//     "06",
//     "07",
//     "08",
//     "09",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "01",
//     "02",
//     "03",
//     "04",
//     "05",
//     "06",
//     "07",
//     "08",
//     "09",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23",
//     "24",
//     "01",
//     "02",
//     "03",
//     "04",
//     "05",
//     "06",
//     "07",
//     "08",
//     "09",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//     "21",
//     "22",
//     "23"
// ]

let key = "f5d9234be1bfda95ccf0f5b0a787d029"  
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`
let $cityName = document.querySelector('.cityName') 
let $currentTemp = document.querySelector('.currentTemp') 
let $description = document.querySelector('.description') 
let $hourly = document.querySelector('.hourly') 
let $daily = document.querySelector('.daily') 
let $select = document.querySelector('.select') 
 
 
let city = [ 
    { 
        name: "Бишкек", 
        lat: 42.882004, 
        lon: 74.582748 
    }, 
    { 
        name: "Ош", 
        lat: 40.52828, 
        lon: 72.7985 
    }, 
    { 
        name: "Токмок", 
        lat: 42.84194, 
        lon: 75.30149 
    }, 
    { 
        name: "Баткен", 
        lat: 40.066667, 
        lon: 70.833333 
    }, 
    { 
        name: "Талас", 
        lat: 42.52277, 
        lon: 72.24274 
    }, 
    { 
        name: "Нарын", 
        lat: 41.42866, 
        lon: 75.99111 
    }, 
    { 
        name: "Каракол", 
        lat: 42.478210, 
        lon: 78.395599 
    }, 
    { 
        name: "Джалал-Абад", 
        lat: 40.933155, 
        lon: 72.981491 
    }, 
] 
 
getData(city[0]) 
 
async function getData(cit) {  
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cit.lat}&lon=${cit.lon}&lang=ru&units=metric&appid=${key} `
    let resp = await fetch(url)  
    let data = await resp.json()  
  
    currentWeather(data.current) 
    hourlyWeather(data.hourly)  
    dailyWeather(data.daily) 
}  
 
let days = [ 
    "Воскресенье", 
    "Понедельник", 
    "Вторник", 
    "Среда", 
    "Четверг", 
    "Пятница", 
    "Суббота", 
    "Воскресенье", 
    "Понедельник", 
    "Вторник", 
    "Среда", 
    "Четверг", 
    "Пятница", 
    "Суббота", 
] 
let hours = [ 
    "00:00", 
    "01:00", 
    "02:00", 
    "03:00", 
    "04:00", 
    "05:00", 
    "06:00", 
    "07:00", 
    "08:00", 
    "09:00", 
    "10:00", 
    "11:00", 
    "12:00", 
    "13:00", 
    "14:00", 
    "15:00", 
    "16:00", 
    "17:00", 
    "18:00", 
    "19:00", 
    "20:00", 
    "21:00", 
    "22:00", 
    "23:00", 
    "00:00", 
    "01:00", 
    "02:00", 
    "03:00", 
    "04:00", 
    "05:00", 
    "06:00", 
    "07:00", 
    "08:00", 
    "09:00", 
    "10:00", 
    "11:00", 
    "12:00", 
    "13:00", 
    "14:00", 
    "15:00", 
    "16:00", 
    "17:00", 
    "18:00", 
    "19:00", 
    "20:00", 
    "21:00", 
    "22:00", 
    "23:00", 
    "00:00", 
    "01:00", 
    "02:00", 
    "03:00", 
    "04:00", 
    "05:00", 
    "06:00", 
    "07:00", 
    "08:00", 
    "09:00", 
    "10:00", 
    "11:00", 
    "12:00", 
    "13:00", 
    "14:00", 
    "15:00", 
    "16:00", 
    "17:00", 
    "18:00", 
    "19:00", 
    "20:00", 
    "21:00", 
    "22:00", 
    "23:00", 
] 
 
 
getWeatherData(url) 
async function getWeatherData(url){ 
    let resp = await fetch(url) 
    let data = await resp.json() 
    currentWeather(data.current) 
    hourlyWeather(data.hourly) 
    dailyWeather(data.daily) 
    //console.log(data) 
} 
 
 
function currentWeather(data){ 
    $currentTemp.textContent = Math.trunc(data.temp) + "°C" 
    $description.innerHTML = "" 
    $description.insertAdjacentHTML('beforeend', ` 
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"> 
        <span>${data.weather[0].description}</span> 
    `) 
    // console.log(data) 
} 
 
function hourlyWeather(data){ 
    // console.log(data) 
    $hourly.innerHTML = "" 
    data.forEach((element, index) => { 
        $hourly.insertAdjacentHTML('beforeend',` 
            <div class="hour"> 
                <span>${index == 0 ? "Сейчас" : hours[new Date().getHours() + index]}</span> 
                <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png"> 
                <span>${Math.trunc(element.temp)} °C</span> 
            </div> 
        `) 
    }); 
} 
 
function dailyWeather(data){ 
    //console.log(data) 
    $daily.innerHTML = "" 
    data.forEach((element, index) => {
$daily.insertAdjacentHTML('beforeend', ` 
            <div class="day"> 
                <span class="nameDay">${index == 0 ? "Сегодня" : days[new Date().getDay() + index]}</span> 
                <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png"> 
                <span>${element.temp.min}°C</span> 
                ----- 
                <span>${element.temp.max}°C</span> 
            </div> 
        `) 
    }) 
} 
 
 
// $select.addEventListener('change', function(){ 
//     let elem = city.find(elem => elem.name == $select.value) 
//     console.log(elem) 
//     let lat = elem.lat 
//     let lon = elem.lon 
//     url = https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${key} 
//     getWeatherData(url) 
// }) 
document.querySelector('select').addEventListener('change', function () {  
    switch (this.value) {  
        case 'osh':  
            getData(city[1])  
            break  
        case 'bishkek':  
            getData(city[0])  
            break  
        case 'tokmok': 
            getData(city[2]) 
            break 
        case 'batken': 
            getData(city[3]) 
            break 
        case 'talas': 
            getData(city[4]) 
            break 
        case 'naryn': 
            getData(city[5]) 
            break 
        case 'karakol': 
            getData(city[6]) 
            break 
        case 'djalaAbad': 
            getData(city[7]) 
            break 
    }  
})

