import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {fetchJob, setLoading} from '../../actions/searchActions'
import Spinner from '../layout/Spinner'

export class Job extends Component {
    componentDidMount(){
        this.props.fetchJob(this.props.match.params.id)
        this.props.setLoading()
    }


    render() {
        const {loading, job} = this.props
        let jobInfo = (
            <div>
    
    <div className="bradcam_area bradcam_bg_1">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>{job.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="row">
        <div className="col-md-12">
            <Link to='/' className="submit_btn">
                <button className="boxed-btn3 w-100" type="submit">Go Back to Search</button>
            </Link>
        </div>
    </div>
    
    <div className="job_details_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="job_details_header">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src={job.company_logo} alt=""/>
                                </div>
                                <div className="jobs_conetent">
                                    <a 
                                    href={job.company_url}
                                    ><h4>{job.title}</h4></a>
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
                            
                        </div>
                    </div>
                    <div className="descript_wrap white-bg">
                        <div className="single_wrap">
                            <h4>Job description</h4>
                            {job.description}
                        </div>
                        
                    </div>
                    <div className="apply_job_form white-bg">
                        <h4>Apply for the job</h4>
                        {job.how_to_apply}
                        <form action="#">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="submit_btn">
                                        <a
                                        href={job.company_url}
                                        className="boxed-btn3 w-100" 
                                        >
                                        Apply Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="job_sumary">
                        <div className="summery_header">
                            <h3>Job Summary</h3>
                        </div>
                        <div className="job_content">
                            <ul>
                                <li>Published on: <span>{job.created_at}</span></li>
                                <li>Company: <span>{job.company}</span></li>
                                
                                <li>Location: <span>{job.location}</span></li>
                                <li>Job Nature: <span>{job.type} </span></li>
                            </ul>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>

            </div>

        )
        let content = loading ? <Spinner /> : jobInfo;

        return <div> {content}</div>
    }
}

const mapStateToProps = state =>({
    loading: state.jobs.loading,
    job: state.jobs.job
})

export default connect (mapStateToProps, {fetchJob, setLoading})(Job)
