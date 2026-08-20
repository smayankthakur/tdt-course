import Hero from "@/components/Hero";
import HowToEnroll from "@/components/HowToEnroll";
import CourseGrid from "@/components/CourseGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowToEnroll />
      <CourseGrid />
      <footer className="border-t border-[var(--border)] bg-[var(--bg-soft)] py-10 text-center text-xs text-[var(--muted)]">
        <p>© {new Date().getFullYear()} Mystic Arts School. All readings offered in good faith, for guidance and reflection.</p>
      </footer>
    </main>
  );
}
