// Import stylesheets
// import './style.css';

const url = "https://m.fiu.edu/feeds//transit/v1/json.php?section=parking";
const url2 = "https://patcount.fiu.edu/garagecount.xml";
// Write Javascript code!
const appDiv = document.getElementById('app');

fetch
(url)
.then
(
  function(data)
  {
    console.log(data);
    return data.json();
  }
)
.then
(
  function jsonObject(json)
  {
    console.log(json);
    for(let i = 0; i < json.length; i++)
    {
      if(json[i].StudentSpaces < 0)
      {
        json[i].StudentSpaces = 0;
      }
      if(json[i].OtherSpaces < 0)
      {
        json[i].OtherSpaces = 0;
      }
      appDiv.innerHTML += "<br>";
      
      appDiv.innerHTML += '<h1>Garage : '+json[i].GarageName+'<h1>';
      console.log("Garage : " + json[i].GarageName);
      appDiv.innerHTML += "<br>";
      appDiv.innerHTML += '<b>Student Parking Spots Taken : '+json[i].StudentSpaces+'<b>';
      console.log("Student Parking Spots Taken : " + json[i].StudentSpaces);
      appDiv.innerHTML += "<br>";
      appDiv.innerHTML += '<b>Total Student Parking Spots : '+json[i].StudentMax+'<b>';
      console.log("Total Student Parking Spots : " + json[i].StudentMax);
      appDiv.innerHTML += "<br>";
      appDiv.innerHTML += '<h3 style="color:red"><b>Student Parking Spots left: '+(json[i].StudentMax - json[i].StudentSpaces)+'<b></h3>';
      console.log("Total Student Parking Spots : " + json[i].StudentMax);
      appDiv.innerHTML += "<br>";
      appDiv.innerHTML += '<b>Employee Parking Spots Taken : '+json[i].OtherSpaces+'<b>';
      console.log("Employee Parking Spots Taken : " + json[i].OtherSpaces);
      appDiv.innerHTML += "<br>";
      appDiv.innerHTML += '<b>Total Employee Parking Spots : '+json[i].OtherMax+'<b>';
      console.log("Total Employee Parking Spots : " + json[i].OtherMax);
      appDiv.innerHTML += "<br>";
      appDiv.innerHTML += '<h3 style="color:red"><b>Faculty Parking Spots left: '+(json[i].OtherMax - json[i].OtherSpaces)+'<b></h3>';
      console.log("Total Student Parking Spots : " + json[i].StudentMax);
      appDiv.innerHTML += "<br>";
      //appDiv.innerHTML += '<b>'+json[i].asofstamp+'<b>';
      //appDiv.innerHTML += "<br>";
      console.log("Epoch timestamp not displayed: " + json[i].asofstamp);
      appDiv.innerHTML += '<b>Checked on '+json[i].asof+'<b>';
      console.log("Checked on :  " + json[i].asof);
      appDiv.innerHTML += "<br>";
      appDiv.innerHTML += '<b>Student Parking : '+json[i].StudentFull+' Full<b>';
      console.log("Student Parking % Full : " + json[i].StudentFull);
      appDiv.innerHTML += "<br>";
      appDiv.innerHTML += '<b>Employee Parking : '+json[i].OtherFull+' Full<b>';
      console.log("Employee Parking % Full : " + json[i].OtherFull);
      appDiv.innerHTML += "<br>";
      console.log("-----------------------------------------------------");
    }
  }
)
.catch
(
  function() 
  {
    // This is where you run code if the server returns any errors
    console.log("ERROR!")
  }
);














/*

Pg1 : -18 parking spots
Pg2 : -8






*/
