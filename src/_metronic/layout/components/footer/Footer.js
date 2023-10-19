/* eslint-disable react/jsx-no-target-blank */
import {useEffect} from 'react'
import {useLayout} from '../../core'

const Footer = () => {
    const {config} = useLayout()
    useEffect(() => {
        updateDOM(config)
    }, [config])
    return (
        <>
            <div className='text-dark order-2 order-md-1'>
        <span className='text-muted fw-semibold me-1'>
          2023 &copy;
        </span>
                <a
                    href='#'
                    className='text-gray-800 text-hover-primary'
                >
                    Team WAA
                </a>
            </div>
        </>
    )
}

const updateDOM = (config) => {
    if (config.app?.footer?.fixed?.desktop) {
        document.body.classList.add('data-kt-app-footer-fixed', 'true')
    }

    if (config.app?.footer?.fixed?.mobile) {
        document.body.classList.add('data-kt-app-footer-fixed-mobile', 'true')
    }
}

export {Footer}
