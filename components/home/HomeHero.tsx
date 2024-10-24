"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import HomeHeader from "./HomeHeader"
import Link from "next/link"

// Zod schema for form validation
const formSchema = z.object({
  location: z.string().min(1, { message: "Location is required" }),
  budget: z.enum(["low", "mid", "high"], {
    errorMap: () => ({ message: "Budget is required" }),
  }),
  propertyType: z.enum(["apartment", "villa", "land"], {
    errorMap: () => ({ message: "Property type is required" }),
  }),
})

const locations = [
    "WHITEFIELD",
    "Krishnarajapura",
    "Electronic City",
    "JP Nagar",
    "CHANDAPURA",
]  

type FormSchema = z.infer<typeof formSchema>

const HomeHero = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      budget: undefined,
      propertyType: undefined,
    },
  })

  const onSubmit = (data: FormSchema) => {
    console.log("Form submitted:", data)
    // Add form submission logic here
  }

  return (
    <section className="relative bg-cover bg-no-repeat bg-start h-screen" style={{ backgroundImage: "url('/home-bg.png')" }}>
      <HomeHeader />
      
        <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto text-white md:mt-36 xl:mt-52 space-y-8">
          <div className="">
            <h1 className="text-3xl xl:text-4xl tracking-wide font-bold">Find your place <br /> of dream</h1>
            <p className="text-sm my-4">We are glad to have you around. Feel <br /> free to browse our website.</p>
            
            <button className="bg-white rounded-full">
              <Link href="/contact" className="text-lg font-bold p-3 rounded-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-80">
                Contact us
              </Link>
            </button>
          </div>

          <div className="hidden lg:flex flex-col items-end text-end w-[15rem] absolute right-20 bottom-10 text-black">
            <h1 className="text-xl tracking-wide font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 via-cyan-500  to-blue-900">Who we are</h1>
            <p className="text-xs my-2 line-clamp-4">At Indian Realtors we will assure the amount and efforts taken by our each client would be given the fullest satisfaction on their investment money and time effectively. <br /> We religiously Believe "Efficiencies will come from proactively transforming how we do business."</p>
          </div>

          <div className="hidden lg:flex items-center text-start w-[20rem] absolute left-20 bottom-10 text-black space-x-4">
            <img src="/icons/footer-media.png" alt="video" className="h-12 w-12" />
            <div className="flex flex-col items-start">
              <h5 className="text-sm italic">Watch how <span className="bg-clip-text bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-900">PropertyCrest</span> works</h5>
              <p className="text-xs text-gray-500">Presented by PropertyCrest CEO</p>
            </div>
          </div>


        </div>
    </section>
  )
}

export default HomeHero


// {/* Search Section */}
// {/* <div className="relative mt-20 w-full max-w-5xl bg-[rgba(0,0,0,0.5)] text-white px-28 rounded-lg shadow-lg">
//   {/* Icons Section */}
//   <div className="absolute left-[50%] top-0 -translate-x-[50%] -translate-y-28 grid grid-cols-6 place-items-center gap-10 bg-white text-black rounded-2xl w-[80%] px-14 py-6 my-7 mx-auto">
//       <div className="flex flex-col items-center h-full w-full text-center">
//           <img src="/home-select-1.png" alt="New Projects" className="h-10 w-10 object-contain" />
//           <p className="text-xs mt-2 font-medium text-blue-600 border-b border-blue-600">NEW PROJECTS</p>
//       </div>
//       <div className="flex flex-col items-center h-full w-full text-center">
//           <img src="/home-select-2.png" alt="Buy Properties" className="h-10 w-10 object-contain" />
//           <p className="text-xs mt-2 font-medium">BUY PROPERTIES</p>
//       </div>
//       <div className="flex flex-col items-center h-full w-full text-center">
//           <img src="/home-select-3.png" alt="Rent Properties" className="h-10 w-10 object-contain" />
//           <p className="text-xs mt-2 font-medium">RENT PROPERTIES</p>
//       </div>
//       <div className="flex flex-col items-center h-full w-full text-center">
//           <img src="/home-select-4.png" alt="PG/Hostels" className="h-10 w-10 object-contain" />
//           <p className="text-xs mt-2 font-medium">PG/HOSTELS</p>
//       </div>
//       <div className="flex flex-col items-center h-full w-full text-center">
//           <img src="/home-select-5.png" alt="Plot & Land" className="h-10 w-10 object-contain" />
//           <p className="text-xs mt-2 font-medium">PLOT & LAND</p>
//       </div>
//       <div className="flex flex-col items-center h-full w-full text-center">
//           <img src="/home-select-6.png" alt="Find Agents" className="h-10 w-10 object-contain" />
//           <p className="text-xs mt-2 font-medium">FIND AGENTS</p>
//       </div>
//   </div>

//   <Form {...form}>
//     <form onSubmit={form.handleSubmit(onSubmit)} className="opacity-100 max-w-4xl pt-20 pb-4">        
//       <div className="flex justify-between space-x-2">
//           <div className="grid grid-cols-12 bg-white text-black rounded-lg w-full">
//               {/* Location Search */}
//               <div className="col-span-6">
//                   <FormField
//                   control={form.control}
//                   name="location"
//                   render={({ field }) => (
//                       <FormItem>
//                       <FormControl>
//                           <Input placeholder="Search by location" className="uppercase placeholder:text-gray-400 py-6 outline-none shadow-none focus:outline-none border-none ring-0 rounded-none" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                       </FormItem>
//                   )}
//                   />
//               </div>


//               {/* Budget Select */}
//               <div className="col-span-3">
//                   <FormField
//                   control={form.control}
//                   name="budget"
//                   render={({ field }) => (
//                       <FormItem>
//                       <FormControl>
//                           <Select onValueChange={field.onChange}  value={field.value}>
//                               <SelectTrigger className="uppercase py-6 outline-none shadow-none focus:ring-0 rounded-none">
//                                   <SelectValue placeholder="Budget" />
//                               </SelectTrigger>
//                               <SelectContent>
//                                   <SelectItem value="low">Below 50K</SelectItem>
//                                   <SelectItem value="mid">50K - 1L</SelectItem>
//                                   <SelectItem value="high">Above 1L</SelectItem>
//                               </SelectContent>
//                           </Select>
//                       </FormControl>
//                       <FormMessage />
//                       </FormItem>
//                   )}
//                   />
//               </div>


//               {/* Property Type Select */}
//               <div className="col-span-3">
//                   <FormField
//                   control={form.control}
//                   name="propertyType"
//                   render={({ field }) => (
//                       <FormItem>
//                       <FormControl>
//                           <Select onValueChange={field.onChange} value={field.value}>
//                           <SelectTrigger className="uppercase py-6 outline-none shadow-none focus:ring-0 rounded-none">
//                               <SelectValue placeholder="Property Type" />
//                           </SelectTrigger>
//                           <SelectContent>
//                               <SelectItem value="apartment">Apartment</SelectItem>
//                               <SelectItem value="villa">Villa</SelectItem>
//                               <SelectItem value="land">Land</SelectItem>
//                           </SelectContent>
//                           </Select>
//                       </FormControl>
//                       <FormMessage />
//                       </FormItem>
//                   )}
//                   />
//               </div>
//           </div>
//           {/* Search Button */}
//           <div className="flex items-end">
//           <Button className="px-4 h-full bg-blue-500 hover:bg-blue-600 uppercase" type="submit">
//               <SearchIcon className="mr-2 h-5 w-5"/> Search
//           </Button>
//           </div>
//       </div>
//       <div className="flex items-center justify-center space-x-4 py-4 rounded-lg">
//           {/* Left Arrow */}
//           <Button variant="ghost" className="p-2 bg-black opacity-50 rounded-full">
//               <ChevronLeft className="w-6 h-6" />
//           </Button>

//           {/* Location Pills */}
//           <div className="flex space-x-4">
//               {locations.map((location, index) => (
//               <Button
//                   key={index}
//                   variant="outline"
//                   className={cn(
//                   "rounded-lg bg-white bg-opacity-40 text-white px-6 py-2 font-normal border-none",
//                   "hover:bg-opacity-40"
//                   )}
//               >
//                   {location}
//               </Button>
//               ))}
//           </div>

//           {/* Right Arrow */}
//           <Button variant="ghost" className="p-2 bg-black opacity-50 rounded-full">
//               <ChevronRight className="w-6 h-6" />
//           </Button>
//       </div>
//     </form>
//   </Form>
// // </div> */}