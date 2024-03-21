import Header from "@/components/Universal/Header/Header";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html suppressHydrationWarning={true} lang="en">
            <StyledComponentsRegistry>
                <body suppressHydrationWarning={true}>
                    <header>
                        <Header />
                    </header>
                    {children}
                    <footer></footer>
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}
