import {PageTitle} from "../../../_metronic/layout/core";
import {useEffect, useRef, useState} from "react";
import "@pqina/flip/dist/flip.min.css";
import CountDown from "../../CountDown";
import clsx from "clsx";
import {KTIcon} from "../../../_metronic/helpers";
import {Link} from "react-router-dom";

const ShowProductPage = () => {
    const [product, setProduct] = useState({
        id: 1,
        status: "Running",
        imageUrl: "https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-23.jpg",
        name: "25 Products Mega Bundle with 50% off discount amazing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        endOn: "Saturday, 21 October 2023",
        paymentEndOn: "Monday, 25 October 2023",
        price: "28,400",
        deposit: "8,400",
        highestBidAmount: "120,000",
        bidders: 10
    });

    const [bidding, setBidding] = useState([
        {
            id: 1,
            fullName: "Leona Bartlett",
            amount: "28,500",
            madeOn: "Saturday, 21 October 2023",
        },
        {
            id: 2,
            fullName: "Sahar Bruce",
            amount: "21,000",
            madeOn: "Saturday, 21 October 2023",
        },
        {
            id: 3,
            fullName: "Bilal Beltran",
            amount: "20,500",
            madeOn: "Saturday, 21 October 2023",
        },
        {
            id: 4,
            fullName: "Selina Wang",
            amount: "19,000",
            madeOn: "Saturday, 21 October 2023",
        },
        {
            id: 5,
            fullName: "Maxwell Mendoza",
            amount: "18,400",
            madeOn: "Saturday, 21 October 2023",
        }
    ]);

    const highestBidAmountRef = useRef(null);
    let highestBidAmountAnim;

    async function initHighestBidAmountCountUp() {
        highestBidAmountAnim = new window.CountUp(highestBidAmountRef.current, 10000);
        if (!highestBidAmountAnim.error) {
            highestBidAmountAnim.start();
        } else {
            console.error(highestBidAmountAnim.error);
        }
    }

    const biddersRef = useRef(null);
    let biddersAnim;

    async function initBiddersCountUp() {
        biddersAnim = new window.CountUp(biddersRef.current, product.bidders);
        if (!biddersAnim.error) {
            biddersAnim.start();
        } else {
            console.error(biddersAnim.error);
        }
    }

    useEffect(() => {
        initHighestBidAmountCountUp()
        initBiddersCountUp()
    })

    const backgrounds = ["bg-info", "bg-warning", "bg-success", "bg-dark", "bg-danger"]

    function getRandomBackground() {
        return backgrounds[Math.floor(Math.random() * 5)];
    }

    return <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10 justify-content-center'>
            <div className="col-sm-12 m-0">
                <div className="float-end">
                    <Link to="/products" className="btn btn-light-dark">
                        <KTIcon iconType="duotone" iconName="double-left" className="fs-2"/>
                        Back to Products
                    </Link>
                </div>
            </div>

            <div className="col-sm-12 col-md-7 mt-5">
                <div className="card p-5 mb-5">
                    <div className="card-body p-0">
                        <a className="d-block overlay" data-fslightbox="lightbox-hot-sales"
                           href="#">
                            <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-250px"
                                style={{backgroundImage: `url('${product.imageUrl}')`}}>
                            </div>
                        </a>

                        <div className="mt-5">
                            <a href="#"
                               className="fs-2 text-dark fw-bold text-hover-primary text-dark lh-base">
                                {product.name}
                            </a>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Description</h6>
                                <p className="fs-3">{product.description}</p>
                            </div>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Price</h6>
                                <p>
                                    <span className="fs-5 fw-semibold text-gray-400">$</span>
                                    <span className="fs-1 fw-bold">{product.price}</span>
                                </p>
                            </div>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Deposit</h6>
                                <p>
                                    <span className="fs-5 fw-semibold text-gray-400">$</span>
                                    <span className="fs-1 fw-bold">{product.deposit}</span>
                                </p>
                            </div>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Highest Bid Amount</h6>
                                <p>
                                    <span className="fs-5 fw-semibold text-gray-400">$</span>
                                    <span className="fs-1 fw-bold">{product.highestBidAmount}</span>
                                </p>
                            </div>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Bidders</h6>
                                <p>
                                    <span className="fs-1 fw-bold">{product.bidders}</span>
                                </p>
                            </div>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Bid Due Date</h6>
                                <p className="fs-3">{product.endOn}</p>
                            </div>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Bid Payment Due Date</h6>
                                <p className="fs-3">{product.endOn}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="card p-5">
                    <div className="card-header">
                        <div className="card-title">
                            <h1>Bidding History</h1>
                        </div>
                        <div className="card-toolbar">

                        </div>
                    </div>

                    <div className="card-body p-0">
                        <table id="kt_datatable_example_1"
                               className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                            <thead>
                            <tr className="text-start text-gray-900 fw-bolder fs-7 text-uppercase gs-0 ">
                                <th className="ps-9 fs-3">Full Name</th>
                                <th className="text-center fs-3">Amount</th>
                                <th className="text-center fs-3">Made On</th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-800 fw-bold">
                            {bidding.map((object) => {
                                return <>
                                    <tr className="" key={object.id}>
                                        <td className="text-center">
                                            <div className="d-flex align-items-center">
                                                <a href="#" className="symbol symbol-circle symbol-50px">
                                                    <span
                                                        className={clsx("symbol-label text-inverse-primary fw-bold fs-3", getRandomBackground())}>
                                                        {object.fullName[0]}
                                                    </span>
                                                </a>

                                                <div className="ms-5">
                                                    <a href="#"
                                                       className="text-gray-800 text-hover-primary fs-3 fw-normal"
                                                       data-kt-ecommerce-product-filter="product_name">
                                                        {object.fullName}
                                                    </a>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="text-center">
                                            <span className="fs-6 fw-semibold text-gray-400">$</span>
                                            <span className="fs-2">
                                                {object.amount}
                                            </span>
                                        </td>
                                        <td className="text-center fs-3 fw-normal">
                                            {object.madeOn}
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

            <div className="col-sm-12 col-md-5 mt-5">
                <div className="card mb-5">
                    <div className="card-body">
                        <h1 className="text-warning text-center fs-4x mb-4">{product.status}</h1>
                        <CountDown value="2024-06-10T00:00:00+01:00"/>

                        <div className="text-center">
                            <span className="fs-1 fw-semibold text-gray-400">$</span>
                            <span ref={highestBidAmountRef} className="text-gray-900 fw-bolder fs-5x mt-5">
                                0
                            </span>
                            <div className="fs-2 fw-bold text-gray-900">Maxwell Mendoza</div>
                            <div className="fs-1 fw-bold text-gray-400">Highest Bid</div>
                        </div>
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-body text-center d-flex flex-column justify-content-center">
                        <form action="">
                            <div className="col-md-12 fv-row mb-5">
                                <label className="fs-1 fw-bold mb-5" htmlFor="name">Amount</label>
                                <input autoFocus type="number" min={product.price}
                                       className="form-control form-control-lg rounded-0" id="name"
                                       placeholder="Type the amount" required/>
                            </div>

                            <button type="submit" className="btn btn-light-success btn-lg rounded-0 mt-3 col-md-12">
                                Bid Now
                            </button>
                        </form>
                    </div>
                </div>

                <div className="card me-md-6">
                    <div className="card-body text-center d-flex flex-column justify-content-center">
                        <div ref={biddersRef} className="fs-6x fw-bold">0</div>
                        <div className="fs-1 fw-semibold text-gray-400 mb-7">Bidders</div>
                        <div className="symbol-group symbol-hover justify-content-center">
                            <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                                 data-bs-original-title="Alan Warden" data-kt-initialized="1">
                                <span className="symbol-label bg-warning text-inverse-warning fw-bold">A</span>
                            </div>
                            <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                                 data-bs-original-title="Susan Redwood" data-kt-initialized="1">
                                <span className="symbol-label bg-primary text-inverse-primary fw-bold">S</span>
                            </div>
                            <div className="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip"
                                 data-bs-original-title="Perry Matthew" data-kt-initialized="1">
                                <span className="symbol-label bg-info text-inverse-info fw-bold">P</span>
                            </div>
                            <a href="#" className="symbol symbol-35px symbol-circle" data-bs-toggle="modal"
                               data-bs-target="#kt_modal_view_users">
                                <span className="symbol-label bg-dark text-gray-300 fs-8 fw-bold">+42</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* end::Row */}
    </>
}

const ShowProduct = () => {
    const breadcrumbs = [
        {
            title: 'Products',
            path: '/products',
            isSeparator: false,
            isActive: false,
        },
        {
            title: '',
            path: '',
            isSeparator: true,
            isActive: false,
        },
    ]
    return (
        <>
            <PageTitle breadcrumbs={breadcrumbs}>View Product</PageTitle>
            <ShowProductPage/>
        </>
    )
}

export {ShowProduct}
