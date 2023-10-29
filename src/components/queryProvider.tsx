"use client"
import { QueryClient, QueryClientProvider } from "react-query"

export default function QueryProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const queryClient = new QueryClient()

    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </body>
        </html>
    )
}
