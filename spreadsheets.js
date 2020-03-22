const sheetId = "1Xlw2faMX2GEPSmfe7gthLgTP07I_EMleq_TX0y30ZGE";

fetch(
  `https://spreadsheets.google.com/feeds/list/${sheetId}/od6/public/values?alt=json`,
  {
    method: "GET"
  }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.feed.entry);
    const entry = data.feed.entry;
    const spreadsheet = document.querySelector("#spreadsheet");

    let table = `
                  <table class='table table-bordered'>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Available</th>
                    </tr>
                `;
    for (let i = 0; i < entry.length; i++) {
      table += `
                  <tr>
                    <td>${entry[i].gsx$name.$t}</td>
                    <td>${entry[i].gsx$description.$t}</td>
                    <td>${entry[i].gsx$price.$t}</td>
                    <td>${entry[i].gsx$available.$t}</td>
                  </tr>
               `;
    }
    table += "</table>";

    spreadsheet.innerHTML = table;
  })
  .catch(function(error) {
    console.log(error);
  });
