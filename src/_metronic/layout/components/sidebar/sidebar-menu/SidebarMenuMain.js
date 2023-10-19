/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
    return (
        <>
            <SidebarMenuItem
                to='/dashboard'
                icon='element-11'
                title="Dashboard"
                fontIcon='bi-app-indicator'
            />
            <SidebarMenuItem to='/builder' icon='switch' title='Layout Builder' fontIcon='bi-layers'/>
        </>
    )
}

export {SidebarMenuMain}
