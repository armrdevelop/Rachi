import { LogoNav, MenuHamburger } from 'static/icons'

const MENU = ['Funcionalidades', 'App', 'Planos', 'Contato']

export const Header = () => {
  return (
    <header className="header-content">
      <div className="navbar container-fluid bg-color">
        <div className="container flex items-center justify-between py-5 ">
          <div className="logo">
            <LogoNav alt="logo" />
          </div>

          <nav className="navbar-links hidden w-full md:block md:w-auto">
            <ul className="flex flex-col md:flex-row text-lg gap-16 items-center">
              {MENU.map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-grayr-200 font-medium leading-5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="button md:hidden">
            <MenuHamburger />
          </button>
        </div>
      </div>
      <section className="container-fluid bg-whiter-200">
        <div className="container md:min-h-[640px] min-h-[387px] bg-[url('/assets/image/bgHeader.png')] bg-no-repeat md:bg-[center_right] bg-[center_bottom] bg-auto">
          <div className="container-left md:w-1/2 font-['Sora'] font-bold text-grayr-300 flex items-start lg:justify-center justify-start  pt-10 px-3 flex-col">
            <p className="md:text-5xl text-2xl md:mb-12 mb-4 md:leading-60 leading-30">
              Rachi, <br />
              é tudo que você
              <br />
              precisa em um só lugar.
            </p>
            <button className="button font-bold rounded-full bg-bluer text-whiter-100 md:px-9 md:py-4 py-2 px-6 md:text-xl text-sm">
              <span>Cadastrar-se</span>
            </button>
          </div>
        </div>
      </section>
    </header>
  )
}
