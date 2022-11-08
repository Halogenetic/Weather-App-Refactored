const weatherForm = document.getElementById('cityName')
const weatherByDay = [[], [], [], [], []]
const weatherByDay2 = [[], [], [], [], []]
const container2 = document.querySelectorAll('.container2')
const comparebutton = document.querySelector(".compare")
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const getWeather = (cityName) =>{
	fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=ac96025e898eaaa90f32fb998527b49f`)
	.then(response => response.json())
	.then((data) => {
		fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=ac96025e898eaaa90f32fb998527b49f`)
		.then(response => response.json())
		.then((data) => {
      const weatherByDay = [[], [], [], [], []]
			let i = 0
			let c = 0
			data.list.forEach((weatherEntry) => {
				if(i < 8){
					weatherByDay[c].push(weatherEntry)
				}else{
					c++
					weatherByDay[c].push(weatherEntry)
					i = 0
				}
				i++				
			})

      mycon = document.querySelectorAll(".container")
      mycon.forEach(element => {element.remove() })

      let h = 0
      for (p=0; p<5; p++){
      const megacon = document.querySelector(".megacon")
      const createcon = document.createElement("div")
      createcon.classList.add("container")
      megacon.append(createcon)
      const createh2 = document.createElement("h2")
      createh2.classList.add("city")
      const createh1 = document.createElement("h1")
      createh1.classList.add("temp")
      const createflex = document.createElement("div")
      createflex.classList.add("flex")
      const createimg = document.createElement("img")
      createimg.classList.add("icon")
      createflex.append(createimg)
      const createdes = document.createElement("div")
      createdes.classList.add("description")
      createflex.append(createdes)
      const createhumi = document.createElement("div")
      createhumi.classList.add("humidity")
      const createwind = document.createElement("div")
      createwind.classList.add("wind")
      createcon.append(createh2, createh1, createflex, createhumi, createwind)

      let container = document.querySelectorAll('.container')
      let date = new Date(data.list[h].dt_txt)

      container[p].children[0].innerHTML=(cityName+" "+(weekday[date.getDay()]))
      container[p].children[1].innerHTML=(weatherByDay[p][0].main.temp+"°")
      container[p].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay[p][0].weather[0].icon + ".png"
      container[p].children[2].children[1].innerHTML=(weatherByDay[p][0].weather[0].description)
      container[p].children[3].innerHTML=("Humidity: "+ weatherByDay[p][0].main.humidity)
      container[p].children[4].innerHTML=("Wind: "+ weatherByDay[p][0].wind.speed)

      h = h + 8
      }

      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + cityName + "')"
      const remember = localStorage.setItem("choice", cityName)
      
      var xyValues = [
        {x:1, y:(weatherByDay[0][0].main.temp)},
        {x:2, y:(weatherByDay[1][0].main.temp)},
        {x:3, y:(weatherByDay[2][0].main.temp)},
        {x:4, y:(weatherByDay[3][0].main.temp)},
        {x:5, y:(weatherByDay[4][0].main.temp)},
      ]
      
      new Chart("myChart", {
        type: "scatter",
        data: {
          datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            xAxes: [{ticks: {min: 1, max:5}}],
            yAxes: [{ticks: {min: -5, max:30}}],
          }
        }
      })
		})
	})
}

const getWeather2 = (cityName) =>{
	fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=ac96025e898eaaa90f32fb998527b49f`)
	.then(response => response.json())
	.then((data) => {
		fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=ac96025e898eaaa90f32fb998527b49f`)
		.then(response => response.json())
		.then((data) => {
      const weatherByDay2 = [[], [], [], [], []]
			let i = 0
			let c = 0
			data.list.forEach((weatherEntry) => {
				if(i < 8){
					weatherByDay2[c].push(weatherEntry)
				}else{
					c++
					weatherByDay2[c].push(weatherEntry)
					i = 0
				}
				i++
			})

      mycon2 = document.querySelectorAll(".container2")
      mycon2.forEach(element => {element.remove() })

      let h = 0
      for (p=0; p<5; p++){
        const megacon2 = document.querySelector(".megacon2")
        const createcon = document.createElement("div")
        createcon.classList.add("container2")
        megacon2.append(createcon)
        const createh2 = document.createElement("h2")
        createh2.classList.add("city")
        const createh1 = document.createElement("h1")
        createh1.classList.add("temp")
        const createflex = document.createElement("div")
        createflex.classList.add("flex")
        const createimg = document.createElement("img")
        createimg.classList.add("icon")
        createflex.append(createimg)
        const createdes = document.createElement("div")
        createdes.classList.add("description")
        createflex.append(createdes)
        const createhumi = document.createElement("div")
        createhumi.classList.add("humidity")
        const createwind = document.createElement("div")
        createwind.classList.add("wind")
        createcon.append(createh2, createh1, createflex, createhumi, createwind)
  
        let container = document.querySelectorAll('.container2')
        let date = new Date(data.list[h].dt_txt)

        container[p].children[0].innerHTML=(cityName+" "+(weekday[date.getDay()]))
        container[p].children[1].innerHTML=(weatherByDay2[p][0].main.temp+"°")
        container[p].children[2].children[0].src ="https://openweathermap.org/img/wn/" + weatherByDay2[p][0].weather[0].icon + ".png"
        container[p].children[2].children[1].innerHTML=(weatherByDay2[p][0].weather[0].description)
        container[p].children[3].innerHTML=("Humidity: "+ weatherByDay2[p][0].main.humidity)
        container[p].children[4].innerHTML=("Wind: "+ weatherByDay2[p][0].wind.speed)
        h = h + 8
        }

      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + cityName + "')"
      const remember = localStorage.setItem("choice", cityName)

      var xyValues = [
        {x:1, y:(weatherByDay2[0][0].main.temp)},
        {x:2, y:(weatherByDay2[1][0].main.temp)},
        {x:3, y:(weatherByDay2[2][0].main.temp)},
        {x:4, y:(weatherByDay2[3][0].main.temp)},
        {x:5, y:(weatherByDay2[4][0].main.temp)},
      ]

      new Chart("chart2", {
        type: "scatter",
        data: {
          datasets: [{
            pointRadius: 4,
            pointBackgroundColor: "rgb(0,0,255)",
            data: xyValues
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            xAxes: [{ticks: {min: 1, max:5}}],
            yAxes: [{ticks: {min: -5, max:30}}],
          }
        }
      })
    })
  })
}

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault()
	let formData = Object.fromEntries(new FormData(weatherForm))
	console.log(formData)
	getWeather(formData.city)
})

comparebutton.addEventListener('click', (event) => {
	event.preventDefault()
	let formData = Object.fromEntries(new FormData(weatherForm))
	console.log(formData)
	getWeather2(formData.city)
})

getWeather(localStorage.getItem("choice"))