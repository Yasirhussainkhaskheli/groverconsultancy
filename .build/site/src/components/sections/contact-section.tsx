import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useSubmitLead } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const submitLead = useSubmitLead();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitLead.mutateAsync({ data });
      toast({
        title: "Inquiry Submitted Successfully",
        description: "We have received your message and will be in touch shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error sending your message. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* TODO: Reconnect this static export form to a backend endpoint or serverless handler for production submissions. */}
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Start Your <span className="text-primary">Digital Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Partner with Grover Consult to accelerate your digital transformation and unlock new growth opportunities. Fill out the form below to speak with our strategic advisors.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Gold top accent border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
            
            {submitLead.isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Message Received</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out to Grover Consult. One of our executive advisors will contact you shortly to discuss your needs.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-8"
                  onClick={() => submitLead.reset()}
                >
                  Send Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name <span className="text-primary">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Corporate Email <span className="text-primary">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" className="bg-background/50 border-white/10 focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enterprise Inc." className="bg-background/50 border-white/10 focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" className="bg-background/50 border-white/10 focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-white/10 focus:border-primary">
                              <SelectValue placeholder="Select a service area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="digital-transformation">Digital Transformation Strategy</SelectItem>
                            <SelectItem value="sales-enablement">Sales Enablement & Lead Gen</SelectItem>
                            <SelectItem value="system-implementation">System Implementation & Delivery</SelectItem>
                            <SelectItem value="ai-automation">AI & Advanced Automation</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity & Compliance</SelectItem>
                            <SelectItem value="other">Other / General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message <span className="text-primary">*</span></FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your challenges and goals..." 
                            className="min-h-[120px] bg-background/50 border-white/10 focus-visible:border-primary resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-semibold hover-elevate shadow-primary/20 shadow-lg"
                    disabled={submitLead.isPending}
                  >
                    {submitLead.isPending ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Inquiry <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
