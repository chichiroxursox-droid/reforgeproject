import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import teamPhoto from "@/assets/team-photo.jpeg";
const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Ryan Green",
      role: "Senior at SLA Beeber",
      bio: "I'm an aspiring Pre-med student and a victim of gun violence, which I experienced in high school. I can play violin and would like to major in Biological Sciences. I joined The Reforge Project to advocate against gun violence and help those who have experienced what I have. I've helped people at a homeless shelter through my internship at the Achievement Academy, a partner of the Kappa League. I also made a podcast about Animal Safety called Compassion is Resistance.",
    },
    {
      name: "Ethan Hauger",
      role: "Senior at SLA Beeber",
      bio: "I'm a senior at SLA Beeber who loves basketball, piano, and finding ways to grow. I care about helping others, learning new things, and making a positive impact. I was one of the presenters at the United Nations about gun violence, and I'm especially interested in exploring artificial intelligence in the future.",
    },
    {
      name: "Jamil Murphy",
      role: "Senior at SLA Beeber",
      bio: "I'm an aspiring lawyer involved in YAG (Youth Government) who advocates passionately for justice and isn't afraid to speak up when change is needed. As a victim of gun violence and dedicated member of youth civic engagement, I joined The Reforge Project because I believe change comes through voice and action, and there's no better way to create that change than through Humanium, healing the very streets we walk on as a community.",
    },
    {
      name: "Zion Williams",
      role: "Senior at SLA Beeber",
      bio: "I am a senior at Science Leadership Academy @ Beeber, graduating in June 2026, with a passion for engineering, construction, and design. Over three summers at Fox Chase Farm, I built reservoirs to manage stormwater runoff and worked on projects like roofing, flooring, and animal shelters. My technical education and graphic design internship at Space 1026 strengthened both my hands-on building skills and creative abilities using Adobe tools. I aspire to combine engineering and art to design sustainable, innovative solutions that make a lasting impact.",
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

        {/* Team Photo Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src={teamPhoto} 
              alt="The Reforge Project team members" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-16 px-4 bg-slate-50">
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
