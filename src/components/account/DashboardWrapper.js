/* eslint-disable jsx-a11y/anchor-is-valid */
import {PageTitle} from "../../_metronic/layout/core";

const DashboardPage = () => (
    <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
            {/* begin::Col */}
            <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>

            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className='col-xxl-6'>
            </div>
            {/* end::Col */}
        </div>
        {/* end::Row */}
    </>
)

const DashboardWrapper = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
            <DashboardPage/>
        </>
    )
}

export {DashboardWrapper}
