import { EmojiIcon, IconContact, SecurityIcon } from 'static/icons'

const BENEFICIOSMENU = [
  {
    id: 1,
    title: 'Crie conexões',
    description:
      'Crie conexões com seus clientes e parceiros, aumentando sua visibilidade e aumentando suas vendas.',
    image: <IconContact />
  },
  {
    id: 2,
    title: '100% gratuito',
    description:
      'Sem nenhum custo para você, somente os planos para empresas.',
    image: <SecurityIcon />
  },
  {
    id: 3,
    title: 'Compartilhamento',
    description: 'Compartilhe seus projetos com seus clientes e parceiros.',
    image: <EmojiIcon />
  }
]

export const Beneficio = () => {
  return (
    <section
      className="container-fluid bg-whiter-100  flex justify-center items-center flex-col "
      id="funcionalidades"
    >
      <div className="container flex  justify-center items-center flex-col md:min-h-[476px] min-h-[644px]">
        <div className="title-section font-bold text-4xl text-grayr-300">
          <h2>Como funciona</h2>
        </div>
        <div className="itens-container md:flex-row flex-col flex justify-center items-center md:mt-20 mt-5">
          {BENEFICIOSMENU.map(item => (
            <div
              className="item-beneficios flex flex-col justify-center items-center text-center md:mt-0 mt-5 px-16 max-w-[400px]"
              key={item.id}
            >
              <div className="image">{item.image}</div>
              <div className="title text-grayr-300 font-semibold text-sm mt-8">
                {item.title}
              </div>
              <div className="description text-grayr-200 font-normal text-xs mt-4">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
