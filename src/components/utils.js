export const setTitle = (title) => {
    document.title = `${title} - Oktion`;
}

export const initPasswordShowHide = () => {
    const elements = document.querySelectorAll("[data-kt-password-meter]");
    for (const element of elements) {
        let inputElement = element.querySelector("input[type]")
        let visibilityElement = element.querySelector('[data-kt-password-meter-control="visibility"]')

        if (visibilityElement) {
            visibilityElement.addEventListener('click', (ev) => {
                if (visibilityElement && inputElement) {
                    const visibleIcon = visibilityElement.querySelector('i:not(.d-none)')

                    const hiddenIcon = visibilityElement.querySelector('i.d-none')

                    const typeAttr = inputElement.getAttribute('type') || ''
                    console.log(typeAttr)
                    if (typeAttr === 'password') {
                        inputElement.setAttribute('type', 'text')
                    } else {
                        inputElement.setAttribute('type', 'password')
                    }

                    visibleIcon?.classList.add('d-none')
                    hiddenIcon?.classList.remove('d-none')

                    inputElement.focus()
                }
            })
        }
    }
}