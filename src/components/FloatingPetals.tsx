import { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 4
      }));
      setPetals(newPetals);
    };

    createPetals();
    const interval = setInterval(createPetals, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-petals">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
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