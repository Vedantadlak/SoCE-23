import React from 'react'
import './Styles/teams.css'
const PastTeams = () => {

    return (
        <div className='pastTeams'>
            <div className="container" id="strength">
                <div className="row str">
                    <div className="pastHeading" >
                        <h1>Past Teams</h1>
                    </div>
                </div>
                {/* <div className='row d-flex justify-content-around'> */}
                <div onClick={() => {
                    window.location = '/team/team20'
                }} className="row d-flex justify-content-around past-div">
                    <div className="col-5 team-card past-team-year">
                        <h1 className="text-center">Team 2020</h1>

                    </div>
                    <div onClick={() => {
                        window.location = '/team/team21'
                    }} className="col-5 team-card past-team-year">
                        <h1 className="text-center">Team 2021</h1>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default PastTeams