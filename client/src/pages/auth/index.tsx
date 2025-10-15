"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Victory from "@/assets/victory.svg"
import loginLogo from "@/assets/login-bg.png"

const Auth = () => {
  const [tab, setTab] = useState<"login" | "signup">("login")

  // Login states
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  // Signup states
  const [signupUsername, setSignupUsername] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (tab === "login") {
      console.log("🟢 Login Submitted:", {
        email: loginEmail,
        password: loginPassword,
      })
    } else {
      if (signupPassword !== confirmPassword) {
        alert("Passwords do not match!")
        return
      }

      console.log("🟣 Signup Submitted:", {
        username: signupUsername,
        email: signupEmail,
        password: signupPassword,
      })
    }
  }

  return (
    <div className="flex w-full h-screen items-center justify-center bg-white">
      {/* Left side image (hidden on mobile) */}
      <div className="hidden md:flex justify-center">
        <img
          src={loginLogo}
          alt="Yappie Logo"
          className="max-w-md object-contain"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 max-w-md p-6">
        <Tabs
          defaultValue="login"
          value={tab}
          onValueChange={(val) => setTab(val as "login" | "signup")}
          className="w-full"
        >
          <div className="flex flex-col items-center mb-4">
            <CardTitle className="text-4xl flex items-center gap-2">
              Welcome <img width={60} height={60} src={Victory} alt="Victory" />
            </CardTitle>
            <CardDescription className="text-center">
              Fill the details to get started with Yappie!
            </CardDescription>
          </div>

          {/* Tab Buttons */}
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger className="cursor-pointer" value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="signup">
              Signup
            </TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login">
            <form onSubmit={handleSubmit}>
              <Card className="shadow-md border rounded-2xl">
                <CardHeader>
                  <CardDescription>
                    Enter your credentials to continue
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="Enter your email..."
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter your password..."
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit">
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>

          {/* Signup Form */}
          <TabsContent value="signup">
            <form onSubmit={handleSubmit}>
              <Card className="shadow-md border rounded-2xl">
                <CardHeader>
                  <CardDescription>
                    Create an account to get started
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Username</Label>
                    <Input
                      value={signupUsername}
                      onChange={(e) => setSignupUsername(e.target.value)}
                      placeholder="Enter your username..."
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      placeholder="Enter your email..."
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      placeholder="Create a password..."
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Confirm Password</Label>
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password..."
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" type="submit">
                    Create Account
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Auth
