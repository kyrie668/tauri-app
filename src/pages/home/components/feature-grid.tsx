import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

interface FeatureProps {
  title: string
  description: string
  image: string
  label?: string
  imagePosition?: "right" | "left"
}

function Feature({ title, description, image, label, imagePosition = "right" }: FeatureProps) {
  return (
    <div className="grid grid-cols-1 gap-12 items-center py-24 lg:grid-cols-2">
      {imagePosition === "left" && (
        <div className="relative h-[400px] lg:h-[600px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      )}
      <div className={`space-y-6 ${imagePosition === "right" ? "lg:pr-16" : "lg:pl-16"}`}>
        {label && (
          <div className="text-sm font-medium text-muted-foreground">
            {label}
          </div>
        )}
        <h2 className="text-3xl font-bold sm:text-4xl">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
        <div className="flex gap-4">
          <Button variant="outline" className="group">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      {imagePosition === "right" && (
        <div className="relative h-[400px] lg:h-[600px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  )
}

export function FeaturesGrid() {
  return (
    <section className="container">
      <Feature
        label="Connect"
        title="Get data from anywhere, instantly"
        description="Connect all your marketing data in one place, no matter the source. Import data to where you need it using CrossWise's prebuilt data pipelines. Create your own custom data pipelines from online and offline data to ensure you have full coverage to make better marketing decisions."
        image="/placeholder.svg?height=600&width=800"
      />
      <Feature
        label="Manage"
        title="Your data, your way"
        description="CrossWise's no-code data management apps are easy to use. They let you edit, manage, blend, enrich and store your marketing data. Customize everything to fit your unique needs, all in one platform."
        image="/placeholder.svg?height=600&width=800"
        imagePosition="left"
      />
      <Feature
        label="Analyze"
        title="Analyze, visualize, and report in your favorite apps"
        description="CrossWise gives you the freedom to use the reporting tools that suit you: Looker Studio, Power BI, Google Sheets, Excel, and more. You can bring your data in to any app you like — the choice is yours."
        image="/placeholder.svg?height=600&width=800"
      />
      <Feature
        label="Activate"
        title="Optimize your marketing, on your terms"
        description="Turn your marketing intelligence into action. Use your data to optimize campaigns, personalize customer experiences, and drive business growth."
        image="/placeholder.svg?height=600&width=800"
        imagePosition="left"
      />
    </section>
  )
}

