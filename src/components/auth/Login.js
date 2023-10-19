import {useEffect, useState} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'

import {initPasswordShowHide, setTitle} from "./AuthHelpers";

export function Login() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        initPasswordShowHide()

        setTitle("Sign In")
    }, []);

    function handleSubmit(e) {
    }

    return (
        <form
            className='form w-100'
            onSubmit={handleSubmit}
            noValidate
            id='kt_login_signin_form'
        >
            {/* begin::Heading */}
            <div className='text-center mb-11'>
                <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
                <div className='text-gray-500 fw-semibold fs-6'>Your next prized possession is just a bid away – get
                    ready to bid, win, and
                    conquer with our one-of-a-kind auction app !
                </div>
            </div>
            {/* begin::Heading */}

            {/* begin::Form group */}
            <div className='fv-row mb-8'>
                <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
                <input
                    placeholder='Email'
                    className={clsx(
                        'form-control bg-transparent',
                        {'is-invalid': false},
                        {
                            'is-valid': false,
                        }
                    )}
                    type='email'
                    name='email'
                    autoComplete='off'
                />
                {false && (
                    <div className='fv-plugins-message-container'>
                        <span role='alert'>{}</span>
                    </div>
                )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group */}
            <div className='fv-row mb-3' data-kt-password-meter="true">
                <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
                <div className="position-relative">
                    <input
                        type='password'
                        placeholder='Password'
                        autoComplete='off'
                        className={clsx(
                            'form-control bg-transparent',
                            {
                                'is-invalid': false,
                            },
                            {
                                'is-valid': false,
                            }
                        )}
                    />
                    <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                          data-kt-password-meter-control="visibility">
											<i className="ki-duotone ki-eye fs-3x">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                            </i>
                                            <i className="ki-duotone ki-eye-slash fs-3x d-none">
                                                <span className="path1"></span>
                                                <span className="path2"></span>
                                                <span className="path3"></span>
                                                <span className="path4"></span>
                                            </i>
                    </span>
                </div>
                {false && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                            <span role='alert'>{}</span>
                        </div>
                    </div>
                )}
            </div>
            {/* end::Form group */}

            {/* begin::Wrapper */}
            <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
                <div/>

                {/* begin::Link */}
                <Link to='/auth/forgot-password' className='link-primary'>
                    Forgot Password ?
                </Link>
                {/* end::Link */}
            </div>
            {/* end::Wrapper */}

            {/* begin::Action */}
            <div className='d-grid mb-10'>
                <button
                    type='submit'
                    id='kt_sign_in_submit'
                    className='btn btn-primary'
                    disabled={false}
                >
                    {!loading && <span className='indicator-label'>Continue</span>}
                    {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                    )}
                </button>
            </div>
            {/* end::Action */}

            <div className='text-gray-500 text-center fw-semibold fs-6'>
                Not a Member yet?{' '}
                <Link to='/auth/registration' className='link-primary'>
                    Sign up
                </Link>
            </div>
        </form>
    )
}
