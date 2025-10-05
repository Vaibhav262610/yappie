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
  return (
    <div className="flex w-full h-screen items-center justify-center bg-white">
      {/* Left side image (hidden on small screens) */}
      <div className="hidden md:flex justify-center">
        <img
          src={loginLogo}
          alt="Yappie Logo"
          className="max-w-md object-contain"
        />
      </div>

      {/* Right side form */}
      <div className="w-full md:w-1/2 max-w-md p-6">
        <Tabs defaultValue="login" className="w-full">
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
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card className="shadow-md border rounded-2xl">
              <CardHeader>
                <CardDescription>
                  Enter your credentials to continue
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input placeholder="Enter your email..." />
                </div>
                <div className="grid gap-2">
                  <Label>Password</Label>
                  <Input type="password" placeholder="Enter your password..." />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Signup Tab */}
          <TabsContent value="signup">
            <Card className="shadow-md border rounded-2xl">
              <CardHeader>
                <CardDescription>
                  Create an account to get started
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input placeholder="Enter your email..." />
                </div>
                <div className="grid gap-2">
                  <Label>Password</Label>
                  <Input type="password" placeholder="Create a password..." />
                </div>
                <div className="grid gap-2">
                  <Label>Confirm Password</Label>
                  <Input type="password" placeholder="Confirm your password..." />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Account</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Auth
