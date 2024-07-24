'use client';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from '@hookform/resolvers/zod';
import { FilePlus, Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { formSchema, PageFormData } from "./form.schema";
import { useRouter } from "next/dist/client/components/navigation";


const NewPageButton = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm<PageFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  })


  const onSubmit = async (values: PageFormData) => {
    // const { name, description } = values
    //server Action
    // const pageId = await createPage(name.description)
    //toast
    setOpen(false);
    const pageId = 1;
    //redirect para /app/page-designer/${pageId}
    router.push(`/app/page-designer/${pageId}`)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="h-12 flex items-center gap-2 bg-red-500 rounded-lg" asChild>
        <Button>
          <h3 className="text-white font-medium tracking-widest p-2">Nova Página</h3>
          <FilePlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center sm:max-w-[420px] text-black">
        <DialogHeader className="text-black">Crie sua página</DialogHeader>
        <DialogDescription>Use a sua criatividade para fazer seu site.</DialogDescription>

        <div className="w-full flex flex-col space-x-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da sua página.." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Descrição da página.." {...field} className="min-h-[100px] max-h-[100px]" />
                    </FormControl>
                  </FormItem>
                )}
              />

            </form>
          </Form>
        </div>

        <DialogFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full mt-4"
            disabled={form.formState.isSubmitting}
          >
            {!form.formState.isSubmitting && (<span>Criar Página</span>)}
            {form.formState.isSubmitting && (<Loader className="animate-spin" />)}
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}

export default NewPageButton