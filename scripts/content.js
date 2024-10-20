const current_standing_data_sheet_URL = "https://script.google.com/macros/s/AKfycbzWm2LUnAp-FYzG_00UhMAmKFzGHA3m8-ApPg3a-6zTNI2ez3HYTvYHIPhuv5DZ6bZEcA/exec";

try {
    const current_standing_data_request = await fetch(current_standing_data_sheet_URL);
    const current_standing_data = (await current_standing_data_request.json()).data;

    const HTML_table = document.getElementById("current_standing_table_body");
    console.log(current_standing_data)

    current_standing_data.forEach(data => {
        const table_row = document.createElement('tr'); // Create a table row element
        table_row.innerHTML = `
            <td>${data.batch}</td>
            <td>${data.gold}</td>
            <td>${data.silver}</td>
            <td>${data.bronze}</td>
            <td>${data.total}</td>
      
        `; 
        HTML_table.appendChild(table_row); // Append the row to the table
    });
} catch (error) {
    console.error("Error fetching data:", error);
}
