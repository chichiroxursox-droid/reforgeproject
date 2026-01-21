import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CompetitionSubmissionForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    grade: "",
    category: "",
    title: "",
    description: "",
    statement: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 20 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 20MB.",
          variant: "destructive",
        });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let fileUrl = null;
      let fileName = null;

      // Upload file if provided
      if (file) {
        const fileExt = file.name.split(".").pop();
        const filePath = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from("competition-submissions")
          .upload(filePath, file);

        if (uploadError) {
          throw new Error("Failed to upload file");
        }

        const { data: urlData } = supabase.storage
          .from("competition-submissions")
          .getPublicUrl(filePath);
        
        fileUrl = urlData.publicUrl;
        fileName = file.name;
      }

      // Insert submission
      const { error: insertError } = await supabase
        .from("competition_submissions")
        .insert({
          name: formData.name,
          email: formData.email,
          school: formData.school,
          grade: formData.grade,
          category: formData.category,
          title: formData.title,
          description: formData.description,
          statement: formData.statement,
          file_url: fileUrl,
          file_name: fileName,
        });

      if (insertError) {
        throw insertError;
      }

      // Send notification email to Reforge team
      await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          school: formData.school,
          grade: formData.grade,
          category: formData.category,
          title: formData.title,
          description: formData.description,
          statement: formData.statement,
          fileUrl: fileUrl,
          fileName: fileName,
        },
      });

      setIsSubmitted(true);
      toast({
        title: "Submission received!",
        description: "Thank you for your competition entry.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your entry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Submission Received!</h3>
        <p className="text-foreground/80">
          Thank you for entering the Reforge Youth Design & Art Competition. We'll review your submission and notify you soon if you've been selected as a finalist.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      {/* Important Dates Banner */}
      <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <p className="text-center font-semibold text-primary">
          📅 Phase 1 submissions close <strong>March 15, 2026</strong> • Finalists notified by <strong>March 20, 2026</strong> • Final event <strong>May 22, 2026</strong>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="school">School *</Label>
            <Input
              id="school"
              required
              value={formData.school}
              onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              placeholder="Your school name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="grade">Grade *</Label>
            <Select
              value={formData.grade}
              onValueChange={(value) => setFormData({ ...formData, grade: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">9th Grade</SelectItem>
                <SelectItem value="10">10th Grade</SelectItem>
                <SelectItem value="11">11th Grade</SelectItem>
                <SelectItem value="12">12th Grade</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Competition Category *</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="art">Art Competition</SelectItem>
              <SelectItem value="engineering">Engineering Design Competition</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="title">Project Title *</Label>
          <Input
            id="title"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Title of your design/artwork"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Project Description *</Label>
          <Textarea
            id="description"
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Brief description of your project"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="statement">Artist/Designer Statement (200-300 words) *</Label>
          <Textarea
            id="statement"
            required
            value={formData.statement}
            onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
            placeholder="Share your inspiration and what your piece means to you..."
            rows={6}
          />
          <p className="text-xs text-foreground/60">
            Word count: {formData.statement.split(/\s+/).filter(Boolean).length}/300
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="file">Upload Design/Artwork Image</Label>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors">
            <input
              id="file"
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="file" className="cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-foreground/60" />
              {file ? (
                <p className="text-sm text-primary font-medium">{file.name}</p>
              ) : (
                <p className="text-sm text-foreground/60">
                  Click to upload an image or PDF (max 20MB)
                </p>
              )}
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting || !formData.grade || !formData.category}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Entry"
          )}
        </Button>
      </form>
    </Card>
  );
};

export default CompetitionSubmissionForm;
