const input = d3.select('#datetime')
const button = d3.selectAll('#filter-btn')

const handler = function(input){

    const filterCond = input.property('value');//should value be switched with placdeholder?

    const table = d3.select("body").append("table")

    //add headers to table
    const headerRow = table.append("thead").append("tr")
    headerRow.append("th").text("Date/Time")
    headerRow.append("th").text("City")
    headerRow.append("th").text("State")
    headerRow.append("th").text("Country")
    headerRow.append("th").text("Shape")
    headerRow.append("th").text("Duration In Mins")
    headerRow.append("th").text("Comments")

    //add rows of data to table
    const tbody = table.append("tbody")

    //filter rows to match the value in the inputted condition
    //so if filter condition = TRUE the rows that match will 
    //appear in table
    data.filter(dataRow => dataRow.datetime === filterCond).data.forEach(dataRow =>{
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