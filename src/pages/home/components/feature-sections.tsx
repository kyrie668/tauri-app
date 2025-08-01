import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function FeatureSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-muted-foreground">
                Connect
              </h3>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Get data from anywhere, instantly
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect all your marketing data in one place, no matter the source. Import data to where you need it using CrossWise prebuilt data pipelines. Create your own custom data pipelines from online and offline data to ensure you have full coverage to make better marketing decisions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="ghost" className="group w-fit">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="group w-fit">
                Find your data source
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-white rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Data sources interface"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

