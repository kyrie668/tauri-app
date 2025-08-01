import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export function AIAssistantSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-muted-foreground">AI Marketing Assistant</h3>
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Your Smart Marketing Co-Worker</h2>
                            <p className="text-lg text-muted-foreground">
                                Think of our AI Marketing Assistant as your ultimate marketing teammate. It works with you, amplifying your creativity
                                and strategic thinking.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                From market research and competitor analysis to media planning, copywriting, and creative brainstorming, this smart
                                assistant handles the heavy lifting so you can focus on creating impactful campaigns that resonate.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Together, you and your AI assistant can achieve more, faster, and smarter.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="outline" asChild>
                                <Link to="/about" className="group">
                                    Meet Your AI Co-Worker
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-sky-50 -rotate-6 rounded-xl" />
                        <div className="relative bg-white rounded-lg shadow-lg p-4">
                            <img src="/vite.svg" alt="AI Marketing Assistant" width={800}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function DataCraftSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="relative order-last lg:order-first">
                        <div className="absolute inset-0 bg-gradient-to-bl from-blue-100 to-blue-50 rotate-6 rounded-xl" />
                        <div className="relative bg-white rounded-lg shadow-lg p-4">
                            <img src="/vite.svg" alt="DataCraft" width={800}></img>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-muted-foreground">DataCraft</h3>
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">All Your Ad Data in One Place</h2>
                            <p className="text-lg text-muted-foreground">Bring all your ad performance data together in one powerful dashboard.</p>
                            <p className="text-lg text-muted-foreground">
                                Analyze campaigns across Google, Meta, TikTok, and more with ease. Generate cross-platform reports, uncover actionable
                                insights, and export data to tools Looker Studio, Excel or Google Sheet in just a few clicks.
                            </p>
                            <p className="text-lg text-muted-foreground">Save hours of manual work and focus on turning insights into action.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="outline" asChild>
                                <Link to="/about" className="group">
                                    Unify Your Data
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function SEMPlannerSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-muted-foreground">Search Planner</h3>
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Your Shortcut to Winning Search Ads</h2>
                            <p className="text-lg text-muted-foreground">
                                Effortlessly create high-performing search ad campaigns with Search Planner, which helps you discover the right
                                keywords, create standout ad copy, and deliver a comprehensive plan ready for execution.
                            </p>
                            <p className="text-lg text-muted-foreground">Spend less time on setup and more time achieving impactful results.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="outline" asChild>
                                <Link to="/about" className="group">
                                    Plan Your Campaign
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-purple-50 -rotate-6 rounded-xl" />
                        <div className="relative bg-white rounded-lg shadow-lg p-4">
                            <img src="/vite.svg" alt="SEM Planner" width={800}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
