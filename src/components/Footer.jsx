export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-bg to-bgLight text-muted px-4 sm:px-6 md:px-20 py-8 sm:py-14 border-t border-accent/20">
      <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:justify-between md:items-center">
        <p className="text-sm sm:text-base">© {new Date().getFullYear()} Carmen Soto</p>

        <a
          className="text-sm sm:text-base text-accent hover:text-white transition underline underline-offset-4 w-fit"
          href="https://wa.me/629939631"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
}
