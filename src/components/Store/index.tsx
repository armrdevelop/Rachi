import { AppStore, GooglePlay } from 'static/icons'

export const Store = () => {
  return (
    <section
      className="container-fluid bg-whiter-200 md:min-h-[475px]  flex justify-center items-center flex-col "
      id="store"
    >
      <div className="container flex md:flex-row flex-col md:justify-start justify-center items-center md:min-h-[475px] min-h-[259px]  md:bg-[url('/assets/image/laptop.png')] bg-no-repeat md:bg-[center_right] bg-[center_bottom] md:bg-auto bg-contain">
        <div className="item-content md:w-1/2 text-center md:text-left">
          <div className="title-section font-bold text-3xl text-grayr-300 mb-6 md:mt-0 mt-5">
            <h2>Baixe nosso app para desfrutar mais!</h2>
          </div>
          <div className="description text-grayr-200 text-base md:p-0 p-6">
            <p>
              Baixe nosso app para desfrutar de nossos serviços e acessar todos
              os benefícios. Faça seu cadastro e conheça nossos planos ou
              utilize o plano gratuito.
            </p>
          </div>
          <div className="icons-store mt-9">
            <a
              className="inline-block p-1"
              href="https://play.google.com/store/apps/details?id=com.rachi.app"
              target="_blank"
              rel="noreferrer"
            >
              <GooglePlay className="h-auto  md:w-auto w-[144px] " />
            </a>
            <a
              className="inline-block p-1 "
              href="https://apps.apple.com/br/app/rachi/id1498797590"
              target="_blank"
              rel="noreferrer"
            >
              <AppStore className="h-auto md:w-auto w-[144px] "/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
