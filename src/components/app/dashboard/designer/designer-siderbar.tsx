import { Separator } from "@/components/ui/separator"


const DesignerSidebar = () => {
  return (
    <div className="bg-accent min-h-screen h-full w-1/3 p-2 sm:p-4 rounded-lg">
      <div>
        <h1 className="text-center">Propriedades</h1>
        <Separator className="border border-muted-foreground my-4 col-span-1 lg:col-span-3" />
      </div>
    </div>
  )
}

export default DesignerSidebar