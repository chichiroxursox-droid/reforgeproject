import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeveDone from "./pages/WhatWeveDone";
import WhatsNext from "./pages/WhatsNext";
import Partners from "./pages/Partners";
import Testimonies from "./pages/Testimonies";
import Contact from "./pages/Contact";
import MeetTheTeam from "./pages/MeetTheTeam";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WhoWeAre />} />
          <Route path="/what-weve-done" element={<WhatWeveDone />} />
          <Route path="/whats-next" element={<WhatsNext />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
