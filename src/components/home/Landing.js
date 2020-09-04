import React, { Component } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SearchForm from './SearchForm'
import JobsContainer from './JobsContainer'


export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchForm />
                <JobsContainer />
                <Footer />
            </div>
        )
    }
}
