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
    const transformRef = useRef(null)
    const heroRef = useRef(null)


    // const windowScrollHandler = () => {
    //     const height = window.innerHeight;
    //     const scrollY = mainRef.current.scrollTop;
    //     if (scrollY >= height - 300) {
    //         if (scrollY >= (height * 2)) {
    //             setShowFixedImages(false)
    //         } else {
    //             setShowFixedImages(true)
    //         }
    //     } else {
    //         setShowFixedImages(false)
    //     }
    // }

    // useEffect(() => {
    //     if (mainRef.current) {
    //         mainRef.current.addEventListener("scroll", windowScrollHandler)
    //     }
    //     return () => {
    //         if (mainRef.current) {
    //             mainRef.current.removeEventListener("scroll", windowScrollHandler)
    //         }
    //     }
    // }, [])


    const scrollHandler = () => {
        setAnimate(true)
        // const element = transformRef.current;
        // element.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" })
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const intersectionHandler = (e) => {
            if (!e[0].isIntersecting) {
                setAnimate(!e[0].isIntersecting)
                // const element = transformRef.current;
                // if (element) {
                //     element.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" })
                // }
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                })
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

        return () => newObserver.unobserve(heroRef?.current)

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
                heroRef
            }}>
            {children}
        </AppContext.Provider>
    );
};