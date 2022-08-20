window.addEventListener("load",()=>{
    let longitude;
    let latitude;
    const apiKey = 'a2a669a7e02640bd9844dbde2e25de5a'

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition (position =>{
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            fetch('https://api.weatherbit.io/v2.0/current?lat='+latitude+'&lon='+longitude+'&key='+apiKey+'&lang=pt')
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data.data[0]);
                    const {country_code, timezone, temp, sunrise, sunset,city_name,datetime,clouds} = data.data[0];
                    const {icon, description} = data.data[0].weather;
                
                    let hour ;
                setInterval(()=>{
                
                    let now = new Date();
                    let hour = now.getHours() + ':' + now.getMinutes();
                },2000);

                    document.querySelector('.humidy').innerHTML = 'Nascer do sol: ' + sunrise;
                    document.querySelector('.humidy2').innerHTML = 'Pôr do sol: ' + sunrise;

                    document.querySelector('.weatherinnav p').innerHTML = hour;

                    document.querySelector(".headerc1 h3").innerHTML = city_name+ ', ' + country_code + ' ' +hour;

                    document.querySelector('.textc1 h3').innerHTML = temp + ' °';

                    document.querySelector('.textc1 h6').innerHTML = description + ' em ' + city_name;

                    document.querySelector('.icon img').src = 'https://www.weatherbit.io/static/img/icons/'+icon+'.png';

                    document.getElementById('title').innerHTML = 'Time in '+city_name;
                    document.getElementById('iconheader').href = 'https://www.weatherbit.io/static/img/icons/'+icon+'.png';
                })
        });
        document.querySelector(".headerc1 h3").innerHTML= 'Ative o seu GPS';
        //document.querySelector("img .icon").style.display = 'none';
    } 
});

/*window.addEventListener('keydown', function(e){
    if (e.key == 'Enter' && document.getElementById('search').value != '') {
        document.getElementById('search').addEventListener('change', submit());
    }
})
const submit = () =>{
    if(document.getElementById('search').value != ''){
       window.open(`https://www.google.de/search?q=${document.getElementById('search').value}`, 'blank')
    }else{}
}*/
