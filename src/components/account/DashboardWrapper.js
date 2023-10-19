/* eslint-disable jsx-a11y/anchor-is-valid */
import {PageTitle} from "../../_metronic/layout/core";
import {KTIcon} from "../../_metronic/helpers";
import {useEffect} from "react";

const DashboardPage = () => {
    useEffect(() => {
        const data = ["1 000$", '5']
        document.querySelectorAll(".fetch-stats")
            .forEach((el, index) => {
                setTimeout(() => {
                    el.textContent = data[index];
                }, 700)
            })
    }, []);
    return <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10 justify-content-center'>
            <div className="col-sm-12 col-md-3" data-kt-indicator="on">
                <a href="#" className="card bg-body hoverable card-xl-stretch mb-xl-8">
                    <div className="card-body p-5 text-center">
                        <KTIcon iconType="duotone" iconName="abstract-23" className="fs-3x"/>
                        <div id="requests_count" className="fetch-stats text-gray-900 fw-bolder fs-2 mb-2 mt-5">
                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </div>
                        <div className="fw-bold text-gray-400">Earnings</div>
                    </div>
                </a>
            </div>

            <div className="col-sm-12 col-md-3" data-kt-indicator="on">
                <a href="#" className="card bg-body hoverable card-xl-stretch mb-xl-8">
                    <div className="card-body p-5 text-center">
                        <KTIcon iconType="duotone" iconName="crown" className="fs-3x"/>
                        <div id="requests_count" className="fetch-stats text-gray-900 fw-bolder fs-2 mb-2 mt-5">
                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </div>
                        <div className="fw-bold text-gray-400">Products</div>
                    </div>
                </a>
            </div>
        </div>
        {/* end::Row */}
    </>
}

const DashboardWrapper = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
            <DashboardPage/>
        </>
    )
}

export {DashboardWrapper}
