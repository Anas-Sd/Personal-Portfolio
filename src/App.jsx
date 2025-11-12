import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Resume from "@/Pdf's/Resume";
import Azure_Certificate from "@/Pdf's/Azure_Certificate";
import Oracle_FA_Certificate from "@/Pdf's/Oracle_FA_Certificate";
// import Oracle_AA_Certificate from "@/Pdf's/Oracle_AA_Certificate";
import Salesforce_Certificate from "@/Pdf's/Salesforce_Certificate";
import Internship_Certificate from "@/Pdf's/Internship_Certificate";
import Lingua_Skills_Certificate from "./Pdf's/Lingua_Skills_Certificate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Azure" element={<Azure_Certificate />} />
          <Route path="/Oracle-Foundations-Associate" element={<Oracle_FA_Certificate />} />
          {/* <Route path="/Oracle-Architect-Associate" element={<Oracle_AA_Certificate />} /> */}
          <Route path="/Salesforce-Agentforce-Specialist" element={<Salesforce_Certificate />} />
          <Route path="/AIML-Virtual-Internship" element={<Internship_Certificate />} />
          <Route path="/Lingua-Skills" element={<Lingua_Skills_Certificate />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;