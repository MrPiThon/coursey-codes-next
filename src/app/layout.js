import './globals.css';
import Footer from '@/components/Footer';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';
import GradientBackground from '@/components/GradientBackground';


export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>Coursey Codes – Alex Coursey</title>
            <meta name="description" content="Portfolio for Alex Coursey – game developer and web designer." />
            <meta property="og:title" content="Coursey Codes" />
            <meta property="og:description" content="Game dev turned web dev. Projects, contact, and more." />
            <meta property="og:image" content="/CourseyCodesLogo.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="bg-custom-primary text-custom-lightest font-comfortaa">
        <GradientBackground />
        <ClientLayoutWrapper>
            {children}
            <Footer />
        </ClientLayoutWrapper>
        </body>
        </html>
    );
}
