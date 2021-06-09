
import {ApiKey} from './protected';
import * as needle from 'needle';

const GetAppointments=(today = "Th", date="6/4/21")=>{
    console.log("this data is hardcoded and needs to be replaced before production");        //DEV TO PROD WARNING L10 & L25
    const filterAppointments=(appointments)=>{     
        return ((appointments.type=="r" && appointments.date == today)||(appointments.type=="s" && appointments.dte == date))
    };
    const extractAppointments=(customers)=>{
        return new Promise((resolve, reject)=>{
            let appointmentQueue= customers.filter((customer)=>{
                let app = customer.appointments.upcoming.filter(appt=>filterAppointments(appt));
                return app.length > 0;
            });
            console.log(appointmentQueue);
            let stops = appointmentQueue.map((customer, ind)=>{
                let coords = `${customer.address.service.geo.lat},${customer.address.service.geo.lon}`;
                let id = `${customer._id}+${customer.name.last}+${customer.name.first}`;
                return `&destination${ind+1}=${id};${coords}`
            })
            return resolve(stops)
        })
    };
    return needle('get', 'http://localhost:3000/data').then(response=>extractAppointments(response.body)).then(appointments=>appointments).catch(err=>console.log(err));
};

const OpRoute=async(init, ...appointments)=>{
    try{
        let start, finish;    
        if(!init.test(/[0-9, ]/g)){
            let query = await init.split(" ,").join(",").split(",").join("2%c").split(" ").join("+");
            let response = await needle('get', `https://geocode.search.hereapi.com/v1/geocode?q=${query}&apiKey=${API}`);
            let position = await response.body.data.items[0].position;
            start = `${position.lat},${position.lng}`;
        }else{
            start = init
        };
        let finsih = await start;
        let url = `https://wse.ls.hereapi.com/2/findsequence.json?start=CurrentLocation;${start}${appointments.join()}&end=Completete;${finish}&mode=fastest;car&apiKey=${API}`;
        let response = await needle('get', url);
        let data = await response.body;
        console.log(data);
        return data
    }catch(err){
        console.log(err)
    };
    
};
export default {GetAppointments, OpRoute};