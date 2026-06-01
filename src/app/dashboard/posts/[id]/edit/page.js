import AdminPostForm from "@/components/AdminPostForm";

export const metadata = {
  title: "Edit Relocation Blueprint | Hallmark Travel Admin"
};

export default async function EditPostPage({ params }) {
  const { id } = await params;
  return <AdminPostForm postId={id} />;
}
