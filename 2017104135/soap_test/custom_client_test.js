const soap = require('soap');

const url = 'http://192.168.2.79:8080/HelloWorld?wsdl';

let soaptest = ()=>{
    soap.createClient(url,(err,client)=>{
        client.sayHello({parameters:'Hello from node-soap'},(err,result)=>{
            console.log(result);
        })
    })
};

soaptest();
