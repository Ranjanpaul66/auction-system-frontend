import {PageTitle} from "../../../_metronic/layout/core";
import {KTIcon} from "../../../_metronic/helpers";
import {Link} from "react-router-dom";
import {useState} from "react";
import clsx from "clsx";

const ProductsPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            status: "Running",
            imageUrl: "https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-23.jpg",
            name: "25 Products Mega Bundle with 50% off discount amazing",
            endOn: "Saturday, 21 October 2023",
            paymentEndOn: "Monday, 25 October 2023",
            price: "28,400",
            deposit: "4,500",
            highestBidAmount: "120,000",
            bidders: 10
        },
        {
            id: 2,
            status: "Closed",
            imageUrl: "https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x600/img-14.jpg",
            name: "Admin Panel - How To Started the Dashboard Tutorial",
            endOn: "Sunday, 25 October 2023",
            paymentEndOn: "Tuesday, 30 October 2023",
            price: "38,000",
            deposit: "5,000",
            highestBidAmount: "100,000",
            bidders: 0
        },
        {
            id: 3,
            status: "Sold",
            imageUrl: "https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-71.jpg",
            name: "Any occasion, any time, we have everything you'll ever need.",
            endOn: "Monday, 05 December 2023",
            paymentEndOn: "Friday, 08 December 2023",
            price: "50,000",
            deposit: "10,000",
            highestBidAmount: "70,000",
            bidders: 80
        }
    ])

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
                            <th>Bid Due Payment Date</th>
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
                                        <span className="fs-6 fw-semibold text-gray-400">$</span>{object.price}
                                    </td>
                                    <td className="text-center pe-0" data-order="23">
                                        <span className="fs-6 fw-semibold text-gray-400">$</span>{object.deposit}
                                    </td>
                                    <td className="text-center pe-0" data-order="23">
                                        <span
                                            className="fs-6 fw-semibold text-gray-400">$</span>{object.highestBidAmount}
                                    </td>
                                    <td className="pe-0">
                                        {object.endOn}
                                    </td>
                                    <td className="pe-0">
                                        {object.paymentEndOn}
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
                    <div className="row">
                        <div
                            className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                        </div>
                        <div
                            className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                            <div className="dataTables_paginate paging_simple_numbers"
                                 id="kt_ecommerce_products_table_paginate">
                                <ul className="pagination">
                                    <li className="paginate_button page-item previous disabled"
                                        id="kt_ecommerce_products_table_previous">
                                        <a href="#"
                                           aria-controls="kt_ecommerce_products_table"
                                           data-dt-idx="0" tabIndex="0"
                                           className="page-link"><i
                                            className="previous"></i>
                                        </a>
                                    </li>
                                    <li className="paginate_button page-item active">
                                        <a href="#"
                                           aria-controls="kt_ecommerce_products_table"
                                           data-dt-idx="1" tabIndex="0"
                                           className="page-link">1
                                        </a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#"
                                           aria-controls="kt_ecommerce_products_table"
                                           data-dt-idx="2" tabIndex="0"
                                           className="page-link">2
                                        </a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#"
                                           aria-controls="kt_ecommerce_products_table"
                                           data-dt-idx="3" tabIndex="0"
                                           className="page-link">3
                                        </a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#"
                                           aria-controls="kt_ecommerce_products_table"
                                           data-dt-idx="4" tabIndex="0"
                                           className="page-link">4
                                        </a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                        <a href="#"
                                           aria-controls="kt_ecommerce_products_table"
                                           data-dt-idx="5" tabIndex="0"
                                           className="page-link">5
                                        </a>
                                    </li>
                                    <li className="paginate_button page-item next"
                                        id="kt_ecommerce_products_table_next">
                                        <a href="#"
                                           aria-controls="kt_ecommerce_products_table"
                                           data-dt-idx="6" tabIndex="0"
                                           className="page-link">
                                            <i className="next"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
