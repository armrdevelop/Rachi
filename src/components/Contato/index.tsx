export const Contato = () => {
  return (
    <section
      id="contato"
      className="container-fluid min-h-[382px] bg-[url('/assets/image/bgContact.png')] bg-fixed bg-auto bg-bottom bg-no-repeat"
    >
      <div className="container">
        <div className="title-content">
          <h2>Contato</h2>
          <div className="description">
            <p> Alguma dúvida? entre em contato com nossa equipe. </p>
          </div>
        </div>
        <div className="form-content">
          <form id="form1">
            <input type="email" placeholder="Seu melhor e-mail" />
            <button  type="submit" form="form1" value="Enviar" className="button rounded-full bg-bluer text-whiter-100 md:px-9 md:py-4 py-2 px-6 md:text-xl text-sm">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}
