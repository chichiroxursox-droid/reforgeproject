import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Wrench, Trophy, Award } from "lucide-react";
import CompetitionSubmissionForm from "@/components/CompetitionSubmissionForm";
import humaniumMic from "@/assets/humanium-mic.jpg";
import humaniumChalkBird from "@/assets/humanium-chalk-bird.jpg";

const Competition = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Youth Design & Art Competition</h1>
            <p className="text-center text-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
              Engage high school students in using creativity to raise awareness about gun violence and explore how
              instruments of harm can be transformed into symbols of peace.
            </p>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="prizes">Prizes</TabsTrigger>
                <TabsTrigger value="submit">Submit Entry</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card className="p-6">
                  <p className="text-foreground/80 mb-4 text-base md:text-lg">
                    In partnership with <strong>Humanium Metal Sweden</strong> and <strong>RAWtools Philly</strong>, we
                    are launching two connected competitions: one focused on art and one on engineering design.
                  </p>

                  {/* Two-Step Process */}
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-lg mb-3 text-primary">How It Works: A Two-Step Process</h4>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium text-base md:text-lg">Submit Your Idea</p>
                          <p className="text-sm md:text-base text-foreground/70">
                            Entering is easy. Submit a sketch, concept, or photo of your prototype of your idea with a
                            short paragraph explaining your design. This is just the first step, you don't need anything
                            finished yet!
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium text-base md:text-lg">Finalists Build Their Vision</p>
                          <p className="text-sm md:text-base text-foreground/70">
                            We will select <strong>20 finalists across both categories</strong> who will receive all the
                            materials they need to bring their idea to life. Finalists will be invited to{" "}
                            <strong>RAWtools Philly in Kensington</strong> to display their final pieces, where winners
                            will be judged.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Important Dates */}
                  <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-secondary">
                    <h4 className="font-semibold text-lg mb-3">Important Dates</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="font-bold text-primary text-lg">March 15, 2026</p>
                        <p className="text-sm text-foreground/70">Phase 1 Submissions Close</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary text-lg">March 20, 2026</p>
                        <p className="text-sm text-foreground/70">Finalists Notified</p>
                      </div>
                      <div>
                        <p className="font-bold text-primary text-lg">May 22, 2026</p>
                        <p className="text-sm text-foreground/70">Final Event at RAWtools Philly</p>
                      </div>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div className="mb-6 p-4 bg-turquoise/10 rounded-lg border border-turquoise/20">
                    <h4 className="font-semibold text-lg mb-2">Eligibility</h4>
                    <p className="text-sm md:text-base text-foreground/80">
                      This competition is open to <strong>Philadelphia middle school and high school students only</strong>.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2 text-base md:text-lg">Humanium Metal</h4>
                      <p className="text-sm md:text-base text-foreground/70">
                        Transforms illegal firearms into metal powder for 3D printing and Humanium Chalk for artists.
                      </p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold mb-2 text-base md:text-lg">RAWtools Philly</h4>
                      <p className="text-sm md:text-base text-foreground/70">
                        Uses traditional tools to reshape decommissioned firearms into sculptures, jewelry, and
                        functional objects.
                      </p>
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
                      <h3 className="text-lg md:text-xl font-semibold">Art Competition</h3>
                    </div>
                    <p className="text-sm md:text-base text-foreground/80">
                      Create a draft artistic design that incorporates Humanium Chalk or propose an art piece from decommissioned
                      gun parts. Your entire piece doesn't have to be made with Humanium Chalk—ideally, just incorporate some into your work. Top 20 finalists receive materials to create their final pieces.
                    </p>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold">Engineering Design</h3>
                    </div>
                    <p className="text-sm md:text-base text-foreground/80">
                      Create a prototype, CAD model, or detailed drawing of an object that could be fabricated using
                      Humanium Metal or RAWtools processes.
                    </p>
                  </Card>
                </div>

                <Card className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-4">Inspiration & Examples</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <img src={humaniumMic} alt="Microphone for Peace made with Humanium Metal" className="w-full rounded-lg shadow-sm" />
                      <p className="text-xs text-foreground/60 mt-2 italic">The Microphone for Peace — designed using Humanium Metal as a symbol of transforming violence into voice.</p>
                    </div>
                    <div>
                      <img src={humaniumChalkBird} alt="Bird artwork created with Humanium Chalk" className="w-full rounded-lg shadow-sm" />
                      <p className="text-xs text-foreground/60 mt-2 italic">A bird drawn using Humanium Chalk — chalk made from melted-down illegal firearms.</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70">
                    For more inspiration, visit{" "}
                    <a href="https://www.rawtoolsinc.org" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">RAWtools</a>{" "}or{" "}
                    <a href="https://www.humaniumetal.com" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Humanium Metal</a>.
                  </p>
                </Card>
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
                  <p className="text-center text-base md:text-lg text-foreground/80 mt-6">
                    All 20 finalists receive a certificate of recognition and Reforge Project swag. Each category has a
                    seperate prize pool (same amount)
                  </p>
                </Card>
              </TabsContent>

              <TabsContent value="submit" className="space-y-4">
                <CompetitionSubmissionForm />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Competition;
