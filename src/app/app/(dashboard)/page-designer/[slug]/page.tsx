import Designer from "@/components/app/dashboard/designer/designer";

const PageDesigner = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return (
    <Designer page={slug} />
  )
}


export default PageDesigner;