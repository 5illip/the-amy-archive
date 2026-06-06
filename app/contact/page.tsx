export const metadata = {
  title: 'Contact — The Amy Archive',
}

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      <div className="px-6 md:px-12 py-24">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase opacity-40 mb-5">
            Get in Touch
          </p>
          <h1 className="font-serif font-light text-[clamp(3rem,7vw,6rem)] leading-[1.05] mb-20">
            Find<br />
            <em>Amy</em>
          </h1>

          <div className="space-y-14">
            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40 mb-4">
                Inquiries
              </p>
              <a
                href="mailto:hello@theamyarchive.com"
                className="font-serif text-2xl md:text-3xl hover:opacity-40 transition-opacity"
              >
                hello@theamyarchive.com
              </a>
            </div>

            <div>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40 mb-4">
                Instagram
              </p>
              <a
                href="https://instagram.com/theamyarchive"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl md:text-3xl hover:opacity-40 transition-opacity"
              >
                @theamyarchive
              </a>
            </div>

            <div className="pt-10 border-t border-ink/10">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-40 mb-4">
                Custom & Commission
              </p>
              <p className="font-sans font-light text-base leading-[1.8] opacity-60 max-w-md">
                Each archive object is one of a kind. If you have something
                specific in mind — a commission, a custom brooch arrangement, a
                piece made for an occasion — reach out directly. Some of the
                best things in the archive started with a conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
