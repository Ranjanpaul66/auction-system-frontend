import {PageTitle} from "../../../_metronic/layout/core";
import {KTIcon} from "../../../_metronic/helpers";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const AddProductPage = () => {
    const [categories, setCategories] = useState([
        {
            "id": "1",
            "name": "Computer & Network"
        },
        {
            "id": "2",
            "name": "Logistics"
        }
    ])

    useEffect(() => {
        window.$(".date-time").flatpickr({
            enableTime: true,
            altInput: true,
            minDate: 'today',
            minTime: `${(new Date()).getHours()}:${(new Date()).getMinutes()}`,
            altFormat: "l, d F h:i K",
            dateFormat: "Y-m-d H:i",
        });

        window.$("#categories").select2({
            placeholder: 'Select categories'
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
                                <label className="fs-5 fw-bold mb-2" htmlFor="categories">Categories</label>
                                <select data-control="select2" multiple="multiple" className="form-select"
                                        id="categories">
                                    {categories.map((object) => {
                                        return <option value={object.id} key={object.id}>{object.name}</option>;
                                    })}
                                </select>
                            </div>

                            <div className="col-md-12 fv-row mb-5">
                                <label className="fs-5 fw-bold mb-2" htmlFor="name">Bid Start Price</label>
                                <input type="number" className="form-control" id="name" placeholder="Bid Start Price"/>
                            </div>

                            <div className="col-md-12 fv-row mb-5">
                                <label className="fs-5 fw-bold mb-2" htmlFor="name">Bid Deposit Amount</label>
                                <input type="number" className="form-control" id="name"
                                       placeholder="Bid Deposit Amount"/>
                            </div>

                            <div className="col-md-12 fv-row mb-5">
                                <label htmlFor="bid_due_date" className="fs-5 fw-bold mb-2">Bid Due Date</label>
                                <input className="form-control date-time" placeholder="Pick a date" id="bid_due_date"/>
                            </div>

                            <div className="col-md-12 fv-row mb-5">
                                <label htmlFor="bid_payment_due_date" className="fs-5 fw-bold mb-2">Bid Payment Due
                                    Date</label>
                                <input className="form-control date-time" placeholder="Pick a date"
                                       id="bid_payment_due_date"/>
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
