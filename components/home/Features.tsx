import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const properties = [
  {
    image: "/f-1.png",
  },
  {
    image: "/f-2.png",
  },
  {
    image: "/f-3.png",
  },
  {
    image: "/f-4.png",
  },
  {
    image: "/f-1.png",
  },
  {
    image: "/f-2.png",
  },
  {
    image: "/f-3.png",
  },
  {
    image: "/f-4.png",
  },
]

const Features = () => {~1
  return (
    <section className="lg:max-w-4xl xl:max-w-5xl mx-auto py-12 text-center">
      <h2 className="text-xl font-bold mb-4">EVERYTHING YOU NEED AT ONE PLACE</h2>
      <p className="text-gray-500 text-xs capitalize max-w-md mx-auto mb-8">
      IN-HOUSE SERVICES
      </p>

      <div className="grid grid-cols-4 gap-1 bg-gray-200 p-1">
        {properties.map((property, index) => (
          <div key={index}>
              <Card
                className={cn(
                  "p-4 text-center shadow-none rounded-none duration-300"
                )}
              >
                <CardContent className="flex flex-col items-start bg-white p-4">
                  <img
                    src={property.image}
                    alt={property.image}
                    className="mx-auto h-48 w-48 object-contain"
                  />
                </CardContent>
              </Card>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features;