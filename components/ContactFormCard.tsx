"use client";

import { useState } from "react";
import Button from "./ui/Button";
import { Loader2, CheckCircle, X } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

interface ContactFormCardProps {
  onClose?: () => void;
}

export default function ContactFormCard({ onClose }: ContactFormCardProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.projectType.trim()) {
      newErrors.projectType = "Project type is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/meeyeqrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Form submission failed");

      setIsSuccess(true);
      setFormData({ name: "", email: "", projectType: "", message: "" });

      // Reset success message after 4 seconds
      setTimeout(() => setIsSuccess(false), 4000);
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field: keyof FormErrors) =>
    `w-full rounded-xl bg-gray-100 px-4 py-3 outline-none transition ${
      errors[field]
        ? "ring-2 ring-red-400 bg-red-50"
        : "focus:ring-2 focus:ring-primary/30"
    }`;

  const content = (
    <section className={onClose ? "" : "py-20 bg-white"}>
      <div className={onClose ? "" : "max-w-7xl mx-auto px-"}>
        <div
          className={`bg-[#1747B8] rounded-[36px] p-8 lg:p-14 grid lg:grid-cols-2 gap-16 items-center ${onClose ? "relative" : ""}`}
        >
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition z-10"
            >
              <X size={20} />
            </button>
          )}
          {/* Left Side */}
          <div className="text-white max-w-md">
            <h2 className="text-5xl font-bold leading-tight">
              Ready to build
              <br />
              something
              <br />
              remarkable?
            </h2>

            <p className="mt-8 text-white/80 text-lg leading-8">
              Let&apos;s define your future together. Fill out the form and our
              strategy lead will reach out within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#071C2A] mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClasses("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClasses("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Project type <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="Full Rebrand"
                    className={inputClasses("projectType")}
                  />
                  {errors.projectType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your challenges..."
                    className={`${inputClasses("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  text={isSubmitting ? "Sending..." : "Send Message"}
                  bgColor="bg-primary"
                  textColor="text-white"
                  className="w-full justify-center"
                  disabled={isSubmitting}
                  icon={
                    isSubmitting ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : undefined
                  }
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  if (onClose) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/60" onClick={onClose} />
        <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[36px]">
          {content}
        </div>
      </div>
    );
  }

  return content;
}
