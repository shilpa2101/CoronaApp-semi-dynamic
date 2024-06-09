import React, { useState } from 'react'

const AddDetails = () => {
    const [cdata,changedata]=useState(
        {
            "name":"",
            "loc":"",
            "gen":"",
            "bg":""

        }
    )
    const inputHeader=(event)=>{
        changedata({...cdata,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(cdata)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={cdata.name} onChange={inputHeader} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Location</label>
                            <input type="text" className="form-control" name='loc' value={cdata.loc} onChange={inputHeader}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">gender</label><br/>
                            <label htmlFor="" className="form-label">Male</label>
                            <input type="radio" name="gen" value="male" id="male" onChange={inputHeader} checked={cdata.gen=='male'} />
                            <span style={{ marginRight:'5px'}}></span>
                            <label htmlFor="" className="form-label">Female</label>
                            <input type="radio" name="gen" value="female" id="female" onChange={inputHeader} checked={cdata.gen=='female'} />
                            <span style={{marginRight : '7px'}}></span>
                            <label htmlFor="" className="form-label">Others</label>
                            <input type="radio" name="gen" value="others" id="others" onChange={inputHeader}  checked={cdata.gen=='others'} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Blood Group</label>
                            <select name="bg" value={cdata.bg} onChange={inputHeader} id="" className="form-control">
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="O+">O+</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDetails