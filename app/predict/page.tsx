"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Download,
  Copy,
  Loader2,
  Clock,
  TrendingUp,
  FileText,
  Lightbulb,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

interface PredictionResult {
  id: string
  prediction: "fake" | "legitimate"
  confidence: number
  timestamp: Date
  jobTitle: string
  suspiciousKeywords: string[]
  summary: string
}

interface PredictionHistory {
  id: string
  prediction: "fake" | "legitimate"
  confidence: number
  timestamp: Date
  jobTitle: string
}

export default function PredictPage() {
  const [jobDescription, setJobDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [scanStage, setScanStage] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [history, setHistory] = useState<PredictionHistory[]>([
    {
      id: "1",
      prediction: "fake",
      confidence: 87,
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      jobTitle: "Remote Data Entry Specialist",
    },
    {
      id: "2",
      prediction: "legitimate",
      confidence: 92,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      jobTitle: "Software Engineer at TechCorp",
    },
    {
      id: "3",
      prediction: "fake",
      confidence: 94,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      jobTitle: "Work From Home Assistant",
    },
  ])

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return

    setIsAnalyzing(true)
    setError(null)
    setResult(null)
    setScanStage("Scanning job description...")
    setProgress(0)

    const steps = [
      "Scanning job description...",
      "Checking company domain...",
      "Analyzing salary and keywords...",
      "Cross-verifying job details...",
      "Finalizing prediction...",
    ]

    // Simulate realistic scanning process
    for (let i = 0; i < steps.length; i++) {
      setScanStage(steps[i])
      setProgress(((i + 1) / steps.length) * 100)
      await new Promise((r) => setTimeout(r, 700))
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: jobDescription }),
      })

      if (!response.ok) throw new Error(`API request failed with ${response.status}`)
      const data = await response.json()

      const suspiciousKeywords = [
        "upfront payment",
        "work from home",
        "urgent hiring",
        "no experience required",
        "guaranteed income",
        "easy money",
        "wire transfer",
        "personal information",
        "send money",
        "pay fee",
      ]

      const foundKeywords = suspiciousKeywords.filter((kw) =>
        jobDescription.toLowerCase().includes(kw.toLowerCase())
      )

      const newResult: PredictionResult = {
        id: Date.now().toString(),
        prediction: data.prediction === 1 ? "fake" : "legitimate",
        confidence: Math.round(data.confidence * 100),
        timestamp: new Date(),
        jobTitle: extractJobTitle(jobDescription),
        suspiciousKeywords: foundKeywords,
        summary: jobDescription.substring(0, 200) + "...",
      }

      setResult(newResult)

      // Add to history
      const historyItem: PredictionHistory = {
        id: newResult.id,
        prediction: newResult.prediction,
        confidence: newResult.confidence,
        timestamp: newResult.timestamp,
        jobTitle: newResult.jobTitle,
      }
      setHistory((prev) => [historyItem, ...prev.slice(0, 4)])
    } catch (err) {
      setError(
        err instanceof Error
          ? `Failed to analyze job posting: ${err.message}`
          : "Failed to analyze job posting. Please check if the backend server is running."
      )
    } finally {
      setIsAnalyzing(false)
      setScanStage(null)
      setProgress(0)
    }
  }

  const extractJobTitle = (text: string): string => {
    const lines = text.split("\n")
    const firstLine = lines[0]?.trim()
    return firstLine && firstLine.length < 100 ? firstLine : "Job Posting"
  }

  const copyResult = () => {
    if (result) {
      const text = `JobGuard Analysis Result:
Prediction: ${result.prediction.toUpperCase()}
Confidence: ${result.confidence}%
Job Title: ${result.jobTitle}
Analyzed: ${result.timestamp.toLocaleString()}`
      navigator.clipboard.writeText(text)
    }
  }

  const downloadReport = () => {
    alert("PDF report download would be implemented here")
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Job Posting Analyzer
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Paste any job description below and get instant AI-powered analysis to detect potential fraud.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Analysis Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Job Description Input
              </CardTitle>
              <CardDescription>
                Paste the complete job posting you want to analyze for potential fraud indicators.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
                <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                  {jobDescription.length} characters
                </div>
              </div>
              <Button
                onClick={handleAnalyze}
                disabled={!jobDescription.trim() || isAnalyzing}
                className="w-full"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-4 w-4" />
                    Analyze Job Posting
                  </>
                )}
              </Button>
              {error && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Scanning Animation */}
          {isAnalyzing && scanStage && (
            <Card className="animate-pulse border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  {scanStage}
                </CardTitle>
                <CardDescription>AI is verifying job authenticity...</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={progress} />
              </CardContent>
            </Card>
          )}

          {/* Results Section */}
          {result && (
            <Card className="animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {result.prediction === "fake" ? (
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-success" />
                    )}
                    Analysis Results
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={copyResult}>
                      <Copy className="h-4 w-4 mr-1" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm" onClick={downloadReport}>
                      <Download className="h-4 w-4 mr-1" />
                      PDF Report
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Prediction Result */}
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <Badge
                    variant={result.prediction === "fake" ? "destructive" : "default"}
                    className="text-lg px-4 py-2 mb-4"
                  >
                    {result.prediction === "fake"
                      ? "Fake Job Posting"
                      : "Legitimate Job Posting"}
                  </Badge>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Confidence Score</div>
                    <div className="text-3xl font-bold text-foreground">
                      {result.confidence}%
                    </div>
                    <Progress
                      value={result.confidence}
                      className="w-full max-w-xs mx-auto"
                    />
                  </div>
                </div>

                {/* Reasoning Section */}
                {result.prediction === "fake" && (
                  <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold flex items-center gap-2 text-destructive">
                      <AlertTriangle className="h-4 w-4" /> Why this looks fake
                    </h4>
                    <ul className="list-disc list-inside text-sm text-destructive/90">
                      {result.suspiciousKeywords.length > 0 ? (
                        result.suspiciousKeywords.map((kw, i) => (
                          <li key={i}>Contains suspicious term: “{kw}”</li>
                        ))
                      ) : (
                        <li>Unrealistic or vague job details detected.</li>
                      )}
                    </ul>
                    <p className="text-xs text-muted-foreground">
                      Recommendation: Avoid sharing personal or financial information until
                      verified.
                    </p>
                  </div>
                )}

                {/* Job Summary */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Job Summary
                  </h4>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="font-medium text-sm mb-2">
                      Job Title: {result.jobTitle}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.summary}
                    </div>
                  </div>
                </div>

                {/* Suspicious Keywords */}
                {result.suspiciousKeywords.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      Suspicious Keywords Found
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.suspiciousKeywords.map((keyword, index) => (
                        <Badge key={index} variant="destructive" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Analyzed on {result.timestamp.toLocaleString()}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tips Panel */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Detection Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Red Flags:</strong> Requests for upfront payments, vague job
                    descriptions, or urgent hiring.
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <div className="font-medium">Watch out for:</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Unrealistic salary promises</li>
                    <li>• Poor grammar and spelling</li>
                    <li>• Generic company information</li>
                    <li>• Requests for personal data</li>
                    <li>• Work-from-home guarantees</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Predictions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Predictions
              </CardTitle>
              <CardDescription>Your last 5 analyses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {item.jobTitle}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {formatTimeAgo(item.timestamp)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          item.prediction === "fake" ? "destructive" : "default"
                        }
                        className="text-xs"
                      >
                        {item.confidence}%
                      </Badge>
                      {item.prediction === "fake" ? (
                        <AlertTriangle className="h-4 w-4 text-destructive" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-success" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="font-semibold">Need More Features?</h3>
                <p className="text-sm text-muted-foreground">
                  Upgrade to Pro for unlimited predictions, detailed reports, and
                  prediction history.
                </p>
                <Button asChild className="w-full">
                  <Link href="/pricing">
                    View Plans <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
