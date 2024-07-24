import Logo from "@/components/app/dashboard/logo";
import NewPageButton from "@/components/app/dashboard/new-page-button";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col bg-background">
        <div className="flex flex-col min-w-full border">
          <nav className="flex items-center justify-between p-4 border">
            <div className="flex items-center justify-center space-x-2">
              <Logo />
              <span className="text-2xl text-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-400">Logo</span>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-8">
              <NewPageButton />
            </div>
          </nav>
        </div>
      </header>
      <main className="h-full">{children}</main>
    </>
  )
}
export default DashboardLayout;