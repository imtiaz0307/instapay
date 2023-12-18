import React, { useContext, createContext, useState, useEffect, useRef } from "react";

const AppContext = createContext();

export function useAppState() {
    return useContext(AppContext);
}

export const AppStateProvider = ({ children }) => {
    const [animate, setAnimate] = useState(false)
    const [showFixedImages, setShowFixedImages] = useState(true)
    const mainRef = useRef(null)
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const transformRef = useRef(null)
    const heroRef = useRef(null)


    const windowScrollHandler = () => {
        const height = window.innerHeight;
        const scrollY = window.scrollY;
        if (scrollY >= height - 300) {
            if (scrollY >= (height * 2)) {
                setShowFixedImages(false)
            } else {
                setShowFixedImages(true)
            }
        } else {
            setShowFixedImages(false)
        }
    }

    useEffect(() => {
        if (window.innerWidth > 1000) {
            window.addEventListener("scroll", windowScrollHandler)
            // }
            return () => {
                // if (mainRef.current) {
                window.removeEventListener("scroll", windowScrollHandler)
                // }
            }
        }
        // if (mainRef.current) {
    }, [])


    const scrollHandler = () => {
        if (window.innerWidth > 1000) {
            setAnimate(true);

            const duration = 500;
            const intervals = 30;

            const distance = window.innerHeight - 122;

            const steps = Math.floor(duration / intervals);
            const stepValue = distance / steps;


            let step = 0;
            const smoothScroll = setInterval(function () {
                if (step <= steps) {
                    window.scrollBy(0, stepValue);
                    step++;
                } else {
                    clearInterval(smoothScroll);
                }
            }, intervals);
        }
    };

    useEffect(() => {
        const intersectionHandler = (e) => {
            if (!e[0].isIntersecting) {
                setAnimate(!e[0].isIntersecting)
                scrollHandler()
            } else {
                setAnimate(!e[0].isIntersecting)
            }
        }
        const options = {
            threshold: 0.9
        }

        const newObserver = new IntersectionObserver(intersectionHandler, options)
        if (heroRef.current) {
            newObserver.observe(heroRef.current)
        }

        return () => {
            if (heroRef.current) {
                newObserver.unobserve(heroRef?.current)
            }
        }

    }, [])


    // scroll
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const contentHeight = document.documentElement.scrollHeight - windowHeight;
            const percentage = (scrollY / contentHeight) * 100;
            setScrollPercentage(percentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AppContext.Provider
            value={{
                showFixedImages,
                scrollPercentage,
                scrollHandler,
                mainRef,
                transformRef,
                animate,
                heroRef,
                isMenuOpen,
                setIsMenuOpen
            }}>
            {children}
        </AppContext.Provider>
    );
};