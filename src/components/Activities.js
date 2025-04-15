// components/Activities.js
export default function Activities() {
    return (
        <section id="activites" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Activités</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Hydrosol Afrique dispose de matériels et d’équipements modernes pour ses activités en géotechnique et essais de matériaux.
                    </p>
                </div>

                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">1. Atelier de forages et d’essais in situ</h3>
                            <p className="text-gray-700">
                                Cet atelier permet de réaliser, grâce aux foreuses, machines et accessoires de forage : des sondages carottés,
                                des prélèvements d’échantillons intacts, des essais SPT, des sondages pour essais préssiométriques,
                                l’installation des piézomètres, essais d’eau, pénétromètres dynamiques, tarières.
                            </p>
                        </div>
                        <div className="border-4 border-gray-200 rounded-lg overflow-hidden">
                            <img src="/atelier_forage.png" alt="Atelier de forage" className="rounded-lg shadow-xl" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="border-4 border-gray-200 rounded-lg overflow-hidden order-2 md:order-1">
                            <img src="/sol_materiauxx.png" alt="Laboratoire" className="rounded-lg shadow-xl" />
                        </div>
                        <div className="order-1 md:order-2">
                            <h3 className="text-2xl font-semibold text-blue-800 mb-4">2. Laboratoire de sols et de matériaux</h3>
                            <p className="text-gray-700">
                                Ce laboratoire permet de réaliser une large gamme d’essais géotechniques tels que :
                                la teneur en eau, l’analyse granulométrique, la sédimentométrie, l’équivalent de sable,
                                les limites d’Atterberg, essai au Bleu de Méthylène, les mesures de densités,
                                les essais de cisaillement direct, œdométriques, Proctor, CBR, Los Angeles,
                                Microdeval, compression sur le béton, traction des aciers.
                                Le laboratoire est aussi équipé pour le contrôle routier :
                                essai au densitomètre à membrane, essais à la plaque, essais de déflexion,
                                essais au pénétromètre léger, au scissomètre, mesure au scléromètre…
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
