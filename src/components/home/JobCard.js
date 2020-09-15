import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class JobCard extends Component {
    render() {
        const {job} = this.props
        return (
            <div className="col-lg-12 col-md-12">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img className="company-logo" src={job.company_logo} alt="company logo" />
                                </div>
                                <div className="jobs_conetent">
                                    <Link to={'/job/' + job.id}><h4>{job.title}</h4></Link>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i> {job.location}</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i> {job.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    {/* <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a> */}
                                    <Link to={'/job/' + job.id} className="boxed-btn3">Apply Now</Link>
                                </div>
                                <div className="date">
                                    <p>Date line: {job.created_at}</p>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default JobCard
