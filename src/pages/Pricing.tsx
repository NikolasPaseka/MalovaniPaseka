import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, Receipt, Truck, MapPin, ArrowRight } from 'lucide-react'

type Item = { name: string; price?: string }

function PriceList({
  title = "Služba",
  items = [],
  ctaHref = "mailto:malovanipaseka@email.cz?subject=Poptávka%20služby",
}: {
  title?: string
  items?: Item[]
  ctaHref?: string
}) {
  return (
    <Card className="bg-white">
      <CardContent className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-sky-400">{title}</h3>
        <div className="mt-4 divide-y">
          {items.map((it, i) => (
            <div key={i} className="flex items-center justify-between py-3 text-[15px]">
              <span className="text-zinc-800">{it.name}</span>
              <span className="font-medium text-zinc-900">{it.price ?? ""}</span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Button asChild variant="ghost" className="px-0 text-sky-600 hover:text-sky-500">
            <a href={ctaHref} aria-label={`Poptat službu: ${title}`}>
              Poptat službu <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
        <div className="flex items-center gap-3">
          <Badge className="bg-sky-600 hover:bg-sky-600">Ceník</Badge>
          <span className="sr-only">Ceník</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Ceník malířských prací</h1>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {/* Interiérové práce */}
          <PriceList
            title="Interiérové práce"
            items={[
              { name: "Oškrábání původních maleb", price: "od 45,- Kč/m²" },
              { name: "Broušení nových omítek", price: "od 30,- Kč/m²" },
              { name: "Penetrace podkladu", price: "18,- Kč/m²" },
              { name: "Akrylátování rohů a trhlin", price: "20,- Kč/m²" },
              { name: "Malba bílá netónovaná 1 vrstva Airless", price: "od 20,- Kč/m²" },
              { name: "Malba bílá netónovaná 1 vrstva Váleček", price: "od 30,- Kč/m²" },
              { name: "Příplatek za odstín barev 1 vrstva", price: "60,- Kč/m²" },
              { name: "Přechod barev", price: "130,- Kč/bm" },
              { name: "Zakrývací práce", price: "360,- Kč/hod" },
            ]}
          />

          {/* Malířské práce - renovace fasády */}
          <PriceList
            title="Malířské práce - renovace fasády"
            items={[
              { name: "Omytí fasády vysokotlakem", price: "od 22,- Kč/m²" },
              { name: "Omytí fasádního obkladu", price: "60,- Kč/m²" },
              { name: "Aplikace Caparol Capatox (biocidní přípravek)", price: "od 40,- Kč/m²" },
              { name: "Aplikace Caparol Disboxan 450 (Hydrofobní přípravek)", price: "od 40,- Kč/m²" },
              { name: "Nátěr silikonovou fasádní barvou 1 vrstva", price: "od 70,- Kč/m²" },
              { name: "Nástřik silikonovou fasádní barvou 1 vrstva", price: "od 60,- Kč/m²" },
              { name: "Zakrývací a ostatní práce", price: "360,- Kč/hod" },
            ]}
          />

          {/* Natěračské práce */}
          <PriceList
            title="Natěračské práce - Ceník"
            items={[
              { name: "Nátěr ocelových zárubní", price: "400,- Kč/kus/vrstva" },
              { name: "Nátěr radiátorů", price: "70,- Kč/článek" },
              { name: "Nátěr stoupaček nebo potrubí", price: "od 30,- Kč/bm" },
              { name: "Nátěr akrylátovou nebo syntetickou barvou (kov, dřevo, plast)", price: "180,- Kč/m²" },
            ]}
          />

          {/* Poznámky */}
          <Card>
            <CardContent className="p-5 sm:p-6">
              <div className="mb-4">
                <p className="text-sm font-medium text-zinc-800">Ceny jsou platné od 1.4.2024.</p>
                <p className="text-sm text-zinc-700">Uvedené ceny jsou bez DPH a materiálu</p>
              </div>
              <ul className="space-y-3 text-sm text-zinc-700">
                <li className="flex items-start gap-3">
                  <Info className="mt-0.5 h-4 w-4 text-sky-600" aria-hidden="true" />
                  <span>Při silném znečištění nebo náročnosti se cena může navýšit. Vždy po předběžné konzultaci.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Receipt className="mt-0.5 h-4 w-4 text-sky-600" aria-hidden="true" />
                  <span>Možnost vystavení faktury s DPH</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-4 w-4 text-sky-600" aria-hidden="true" />
                  <span>Doprava v okolí Brna zdarma</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-sky-600" aria-hidden="true" />
                  <span>Doprava mimo Brno dle dohody</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact section */}
        <div className="mt-8">
          <Card className="bg-sky-50 border-sky-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-sky-800 mb-2">Potřebujete nezávaznou cenovou nabídku?</h3>
              <p className="text-sky-700 mb-4">Kontaktujte nás pro detailní propočet vašeho projektu</p>
              <Button asChild className="bg-sky-600 hover:bg-sky-700">
                <a href="mailto:malovanipaseka@email.cz?subject=Poptávka%20cenové%20nabídky">
                  Poptat cenovou nabídku
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}