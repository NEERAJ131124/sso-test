"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut, User } from "lucide-react"

interface DashboardProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export default function Dashboard({ user }: DashboardProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Dashboard</CardTitle>
          <CardDescription className="text-center">Welcome to your personal dashboard</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          {user.image ? (
            <img
              src={user.image || "/placeholder.svg"}
              alt={user.name || "User"}
              className="w-24 h-24 rounded-full border-2 border-gray-200"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          )}
          <div className="text-center">
            <h2 className="text-xl font-bold">Hello, {user.name || "User"}!</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
