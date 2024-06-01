import CategoryForm from "../../CategoryForm";
import Category from "@/lib/models/Category";

const EditCategory = async ({ params }) => {
  const category = await Category.findById(params.id);

  const initialData ={
    name: category.name,
  };
  
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold font-sans">Edit Category</h1>
      <CategoryForm initialData={initialData} id={params.id} />;
    </div>
  );
};

export default EditCategory;
