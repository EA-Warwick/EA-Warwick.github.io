
    // --- Your Google Sheets API Configuration ---
    const apiKey2 = 'AIzaSyATtIvq3zCcVc_ajLONllczSHdNxn_TswY'; // Replace with your API Key
    const sheetID2 = '1vB8KctmcEYQW-_p1jXt1fbyfuNMXSWj4ss9buViom8c'; // Replace with your Google Sheet ID
    const sheetName2 = 'Closed opportunities'; // Replace with the name of your sheet/tab

    // The API URL
    const apiURL2 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID2}/values/${sheetName2}?key=${apiKey2}`;

    const tableContainer2 = document.getElementById('closed_opportunities');

    // Fetch the data from the Google Sheet
    fetch(apiURL2)
        .then(response => response.json())
        .then(data => {
			 console.log('API Response:', data);
            if (!data.values) {
                tableContainer2.innerHTML = '<p>No opportunities found.</p>';
                return;
            }

            // Create the table structure
            const table = document.createElement('table');
            table.className = "alt"
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            // --- Create Table Header ---
            const headerRow = document.createElement('tr');
            const headers = data.values[0]; // Assumes the first row is the header
			headers.splice(4,1)
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);

            // --- Create Table Body ---
            const dataRows = data.values.slice(1); // All rows except the header
            dataRows.forEach(rowData => {
                let counter = 1;
				const row = document.createElement('tr');
                rowData.forEach(cellData => {
                   	
					const td = document.createElement('td');
                    if (counter==4 && cellData && rowData[0]){
						const link = document.createElement("a");
						link.href=cellData;
						link.textContent=rowData[4];
						td.appendChild(link);
						row.appendChild(td)
					}else if (counter==5 && cellData &&rowData[0]){
						
					}else if (rowData[0]){
						td.textContent = cellData;
						row.appendChild(td)
					}else{}
					counter++;
					
                });
                tbody.appendChild(row);
            });

            // Assemble the table and add it to the page
            table.appendChild(thead);
            table.appendChild(tbody);
            tableContainer2.appendChild(table);
            
        })
        .catch(error => {
            console.error('Error fetching Google Sheet data:', error);
            tableContainer2.innerHTML = '<p>Sorry, there was an error loading the opportunities.</p>';
        });




