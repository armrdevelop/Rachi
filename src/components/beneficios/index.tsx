import { EmojiIcon, IconContact, SecurityIcon } from 'static/icons'

const BENEFICIOS = [
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
      'Não cobramos nenhum custo para você, somente para nossos parceiros.',
    image: <SecurityIcon />
  },
  {
    id: 3,
    title: 'Compartilhamento',
    description: 'Compartilhe seus projetos com seus clientes e parceiros.',
    image: <EmojiIcon />
  }
]

export const Beneficios = () => {
  return (
    <section
      className="container-fluid bg-whiter-100  flex justify-center items-center flex-col "
      id="funcionalidades"
    >
      <div className="container flex  justify-center items-center flex-col md:min-h-[476px] min-h-[644px]">
        <div className="title-section font-bold text-4xl text-grayr-300">
          <h2>Como funciona</h2>
        </div>
        <div className="itens-container flex-row flex justify-center items-center mt-20">
          {BENEFICIOS.map(item => (
            <div
              className="item-beneficios flex flex-col justify-center items-center text-center px-16 max-w-[400px]"
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
