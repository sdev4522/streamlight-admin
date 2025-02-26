
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Mock data - replace with real data later
const mockMovie = {
  id: 1,
  title: "The Matrix",
  description: "A computer programmer discovers a mysterious world...",
  poster: "https://placehold.co/300x450",
  video_url: "https://www.youtube.com/embed/m8e-FF8MsqU",
  download_url: "#",
  category: "Sci-Fi",
  year: 1999,
};

export default function MovieDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img
              src={mockMovie.poster}
              alt={mockMovie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{mockMovie.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{mockMovie.year}</span>
                <span>{mockMovie.category}</span>
              </div>
            </div>

            <p className="text-lg">{mockMovie.description}</p>

            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src={mockMovie.video_url}
                title={mockMovie.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>

            <Button className="w-full md:w-auto" asChild>
              <a href={mockMovie.download_url} download>
                <Download className="mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
