import logo from '../assets/feature.svg';
import { useAppState } from '../context/AppContext';
import styles from './styles/SidebarFixed.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { X } from "react-feather"

const SidebarFixed = ({ color = "#fff", featureText }) => {
    const { scrollPercentage, isMenuOpen, setIsMenuOpen } = useAppState()
    return (
        <div className={styles.sidebar}>
            <div></div>
            <div className={styles.progress} onClick={() => {
                setIsMenuOpen(!isMenuOpen)
            }}>
                {
                    isMenuOpen
                        ?
                        <X size={30} color='white' style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            cursor: "pointer",
                            zIndex: 10
                        }} />
                        :
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                height: "20px",
                                width: "20px",
                                cursor: "pointer",
                                zIndex: 10
                            }}
                        />
                }
                <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <CircularProgressbar
                        value={scrollPercentage}
                        text={null}
                        strokeWidth={2}
                        styles={{
                            path: {
                                stroke: color,
                            },
                            trail: {
                                stroke: 'transparent',
                            },
                            text: {
                                fontSize: '20px',
                                fill: color,
                            },
                        }}
                    />
                </div>
            </div>
            {
                featureText
                    ?
                    <p style={{ color }}>{featureText}</p>
                    :
                    <div></div>
            }
        </div>
    );
};

export default SidebarFixed;