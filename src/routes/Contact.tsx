import { hero } from "@/assets";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  reason: z.string().min(2, "Reason is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="mt-20 md:mt-40 px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-2xl sm:text-3xl md:text-5xl uppercase px-4 sm:px-10">
            Connect with Nevo Capital
          </p>
          <div className="relative mt-3 w-40 sm:w-60 md:w-80">
            <div className="absolute -top-[4.5px] -left-1 bg-cta w-3 h-3 rounded-full"></div>
            <hr className="border-2 border-cta" />
            <div className="absolute -top-[4.5px] -right-1 bg-cta w-3 h-3 rounded-full"></div>
          </div>

          <div className="mt-10 sm:mt-16 max-w-4xl sm:px-6">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-400">
              Whether you're exploring investment opportunities or have
              questions, our team is here to assist.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 md:px-20 py-12 md:py-28">
        {/* Image */}
        <div className="flex items-center justify-center w-full">
          <img
            src={hero}
            alt="Nevo Capital"
            className="w-48 sm:w-64 md:w-72 lg:w-80"
          />
        </div>

        {/* Form */}
        <div className="flex items-center justify-center w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md flex flex-col gap-5"
          >
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
                className="w-full border-b-2 border-white focus:outline-none py-2 text-sm sm:text-base"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="w-full border-b-2 border-white focus:outline-none py-2 text-sm sm:text-base"
              />
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="text"
                placeholder="Phone (Optional)"
                {...register("phone")}
                className="w-full border-b-2 border-white focus:outline-none py-2 text-sm sm:text-base"
              />
            </div>

            {/* Reason for Contact */}
            <div>
              <input
                type="text"
                placeholder="Reason for Contact"
                {...register("reason")}
                className="w-full border-b-2 border-white focus:outline-none py-2 text-sm sm:text-base"
              />
              {errors.reason && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.reason.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message"
                {...register("message")}
                className="w-full border-b-2 border-white focus:outline-none py-2 resize-none h-24 sm:h-28 text-sm sm:text-base"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-footer rounded hover:bg-footer font-semibold py-2 text-sm sm:text-base hover:opacity-80 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
