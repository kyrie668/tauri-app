'use client';

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { redirect } from 'react-router';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl">
            The AI-Powered Media Data Platform to Elevate Every Step of Your Marketing Journey
          </h1>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              Combine the power of AI-driven insights and seamless data integration to plan,
              optimize and analyze like a full-scale marketing team
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-10">
            <Button size="lg" className="h-12 px-6" onClick={() => redirect("home")}>
              Explore Platform
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {/* <Button size="lg" variant="outline" className="h-12 px-6">
              Watch Demo
            </Button> */}
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="flex gap-4 opacity-50">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-64 w-32 rotate-12 transform rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500"
              style={{
                opacity: 0.1 * (4 - i),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
