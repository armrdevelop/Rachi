import { Menuhamburger } from 'static/icons'

const MENU = ['Funcionalidades', 'App', 'Planos', 'Contato']

export const Header = () => {
  return (
    <header className="header-content">
      <div className="navbar container-fluid bg-color">
        <div className="container flex items-center justify-between py-5 ">
          <div className="logo">
            <img src="/assets/image/logo.png" alt="logo" />
          </div>

          <nav className="navbar-links hidden w-full md:block md:w-auto">
            <ul className="flex flex-col md:flex-row text-lg gap-16 items-center">
              {MENU.map((item, index) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block text-grayr-200 font-medium leading-5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="button md:hidden">
            <Menuhamburger />
          </button>
        </div>
      </div>
      <section className="container-fluid bg-whiter-200">
        <div className="container min-h-[640px] bg-[url('/assets/image/bgHeader.png')] bg-no-repeat bg-[center_right]">
          <div className="container-left w-1/2 font-['Sora'] font-bold text-grayr-300 flex items-start justify-center flex-col">
            <p className="text-5xl mb-[50px] leading-60">
              Rachi, <br />
              é tudo que você
              <br />
              precisa em um só lugar.
            </p>
            <button className="button font-bold rounded-full bg-bluer text-whiter-100 px-9 py-4 text-xl">
              <span>Cadastrar-se</span>
            </button>
          </div>
        </div>
      </section>
    </header>
  )
}
