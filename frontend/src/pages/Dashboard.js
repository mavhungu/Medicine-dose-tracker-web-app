import React from 'react';
import Wrapper from '../component/Wrapper';
import {Calendar} from 'react-feather';
import './Dashboard.css';
import Ronewa from './Ronewa'


const Dashboard =()=> {

  return (
    <Wrapper>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 text-muted">Dashboard</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"><Calendar className="feather"/></span>
              This week
            </button>
          </div>
      </div>

      <Ronewa className="my-4 w-100" style={{width:"900",height:"180"}} />
    </Wrapper>
  )
}

export default Dashboard
