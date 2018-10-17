const soap = require('soap');

const url = 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx?wsdl';
const args = {
    byProvinceName: '山西'
}

let soaptest = ()=>{
    soap.createClient(url,(err,client)=>{
        client.getSupportCity(args,(err,result)=>{
           console.log(JSON.stringify(result))
        })
        client.getWeatherbyCityName({theCityName:'太原'},(err,result)=>{
            console.log(JSON.stringify(result))
        })
    })
};

soaptest();