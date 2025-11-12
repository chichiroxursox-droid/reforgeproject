import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Quote, TrendingUp, Users, AlertTriangle, Heart } from "lucide-react";

const Testimonies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Voices of Change</h1>
            <p className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
              Gun violence isn't just an abstract issue—it's something that touches real lives.
            </p>
            
            <div className="space-y-8">
              <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-background to-turquoise/5">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-center mb-8 text-primary">Ryan's Story</h2>
                
                <div className="space-y-6 text-foreground/90 leading-relaxed">
                  <p className="text-lg">
                    "My brother was killed in a drive-by shooting. Ever since then, it's been hard to bounce back. It felt like I lost a part of myself—my right-hand person in life. I never imagined something so tragic could happen to someone so young. I've never felt heartbreak like that before.
                  </p>
                  
                  <p className="text-lg">
                    In 10th grade, I witnessed another shooting—a homeless man shot in the chest, right in front of me. I tried to help him the best I could, but all I could do was call 911 and pray he survived. I still don't know if he made it. That moment changed how I see life."
                  </p>
                </div>
              </Card>

              <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-background to-turquoise/5">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-center mb-8 text-primary">Dayciana's Story</h2>
                
                <div className="space-y-6 text-foreground/90 leading-relaxed">
                  <p className="text-lg">
                    "My cousin was sprayed down with bullets and killed. What hurt the most was that he was genuinely a good person. He had kids. He was getting his life together, on a good path. And then he was gone."
                  </p>
                </div>
              </Card>

              <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-background to-turquoise/5">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-center mb-8 text-primary">Phillip's Story</h2>
                
                <div className="space-y-6 text-foreground/90 leading-relaxed">
                  <p className="text-lg">
                    "I knew a man in the city who gave out dogs to people in the neighborhood. One day when I was a kid, I heard a gunshot outside. My dad was out there walking our dog. He saw the man—the one who gave out the dogs—bleeding on the ground. My dad rushed him to the ER, but he didn't make it. I'll never forget that."
                  </p>
                </div>
              </Card>
            </div>

            <div className="mt-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Reality in Numbers</h2>
              <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                These stories represent a larger crisis affecting Philadelphia communities
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-foreground/70">Gun violence victims annually in Philadelphia</div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">1,400+</div>
                  <div className="text-sm text-foreground/70">Shootings reported each year</div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-foreground/70">Of victims are under 25 years old</div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">1000s</div>
                  <div className="text-sm text-foreground/70">Of families forever changed by gun violence</div>
                </Card>
              </div>
            </div>

            <div className="mt-12 text-center p-8 bg-secondary/50 rounded-lg">
              <p className="text-lg text-foreground/80 italic">
                We share these stories not to shock, but to humanize—to remind everyone that behind every statistic is a person, a family, and a dream interrupted.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonies;
