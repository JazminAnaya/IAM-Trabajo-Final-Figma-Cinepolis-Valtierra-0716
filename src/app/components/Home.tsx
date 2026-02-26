import { useNavigate } from "react-router";
import { Film, User, UserCog } from "lucide-react";
import { Button } from "./ui/button";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-primary to-secondary">
      <div className="w-full max-w-md space-y-8">
        {/* Logo Section */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/20">
              <img src="https://raw.githubusercontent.com/JazminAnaya/IAM-Trabajo-Final-Figma-Cinepolis-Valtierra-0716/refs/heads/main/2.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-white text-4xl font-bold">Cinepolis Valtierra</h1>
          <p className="text-white/90 text-lg px-4">
            Aplicación para comprar boletos y comida antes de ir al cine más cercano
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 pt-8">
          <Button
            onClick={() => navigate("/login-admin")}
            className="w-full h-14 text-base bg-white text-primary hover:bg-white/90 flex items-center justify-center gap-2"
          >
            <UserCog className="w-5 h-5" />
            Iniciar Sesión como Administrador
          </Button>

          <Button
            onClick={() => navigate("/create-account")}
            className="w-full h-14 text-lg bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2"
          >
            <User className="w-6 h-6" />
            Iniciar Sesión como Usuario
          </Button>
        </div>
      </div>
    </div>
  );
}