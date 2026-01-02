import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get in Contact</h1>
            <p className="text-center text-lg text-foreground/80 mb-12">
              Want to connect, collaborate, or support our work?<br />
              Reach out. We'd love to hear from you.
            </p>
            
            <div className="flex justify-center mb-12">
              <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <a href="mailto:thereforgeprojectsla@gmail.com" className="text-primary hover:underline">
                  thereforgeprojectsla@gmail.com
                </a>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-turquoise/5 to-turquoise/10 border-2 border-turquoise/20">
              <p className="text-center text-foreground/90 leading-relaxed">
                We welcome educators, partners, and organizations who believe in the power of students to reshape the future of Philadelphia.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
