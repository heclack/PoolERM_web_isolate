const express = require('express');
const app = express();

const data = [
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
            }
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
            }
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
            }
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

const mockRoute ={
    "results": [
        {
            "waypoints": [
                {
                    "id": "CurrentLocation",
                    "lat": 32.97419,
                    "lng": -117.09527,
                    "sequence": 0,
                    "estimatedArrival": null,
                    "estimatedDeparture": null,
                    "fulfilledConstraints": []
                },
                {
                    "id": "0 Whale Shamu",
                    "lat": 32.7153,
                    "lng": -117.1573,
                    "sequence": 1,
                    "estimatedArrival": null,
                    "estimatedDeparture": null,
                    "fulfilledConstraints": []
                },
                {
                    "id": "1 Shipwreck Captain",
                    "lat": 32.712101,
                    "lng": -117.168759,
                    "sequence": 2,
                    "estimatedArrival": null,
                    "estimatedDeparture": null,
                    "fulfilledConstraints": []
                },
                {
                    "id": "2 Liaw Justin",
                    "lat": 32.92443691347847,
                    "lng": -117.2016432715977,
                    "sequence": 3,
                    "estimatedArrival": null,
                    "estimatedDeparture": null,
                    "fulfilledConstraints": []
                },
                {
                    "id": "Completete",
                    "lat": 32.97419,
                    "lng": -117.09527,
                    "sequence": 4,
                    "estimatedArrival": null,
                    "estimatedDeparture": null,
                    "fulfilledConstraints": []
                }
            ],
            "distance": "82816",
            "time": "4576",
            "interconnections": [
                {
                    "fromWaypoint": "CurrentLocation",
                    "toWaypoint": "0 Whale Shamu",
                    "distance": 33312.0,
                    "time": 1634.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "0 Whale Shamu",
                    "toWaypoint": "1 Shipwreck Captain",
                    "distance": 1717.0,
                    "time": 345.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "1 Shipwreck Captain",
                    "toWaypoint": "2 Liaw Justin",
                    "distance": 30191.0,
                    "time": 1554.0,
                    "rest": 0.0,
                    "waiting": 0.0
                },
                {
                    "fromWaypoint": "2 Liaw Justin",
                    "toWaypoint": "Completete",
                    "distance": 17596.0,
                    "time": 1043.0,
                    "rest": 0.0,
                    "waiting": 0.0
                }
            ],
            "description": "Targeted best time; without traffic",
            "timeBreakdown": {
                "driving": 4576,
                "service": 0,
                "rest": 0,
                "waiting": 0
            }
        }
    ],
    "errors": [],
    "processingTimeDesc": "66ms",
    "responseCode": "200",
    "warnings": null,
    "requestId": null
};

const ServicesMenu = [
    {
        "_id": "0",
        "fn": "Quote",
        "cost": "0.00",
        "slot": "30"
    },{
        "_id": "1",
        "fn": "Standard Cleaning",
        "cost": "100.00",
        "slot": "60"
    },{
        "_id": "2",
        "fn": "Deep Cleaning",
        "cost": "200.00",
        "slot": "120"
    }
];

const Employees=[
    {
        "_id": "0",
        "name":{
            "first": "Bob",
            "middle": "F",
            "last": "Racoff",
        },
        "availability":{
            "su": "1p-",
            "mo": "+",
            "tu": "+",
            "we": "+",
            "th": "-3p",
            "fr": "+",
            "sa": "-" 
        }
    }
]

app.get('/data', (req, res)=>{
    res.send(data);   
});
app.get('/mockHRO', (req, res)=>{
    res.send(mockRoute)
});
app.get('/services', (req, res)=>{
    res.send(ServicesMenu)
});
app.get('/employees', (req, res)=>{
    res.send(Employees)
})
app.listen(9999, ()=>console.log("server listening on 9999"));





