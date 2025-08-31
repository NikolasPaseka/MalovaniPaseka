import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Phone, Mail, Home as HomeIcon, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

// Paintbrush icon component
const Paintbrush = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>
    <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>
    <path d="M14.5 17.5 4.5 15"/>
  </svg>
)

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-900 to-black">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14 lg:py-16">
          {/* Hero illustration */}
        
            <div className="text-center text-zinc-400 w-full justify-center flex rounded-lg">
              <img
                src="/painter_image.png"
                alt="Mytí oken stěrkou"
                className="object-cover h-48 w-92 rounded-lg"
                loading="lazy"
              />
            </div>
          
          <div className="flex items-center gap-2 text-sky-400 mb-4">
            <HomeIcon className="h-6 w-6" />
            <span className="font-semibold tracking-wide">Malování Paseka</span>
            <Paintbrush />
          </div>

          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl mb-6">
            Malování Paseka – profesionální malířské a natěračské práce
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-200 sm:text-xl mb-8">
            Postaráme se o to, aby váš domov i firma vypadaly skvěle! Nabízíme kvalitní malířské a natěračské služby:
          </p>

          {/* Key services */}
          <ul className="space-y-4 text-xl sm:text-2xl mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-7 w-7 text-sky-400" />
              <span className="font-semibold">Malování interiérů a exteriérů</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-7 w-7 text-sky-400" />
              <span className="font-semibold">Natěračské práce kovů a dřeva</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-7 w-7 text-sky-400" />
              <div>
                <span className="font-semibold">Renovace fasád a opravy povrchů</span>
                <span className="ml-1 text-zinc-300">– s dlouhodobou zárukou kvality</span>
              </div>
            </li>
          </ul>

          {/* Benefits */}
          <div className="grid gap-3 text-base sm:text-lg text-zinc-200 mb-8">
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
              <span>Kvalitní barvy a materiály od renomovaných výrobců</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
              <span>Rychlé a precizní provedení</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-sky-400" />
              <span>
                Dojíždíme po <strong>celé České republice</strong> (sídlo: Brno)
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white">
              <a href="tel:+420123456789">
                <Phone className="mr-2 h-5 w-5" />
                Zavolat: 775 442 003
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sky-600 text-sky-400 hover:bg-sky-950 bg-transparent"
            >
              <a href="mailto:malovanipaseka@seznam.cz?subject=Poptávka%20malířských%20prací&body=Dobrý%20den,%20rád(a)%20bych%20poptal(a)%20malířské%20práce.">
                <Mail className="mr-2 h-5 w-5" />
                Napsat e‑mail
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-zinc-900 hover:bg-zinc-100">
              <Link to="/cenik">
                <ArrowRight className="mr-2 h-5 w-5" />
                Zobrazit ceník
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section className="bg-white text-zinc-900 py-16 px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left: copy */}
          <div>
            <Badge className="bg-sky-600 hover:bg-sky-600 mb-4">Profesionální malířské služby</Badge>
            <h2 className="text-2xl font-bold sm:text-3xl mb-4">Co pro vás uděláme</h2>
            <p className="text-zinc-700 mb-6">
              Každou zakázku řešíme individuálně. Používáme kvalitní materiály a moderní techniky, aby byl výsledek
              perfektní a dlouhodobě odolný.
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" />
                  <div>
                    <div className="font-semibold">Malování interiérů</div>
                    <div className="text-sm text-zinc-600">Pokoje, kanceláře, chodby a společné prostory</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" />
                  <div>
                    <div className="font-semibold">Malování exteriérů a fasád</div>
                    <div className="text-sm text-zinc-600">Ochrana a zkrášlení vnějších ploch</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" />
                  <div>
                    <div className="font-semibold">Natěračské práce</div>
                    <div className="text-sm text-zinc-600">Kovy, dřevo, ploty a další povrchy</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" />
                  <div>
                    <div className="font-semibold">Renovace a opravy</div>
                    <div className="text-sm text-zinc-600">Obnova starých povrchů a fasád</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: gallery and contact card */}
          <div>
            <div className="grid grid-cols-3 gap-3 py-4">
              <img
                src="/image1.jpg"
                alt="Čištění koberce vysavačem"
                width={240}
                height={180}
                className="h-full w-full rounded-lg object-cover"
                loading="eager"
              />
              <img
                src="/image2.jpg"
                alt="Čištění sedačky a čalounění"
                width={240}
                height={180}
                className="h-full w-full rounded-lg object-cover"
                loading="lazy"
              />
              <img
                src="/image4.jpg"
                alt="Mytí oken stěrkou"
                width={240}
                height={180}
                className="h-full w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>

            <Card className="border-sky-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
                <p className="text-zinc-700 mb-4">Objednávky a dotazy:</p>
                <div className="space-y-3">
                  <a href="mailto:info@malovanipaseka.cz" className="flex items-center gap-3 text-sky-700 hover:underline">
                    <Mail className="h-5 w-5" />
                    malovanipaseka@seznam.cz
                  </a>
                  <a href="tel:+420123456789" className="flex items-center gap-3 text-sky-700 hover:underline">
                    <Phone className="h-5 w-5" />
                    775 442 003
                  </a>
                  <div className="flex items-center gap-3 text-sky-700">
                    <HomeIcon className="h-5 w-5" />
                    IČO: 03874419
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="my-4">
              <CardContent className="flex items-center gap-4 p-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-600" />
                  <div>
                    <div className="font-semibold">Provádíme i uklízecí a čistící práce</div>
                    <div className="text-sm text-zinc-600">Odkaz na stránky zde: <a href="https://cistydomov.vercel.app" className="text-sky-600 hover:underline">Cisty Domov</a></div>
                  </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
