import React, { Component } from 'react'
import {connect} from 'react-redux'

import JobCard from './JobCard'

export class JobsContainer extends Component {
    render() {

        const {jobs} = this.props
        let content=''

        content = jobs.Response == 'True'
        ? jobs.Search.map((job, index) => <JobCard key={index} job={job} />)
        : null

        //shows undefined as jobs.Response
        // console.log(jobs.Response)

        return (
        <div className="job_listing_area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="section_title">
                        <h3>Job Listing</h3>
                    </div>
                </div>
                {/* <div className="col-lg-6">
                    <div className="brouse_job text-right">
                        <a href="jobs.html" className="boxed-btn4">Browse More Job</a>
                    </div>
                </div> */}
            </div>
            <div className="job_lists">
                <div className="row">
                     {content}
    
                </div>
            </div>
        </div>
    </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs.jobs
})

export default connect(mapStateToProps)(JobsContainer)
