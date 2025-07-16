import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals = Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: Math.random() * 100, // 0% a 100% da largura da tela
        delay: Math.random() * 15,
        duration: 6 + Math.random() * 8
      }));
      setPetals(newPetals);
    };

    createPetals();
    const interval = setInterval(createPetals, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-petals fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal absolute"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;