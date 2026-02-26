import { useNavigate } from "react-router";
import { LogOut, Star } from "lucide-react";
import { Button } from "./ui/button";
import { movies } from "../data/movies";

export function Catalog() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl mb-1">Catálogo de Películas</h1>
            <p className="text-white/80 text-sm">Selecciona tu película favorita</p>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="text-white hover:bg-white/10"
            size="icon"
          >
            <LogOut className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="px-6 pt-8 space-y-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-card rounded-xl shadow-md overflow-hidden border border-border hover:shadow-xl transition-shadow"
          >
            <div className="flex gap-4 p-4">
              {/* Movie Poster */}
              <div className="flex-shrink-0">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-28 h-40 object-cover rounded-lg"
                />
              </div>

              {/* Movie Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl mb-2">{movie.title}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(movie.rating)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({movie.rating})
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {movie.synopsis}
                  </p>
                </div>

                <Button
                  onClick={() => navigate(`/movie/${movie.id}`)}
                  className="mt-3 bg-secondary text-white hover:bg-secondary/90"
                >
                  Ver Más
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
