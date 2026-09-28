import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Clock3,
  Facebook,
  GraduationCap,
  Instagram,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Twitter,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Khalid Bin Amir | MBBS Doctor in Kolkata" },
      {
        name: "description",
        content:
          "Meet Dr. Khalid Bin Amir, an MBBS doctor and medical intern in Kolkata focused on compassionate, evidence-based care.",
      },
      { property: "og:title", content: "Dr. Khalid Bin Amir | MBBS Doctor in Kolkata" },
      {
        property: "og:description",
        content: "Compassionate, evidence-based medical care in Kolkata.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://placehold.co/1200x630/0057FF/FFFFFF/png?text=Dr.+Khalid+Bin+Amir",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://placehold.co/1200x630/0057FF/FFFFFF/png?text=Dr.+Khalid+Bin+Amir",
      },
    ],
  }),
  component: PortfolioPage,
});

const sectionTitle = "text-title font-extrabold text-foreground";

function PortfolioPage() {
  const { doctor, about, education, rotations, services, certifications, contact } = siteContent;

  return (
    <div className="action-bar-offset min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top">
        <section className="relative border-b border-border" aria-labelledby="hero-title">
          <div className="page-container grid items-center gap-12 py-12 sm:gap-16 lg:gap-12 sm:py-16 lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:py-24">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-5 text-xs font-extrabold uppercase leading-relaxed tracking-[0.16em] text-primary sm:mb-6">{doctor.overline}</p>
              <h1 id="hero-title" className="text-display max-w-4xl font-extrabold text-foreground">{doctor.headline}</h1>
              <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground sm:mt-7 sm:text-xl">{doctor.support}</p>
              <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:gap-x-7 sm:mt-9">
                <Button asChild className="w-full min-[480px]:w-auto"><a href="#contact">{doctor.ctaLabel}<ArrowRight className="h-4 w-4" /></a></Button>
                <Button asChild variant="quiet" className="w-full min-[480px]:w-auto"><a href="#education">View credentials<ArrowDown className="h-4 w-4" /></a></Button>
              </div>
              <div className="mt-10 flex items-center gap-4 border-l-2 border-primary pl-5 sm:mt-12">
                <ShieldCheck className="h-6 w-6 shrink-0 text-primary" />
                <p className="text-body text-muted-foreground">Registered medical practitioner details available below</p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:mx-0">
              <div className="relative z-10 mx-auto aspect-[4/5] w-full max-w-[48svh] overflow-hidden rounded-lg border border-border-strong bg-secondary shadow-deep lg:mr-0 lg:w-[72%] lg:max-w-none">
                <img src={doctor.headshot} alt={`Portrait of ${doctor.name}`} width={880} height={1168} fetchPriority="high" decoding="async" className="h-full w-full object-cover object-top" />
              </div>
              <div className="relative z-20 mx-auto mt-4 w-full max-w-[48svh] rounded-lg border border-border bg-card p-4 shadow-raised lg:absolute lg:-bottom-7 lg:left-0 lg:mt-0 lg:w-auto lg:max-w-none">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{doctor.currentlyLabel}</p>
                <p className="mt-1 text-sm font-extrabold">{doctor.currentlyValue}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-offset section-y" aria-labelledby="about-title">
          <div className="page-container grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <div>
              <p className="section-kicker">01 · About</p>
              <h2 id="about-title" className={sectionTitle}>Care begins with listening.</h2>
            </div>
            <div>
              <div className="max-w-[65ch] space-y-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
                {about.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <dl className="mt-10 grid gap-6 border-t border-border pt-8 md:grid-cols-2">
                <div>
                  <dt className="flex items-center gap-2 text-sm font-bold text-foreground"><Languages className="h-4 w-4 text-primary" />Languages spoken</dt>
                  <dd className="text-body mt-2 text-muted-foreground">{about.languages.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-sm font-bold text-foreground"><ShieldCheck className="h-4 w-4 text-primary" />Registration</dt>
                  <dd className="text-body mt-2 break-words text-muted-foreground">{about.registration}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-offset section-y border-y border-border bg-surface" aria-labelledby="education-title">
          <div className="page-container">
            <p className="section-kicker">02 · Education</p>
            <h2 id="education-title" className={sectionTitle}>A foundation in medicine.</h2>
            <ol className="relative mt-10 max-w-4xl border-l border-border-strong md:mt-14">
              {education.map((item) => (
                <li key={item.title} className="relative grid gap-1 pb-10 pl-7 last:pb-0 md:grid-cols-[9rem_1fr] md:gap-8 md:pb-12 md:pl-10">
                  <span aria-hidden="true" className="absolute -left-2 top-1 h-4 w-4 rounded-full border-4 border-surface bg-primary" />
                  <p className="text-sm font-bold text-primary">{item.year}</p>
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-base text-muted-foreground md:mt-2">{item.place}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="experience" className="scroll-offset section-y" aria-labelledby="experience-title">
          <div className="page-container">
            <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-6">
              <div><p className="section-kicker">03 · Experience</p><h2 id="experience-title" className={sectionTitle}>Clinical rotations.</h2></div>
              <p className="max-w-[58ch] text-base leading-relaxed text-muted-foreground lg:justify-self-end">Supervised, hands-on exposure across core departments during internship.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:auto-rows-fr sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {rotations.map((rotation, index) => (
                <article key={rotation.title} className="tilt-card group flex flex-col rounded-lg border border-border bg-card p-6 shadow-soft sm:min-h-56">
                  <span className="text-xs font-extrabold text-primary">0{index + 1}</span>
                  <h3 className="mt-6 text-xl font-extrabold text-foreground sm:mt-10">{rotation.title}</h3>
                  <p className="text-body mt-3 text-muted-foreground">{rotation.description}</p>
                  <div className="mt-auto pt-6"><ArrowRight aria-hidden="true" className="h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-offset section-y bg-primary text-primary-foreground" aria-labelledby="services-title">
          <div className="page-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div>
              <p className="section-kicker section-kicker-inverse">04 · Areas of interest</p>
              <h2 id="services-title" className="text-title font-extrabold">Everyday care, made clear.</h2>
            </div>
            <ol className="divide-y divide-primary-foreground/25 border-y border-primary-foreground/25">
              {services.map((service) => (
                <li key={service.number} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 gap-y-2 py-6 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-5 sm:py-7">
                  <span className="pt-0.5 text-sm font-bold text-primary-foreground/90">{service.number}</span>
                  <h3 className="text-lg font-extrabold">{service.title}</h3>
                  <p className="text-body col-start-2 text-primary-foreground/90 sm:col-start-auto">{service.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-y" aria-labelledby="certifications-title">
          <div className="page-container grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <div><p className="section-kicker">05 · Certifications</p><h2 id="certifications-title" className={sectionTitle}>Continued learning.</h2></div>
            <ul className="border-t border-border">
              {certifications.map((certification) => (
                <li key={certification.title} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 gap-y-1 border-b border-border py-5 sm:grid-cols-[2rem_1fr_auto] sm:items-center sm:py-6">
                  <GraduationCap aria-hidden="true" className="mt-0.5 h-5 w-5 text-primary sm:mt-0" />
                  <span className="font-extrabold text-foreground">{certification.title}</span>
                  <span className="text-body col-start-2 text-muted-foreground sm:col-start-auto">{certification.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-offset section-y border-t border-border bg-surface" aria-labelledby="contact-title">
          <div className="page-container">
            <p className="section-kicker">06 · Contact</p>
            <h2 id="contact-title" className={sectionTitle}>Get in touch.</h2>
            <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-2 lg:gap-16">
              <div className="min-w-0">
                <address className="grid gap-5 not-italic">
                  <ContactRow icon={<MapPin />} label="Address" value={contact.address} />
                  <ContactRow icon={<Phone />} label="Phone" value={contact.phoneDisplay} href={contact.phoneHref} />
                  <ContactRow icon={<Mail />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                  <ContactRow icon={<Clock3 />} label="OPD timings" value={contact.timings} />
                </address>
                <Button asChild size="lg" className="mt-8 w-full sm:w-auto"><a href={contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" />{contact.whatsappLabel}</a></Button>
                <div className="mt-10 aspect-video overflow-hidden rounded-lg border border-border-strong bg-muted">
                  {contact.mapEmbedUrl ? (
                    <iframe src={contact.mapEmbedUrl} title={`Map: ${contact.address}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full border-0" />
                  ) : (
                    <div className="grid h-full place-items-center p-4 text-center"><div><MapPin className="mx-auto h-7 w-7 text-primary" /><p className="mt-3 text-sm font-bold">Google Map placeholder</p><p className="mt-1 text-xs text-muted-foreground">Kolkata, West Bengal</p></div></div>
                  )}
                </div>
              </div>
              <form action={contact.formAction} method="post" className="min-w-0 rounded-lg border border-border bg-card p-5 shadow-soft sm:p-8">
                <h3 className="text-2xl font-extrabold">Request an appointment</h3>
                <p className="text-body mt-2 text-muted-foreground">Leave your details and a short message for the clinic team.</p>
                <div className="mt-8 space-y-5">
                  <Field label="Name" name="name" type="text" autoComplete="name" />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" />
                  <label className="block text-sm font-bold text-foreground" htmlFor="message">Message<textarea id="message" name="message" rows={5} required className="form-field mt-2 resize-y" placeholder="How can Dr. Khalid help?" /></label>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">Send request<ArrowRight className="h-4 w-4" /></Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground py-12 text-background">
        <div className="page-container">
          <div className="grid gap-6 border-b border-background/20 pb-9 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
            <div><p className="text-xl font-extrabold">{doctor.name}</p><p className="mt-2 text-sm text-background/65">{doctor.credentials}</p></div>
            <div className="-ml-3 flex flex-wrap items-center gap-2 sm:ml-0 sm:gap-x-6 sm:gap-y-3">
              {[
                { label: "LinkedIn", href: siteContent.social.linkedin, Icon: Linkedin },
                { label: "Instagram", href: siteContent.social.instagram, Icon: Instagram },
                { label: "Facebook", href: siteContent.social.facebook, Icon: Facebook },
                { label: "Twitter / X", href: siteContent.social.twitter, Icon: Twitter },
              ].map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-sm text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background">
                  <Icon aria-hidden="true" className="h-5 w-5 sm:h-4 sm:w-4" /><span className="sr-only sm:not-sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-4 pt-7 text-sm leading-relaxed text-background/65 md:grid-cols-2 md:text-xs">
            <p>{siteContent.copyright}</p><p className="md:text-right">{siteContent.disclaimer}</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden">
        <div className="grid grid-cols-2 gap-3">
          <Button asChild size="lg" className="w-full"><a href={contact.phoneHref}><Phone className="h-4 w-4" />{contact.callLabel}</a></Button>
          <Button asChild size="lg" variant="outline" className="w-full"><a href={contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" />{contact.whatsappLabel}</a></Button>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4"><span aria-hidden="true" className="grid h-10 w-10 place-items-center text-primary [&_svg]:h-5 [&_svg]:w-5">{icon}</span><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>{href ? <a className="text-body inline-flex min-h-11 items-center break-all font-bold text-foreground underline-offset-4 hover:text-primary hover:underline" href={href}>{value}</a> : <p className="text-body mt-1 break-words font-bold text-foreground">{value}</p>}</div></div>;
}

function Field({ label, name, type, autoComplete, inputMode }: { label: string; name: string; type: string; autoComplete: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"] }) {
  return <label className="block text-sm font-bold text-foreground" htmlFor={name}>{label}<input id={name} name={name} type={type} autoComplete={autoComplete} inputMode={inputMode} required className="form-field mt-2" /></label>;
}
