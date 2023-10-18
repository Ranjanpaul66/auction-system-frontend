import {useEffect, useState} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {setTitle} from "../utils";

export function ForgotPassword() {
    const [loading, setLoading] = useState(false)
    const [hasErrors, setHasErrors] = useState(undefined)

    useEffect(() => {
        setTitle("Forgot Password")
    }, []);

    function handleSubmit() {
    }

    return (
        <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            noValidate
            id='kt_login_password_reset_form'
            onSubmit={handleSubmit}
        >
            <div className='text-center mb-10'>
                {/* begin::Title */}
                <h1 className='text-dark fw-bolder mb-3'>Forgot Password ?</h1>
                {/* end::Title */}

                {/* begin::Link */}
                <div className='text-gray-500 fw-semibold fs-6'>
                    Enter your email to reset your password.
                </div>
                {/* end::Link */}
            </div>

            {/* begin::Title */}
            {hasErrors === true && (
                <div className='mb-lg-15 alert alert-danger'>
                    <div className='alert-text font-weight-bold'>
                        Sorry, looks like there are some errors detected, please try again.
                    </div>
                </div>
            )}

            {hasErrors === false && (
                <div className='mb-10 bg-light-info p-8 rounded'>
                    <div className='text-info'>Sent password reset. Please check your email</div>
                </div>
            )}
            {/* end::Title */}

            {/* begin::Form group */}
            <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
                <input
                    type='email'
                    placeholder=''
                    autoComplete='off'
                    className={clsx(
                        'form-control bg-transparent',
                        {'is-invalid': false},
                        {
                            'is-valid': false,
                        }
                    )}
                />
                {false && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                            <span role='alert'>{}</span>
                        </div>
                    </div>
                )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group */}
            <div className='d-flex flex-wrap justify-content-center pb-lg-0'>
                <button type='submit' id='kt_password_reset_submit' className='btn btn-primary me-4'>
                    <span className='indicator-label'>Submit</span>
                    {loading && (
                        <span className='indicator-progress'>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                    )}
                </button>
                <Link to='/auth/login'>
                    <button
                        type='button'
                        id='kt_login_password_reset_form_cancel_button'
                        className='btn btn-light'
                        disabled={false}
                    >
                        Cancel
                    </button>
                </Link>{' '}
            </div>
            {/* end::Form group */}
        </form>
    )
}
