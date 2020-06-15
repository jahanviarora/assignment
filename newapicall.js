async function getData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
let name = [];
getData("https://api.covid19api.com/summary", {}).then((data) => {
  let countriesDetails = data.Countries;
  console.log(countriesDetails);
  name.push(countriesDetails);

  var html = "<table border='1px'; padding :4px 4px>";
  html += "<tr>";
  html += "<th>Country Name</th>";
  html += "<th>New Confirmed</th>";
  html += "<th>New Deaths</th>";
  html += "<th>New Recovered</th>";
  html += "<th>Total Confirmed</th>";
  html += "<th>Total Deaths</th>";
  html += "<th>Total Recovered </th>";
  html += "</tr>";
  for (var i = 0; i < countriesDetails.length; i++) {
    html += "<td>" + countriesDetails[i].Country + "</td>";
    html += "<td>" + countriesDetails[i].NewConfirmed + "</td>";
    html += "<td>+" + countriesDetails[i].NewDeaths + "</td>";
    html += "<td>" + countriesDetails[i].NewRecovered + "</td>";
    html += "<td>" + countriesDetails[i].TotalConfirmed + "</td>";
    html += "<td>" + countriesDetails[i].TotalDeaths + "</td>";
    html += "<td>" + countriesDetails[i].TotalRecovered + "</td>";
    html += "</tr>";
  }
  html += "</table>";
  document.getElementById("data").innerHTML = html;

});

var chart = c3.generate({
  data: {
      columns: [
          ['total confired', 3000, 2000, 1900, 4000, 1500, 2500],
          ['total deaths', 130, 500, 400, 1900, 490, 1000]
      ],
      type: 'bar'
  },
  bar: {
      width: {
          ratio: 0.5 
      }
     
  }
});
