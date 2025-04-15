// components/Hero.js
export default function Hero() {
    return (
        <section id="accueil" className="hero-gradient text-white py-20 md:py-10">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Expertise Géotechnique et Fondations en Afrique
                    </h1>
                    <p className="text-xl mb-8">
                        Hydrosol Afrique, laboratoire spécialisé en bâtiments et travaux publics,
                        apporte son savoir-faire à travers l'Afrique de l'Ouest et Centrale.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                            Nous contacter
                        </a>
                        <a href="#services" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition">
                            Nos services
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img src="img_qsmns_600x400.png" alt="Chantier" className="rounded-lg shadow-xl" />
                    <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-blue-900 p-4 rounded-lg shadow-lg hidden md:block animate-float">
                        <p className="font-bold text-lg text-center">15+</p>
                        <p className="text-sm">ans d'expérience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
