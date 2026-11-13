import { n as e } from "./hover-pixel.Cearw6G-.js";
import { a as t, n } from "./lenisSingleton.0mupUKGg.js";
import { t as r } from "./page-controller.Bk80V8FO.js";
import { i } from "./loader-registry.DLYHQVMw.js";
import { t as a } from "./mount-page-controller.BlGFrqY0.js";
import { a as o, o as s } from "./gallery.CeI9UR7L.js";
var c = 1,
  l = 4,
  u = `(min-width: 767px)`,
  d = 512,
  f = class extends r {
    get cartela() {
      return `galeria`;
    }
    fiestaId = ``;
    fiesta = null;
    root = null;
    titleEl = null;
    dateEl = null;
    gridEl = null;
    emptyEl = null;
    slider = null;
    lightbox = null;
    lightboxImg = null;
    lightboxCounter = null;
    lightboxIndex = 0;
    lightboxTrigger = null;
    unlockLenis = null;
    bajasHover = [];
    onRegisterLoads() {
      ((this.root = document.querySelector(`[data-gallery-detail]`)),
        (this.fiestaId = this.root?.dataset.fiestaId ?? ``),
        i(
          `galeria-detalle`,
          s().then(({ fiestas: e }) => {
            this.fiesta = e.find((e) => e.id === this.fiestaId) ?? null;
          }),
        ));
    }
    onVisible() {
      if (!this.root) return;
      ((this.titleEl = this.root.querySelector(`[data-gallery-detail-title]`)),
        (this.dateEl = this.root.querySelector(`[data-gallery-detail-date]`)),
        (this.gridEl = this.root.querySelector(`[data-gallery-detail-grid]`)),
        (this.emptyEl = this.root.querySelector(`[data-gallery-detail-empty]`)),
        (this.slider = this.root.querySelector(`[data-gallery-detail-slider]`)),
        (this.lightbox = this.root.querySelector(`[data-gallery-lightbox]`)),
        (this.lightboxImg =
          this.lightbox?.querySelector(`[data-gallery-lightbox-img]`) ?? null),
        (this.lightboxCounter =
          this.lightbox?.querySelector(`[data-gallery-lightbox-counter]`) ??
          null));
      let t = this.root.querySelector(`[data-gallery-detail-back]`);
      if (
        (t && this.bajasHover.push(e(t, { fuente: `region` })), !this.fiesta)
      ) {
        this.emptyEl && (this.emptyEl.hidden = !1);
        return;
      }
      (this.titleEl && (this.titleEl.textContent = this.fiesta.nombre),
        this.dateEl && (this.dateEl.textContent = o(this.fiesta.fecha)));
      let n = matchMedia(u).matches;
      (this.slider && (this.slider.value = String(n ? l : c)),
        this.slider?.addEventListener(`input`, this.onSliderInput));
      let r = this.slider?.closest(`.gallery-detail-slider`);
      (r && this.bajasHover.push(e(r, { fuente: `region` })),
        this.root
          .querySelector(`[data-gallery-lightbox-close]`)
          ?.addEventListener(`click`, this.closeLightbox),
        this.root
          .querySelector(`[data-gallery-lightbox-prev]`)
          ?.addEventListener(`click`, () => this.moverLightbox(-1)),
        this.root
          .querySelector(`[data-gallery-lightbox-next]`)
          ?.addEventListener(`click`, () => this.moverLightbox(1)),
        this.lightbox?.addEventListener(`click`, this.onLightboxBackdropClick),
        document.addEventListener(`keydown`, this.onKeydown),
        window.addEventListener(`resize`, this.onResize),
        this.renderGrid(),
        this.aplicarColumnas());
    }
    destroy() {
      (this.slider?.removeEventListener(`input`, this.onSliderInput),
        this.bajasHover.forEach((e) => e()),
        (this.bajasHover = []),
        this.lightbox?.removeEventListener(
          `click`,
          this.onLightboxBackdropClick,
        ),
        document.removeEventListener(`keydown`, this.onKeydown),
        window.removeEventListener(`resize`, this.onResize),
        this.unlockLenis?.(),
        super.destroy());
    }
    onSliderInput = () => this.aplicarColumnas();
    onResize = () => this.actualizarCalidad();
    aplicarColumnas() {
      if (!this.gridEl || !this.slider) return;
      let e = Math.min(l, Math.max(c, Number(this.slider.value) || c));
      (this.gridEl.style.setProperty(`--gallery-cols`, String(e)),
        this.actualizarCalidad());
    }
    renderGrid() {
      if (!this.gridEl || !this.fiesta) return;
      let e = this.fiesta.fotos;
      this.gridEl.replaceChildren(...e.map((e, t) => this.buildPhoto(t)));
    }
    buildPhoto(e) {
      let t = this.fiesta,
        n = document.createElement(`button`);
      ((n.type = `button`),
        (n.className = `gallery-photo`),
        n.setAttribute(
          `aria-label`,
          `View image ${e + 1} of ${t.fotos.length} in full screen`,
        ),
        n.addEventListener(`click`, () => this.openLightbox(e, n)));
      let r = document.createElement(`img`);
      return (
        (r.src = t.miniaturas[e] ?? t.fotos[e]),
        (r.alt = ``),
        (r.loading = e < l ? `eager` : `lazy`),
        n.append(r),
        n
      );
    }
    actualizarCalidad = () => {
      if (!this.gridEl || !this.fiesta) return;
      let e = this.gridEl.querySelector(`.gallery-photo`);
      if (!e) return;
      let t = e.getBoundingClientRect().width,
        n = this.fiesta,
        r = t > d;
      this.gridEl.querySelectorAll(`.gallery-photo img`).forEach((e, t) => {
        let i = r ? n.fotos[t] : (n.miniaturas[t] ?? n.fotos[t]);
        i && e.src !== i && (e.src = i);
      });
    };
    openLightbox(e, t) {
      !this.fiesta ||
        !this.lightbox ||
        !this.lightboxImg ||
        ((this.lightboxTrigger = t),
        (this.lightboxIndex = e),
        this.pintarLightbox(),
        (this.lightbox.hidden = !1),
        (this.unlockLenis = n()),
        this.root?.querySelector(`[data-gallery-lightbox-close]`)?.focus());
    }
    closeLightbox = () => {
      !this.lightbox ||
        this.lightbox.hidden ||
        ((this.lightbox.hidden = !0),
        this.unlockLenis?.(),
        (this.unlockLenis = null),
        t(),
        this.lightboxTrigger?.focus(),
        (this.lightboxTrigger = null));
    };
    moverLightbox(e) {
      if (!this.fiesta) return;
      let t = this.fiesta.fotos.length;
      ((this.lightboxIndex = (this.lightboxIndex + e + t) % t),
        this.pintarLightbox());
    }
    pintarLightbox() {
      !this.fiesta ||
        !this.lightboxImg ||
        ((this.lightboxImg.src = this.fiesta.fotos[this.lightboxIndex]),
        (this.lightboxImg.alt = `${this.fiesta.nombre}, image ${this.lightboxIndex + 1}`),
        this.lightboxCounter &&
          (this.lightboxCounter.textContent = `${this.lightboxIndex + 1} / ${this.fiesta.fotos.length}`));
    }
    onLightboxBackdropClick = (e) => {
      e.target === this.lightbox && this.closeLightbox();
    };
    onKeydown = (e) => {
      if (!this.lightbox || this.lightbox.hidden) return;
      if (e.key === `Tab`) {
        const controls = [...this.lightbox.querySelectorAll(`button:not([disabled])`)];
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
        return;
      }
      if (e.key === `Escape`) {
        e.preventDefault();
        this.closeLightbox();
      } else if (e.key === `ArrowLeft` || e.key === `ArrowRight`) {
        e.preventDefault();
        this.moverLightbox(e.key === `ArrowLeft` ? -1 : 1);
      }
    };
  };
a(`[data-fiesta-id]`, () => new f());
