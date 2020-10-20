import React, { Component } from "react";

import { connect } from "react-redux";

import { searchJob, fetchJobs, setLoading } from "../../actions/searchActions";

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchJob(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchJobs(this.props.text);
    this.props.setLoading();
    console.log(this.props.fetchJobs(this.props.text));
  };

  render() {
    return (
      <div>
        <div className="catagory_area">
          <div className="container">
            {/* form added */}
            <form onSubmit={this.onSubmit}>
              <div className="row cat_search">
                <div className="col-lg-3 col-md-4">
                  <div className="single_input">
                    <input
                      type="text"
                      placeholder="Search keyword"
                      //   value={this.description || ""}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="single_input">
                    <input
                      type="text"
                      placeholder="Location"
                      //   value={this.location || ""}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  {/* <div className="single_input">
                    <input 
                    type="checkbox" 
                    label = "full time only"
                    onChange={this.onChange}
                    />
                        
                    </div> */}
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="job_btn">
                    <button type="submit" className="boxed-btn3">
                      Find Job
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.jobs.text,
});

export default connect(mapStateToProps, { searchJob, fetchJobs, setLoading })(
  SearchForm
);
