import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact Us', href: '#contact' }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <section className="fixed w-full top-3 z-50 font-cormorantgaramond px-4" data-aos="fade-down">
                <div className="max-w-[95rem] mx-auto bg-white shadow-2xl rounded-2xl p-3 md:p-1">
                    <div className="max-w-[85rem] mx-auto">
                        <div className="hidden md:flex justify-between items-center">
                            {navLinks.slice(0, 2).map((link) => (
                                <a key={link.name} href={link.href} className="text-lg md:text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                    {link.name}
                                </a>
                            ))}
                            <a href="#home">
                                <img src="/images/logo.png" alt="Logo" className="w-20 md:w-28" />
                            </a>
                            {navLinks.slice(2).map((link) => (
                                <a key={link.name} href={link.href} className="text-lg md:text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="md:hidden flex justify-between items-center">
                            <a href="#home">
                                <img src="/images/logo.png" alt="Logo" className="w-20" />
                            </a>
                            <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300" aria-label="Toggle menu">
                                {isOpen ? (<X className="w-6 h-6 text-gray-800" />) : (<Menu className="w-6 h-6 text-gray-800" />)}
                            </button>
                        </div>

                        {isOpen && (
                            <div className="md:hidden mt-3 pb-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                <nav className="flex flex-col space-y-2">
                                    {navLinks.map((link) => (
                                        <a key={link.name} href={link.href} onClick={handleLinkClick}
                                            className="px-4 py-3 text-lg font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300 block"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}