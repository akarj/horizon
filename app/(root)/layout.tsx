export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <main>
                SIDE Bar
                {children}
            </main>
        </>
    );
}
