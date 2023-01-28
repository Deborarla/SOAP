var soap = require('soap')
var url = 'http://www.gcomputer.net/webservices/dilbert.asmx?wsdl'
soap.createClient(url, function(err, client){
    if(err) return console.log (err)
    console.log(client)
})