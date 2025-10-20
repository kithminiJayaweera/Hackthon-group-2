import { useState, useEffect } from "react";

// Image Imports
// import LogoGIF from "../../assets/Majestic hero gif.gif";
// import LionPaw from "../../assets/Lion paw.svg";
import Logo from "../../assets/halloween certix logo.png";



export default function NavItem() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { id: "home", lable: "Home" },
        { id: "about", lable: "About Us" },
        { id: "courses", lable: "Courses" },
        { id: "careerPath", lable: "Career Path" },
        { id: "university", lable: "University Progression" },
        { id: "studentlife", lable: "Student Life" },
        { id: "news", lable: "News" },
    ];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // close menu on mobile
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const { id } of navLinks) {
                const section = document.getElementById(id);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Menu Items (shared for desktop + mobile)
    const renderLinks = () =>
        navLinks.map(({ id, lable }) => (
            <li key={id} className="relative">
                <button onClick={() => scrollToSection(id)}
                    className={`Shlop cursor-pointer transition 
                        ${activeSection === id ?
                            "text-white"
                            : "text-background hover:text-primary"
                        }`}
                >
                    {lable}
                </button>
                {activeSection === id && (
                    <span className="text-primary"></span>
                )}
            </li>
        ))



    return (
        <>


            <nav className="fixed flex items-center justify-between w-full bg-transparent backdrop-blur-sm z-50">
                <div className="max-width flex items-center justify-between w-full md:px-[40px] 3xl:px-[160px] 2xl:px-[100px] px-[16px] py-[26px] md:py-[16px] ">
                    {/* Logo */}
                    <div className="flex items-center gap-[12px] md:gap-[16px] lg:gap-[8px]">
                        {/* <motion.img
                            src={Logo}
                            alt="Logo"
                            className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[64px] lg:h-[64px]"
                            animate={{
                                scale: [1, 1.05, 1], // optional: small pulse
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        /> */}
                        {/* <img src={Logo} alt="Logo" className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[80px] lg:h-[80px]" /> */}
                        <h1 className="Shlop text-[20px] sm:text-[24px] md:text-[32px] lg:text-[24px] xl:text-[32px] 2xl:text-[32px] text-white text-shadow-sm text-shadow-black">
                            Certix
                        </h1>
                    </div>
                    <button
                        className="lg:hidden flex flex-col gap-1 p-2 bg-transparent border-2 backdrop-blur-2xl rounded"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-3 lg:gap-2 xl:gap-8 text-[14px] lg:text-[14px] xl:text-[16px] 2xl:text-[16px] text-shadow-sm text-shadow-black">
                        {renderLinks()}
                    </ul>

                    {/* Desktop Button */}
                    <div className="relative hidden lg:block">

                        <div
                            
                        >

                            <input 
                                type="text"
                                placeholder="Search here"
                                className="border-2 font-shlop text-[14px] lg:text-[16px] h-[36px] w-[140px] lg:h-[42px] lg:w-[159px] px-3 rounded-3xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary text-white"
                            />

                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed top-[80px] left-0 w-full h-auto backdrop-blur-2xl border-2 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col justify-center items-center h-full ">
                        <ul className="flex flex-col gap-6 p-6 font-cute-dino text-[20px] text-center">
                            {renderLinks()}
                        </ul>

                        {/* Mobile Input Field */}
                        <div className="p-6 mt-auto">
                            <input 
                                type="text"
                                placeholder="Enter your text..."
                                className="border-2 font-cute-dino text-[16px] h-[48px] w-[159px] px-3 rounded-2xl text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
