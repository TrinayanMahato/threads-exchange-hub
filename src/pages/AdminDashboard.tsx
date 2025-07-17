import { useState } from "react";
import { 
  Users, 
  Package, 
  MessageSquare, 
  TrendingUp, 
  UserCheck, 
  UserX,
  Eye,
  Trash2,
  Search,
  Filter,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data
const statsData = [
  { title: "Total Users", value: "12,456", change: "+12%", icon: Users, color: "text-blue-600" },
  { title: "Active Listings", value: "8,234", change: "+8%", icon: Package, color: "text-green-600" },
  { title: "Completed Swaps", value: "3,456", change: "+23%", icon: TrendingUp, color: "text-purple-600" },
  { title: "Pending Feedback", value: "89", change: "-5%", icon: MessageSquare, color: "text-orange-600" },
];

const usersData = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", listings: 12, swaps: 8, status: "active", joinDate: "2024-01-15" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", listings: 6, swaps: 4, status: "active", joinDate: "2024-02-20" },
  { id: 3, name: "Carol Wilson", email: "carol@example.com", listings: 0, swaps: 0, status: "banned", joinDate: "2024-03-10" },
  { id: 4, name: "David Brown", email: "david@example.com", listings: 18, swaps: 15, status: "active", joinDate: "2024-01-05" },
];

const listingsData = [
  { id: 1, title: "Vintage Denim Jacket", user: "Alice Johnson", category: "Women", status: "active", views: 45, date: "2024-03-15" },
  { id: 2, title: "Designer Sneakers", user: "Bob Smith", category: "Men", status: "swapped", views: 32, date: "2024-03-14" },
  { id: 3, title: "Summer Dress", user: "Carol Wilson", category: "Women", status: "pending", views: 28, date: "2024-03-13" },
  { id: 4, title: "Kids T-shirt Bundle", user: "David Brown", category: "Kids", status: "active", views: 67, date: "2024-03-12" },
];

const feedbackData = [
  { id: 1, user: "Alice Johnson", subject: "Great Platform!", message: "Love the eco-friendly approach...", date: "2024-03-15", status: "new" },
  { id: 2, user: "Bob Smith", subject: "Suggestion", message: "Could you add more categories...", date: "2024-03-14", status: "reviewed" },
  { id: 3, user: "David Brown", subject: "Bug Report", message: "Having issues with image upload...", date: "2024-03-13", status: "resolved" },
];

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const StatCard = ({ stat }: { stat: typeof statsData[0] }) => (
    <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-smooth">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-primary">{stat.change} from last month</p>
          </div>
          <div className={`p-3 rounded-lg bg-primary/10`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-card border-b border-border shadow-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your SwapStyle platform</p>
            </div>
            <Button variant="default" className="shadow-soft">
              <Plus className="w-4 h-4 mr-2" />
              New Announcement
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <StatCard stat={stat} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="users">Users Management</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Users Management */}
          <TabsContent value="users" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>User Management</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        placeholder="Search users..." 
                        className="pl-10 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Listings</TableHead>
                      <TableHead>Swaps</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{user.listings}</TableCell>
                        <TableCell>{user.swaps}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "destructive"}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-card border border-border shadow-hover z-50">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                {user.status === "active" ? (
                                  <>
                                    <UserX className="w-4 h-4 mr-2" />
                                    Ban User
                                  </>
                                ) : (
                                  <>
                                    <UserCheck className="w-4 h-4 mr-2" />
                                    Unban User
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete Account
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Listings Management */}
          <TabsContent value="listings" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Listings Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {listingsData.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell className="font-medium">{listing.title}</TableCell>
                        <TableCell>{listing.user}</TableCell>
                        <TableCell>{listing.category}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              listing.status === "active" ? "default" : 
                              listing.status === "swapped" ? "secondary" : "outline"
                            }
                          >
                            {listing.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{listing.views}</TableCell>
                        <TableCell>{listing.date}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Actions
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-card border border-border shadow-hover z-50">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Remove Listing
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Management */}
          <TabsContent value="feedback" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>User Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {feedbackData.map((feedback) => (
                    <div key={feedback.id} className="border border-border rounded-lg p-4 bg-card hover:shadow-card transition-smooth">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium">{feedback.subject}</h4>
                          <Badge 
                            variant={
                              feedback.status === "new" ? "default" : 
                              feedback.status === "reviewed" ? "secondary" : "outline"
                            }
                          >
                            {feedback.status}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">{feedback.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">From: {feedback.user}</p>
                      <p className="text-sm">{feedback.message}</p>
                      <div className="flex items-center space-x-2 mt-3">
                        <Button variant="outline" size="sm">Reply</Button>
                        <Button variant="ghost" size="sm">Mark as Reviewed</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;