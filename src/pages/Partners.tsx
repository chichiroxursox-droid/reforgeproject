import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import humaniumMetalLogo from "@/assets/humanium-metal-logo.png";
import rawtoolsLogo from "@/assets/rawtools-logo.png";

const Partners = () => {
  const partners = [
    {
      name: "Humanium Metal",
      description: "Humanium Metal is an innovative material created by melting down illegal firearms, transforming them into non-lethal commodities that promote peace. This metal is produced primarily from weapons seized in conflict zones, contributing to efforts to reduce gun violence and enhance safety in communities. Known for its strength and durability, Humanium Metal is used in a range of products, including jewelry and accessories, helping raise awareness of the impact of armed violence. The initiative operates on a circular business model, where profits from Humanium Metal products are reinvested into communities affected by violence, supporting rebuilding and social justice efforts. Overall, Humanium Metal serves as a powerful symbol of transformation, turning instruments of harm into tools for peace and community resilience.",
      website: "https://humanium-metal.com/",
      logo: humaniumMetalLogo,
    },
    {
      name: "RAWtools Philadelphia",
      description: "RAWtools Philadelphia is a non-profit organization dedicated to promoting peace and reducing gun violence through innovative methods. They focus on repurposing firearms into useful tools and art, symbolizing a shift from violence to constructive use. The organization offers nonviolence training programs to equip individuals with conflict resolution skills rooted in peace. Engaging with the local community, RAWtools conducts workshops where participants can transform guns into garden tools, fostering collaboration and creativity. Through these initiatives, RAWtools aims to create a safer environment and advocate for a culture of peace in Philadelphia.",
      website: "https://rawtools.org/",
      logo: rawtoolsLogo,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Partners</h1>
            <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
              We're proud to work alongside organizations that share our commitment to transforming violence into hope and building safer communities.
            </p>
            
            <div className="space-y-8">
              {partners.map((partner, index) => (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary"
                >
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-48 h-48 object-contain bg-background rounded-lg p-4"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">
                          {partner.name}
                        </h2>
                        <Button 
                          variant="outline"
                          className="w-fit border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                          asChild
                        >
                          <a 
                            href={partner.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            Visit Website
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center p-8 bg-secondary/50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Interested in partnering with us?</h3>
              <p className="text-foreground/80 mb-4">
                We're always looking to connect with organizations that believe in the power of youth-led change.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
