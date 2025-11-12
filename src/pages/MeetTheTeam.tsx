import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Ryan Green",
      role: "Senior at SLA Beeber",
      bio: "Aspiring Pre-med student who is making up for the mistakes that he made in high school. I can play violin. I would also like to major in Biological Sciences. I joined the reforge project to advocate for Gun violence and help those who have experienced what I have in the world.",
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
      bio: "I am a dedicated senior at Science Leadership Academy @ Beeber, set to graduate in June 2026, with a strong passion for engineering, construction, and design. Over the past three summers, I’ve worked with Fox Chase Farm, where I helped build three reservoirs to manage stormwater runoff and contributed to numerous construction projects, including roofing, flooring, and building shelters for animals. My experiences have given me hands-on skills in carpentry, environmental engineering, and sustainable design practices. Through my Career Technical Education concentration in Engineering & Construction, I’ve learned how to build structures from the ground up and understand the importance of teamwork, safety, and precision. I also expanded my creativity as a graphic design intern at Space 1026, mastering tools like Adobe Photoshop, Illustrator, and InDesign to create visual designs for events and social media. Balancing both technical and creative fields has helped me develop a unique perspective on problem-solving and innovation. I take pride in my ability to adapt quickly, learn from every experience, and apply my skills to real-world challenges. My ultimate goal is to combine my engineering knowledge and artistic creativity to design solutions that make the world more sustainable and visually inspiring..",
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
        <section className="py-16 px-4 bg-slate-300">
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
