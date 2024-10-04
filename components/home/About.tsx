import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const reasons = [
  {
    icon: "/about-1.png", // Replace with actual icon paths
    title: "CERTIFIED REAL AGENCY",
  },
  {
    icon: "/about-2.png", // Replace with actual icon paths
    title: "TRUSTED EXPERTS",
  },
  {
    icon: "/about-3.png", // Replace with actual icon paths
    title: "SECURE PAYMENTS",
  },
  {
    icon: "/about-4.png", // Replace with actual icon paths
    title: "TRUSTED BY THOUSANDS",
  },
]

const About = () => {
  return (
    <section className="lg:px-20 xl:px-36 py-12 text-center">
      <h2 className="text-xl font-bold mb-4">WHY CHOOSE US?</h2>
      <p className="text-gray-500 text-xs capitalize max-w-md mx-auto mb-8">
        Choose us for trusted expertise, transparent transactions, and
        personalized property solutions that turn your real estate dreams into
        reality.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
        {reasons.map((reason, index) => (
          <Card
            key={index}
            className={cn(
              "p-0 text-center hover:shadow-xl transition-shadow rounded-3xl duration-300",
              index === 1 && "shadow-md border-2 border-gray-200" // Highlight specific card if needed
            )}
          >
            <CardContent className="p-0">
              <img
                src={reason.icon}
                alt={reason.title}
                className="mx-auto my-8 h-48 w-48 object-contain"
              />
              {/* <h3 className="font-semibold text-gray-800">{reason.title}</h3> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default About;