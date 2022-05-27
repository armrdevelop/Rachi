const PLANOSMENU = [
    {
        id: 1,
        title: 'Bronze',
        description: 'Plano iniciante, tutorias focados para ajudar conhecer a plataforma e seus benefícios. Suporta até 5 usuários. Suporte 24h.',
        price: '28',
        duration: '1 mês',
        benefits: '1 mês de acesso ao Rachi',
        popular: false,
    },
    {
        id: 2,
        title: 'Prata',
        description: 'Plano Básico, mais performance e segurança para você. Suporte 24h.',
        price: '57',
        duration: '1 mês',
        benefits: '1 mês de acesso ao Rachi',
        popular: true,
    },{
        id: 3,
        title: 'Ouro',
        description: 'Plano Premium, tudo que você precisa para seu negócio. Suporte 24h. Consultoria de marketing.',
        price: '94',
        duration: '1 mês',
        benefits: '1 mês de acesso ao Rachi',
        popular: false,
    }
]

export const Planos = () => {
  return (
    <section id="planos" className="container-fluid">
      <div className="flex justify-center items-center container bg-whiter-100 flex-col md:min-h-screen">
        <div className="head-title text-center">
          <div className="title-section font-bold text-4xl text-grayr-300 mb-6 md:mt-0 mt-5">
            <h2>Nossos Planos</h2>
          </div>
          <div className="description text-grayr-200 text-base md:p-0 p-6">
            <p className="max-w-xl">
              Nossos planos são flexíveis e personalizáveis, você pode escolher  o plano que mais se adequar ao seu perfil.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
