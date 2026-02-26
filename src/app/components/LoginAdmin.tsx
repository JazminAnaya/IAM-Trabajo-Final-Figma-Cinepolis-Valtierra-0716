import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, UserCog } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function LoginAdmin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login de administrador
    if (username && password) {
      // En una app real, aquí iría a un panel de administración
      alert("Login de administrador exitoso");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary p-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="text-white hover:bg-white/10"
          size="icon"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="text-white text-2xl">Administrador</h1>
      </div>

      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
              <UserCog className="w-10 h-10 text-accent" />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl mb-2">Acceso Administrador</h2>
            <p className="text-muted-foreground text-sm">
              Ingresa con tus credenciales de administrador
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="admin-username" className="text-foreground">
                Usuario Administrador
              </Label>
              <Input
                id="admin-username"
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 bg-input-background border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-foreground">
                Contraseña
              </Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-input-background border-border"
                required
              />
            </div>

            <div className="space-y-3 pt-4">
              <Button
                type="submit"
                className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Iniciar Sesión
              </Button>

              <Button
                type="button"
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full h-12 border-2 border-accent text-accent hover:bg-accent/5"
              >
                Regresar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
