import { Card, CardContent } from "@/components/ui/card";
import { 
  Recycle, 
  Shield, 
  Star, 
  Users, 
  MapPin, 
  MessageCircle 
} from "lucide-react";

const features = [
  {
    icon: Recycle,
    title: "Eco-Friendly Swapping",
    description: "Reduce fashion waste by giving clothes a second life. Every swap helps save the planet."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "All users are verified. Safe pickup locations and secure messaging system included."
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "All items are reviewed for quality. Rate and review after each swap for community trust."
  },
  {
    icon: Users,
    title: "Local Community",
    description: "Connect with fashion lovers in your area. Build friendships through shared style."
  },
  {
    icon: MapPin,
    title: "Easy Meetups",
    description: "Convenient pickup locations near you. Schedule swaps that fit your busy lifestyle."
  },
  {
    icon: MessageCircle,
    title: "Smart Matching",
    description: "Our algorithm suggests perfect matches based on your style preferences and size."
  }
];

const Features = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose SwapStyle?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built the most trusted platform for fashion swapping. 
            Join our community and discover why thousands choose us for their sustainable fashion journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-hover transition-smooth bg-gradient-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;