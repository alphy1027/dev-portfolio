"use client"
import MobileSidebar from '@/components/sidebar/MobileSidebar'
import Header from '../Header'
import { Activity, useState } from 'react'

export type OpenSidebar = () => void
export type CloseSidebar = () => void
export type Open = boolean

export default function SidebarAndHeader() {
    const [open, setOpen] = useState(false)

    const openSidebar: OpenSidebar = () => {
        setOpen(true)
    }

    const closeSidebar: CloseSidebar = () => {
        setOpen(false)
    }

    return (
        <>
            <Header openSidebar={openSidebar} />
            <Activity mode={open ? "visible" : "hidden"}>
                <MobileSidebar closeSidebar={closeSidebar} />
            </Activity>
        </>
    )
}
