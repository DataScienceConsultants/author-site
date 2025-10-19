import cover from "./cover.jpg";

export default function AuthorSite() {
  const COVER = cover; // production import
  const AMAZON_URL = "https://www.amazon.com/dp/B0FQJ8LLNW"; // Kindle edition on Amazon.com
  
  const BLURBS = [
    { quote: "Such a great read—meaningful for anyone who values marriage and family.", source: "Amazon Reviewer", initials: "J.V.", stars: 5 },
    { quote: "The author’s real‑life experiences open your mind to questions you might not have thought to ask.", source: "Amazon Reviewer", initials: "M.R.", stars: 5 },
    { quote: "Tough topics like finances, prenups, and state laws are organized in a way that’s easy to reflect on.", source: "Amazon Reviewer", initials: "S.P.", stars: 5 },
    { quote: "The end‑of‑chapter questions help you think about your own relationship.", source: "Amazon Reviewer", initials: "L.C.", stars: 5 },
    { quote: "Her authenticity shines—she shares to help others find joy, growth, and happiness in marriage.", source: "Amazon Reviewer", initials: "A.D.", stars: 5 },
    { quote: "An easy, thoughtful read that encourages reflection on what truly matters at any stage of marriage.", source: "Amazon Reviewer", initials: "K.H.", stars: 5 },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-semibold tracking-widest text-lg">Jennis Vicente‑Feliciano</div>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-zinc-700 hover:underline underline-offset-4">Home</a>
            <a href="#book" className="hover:text-zinc-700 hover:underline underline-offset-4">The Book</a>
            <a href="#about" className="hover:text-zinc-700 hover:underline underline-offset-4">About</a>
            <a href="#contact" className="hover:text-zinc-700 hover:underline underline-offset-4">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-medium tracking-wider text-zinc-600">AUTHOR • SPEAKER</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">What Not to Do When You Get Married</h1>
          <p className="mt-4 text-zinc-800 max-w-prose">Real talk on love, money, and divorce recovery—practical lessons learned the hard way, so you don’t have to.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800">Buy on Amazon</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-zinc-300 text-sm font-medium hover:bg-zinc-100">Invite to Speak</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="aspect-[3/4] w-full max-w-sm rounded-2xl border border-zinc-200 shadow-sm bg-white flex items-center justify-center overflow-hidden">
            <img src={COVER} alt="What Not to Do When You Get Married — book cover" className="h-full w-full object-contain" />
          </div>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">About the Book</h2>
            <p className="mt-3 text-zinc-800">Raised to be independent yet pulled by tradition, Jennis shows how love and money collide—and how to protect both. You’ll learn about prenups without stigma, aligned budgets, and how to spot financial red flags before they hurt.</p>
            <ul className="mt-4 text-zinc-800 list-disc pl-5 space-y-2">
              <li>Actionable frameworks and checklists</li>
              <li>Journal prompts at the end of every chapter</li>
              <li>Guidance for newlyweds, married couples, and those rebuilding after divorce</li>
            </ul>
            <div id="buy" className="mt-6 flex flex-wrap gap-3">
              <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-3 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800">Buy on Amazon</a>
              <a href="/sample.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex px-5 py-3 rounded-xl border border-zinc-300 text-sm font-medium hover:bg-zinc-100">Read Sample (PDF)</a>
            </div>
          </div>
          <aside className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold">Quick Details</h3>
            <dl className="mt-3 text-sm space-y-2">
              <div className="flex justify-between"><dt className="text-zinc-600">Author</dt><dd>Jennis Vicente‑Feliciano</dd></div>
              <div className="flex justify-between"><dt className="text-zinc-600">Genre</dt><dd>Memoir • Personal Finance</dd></div>
              <div className="flex justify-between"><dt className="text-zinc-600">Format</dt><dd>Paperback • eBook</dd></div>
              <div className="flex justify-between"><dt className="text-zinc-600">Pages</dt><dd>~250</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="praise" className="scroll-mt-24 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Praise</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {BLURBS.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="text-[#0EA5A4] text-sm" aria-label={`${t.stars} out of 5 stars`}>
                  {"★".repeat(Math.max(0, Math.min(5, t.stars || 5)))}
                  {"☆".repeat(5 - Math.max(0, Math.min(5, t.stars || 5)))}
                </div>
                <blockquote className="mt-2 text-zinc-900">“{t.quote}”</blockquote>
                <figcaption className="mt-2 text-sm text-zinc-600">— {t.initials ?? t.source}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Where to Start</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="text-xs tracking-widest text-zinc-600">NEW READERS</div>
              <div className="mt-2 font-semibold">Start with the Book</div>
              <p className="mt-2 text-sm text-zinc-800">Jump straight into the stories & tools—Chapter prompts included.</p>
              <a href="#book" className="mt-3 inline-flex text-sm font-medium underline">Learn more</a>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="text-xs tracking-widest text-zinc-600">FOR COUPLES</div>
              <div className="mt-2 font-semibold">Monthly Money Check‑In</div>
              <p className="mt-2 text-sm text-zinc-800">Free worksheet to make money talks kind & clear.</p>
              <a href="#newsletter" className="mt-3 inline-flex text-sm font-medium underline">Get the worksheet</a>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="text-xs tracking-widest text-zinc-600">FOR MEDIA</div>
              <div className="mt-2 font-semibold">Press & Speaking</div>
              <p className="mt-2 text-sm text-zinc-800">Bio, topics, headshots, and booking info.</p>
              <a href="#press" className="mt-3 inline-flex text-sm font-medium underline">Open press kit</a>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="scroll-mt-24 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold">Join the List</h2>
            <p className="mt-3 text-zinc-800">Get chapter drops, event invites, and practical money prompts—1–2× per month. No spam.</p>
          </div>
          <form className="flex gap-3">
            <input type="email" placeholder="you@email.com" className="flex-1 rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"/>
            <button type="button" className="px-5 py-3 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="press" className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Press Kit</h2>
          <p className="mt-3 text-zinc-800 max-w-prose">Download a ready‑to‑use media kit: long & short bios, headshots, book cover, one‑sheet, and talk topics.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/press-kit.zip" download className="px-5 py-3 rounded-xl border border-zinc-300 text-sm font-medium hover:bg-zinc-100">Download ZIP</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800">Book Jennis</a>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold">About Jennis</h2>
            <p className="mt-3 text-zinc-800">Jennis is a writer, entrepreneur, and data‑driven creative based in Arizona with roots in Puerto Rico. She helps readers navigate love and money with clarity and courage.</p>
            <p className="mt-3 text-zinc-800">When she isn’t writing, she’s building community through fashion, events, and tech tools that make life (and business) smoother for women.</p>
          </div>
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold">Signature Topics</h3>
            <ul className="mt-3 list-disc pl-5 text-zinc-800 space-y-2">
              <li>Money talks for couples (that actually work)</li>
              <li>Financial boundaries and self‑respect</li>
              <li>Rebuilding after divorce—practical steps</li>
              <li>AI & creativity for indie authors</li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold tracking-widest">Jennis Vicente‑Feliciano</div>
            <p className="mt-4 text-sm text-zinc-600 max-w-xs">Author site for Jennis Vicente‑Feliciano. Booking, press, and event inquiries welcome.</p>
          </div>
          <div>
            <div className="font-semibold">Links</div>
            <ul className="mt-3 text-sm text-zinc-800 space-y-2">
              <li><a className="hover:underline" href="#book">The Book</a></li>
              <li><a className="hover:underline" href="#about">About</a></li>
              <li><a className="hover:underline" href={AMAZON_URL} target="_blank" rel="noopener noreferrer">Amazon</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-3 text-sm text-zinc-800 space-y-2">
              <li>Email: <a className="hover:underline" href="mailto:jennis.m.vicente@gmail.com">jennis.m.vicente@gmail.com</a></li>
              <li>Instagram: <a className="hover:underline" href="#">@jaemv</a></li>
              <li>LinkedIn: <a className="hover:underline" href="#">Jennis Vicente‑Feliciano</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-600">© {new Date().getFullYear()} JAEMV LLC. All rights reserved.
          <br/>Built with love by Data Science Consultants, LLC for JAEMV LLC.</div>
      </footer>
    </div>
  );
}
