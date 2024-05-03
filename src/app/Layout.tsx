import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
      <section className='flex flex-col h-dvh'>
        <Header />
        <main className='flex flex-col flex-grow py-2 px-[8%] bg-[#F3CA52]'>
            {children}
        </main>
        <Footer />
      </section>
    )
  }