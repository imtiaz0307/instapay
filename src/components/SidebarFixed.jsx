import logo from '../assets/logo.png';
import { useAppState } from '../context/AppContext';
import styles from './styles/SidebarFixed.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SidebarFixed = ({ color = "#fff" }) => {
    const { scrollPercentage } = useAppState()
    return (
        <div className={styles.sidebar}>
            <div></div>
            <div className={styles.progress}>
                <img
                    src={logo}
                    alt="logo"
                    style={{
                        position: 'absolute',
                        height: '50%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
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
            <p>02 Feature</p>
        </div>
    );
};

export default SidebarFixed;