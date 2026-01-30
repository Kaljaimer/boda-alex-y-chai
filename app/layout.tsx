import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Invitación de Boda - Alex & Chai",
    description: "Estás invitado a celebrar nuestro gran día",
    generator: "v0.app",
    icons: {
        icon: [
            {
                // Should be 32px by 32px
                url: "/logoBodaNoBG.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                // Should be 32px by 32px
                url: "/logoBodaNoBG.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/logoBodaNoBG.png",
                type: "image/svg+xml",
            },
        ],
        apple: "/logoBodaNoBG.png",
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        </head>
        <body className="antialiased">
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
