import http from "http";

// import http from "node:http";


// const http = require("http")

console.log("Hello world")

  const data =     
{
  "hotels": [
    {
      "id" : 1,
      "name": "Osogbo Grand Hotel",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 4,
      "amenities": ["WiFi", "Swimming Pool", "Restaurant"],
      "rooms": [
        {"type": "Standard", "price": 15000},
        {"type": "Deluxe", "price": 25000}
      ]
    },
    {
      "id" : 2,
      "name": "Sunset Plaza Resort",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 3,
      "amenities": ["WiFi", "Garden", "Bar"],
      "rooms": [
        {"type": "Standard", "price": 12000},
        {"type": "Executive Suite", "price": 20000}
      ]
    },
    {
      "id" : 3,
      "name": "City Center Lodge",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 4,
      "amenities": ["WiFi", "Conference Rooms", "Fitness Center"],
      "rooms": [
        {"type": "Single", "price": 10000},
        {"type": "Double", "price": 18000}
      ]
    },
    {
      "id" : 4,
      "name": "Green Hills Retreat",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 3,
      "amenities": ["WiFi", "Mountain Views", "Spa"],
      "rooms": [
        {"type": "Standard", "price": 13000},
        {"type": "Cabin", "price": 22000}
      ]
    },
    {
      "id" : 5,
      "name": "Heritage House Hotel",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 5,
      "amenities": ["WiFi", "Historic Charm", "Fine Dining"],
      "rooms": [
        {"type": "Classic Room", "price": 18000},
        {"type": "Presidential Suite", "price": 35000}
      ]
    },
    {
      "id" : 6,
      "name": "Lakeview Lodge",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 4,
      "amenities": ["WiFi", "Lakefront Views", "Outdoor Activities"],
      "rooms": [
        {"type": "Standard", "price": 16000},
        {"type": "Luxury Suite", "price": 28000}
      ]
    },
    {
      "id" : 7,
      "name": "Golden Sands Hotel",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 3,
      "amenities": ["WiFi", "Beach Access", "Pool"],
      "rooms": [
        {"type": "Standard", "price": 14000},
        {"type": "Deluxe", "price": 24000}
      ]
    },
    {
      "id" : 8,
      "name": "City Lights Inn",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 4,
      "amenities": ["WiFi", "City Views", "Restaurant"],
      "rooms": [
        {"type": "Single", "price": 12000},
        {"type": "Double", "price": 20000}
      ]
    },
    {
      "id" : 9,
      "name": "Palm Grove Resort",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 5,
      "amenities": ["WiFi", "Palm Grove Views", "Spa"],
      "rooms": [
        {"type": "Deluxe", "price": 25000},
        {"type": "Executive Suite", "price": 40000}
      ]
    },
    {
      "id" : 10,
      "name": "Urban Oasis Hotel",
      "location": {
        "city": "Osogbo",
        "state": "Osun",
        "country": "Nigeria"
      },
      "rating": 3,
      "amenities": ["WiFi", "Gym", "Rooftop Bar"],
      "rooms": [
        {"type": "Standard", "price": 13000},
        {"type": "Penthouse Suite", "price": 30000}
      ]
    }
    
  ]
}
// console.log(req.headers, req.url, req.method)
http.createServer((req, res) => {
  
  res.setHeader(200,{'content-type': 'text/html'})
  // res.write(JSON.stringify(data))
  res.write('<html>')
  res.write('<h1>HELLO NODE</h1>')
  res.write('<h1>HELLO NODE</h1>')
  res.write('<html/>')
  
  res.end();
}).listen(8000);
// const fs = require('fs');

// // Your JSON data for 10 hotels in Osogbo
// const hotelsData = {
//   "hotels": [
//     // ... (your hotel data here)
//   ]
// };

// // Convert the JSON object to a string
// const jsonData = JSON.stringify(hotelsData, null, 2); // the 2 in the parameters adds indentation for better readability

// // Specify the file path where you want to write the JSON data
// const filePath = 'hotels_osogbo.json';

// // Write the JSON data to the file
// fs.writeFile(filePath, jsonData, (err) => {
//   if (err) {
//     console.error('Error writing JSON file:', err);
//   } else {
//     console.log('JSON data has been written to', filePath);
//   }
// });

// import http from "node"
// console.log("sam")

// http.createServer((req, res) => {
//   res.setHeader("Content- Type", "text/html");

//   res.write("<html>");
//   res.write("intro to node");
//   res.write("</html>")

//   res.end();
//   });

//   server.listen (5000)



// const http = require("http")

// const server = http.createServer((req, res) => {
//   res.setHeader("Content- Type", "text/html");

//   res.write("<html>");
//   res.write("intro to node");
//   res.write("</html>")

//   res.end();
// });

// server.listen (5000)