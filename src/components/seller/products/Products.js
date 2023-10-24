import {PageTitle} from "../../../_metronic/layout/core";
import {KTIcon} from "../../../_metronic/helpers";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {apiGet} from "../../common/apiService";

const ProductsPage = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        apiGet("/products").then((response) => {
            setProducts(response.data.data);
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, []);
    

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
                    <table id="kt_datatable_example_1"
                           className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                        <thead>
                        <tr className="text-start text-gray-900 fw-bolder fs-7 text-uppercase gs-0 ">
                            <th style={{width: '30%'}}>Name</th>
                            <th>Status</th>
                            <th>Bid Start Price</th>
                            <th>Deposit</th>
                            <th>Highest Bid</th>
                            <th>Bid Due Date</th>
                            <th>Bid Payment Due Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-800 fw-bold">
                        {products.map((object) => {
                            return <>
                                <tr className="">
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <a href="#" className="symbol symbol-50px">
                                        <span className="symbol-label"
                                              style={{backgroundImage: `url(${object.imageUrl})`}}></span>
                                            </a>

                                            <div className="ms-5">
                                                <a href="#" className="text-gray-800 text-hover-primary fs-5 fw-bold"
                                                   data-kt-ecommerce-product-filter="product_name">
                                                    {object.name}
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-center pe-0">
                                        <div
                                            className={clsx('badge badge-lg mb-2', object.status === "Running" ? "badge-light-warning" : (object.status === "Closed" ? "badge-light-danger" : "badge-light-success"))}>
                                            {object.status}
                                        </div>
                                        {object.bidders > 0 &&
                                            <>
                                                <br/>
                                                <span
                                                    className="badge badge-circle badge-outline badge-primary ms-2 p-4">
                                                    {object.bidders}
                                                </span>
                                            </>}
                                    </td>
                                    <td className="text-center pe-0" data-order="23">
                                        <span className="fs-6 fw-semibold text-gray-400">$</span>{object.bidStartingPrice}
                                    </td>
                                    <td className="text-center pe-0" data-order="23">
                                        <span className="fs-6 fw-semibold text-gray-400">$</span>{object.deposit}
                                    </td>
                                    <td className="text-center pe-0" data-order="23">
                                        <span
                                            className="fs-6 fw-semibold text-gray-400">$</span>{object.highestBidAmount}
                                    </td>
                                    <td className="pe-0">
                                        {/*{object.bidDueDate }*/}
                                        {new Date(object.bidDueDate).toLocaleString()}
                                    </td>
                                    <td className="pe-0">
                                        {/*{object.biddingPaymentDueDate}*/}
                                        {new Date(object.biddingPaymentDueDate).toLocaleString()}

                                    </td>
                                    <td className="text-end">
                                        <button
                                            className="btn btn-sm btn-light btn-flex btn-center btn-active-light-success"
                                            data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            Actions
                                            <i className="ki-duotone ki-down fs-5 ms-1"></i>
                                        </button>
                                        <div
                                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                            data-kt-menu="true">
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">
                                                    Edit
                                                </a>
                                            </div>

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">
                                                    View
                                                </a>
                                            </div>

                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">
                                                    Release
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </>
                        })}

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
