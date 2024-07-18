import Logo from "@/components/app/dashboard/logo";
import NewPageButton from "@/components/app/dashboard/new-page-button";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full max-h-screen bg-background">
      <header className="flex flex-col min-w-full border dark:bg-background">
        <nav className="flex items-center justify-between p-4 border">
          <div className="flex items-center justify-center space-x-2">
            <Logo />
            <span className="text-2xl text-black font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-400">Logo</span>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-8">
            <NewPageButton />
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
export default DashboardLayout;