import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

const reasons = [
  {
    image: "/appartment-1.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr"
  },
  {
    image: "/appartment-2.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr"
  },
  {
    image: "/appartment-3.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr"
  },
  {
    image: "/appartment-4.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr"
  },
  {
    image: "/appartment-1.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr"
  },
  {
    image: "/appartment-2.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr"
  },
  {
    image: "/appartment-3.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr"
  },
  {
    image: "/appartment-4.png",
    title: "Hatha Svasthya Mandala",
    description: "2, 3, 4 BHK Apartment in Harlur Road, Bangalore East",
    price: "₹ 2.87 - 2.91 Cr"
  },
]

const AppartmentsList = () => {~1
  return (
    <section className="lg:px-20 xl:px-36 py-20 text-center">
      <h2 className="text-xl font-bold mb-4">APARTMENTS, VILLAS AND MORE</h2>
      <p className="text-gray-500 text-xs capitalize max-w-md mx-auto mb-8">
        in Bangalore
      </p>

      <div className="w-full">
        <Carousel>
          <CarouselContent>
              {reasons.map((reason, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                    <Card
                      key={index}
                      className={cn(
                        "p-0 text-center hover:shadow-xl transition-shadow rounded-lg border-none duration-300 overflow-hidden"
                      )}
                    >
                      <CardContent className="p-0">
                        <img
                          src={reason.image}
                          alt={reason.title}
                          className="mx-auto h-full w-full"
                        />
                      </CardContent>
                    </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default AppartmentsList;