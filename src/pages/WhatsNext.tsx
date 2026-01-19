import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Lightbulb, Video, Users, Palette, ArrowRight } from "lucide-react";

const WhatsNext = () => {
  const upcomingPlans = [
    {
      icon: Calendar,
      title: "Firearm Destruction Event",
      description: "Host Philadelphia's first firearm destruction event, in partnership with Humanium Metal and city leaders. The melted metal will be repurposed by students into art and products.",
    },
    {
      icon: Lightbulb,
      title: "Student Art Competition",
      description: "Launch a citywide student art and design competition using Humanium Metal, showcasing youth creativity in the service of peace.",
      link: "/competition",
    },
    {
      icon: Users,
      title: "Activism Workshops",
      description: "Host activism and organizing workshops for students across Philadelphia, empowering the next generation of community leaders.",
    },
    {
      icon: Video,
      title: "Documentary Film",
      description: "Create a short documentary sharing student stories and the process behind the Microphone for Peace.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">What's Next</h1>
            
            <div className="text-center mb-12">
              <p className="text-2xl font-semibold text-primary mb-4">
                We're just getting started.
              </p>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Our next major goal is to hold our student art competition in partnership with Humanium Metal and RAWtools Philly. Students will create art and designs that transform instruments of violence into symbols of peace.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Upcoming Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingPlans.map((plan, index) => {
                  const Icon = plan.icon;
                  const CardContent = (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                        <p className="text-foreground/80">{plan.description}</p>
                      </div>
                      {plan.link && <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />}
                    </div>
                  );
                  
                  if (plan.link) {
                    return (
                      <Link key={index} to={plan.link} className="group">
                        <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary border-2 h-full">
                          {CardContent}
                        </Card>
                      </Link>
                    );
                  }
                  
                  return (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary border-2"
                    >
                      {CardContent}
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Competition CTA */}
            <Link 
              to="/competition" 
              className="group flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg mb-12"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Palette className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  🎨 Youth Design & Art Competition Now Open!
                </h4>
                <p className="text-sm text-foreground/70">
                  Submit your art or engineering design to help forge peace. Click here to enter!
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20">
              <p className="text-xl font-medium text-foreground">
                This is more than a project. It's a movement to make Philadelphia safer,{" "}
                <span className="text-primary font-semibold">one step and one melted gun at a time.</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsNext;
