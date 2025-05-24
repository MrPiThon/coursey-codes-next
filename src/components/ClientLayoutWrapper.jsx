'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClientLayoutWrapper = ({ children }) => {
    useEffect(() => {
        AOS.init({ once: true, duration: 700 });
    }, []);

    return <>{children}</>;
};

export default ClientLayoutWrapper;