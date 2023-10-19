import {PageTitle} from "../../../_metronic/layout/core";
import {KTIcon} from "../../../_metronic/helpers";
import {Link} from "react-router-dom";

const ProductsPage = () => {
    return <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10 justify-content-center'>
            <div className="card">
                <div className="card-header border-0 pt-6">
                    <div className="card-title">
                        <div className="d-flex align-items-center position-relative my-1">
                            <KTIcon iconType="duotone" iconName="magnifier" className="position-absolute ms-6 fs-2"/>
                            <input type="text" id="data-kt-docs-table-filter-search" data-kt-docs-table-filter="search"
                                   className="form-control border-2 w-250px ps-14"
                                   placeholder="Search product"/>
                        </div>
                    </div>
                    <div className="card-toolbar">
                        <div className="d-flex justify-content-end" id="data-kt-docs-table-toolbar-base"
                             data-kt-docs-table-toolbar="base">
                            <Link to="/products/add" className="btn btn-light-dark me-3">
                                <KTIcon iconType="duotone" iconName="double-right" className="fs-2"/>
                                Add Product
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body pt-0">
                    <table id="kt_datatable_example_1" className="table table-row-dashed fs-6 gy-5 text-start">
                        <thead>
                        <tr className="text-start text-gray-900 fw-bolder fs-7 text-uppercase gs-0 ">
                            <th>Name</th>
                            <th>Bid Start Price</th>
                            <th>Deposit</th>
                            <th>Bid due date</th>
                            <th>Bid due payment date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-800 fw-bold">
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        {/* end::Row */}
    </>
}

const Products = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Products</PageTitle>
            <ProductsPage/>
        </>
    )
}

export {Products}
