import {useEffect, useState} from "react";
import {KTIcon} from "../../../_metronic/helpers";
import {PageTitle} from "../../../_metronic/layout/core";
import {Link} from "react-router-dom";
import {apiGet} from "../../common/apiService";
import clsx from "clsx";

const ProductsPage = () => {

    useEffect(() => {

        apiGet(`/customers/product`).then((response) => {
            setProducts(response.data.data);
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, []);

    const [products, setProducts] = useState([
        /*{
            id: 1,
            imageUrl: "https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-23.jpg",
            name: "25 Products Mega Bundle with 50% off discount amazing",
            endOn: "Saturday, 21 October 2023",
            price: "28,400",
            bidders: 10
        },
        {
            id: 2,
            imageUrl: "https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x600/img-14.jpg",
            name: "Admin Panel - How To Started the Dashboard Tutorial",
            endOn: "Sunday, 25 October 2023",
            price: "38,000",
            bidders: 100
        },
        {
            id: 3,
            imageUrl: "https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-71.jpg",
            name: "Any occasion, any time, we have everything you'll ever need.",
            endOn: "Monday, 05 December 2023",
            price: "50,000",
            bidders: 80
        }
    */])
    return <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10 justify-content-center'>
            <div className="card p-0 bg-transparent border-0 shadow-none">
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
                        </div>
                    </div>
                </div>
                <div className="card-body row">
                    {products.map((object) => {
                        return <>
                            <div className="col-sm-12 col-md-4">
                                <div className="card p-5 me-md-6" key={object.id}>
                                    <Link className="d-block overlay" data-fslightbox="lightbox-hot-sales"
                                          to={`/products/show/${object.id}`}>
                                        <div
                                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px"
                                            style={{backgroundImage: `url('https://preview.keenthemes.com/metronic8/demo1/assets/media/stock/600x400/img-23.jpg')`}}>
                                        </div>
                                    </Link>

                                    <div className="mt-5">
                                        <Link to={`/products/show/${object.id}`}
                                              className="fs-4 text-dark fw-bold text-hover-primary text-dark lh-base">
                                            {object.name}
                                        </Link>

                                        <div className="fs-5 fw-bold mt-3">
                                            <span className="text-muted">End on</span>
                                            <span
                                                className="text-gray-700 text-hover-primary">  {new Date(object?.bidDueDate).toLocaleString()}</span>
                                        </div>

                                        <div
                                            className={clsx('badge badge-lg mb-2', object.status === "Running" ? "badge-light-warning" : (object.status === "Closed" ? "badge-light-danger" : "badge-light-success"))}>
                                            {object.status}
                                        </div>

                                        <div className="fs-6 fw-bold mt-5 d-flex flex-stack">
                                    <span className="badge fs-2 fw-bold text-dark">
                                        <span className="fs-6 fw-semibold text-gray-400">$</span>{object?.price}
                                        <span
                                            className="badge badge-circle badge-outline badge-primary ms-2 p-4">{object?.bidders}</span>
                                    </span>

                                            <Link to={`/products/show/1`} className="btn btn-sm btn-light-success">
                                                Bid Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>;
                    })}
                </div>
            </div>
        </div>
        {/* end::Row */}
    </>
}

const Products = () => {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Products </PageTitle>
            <ProductsPage/>
        </>
    )
}

export {Products}
