/* eslint-disable jsx-a11y/anchor-is-valid */
import {PageTitle} from "../../_metronic/layout/core";
import {KTIcon} from "../../_metronic/helpers";
import {useEffect, useRef, useState} from "react";
import {apiGet} from "../common/apiService";
import data from "bootstrap/js/src/dom/data";

const DashboardPage = () => {
    const countUpRef = useRef(null);
    const [dashboardData, setDashboardData] = useState(0);
    let countUpAnim;

    useEffect(() => {
        initCountUp(0);

        apiGet("/users/dashboard").then((response) => {
            console.log("res: ", response.data.data)
            setDashboardData(response.data.data);
            countUpAnim.update(response.data.data.balance)
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    async function initCountUp() {
        countUpAnim = new window.CountUp(countUpRef.current, 0);
        if (!countUpAnim.error) {
            countUpAnim.start();
        } else {
            console.error(countUpAnim.error);
        }
    }

    return <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10 justify-content-center'>
            <div className="col-sm-12 col-md-3" data-kt-indicator="on">
                <a href="#" className="card bg-body hoverable card-xl-stretch mb-xl-8">
                    <div className="card-body p-5 text-center">
                        <KTIcon iconType="duotone" iconName="abstract-23" className="fs-4x"/>
                        <div className="text-gray-900 fw-bolder mb-2 mt-5">
                            <span className="fs-2 fw-semibold text-gray-400">$</span>
                            <span className="fs-3x" ref={countUpRef}>0</span>
                        </div>
                        <div className="fs-3 fw-bold text-gray-400">Balance</div>
                    </div>
                </a>
            </div>

            <div className="col-sm-12 col-md-3" data-kt-indicator="on">
                <a href="#" className="card bg-body hoverable card-xl-stretch mb-xl-8">
                    <div className="card-body p-5 text-center">
                        <KTIcon iconType="duotone" iconName="crown" className="fs-4x"/>
                        <div className="fetch-stats text-gray-900 fw-bolder fs-3x mb-2 mt-5">
                            {dashboardData ? dashboardData.totalNumberOfProduct : <span className="spinner-border spinner-border-lg align-middle ms-2"></span>}
                        </div>
                        <div className="fs-3 fw-bold text-gray-400">Products</div>
                    </div>
                </a>
            </div>
        </div>
        {/* end::Row */}
    </>
}

const SellerDashboard = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
            <DashboardPage/>
        </>
    )
}

export {SellerDashboard}
