
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock data - replace with real data later
const movies = [
  {
    id: 1,
    title: "The Matrix",
    poster: "https://placehold.co/300x450",
    category: "Sci-Fi",
  },
  {
    id: 2,
    title: "Inception",
    poster: "https://placehold.co/300x450",
    category: "Action",
  },
  // Add more mock movies
];

const categories = ["All", "Action", "Comedy", "Drama", "Sci-Fi"];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMovies = movies.filter((movie) => {
    const matchesCategory = selectedCategory === "All" || movie.category === selectedCategory;
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background">
          <img
            src="https://placehold.co/1920x1080"
            alt="Featured movie"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to MovieStream</h1>
          <p className="text-lg max-w-2xl mb-8">
            Stream your favorite movies anytime, anywhere.
          </p>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search movies..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="group relative overflow-hidden rounded-lg transition-transform hover:scale-105"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full aspect-[2/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-white font-semibold">{movie.title}</h3>
                  <span className="text-white/80 text-sm">{movie.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
