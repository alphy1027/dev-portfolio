import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { OpenSidebar } from './SidebarAndHeader'

export default function SidebarMenuIcon({ openSidebar }: { openSidebar: OpenSidebar }) {
    return (
        <Button onClick={openSidebar} variant="ghost" size="sm" className="md:hidden p-space-2 rounded-surface-radius" ><Menu className="size-8 text-foreground-body" /></Button>
    )
}
