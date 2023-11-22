export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}


export default function DashboardLayout({
    children, params   // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang={params.lang}>
          <body className="nuevo">{children}  {params.lang}</body>
        </html>
      )
    // return (
    //   <section>
    //     {/* Include shared UI here e.g. a header or sidebar */}
    //     <nav>swwwwwwwwwwwwww</nav>
   
    //     {children}
    //   </section>
    // )
  }

