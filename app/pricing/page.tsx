import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Star, Shield, ArrowRight, Crown, Building } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for occasional job seekers",
    features: [
      { name: "5 predictions per day", included: true },
      { name: "Basic confidence scores", included: true },
      { name: "Suspicious keyword highlighting", included: true },
      { name: "Email support", included: true },
      { name: "PDF reports", included: false },
      { name: "Prediction history", included: false },
      { name: "Priority support", included: false },
      { name: "API access", included: false },
    ],
    cta: "Get Started Free",
    popular: false,
    icon: Shield,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "Ideal for active job hunters",
    features: [
      { name: "Unlimited predictions", included: true },
      { name: "Advanced confidence scores", included: true },
      { name: "Detailed PDF reports", included: true },
      { name: "Prediction history (90 days)", included: true },
      { name: "Suspicious keyword analysis", included: true },
      { name: "Priority email support", included: true },
      { name: "Export data", included: true },
      { name: "API access", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
    icon: Star,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For organizations and teams",
    features: [
      { name: "Everything in Pro", included: true },
      { name: "API access & integrations", included: true },
      { name: "Team management dashboard", included: true },
      { name: "Custom model training", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "24/7 phone support", included: true },
      { name: "SLA guarantees", included: true },
      { name: "On-premise deployment", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
    icon: Building,
  },
]

const faqs = [
  {
    question: "How accurate is the fraud detection?",
    answer:
      "Our AI model achieves 95% accuracy on our test dataset of over 50,000 job postings. We continuously improve the model with new data and user feedback.",
  },
  {
    question: "Do you store my job posting data?",
    answer:
      "No, we prioritize your privacy. Job postings are processed in real-time and immediately discarded. We only store anonymized analytics data to improve our model.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your Pro subscription at any time. You'll continue to have access to Pro features until the end of your billing period.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay via bank transfer.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer: "Yes, we offer a 7-day free trial for the Pro plan. No credit card required to start your trial.",
  },
  {
    question: "How does the API work?",
    answer:
      "Our REST API allows you to integrate fraud detection into your own applications. Enterprise customers get full API documentation and dedicated support.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Pricing Plans
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your job search needs. All plans include our core fraud detection technology with
            no hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular ? "ring-2 ring-primary shadow-2xl scale-105 lg:scale-110" : "shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Crown className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-foreground" : "text-muted-foreground line-through"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg" asChild>
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/predict"}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Compare All Features</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              See exactly what's included in each plan to make the best choice for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6 font-semibold">Features</th>
                  <th className="text-center py-4 px-6 font-semibold">Free</th>
                  <th className="text-center py-4 px-6 font-semibold">
                    <Badge variant="default" className="mb-2">
                      Pro
                    </Badge>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-4 px-6 font-medium">Daily Predictions</td>
                  <td className="text-center py-4 px-6">5</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="py-4 px-6 font-medium">Confidence Scores</td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">PDF Reports</td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="py-4 px-6 font-medium">Prediction History</td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">90 days</td>
                  <td className="text-center py-4 px-6">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">API Access</td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-4 px-6">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                  </td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="text-center py-4 px-6">Email</td>
                  <td className="text-center py-4 px-6">Priority Email</td>
                  <td className="text-center py-4 px-6">24/7 Phone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Have questions about our pricing or features? We've got answers.
            </p>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join thousands of job seekers who trust JobGuard to protect them from employment fraud.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/predict">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
