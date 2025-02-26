
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AdminCategories() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>
          <p className="text-muted-foreground">Manage your movie categories.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Category
        </Button>
      </div>
      
      {/* Category list will go here */}
      <div className="rounded-lg border bg-card text-card-foreground">
        <div className="p-6">Category management coming soon...</div>
      </div>
    </div>
  );
}
