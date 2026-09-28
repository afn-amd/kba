import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

const PANEL_ID = "mobile-menu";

export function SiteHeader() {
  const { doctor, navigation } = siteContent;
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current || !toggleRef.current) return;

      // Trap focus within the toggle button and the panel while the menu is open.
      const focusable = [
        toggleRef.current,
        ...panelRef.current.querySelectorAll<HTMLElement>("a[href], button"),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      const active = document.activeElement as HTMLElement | null;
      if (!active || !focusable.includes(active)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="page-container grid h-(--header-h) grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a
          href="#top"
          onClick={close}
          className="flex min-h-11 min-w-0 items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="medical-scene medical-mark shrink-0" aria-hidden="true">
            <span className="medical-loop medical-loop-one" />
            <span className="medical-loop medical-loop-two" />
            <span className="medical-orbit-dot" />
            <span className="medical-sphere" />
          </span>
          <span className="truncate text-sm font-extrabold sm:text-base">{doctor.name}</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          ref={toggleRef}
          type="button"
          variant="ghost"
          size="icon"
          className="-mr-2 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls={PANEL_ID}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <div
        ref={panelRef}
        id={PANEL_ID}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-200 lg:hidden"
      >
        <nav
          aria-label="Mobile navigation"
          className="page-container flex min-h-full flex-col py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]"
        >
          <ul className="divide-y divide-border border-y border-border">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="flex min-h-14 items-center justify-between gap-4 rounded-sm text-lg font-extrabold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            <Button asChild size="lg" className="w-full">
              <a href="#contact" onClick={close}>
                {doctor.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
