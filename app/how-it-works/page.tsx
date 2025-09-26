"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Brain,
  BarChart3,
  Download,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Shield,
  Zap,
  Search,
  Cpu,
} from "lucide-react"
import Link from "next/link"

const steps = [
  {
    id: 1,
    title: "Paste Job Description",
    description: "Copy and paste the complete job posting you want to analyze into our secure text analyzer.",
    details: [
      "Accepts job postings from any source",
      "Secure processing with no data storage",
      "Supports multiple languages",
      "Character limit up to 10,000 words",
    ],
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    id: 2,
    title: "AI Analysis Engine",
    description: "Our advanced machine learning model analyzes the content using multiple fraud detection algorithms.",
    details: [
      "XGBoost machine learning model",
      "TF-IDF text vectorization",
      "Pattern recognition algorithms",
      "Real-time processing in under 3 seconds",
    ],
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    id: 3,
    title: "Instant Results",
    description: "Receive comprehensive analysis with confidence scores, risk factors, and detailed explanations.",
    details: [
      "Confidence score from 0-100%",
      "Highlighted suspicious keywords",
      "Risk factor breakdown",
      "Actionable recommendations",
    ],
    icon: BarChart3,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    id: 4,
    title: "Download Report",
    description: "Get a professional PDF report with complete analysis, findings, and safety recommendations.",
    details: [
      "Comprehensive PDF report",
      "Shareable analysis results",
      "Historical tracking",
      "Professional formatting",
    ],
    icon: Download,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
  },
]

const technologies = [
  {
    name: "Machine Learning",
    description: "XGBoost algorithm trained on 50,000+ job postings",
    icon: Cpu,
  },
  {
    name: "Natural Language Processing",
    description: "TF-IDF vectorization for text analysis and pattern recognition",
    icon: Search,
  },
  {
    name: "Real-time Processing",
    description: "Sub-3-second analysis with cloud-based infrastructure",
    icon: Zap,
  },
  {
    name: "Security First",
    description: "Zero data retention with encrypted processing pipelines",
    icon: Shield,
  },
]

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            How It Works
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Advanced AI-Powered Job Fraud Detection
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Our sophisticated machine learning system analyzes job postings in real-time to identify fraudulent listings
            and protect job seekers from employment scams.
          </p>
        </div>
      </section>

      {/* Interactive Step-by-Step Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Simple 4-Step Process</h2>
            <p className="mt-6 text-lg leading-8 text-black">
              From input to analysis in seconds. Here's exactly how JobGuard protects you.
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 p-1 bg-muted rounded-lg">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeStep === step.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Step {step.id}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`transition-all duration-500 ${
                    activeStep === step.id ? "opacity-100 scale-100" : "opacity-40 scale-95"
                  }`}
                >
                  <Card className={`${activeStep === step.id ? "ring-2 ring-primary shadow-lg" : ""}`}>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${step.bgColor}`}>
                          <step.icon className={`h-6 w-6 ${step.color}`} />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            Step {step.id}
                          </Badge>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </CardHeader>
                    {activeStep === step.id && (
                      <CardContent>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    )}
                  </Card>
                </div>
              ))}
            </div>

            {/* Visual Representation */}
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-muted/50 to-background">
                <div className="text-center space-y-6">
                  <div className={`mx-auto p-6 rounded-full ${steps[activeStep - 1].bgColor}`}>
                    {React.createElement(steps[activeStep - 1].icon, {
                      className: `h-12 w-12 ${steps[activeStep - 1].color}`,
                    })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{steps[activeStep - 1].title}</h3>
                    <p className="text-muted-foreground">{steps[activeStep - 1].description}</p>
                  </div>
                  {activeStep < steps.length && (
                    <Button variant="outline" onClick={() => setActiveStep(activeStep + 1)} className="mt-4">
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  {activeStep === steps.length && (
                    <Button asChild className="mt-4">
                      <Link href="/predict">
                        Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Powered by Advanced Technology
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our fraud detection system combines cutting-edge AI with robust security measures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Examples */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What We Detect</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our AI identifies various types of fraudulent job posting patterns and red flags.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fake Job Example */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Fake Job Posting Example
                </CardTitle>
                <CardDescription>Common patterns our AI detects in fraudulent listings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background p-4 rounded-lg border border-destructive/20">
                  <div className="text-sm font-mono">
                    <div className="text-destructive font-semibold">🚩 URGENT HIRING - Work From Home</div>
                    <div className="mt-2 text-muted-foreground">
                      Make $5000/week working from home! No experience required. Send $50 processing fee to get started.
                      Contact us immediately at...
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Detected Red Flags:</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="destructive" className="text-xs">
                      Upfront Payment
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                      Unrealistic Salary
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                      Urgent Language
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                      No Experience Required
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legitimate Job Example */}
            <Card className="border-success/20 bg-success/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-success">
                  <CheckCircle className="h-5 w-5" />
                  Legitimate Job Posting Example
                </CardTitle>
                <CardDescription>Characteristics of authentic job listings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background p-4 rounded-lg border border-success/20">
                  <div className="text-sm font-mono">
                    <div className="text-success font-semibold">Software Engineer - TechCorp Inc.</div>
                    <div className="mt-2 text-muted-foreground">
                      Join our engineering team. 3+ years experience required. Competitive salary $80k-120k. Benefits
                      include health insurance, 401k...
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Positive Indicators:</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="text-xs bg-success text-success-foreground">
                      Clear Requirements
                    </Badge>
                    <Badge variant="default" className="text-xs bg-success text-success-foreground">
                      Realistic Salary
                    </Badge>
                    <Badge variant="default" className="text-xs bg-success text-success-foreground">
                      Company Details
                    </Badge>
                    <Badge variant="default" className="text-xs bg-success text-success-foreground">
                      Professional Tone
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accuracy Stats */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Proven Accuracy & Performance
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our model has been tested and validated on thousands of job postings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm font-medium mb-1">Detection Accuracy</div>
                <div className="text-xs text-muted-foreground">Validated on 50,000+ job postings</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">&lt;3s</div>
                <div className="text-sm font-medium mb-1">Analysis Time</div>
                <div className="text-xs text-muted-foreground">Real-time processing speed</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                <div className="text-sm font-medium mb-1">Jobs Analyzed</div>
                <div className="text-xs text-muted-foreground">Protecting job seekers daily</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Protect Your Job Search?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Try our AI-powered fraud detection system and stay safe from employment scams.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/predict">
                  Analyze a Job Posting <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
