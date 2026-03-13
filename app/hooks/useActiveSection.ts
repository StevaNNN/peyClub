"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const HEADER_HEIGHT = 140;
const SECTION_RATIO = 2.5;

const isSectionInView = (el: HTMLElement): boolean => {
  const threshold =
    window.innerHeight - window.innerHeight / SECTION_RATIO + HEADER_HEIGHT;
  const elTop = el.getBoundingClientRect().top;
  return elTop <= threshold;
};

export const useActiveSection = (
  sectionIds: readonly string[],
  locale: string,
) => {
  const [activeHash, setActiveHash] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      let activeId = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);

        if (!el) continue;

        if (isSectionInView(el)) {
          el.classList.add("in-view");
          activeId = id;
        } else {
          el.classList.remove("in-view");
        }
      }

      const d = document.getElementById("counter");
      if (!d) return;
      if (isSectionInView(d)) {
        d.classList.add("in-view");
      } else {
        d.classList.remove("in-view");
      }

      setActiveHash(activeId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = useCallback((slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveHash(slug);
  }, []);

  const scrollToTop = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (pathname === `/${locale}`) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(`/${locale}`);
      }
      setActiveHash("");
    },
    [pathname, locale, router],
  );

  return { activeHash, scrollToSection, scrollToTop } as const;
};
