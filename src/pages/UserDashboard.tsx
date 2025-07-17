import { useState } from "react";
import { 
  Package, 
  RefreshCw, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  Camera,
  MapPin,
  Star,
  Heart,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock data
const userStats = [
  { title: "My Listings", value: "12", icon: Package, color: "text-blue-600" },
  { title: "Successful Swaps", value: "8", icon: RefreshCw, color: "text-green-600" },
  { title: "Wishlist Items", value: "15", icon: Heart, color: "text-red-600" },
  { title: "Profile Views", value: "234", icon: Eye, color: "text-purple-600" },
];

const myListings = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    category: "Women",
    size: "M",
    condition: "Good",
    status: "active",
    views: 45,
    likes: 12,
    date: "2024-03-15",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Designer Handbag",
    category: "Women",
    size: "One Size",
    condition: "Excellent",
    status: "pending",
    views: 32,
    likes: 8,
    date: "2024-03-14",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Summer Dress",
    category: "Women",
    size: "S",
    condition: "Like New",
    status: "swapped",
    views: 67,
    likes: 23,
    date: "2024-03-10",
    image: "/placeholder.svg"
  },
];

const swappedItems = [
  {
    id: 1,
    myItem: "Vintage Band T-shirt",
    receivedItem: "Cozy Knit Sweater",
    swappedWith: "Alice Johnson",
    date: "2024-03-12",
    status: "completed",
    rating: 5
  },
  {
    id: 2,
    myItem: "Black Boots",
    receivedItem: "White Sneakers",
    swappedWith: "Bob Smith",
    date: "2024-03-08",
    status: "completed",
    rating: 4
  },
  {
    id: 3,
    myItem: "Winter Coat",
    receivedItem: "Spring Jacket",
    swappedWith: "Carol Wilson",
    date: "2024-02-25",
    status: "in-progress",
    rating: null
  },
];

const UserDashboard = () => {
  const [isAddListingOpen, setIsAddListingOpen] = useState(false);
  const [newListing, setNewListing] = useState({
    title: "",
    description: "",
    category: "",
    size: "",
    condition: "",
    location: ""
  });

  const StatCard = ({ stat }: { stat: typeof userStats[0] }) => (
    <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-smooth">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <p className="text-3xl font-bold text-foreground">{stat.value}</p>
          </div>
          <div className="p-3 rounded-lg bg-primary/10">
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ListingCard = ({ listing }: { listing: typeof myListings[0] }) => (
    <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-smooth">
      <CardContent className="p-4">
        <div className="flex space-x-4">
          <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
            <Camera className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-foreground">{listing.title}</h4>
              <Badge 
                variant={
                  listing.status === "active" ? "default" : 
                  listing.status === "swapped" ? "secondary" : "outline"
                }
              >
                {listing.status}
              </Badge>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{listing.category} • {listing.size} • {listing.condition}</p>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Eye className="w-3 h-3 mr-1" />
                  {listing.views}
                </span>
                <span className="flex items-center">
                  <Heart className="w-3 h-3 mr-1" />
                  {listing.likes}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {listing.date}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <Button variant="ghost" size="sm">
              <Edit className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-destructive">
              <Trash2 className="w-4 h-4" />
            </Button>
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
              <h1 className="text-3xl font-bold text-foreground">My Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Manage your swaps and listings</p>
            </div>
            <Dialog open={isAddListingOpen} onOpenChange={setIsAddListingOpen}>
              <DialogTrigger asChild>
                <Button variant="default" className="shadow-soft">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Listing
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card border border-border shadow-hover">
                <DialogHeader>
                  <DialogTitle>Add New Listing</DialogTitle>
                  <DialogDescription>
                    Create a new listing for an item you want to swap.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Item Title</Label>
                    <Input 
                      id="title"
                      placeholder="e.g., Vintage Denim Jacket"
                      value={newListing.title}
                      onChange={(e) => setNewListing({...newListing, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Describe your item..."
                      value={newListing.description}
                      onChange={(e) => setNewListing({...newListing, description: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={newListing.category} onValueChange={(value) => setNewListing({...newListing, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border border-border shadow-hover">
                          <SelectItem value="women">Women</SelectItem>
                          <SelectItem value="men">Men</SelectItem>
                          <SelectItem value="kids">Kids</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="size">Size</Label>
                      <Select value={newListing.size} onValueChange={(value) => setNewListing({...newListing, size: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border border-border shadow-hover">
                          <SelectItem value="xs">XS</SelectItem>
                          <SelectItem value="s">S</SelectItem>
                          <SelectItem value="m">M</SelectItem>
                          <SelectItem value="l">L</SelectItem>
                          <SelectItem value="xl">XL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Select value={newListing.condition} onValueChange={(value) => setNewListing({...newListing, condition: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border border-border shadow-hover">
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location">Pickup Location</Label>
                    <Input 
                      id="location"
                      placeholder="e.g., Downtown, Near Mall"
                      value={newListing.location}
                      onChange={(e) => setNewListing({...newListing, location: e.target.value})}
                    />
                  </div>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload photos</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={() => setIsAddListingOpen(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button variant="default" className="flex-1">
                      Create Listing
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <StatCard stat={stat} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="swaps">Swap History</TabsTrigger>
          </TabsList>

          {/* My Listings */}
          <TabsContent value="listings" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>My Listings ({myListings.length})</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Sort by Date
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <ListingCard key={listing.id} listing={listing} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Swap History */}
          <TabsContent value="swaps" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Swap History ({swappedItems.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {swappedItems.map((swap) => (
                    <div key={swap.id} className="border border-border rounded-lg p-4 bg-card">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant={swap.status === "completed" ? "default" : "outline"}
                          >
                            {swap.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{swap.date}</span>
                        </div>
                        {swap.rating && (
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < swap.rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">You gave</p>
                          <p className="font-medium">{swap.myItem}</p>
                        </div>
                        <div className="text-center">
                          <RefreshCw className="w-6 h-6 text-primary mx-auto" />
                          <p className="text-sm text-muted-foreground mt-1">Swapped with</p>
                          <p className="font-medium">{swap.swappedWith}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">You received</p>
                          <p className="font-medium">{swap.receivedItem}</p>
                        </div>
                      </div>
                      {swap.status === "completed" && !swap.rating && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <Button variant="outline" size="sm">
                            Rate this swap
                          </Button>
                        </div>
                      )}
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

export default UserDashboard;