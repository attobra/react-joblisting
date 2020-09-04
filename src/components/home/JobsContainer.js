import React, { Component } from 'react'
import JobCard from './JobCard'

export class JobsContainer extends Component {
    render() {
        return (
        <div className="job_listing_area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="section_title">
                        <h3>Job Listing</h3>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="brouse_job text-right">
                        <a href="jobs.html" className="boxed-btn4">Browse More Job</a>
                    </div>
                </div>
            </div>
            <div className="job_lists">
                <div className="row">
                     <JobCard />
                     <JobCard />
                     <JobCard />
    
                
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default JobsContainer
