export const Contato = () => {
  return (
    <section id="contato" className="flex flex-col">
      <div className="min-h-[382px] bg-[url('/assets/image/bgContact.png')] bg-auto bg-bottom bg-no-repeat">
        <div className="container flex items-center flex-col">
          <div className="title-content text-center mb-24">
            <h2 className=" text-4xl text-whiter-100 font-semibold mt-12 mb-4 ">
              Contato
            </h2>
            <div className="description text-lg text-grayr-100 font-normal">
              <p> Alguma dúvida? entre em contato com nossa equipe. </p>
            </div>
          </div>
          <div className="form-content">
            <form id="form1">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="placeholder-whiter-100 text-lg font-medium bg-[transparent] border-whiter-100 border-solid border-0 border-b-2 md:w-[300px] w-full outline-none mr-10 mb-5"
              />
              <button
                type="submit"
                form="form1"
                value="Enviar"
                className="button rounded-[50px] bg-bluer text-whiter-100  md:py-1 py-1 md:px-6 px-6 md:text-lg text-lg leading-[21px]"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="bg-whiter-100">
        <div className="container flex items-center justify-center flex-col">
          <p className="p-6">Rachi - Todos os direitos reservados.</p>
        </div>
      </footer>
    </section>
  )
}
