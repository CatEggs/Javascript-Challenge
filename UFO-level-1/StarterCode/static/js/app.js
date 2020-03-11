const input = d3.select('input')
const button = d3.select('button')
const tbody = d3.select('tbody')

function buildTable(data) {
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

const handler = function(){

    // declare input value and table data variables
    let filterCond = input.property('value');//should value be switched with placdeholder?
    let filteredData = data 

    // set condition if there is an input data then table data should match the date provided in input
    if (filterCond)
        filteredData = filteredData.filter(row => row.datetime === filterCond)
    
    tbody.html('')  // Clear existing data


    //appends data rows to table
    filteredData.forEach(dataRow =>{
        let row = tbody.append("tr")
        row.append("td").text(dataRow.datetime)
        row.append("td").text(dataRow.city)
        row.append("td").text(dataRow.state)
        row.append("td").text(dataRow.country)
        row.append("td").text(dataRow.shape)
        row.append("td").text(dataRow.durationMinutes)
        row.append("td").text(dataRow.comments)
     })
}


// //when a date is inputted, the handler function is executed
input.on("change", handler) 
button.on("click", handler)