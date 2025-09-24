"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github, Linkedin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { toast } from "sonner";
import { SendEmail } from "@/lib/send-email";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "khatibimehrshad24@gmail.com",
    href: "mailto:khatibimehrshad24@gmail.com",
    description: "Best for professional inquiries",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@Mmehrshad779",
    href: "https://t.me/Mmehrshad779",
    description: "Quick messages and updates",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+989228257087",
    href: "https://wa.me/+989228257087",
    description: "Voice calls and messages",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Imehrshad",
    href: "https://github.com/Imehrshad",
    description: "Check out my code",
  },
];

const contactSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  phonenumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[- 0-9()]{7,20}$/i, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullname: "", phonenumber: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setIsSending(true);
      await SendEmail(values);
      form.reset();
      toast.success("Thanks! I will get back to you shortly.");
    } catch (e) {
      toast.error("Please try again later.");
    } finally {
      setIsSending(false);
    }
  }
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;

            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card border-border/50 p-6 group hover:scale-105 transition-all duration-300 cursor-pointer">
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent size={32} className="text-primary" />
                      </div>

                      <div>
                        <h3 className="font-bold text-foreground mb-1">
                          {method.label}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                          {method.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Card className="glass-card border-border/50 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to work together?
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 555 123 4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell me about your project..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <Button
                    type="submit"
                    disabled={isSending}
                    className="glass-button border-0 hover:bg-white/5 text-white mx-auto text-center text-base py-6 flex items-center gap-2 rounded-xl w-full"
                  >
                    <Mail className="mr-2" size={20} />
                    {isSending ? "Sending…" : "Send"}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
