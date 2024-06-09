import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewDynamic = () => {
    const [datas,changedata]=useState(
        // {"regional":[]}
       { 
        data: { regional: []}
       }
    )
    const fetchData=()=>{
        axios.get("https://api.rootnet.in/covid19-in/stats/latest").then(
            (response)=>{
                changedata(response.data)
                console.log(response.data)
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])  
   
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">location</th>
                    <th scope="col">Confirmed cases in India</th>
                    <th scope="col">Confirmed cases in foreign</th>
                    <th scope="col">discharged</th>
                    <th>deaths</th>
                    <th>total confirmed</th>
                    </tr>
                </thead>
                {datas.data.regional.map(
                    (value,index)=>{
                        return <tbody>
                        <tr>
                          <th scope="row">{value.loc}</th>
                          <td>{value.confirmedCasesIndian}</td>
                          <td>{value.confirmedCasesForeign}</td>
                          <td>{value.discharged}</td>
                          <td>{value.deaths}</td>
                          <td>{value.totalConfirmed}</td>
                        </tr>
                        </tbody>
                    }
                )}
                </table>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewDynamic