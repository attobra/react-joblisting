import React, { Component } from 'react'

export class JobCard extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src="img/svg_icon/1.svg" alt="" />
                                </div>
                                <div className="jobs_conetent">
                                    <a href="job_details.html"><h4>Software Engineer</h4></a>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i> California, USA</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i> Part-time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    {/* <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a> */}
                                    <a href="job_details.html" className="boxed-btn3">Apply Now</a>
                                </div>
                                <div className="date">
                                    <p>Date line: 31 Jan 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default JobCard
