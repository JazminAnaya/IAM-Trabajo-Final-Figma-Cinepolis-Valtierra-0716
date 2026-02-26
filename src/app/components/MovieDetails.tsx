import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Star, Clock, User as UserIcon, Film } from "lucide-react";
import { Button } from "./ui/button";
import { movies } from "../data/movies";

export function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Película no encontrada</p>
          <Button onClick={() => navigate("/catalog")} className="mt-4">
            Volver al Catálogo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header with Background Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        
        {/* Back Button */}
        <Button
          onClick={() => navigate("/catalog")}
          variant="ghost"
          className="absolute top-4 left-4 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm"
          size="icon"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
      </div>

      {/* Content */}
      <div className="px-6 -mt-20 relative z-10">
        {/* Movie Poster Card */}
        <div className="bg-card rounded-xl shadow-xl p-6 border border-border">
          <div className="flex gap-6 mb-6">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-32 h-48 object-cover rounded-lg shadow-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl mb-2 line-clamp-2">{movie.title}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(movie.rating)
                          ? "fill-accent text-accent"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-accent">
                  {movie.rating}/5
                </span>
              </div>

              {/* Classification Badge */}
              <div className="inline-block px-2 py-1 text-sm bg-primary/10 text-primary rounded-lg border border-primary/20">
                {movie.classification}
              </div>
            </div>
          </div>

          {/* Movie Details */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <UserIcon className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Director</p>
                <p className="font-medium">{movie.director}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Duración</p>
                <p className="font-medium">{movie.duration}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Film className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">Clasificación</p>
                <p className="font-medium">{movie.classification}</p>
              </div>
            </div>
          </div>

          {/* Synopsis */}
          <div className="mt-6 pt-6 border-t border-border">
            <h2 className="text-xl mb-3">Sinopsis</h2>
            <p className="text-muted-foreground leading-relaxed">
              {movie.synopsis}
            </p>
          </div>

          {/* Action Button */}
          <Button
            onClick={() => navigate("/catalog")}
            className="w-full mt-6 h-12 bg-primary text-white hover:bg-primary/90"
          >
            Regresar al Catálogo
          </Button>
        </div>
      </div>
    </div>
  );
}