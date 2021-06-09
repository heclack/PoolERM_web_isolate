import React, {useMemo, useEffect} from "react";
import {useState, State} from '@hookstate/core';
import 'bulma/css/bulma.css';
import * as needle from 'needle';
import useSWR from 'swr';

const formatData=(customer)=>{
    let {address, name, status, _id} = customer;
    return({
        id: _id,
        fname: `${name.first} ${name.middle[0]}`,
        lname: name.last,
        street1: address.service.street1,
        street2: address.service.street2,
        city: address.service.city,
        zip: address.service.zip,
        status: status  
    })
};

const TableItem = ({id, fname, lname, street1, street2, city, zip, status})=>{
    let [_id, setId] = useState(id);
    let [_fname, setFname] = useState(fname);
    let [_lname, setLname] = useState(lname);
    let [_street1, setStreet1] = useState(street1);
    let [_street2, setStreet2] = useState(street2);
    let [_city, setCity] = useState(city);
    let [_zip, setZip] = useState(zip);
    let [_status, setStatus] = useState(status);
    return(
            <tr>
                <td>{_id}</td>
                <td>{_fname}</td>
                <td>{_lname}</td>
                <td>{_street1}</td>
                <td>{_street2}</td>
                <td>{_city}</td>
                <td>{_zip}</td>
                <td>{_status}</td>
            </tr>
        )
    };
    const fetcher = url => needle('get', url).then((response=>response.body)); 
    export default function Customer(){
        const {data, error} = useSWR('http://localhost:9999', fetcher);
        const column = ["id","FirstName", "LastName", "Address", "Apt/Ste", "City", "Zip","Status"];
        const display = useEffect(()=>{
            if(error){
                return <p>Error</p>
            }else if(!data){
                return <p>...Loading</p>
            }else{
                return data.map(customer=>{
                    let cust = formatData(customer);
                    return TableItem(cust)
                })
            }
        }, [data]);
    return(
        <div>
            <table className="table">
                <thead>
                    {column.map(col=><th>{col}</th>)}
                </thead>
                <tbody>
                    {display}
                </tbody>
            </table>
        </div>
    )
    
    
};
