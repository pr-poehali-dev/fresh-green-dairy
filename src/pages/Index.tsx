import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMG = "https://cdn.poehali.dev/projects/ab62a4c8-7b1d-4375-9b8e-5f47433638b3/files/c47ad03f-8a3a-4ef6-b096-ad28456feb3b.jpg";

const features = [
  {
    icon: "Leaf",
    title: "Природные ингредиенты",
    desc: "Только натуральные компоненты, собранные в гармонии с природой",
  },
  {
    icon: "Sun",
    title: "Живая энергия",
    desc: "Каждый продукт несёт в себе силу солнца и земли",
  },
  {
    icon: "Droplets",
    title: "Чистота состава",
    desc: "Без синтетики, красителей и консервантов — только польза",
  },
];

const products = [
  { name: "Сыворотка «Рассвет»", price: "2 890 ₽", tag: "Хит" },
  { name: "Крем «Луговые травы»", price: "1 990 ₽", tag: "Новинка" },
  { name: "Масло «Золотой цвет»", price: "3 490 ₽", tag: "" },
];

function LeafSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 155 C30 130 5 100 10 60 C15 20 45 5 60 5 C75 5 105 20 110 60 C115 100 90 130 60 155Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M60 155 C55 120 50 85 60 5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
        strokeLinecap="round"
      />
      <path d="M60 80 C45 65 25 60 10 60" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
      <path d="M60 100 C75 85 95 80 110 80" stroke="currentColor" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}

function FloatingOrb({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={style}
    />
  );
}

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--c-white)] overflow-x-hidden font-body">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[var(--c-white)]/90 backdrop-blur-md border-b border-[var(--c-green)]/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-10">
            <LeafSvg className="w-full h-full text-[var(--c-green)]" />
          </div>
          <span className="font-display text-xl font-semibold text-[var(--c-green)] tracking-wide">Botanica</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--c-dark)]/70">
          <a href="#about" className="hover:text-[var(--c-green)] transition-colors font-body">О бренде</a>
          <a href="#products" className="hover:text-[var(--c-green)] transition-colors font-body">Коллекция</a>
          <a href="#contact" className="hover:text-[var(--c-green)] transition-colors font-body">Контакты</a>
        </div>
        <button className="btn-primary text-sm px-5 py-2">
          Каталог
        </button>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(145deg, #f8fdf4 0%, #fff 50%, #fdfbf0 100%)" }}
      >
        <FloatingOrb style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)",
          top: -100, right: -100,
          transform: `translateY(${scrollY * 0.2}px)`
        }} />
        <FloatingOrb style={{
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(234,179,8,0.1) 0%, transparent 70%)",
          bottom: 50, left: -50,
          transform: `translateY(${-scrollY * 0.15}px)`
        }} />

        <div className="absolute top-32 right-20 w-16 h-20 text-[var(--c-green)] opacity-20 animate-[floatSlow_8s_ease-in-out_infinite]">
          <LeafSvg className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 right-1/3 w-10 h-14 text-[var(--c-gold)] opacity-30 animate-[floatMed_6s_ease-in-out_infinite_1.5s]">
          <LeafSvg className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-16 w-8 h-10 text-[var(--c-green)] opacity-15 animate-[floatSlow_10s_ease-in-out_infinite_3s]">
          <LeafSvg className="w-full h-full" />
        </div>

        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 bg-[var(--c-green)]/10 text-[var(--c-green)] text-xs font-body font-medium px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-green)] inline-block"></span>
              Органическая косметика
            </div>

            <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl text-[var(--c-dark)] leading-[0.9] mb-8">
              Природа
              <br />
              <span className="text-[var(--c-green)] italic">в каждой</span>
              <br />
              капле
            </h1>

            <p className="font-body text-lg text-[var(--c-dark)]/60 leading-relaxed mb-10 max-w-md">
              Косметика, вдохновлённая живой природой. Формулы с растительными экстрактами,
              которые питают и восстанавливают кожу изнутри.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn-primary px-8 py-4 text-base">
                Смотреть коллекцию
              </button>
              <button className="btn-outline px-8 py-4 text-base">
                Наша история
              </button>
            </div>

            <div className="flex gap-10 mt-14 pt-10 border-t border-[var(--c-green)]/15">
              {[["500+", "Клиентов"], ["12", "Лет опыта"], ["100%", "Натурально"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-semibold text-[var(--c-green)]">{num}</div>
                  <div className="font-body text-xs text-[var(--c-dark)]/50 uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] border-2 border-[var(--c-gold)]/30 animate-[morph_8s_ease-in-out_infinite]" />
              <div className="absolute -inset-12 rounded-[45%_55%_40%_60%/60%_40%_55%_45%] border border-[var(--c-green)]/15 animate-[morphRev_10s_ease-in-out_infinite]" />

              <img
                src={LOGO_IMG}
                alt="Botanica — органическая косметика"
                className="w-full max-w-md mx-auto rounded-[50%_45%_55%_40%/45%_55%_40%_50%] object-cover shadow-2xl"
                style={{ aspectRatio: "1/1", filter: "saturate(1.1)" }}
              />

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[var(--c-gold)]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--c-gold)]/15 flex items-center justify-center">
                    <Icon name="Award" size={18} className="text-[var(--c-gold)]" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-semibold text-[var(--c-dark)]">Eco Certified</div>
                    <div className="font-body text-xs text-[var(--c-dark)]/50">2024</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[var(--c-green)] text-white rounded-2xl shadow-xl px-5 py-4">
                <div className="font-display text-2xl font-bold">100%</div>
                <div className="font-body text-xs opacity-80">Органика</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="font-body text-xs text-[var(--c-dark)] tracking-widest uppercase">Листать</div>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--c-green)] to-transparent animate-pulse" />
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="py-32 bg-[var(--c-dark)] relative overflow-hidden">
        <FloatingOrb style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
          top: -100, left: -100,
        }} />
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-[var(--c-gold)] text-xs font-body font-medium tracking-widest uppercase mb-6">
              <div className="w-8 h-px bg-[var(--c-gold)]" />
              Наши принципы
              <div className="w-8 h-px bg-[var(--c-gold)]" />
            </div>
            <h2 className="font-display text-5xl lg:text-6xl text-white leading-tight">
              Создано природой,
              <br />
              <span className="text-[var(--c-green)] italic">для человека</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--c-green)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--c-green)]/30 transition-colors">
                  <Icon name={f.icon} size={24} className="text-[var(--c-green)]" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">{f.title}</h3>
                <p className="font-body text-white/50 leading-relaxed text-sm">{f.desc}</p>

                <div className="absolute bottom-8 right-8 w-6 h-8 text-[var(--c-green)]/30 group-hover:text-[var(--c-green)]/60 transition-colors">
                  <LeafSvg className="w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-32 bg-[var(--c-cream)]">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[var(--c-green)] text-xs font-body font-medium tracking-widest uppercase mb-4">
                <div className="w-8 h-px bg-[var(--c-green)]" />
                Коллекция
              </div>
              <h2 className="font-display text-5xl lg:text-6xl text-[var(--c-dark)] leading-tight">
                Бестселлеры
                <br />
                <span className="text-[var(--c-gold)] italic">сезона</span>
              </h2>
            </div>
            <button className="btn-outline self-start md:self-auto">Смотреть все →</button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={p.name}
                className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[var(--c-green)]/10"
              >
                <div
                  className="h-64 relative overflow-hidden"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #d4f5d4 0%, #a8e6a8 100%)"
                      : i === 1
                      ? "linear-gradient(135deg, #fef9e7 0%, #fde68a 100%)"
                      : "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)"
                  }}
                >
                  {p.tag && (
                    <div className={`absolute top-4 left-4 text-xs font-body font-medium px-3 py-1.5 rounded-full ${
                      p.tag === "Хит" ? "bg-[var(--c-green)] text-white" : "bg-[var(--c-gold)] text-[var(--c-dark)]"
                    }`}>
                      {p.tag}
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                    <LeafSvg className="w-32 h-44 text-[var(--c-green)]" />
                  </div>
                  <div className="absolute bottom-4 right-4 w-16 h-20 opacity-30 group-hover:opacity-50 transition-opacity">
                    <LeafSvg className="w-full h-full text-[var(--c-gold)]" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl text-[var(--c-dark)] mb-2">{p.name}</h3>
                  <p className="font-body text-sm text-[var(--c-dark)]/50 mb-5">30 мл · Органик</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-semibold text-[var(--c-green)]">{p.price}</span>
                    <button className="btn-primary text-sm px-5 py-2.5">В корзину</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #166534 100%)" }}>
        <FloatingOrb style={{
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          top: -200, right: -200,
        }} />
        <div className="absolute top-16 right-32 w-20 h-28 text-white/10">
          <LeafSvg className="w-full h-full" />
        </div>
        <div className="absolute bottom-16 left-24 w-14 h-20 text-[var(--c-gold)]/20">
          <LeafSvg className="w-full h-full" />
        </div>

        <div className="container mx-auto px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-[var(--c-gold)] text-xs font-body font-medium tracking-widest uppercase mb-8">
            <div className="w-8 h-px bg-[var(--c-gold)]" />
            Подписка
            <div className="w-8 h-px bg-[var(--c-gold)]" />
          </div>
          <h2 className="font-display text-5xl lg:text-7xl text-white leading-tight mb-6">
            Первый шаг
            <br />
            <span className="text-[var(--c-gold)] italic">к природной красоте</span>
          </h2>
          <p className="font-body text-white/60 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Подпишитесь и получите скидку 15% на первый заказ вместе с нашим гайдом по натуральному уходу
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-5 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 font-body text-sm outline-none focus:border-[var(--c-gold)]/60 transition-colors"
            />
            <button className="bg-[var(--c-gold)] text-[var(--c-dark)] font-body font-semibold px-7 py-4 rounded-2xl hover:bg-[var(--c-gold)]/90 transition-colors whitespace-nowrap text-sm">
              Получить скидку
            </button>
          </div>
          <p className="font-body text-white/30 text-xs">Без спама. Отписка в один клик.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--c-dark)] py-12 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-9 text-[var(--c-green)]">
              <LeafSvg className="w-full h-full" />
            </div>
            <span className="font-display text-xl text-white font-semibold">Botanica</span>
          </div>
          <p className="font-body text-white/30 text-sm text-center">
            © 2024 Botanica. Органическая косметика с любовью к природе.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Telegram", "VK"].map((s) => (
              <a key={s} href="#" className="font-body text-sm text-white/40 hover:text-[var(--c-green)] transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}