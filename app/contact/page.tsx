export const metadata = {
  title: 'Contact — The Amy Archive',
}

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          <div>
            <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-ink/35 mb-4">
              Contact
            </p>
            <h1 className="font-serif font-light text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.1]">
              Find<br /><em>Amy</em>
            </h1>
          </div>

          <div className="space-y-14">
            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/35 mb-4">
                Inquiries
              </p>
              <a
                href="mailto:hello@theamyarchive.com"
                className="font-serif font-light text-2xl md:text-3xl hover:opacity-40 transition-opacity"
              >
                hello@theamyarchive.com
              </a>
            </div>

            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/35 mb-4">
                Instagram
              </p>
              <a
                href="https://instagram.com/theamyarchive"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif font-light text-2xl md:text-3xl hover:opacity-40 transition-opacity"
              >
                @theamyarchive
              </a>
            </div>

            <div className="pt-10 border-t border-ink/[0.06]">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/35 mb-4">
                Custom & Commission
              </p>
              <p className="font-sans font-light text-sm leading-[1.9] text-ink/55 max-w-sm">
                Each archive object is one of a kind. If you have something
                specific in mind — a commission, a custom brooch arrangement, a
                piece made for an occasion — reach out directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
