import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function CustomerStoriesSection() {
    const stories = [
        {
            metric: '200%',
            description: 'increase in marketing efficiency',
            company: 'OPPO',
            logo: '/placeholder.svg',
            quote: "CrossWise's AI tools have transformed how we approach digital marketing, making our campaigns more effective and data-driven.",
            author: {
                name: 'Marketing Director',
                image: '/placeholder.svg',
                role: 'Global Marketing',
            },
        },
        {
            metric: '5,000+',
            description: 'hours saved in campaign management',
            company: 'ANKER',
            logo: '/placeholder.svg',
            quote: 'The automated SEM tools and AI assistance have dramatically reduced our campaign setup time while improving performance.',
            author: {
                name: 'Senior Manager',
                image: '/placeholder.svg',
                role: 'Digital Marketing',
            },
        },
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full border px-4 py-1 text-sm mb-6">
                            <span>Customer Stories</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Real marketers,
                            <br />
                            exceptional results
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <p className="text-xl text-muted-foreground max-w-md mb-6">
                            Join our community of successful marketers who have transformed their digital marketing with AI-powered solutions.
                        </p>
                        <Button variant="outline" className="gap-2">
                            Explore Customer Stories
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                        <Card key={index} className="overflow-hidden border-0 bg-background">
                            <CardContent className="p-8">
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-4xl md:text-5xl font-bold">{story.metric}</span>
                                        <span className="text-lg text-muted-foreground">{story.description}</span>
                                        {/* <div className="mt-4 h-12 relative">
                                            <Image src={story.logo} alt={`${story.company} logo`} fill className="object-contain object-left" />
                                        </div> */}
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <div className="relative h-12 w-12 flex-shrink-0">
                                            {/* <Image src={story.author.image} alt={story.author.name} fill className="object-cover rounded-full" /> */}
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <blockquote className="text-lg">{story.quote}</blockquote>
                                            <div>
                                                <div className="font-semibold">{story.author.name}</div>
                                                <div className="text-sm text-muted-foreground">{story.author.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 grid sm:grid-cols-3 gap-8">
                    <Card className="bg-sky-50 border-0">
                        <CardContent className="p-8">
                            <div className="text-4xl font-bold mb-2">50K+</div>
                            <p className="text-muted-foreground">Campaigns Optimized</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-purple-50 border-0">
                        <CardContent className="p-8">
                            <div className="text-4xl font-bold mb-2">40%</div>
                            <p className="text-muted-foreground">Average ROI Increase</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-pink-50 border-0">
                        <CardContent className="p-8">
                            <div className="text-4xl font-bold mb-2">2M+</div>
                            <p className="text-muted-foreground">Data Points Analyzed</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
