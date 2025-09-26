import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Target,
  TrendingUp,
  Brain,
  Code,
  Database,
  Zap,
  Award,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Sudharsan",
    role: "Fullstack",
    bio: "Final Year CSD",

   
    social: {
      linkedin: "#",
      github: "#",
      email: "sarah@jobguard.ai",
    },
  },
  {
    name: "Sakthi",
    role: "Full-Stack Engineer",
    bio: "Final Year CSD",
   
    social: {
      linkedin: "#",
      github: "#",
      email: "michael@jobguard.ai",
    },
  },
  {
    
    
    social: {
      linkedin: "#",
      github: "#",
      email: "emily@jobguard.ai",
    },
  },
]

const technologies = [
  {
    name: "Python & XGBoost",
    description: "Core machine learning model built with XGBoost for high-accuracy fraud detection",
    icon: Brain,
  },
  {
    name: "TF-IDF Vectorization",
    description: "Advanced text processing using Term Frequency-Inverse Document Frequency",
    icon: Code,
  },
  {
    name: "Next.js & React",
    description: "Modern web application built with Next.js for optimal performance",
    icon: Zap,
  },
  {
    name: "Cloud Infrastructure",
    description: "Scalable cloud deployment ensuring 99.9% uptime and fast response times",
    icon: Database,
  },
]

const stats = [
  {
    label: "Job Postings Analyzed",
    value: "100,000+",
    description: "Protecting job seekers daily",
    icon: Target,
  },
  {
    label: "Detection Accuracy",
    value: "95%",
    description: "Validated on extensive test dataset",
    icon: Award,
  },
  {
    label: "Response Time",
    value: "<3s",
    description: "Real-time fraud detection",
    icon: Zap,
  },
  {
    label: "Users Protected",
    value: "25,000+",
    description: "Job seekers worldwide",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/20 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            About JobGuard
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Protecting Job Seekers with Advanced AI
          </h1>
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to eliminate employment fraud and protect job seekers worldwide using cutting-edge
            artificial intelligence and machine learning technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Our Mission</h2>
              <p className="text-lg leading-8 text-muted-foreground mb-6">
                Employment fraud affects millions of job seekers every year, causing financial loss and emotional
                distress. We believe everyone deserves a safe job search experience.
              </p>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                JobGuard was founded to democratize access to advanced fraud detection technology, making it available
                to individual job seekers, not just large corporations.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/predict">
                    Try Our Technology <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center space-y-6">
                  <div className="mx-auto p-6 rounded-full bg-primary/10 w-fit">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trusted Protection</h3>
                    <p className="text-muted-foreground">
                      Our AI has analyzed over 100,000 job postings and helped protect 25,000+ job seekers from
                      employment fraud.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Impact</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Real numbers that demonstrate our commitment to protecting job seekers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Meet Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Passionate experts in AI, engineering, and product development working to protect job seekers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="mb-6">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-4">
                      {member.role}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={member.social.linkedin}>
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={member.social.github}>
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`mailto:${member.social.email}`}>
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Technology Stack</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Built with cutting-edge technologies to ensure accuracy, speed, and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <tech.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{tech.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The principles that guide everything we do at JobGuard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                <p className="text-muted-foreground">
                  We never store your job posting data. Everything is processed securely and discarded immediately.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  We constantly update our AI model with new fraud patterns to stay ahead of scammers.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">User-Centric</h3>
                <p className="text-muted-foreground">
                  Every feature we build is designed with job seekers' safety and success in mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-24 sm:py-32">
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
                  Start Analyzing Jobs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
