// components/Partners.js
export default function Partners() {
    const partners = [
        { src: "/logo_labosol.png", alt: "Labosol" },
        { src: "/Logo-setec.jpg", alt: "Setec" },
        { src: "/afcons.jpg", alt: "afcons" },
        { src: "/Eiffage-Logo.png", alt: "eiffage" },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-lg font-medium text-gray-500 mb-8">Partenaires et Certifications</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={partner.src}
                                alt={partner.alt}
                                className="h-16 object-contain opacity-70 hover:opacity-100 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center mt-8">
                <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 transition duration-300">
                    Voir toutes nos certifications <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </section>
    );
}
