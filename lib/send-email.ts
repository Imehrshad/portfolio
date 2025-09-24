"use server";

import { ContactFormValues } from "@/components/contact-section";

export const SendEmail = async (values:ContactFormValues) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      subject: "Portfolio contact",
      message: values.message,
      fullname: values.fullname,
      phonenumber: values.phonenumber,
      email: values.email,
      meta: { timestamp: new Date().toISOString() },
    }),
  });
  if (!res.ok) throw new Error("Failed to send");
};
