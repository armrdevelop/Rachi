const PLANOSMENU = [
  {
    id: 1,
    title: 'Bronze',
    description:
      'Plano iniciante, tutorias focados para ajudar conhecer a plataforma e seus benefícios. Suporta até 5 usuários. Suporte 24h.',
    price: '28',
    duration: 'mês',
    benefits: '1 mês de acesso ao Rachi',
    popular: false
  },
  {
    id: 2,
    title: 'Prata',
    description:
      'Plano Básico, mais performance e segurança para você. Suporte 24h.',
    price: '57',
    duration: 'mês',
    benefits: '1 mês de acesso ao Rachi',
    popular: true
  },
  {
    id: 3,
    title: 'Ouro',
    description:
      'Plano Premium, tudo que você precisa para seu negócio. Suporte 24h. Consultoria de marketing.',
    price: '94',
    duration: 'mês',
    benefits: '1 mês de acesso ao Rachi',
    popular: false
  }
]

export const Planos = () => {
  return (
    <section id="planos" className="container-fluid md:mb-32 mb-10">
      <div className="flex justify-center items-center container bg-whiter-100 flex-col md:min-h-screen">
        <div className="head-title text-center mt-12">
          <div className="title-section font-bold text-4xl text-grayr-300 mb-6 md:mt-0 mt-5">
            <h2>Nossos Planos</h2>
          </div>
          <div className="description text-grayr-200 text-base md:p-0 p-6">
            <p className="max-w-xl">
              Nossos planos são flexíveis e personalizáveis, você pode escolher
              o plano que mais se adequar ao seu perfil.
            </p>
          </div>
        </div>
        <div className="planos-list flex gap-8 md:flex-row justify-center items-stretch flex-col max-w-[1140px] w-full md:mt-24 mt-6">
          {PLANOSMENU.map((planos, index) => (
            <div
              className={`plano-item md:w-1/3 max-w-[370px] flex flex-col justify-between text-center w-full rounded ${ planos.popular ? 'bg-grayr-300 text-whiter-100' : 'bg-whiter-200' }`} 
              key={planos.id}
            >
              <div className={`title-plano font-bold ${ planos.popular ? 'text-3xl mt-11' : 'text-2xl mt-14 ' }`}>{planos.title}</div>
              <div className="popular-plano my-3 h-7">
                {planos.popular ? (
                  <div className="popular-plano-text  text-center mx-auto max-w-[164px] w-full bg-bluer rounded-full p-1 text-sm">Preferido</div>
                ) : null}
              </div>
              <div className="price-content flex justify-center mb-10">
                <div className="cifra-moeda text-lg">R$</div>
                <div className="price-plano text-5xl font-bold">{planos.price}</div>
                <div className="duration-plano text-2xl mt-4">/ {planos.duration}</div>
              </div>
              <div className={`description-plano font-['Inter'] font-normal text-lg leading-25 ${ planos.popular ? 'text-whiter-100' : 'text-grayr-200' }`}>
                <p className="px-9 mb-14">{planos.description}</p>
              </div>
              <div className="assinar-plano text-center text-whiter-100 font-bold mb-5">
                <button className="btn-assinar max-w-[230px] w-full bg-bluer rounded-full p-2">Assinar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
