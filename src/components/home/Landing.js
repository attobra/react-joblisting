import React, { Component } from 'react'
import {connect} from 'react-redux'

import SearchForm from './SearchForm'
import JobsContainer from './JobsContainer'
import Spinner from '../layout/Spinner'


export class Landing extends Component {
    render() {
        const {loading} = this.props
        return (
            <div>
                <SearchForm />
                {loading ? <Spinner /> : <JobsContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.jobs.loading
})

export default connect(mapStateToProps)(Landing)
