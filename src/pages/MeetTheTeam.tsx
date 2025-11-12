import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Ryan Green",
      role: "Senior at SLA Beeber",
      bio: "I enjoy playing video games and wearing overpriced designer.",
    },
    {
      name: "Ethan Hauger",
      role: "Senior at SLA Beeber",
      bio: "I enjoy playing basketball, reading, and playing piano. I'm interested in working with AI after high school.",
    },
    {
      name: "Jamil Murphy",
      role: "Senior at SLA Beeber",
      bio: "An aspiring lawyer involved in YAG (Youth Government) who advocates passionately for justice and isn't afraid to speak up when change is needed. As a victim of gun violence and dedicated member of youth civic engagement, Jamil joined The Reforge Peace Project because he believes change comes through voice and action—and there's no better way to create that change than through Humanium, healing the very streets we walk on as a community.",
    },
    {
      name: "Zion Williams",
      role: "Senior at SLA Beeber",
      bio: "A varsity basketball player who enjoys video games and anime, and also wears overpriced clothes.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Meet the Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The student leaders behind The Reforge Project, working together to transform violence into peace.
            </p>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">{member.name}</CardTitle>
                    <CardDescription className="text-base">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MeetTheTeam;
