import React from 'react'
import Chart from './Chart';
import data from './Data'
import Datacard from './Datacard'
import Progresschart from './Progresschart';
import './Dashboard.css'


function Dashboard() {
  return (
    <div className='container-fluid'>
      <h1 className='dashboardtitle'>Dashboard</h1>
      <div className="row">
        {data.map((value) => {
          return (
            <Datacard
              key={value.id}
              name={value.name}
              icon={value.icon}
              progress={value.progress}
              content={value.content}
              color={value.color}
            />
          );
        })}
      </div>

      <div className="charts">
        <Chart />
      </div>

      <div className="row">
        <div className="col-6">
          <Progresschart />
        </div>

        <div className="col-6">
          <Illustration />
        </div>

      </div>
    </div>
  )
}

function Illustration() {
  return (
    <div id="illustration-datacards" className='card'>

      <div className="card-header">
        Illustration
      </div>

      <div className="card-body">

        <div className='illustration-image'>
          <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="illustrative iamge" />
        </div>

        <div className="illustration-info">
          <p>
            The teacher and student data which are displayed for the Admin purpose, We can Create,Read,Update,Delete the data of the student and teacher management.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Dashboard