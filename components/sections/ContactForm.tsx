"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { submitContact, type ContactActionState } from "@/app/contact/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// ── Editorial field: a bottom-rule input with a floating label, an index
//    marker, and a focus underline that draws in from the left. ──────────────
const inputClass =
  "peer block w-full border-0 border-b border-brand-line-soft bg-transparent pb-2.5 pt-1.5 text-[15px] font-light text-brand-ink placeholder-transparent focus:outline-none focus:ring-0";

const labelClass =
  "pointer-events-none absolute left-0 top-7 origin-left font-light text-brand-muted transition-all duration-300 ease-editorial " +
  "text-[14px] " +
  "peer-focus:top-0 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-caps peer-focus:text-brand-ink " +
  "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-caps peer-[:not(:placeholder-shown)]:text-brand-muted";

function fieldShell(index: string, label: string, optional?: boolean) {
  return { index, label, optional };
}

export function ContactForm() {
  const [feedback, setFeedback] = useState<ContactActionState | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", number: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setFeedback(null);
    const result = await submitContact(values);
    setFeedback(result);
    if (result.status === "success") form.reset();
  };

  const isSubmitting = form.formState.isSubmitting;
  const isDone = feedback?.status === "success";

  // Magnetic submit — pulls toward the cursor, snaps back on leave.
  const onBtnMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const el = btnRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.32}px)`;
  };
  const onBtnLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "";
  };

  if (isDone) {
    return (
      <div className="flex min-h-[420px] flex-col justify-center">
        <svg
          viewBox="0 0 64 64"
          className="mb-8 h-14 w-14 text-brand-ink"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            pathLength={1}
            className="animate-draw [stroke-dasharray:1]"
          />
          <path
            d="M20 33l8 8 16-18"
            pathLength={1}
            className="animate-draw [stroke-dasharray:1] [animation-delay:0.5s]"
          />
        </svg>
        <div className="mb-3 text-[10px] font-normal uppercase tracking-eyebrow text-brand-muted">
          Message sent
        </div>
        <h2 className="font-display text-[40px] font-normal italic leading-tight text-brand-ink max-[430px]:text-[32px]">
          Thank you.
        </h2>
        <p className="mt-4 max-w-[36ch] text-[14px] font-light leading-relaxed text-brand-muted">
          Your enquiry is on its way. We&apos;ll be in touch within one working
          day to arrange your free design visit.
        </p>
        <button
          type="button"
          onClick={() => setFeedback(null)}
          className="group mt-9 inline-flex w-fit items-center gap-2.5 text-[11px] font-normal uppercase tracking-btn text-brand-ink"
        >
          Send another
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </button>
      </div>
    );
  }

  const fields = [
    {
      ...fieldShell("01", "Name"),
      name: "name" as const,
      type: "text",
      autoComplete: "name",
    },
    {
      ...fieldShell("02", "Email"),
      name: "email" as const,
      type: "email",
      autoComplete: "email",
    },
    {
      ...fieldShell("03", "Phone", true),
      name: "number" as const,
      type: "tel",
      autoComplete: "tel",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div
          className="animate-reveal mb-2 text-[10px] font-normal uppercase tracking-eyebrow text-brand-muted"
          style={{ animationDelay: "0.2s" }}
        >
          The brief
        </div>
        <h2
          className="animate-reveal mb-10 text-[28px] font-light leading-tight text-brand-ink max-[430px]:text-[24px]"
          style={{ animationDelay: "0.3s" }}
        >
          Tell us about your{" "}
          <span className="font-display font-normal italic">project.</span>
        </h2>

        {fields.map((f, i) => (
          <FormField
            key={f.name}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem
                className="animate-reveal space-y-0"
                style={{ animationDelay: `${0.4 + i * 0.08}s` }}
              >
                <div className="relative pt-6">
                  <FormControl>
                    <input
                      type={f.type}
                      placeholder=" "
                      autoComplete={f.autoComplete}
                      className={inputClass}
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className={labelClass}>
                    {f.label}
                    {f.optional && (
                      <span className="ml-1.5 lowercase tracking-normal text-brand-muted-soft">
                        (optional)
                      </span>
                    )}
                  </FormLabel>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-7 text-[11px] font-light tracking-caps text-brand-muted-soft transition-colors duration-300 peer-focus:text-brand-ink"
                  >
                    {f.index}
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-brand-ink transition-transform duration-500 ease-editorial peer-focus:scale-x-100"
                  />
                </div>
                <FormMessage className="pt-2 text-[12px] font-normal" />
              </FormItem>
            )}
          />
        ))}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem
              className="animate-reveal space-y-0"
              style={{ animationDelay: "0.64s" }}
            >
              <div className="relative pt-6">
                <FormControl>
                  <textarea
                    placeholder=" "
                    rows={3}
                    className={cn(inputClass, "resize-none")}
                    {...field}
                  />
                </FormControl>
                <FormLabel className={labelClass}>Message</FormLabel>
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-7 text-[11px] font-light tracking-caps text-brand-muted-soft transition-colors duration-300 peer-focus:text-brand-ink"
                >
                  04
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-brand-ink transition-transform duration-500 ease-editorial peer-focus:scale-x-100"
                />
              </div>
              <FormMessage className="pt-2 text-[12px] font-normal" />
            </FormItem>
          )}
        />

        {feedback?.status === "error" && (
          <div
            className="mt-5 text-[12px] text-brand-danger"
            role="status"
            aria-live="polite"
          >
            {feedback.message}
          </div>
        )}

        <div
          className="animate-reveal mt-10 flex flex-wrap items-center gap-6"
          style={{ animationDelay: "0.72s" }}
        >
          <button
            ref={btnRef}
            type="submit"
            disabled={isSubmitting}
            onPointerMove={onBtnMove}
            onPointerLeave={onBtnLeave}
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-brand-ink px-9 py-4 text-[11px] font-normal uppercase tracking-btn text-white transition-[transform,background-color] duration-200 ease-out hover:bg-brand-ink-deep disabled:bg-brand-muted max-[430px]:w-full max-[430px]:justify-center"
          >
            <span className="relative z-10">
              {isSubmitting ? "Sending…" : "Send enquiry"}
            </span>
            {!isSubmitting && (
              <span
                aria-hidden
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            )}
          </button>
          <span className="text-[11px] font-light text-brand-muted">
            We reply within one working day.
          </span>
        </div>
      </form>
    </Form>
  );
}
