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

const Header = () => {
  return (
    <header className="text-sm">
      <section className="container py-5 flex items-center justify-between bg-blue-500 text-white">
        <div className="flex items-center justify-between space-x-12">
          <h5 className="uppercase font-bold">Indian Realtor&apos;s</h5>

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

          <div className="space-x-2 text-xs">
            <Link href={`/`} className="text-gray-100 hover:text-white transition">Signin</Link>
            <span>|</span>
            <Link href={`/`} className="text-gray-100 hover:text-white transition">Login</Link>
          </div>
        </div>
      </section>

      <section className="container py-5 flex items-center justify-center space-x-28 font-extralight uppercase">
        <Link href={`/`} className="flex items-center text-black transition">Buy <ChevronDown/> </Link>
        <Link href={`/`} className="flex items-center text-black transition">Rent <ChevronDown/> </Link>
        <Link href={`/`} className="flex items-center text-black transition">Sell <ChevronDown/> </Link>
        <Link href={`/`} className="flex items-center text-black transition">Services <ChevronDown/> </Link>
        <Link href={`/`} className="flex items-center text-black transition">Contact Us <ChevronDown/> </Link>
      </section>
    </header>
  )
}

export default Header
