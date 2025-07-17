import { Facebook, Instagram, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-full"></div>
              <h3 className="text-xl font-bold">SwapStyle</h3>
            </div>
            <p className="text-background/80 mb-4">
              The sustainable fashion platform that connects style lovers for eco-friendly clothing swaps.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">How It Works</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Browse Categories</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Community Rules</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Report Issue</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Feedback</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 mb-2">
            Made with <Heart className="w-4 h-4 inline text-destructive" /> for sustainable fashion
          </p>
          <p className="text-background/60">
            © 2024 SwapStyle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;