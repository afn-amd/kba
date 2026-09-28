import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
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

const sectionTitle = "text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl";

function MedicalLoop() {
  return (
    <div className="medical-scene" aria-hidden="true">
      <div className="medical-loop medical-loop-one" />
      <div className="medical-loop medical-loop-two" />
      <div className="medical-orbit-dot" />
      <div className="medical-core">KA</div>
    </div>
  );
}

function PortfolioPage() {
  const { doctor, about, education, rotations, services, certifications, contact } = siteContent;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:h-20 sm:px-8 lg:px-12">
          <a href="#top" className="flex min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary text-sm font-extrabold text-primary-foreground shadow-soft">KA</span>
            <span className="truncate text-sm font-extrabold sm:text-base">{doctor.name}</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>
          <Button asChild className="hidden sm:inline-flex">
            <a href="#contact"><CalendarDays className="h-4 w-4" />Book an Appointment</a>
          </Button>
          <Button asChild className="sm:hidden" aria-label="Book an appointment">
            <a href="#contact"><CalendarDays className="h-4 w-4" /><span className="hidden min-[420px]:inline">Book</span></a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative border-b border-border" aria-labelledby="hero-title">
          <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:px-12 lg:py-24">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.16em] text-primary">{doctor.overline}</p>
              <h1 id="hero-title" className="max-w-4xl text-5xl font-extrabold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl">{doctor.headline}</h1>
              <p className="mt-7 max-w-[62ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">{doctor.support}</p>
              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
                <Button asChild><a href="#contact">Book an Appointment<ArrowRight className="h-4 w-4" /></a></Button>
                <Button asChild variant="quiet"><a href="#education">View credentials<ArrowDown className="h-4 w-4" /></a></Button>
              </div>
              <div className="mt-12 flex items-center gap-4 border-l-2 border-primary pl-5">
                <ShieldCheck className="h-6 w-6 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">Registered medical practitioner details available below</p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:mx-0">
              <div className="absolute -right-14 -top-20 hidden sm:block"><MedicalLoop /></div>
              <div className="headshot-frame relative z-10 ml-auto aspect-[4/5] w-[78%] overflow-hidden rounded-lg border border-border-strong bg-secondary shadow-deep sm:w-[72%]">
                <div className="sr-only">Professional photo placeholder</div>
              </div>
              <div className="absolute -bottom-7 left-0 z-20 rounded-lg border border-border bg-card p-4 shadow-raised">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">Currently</p>
                <p className="mt-1 text-sm font-extrabold">Medical Intern · Kolkata</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
            <div>
              <p className="section-kicker">01 · About</p>
              <h2 id="about-title" className={sectionTitle}>Care begins with listening.</h2>
            </div>
            <div>
              <div className="max-w-[65ch] space-y-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
                {about.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <dt className="flex items-center gap-2 text-sm font-bold text-foreground"><Languages className="h-4 w-4 text-primary" />Languages spoken</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{about.languages.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 text-sm font-bold text-foreground"><ShieldCheck className="h-4 w-4 text-primary" />Registration</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{about.registration}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-20 border-y border-border bg-surface py-20 sm:py-28" aria-labelledby="education-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <p className="section-kicker">02 · Education</p>
            <h2 id="education-title" className={sectionTitle}>A foundation in medicine.</h2>
            <ol className="relative mt-14 max-w-4xl border-l border-border-strong">
              {education.map((item) => (
                <li key={item.title} className="relative grid gap-2 pb-12 pl-8 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:pl-10">
                  <span className="absolute -left-2 top-1.5 h-4 w-4 rounded-full border-4 border-surface bg-primary" />
                  <p className="text-sm font-bold text-primary">{item.year}</p>
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{item.place}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 py-20 sm:py-28" aria-labelledby="experience-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div><p className="section-kicker">03 · Experience</p><h2 id="experience-title" className={sectionTitle}>Clinical rotations.</h2></div>
              <p className="max-w-[58ch] text-base leading-relaxed text-muted-foreground lg:justify-self-end">Supervised, hands-on exposure across core departments during internship.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rotations.map((rotation, index) => (
                <article key={rotation.title} className="tilt-card group min-h-56 rounded-lg border border-border bg-card p-6 shadow-soft">
                  <span className="text-xs font-extrabold text-primary">0{index + 1}</span>
                  <h3 className="mt-10 text-xl font-extrabold text-foreground">{rotation.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{rotation.description}</p>
                  <ArrowRight className="mt-6 h-4 w-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28" aria-labelledby="services-title">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
            <div>
              <p className="section-kicker section-kicker-inverse">04 · Areas of interest</p>
              <h2 id="services-title" className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">Everyday care, made clear.</h2>
            </div>
            <ol className="divide-y divide-primary-foreground/25 border-y border-primary-foreground/25">
              {services.map((service) => (
                <li key={service.number} className="grid gap-3 py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-5">
                  <span className="text-sm font-bold text-primary-foreground/70">{service.number}</span>
                  <h3 className="text-lg font-extrabold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/75">{service.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 sm:py-28" aria-labelledby="certifications-title">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
            <div><p className="section-kicker">05 · Certifications</p><h2 id="certifications-title" className={sectionTitle}>Continued learning.</h2></div>
            <ul className="border-t border-border">
              {certifications.map((certification) => (
                <li key={certification.title} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[2rem_1fr_auto] sm:items-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="font-extrabold text-foreground">{certification.title}</span>
                  <span className="text-sm text-muted-foreground">{certification.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border bg-surface py-20 sm:py-28" aria-labelledby="contact-title">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <p className="section-kicker">06 · Contact</p>
            <h2 id="contact-title" className={sectionTitle}>Get in touch.</h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <address className="grid gap-5 not-italic">
                  <ContactRow icon={<MapPin />} label="Address" value={contact.address} />
                  <ContactRow icon={<Phone />} label="Phone" value={contact.phoneDisplay} href={contact.phoneHref} />
                  <ContactRow icon={<Mail />} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                  <ContactRow icon={<Clock3 />} label="OPD timings" value={contact.timings} />
                </address>
                <Button asChild className="mt-8"><a href={contact.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" />WhatsApp</a></Button>
                <div className="mt-10 grid aspect-[16/8] place-items-center rounded-lg border border-border-strong bg-muted">
                  <div className="text-center"><MapPin className="mx-auto h-7 w-7 text-primary" /><p className="mt-3 text-sm font-bold">Google Map placeholder</p><p className="mt-1 text-xs text-muted-foreground">Kolkata, West Bengal</p></div>
                </div>
              </div>
              <form action={contact.formAction} method="post" className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-8">
                <h3 className="text-2xl font-extrabold">Request an appointment</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Leave your details and a short message for the clinic team.</p>
                <div className="mt-8 space-y-5">
                  <Field label="Name" name="name" type="text" autoComplete="name" />
                  <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
                  <label className="block text-sm font-bold text-foreground" htmlFor="message">Message<textarea id="message" name="message" rows={5} required className="form-field mt-2 resize-y" placeholder="How can Dr. Khalid help?" /></label>
                  <Button type="submit" className="w-full sm:w-auto">Send request<ArrowRight className="h-4 w-4" /></Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground pb-24 pt-12 text-background sm:pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-background/20 pb-9 sm:grid-cols-[1fr_auto] sm:items-end">
            <div><p className="text-xl font-extrabold">{doctor.name}</p><p className="mt-2 text-sm text-background/65">{doctor.credentials}</p></div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { label: "LinkedIn", href: siteContent.social.linkedin, Icon: Linkedin },
                { label: "Instagram", href: siteContent.social.instagram, Icon: Instagram },
                { label: "Facebook", href: siteContent.social.facebook, Icon: Facebook },
                { label: "Twitter / X", href: siteContent.social.twitter, Icon: Twitter },
              ].map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background">
                  <Icon className="h-4 w-4" />{label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-4 pt-7 text-xs leading-relaxed text-background/65 sm:grid-cols-2">
            <p>{siteContent.copyright}</p><p className="sm:text-right">{siteContent.disclaimer}</p>
          </div>
        </div>
      </footer>

      <a href={contact.phoneHref} className="fixed inset-x-4 bottom-4 z-50 flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary font-bold text-primary-foreground shadow-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:hidden"><Phone className="h-4 w-4" />Call {doctor.name}</a>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return <div className="grid grid-cols-[2.5rem_1fr] gap-4"><span className="grid h-10 w-10 place-items-center text-primary [&_svg]:h-5 [&_svg]:w-5">{icon}</span><div><p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>{href ? <a className="mt-1 inline-block text-sm font-bold text-foreground underline-offset-4 hover:text-primary hover:underline" href={href}>{value}</a> : <p className="mt-1 text-sm font-bold text-foreground">{value}</p>}</div></div>;
}

function Field({ label, name, type, autoComplete }: { label: string; name: string; type: string; autoComplete: string }) {
  return <label className="block text-sm font-bold text-foreground" htmlFor={name}>{label}<input id={name} name={name} type={type} autoComplete={autoComplete} required className="form-field mt-2" /></label>;
}