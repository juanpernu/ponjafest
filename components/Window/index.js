export const Window = () => {
  return (
    <div className="window">
      <div className="drag-header">
        <span className="icon" />
        <span className="spacer">
          <i />
          <i />
          <i />
        </span>
        <h2>La despedida 2.0</h2>
      </div>
      <div className="inner-wrapper">
        <div className="image">
          <span className="wordart blues">
            <span className="text">La despe</span>
          </span>
        </div>
        <p className="text">
          Hola chiques! ¿Como andan? Espero que siempre brishando.
        </p>
        <p className="text">
          Como algunes saben, dentro de 2 semanas me voy al viejo continente (al
          fin) y por eso estoy armando una cenuwu para poder vernos antes de
          irme y recordarlos como siempre me gustó, borraches y de parranda.
        </p>
        <span className="divider" />
        <p className="title">📅 ¿Cuando?</p>
        <p className="text">
          Este <span className="outstanding">Viernes 20 de Mayo</span>, a cenar
          a partir de las 20hs.
        </p>
        <p className="title">📍 ¿Donde?</p>
        <p className="text">
          En{" "}
          <span className="outstanding">
            <a href="https://goo.gl/maps/rCCf1SHMx3pXJb7SA" target="_blank">
              Julio Argentino Roca 535
            </a>
          </span>
          , Vicente López. Y acá el mapa:
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.818897714624!2d-58.472604585653116!3d-34.52124510816369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb152f075d357%3A0x57f3d5df883abe5f!2sRoca%20507!5e0!3m2!1ses-419!2sar!4v1652728178979!5m2!1ses-419!2sar"
            width="100%"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map"
          />
        </p>
        <span className="divider" />
        <p className="text">Porfa, confirmame a mi WhatsApp 👇</p>
        <a
          href="https://wa.me/+541157402412"
          className="button"
          target="_blank"
        >
          confirmar
        </a>
      </div>
    </div>
  );
};
