import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Layers, Search, Settings, UserCircle } from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const items = [
    {
        title: "Workspace",
        url: "#",
        icon: Layers,
    },
    {
        title: "AI Tools",
        url: "#",
        icon: Inbox,
    },
    {
        title: "My History",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Profile",
        url: "#",
        icon: UserCircle,
    },
]

export function AppSidebar() {
    const path = usePathname();
    return (
        <Sidebar>
                <SidebarHeader>
        <div className='p-4 flex items-center gap-3'>
            <Image src={'/logo.svg'} alt='logo' width={70} height={70} className='w-10 h-10' />
            <div>
                <h1 className='font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent'>
                    HireSpark-AI
                </h1>
               
            </div>
        </div>
        {/* <h2 className='text-sm text-gray-400 ml-10'>Build Awesome skills</h2> */}
    </SidebarHeader>
    <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu className='mt-2'>
                            {items.map((item, index) => (
                                // <SidebarMenuItem key={item.title} className='p-2'>
                                //     <SidebarMenuButton asChild className=''>
                                <a href={item.url} key={index} className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg ${path.includes(item.url) && 'bg-gray-200ß'}`}>
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </a>
                                //     </SidebarMenuButton>
                                // </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            
        </Sidebar>
    )
}