import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
            
            <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-background to-turquoise/5">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-8 text-primary">Ryan's Story</h2>
              
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p className="text-lg">
                  "My connection to gun violence is that my brother was killed in a drive-by shooting, and ever since then, it has been hard to shake back from it. It was like I lost a part of myself—my right-hand person in life. I never thought something so drastic would happen to someone so young. I've never felt something so heartbreaking until that happened.
                </p>
                
                <p className="text-lg">
                  Another time I can account for is a day when I was skipping school back in 10th grade. I witnessed a shooting right in front of me—a homeless man shot in the chest for no reason, or maybe it was a reason, but I don't know. I tried to help him as best I could, but there was nothing else I could do but call 911 and hope he lived. I still don't know if he made it, but my prayers go out to him. Seeing that changed my perspective on life."
                </p>
              </div>
            </Card>

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
