"use client";

import { Button } from "@/components/ui/button";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useCreateContactMutation } from "@/src/redux/apis/contact.api";

/* eslint-disable @typescript-eslint/no-explicit-any */

// Zod schema
const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [createContact, { isLoading }] = useCreateContactMutation();

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await createContact(data).unwrap();
      toast.success("Inquiry submitted successfully!");
      form.reset();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to submit inquiry");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 transition-colors duration-300">
      <h1 className="text-4xl md:text-5xl text-muted-foreground max-w-3xl mx-auto text-center font-bold mb-10">
       
        Contact Us
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Contact Form */}
        <div className="flex-1">
          <div className="border border-border rounded-xl p-6 bg-card text-card-foreground shadow-md transition-colors duration-300">
            <h2 className="text-2xl text-muted-foreground max-w-3xl mx-auto text-center font-bold mb-10">
              
              Send Us a Message
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground max-w-3xl font-bold">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="border border-border bg-input text-input-foreground placeholder:text-muted-foreground"
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground max-w-3xl font-bold">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          type="email"
                          {...field}
                          className="border border-border bg-input text-input-foreground placeholder:text-muted-foreground"
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500" />
                    </FormItem>
                  )}
                />

                {/* Subject */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground max-w-3xl font-bold">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Subject"
                          {...field}
                          className="border border-border bg-input text-input-foreground placeholder:text-muted-foreground"
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500" />
                    </FormItem>
                  )}
                />

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground max-w-3xl font-bold">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          {...field}
                          className="border border-border bg-input text-input-foreground placeholder:text-muted-foreground"
                        />
                      </FormControl>
                      <FormMessage className="text-orange-500" />
                    </FormItem>
                  )}
                />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-orange-500 text-white hover:bg-orange-600 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 transition-colors duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

        {/* Right: Contact Info */}
        <div className="flex-1 border border-border rounded-xl p-6 bg-card text-card-foreground shadow-md transition-colors duration-300">
          <h2 className="text-2xl text-muted-foreground max-w-3xl mx-auto text-center font-bold mb-10">
            Our Contact Info
          </h2>
          <div className="space-y-4 text-card-foreground">
            <div>
              <h3 className="font-medium">Address</h3>
              <p>123 Bondhu Currier Street, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="font-medium">Phone</h3>
              <p>+880 1234 567890</p>
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p>info@bondhucurrier.com</p>
            </div>
            <div>
              <h3 className="font-medium">Working Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
