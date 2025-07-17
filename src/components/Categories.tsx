import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "women",
    title: "Women's Fashion",
    description: "Dresses, tops, pants, and accessories",
    image: "👗",
    color: "from-pink-400 to-rose-300",
    items: "12,450+ items"
  },
  {
    id: "men",
    title: "Men's Style",
    description: "Shirts, jeans, jackets, and more",
    image: "👔",
    color: "from-blue-400 to-cyan-300",
    items: "8,230+ items"
  },
  {
    id: "kids",
    title: "Kids & Baby",
    description: "Clothes that grow with your little ones",
    image: "👶",
    color: "from-yellow-400 to-orange-300",
    items: "5,670+ items"
  }
];

const Categories = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you're looking for in our organized categories. 
            From everyday essentials to special occasion pieces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer transition-smooth hover:shadow-hover hover:-translate-y-2 bg-gradient-card border-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-smooth`}>
                    {category.image}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="text-sm text-primary font-medium">
                    {category.items}
                  </div>
                </div>
                
                <Button 
                  variant="category" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Browse Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Section */}
        <div className="bg-gradient-category rounded-2xl p-8 lg:p-12 text-center animate-fade-in">
          <h3 className="text-2xl lg:text-3xl font-bold text-secondary-foreground mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-secondary-foreground/80 mb-6 max-w-xl mx-auto">
            Create a wishlist and get notified when someone lists the perfect item for you.
          </p>
          <Button variant="default" size="lg">
            Create Wishlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;