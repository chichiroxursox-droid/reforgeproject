import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Lightbulb, Video, Users, Palette, Wrench, Trophy, Award } from "lucide-react";

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
                Our next major goal is to host Philadelphia's first firearm destruction event, in partnership with Humanium Metal and city leaders. The melted metal from that event will be repurposed by students into art and products designed to raise awareness and inspire hope.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Upcoming Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingPlans.map((plan, index) => {
                  const Icon = plan.icon;
                  return (
                    <Card 
                      key={index}
                      className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary border-2"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                          <p className="text-foreground/80">{plan.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Youth Competition Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Youth Design & Art Competition</h2>
              <p className="text-center text-foreground/80 mb-6 max-w-2xl mx-auto">
                Engage high school students in using creativity to raise awareness about gun violence and explore how instruments of harm can be transformed into symbols of peace.
              </p>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                  <TabsTrigger value="prizes">Prizes</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <Card className="p-6">
                    <p className="text-foreground/80 mb-4">
                      In partnership with <strong>Humanium Metal Sweden</strong> and <strong>RAWtools Philly</strong>, we are launching two connected competitions—one focused on art and one on engineering design.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold mb-2">Humanium Metal</h4>
                        <p className="text-sm text-foreground/70">Transforms illegal firearms into metal powder for 3D printing and Humanium Chalk for artists.</p>
                      </div>
                      <div className="p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold mb-2">RAWtools Philly</h4>
                        <p className="text-sm text-foreground/70">Uses traditional tools to reshape decommissioned firearms into sculptures, jewelry, and functional objects.</p>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="categories" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Palette className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Art Competition</h3>
                      </div>
                      <p className="text-sm text-foreground/80">
                        Create a draft artistic design using Humanium Chalk or propose a sculpture from decommissioned gun parts. Top 20 finalists receive materials to create their final pieces.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Wrench className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">Engineering Design</h3>
                      </div>
                      <p className="text-sm text-foreground/80">
                        Create a prototype, CAD model, or detailed drawing of an object that could be fabricated using Humanium Metal or RAWtools processes.
                      </p>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="prizes" className="space-y-4">
                  <Card className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-lg border border-yellow-500/30">
                        <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                        <p className="font-bold text-lg">1st Place</p>
                        <p className="text-2xl font-bold text-primary">$500</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-gray-300/20 to-gray-400/10 rounded-lg border border-gray-400/30">
                        <Award className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="font-bold text-lg">2nd Place</p>
                        <p className="text-2xl font-bold text-primary">$250</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-amber-600/20 to-amber-700/10 rounded-lg border border-amber-600/30">
                        <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                        <p className="font-bold text-lg">3rd Place</p>
                        <p className="text-2xl font-bold text-primary">$100</p>
                      </div>
                    </div>
                    <p className="text-center text-sm text-foreground/70 mt-4">
                      All finalists receive a certificate of recognition and Reforge Project swag.
                    </p>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border-2 border-primary/20">
              <p className="text-xl font-medium text-foreground">
                This is more than a project—it's a movement to make Philadelphia safer,{" "}
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
