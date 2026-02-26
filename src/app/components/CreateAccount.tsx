import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function CreateAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular creación de cuenta
    if (username && password) {
      navigate("/catalog");
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
        <h1 className="text-white text-2xl">Crear Cuenta</h1>
      </div>

      {/* Form Container */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground">
                Usuario
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 bg-input-background border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-input-background border-border"
                required
              />
            </div>

            <div className="space-y-3 pt-4">
              <Button
                type="submit"
                className="w-full h-12 bg-primary text-white hover:bg-primary/90"
              >
                Entrar como Usuario
              </Button>

              <Button
                type="button"
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full h-12 border-2 border-primary text-primary hover:bg-primary/5"
              >
                Regresar al Menú
              </Button>
            </div>
          </form>

          {/* Additional Info */}
          <p className="text-center text-sm text-muted-foreground pt-2">
            Crea tu cuenta para comenzar a comprar boletos
          </p>
        </div>
      </div>
    </div>
  );
}
