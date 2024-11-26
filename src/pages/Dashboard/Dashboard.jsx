import React from 'react'
import HOC from '../../components/HOC/HOC'
import TopDashboard from './TopDashboard'
import MiddleDashboard from './MiddleDashboard'
import BottomDashboard from './BottomDashboard'

const Dashboard = () => {
    return (
        <>
            <div className='dashboardcontainer'>
                <div className='dashboardtoppart'>
                    <TopDashboard />
                </div>
                <div className='dashboardmiddlepart'>
                    <MiddleDashboard />
                </div>
                <div className='dashboardbottompart'>
                    <BottomDashboard />
                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)