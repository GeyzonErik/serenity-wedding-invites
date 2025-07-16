import { Heart, Gift, ExternalLink, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingPetals from './FloatingPetals';
import MusicPlayer from './MusicPlayer';
import weddingPattern from '@/assets/wedding-pattern.jpg';

const WeddingInvitation = () => {
  const handleWebsiteClick = () => {
    // Aqui você pode adicionar o link para o site dos noivos
    window.open('#', '_blank');
  };

  const handleGiftsClick = () => {
    // Aqui você pode adicionar o link para a lista de presentes
    window.open('#', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-serenity-light to-rose-quartz relative overflow-hidden">
      <FloatingPetals />
      <MusicPlayer title="Música dos Noivos" />
      
      {/* Background Pattern Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${weddingPattern})` }}
      />
      
      {/* Decorative Geometric Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-serenity rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-serenity rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-serenity rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border border-serenity rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header with Bible Verse */}
          <div className="text-center mb-16 fade-in-up">
            <div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-elegant italic text-foreground/90 leading-relaxed mb-4">
                "Acima de tudo, porém, revistam-se do amor,<br />
                que é o elo perfeito."
              </blockquote>
              <cite className="text-lg md:text-xl text-muted-foreground font-medium">
                — Colossenses 3:14
              </cite>
            </div>
          </div>

          {/* Main Invitation Card */}
          <Card className="wedding-card rounded-3xl p-8 md:p-12 lg:p-16 mx-auto max-w-3xl mb-12">
            
            {/* Blessing Text */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-muted-foreground font-elegant leading-relaxed">
                Com a bênção de Deus e de seus pais,
              </p>
            </div>

            {/* Couple Names */}
            <div className="text-center mb-8">
              <h1 className="font-romantic text-4xl md:text-5xl lg:text-6xl text-serenity mb-4">
                Larissa <span className="text-gold">&</span> Geyzon
              </h1>
              <p className="text-xl md:text-2xl font-elegant text-foreground/80">
                Convidam para o seu casamento
              </p>
            </div>

            {/* Decorative Heart */}
            <div className="flex justify-center mb-8">
              <Heart className="w-8 h-8 text-serenity heart-pulse" fill="currentColor" />
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="text-center p-6 bg-serenity-light/30 rounded-2xl">
                <Calendar className="w-6 h-6 text-serenity mx-auto mb-3" />
                <h3 className="font-elegant text-lg font-semibold text-foreground mb-2">Data</h3>
                <p className="text-2xl font-romantic text-serenity font-medium">
                  06 de setembro
                </p>
                <p className="text-lg text-muted-foreground">2025</p>
              </div>
              
              <div className="text-center p-6 bg-serenity-light/30 rounded-2xl">
                <Clock className="w-6 h-6 text-serenity mx-auto mb-3" />
                <h3 className="font-elegant text-lg font-semibold text-foreground mb-2">Horário</h3>
                <p className="text-2xl font-romantic text-serenity font-medium">14:00</p>
                <p className="text-lg text-muted-foreground">Tarde</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleWebsiteClick}
                className="btn-wedding rounded-full px-8 py-6 text-lg font-medium w-full sm:w-auto"
              >
                <Heart className="w-5 h-5 mr-2" />
                Nosso Site
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              
              <Button
                onClick={handleGiftsClick}
                variant="outline"
                className="btn-outline-wedding rounded-full px-8 py-6 text-lg font-medium w-full sm:w-auto"
              >
                <Gift className="w-5 h-5 mr-2" />
                Lista de Presentes
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>

          {/* Footer Message */}
          <div className="text-center fade-in-up">
            <p className="text-lg font-elegant text-muted-foreground italic">
              "Que este dia seja apenas o início de uma vida repleta de amor e felicidade."
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-5 w-2 h-2 bg-serenity rounded-full sparkle"></div>
      <div className="absolute top-32 right-10 w-1 h-1 bg-gold rounded-full sparkle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-40 left-8 w-1.5 h-1.5 bg-serenity rounded-full sparkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-60 right-20 w-2 h-2 bg-gold rounded-full sparkle" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default WeddingInvitation;