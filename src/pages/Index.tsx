import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Select all buttons with class "magnetic"
    const buttons = document.querySelectorAll<HTMLButtonElement>(".magnetic");

    buttons.forEach(button => {
      // Skip if particles already exist
      if (button.querySelector(".particles-field")) return;

      const field = document.createElement("div");
      field.className = "particles-field";

      // Create 30 particles
      for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
        p.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
        p.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        field.appendChild(p);
      }

      button.appendChild(field);
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background gap-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">
          Start building your amazing project here!
        </p>
      </div>

      {/* Magnetic Buttons */}
      <div className="flex gap-4">
        <button className="magnetic">Get Started</button>
        <button className="magnetic">Learn More</button>
        <button className="magnetic">Contact Us</button>
      </div>
    </div>
  );
};

export default Index;
