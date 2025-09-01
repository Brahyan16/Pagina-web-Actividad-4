document.addEventListener("DOMContentLoaded", () => {
  // ---------- FORMULARIO CUENTO ----------
  const formCuento = document.getElementById("cuentoForm");
  const resultado = document.getElementById("cuentoResultado");

  if (formCuento) {
    formCuento.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("cuentoNombre").value;
      const apodo = document.getElementById("cuentoApodo").value;
      const cabello = document.getElementById("cuentoCabello").value;
      const ojos = document.getElementById("cuentoOjos").value;
      const edad = document.getElementById("cuentoEdad").value;
      const hobby = document.getElementById("cuentoHobby").value;

      const cuento = `En un pequeño pueblo vivía ${nombre}, aunque todos lo conocían con cariño como "${apodo}".
Su cabello ${cabello} brillaba bajo el sol y sus ojos ${ojos} reflejaban siempre una chispa de curiosidad.

A la edad de ${edad} años, ${nombre} ya había descubierto su mayor pasión: ${hobby}.
Podía pasar horas enteras dedicado a ello, perdiéndose en su propio mundo de imaginación y alegría.

Un día, mientras disfrutaba de su hobby, "${apodo}" encontró una sorpresa inesperada:
las personas a su alrededor comenzaron a inspirarse en él. Descubrieron que la felicidad no se busca lejos,
sino en esos pequeños momentos que uno ama de verdad.

Y así, ${nombre}, con su energía y su manera especial de ver la vida,
enseñó a todos que seguir tus pasiones puede iluminar no solo tu camino, sino también el de los demás.`;

      resultado.innerText = cuento;
    });
  }

  // ---------- FORMULARIO COTIZACIÓN ----------
  const formCotizacion = document.getElementById("formCotizacion");
  const cancelarBtn = document.getElementById("cancelarBtn");

  if (cancelarBtn) {
    cancelarBtn.addEventListener("click", () => {
      formCotizacion.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
