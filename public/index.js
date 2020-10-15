// import axios from "axios";

const succescallback = async (position) => {
    await addItemToDB(position);
    console.log("position", position)
}
const errorcallback = (error) => {
    console.error(error);
}
navigator.geolocation.watchPosition(succescallback, errorcallback)

async function addItemToDB(location) {

console.log("location is " , location.coords)
    await axios({
        method: 'post',  
        url: "http://localhost:3000/get",
        headers: {}, 
        data: {
          
            "location": JSON.stringify(location)
        }
    })
}

