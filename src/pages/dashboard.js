import React from 'react'
import Header from '../components/header';
import DashboardComponent from '../components/dashboard';
const Dashboard = ({ cars = [] }) => {
    return (
        <React.Fragment>
            <Header />
            <div className='container mx-auto'>
                <DashboardComponent cars={cars} />
            </div>
        </React.Fragment>

    )
}

export default Dashboard