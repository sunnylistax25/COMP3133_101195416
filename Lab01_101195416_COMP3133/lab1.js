const fs = require('fs')
const parse = require('csv-parser')


//Part a

fs.unlink('canada.txt', (err) => {
    if (err) {
        console.log(err)
        return
    }         
    console.log('File deleted')
})
fs.unlink('usa.txt', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File deleted')
})
let csvData = []
let canadaData = ''
let usaData = ''
fs.createReadStream('input_countries.csv').pipe(parse({ delimiter: ',' })).on
    ('data', function (csvRow) {
        //console.log(csvRow)
        csvData.push(csvRow)
    }).on('end', function () {
        for (x in csvData) {
            if (csvData[x].country == 'Canada') {
                canadaData = `${csvData[x].country}, ${csvData[x].year}, ${csvData[x].population} \n`
                fs.appendFile('canada.txt', canadaData, (err) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('Data written successfully...')
                })


                // canadaData = csvData[x]
                //  console.log(canadaData)

            }
            if (csvData[x].country == 'United States') {
                usaData = `${csvData[x].country}, ${csvData[x].year}, ${csvData[x].population} \n`
                fs.appendFile('usa.txt', usaData, (err) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('Data written successfully...')
                })
            }
        }
    });







