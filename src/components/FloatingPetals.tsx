import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 6
      }));
      setPetals(newPetals);
    };

    createPetals();
    const interval = setInterval(createPetals, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-petals">
      {petals.map((petal) => {
        // Concentrar pétalas mais no meio (30-70% da tela)
        const concentratedLeft = 30 + (petal.left * 0.4);
        return (
          <div
            key={petal.id}
            className="petal"
            style={{
              left: `${concentratedLeft}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingPetals;