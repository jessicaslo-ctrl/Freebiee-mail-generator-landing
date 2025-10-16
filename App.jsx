import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Mail, Shield, Sparkles, ArrowRight, Download } from 'lucide-react'

const Input = (props) => (
  <input
    {...props}
    className={
      'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 transition focus:border-slate-400 ' +
      (props.className || '')
    }
  />
)

const Button = ({ asChild, children, className='', ...props }) => {
  if (asChild) return (
    <a className={'inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 ' + className} {...props}>{children}</a>
  )
  return (
    <button className={'inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 ' + className} {...props}>
      {children}
    </button>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [agree, setAgree] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !agree) return
    // TODO: replace with your email provider integration
    setSubmitted(true)
  }

  return (
    <div className=\"min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900\">
      {/* Hero */}
      <section className=\"relative overflow-hidden\">
        <div className=\"absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl\" />
        <div className=\"absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-100 blur-3xl\" />

        <div className=\"mx-auto max-w-6xl px-6 pt-16 pb-8 md:pt-20\">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className=\"grid gap-10 md:grid-cols-2 md:items-center\">
            <div>
              <div className=\"inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200\">
                <Sparkles className=\"h-3.5 w-3.5\" /> Neu: Arbeitsbuch als interaktives Canva‑PDF
              </div>
              <h1 className=\"mt-4 text-3xl font-bold tracking-tight md:text-5xl\">
                Der 7‑Tage‑E‑Mail‑Serie Generator
              </h1>
              <p className=\"mt-3 text-lg text-slate-600 md:text-xl\">
                Flexibel einsetzbar für jedes Produkt und jede Nische. Sammle die richtigen Antworten, wähle deinen Prompt – und starte mit einer verkaufsstarken 7‑Tage‑Serie.
              </p>
              <ul className=\"mt-6 space-y-2 text-sm text-slate-700\">
                <li className=\"flex items-start gap-2\"><Check className=\"mt-0.5 h-4 w-4 text-emerald-600\"/> Interaktives Arbeitsbuch (12 Seiten) + Word‑Vorlage</li>
                <li className=\"flex items-start gap-2\"><Check className=\"mt-0.5 h-4 w-4 text-emerald-600\"/> Zwei Wege: Freie Generierung oder Vorlage mit Platzhaltern</li>
                <li className=\"flex items-start gap-2\"><Check className=\"mt-0.5 h-4 w-4 text-emerald-600\"/> DSGVO‑Hinweis & klare Schritt‑für‑Schritt‑Guides</li>
              </ul>
            </div>

            <div className=\"border border-slate-200/80 bg-white shadow-sm rounded-xl p-6\">
              {!submitted ? (
                <form onSubmit={handleSubmit} className=\"space-y-4\">
                  <div className=\"flex items-center gap-2 text-sm font-medium text-slate-700\">
                    <Mail className=\"h-4 w-4\"/> Hol dir das Freebie per E‑Mail
                  </div>
                  <Input placeholder=\"Dein Name (optional)\" value={name} onChange={(e)=>setName(e.target.value)} />
                  <Input type=\"email\" required placeholder=\"E‑Mail-Adresse\" value={email} onChange={(e)=>setEmail(e.target.value)} />

                  <label className=\"flex items-start gap-3 text-sm text-slate-600 cursor-pointer select-none\">
                    <input type=\"checkbox\" checked={agree} onChange={(e)=>setAgree(e.target.checked)} className=\"mt-1 h-4 w-4\" />
                    <span>
                      Ich willige ein, per E‑Mail das Freebie und passende Tipps zu erhalten. Hinweis: Du kannst dich jederzeit abmelden. Näheres in der <a className=\"underline\" href=\"#privacy\">Datenschutzerklärung</a>.
                    </span>
                  </label>

                  <Button type=\"submit\" className=\"w-full\">
                    Freebie sichern <ArrowRight className=\"ml-1 h-4 w-4\"/>
                  </Button>
                  <p className=\"text-xs text-slate-500\">Kein Spam. Nur das Freebie + wenige Follow‑ups zur Umsetzung.</p>
                </form>
              ) : (
                <div className=\"space-y-4\">
                  <h3 className=\"text-xl font-semibold\">Fast geschafft! ✅</h3>
                  <p className=\"text-slate-600\">Wir haben deine Anfrage erhalten. Du bekommst das Arbeitsbuch per E‑Mail. Für den Sofort‑Start kannst du es hier direkt herunterladen:</p>
                  <div className=\"grid gap-3 sm:grid-cols-2\">
                    <Button asChild className=\"justify-start bg-white text-slate-900 border border-slate-200 hover:bg-slate-50\">
                      <a href=\"/freebie-generator.docx\" download>
                        <Download className=\"mr-2 h-4 w-4\"/> Word‑Version herunterladen
                      </a>
                    </Button>
                    <Button asChild className=\"justify-start\">
                      <a href=\"https://www.digikurswunder.com\" target=\"_blank\" rel=\"noopener noreferrer\">
                        Mehr über DigiKursWunder <ArrowRight className=\"ml-2 h-4 w-4\"/>
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What’s inside */}
      <section className=\"mx-auto max-w-6xl px-6 py-12 md:py-16\">
        <div className=\"grid gap-8 md:grid-cols-2\">
          <div>
            <h2 className=\"text-2xl font-semibold md:text-3xl\">Das bekommst du</h2>
            <ul className=\"mt-4 space-y-3 text-slate-700\">
              {[
                'Seite 1–2: Cover & Einleitung (So funktioniert es)',
                'Seite 3–8: Fragen 1–6 mit interaktiven Feldern (inkl. Bild/Mockup)',
                'Seite 9: Übergang zu Teil 2 (Check: Antworten gespeichert)',
                'Seite 10: Prompt 1 – Freie Generierung (Benefits + Prompt‑Box)',
                'Seite 11: Prompt 2 – Vorlage mit Platzhaltern (Tag 1–7)',
                'Seite 12: Danke‑Seite + Verweis auf DigiKursWunder',
              ].map((item) => (
                <li key={item} className=\"flex items-start gap-2\">
                  <Check className=\"mt-0.5 h-4 w-4 text-emerald-600\"/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className=\"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm\">
            <div className=\"aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50\"></div>
            <p className=\"mt-3 text-sm text-slate-600\">Platzhalter für ein Mockup deines PDFs/Word‑Dokuments – ersetze dieses Feld später mit einem echten Bild (z. B. aus Canva).</p>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className=\"bg-slate-50\">
        <div className=\"mx-auto max-w-6xl px-6 py-12 md:py-16\">
          <h2 className=\"text-2xl font-semibold md:text-3xl\">Warum diese Vorlage funktioniert</h2>
          <div className=\"mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3\">
            {[
              { title: 'Klarheit statt Chaos', desc: 'Die Fragen führen dich gezielt durch Nische, Produkt, Schmerzen & Wünsche – ohne Überforderung.' },
              { title: 'Zwei Wege – ein Ziel', desc: 'Wähle kreative Generierung oder klare Struktur. Beide Wege führen zu einer fertigen 7‑Tage‑Serie.' },
              { title: 'DSGVO‑freundlich', desc: 'Mit Einwilligungshinweis & Datenschutzerklärung bist du auf der sicheren Seite.' },
            ].map((f) => (
              <div key={f.title} className=\"rounded-xl border border-slate-200 bg-white p-5 shadow-sm\">
                <h3 className=\"font-semibold\">{f.title}</h3>
                <p className=\"mt-1 text-sm text-slate-600\">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className=\"mx-auto max-w-4xl px-6 py-12 md:py-16\">
        <h2 className=\"text-2xl font-semibold md:text-3xl\">Häufige Fragen</h2>
        <div className=\"mt-6 space-y-4\">
          {[
            { q: 'Brauche ich Grafik‑Skills?', a: 'Nein. Du bekommst eine Word‑Version und eine Canva‑Struktur. Du kannst sofort starten und später ein Mockup ergänzen.' },
            { q: 'Wie integriere ich mein E‑Mail‑Tool?', a: 'Ersetze die handleSubmit‑Logik im Code oder nutze das eingebettete Formular deines Tools (Mailchimp, ActiveCampaign, KlickTipp).' },
            { q: 'Ist das anonym nutzbar?', a: 'Ja. Du kannst mit Pseudonym arbeiten – Hinweise dazu findest du im Arbeitsbuch (Schritt 5).' },
          ].map((item) => (
            <div key={item.q} className=\"rounded-xl border border-slate-200 bg-white p-5 shadow-sm\">
              <p className=\"font-medium\">{item.q}</p>
              <p className=\"mt-1 text-sm text-slate-600\">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section id=\"privacy\" className=\"bg-slate-50\">
        <div className=\"mx-auto max-w-4xl px-6 py-10\">
          <div className=\"flex items-center gap-2 text-slate-700\"><Shield className=\"h-4 w-4\"/> Datenschutz in Kurzform</div>
          <p className=\"mt-2 text-sm text-slate-600\">
            Mit deiner Einwilligung senden wir dir das Freebie und wenige passende Tipps. Abmeldung jederzeit möglich. Weitere Details findest du in der vollständigen Datenschutzerklärung auf unserer Website.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className=\"mx-auto max-w-6xl px-6 pb-12\">
        <div className=\"mt-6 text-xs text-slate-500\">
          © {new Date().getFullYear()} Deine Brand. Alle Rechte vorbehalten. · <a href=\"https://www.digikurswunder.com\" className=\"underline\" target=\"_blank\" rel=\"noreferrer\">DigiKursWunder</a>
        </div>
      </footer>
    </div>
  )
}
