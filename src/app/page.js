export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 px-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
            Kungfu Federation of India
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            A martial arts training platform — enroll in courses, register for
            events, take live-streamed exams, and shop for equipment.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-200"
            href="https://play.google.com/store/apps/details?id=com.neerajkk01.kungfuapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on Google Play
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 text-sm font-medium transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-zinc-800"
            href="/privacy"
          >
            Privacy Policy
          </a>
        </div>
      </main>

      <footer className="w-full border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Kungfu Federation of India. &mdash;{" "}
        <a href="/privacy" className="text-blue-600 underline dark:text-blue-400">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
