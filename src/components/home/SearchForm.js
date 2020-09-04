import React, { Component } from 'react'

export class SearchForm extends Component {
    render() {
        return (
            <div>
    <div className="catagory_area">
        <div className="container">
            <div className="row cat_search">
                <div className="col-lg-3 col-md-4">
                    <div className="single_input">
                        <input type="text" placeholder="Search keyword" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="single_input">
                        <select className="wide" >
                            <option data-display="Location">Location</option>
                            <option value="1">United States</option>
                            <option value="2">Canada</option>
                            <option value="4">India</option>
                          </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="single_input">
                        <select className="wide">
                            <option data-display="Category">Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="4">Category 3</option>
                          </select>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    {/* <div className="job_btn">
                        <a href="#" className="boxed-btn3">Find Job</a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
            </div>
        )
    }
}

export default SearchForm
