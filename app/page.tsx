import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Lock, BarChart3, CheckCircle, Star, ArrowRight, Users, Target } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              AI-Powered Job Protection
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Detect Fake Job Postings <span className="text-primary">Instantly</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Protect yourself from employment scams with our advanced AI technology. Get instant analysis of job
              postings with confidence scores and detailed reports.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="animate-pulse-glow">
                <Link href="/predict">
                  Try Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
            <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary/20 to-accent/20 opacity-20" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose JobGuard?</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our advanced AI technology provides comprehensive protection against job posting fraud.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col animate-fade-in-up">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Zap className="h-5 w-5 flex-none text-primary" />
                  Lightning Fast Analysis
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Get instant results in seconds. Our AI processes job descriptions and provides immediate feedback
                    with confidence scores.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <BarChart3 className="h-5 w-5 flex-none text-primary" />
                  95% Accuracy Rate
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Trained on thousands of job postings, our model achieves industry-leading accuracy in detecting
                    fraudulent listings.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <Lock className="h-5 w-5 flex-none text-primary" />
                  Secure & Private
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">
                    Your data is processed securely and never stored. We prioritize your privacy while providing
                    accurate predictions.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section id="how-it-works" className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How It Works</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Simple, fast, and reliable job posting verification in four easy steps.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 text-black">
              {[
                {
                  step: "01",
                  title: "Paste Job Description",
                  description: "Copy and paste the job posting you want to verify into our secure analyzer.",
                  icon: Target,
                },
                {
                  step: "02",
                  title: "AI Analysis",
                  description: "Our advanced machine learning model analyzes the content for fraud indicators.",
                  icon: BarChart3,
                },
                {
                  step: "03",
                  title: "Get Results",
                  description: "Receive instant feedback with confidence scores and detailed explanations.",
                  icon: CheckCircle,
                },
                {
                  step: "04",
                  title: "Download Report",
                  description: "Get a comprehensive PDF report with findings and recommendations.",
                  icon: Shield,
                },
              ].map((item, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs font-mono">
                        {item.step}
                      </Badge>
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/how-it-works">Learn More About Our Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by Job Seekers Worldwide
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See what our users say about JobGuard's fraud detection capabilities.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-muted-foreground sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            {[
              {
                name: "Sarah Chen",
                role: "Software Developer",
                content:
                  "JobGuard saved me from a sophisticated scam that looked completely legitimate. The AI caught red flags I completely missed.",
                rating: 5,
              },
              {
                name: "Michael Rodriguez",
                role: "Marketing Manager",
                content:
                  "I use JobGuard for every job application now. It's incredibly accurate and gives me peace of mind when job hunting.",
                rating: 5,
              },
              {
                name: "Emily Johnson",
                role: "Recent Graduate",
                content:
                  "As someone new to job searching, JobGuard has been invaluable. It's helped me avoid several fake postings already.",
                rating: 5,
              },
              {
                name: "David Park",
                role: "HR Professional",
                content:
                  "I recommend JobGuard to all job seekers I work with. The detailed reports help them understand what to look for.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground font-medium mb-4">"{testimonial.content}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose the plan that fits your job search needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
            {[
              {
                name: "Free",
                price: "$0",
                description: "Perfect for occasional job seekers",
                features: ["5 predictions per day", "Basic confidence scores", "Email support"],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Pro",
                price: "$9.99",
                description: "Ideal for active job hunters",
                features: ["Unlimited predictions", "Detailed PDF reports", "Prediction history", "Priority support"],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For organizations and teams",
                features: ["API access", "Custom integrations", "Team management", "Dedicated support"],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-lg font-semibold">{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline justify-center gap-x-2">
                    <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                    {tier.price !== "Custom" && (
                      <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                        /month
                      </span>
                    )}
                  </div>
                  <CardDescription className="mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3">
                        <CheckCircle className="h-5 w-5 flex-none text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full" variant={tier.popular ? "default" : "outline"} asChild>
                    <Link href="/pricing">{tier.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View All Plans & Features</Link>
            </Button>
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
              Join thousands of job seekers who trust JobGuard to keep them safe from employment fraud.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/predict">
                  Start Detecting Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn About Our Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
