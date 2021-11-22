const request = require('request');

const json={
    "nombre": "Diana Lizeth",
    "apellido": "Marrufo Gaspar"
};
response.post({
    url:"http://localhost:3002/users",
    doby:json,
    json:true,
}, function(error,response,body){
    console.log(body);
});