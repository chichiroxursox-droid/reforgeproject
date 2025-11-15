import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import forgedSteel from "@/assets/forged-steel.jpg";
import microphonePeace from "@/assets/microphone-peace.jpg";
import microphoneEvent from "@/assets/microphone-event.jpg";

const WhatWeveDone = () => {
  const achievements = [
    "Built one Microphone for Peace, which has traveled between schools and community events to share messages of hope.",
    "Sent two students to present at the United Nations on anti-gun violence.",
    "Met with city leaders and activists—including Shane Claiborne of RAWtools Philadelphia—to discuss how students can be part of long-term change.",
    "Collected data and stories from students across Philadelphia about how gun violence affects their daily lives.",
    "Partnered with organizations committed to transforming weapons into something meaningful and restorative.",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">What We've Done</h1>
            
            <div className="mb-12">
              <img 
                src={forgedSteel} 
                alt="Fresh forged steel workpieces symbolizing transformation" 
                className="w-full rounded-lg shadow-lg mb-8"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-12 text-foreground/90 leading-relaxed">
              <p className="text-lg mb-8">
                Our journey began with a simple but powerful question:{" "}
                <span className="font-semibold text-primary">What if we could turn weapons into voices for peace?</span>
              </p>
              
              <p className="mb-8">
                Through our partnership with Humanium Metal, we created the <strong>Microphone for Peace</strong>—a working microphone built from melted-down illegal firearms. This mic has been used by activists across Philadelphia and beyond to amplify stories of resilience and community healing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src={microphonePeace} 
                  alt="Microphone for Peace built from melted firearms" 
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center mt-4 text-foreground/70 italic">
                  The Microphone for Peace
                </p>
              </div>
              <div>
                <img 
                  src={microphoneEvent} 
                  alt="Community event featuring the Microphone for Peace" 
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center mt-4 text-foreground/70 italic">
                  Amplifying voices for change at community events
                </p>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-turquoise/5 to-turquoise/10 border-2 border-turquoise/20">
              <h3 className="text-2xl font-bold mb-6">So far, we've:</h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground/90">{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-12 text-center p-8 bg-secondary/50 rounded-lg">
              <p className="text-lg font-medium text-foreground/90">
                And we're not done. This year, we plan to build another microphone, continuing to reclaim the materials that once caused harm and repurpose them to spread peace.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhatWeveDone;
