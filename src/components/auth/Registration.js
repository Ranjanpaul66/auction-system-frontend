import {useEffect, useState} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'

import {initPasswordShowHide, setTitle} from "./AuthHelpers";


export function Registration() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        initPasswordShowHide()
        setTitle("Sign Up")
    }, []);

    function handleSubmit() {
    }

    return (
        <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            noValidate
            id='kt_login_signup_form'
            onSubmit={handleSubmit}
        >
            {/* begin::Heading */}
            <div className='text-center mb-11'>
                {/* begin::Title */}
                <h1 className='text-dark fw-bolder mb-3'>Sign Up</h1>
                {/* end::Title */}

                <div className='text-gray-500 fw-semibold fs-6'>Your next prized possession is just a bid away – get
                    ready to bid, win, and
                    conquer with our one-of-a-kind auction app !
                </div>
            </div>
            {/* end::Heading */}

            {/* begin::Form group Firstname */}
            <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>First name</label>
                <input
                    placeholder='First name'
                    type='text'
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
                {false && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                            <span role='alert'>{}</span>
                        </div>
                    </div>
                )}
            </div>
            {/* end::Form group */}
            <div className='fv-row mb-8'>
                {/* begin::Form group Lastname */}
                <label className='form-label fw-bolder text-dark fs-6'>Last name</label>
                <input
                    placeholder='Last name'
                    type='text'
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
                {false && (
                    <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                            <span role='alert'>{}</span>
                        </div>
                    </div>
                )}
                {/* end::Form group */}
            </div>

            {/* begin::Form group Email */}
            <div className='fv-row mb-8'>
                <label className='form-label fw-bolder text-dark fs-6'>Email</label>
                <input
                    placeholder='Email'
                    type='email'
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

            {/* begin::Form group Password */}
            <div className='fv-row mb-8' data-kt-password-meter='true'>
                <div className='mb-1'>
                    <label className='form-label fw-bolder text-dark fs-6'>Password</label>
                    <div className='position-relative mb-3'>
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
                <div className='text-muted'>
                    Use 8 or more characters with a mix of letters, numbers & symbols.
                </div>
            </div>
            {/* end::Form group */}

            {/* begin::Form group Confirm password */}
            <div className='fv-row mb-5' data-kt-password-meter="true">
                <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
                <div className="position-relative">
                    <input
                        type='password'
                        placeholder='Password confirmation'
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

            {/* begin::Form group */}
            <div className='fv-row mb-8'>
                <label className='form-check form-check-inline' htmlFor='kt_login_toc_agree'>
                    <input
                        className='form-check-input'
                        type='checkbox'
                        id='kt_login_toc_agree'
                    />
                    <span>
            I Accept the{' '}
                        <a
                            href='#'
                            target='_blank'
                            className='ms-1 link-primary'
                        >
              Terms
            </a>
            .
          </span>
                </label>
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
            <div className='text-center'>
                <button
                    type='submit'
                    id='kt_sign_up_submit'
                    className='btn btn-lg btn-primary w-100 mb-5'
                    disabled={false}
                >
                    {!loading && <span className='indicator-label'>Submit</span>}
                    {loading && (
                        <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...{' '}
                            <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
                    )}
                </button>
                <Link to='/auth/login'>
                    <button
                        type='button'
                        id='kt_login_signup_form_cancel_button'
                        className='btn btn-lg btn-light-primary w-100 mb-5'
                    >
                        Cancel
                    </button>
                </Link>
            </div>
            {/* end::Form group */}
        </form>
    )
}
