import React, {useMemo, useState, useEffect} from "react";
import 'bulma/css/bulma.css';
import needle from "needle";
const DummyData = [
    {
    "_id": 0,
    "name": {
        "first": "Shamu",
        "middle": "the",
        "last": "Whale"
    },
    "address": {
        "service": {
            "street1": "5000 Seaworld Dr",
            "city": "San Diego",
            "state": "California",
            "zip": "92128",
            "geo": {
                "lat": 32.7153,
                "lon": -117.1573
            },
            "phone": "555-555-5555"
        },
        "billing": {
            "street1": "5000 Seaworld Dr",
            "city": "San Diego",
            "state": "California",
            "zip": "92128",
        }
    },
    "appointments":{
        "upcoming":[
            {
                "type": "r",
                "date": "Th",
                "services":[1, 5, 7]
            },
            {
                "type":"s",
                "date": "6/4/2021",
                "services":[9] 
            }

        ],
        "history":{
            "1/11/2021":{
                "start": "2:54pm",
                "end": "3:34pm",
                "billingCode": [1, 5, 7],
                "notes":"routine",
                "servicedBy": "employeeA",
            }
        }
    },
    "status": 1
},
{
    "_id": 1,
    "name": {
        "first": "Captain",
        "middle": "ARRRGH",
        "last": "Shipwreck",
    },
    "address": {
        "service": {
            "street1": "Seaport Village Dr",
            "city": "San Diego",
            "state": "California",
            "zip": "92101",
            "geo": {
                "lat": 32.712101,
                "lon": -117.168759
            },
            "phone": "555-555-5555"
        },
        "billing": {
            "street1": "Seaport Village Dr",
            "city": "San Diego",
            "state": "California",
            "zip": "92101",
        }
    },
    "appointments":{
        "upcoming":[
            {
                "type": "r",
                "date": "Th",
                "services":[1, 5, 7]
            }
        ],
        "history":{
            "1/11/2021":{
                "start": "11:54am",
                "end": "1:34pm",
                "billingCode": [1, 5, 7],
                "notes":"Dead squirrel in Pool",
                "servicedBy": "employeeB",
            }
        }
    },
    "status": 1
},
{
    "_id": 2,
    "name": {
        "first": "Justin",
        "middle": "Sentas",
        "last": "Liaw",
    },
    "address": {
        "service": {
            "street1": "5409 Harvest Run Dr",
            "city": "San Diego",
            "state": "California",
            "zip": "92130",
            "geo": {
                "lat": 32.92443691347847,
                "lon": -117.2016432715977
            },
            "phone": "555-555-5555"
        },
        "billing": {
            "street1": "5409 Harvest Run Dr",
            "city": "San Diego",
            "state": "California",
            "zip": "92130",
        }
    },
    "appointments":{
        "upcoming":[
            {
                "type": "r",
                "date": "Th",
                "services":[1, 5, 7]
            }
        ],
        "history":{
            "1/11/2021":{
                "start": "3:54pm",
                "end": "4:34pm",
                "billingCode": [1, 5, 7],
                "notes":"",
                "servicedBy": "employeeA",
            }
        }
    },
    "status": 1
}];
const TableItem = (props)=>{
    const [customer, setCustomer] = useState(props.customer);
    const cols = [
        customer["name"]["first"],
        customer["name"]["last"],
        customer["service"]["phone"],
        customer["appointments"],
        customer["history"]
    ]
    return(
            <tr>
                {cols.map(col=> <td>{col}</td>)}
            </tr>
        )
};
const getCustomers=()=>{
    return new Promise((resolve, reject)=>{
        needle('get', 'http://localhost:9999/data').then((response)=>{
            return resolve(response.body)
        }).catch((err)=>{
            return reject(err)
        })
    })
};

const Customer=(props)=>{
    const [customers, setCustomers] = useState({});
    useEffect(()=>{
        setCustomers(DummyData)
    }, );
    const column = ["First", "Last", "Phone", "Appointments", "History"];
    return(
        <div>
            <table className="table">
                <thead>
                    {column.map(col=><tr>{col}</tr>)}
                </thead>
                <tbody>
                    {DummyData.map(customer=>customer)}
     
                    
                </tbody>
            </table>
        </div>
    )
};
export default Customer;
