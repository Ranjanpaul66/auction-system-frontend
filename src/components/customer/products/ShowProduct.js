import {PageTitle} from "../../../_metronic/layout/core";
import {useState} from "react";
import "@pqina/flip/dist/flip.min.css";
import CountDown from "../../CountDown";

const ShowProductPage = () => {
    const [product, setProduct] = useState({
        id: 1,
        imageUrl: "https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-23.jpg",
        name: "25 Products Mega Bundle with 50% off discount amazing",
        endOn: "Saturday, 21 October 2023",
        price: "28,400",
        bidders: 10
    });

    return <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10 justify-content-center'>
            <div className="card p-5 me-md-6 col-sm-12 col-md-6">
                <a className="d-block overlay" data-fslightbox="lightbox-hot-sales"
                   href="#">
                    <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                        style={{backgroundImage: `url('${product.imageUrl}')`}}>
                    </div>
                </a>

                <div className="mt-5">
                    <a href="#"
                       className="fs-4 text-dark fw-bold text-hover-primary text-dark lh-base">
                        {product.name}
                    </a>

                    <div className="fs-5 fw-bold mt-3">
                        <span className="text-muted">End on</span>
                        <span className="text-gray-700 text-hover-primary"> {product.endOn}</span>
                    </div>

                    <div className="fs-6 fw-bold mt-5 d-flex flex-stack">
                                    <span className="badge fs-2 fw-bold text-dark">
                                        <span className="fs-6 fw-semibold text-gray-400">$</span>{product.price}
                                        <span
                                            className="badge badge-circle badge-outline badge-primary ms-2 p-4">{product.bidders}</span>
                                    </span>

                        <a href="#" className="btn btn-sm btn-light-success">Bid Now</a>
                    </div>
                </div>
            </div>

            <div className="card p-5 me-md-6 col-sm-12 col-md-5">
                <CountDown value="2024-06-10T00:00:00+01:00"/>
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
