import {PageTitle} from "../../../_metronic/layout/core";
import {KTIcon} from "../../../_metronic/helpers";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const AddProductPage = () => {

    useEffect(() => {
        window.$("#kt_datepicker_1").flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i",
        });
    }, []);
    return <>
        <div className="card">
            <div className="card-header border-0 pt-6">
                <div className="card-title">
                </div>

                <div className="card-toolbar">
                    <Link to="/products" className="btn btn-light-dark">
                        <KTIcon iconType="duotone" iconName="double-left" className="fs-2"/>
                        Back to Products
                    </Link>
                </div>
            </div>

            <div className="card-body pt-0">
                <div className="row mb-5 justify-content-center">
                    <div className="col-sm-12 col-lg-6">
                        <form action="" method="post" id="form">
                            <div className="col-md-12 fv-row mb-5">
                                <label className="fs-5 fw-bold mb-2" htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name"/>
                            </div>

                            <div className="col-md-12 fv-row mb-5">
                                <label className="fs-5 fw-bold mb-2" htmlFor="description">Description</label>
                                <textarea id="description" className="form-control"
                                          placeholder="Description" rows='4'></textarea>
                            </div>

                            <div className="col-md-12 fv-row mb-5">
                                <label className="fs-5 fw-bold mb-2" htmlFor="description">Categories</label>
                                <select multiple className="form-select" id="floatingSelect"
                                        aria-label="Floating label select example" style={{height: '140px'}}>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="mb-10">
                                <label htmlFor="kt_datepicker_1" className="form-label">Default input style</label>
                                <input className="form-control" placeholder="Pick a date" id="kt_datepicker_1"/>
                            </div>

                            <button type="submit" className="btn btn-light-dark mt-3">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

const AddProduct = () => {
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
            <PageTitle breadcrumbs={breadcrumbs}>Add Product</PageTitle>
            <AddProductPage/>
        </>
    )
}

export {AddProduct}
