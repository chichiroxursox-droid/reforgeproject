import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import phillyHero from "@/assets/philly-hero.jpg";
import studentsCollaboration from "@/assets/students-collaboration.jpg";

const WhoWeAre = () => {
  const statistics = [
    { number: "400+", label: "People killed by gunfire in Philadelphia in 2023" },
    { number: "80%", label: "Of homicides in the city involved a gun" },
    { number: "#1", label: "Gun violence is the leading cause of death for teens in the U.S." },
    { number: "1,700+", label: "Shooting incidents reported in Philadelphia in 2024" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${phillyHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-turquoise/40 to-charcoal/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            The Reforge Project
          </h1>
          <p className="text-xl md:text-2xl font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Forged from Violence, Crafted for Change
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Who We Are</h2>
            
            <div className="prose prose-lg max-w-none mb-12 text-foreground/90 leading-relaxed space-y-6">
              <p>
                We are students from Science Leadership Academy at Beeber in West Philadelphia, a community that has felt the impact of gun violence far too often. It's not something we face every day, but it's a reality that shapes the way we move through our neighborhoods. We love our city, but we also recognize that kids in some parts of Philly grow up with fears that others—just a few miles away in Lower Merion—never have to think about. Every student deserves the basic right to walk home safely, spend time with friends, and grow up without the constant threat of gun violence.
              </p>
              
              <p>
                That's why we started The Reforge Project. In partnership with Humanium Metal, we're working to raise awareness, remove illegal guns from Philadelphia, and transform them into art, products, and symbols of peace created by students. We're using design, collaboration, and creativity to spark real change—and to show that peace can be built by young people who refuse to accept violence as normal.
              </p>
            </div>

            <div className="my-16">
              <img 
                src={studentsCollaboration} 
                alt="Students collaborating on creative projects" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Gun Violence in Philadelphia – By the Numbers</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {statistics.map((stat, index) => (
                  <Card 
                    key={index}
                    className="p-6 text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm md:text-base text-foreground/80">
                      {stat.label}
                    </p>
                  </Card>
                ))}
              </div>

              <p className="text-center mt-8 text-foreground/80 italic">
                These aren't just numbers—they represent lives, families, and futures lost too soon. We're determined to help change that.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
