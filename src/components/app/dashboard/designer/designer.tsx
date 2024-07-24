import { Button } from "@/components/ui/button"
import DesignerSidebar from "./designer-siderbar"
import Canvas from "./canvas"

const Designer = ({ page }: { page: string }) => {
  return (
    <div className='min-h-screen flex flex-col p-7 m-6 rounded-lg overflow-y-auto bg-accent border-[0.1px] border-red-500/15 bg-[url(/bg-designer.svg)] dark:bg-[url(/bg-designer-dark.svg)] dark:border-red-600/50'>
      <div className="flex flex-row items-center justify-between border mb-2 p-2 bg-accent space-x-2">
        <div></div>
        <span className="px-6 py-2 bg-zinc-200/50 dark:bg-zinc-700/50 rounded-md">
          Page {page}
        </span>
        <div className="space-x-2">
          <Button>Publicar</Button>
          <Button>Visualizar</Button>
          <Button>Salvar</Button>
        </div>
      </div>
      <div className="flex h-full w-full gap-8">
        <Canvas />
        <DesignerSidebar />
      </div>
    </div>
  )
}

export default Designer
