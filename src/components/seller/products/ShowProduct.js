import {PageTitle} from "../../../_metronic/layout/core";

const ShowProductPage = () => {
    return <>
        {/* begin::Row */}
        <div className='row g-5 g-xl-10 mb-5 mb-xl-10 justify-content-center'>

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