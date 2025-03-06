import Sidebar from "@/components/app/sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <main className="md:ml-12 p-10 ">
        {children}
      </main>
    </>
  );
}
