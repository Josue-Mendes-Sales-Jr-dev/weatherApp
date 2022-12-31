const inputName=document.getElementById('input-name')
const inputBtn=document.getElementById('input-btn')
const nameCity=document.getElementById('name-city')
const windElement=document.getElementById('wind')
const humidityElement=document.getElementById('humidity')
const temperaturaElement=document.getElementById('temperatura')
const situacaoTempo=document.getElementById('situacao-city')
const div02=document.getElementById('div02')
const apikey ="d15c9a4a51ea2f7f1ea1ca25ded5e75f"
const apiCountryURL=""

const getWeatherData=async(city)=>{
    const apiWhetherURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`
    const res=await fetch(apiWhetherURL)
    const data=await res.json()
    return data
}


const showWeatherData=async(city)=>{
    const data= await getWeatherData(city)
     windElement.innerText=`${data.wind.speed}km/h`
     humidityElement.innerText=`${data.main.humidity}%`
     temperaturaElement.innerText=`${parseInt(data.main.temp)}°C`
     situacaoTempo.innerText=`${data.weather[0].description}`
    }

  inputBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    
    div02.classList.remove('hide')
    const city=inputName.value
    
    
    nameCity.innerText=city
    
    
    showWeatherData(city)
    inputName.value=''
  })
    
