import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-clothing-swap.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Swap Your Style,
                <span className="block text-primary-glow">Save the Planet</span>
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/90 max-w-2xl">
                Join thousands of fashion lovers swapping clothes sustainably. 
                Find unique pieces, refresh your wardrobe, and reduce waste - all for free!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Swapping
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary-glow" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">50K+</div>
                <div className="text-sm text-primary-foreground/80">Active Swappers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Recycle className="w-6 h-6 text-primary-glow" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">100K+</div>
                <div className="text-sm text-primary-foreground/80">Items Swapped</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6 text-primary-glow" />
                </div>
                <div className="text-2xl font-bold text-primary-foreground">98%</div>
                <div className="text-sm text-primary-foreground/80">Happy Users</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={heroImage} 
                alt="People swapping clothes"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-card animate-bounce">
              <Recycle className="w-8 h-8 text-nature-green" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card animate-bounce" style={{ animationDelay: '1s' }}>
              <Heart className="w-8 h-8 text-destructive" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;