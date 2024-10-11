"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectGroup } from "@radix-ui/react-select"
import { ChevronDown } from "lucide-react"

import Link from 'next/link'
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="text-sm w-full">
      <section className="px-4 md:px-20 py-5 w-screen flex items-center justify-between bg-blue-500 text-white">
        <div className="flex items-center justify-between space-x-12">
          <Link href={`/`} className="uppercase font-bold">Indian Realtor&apos;s</Link>

          <Select>
            <SelectTrigger className="w-[130px] border-none uppercase outline-none shadow-none focus:ring-0">
              <SelectValue placeholder="Banglore" defaultValue={`banglore`} className="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="banglore">Banglore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                <SelectItem value="new-delhi">New Delhi</SelectItem>
                <SelectItem value="noida">Noida</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between space-x-8">
          <Link href={`/post-property`} className="px-2 py-2 text-xs text-black bg-white">
            Post Property <span className="px-2 py-1 text-white bg-green-500 font-semibold rounded-sm ml-1">free</span>
          </Link>

          <div className="space-x-2 text-sm">
            <Link href={`/`} className="text-gray-100 hover:text-white transition">Signin</Link>
            <span>|</span>
            <Link href={`/`} className="text-gray-100 hover:text-white transition">Login</Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20 py-5 flex items-center justify-center space-x-28 font-normal uppercase">
          <Link href={`/about`} className={`flex items-center tracking-wider ${pathname === '/about' ? 'text-blue-500' : ''}`}>About Us</Link>
          <Link href={`/properties`} className={`flex items-center tracking-wider ${pathname === '/properties' ? 'text-blue-500' : ''}`}>Properties</Link>
          <Link href={`/appartments`} className={`flex items-center tracking-wider ${pathname === '/appartments' ? 'text-blue-500' : ''}`}>Appartments</Link>
          <Link href={`/contact`} className={`flex items-center tracking-wider ${pathname === '/contact' ? 'text-blue-500' : ''}`}>Contact us</Link>
          <Link href={`/features`} className={`flex items-center tracking-wider ${pathname === '/features' ? 'text-blue-500' : ''}`}>Features</Link>
      </section>
    </header>
  )
}

export default Header
