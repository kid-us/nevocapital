// Contact Route
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

// Contact Page
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import Reveal from "@/components/Revel";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { layer } from "@/assets";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  reason: z.string().min(2, "Reason is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function RouteComponent() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div>
      <div className="relative">
        <img
          src={layer}
          alt="Layer"
          className="absolute md:-top-20 -top-10 overflow-hidden"
        />
      </div>
      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-20 px-6 pt-10 pb-20 md:py-28">
        <div className="flex flex-col justify-center text-center">
          <h1 className="md:text-4xl text-2xl font-bold text-start">
            Connect with Nevo Capital
          </h1>

          <div className="mt-5">
            <p className="text-start text-lg">
              Whether you're exploring investment opportunities or have
              questions, our team is here to assist.
            </p>

            <div className="mt-5">
              <p className="text-start font-semibold mb-5">
                Contact Information
              </p>
              <div className="flex items-center space-x-2 text-zinc-600 mb-5">
                <Phone size={16} />
                <p className="text-sm">+1-248-450-4836</p>
              </div>

              <div className="flex items-center space-x-2 text-zinc-600">
                <Mail size={16} />
                <p className="textsms">info@nevo-capital.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-md flex flex-col gap-3"
            >
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="placeholder:text-xs"
                        placeholder="Full Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="placeholder:text-xs"
                        type="email"
                        placeholder="Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="placeholder:text-xs"
                        placeholder="Phone (Optional)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Reason */}
              <FormField
                control={form.control}
                name="reason"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="placeholder:text-xs"
                        placeholder="Reason for Contact"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        className="resize-none h-24 sm:h-28 placeholder:text-xs"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary h-11 mt-5 hover:bg-primary/70 hover:text-zinc-500 transition-all duration-200"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;
