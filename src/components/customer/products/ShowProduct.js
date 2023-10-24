import {PageTitle} from "../../../_metronic/layout/core";
import {useEffect, useRef, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import "@pqina/flip/dist/flip.min.css";
import CountDown from "../../CountDown";
import clsx from "clsx";
import {KTIcon} from "../../../_metronic/helpers";
import {apiGet, apiPost} from "../../common/apiService";

const ShowProductPage = () => {
    const {id} = useParams();
    const [bidAmount, setBidAmount] = useState(0);
    const [minBidAmount, setMinBidAmount] = useState(0);

    const [product, setProduct] = useState({});
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

    const [loading, setLoading] = useState(false)

    const highestBidAmountRef = useRef(null);
    const [highestBidAmountAnim, sethighestBidAmountAnim] = useState()

    const biddersRef = useRef(null);
    const [biddersAnim, setBiddersAnim] = useState()

    useEffect(() => {
        initHighestBidAmountCountUp()
        initBiddersCountUp()
        fetchProduct()
    }, []);

    async function initHighestBidAmountCountUp() {
        const anim = new window.CountUp(highestBidAmountRef.current, 0);
        sethighestBidAmountAnim(anim)
        if (!anim.error) {
            anim.start();
        } else {
            console.error(anim.error);
        }
    }

    async function initBiddersCountUp() {
        const anim = new window.CountUp(biddersRef.current, 0)
        setBiddersAnim(anim);
        if (!anim.error) {
            anim.start();
        } else {
            console.error(anim.error);
        }
    }

    useEffect(() => {
        updateBidAmount()
        updateHighestBidCounter()
    }, [product]);

    function updateBidAmount() {
        let localMinBidAmount = 0
        if (product) {
            localMinBidAmount = (product.highestBidAmount > 0 ? product.highestBidAmount : product.bidStartingPrice) + 1
            setMinBidAmount(localMinBidAmount)
        }
        if (bidAmount <= localMinBidAmount) {
            setBidAmount(localMinBidAmount)
        }
    }

    function increaseBidAmount() {
        if (bidAmount) {
            setBidAmount(bidAmount + 500)
        } else {
            setBidAmount(500)
        }
    }

    function decreaseBidAmount() {
        const amount = bidAmount - 500;
        if (amount > minBidAmount) {
            setBidAmount(bidAmount - 500)
        } else {
            setBidAmount(minBidAmount)
        }
    }

    async function fetchProduct() {
        apiGet(`/products/${id}`).then((response) => {
            setProduct(response.data.data);
            if (response.data.data.highestBidAmount) {
                fetchBidHistory()
            }
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    async function fetchBidHistory() {
        apiGet(`/bidding/product/${id}`).then((response) => {
            console.log(response.data.data)
            setBidding(response.data.data);
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        updateHighestBidCounter()
    }, [minBidAmount]);

    function updateHighestBidCounter() {
        if (highestBidAmountAnim) {
            highestBidAmountAnim.update(minBidAmount)
        }
    }

    useEffect(() => {
        updateBiddersCounter()
    }, [bidding]);

    function updateBiddersCounter() {
        if (biddersAnim) {
            biddersAnim.update(bidding.length)
        }
    }

    const backgrounds = ["bg-info", "bg-warning", "bg-success", "bg-dark", "bg-danger"]

    function getRandomBackground() {
        return backgrounds[Math.floor(Math.random() * 5)];
    }

    function statusTextColor() {
        switch (product.status) {
            case "Running":
                return "text-warning"
            case "Closed":
                return "text-danger"
            case "Sold":
                return "text-success"
            default:
                return "text-info"
        }
    }

    function onSubmit(event) {
        event.preventDefault()
        setLoading(true)
        apiPost("/bidding", {"productId": product.id, "amount": bidAmount})
            .then((res) => {
                console.log(res)

                fetchProduct()
            }).finally(() => {
            setLoading(false)
        })
    }

    return <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10 justify-content-center'>
            <div className="col-sm-12 mt-5">
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
                                style={{backgroundImage: `url("https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-23.jpg")`}}>
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
                                <h6 className="fs-4 text-muted">Starting Price</h6>
                                <p>
                                    <span className="fs-5 fw-semibold text-gray-400">$</span>
                                    <span
                                        className="fs-1 fw-bold">{product.bidStartingPrice && product.bidStartingPrice.toLocaleString('en-US')}</span>
                                </p>
                            </div>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Deposit</h6>
                                <p>
                                    <span className="fs-5 fw-semibold text-gray-400">$</span>
                                    <span
                                        className="fs-1 fw-bold">{product.deposit && product.deposit.toLocaleString('en-US')}</span>
                                </p>
                            </div>

                            {product.highestBidAmount > 0 &&
                                <div className="col-md-12 mt-5">
                                    <h6 className="fs-4 text-muted">Highest Bid Amount</h6>
                                    <p>
                                        <span className="fs-5 fw-semibold text-gray-400">$</span>
                                        <span
                                            className="fs-1 fw-bold">{product.highestBidAmount && product.highestBidAmount.toLocaleString('en-US')}</span>
                                    </p>
                                </div>}

                            {product.bidders > 0 &&
                                <div className="col-md-12 mt-5">
                                    <h6 className="fs-4 text-muted">Bidders</h6>
                                    <p>
                                        <span className="fs-1 fw-bold">{product.bidders}</span>
                                    </p>
                                </div>}

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Bid Due Date</h6>
                                <p className="fs-3">{(new Date(product.bidDueDate)).toLocaleString('en-us', {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                })}</p>
                            </div>

                            <div className="col-md-12 mt-5">
                                <h6 className="fs-4 text-muted">Bid Payment Due Date</h6>
                                <p className="fs-3">{(new Date(product.biddingPaymentDueDate)).toLocaleString('en-us', {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                })}</p>
                            </div>
                        </div>

                    </div>
                </div>

                {product.highestBidAmount > 0 &&
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
                }
            </div>

            <div className="col-sm-12 col-md-5 mt-5">
                <div className="card mb-5">
                    <div className="card-body">
                        <h1 className={clsx("text-center fs-4x mb-4", statusTextColor())}>
                            {product.status}
                        </h1>
                        {product.bidDueDate && <CountDown value={product.bidDueDate}/>}

                        <div className="text-center">
                            <span className="fs-1 fw-semibold text-gray-400">$</span>
                            <span ref={highestBidAmountRef} className="text-gray-900 fw-bolder fs-5x mt-5">
                                0
                            </span>
                            {product.highestBidAmount > 0 &&
                                <div className="fs-2 fw-bold text-gray-900">Maxwell Mendoza</div>}
                            <div
                                className="fs-1 fw-bold text-gray-400">{product.highestBidAmount > 0 ? "Highest Bid" : "Starting Price"}</div>
                        </div>
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-body text-center d-flex flex-column justify-content-center">
                        <form action="" onSubmit={onSubmit}>
                            <div className="col-md-12 fv-row mb-5">
                                <label className="fs-1 fw-bold mb-1" htmlFor="name">Amount</label>
                                {product.highestBidAmount === 0 && <div className="mb-5">
                                    <span className="text-muted text-start fs-5 fw-semibold">Be the first to bid this product</span>
                                </div>}
                                <div className="input-group rounded-0">
                                    <span onClick={decreaseBidAmount} className="input-group-text bg-hover-warning">
                                        <KTIcon iconType="duotone" iconName="minus-circle"
                                                className="fs-3x text-dark"/>
                                    </span>
                                    <input autoFocus type="number"
                                           disabled={loading}
                                           min={minBidAmount}
                                           value={bidAmount}
                                           onChange={(event) => {
                                               setBidAmount(parseInt(event.target.value))
                                           }}
                                           className="form-control form-control-lg rounded-0 fs-2x" id="name"
                                           placeholder="Type the amount" required/>
                                    <span onClick={increaseBidAmount} className="input-group-text bg-hover-success">
                                        <KTIcon iconType="duotone" iconName="plus-circle" className="fs-3x text-dark"/>
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-light-success btn-lg rounded-0 col-md-12">
                                {!loading && <span className='indicator-label'>Bid Now</span>}
                                {loading && (
                                    <span className='indicator-progress' style={{display: 'block'}}>
                                        Submitting...
                                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                    </span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="card me-md-6">
                    <div className="card-body text-center d-flex flex-column justify-content-center">
                        <div ref={biddersRef} className="fs-6x fw-bold">0</div>
                        <div className="fs-1 fw-semibold text-gray-400 mb-7">Bidders</div>
                        {product.highestBidAmount > 0 &&
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
                        }
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
