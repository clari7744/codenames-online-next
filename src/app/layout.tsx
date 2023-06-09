import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Codenames",
    description: "where does this even show",
    authors: { name: "Clari", url: "https://github.com/clari7744" },
    icons: [{ url: "/react.svg", type: "image/svg+xml" }],
    //icons: [{ url: "/data/react.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/*<meta title="Codenames" />
                <link rel="icon" type="image/svg+xml" href="/data/react.svg" />*/}
            </head>
            <body className={inter.className}>
                <h1
                    style={{
                        textAlign: "center",
                        top: 10,
                        position: "fixed",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Codenames!
                </h1>
                {children}
                <footer
                    style={{
                        textAlign: "center",
                        position: "absolute",
                        bottom: 10,
                        fontSize: "18px",
                    }}
                >
                    <a href="https://czechgames.com/files/rules/codenames-rules-en.pdf">
                        <button>Rules</button>
                    </a>
                </footer>
            </body>
        </html>
    );
}
