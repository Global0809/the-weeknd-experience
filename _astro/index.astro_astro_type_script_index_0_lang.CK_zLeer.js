import {
  $ as e,
  At as t,
  Bt as n,
  C as r,
  Dt as i,
  Et as a,
  Ft as o,
  Gt as s,
  It as c,
  M as l,
  Mt as u,
  N as d,
  Nt as f,
  Q as p,
  S as m,
  T as h,
  Tt as g,
  U as _,
  Ut as v,
  W as y,
  Wt as b,
  X as x,
  Y as S,
  _ as C,
  b as ee,
  bt as te,
  d as w,
  et as T,
  f as ne,
  ft as re,
  h as E,
  k as D,
  l as O,
  lt as ie,
  m as k,
  o as A,
  p as ae,
  pt as j,
  qt as oe,
  r as M,
  rt as N,
  s as se,
  tt as ce,
  u as le,
  v as ue,
  vt as P,
  wt as de,
  zt as fe,
} from "./three.module.DNWRkucb.js";
import { i as pe, t as me } from "./transition-events.CF8puATB.js";
import { t as F } from "./viewport.CgzPpb1h.js";
import {
  $ as he,
  A as ge,
  B as _e,
  C as ve,
  E as ye,
  F as be,
  H as I,
  I as L,
  J as xe,
  L as Se,
  M as Ce,
  N as we,
  O as Te,
  P as Ee,
  Q as De,
  R as Oe,
  S as R,
  St as ke,
  T as Ae,
  U as z,
  V as je,
  W as Me,
  X as Ne,
  Y as Pe,
  Z as Fe,
  _ as B,
  _t as Ie,
  a as Le,
  at as Re,
  b as ze,
  bt as V,
  c as Be,
  d as Ve,
  dt as He,
  et as Ue,
  f as We,
  ft as H,
  g as Ge,
  gt as Ke,
  h as qe,
  ht as Je,
  it as U,
  j as Ye,
  k as Xe,
  l as Ze,
  lt as Qe,
  m as W,
  mt as $e,
  nt as et,
  o as tt,
  p as nt,
  q as rt,
  r as it,
  s as at,
  st as ot,
  tt as st,
  u as ct,
  ut as lt,
  v as ut,
  vt as dt,
  w as ft,
  x as pt,
  xt as mt,
  y as ht,
  yt as gt,
  z as G,
} from "./page-registry.CkntNRlE.js";
import {
  a as _t,
  i as K,
  n as vt,
  o as yt,
  t as bt,
} from "./lenisSingleton.0mupUKGg.js";
import { t as xt } from "./page-controller.Bk80V8FO.js";
import "./techo-por-pagina.MXLEveRw.js";
import {
  C as St,
  D as Ct,
  E as wt,
  S as Tt,
  T as Et,
  _ as Dt,
  a as Ot,
  b as kt,
  d as At,
  f as jt,
  g as Mt,
  h as Nt,
  l as Pt,
  m as Ft,
  n as It,
  o as Lt,
  p as Rt,
  r as zt,
  s as Bt,
  t as Vt,
  u as Ht,
  v as Ut,
  w as Wt,
  x as Gt,
  y as Kt,
} from "./cajas-botellines.Cgd0-VDE.js";
import { i as qt, n as Jt } from "./loader-registry.DLYHQVMw.js";
import { n as Yt } from "./fourvenues.C1lyijIr.js";
import { s as Xt } from "./gallery.CeI9UR7L.js";
import {
  a as q,
  c as Zt,
  r as Qt,
  s as $t,
  t as en,
} from "./vigia-carga.bIwpCRzI.js";
import { i as tn, n as nn, r as rn, t as J } from "./reproductor.K4RbChR4.js";
import { r as an } from "./menu-events.CcTJfOO4.js";
// Keep decorative screens still when the visitor requests reduced motion.
// A decoded frame after the opening fade remains visible without starting playback.
const weekndVideoMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`);
const weekndVideoStates = new WeakMap();
function weekndDecorativePlayback(video, active) {
  let state = weekndVideoStates.get(video);
  if (!state) {
    state = { active: false, source: null };
    state.apply = () => {
      if (!weekndVideoMotion.matches) {
        state.source = null;
        state.active ? video.play().catch(() => {}) : video.pause();
        return;
      }
      video.autoplay = false;
      video.pause();
      if (video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !video.currentSrc) return;
      if (state.source === video.currentSrc) return;
      state.source = video.currentSrc;
      const frame = Number.isFinite(video.duration) ? Math.min(0.85, Math.max(0, video.duration - 0.05)) : 0.85;
      try { video.currentTime = frame; } catch {}
    };
    state.afterSeek = () => { if (weekndVideoMotion.matches) video.pause(); };
    state.release = () => {
      weekndVideoMotion.removeEventListener(`change`, state.apply);
      video.removeEventListener(`loadeddata`, state.apply);
      video.removeEventListener(`seeked`, state.afterSeek);
      weekndVideoStates.delete(video);
    };
    weekndVideoStates.set(video, state);
    weekndVideoMotion.addEventListener(`change`, state.apply);
    video.addEventListener(`loadeddata`, state.apply);
    video.addEventListener(`seeked`, state.afterSeek);
  }
  state.active = active;
  state.apply();
}
function weekndReleaseDecorativeVideo(video) {
  weekndVideoStates.get(video)?.release();
}
var on = class {
    onSinSonido;
    rotulo;
    sinSonido;
    visible = !1;
    constructor(e) {
      ((this.onSinSonido = e),
        (this.rotulo = document.querySelector(`[data-intro-rotulo]`)),
        (this.sinSonido = document.querySelector(`[data-intro-sin-sonido]`)),
        this.sinSonido?.addEventListener(`click`, this.alPulsarSinSonido),
        this.pintar());
    }
    actualizar(e) {
      e !== this.visible && ((this.visible = e), this.pintar());
    }
    alPulsarSinSonido = (e) => {
      (e.preventDefault(), this.visible && this.onSinSonido());
    };
    pintar() {
      let e = this.visible ? `true` : `false`;
      (this.rotulo && (this.rotulo.dataset.visible = e),
        this.sinSonido &&
          ((this.sinSonido.dataset.visible = e),
          (this.sinSonido.tabIndex = this.visible ? 0 : -1),
          this.sinSonido.setAttribute(
            `aria-hidden`,
            this.visible ? `false` : `true`,
          )));
    }
    destroy() {
      (this.sinSonido?.removeEventListener(`click`, this.alPulsarSinSonido),
        (this.visible = !1),
        this.pintar());
    }
  },
  sn = {
    click: `/the-weeknd-experience/_astro/click-boton.C0K-vBkm.mp3`,
    encendido: `/the-weeknd-experience/_astro/encendido.CgKzVakO.mp3`,
    glitch1: `/the-weeknd-experience/_astro/glitch-1.CZzkJS_Q.mp3`,
    glitch2: `/the-weeknd-experience/_astro/glitch-2.C114-Hb7.mp3`,
    glitchFinal: `/the-weeknd-experience/_astro/glitch-final.B89raeSo.mp3`,
    sintetizador: `/the-weeknd-experience/_astro/sintetizador.C1HVRzd3.mp3`,
    viento: `/the-weeknd-experience/_astro/viento.BvrdedfU.mp3`,
  },
  cn = [`pointerdown`, `pointerup`, `touchend`, `keydown`, `click`],
  ln = class {
    ctx = null;
    maestro = null;
    buffers = new Map();
    carga = null;
    cargas = new Map();
    escuchando = !1;
    volumen;
    constructor() {
      ((this.volumen = J().getEstadoVolumen()),
        tn(`musica:volumen`, (e) => {
          ((this.volumen = e.detail), this.aplicarVolumen());
        }));
    }
    precargar() {
      return (
        (this.carga ||= Promise.all(
          Object.keys(sn).map((e) => {
            let t = (async () => {
              try {
                let t = await fetch(sn[e]);
                if (!t.ok) throw Error(`${t.status}`);
                let n = await this.decodificar(await t.arrayBuffer());
                return (this.buffers.set(e, n), n);
              } catch {
                return null;
              }
            })();
            return (this.cargas.set(e, t), t);
          }),
        ).then(() => {})),
        this.carga
      );
    }
    cargado(e) {
      return (this.precargar(), this.cargas.get(e) ?? Promise.resolve(null));
    }
    desbloquear() {
      if (!(typeof window > `u` || typeof AudioContext > `u`)) {
        if (!this.ctx) {
          try {
            this.ctx = new AudioContext({ latencyHint: `interactive` });
          } catch {
            return;
          }
          ((this.maestro = this.ctx.createGain()),
            this.maestro.connect(this.ctx.destination),
            (this.maestro.gain.value = this.nivelMaestro));
          let e = navigator.audioSession;
          if (e)
            try {
              e.type = `playback`;
            } catch {}
        }
        if (this.ctx.state !== `running`) {
          this.ctx.resume().catch(() => {});
          let e = this.ctx.createBufferSource();
          ((e.buffer = this.ctx.createBuffer(1, 1, this.ctx.sampleRate)),
            e.connect(this.ctx.destination),
            e.start());
        }
      }
    }
    escucharGestos() {
      if (this.escuchando || typeof window > `u`) return;
      this.escuchando = !0;
      let e = () => {
        this.ctx?.state !== `running` && this.desbloquear();
      };
      for (let t of cn)
        window.addEventListener(t, e, { capture: !0, passive: !0 });
      navigator.userActivation?.hasBeenActive && this.desbloquear();
    }
    get contexto() {
      return this.ctx?.state === `running` ? this.ctx : null;
    }
    get bus() {
      return this.contexto ? this.maestro : null;
    }
    alSonar(e) {
      let t = this.ctx;
      if (t) {
        if (t.state === `running`) {
          e(t);
          return;
        }
        t.resume()
          .then(() => {
            t.state === `running` && e(t);
          })
          .catch(() => {});
      }
    }
    buffer(e) {
      return this.buffers.get(e) ?? null;
    }
    disparar(e, t = {}) {
      let n = this.contexto,
        r = this.buffers.get(e);
      if (!n || !this.maestro || !r) return null;
      let i = Math.max(n.currentTime, t.cuando ?? 0),
        a = n.createBufferSource();
      ((a.buffer = r), (a.playbackRate.value = t.velocidad ?? 1));
      let o = n.createGain();
      o.gain.value = t.ganancia ?? 1;
      let s = o;
      if ((a.connect(o), t.pan)) {
        let e = n.createStereoPanner();
        ((e.pan.value = Math.max(-1, Math.min(1, t.pan))),
          o.connect(e),
          (s = e));
      }
      s.connect(t.destino ?? this.maestro);
      let c = new Promise((e) => {
        a.onended = () => {
          (a.disconnect(), s.disconnect(), s !== o && o.disconnect(), e());
        };
      });
      a.start(i);
      let l = !1;
      return {
        fin: c,
        parar: (e = 0.05) => {
          if (l) return;
          l = !0;
          let t = n.currentTime;
          if (t < i) {
            a.stop();
            return;
          }
          (o.gain.cancelScheduledValues(t),
            o.gain.setValueAtTime(o.gain.value, t),
            o.gain.linearRampToValueAtTime(0, t + e),
            a.stop(t + e + 0.01));
        },
      };
    }
    decodificar(e) {
      return this.ctx
        ? this.ctx.decodeAudioData(e)
        : new OfflineAudioContext(2, 1, 44100).decodeAudioData(e);
    }
    aplicarMezcla() {
      this.aplicarVolumen();
    }
    get nivelMaestro() {
      return this.volumen.muteado
        ? 0
        : this.volumen.nivel * Math.max(0, nn.efectos);
    }
    aplicarVolumen() {
      !this.maestro ||
        !this.ctx ||
        this.maestro.gain.setTargetAtTime(
          this.nivelMaestro,
          this.ctx.currentTime,
          0.02,
        );
    }
  },
  un = null;
function Y() {
  return ((un ||= new ln()), un);
}
var dn = 0.15,
  fn = 0.002,
  pn = 64,
  mn = 0.012,
  hn = (() => {
    let e = new Float32Array(pn);
    for (let t = 0; t < pn; t++)
      e[t] = 0.5 - 0.5 * Math.cos((2 * Math.PI * t) / (pn - 1));
    return e;
  })(),
  gn = class {
    config;
    bus = null;
    fuerza = 0;
    cabezal = 0;
    siguiente = 0;
    silencio = 1 / 0;
    constructor(e) {
      this.config = e;
    }
    actualizar(e, t) {
      let n = Y(),
        r = n.contexto,
        i = n.buffer(`viento`),
        a = n.bus;
      if (!r || !i || !a) return;
      let o = this.config,
        s = Math.abs(e),
        c =
          s <= o.velocidadMinima
            ? 0
            : Math.min(
                1,
                (s - o.velocidadMinima) /
                  Math.max(0.001, o.velocidadPlena - o.velocidadMinima),
              ),
        l = c > this.fuerza ? o.ataque : o.suelta;
      ((this.fuerza +=
        (c - this.fuerza) * (1 - Math.exp(-t / Math.max(0.001, l)))),
        this.bus ||
          ((this.bus = r.createGain()),
          (this.bus.gain.value = 0),
          this.bus.connect(a)));
      let u = o.nivel * this.fuerza ** +Math.max(0.1, o.curva);
      if (
        (this.bus.gain.setTargetAtTime(u, r.currentTime, 0.03),
        this.fuerza < fn)
      ) {
        ((this.silencio += t),
          this.silencio >= o.reinicio && (this.cabezal = 0));
        return;
      }
      ((this.silencio = 0), this.programar(r, i));
    }
    parar() {
      let e = this.bus;
      ((this.bus = null),
        (this.fuerza = 0),
        (this.cabezal = 0),
        (this.silencio = 1 / 0));
      let t = Y().contexto;
      if (e) {
        if (!t) {
          e.disconnect();
          return;
        }
        (e.gain.cancelScheduledValues(t.currentTime),
          e.gain.setTargetAtTime(0, t.currentTime, 0.05),
          setTimeout(
            () => e.disconnect(),
            (dn + this.config.grano + 0.4) * 1e3,
          ));
      }
    }
    programar(e, t) {
      let n = this.config,
        r = Math.max(0.02, n.grano),
        i = r / Math.max(1, n.solape),
        a = 2 / Math.max(2, n.solape),
        o = n.ritmoLento + (n.ritmoFuerte - n.ritmoLento) * this.fuerza,
        s = Math.max(0, t.duration - r),
        c = Math.min(Math.max(0, n.bucleDesde), s),
        l = Math.min(Math.max(c + i, n.bucleHasta), s),
        u = e.currentTime;
      for (
        this.siguiente < u && (this.siguiente = u + 0.01);
        this.siguiente < u + dn;
      ) {
        let n = Math.min(
          s,
          Math.max(0, this.cabezal + (Math.random() * 2 - 1) * mn),
        );
        (this.grano(e, t, this.siguiente, n, r, a),
          (this.cabezal += o * i),
          this.cabezal > l && (this.cabezal = c + (this.cabezal - l)),
          (this.siguiente += i));
      }
    }
    grano(e, t, n, r, i, a) {
      if (!this.bus) return;
      let o = e.createBufferSource();
      o.buffer = t;
      let s = e.createGain();
      ((s.gain.value = 0),
        s.gain.setValueCurveAtTime(
          hn.map((e) => e * a),
          n,
          i,
        ),
        o.connect(s).connect(this.bus),
        (o.onended = () => {
          (o.disconnect(), s.disconnect());
        }),
        o.start(n, r, i));
    }
  },
  _n = [`click`, `encendido`, `glitch1`, `glitch2`, `glitchFinal`],
  vn = 0.08,
  yn = new b(),
  bn = new b(),
  xn = class {
    config;
    camara;
    viento;
    entrada = [];
    turnoEntrada = 0;
    voces = new Set();
    ultimoCruce = -1 / 0;
    constructor(e, t) {
      ((this.config = e),
        (this.camara = t),
        (this.viento = new gn(e.viento)),
        Y().escucharGestos());
    }
    precargar() {
      Y().precargar();
    }
    desbloquear() {
      Y().desbloquear();
    }
    reproducirEntrada() {
      this.cancelarEntrada();
      let e = ++this.turnoEntrada,
        t = Y();
      t.alSonar((n) => {
        if (e !== this.turnoEntrada) return;
        let r = n.currentTime;
        for (let i of _n)
          t.cargado(i).then(() => {
            if (e !== this.turnoEntrada) return;
            let a = this.config.entrada,
              o = a[i];
            if (o.desfase + vn < n.currentTime - r) return;
            let s = t.disparar(i, {
              cuando: r + Math.max(0, o.desfase),
              ganancia: a.nivel * o.nivel,
            });
            s && this.entrada.push(s);
          });
      });
    }
    cancelarEntrada(e = 0.08) {
      this.turnoEntrada++;
      for (let t of this.entrada) t.parar(e);
      this.entrada = [];
    }
    cruce(e, t) {
      let n = Y(),
        r = n.contexto,
        i = this.config.cruce;
      if (
        !r ||
        i.nivel <= 0 ||
        r.currentTime - this.ultimoCruce < i.respiro ||
        this.voces.size >= Math.max(1, i.maxVoces)
      )
        return;
      e.centroMundo(yn, t);
      let a = yn.distanceTo(this.camara.position);
      if ((bn.copy(yn).project(this.camara), bn.z > 1)) return;
      let o = Math.hypot(bn.x, bn.y),
        s = p.lerp(
          1,
          i.pantallaSuelo,
          p.smoothstep(o, 0, Math.max(0.01, i.pantallaRadio)),
        ),
        c = p.lerp(
          1,
          i.distanciaSuelo,
          p.smoothstep(a, i.cerca, Math.max(i.cerca + 0.01, i.lejos)),
        ),
        l = i.nivel * (i.secciones[e.claveSeccion] ?? 1) * s * c;
      if (l <= 0.001) return;
      let u = n.disparar(`sintetizador`, {
        ganancia: l,
        pan: p.clamp(bn.x, -1, 1) * i.panorama,
        velocidad: 1 + (Math.random() * 2 - 1) * i.variacion,
      });
      u &&
        ((this.ultimoCruce = r.currentTime),
        this.voces.add(u),
        u.fin.then(() => this.voces.delete(u)));
    }
    update(e, t) {
      this.viento.actualizar(e, t);
    }
    dispose() {
      (this.cancelarEntrada(0.2), this.viento.parar());
    }
  },
  Sn = [`hero`, `eventos`, `dj`, `galeria`, `proyeccion`, `contacto`],
  Cn = {
    activa: !0,
    meseta: 6,
    llegada: 1,
    persecucion: 0.3,
    hero: `#ef463a`,
    eventos: `#df3a2e`,
    dj: `#eb211f`,
    galeria: `#ffbd59`,
    proyeccion: `#10e0d2`,
    contacto: `#ef463a`,
  };
function wn() {
  return { ...Cn };
}
function Tn(e, t, n = 4) {
  let r = Math.max(1e-6, e.vuelta);
  return Sn.filter((e) => e !== `eventos` || n > 0)
    .map((n) => ({
      seccion: n,
      avance: p.euclideanModulo(e[n], r),
      color: new E(t[n]),
    }))
    .sort((e, t) => e.avance - t.avance);
}
function En(e, t) {
  return Math.max(e - 2 * Math.max(0, t), e * 0.25);
}
function Dn(e, t, n, r, i, a = 0.5) {
  let o = n.length;
  if (o === 0) return i.setRGB(1, 1, 1);
  if (o === 1) return i.copy(n[0].color);
  let s = Math.max(1e-6, t),
    c = p.euclideanModulo(e, s),
    l = o - 1;
  for (let e = 0; e < o; e += 1)
    if (n[e].avance > c) {
      l = e - 1;
      break;
    }
  l < 0 && ((l = o - 1), (c += s));
  let u = (l + 1) % o,
    d = n[l].avance,
    f = u === 0 ? n[0].avance + s : n[u].avance,
    m = Math.max(1e-6, f - d),
    h = En(m, r),
    g = d + (m - h) * p.clamp(a, 0, 1),
    _ = p.clamp((c - g) / h, 0, 1);
  return i.copy(n[l].color).lerp(n[u].color, _);
}
var On = class {
    config;
    claves = [];
    vuelta = 1;
    constructor(e, t, n = 4) {
      ((this.config = e), this.recorrido(t, n));
    }
    recorrido(e, t = 4) {
      ((this.vuelta = e.vuelta), (this.claves = Tn(e, this.config, t)));
    }
    aplicarConfig() {
      for (let e of this.claves) e.color.set(this.config[e.seccion]);
    }
    colorEn(e, t) {
      return Dn(
        e,
        this.vuelta,
        this.claves,
        this.config.meseta,
        t,
        this.config.llegada,
      );
    }
  },
  kn = class {
    material;
    colores = Array.from({ length: 7 }, () => new s(1, 1, 1, 0.78));
    acabados = Array.from({ length: 7 }, () => new s(0.35, 0.3, 1, 0));
    color = new E();
    constructor(e) {
      let t = new Set();
      if (
        (e.traverse((e) => {
          if (e instanceof T)
            for (let n of Array.isArray(e.material) ? e.material : [e.material])
              n instanceof N && n.name === `Cuerpo_Teles_Atlas` && t.add(n);
        }),
        t.size !== 1)
      )
        throw Error(
          `Las teles requieren un único material Cuerpo_Teles_Atlas.`,
        );
      this.material = [...t][0];
      let n = this.material;
      if (!n.map) throw Error(`Falta el atlas de las carcasas.`);
      ((n.map.colorSpace = ``),
        (n.map.needsUpdate = !0),
        (n.metalness = 0),
        (n.roughness = 1),
        n.color.setRGB(1, 1, 1),
        n.emissive.setRGB(0, 0, 0),
        (n.emissiveMap = null),
        (n.roughnessMap = null),
        (n.metalnessMap = null));
      let r = n.onBeforeCompile,
        i = n.customProgramCacheKey();
      ((n.onBeforeCompile = (e, t) => {
        (r.call(n, e, t),
          (e.uniforms.uTeleColores = { value: this.colores }),
          (e.uniforms.uTeleAcabados = { value: this.acabados }),
          (e.vertexShader =
            `
        attribute float hoyoTeleIndice;
        uniform vec4 uTeleColores[7];
        uniform vec4 uTeleAcabados[7];
        varying vec4 vTeleColorRugosidad;
        varying vec4 vTeleAcabado;
      ` +
            e.vertexShader.replace(
              `#include <uv_vertex>`,
              `
        #include <uv_vertex>
        int hoyoTele = int(hoyoTeleIndice + 0.5);
        vTeleColorRugosidad = uTeleColores[hoyoTele];
        vTeleAcabado = uTeleAcabados[hoyoTele];
      `,
            )),
          (e.fragmentShader =
            `
        varying vec4 vTeleColorRugosidad;
        varying vec4 vTeleAcabado;
      ` +
            e.fragmentShader
              .replace(
                `#include <map_fragment>`,
                `
          // Dos regiones del mismo atlas de 1024x512, con 16 px de margen y centros de texel.
          // Las carcasas CRT seleccionan G/B con su banda de UV.
          // Se conserva R para los assets anteriores, con las mismas máscaras de desgaste.
          float hoyoPiloto = step(1.5, vMapUv.x);
          vec2 hoyoUv = vec2(vMapUv.x - 2.0 * hoyoPiloto, vMapUv.y);
          vec2 hoyoBaseUv = vec2(16.5, 16.5) + clamp(hoyoUv, 0.0, 1.0) * 479.0;
          vec3 hoyoDatos = texture2D(map, hoyoBaseUv / vec2(1024.0, 512.0)).rgb;
          float hoyoDetalle = mix(hoyoDatos.r, hoyoDatos.g, hoyoPiloto);
          vec2 hoyoPatron = hoyoUv * vTeleAcabado.z;
          vec2 hoyoRuidoUv = vec2(528.5, 16.5) + fract(hoyoPatron) * 479.0;
          // Derivadas antes de fract: el borde de repetición no fuerza un mip borroso.
          vec2 hoyoDx = dFdx(hoyoPatron) * vec2(479.0 / 1024.0, 479.0 / 512.0);
          vec2 hoyoDy = dFdy(hoyoPatron) * vec2(479.0 / 1024.0, 479.0 / 512.0);
          vec3 hoyoTeleMascaras = textureGrad(map, hoyoRuidoUv / vec2(1024.0, 512.0), hoyoDx, hoyoDy).rgb;
          float hoyoGrano = 1.0 + (hoyoTeleMascaras.r - 0.5) * vTeleAcabado.x * 0.25;
          float hoyoMancha = hoyoTeleMascaras.g * vTeleAcabado.y * 0.25;
          diffuseColor.rgb *= vTeleColorRugosidad.rgb * hoyoDetalle * hoyoGrano * (1.0 - hoyoMancha);
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.38) * hoyoDetalle, hoyoTeleMascaras.b * vTeleAcabado.y * 0.5);
        `,
              )
              .replace(
                `#include <roughnessmap_fragment>`,
                `
          // El atlas distingue plástico, bisel y mandos; el panel desplaza el acabado completo.
          float hoyoRugosidad = mix(vTeleColorRugosidad.w,
            hoyoDatos.b + vTeleColorRugosidad.w - 0.68, hoyoPiloto);
          float roughnessFactor = clamp(hoyoRugosidad
            + (hoyoTeleMascaras.r - 0.5) * vTeleAcabado.x * 0.08
            + hoyoTeleMascaras.g * vTeleAcabado.y * 0.12, 0.05, 1.0);
        `,
              )
              .replace(
                `#include <emissivemap_fragment>`,
                `
          // La aparición en reposo conserva el albedo ya calculado, sin otra lectura del atlas.
          totalEmissiveRadiance = diffuseColor.rgb * vTeleAcabado.w;
        `,
              )));
      }),
        (n.customProgramCacheKey = () => i + `|hoyo-tv-atlas-2`),
        (n.needsUpdate = !0));
    }
    registrar(e, t) {
      if (t < 0 || t >= 7) throw Error(`Índice de carcasa fuera del atlas.`);
      e.geometry.setAttribute(
        `hoyoTeleIndice`,
        new h(
          new Float32Array(e.geometry.getAttribute(`position`).count).fill(t),
          1,
        ),
      );
    }
    aplicar(e, t) {
      (this.color.set(t.color),
        this.colores[e].set(
          this.color.r,
          this.color.g,
          this.color.b,
          t.rugosidad,
        ));
      let n = this.acabados[e];
      n.set(t.ruido, t.desgaste, t.escalaDetalle, n.w);
    }
    reposo(e, t) {
      this.acabados[e].w = t;
    }
  };
function An(e) {
  let t = !1;
  return (
    e.traverse((e) => {
      let { x: n, y: r, z: i } = e.scale;
      n * r * i >= 0 || (e.scale.multiplyScalar(-1), (t = !0));
    }),
    t && e.updateMatrixWorld(!0),
    t
  );
}
function jn(e, t = 3) {
  e.updateWorldMatrix(!0, !0);
  let n = new b(),
    r = new b(),
    i = [],
    a = 0;
  e.traverse((e) => {
    let t = e;
    t.isMesh && t.geometry.getAttribute(`position`) && i.push(t);
  });
  let o = Math.max(1, Math.round(t));
  for (let e of i) {
    let t = e.geometry.getAttribute(`position`);
    for (let i = 0; i < t.count; i += o)
      (r.fromBufferAttribute(t, i).applyMatrix4(e.matrixWorld),
        n.add(r),
        (a += 1));
  }
  let s = {
    largo: new b(1, 0, 0),
    medio: new b(0, 1, 0),
    fino: new b(0, 0, 1),
    centro: n,
    tamano: new b(),
    desplazamiento: new b(),
    muestras: a,
  };
  if (!a) return s;
  n.divideScalar(a);
  let c = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let e of i) {
    let t = e.geometry.getAttribute(`position`);
    for (let i = 0; i < t.count; i += o)
      (r.fromBufferAttribute(t, i).applyMatrix4(e.matrixWorld).sub(n),
        (c[0] += r.x * r.x),
        (c[1] += r.x * r.y),
        (c[2] += r.x * r.z),
        (c[4] += r.y * r.y),
        (c[5] += r.y * r.z),
        (c[8] += r.z * r.z));
  }
  ((c[3] = c[1]), (c[6] = c[2]), (c[7] = c[5]));
  let l = Nn(c, new b(0.5773, 0.5773, 0.5773)),
    u = In(c, l),
    d = Nn(
      c.map(
        (e, t) =>
          e - u * l.getComponent(Math.floor(t / 3)) * l.getComponent(t % 3),
      ),
      new b(0.1, 0.9, 0.42),
    );
  d.sub(l.clone().multiplyScalar(d.dot(l))).normalize();
  let f = new b().crossVectors(l, d).normalize();
  (s.largo.copy(l), s.medio.copy(d), s.fino.copy(f));
  let p = Ln(i, n, s, o);
  return (s.tamano.copy(p.tamano), s.desplazamiento.copy(p.centro), s);
}
function Mn(t) {
  let n = new e().makeBasis(t.largo, t.medio, t.fino);
  return new P().setFromRotationMatrix(n).invert();
}
function Nn(e, t) {
  let n = t.clone().normalize(),
    r = new b();
  for (let t = 0; t < 64; t += 1) {
    Fn(e, n, r);
    let t = r.length();
    if (t < 1e-12) break;
    n.copy(r).divideScalar(t);
  }
  return n;
}
function Pn(e, t) {
  let n = e[0] + e[4] + e[8];
  return n <= 1e-16
    ? t.clone().normalize()
    : Nn(
        e.map((e, t) => (t % 4 == 0 ? n - e : -e)),
        t,
      );
}
function Fn(e, t, n) {
  n.set(
    e[0] * t.x + e[1] * t.y + e[2] * t.z,
    e[3] * t.x + e[4] * t.y + e[5] * t.z,
    e[6] * t.x + e[7] * t.y + e[8] * t.z,
  );
}
function In(e, t) {
  let n = new b();
  return (Fn(e, t, n), n.dot(t));
}
function Ln(e, t, n, r) {
  let i = new b(1 / 0, 1 / 0, 1 / 0),
    a = new b(-1 / 0, -1 / 0, -1 / 0),
    o = new b();
  for (let s of e) {
    let e = s.geometry.getAttribute(`position`);
    for (let c = 0; c < e.count; c += r) {
      o.fromBufferAttribute(e, c).applyMatrix4(s.matrixWorld).sub(t);
      let r = o.dot(n.largo),
        l = o.dot(n.medio),
        u = o.dot(n.fino);
      (i.set(Math.min(i.x, r), Math.min(i.y, l), Math.min(i.z, u)),
        a.set(Math.max(a.x, r), Math.max(a.y, l), Math.max(a.z, u)));
    }
  }
  return {
    tamano: new b().subVectors(a, i),
    centro: new b().addVectors(a, i).multiplyScalar(0.5),
  };
}
function Rn(e) {
  let t = e.userData.hoyoNeonEncaje;
  if (!t || typeof t != `object`) return jn(e);
  let n = t;
  if (
    n.version !== 1 ||
    ![`largo`, `medio`, `fino`, `centro`, `tamano`, `desplazamiento`].every(
      (e) =>
        Array.isArray(n[e]) && n[e].length === 3 && n[e].every(Number.isFinite),
    ) ||
    typeof n.muestras != `number` ||
    !(n.muestras > 0)
  )
    return jn(e);
  let r = (e) => new b().fromArray(n[e]);
  return {
    largo: r(`largo`),
    medio: r(`medio`),
    fino: r(`fino`),
    centro: r(`centro`),
    tamano: r(`tamano`),
    desplazamiento: r(`desplazamiento`),
    muestras: n.muestras,
  };
}
var zn = {
  visible: !0,
  tamanoGlobal: z(0.68, 0.34),
  radioGlobal: z(0.91, 0.71),
  miradaGlobal: z(0.67),
  videoBrillo: 0.67,
  videoLlenar: !0,
  teles: [
    {
      avance: -1.5,
      angulo: 200,
      radio: 0.62,
      tamano: 6.11,
      mirada: 0.8,
      giroX: -9,
      giroY: 15,
      giroZ: -13,
      videoIndice: 0,
      color: `#789caa`,
      ruido: 1,
      desgaste: 1,
      escalaDetalle: 1,
      rugosidad: 1,
    },
    {
      avance: 1.5,
      angulo: 152,
      radio: 0.66,
      tamano: 4.83,
      desplazaY: z(0, 2.6),
      mirada: 0.8,
      giroX: 11,
      giroY: -13,
      giroZ: 9,
      videoIndice: 1,
      color: `#909b80`,
      ruido: 1,
      desgaste: 1,
      escalaDetalle: 1,
      rugosidad: 1,
    },
    {
      avance: -0.5,
      angulo: 118,
      radio: 0.6,
      tamano: 5.47,
      mirada: 0.8,
      giroX: -15,
      giroY: 7,
      giroZ: 17,
      videoIndice: 2,
      color: `#bfa6a1`,
      ruido: 1,
      desgaste: 1,
      escalaDetalle: 1,
      rugosidad: 1,
    },
    {
      avance: 4,
      angulo: 74,
      radio: 0.55,
      tamano: 4.5,
      mirada: 0.8,
      giroX: 6,
      giroY: 19,
      giroZ: -8,
      videoIndice: 3,
      color: `#8c7d9a`,
      ruido: 1,
      desgaste: 1,
      escalaDetalle: 1,
      rugosidad: 1,
    },
    {
      avance: -1,
      angulo: 20,
      radio: 0.64,
      tamano: 6.11,
      desplazaX: z(0, 0.5),
      mirada: 0.8,
      giroX: -11,
      giroY: -17,
      giroZ: 12,
      videoIndice: 4,
      color: `#ad8b69`,
      ruido: 1,
      desgaste: 1,
      escalaDetalle: 1,
      rugosidad: 1,
    },
    {
      avance: 0.8,
      angulo: 330,
      radio: 0.62,
      tamano: 5.15,
      mirada: 0.8,
      giroX: 13,
      giroY: 10,
      giroZ: -19,
      videoIndice: 5,
      color: `#b2a481`,
      ruido: 1,
      desgaste: 1,
      escalaDetalle: 1,
      rugosidad: 1,
    },
    {
      avance: 6,
      angulo: 232,
      radio: 0.6,
      tamano: 4.18,
      mirada: 0.8,
      giroX: -7,
      giroY: -10,
      giroZ: 14,
      videoIndice: 6,
      color: `#7d879e`,
      ruido: 1,
      desgaste: 1,
      escalaDetalle: 1,
      rugosidad: 1,
    },
  ],
};
function Bn(e = zn) {
  return {
    ...e,
    tamanoGlobal: { ...e.tamanoGlobal },
    radioGlobal: { ...e.radioGlobal },
    miradaGlobal: { ...e.miradaGlobal },
    teles: e.teles.map((e) => ({
      ...e,
      ...(e.desplazaX ? { desplazaX: { ...e.desplazaX } } : {}),
      ...(e.desplazaY ? { desplazaY: { ...e.desplazaY } } : {}),
    })),
  };
}
var Vn = `/the-weeknd-experience/assets/media/crt-0.mp4`,
  Hn = `/the-weeknd-experience/assets/media/crt-1.mp4`,
  Un = `/the-weeknd-experience/assets/media/crt-2.mp4`,
  Wn = `/the-weeknd-experience/assets/media/crt-0.mobile.mp4`,
  Gn = `/the-weeknd-experience/assets/media/crt-1.mobile.mp4`,
  Kn = `/the-weeknd-experience/assets/media/crt-2.mobile.mp4`,
  qn = Object.assign({
    "../../../assets/videos_teles_mosaico/mosaico-a.mp4": Vn,
    "../../../assets/videos_teles_mosaico/mosaico-b.mp4": Hn,
    "../../../assets/videos_teles_mosaico/mosaico-c.mp4": Un,
  }),
  Jn = { columnas: 4, filas: 2, celdas: 7 },
  Yn = Object.assign({
    "../../../assets/videos_teles_mosaico_movil/mosaico-a.mp4": Wn,
    "../../../assets/videos_teles_mosaico_movil/mosaico-b.mp4": Gn,
    "../../../assets/videos_teles_mosaico_movil/mosaico-c.mp4": Kn,
  }),
  Xn = (e) =>
    Object.keys(e)
      .sort()
      .map((t) => e[t]),
  Zn = Xn(qn),
  Qn = Xn(Yn);
function $n() {
  return F() && Qn.length ? Qn : Zn;
}
function er(e) {
  let t = $n();
  if (!t.length || e <= 0) return null;
  let n = t[Math.floor(Math.random() * t.length)],
    r = Array.from({ length: Jn.celdas }, (e, t) => t);
  for (let e = r.length - 1; e > 0; --e) {
    let t = Math.floor(Math.random() * (e + 1));
    [r[e], r[t]] = [r[t], r[e]];
  }
  let i = Math.max(e, r.length);
  return {
    url: n,
    celdas: Array.from({ length: i }, (e, t) => r[t % r.length]),
  };
}
var tr = class {
    padre;
    lotes = [];
    piezas = [];
    anclas = new Set();
    inversa = new e();
    matriz = new e();
    constructor(e, t) {
      this.padre = e;
      try {
        for (let e of t) {
          if (!e.mallas.length) continue;
          let t = 0,
            n = 0;
          for (let { malla: r } of e.mallas)
            ((t += r.geometry.getAttribute(`position`).count),
              (n += r.geometry.getIndex()?.count ?? 0));
          let r = new se(e.mallas.length, t, Math.max(n, 1), e.material);
          ((r.name = e.nombre),
            (r.frustumCulled = !1),
            (r.sortObjects = !1),
            this.lotes.push(r));
          for (let { malla: t, ancla: n } of e.mallas) {
            let e = r.addGeometry(t.geometry),
              i = r.addInstance(e);
            (this.piezas.push({
              malla: t,
              ancla: n,
              lote: r,
              geometria: e,
              instancia: i,
            }),
              this.anclas.add(n));
          }
        }
      } catch (e) {
        for (let e of this.lotes) e.dispose();
        throw e;
      }
      for (let t of this.lotes) e.add(t);
      for (let { malla: e } of this.piezas)
        ((e.visible = !1), e.layers.disableAll());
    }
    actualizar(e) {
      this.padre.updateWorldMatrix(!0, !1);
      for (let e of this.anclas) e.updateMatrixWorld(!0);
      this.inversa.copy(this.padre.matrixWorld).invert();
      for (let e of this.lotes) e.layers.disable(1);
      for (let t of this.piezas)
        (t.lote.setMatrixAt(
          t.instancia,
          this.matriz.multiplyMatrices(this.inversa, t.malla.matrixWorld),
        ),
          t.lote.setVisibleAt(t.instancia, e(t.ancla)),
          t.malla.layers.isEnabled(1) && t.lote.layers.enable(1));
    }
    actualizarGeometria(e) {
      for (let t of this.piezas)
        t.malla === e && t.lote.setGeometryAt(t.geometria, e.geometry);
    }
    dispose() {
      for (let e of this.lotes) (e.removeFromParent(), e.dispose());
      ((this.lotes.length = 0), (this.piezas.length = 0), this.anclas.clear());
    }
  },
  nr = /^pantalla/i,
  rr = (e) => e.visible,
  ir = 5e3;
function ar(e) {
  return new Promise((t) => setTimeout(t, e));
}
function or(e) {
  let t = new Set(),
    n = new Set(),
    r = new Set(),
    i = new Set();
  for (let i of e)
    i.traverse((e) => {
      if (e instanceof T) {
        t.add(e.geometry);
        for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
          n.add(t);
          for (let e of Object.values(t))
            e instanceof c && !(e instanceof oe) && r.add(e);
        }
      }
    });
  (t.forEach((e) => e.dispose()),
    n.forEach((e) => e.dispose()),
    r.forEach((e) => {
      (e.image && i.add(e.image), e.dispose());
    }),
    i.forEach((e) => e.close?.()));
}
var sr = class t {
    group = new D();
    config;
    physics;
    resetOnVisibility = () => this.resetPhysics();
    movimientoReducido =
      typeof matchMedia == `function`
        ? matchMedia(`(prefers-reduced-motion: reduce)`)
        : null;
    tunnel;
    entries = [];
    nodosBase = new Map();
    reposos = new Map();
    baseGltf = null;
    carcasas = null;
    materialPantalla = null;
    emitePantalla = { value: Array.from({ length: 7 }, () => 1) };
    lote = null;
    videos = [];
    texturas = [];
    celdas = [];
    anchoMosaico = Jn.columnas * 256;
    altoMosaico = Jn.filas * 144;
    reintentarReproduccion = null;
    alCambiarVisibilidad = null;
    limpiezasCarga = [];
    avanceVideo = [];
    objetosBlob = [];
    abortos = [];
    listosVideos = Promise.resolve();
    active = !0;
    baseAdvance = 0;
    ignicion = null;
    holograma = null;
    sombras = null;
    apagadas = !1;
    gobernada = !1;
    aparicionSegundos = 0.7;
    disolucionNav = null;
    disposed = !1;
    tmpTarget = new b();
    tmpEuler = new r();
    tmpQuat = new P();
    constructor(e, t, n, r) {
      ((this.tunnel = t),
        (this.physics = new Ae(r, `teles`, F() ? ft : ve)),
        (this.config = n ?? Bn()),
        document.addEventListener(`visibilitychange`, this.resetOnVisibility),
        (this.group.name = `HoyoTunnelTvs`),
        e.add(this.group));
    }
    async load(e, t = null, n) {
      if (this.baseGltf) return;
      t && this.prepararVideos(t, n);
      let r = await Se(e);
      if (this.disposed) {
        or([r.scene]);
        return;
      }
      try {
        (U(r.scene),
          (this.carcasas = new kn(r.scene)),
          (this.materialPantalla = this.crearMaterialPantalla(r.scene)));
      } catch (e) {
        throw (or([r.scene]), e);
      }
      this.baseGltf = r;
      for (let e of r.scene.children)
        /^Tele_\d+$/.test(e.name) &&
          (this.nodosBase.set(e.name, e),
          this.reposos.set(e.name, {
            posicion: e.position.clone(),
            giro: e.quaternion.clone(),
          }));
      this.disposed || this.build();
    }
    get videosListos() {
      return this.listosVideos;
    }
    setBaseAdvance(e) {
      this.baseAdvance = e;
    }
    setActive(e) {
      this.active !== e &&
        ((this.active = e),
        this.resetPhysics(),
        e ? this.place() : this.apagarHolograma(),
        this.applyVisibility(),
        this.reproducir(e && this.config.visible));
    }
    setVisible(e) {
      ((this.config.visible = e),
        this.resetPhysics(),
        e || this.apagarHolograma(),
        this.applyVisibility(),
        this.reproducir(this.active && e),
        this.active && e && this.place());
    }
    reproducir(e) {
      for (let t of this.videos)
        t && weekndDecorativePlayback(t, e);
    }
    setIgnicion(e) {
      this.ignicion = e;
    }
    setDisolucionNav(e) {
      this.disolucionNav = e;
    }
    setHolograma(e) {
      for (let t of this.entries)
        (t.holograma && this.holograma?.soltar(t.holograma),
          (t.holograma = e?.pieza() ?? null),
          this.adoptarHolograma(t.anchor, t.holograma, t.indice));
      ((this.holograma = e), this.entries.length && this.montarLote());
    }
    setSombras(e) {
      for (let t of this.entries)
        (this.sombras?.quitar(t.sombra),
          (t.sombra = this.sombraDe(e, t.anchor, t.holograma)));
      this.sombras = e;
    }
    sombraDe(e, t, n) {
      return e?.anadirCaja(t, { holograma: n }) ?? null;
    }
    get montadas() {
      return this.entries.length;
    }
    ordenPorProfundidad() {
      return this.entries
        .map((e, t) => ({ indice: t, z: Math.abs(e.anchor.position.z) }))
        .sort((e, t) => t.z - e.z)
        .map((e) => e.indice);
    }
    setAparicion(e, t) {
      this.gobernada = !0;
      let n = this.entries[e];
      n && (n.aparicion = Math.max(0, t));
    }
    update(e) {
      if (!this.active || !this.config.visible) {
        this.resetPhysics();
        return;
      }
      let t = Math.min(Math.max(e, 0), 0.1);
      if (!this.gobernada) {
        let e = t / Math.max(0.01, this.aparicionSegundos);
        for (let t of this.entries) t.aparicion = Math.min(1, t.aparicion + e);
      }
      this.place(e);
    }
    resetPhysics() {
      this.physics.reset();
    }
    place(e = 0) {
      if (!(!this.active || !this.config.visible)) {
        for (let e of this.entries)
          if ((this.placeOne(e), e.body)) {
            let t = e.body;
            (Object.assign(t.anchor, e.anchor.position),
              (t.radius =
                (Math.sqrt(3) *
                  e.sitio.tamano *
                  I.resolver(this.config.tamanoGlobal)) /
                2),
              (t.tubeRadius = this.tunnel.radiusAtDepth(
                Math.max(
                  0,
                  -e.anchor.position.z +
                    t.radius +
                    this.physics.config.maxDisplacement,
                ),
              )),
              e.deriva.position.set(0, 0, 0),
              e.deriva.quaternion.identity());
          }
        ((this.physics.floatScale = +!this.movimientoReducido?.matches),
          this.physics.update(
            e,
            this.tunnel.currentAdvance,
            this.tunnel.loopLength,
          ));
        for (let e of this.entries) {
          let t = e.body;
          t &&
            ((e.anchor.position.x += t.offset.x),
            (e.anchor.position.y += t.offset.y),
            (e.anchor.position.z += t.offset.z),
            this.tmpEuler.set(t.rotation.x, t.rotation.y, t.rotation.z),
            e.anchor.quaternion.premultiply(
              this.tmpQuat.setFromEuler(this.tmpEuler),
            ),
            this.tunnel.anclar(e.anchor, t.radius),
            (e.anchor.visible = e.aparicion > 1e-4),
            this.disolucionNav === null
              ? this.gobernada && e.aparicion < 1
                ? e.holograma?.controlar(1 - e.aparicion)
                : e.holograma?.actualizar(e.anchor.position.z, t.radius)
              : e.holograma?.controlar(this.disolucionNav));
        }
        (this.lote?.actualizar(rr), this.encender());
      }
    }
    apagarHolograma() {
      for (let e of this.entries) e.holograma?.apagar();
    }
    encender() {
      let e = this.ignicion,
        t = !!e && e.activa,
        n = this.entries.some((e) => e.aparicion < 1);
      if (!(!t && !this.apagadas && !n)) {
        this.apagadas = t || n;
        for (let n of this.entries) {
          let r = n.aparicion,
            i = Math.abs(n.anchor.position.z),
            a = (t ? e.nivelEmisor(i) : 1) * r,
            o = (t ? e.apagado(i) * e.ambiente : 0) * r;
          ((this.emitePantalla.value[n.indice] = a),
            this.carcasas?.reposo(n.indice, o));
        }
      }
    }
    aplicarAspecto() {
      for (let e of this.entries) this.carcasas?.aplicar(e.indice, e.sitio);
    }
    apply() {
      (this.applyVisibility(), this.aplicarAspecto());
      for (let e of this.entries) {
        let t =
          (e.sitio.tamano * I.resolver(this.config.tamanoGlobal)) /
          Math.max(1e-4, e.tamanoBase);
        e.anchor.scale.setScalar(t);
        let n = this.texturaDe(e);
        (e.pantallas.forEach((e) => {
          (n
            ? ((e.map = n),
              (e.emissiveMap = n),
              e.emissive.setRGB(1, 1, 1),
              (e.emissiveIntensity = this.config.videoBrillo))
            : ((e.map = null),
              (e.emissiveMap = null),
              e.emissive.setRGB(0, 0, 0),
              (e.emissiveIntensity = 0)),
            (e.needsUpdate = !0));
        }),
          this.ajustarUvPantalla(e));
      }
      this.active && this.place();
    }
    applyVisibility() {
      this.group.visible = this.active && this.config.visible;
    }
    get pantallas() {
      let e = new Map();
      for (let t of this.entries) e.set(t.nombre, t.pantallas);
      return e;
    }
    get nombres() {
      return this.entries.map((e) => e.nombre);
    }
    dispose() {
      ((this.disposed = !0),
        document.removeEventListener(
          `visibilitychange`,
          this.resetOnVisibility,
        ),
        this.physics.clear(),
        (this.reintentarReproduccion &&=
          (document.removeEventListener(
            `pointerdown`,
            this.reintentarReproduccion,
          ),
          document.removeEventListener(`keydown`, this.reintentarReproduccion),
          null)),
        (this.alCambiarVisibilidad &&=
          (document.removeEventListener(
            `visibilitychange`,
            this.alCambiarVisibilidad,
          ),
          null)),
        this.limpiezasCarga.forEach((e) => e()),
        (this.limpiezasCarga.length = 0),
        this.abortos.forEach((e) => e.abort()),
        (this.abortos.length = 0),
        this.objetosBlob.forEach((e) => URL.revokeObjectURL(e)),
        (this.objetosBlob.length = 0),
        this.texturas.forEach((e) => e?.dispose()),
        (this.texturas.length = 0),
        this.videos.forEach((e) => {
          (weekndReleaseDecorativeVideo(e), e.pause(), e.removeAttribute(`src`), e.load());
        }),
        (this.videos.length = 0),
        this.limpiar(!0),
        this.materialPantalla?.dispose(),
        (this.materialPantalla = null),
        this.group.removeFromParent(),
        this.group.clear(),
        this.nodosBase.clear(),
        this.reposos.clear(),
        (this.baseGltf = null),
        (this.carcasas = null));
    }
    build() {
      this.limpiar(!1);
      let e = this.config.teles;
      ([...this.nodosBase.keys()]
        .sort((e, t) => e.localeCompare(t, `en`, { numeric: !0 }))
        .forEach((t, n) => {
          let r = e[n] ?? e[e.length - 1],
            i = this.nodosBase.get(t);
          if (!r || !i) return;
          let a = this.reposos.get(t);
          (i.position.copy(a.posicion),
            i.quaternion.copy(a.giro),
            this.entries.push(this.buildEntry(i, t, r, n)));
        }),
        this.apply(),
        this.montarLote());
    }
    montarLote() {
      (this.lote?.dispose(), (this.lote = null));
      let e = this.entries.flatMap((e) => [...e.cuerpos, ...e.pantallaMallas]);
      try {
        this.lote = new tr(this.group, [
          {
            nombre: `HoyoTelesCarcasas`,
            material: this.carcasas.material,
            mallas: this.entries.flatMap((e) =>
              e.cuerpos.map((t) => ({ malla: t, ancla: e.anchor })),
            ),
          },
          {
            nombre: `HoyoTelesPantallas`,
            material: this.materialPantalla,
            mallas: this.entries.flatMap((e) =>
              e.pantallaMallas.map((t) => ({ malla: t, ancla: e.anchor })),
            ),
          },
        ]);
      } catch (t) {
        console.warn(`[teles] sin lote, se dibujan sueltas:`, t);
        for (let t of e) ((t.visible = !0), t.layers.set(0));
      }
      this.active && this.place();
    }
    crearMaterialPantalla(e) {
      let t = null;
      if (
        (e.traverse((e) => {
          let n = e;
          if (t || !n.isMesh) return;
          let r = n.material;
          r.isMeshStandardMaterial && nr.test(r.name) && (t = r);
        }),
        !t)
      )
        throw Error(`Las teles no traen material de pantalla.`);
      let n = t.clone();
      n.name = `Pantalla_Teles`;
      let r = this.emitePantalla,
        i = n.customProgramCacheKey();
      return (
        (n.onBeforeCompile = (e) => {
          ((e.uniforms.uPantallaEmite = r),
            (e.vertexShader =
              `
        attribute float hoyoTeleIndice;
        uniform float uPantallaEmite[7];
        varying float vPantallaEmite;
      ` +
              e.vertexShader.replace(
                `#include <uv_vertex>`,
                `
        #include <uv_vertex>
        vPantallaEmite = uPantallaEmite[int(hoyoTeleIndice + 0.5)];
      `,
              )),
            (e.fragmentShader =
              `
        varying float vPantallaEmite;
      ` +
              e.fragmentShader.replace(
                `#include <emissivemap_fragment>`,
                `
        #include <emissivemap_fragment>
        totalEmissiveRadiance *= vPantallaEmite;
      `,
              )));
        }),
        (n.customProgramCacheKey = () => `${i}|hoyo-tv-pantalla-1`),
        n
      );
    }
    buildEntry(n, r, i, a) {
      let o = new D();
      o.name = `${r}_Sitio`;
      let s = new D();
      s.name = `${r}_Flotado`;
      let c = new D();
      c.name = `${r}_Canon`;
      let l = new D();
      ((l.name = `${r}_GiroBase`), l.quaternion.copy(n.quaternion).invert());
      let u = new D();
      ((u.name = `${r}_PosBase`),
        u.position.copy(n.position).negate(),
        o.add(s),
        s.add(c),
        c.add(l),
        l.add(u),
        u.add(n),
        o.updateMatrixWorld(!0));
      let d = new O().setFromObject(n),
        f = d.getCenter(new b()),
        p = Math.max(...d.getSize(new b()).toArray(), 1e-4),
        m = [],
        g = [],
        _ = this.materialPantalla ? [this.materialPantalla] : [];
      n.traverse((e) => {
        let t = e;
        if (!t.isMesh) return;
        let n = Array.isArray(t.material) ? t.material : [t.material];
        if (n.some((e) => nr.test(e.name) || e === this.materialPantalla)) {
          (m.push(t),
            this.materialPantalla &&
              t.material !== this.materialPantalla &&
              (n.forEach((e) => e.dispose()),
              (t.material = this.materialPantalla)),
            t.geometry.setAttribute(
              `hoyoTeleIndice`,
              new h(
                new Float32Array(
                  t.geometry.getAttribute(`position`).count,
                ).fill(a),
                1,
              ),
            ));
          return;
        }
        if (t.material !== this.carcasas?.material)
          throw Error(`Carcasa de tele con material inesperado.`);
        (this.carcasas.registrar(t, a), g.push(t));
      });
      let { forward: v, center: y } = t.screenFrame(m, f),
        x = Math.abs(v.y) > 0.9 ? new b(0, 0, 1) : new b(0, 1, 0),
        S = new b().crossVectors(x, v).normalize(),
        C = new b().crossVectors(v, S).normalize(),
        ee = t.proyectarPantalla(m, S, C),
        te = new e().makeBasis(S, C, v);
      (c.quaternion.setFromRotationMatrix(te).invert(),
        c.position.copy(f).applyQuaternion(c.quaternion).negate(),
        c.updateMatrixWorld(!0),
        this.group.add(o));
      let w = this.holograma?.pieza() ?? null;
      return (
        this.adoptarHolograma(n, w, a),
        {
          holograma: w,
          sombra: this.sombraDe(this.sombras, o, w),
          nombre: r,
          indice: a,
          body: this.physics.createBody(),
          sitio: i,
          anchor: o,
          deriva: s,
          pantallas: _,
          cuerpos: g,
          pantallaMallas: m,
          pantallaCentro: y.applyMatrix4(c.matrix),
          tamanoBase: p,
          aparicion: 0,
          uvPantalla: ee.mallas,
          aspecto: ee.aspecto,
        }
      );
    }
    adoptarHolograma(e, t, n) {
      t &&
        e.traverse((e) => {
          e instanceof T &&
            (e.material === this.carcasas?.material ||
            e.material === this.materialPantalla
              ? t.adoptarCompartido(e, n, 7)
              : t.adoptar(e));
        });
    }
    static proyectarPantalla(e, t, n) {
      let r = [],
        i = new b(),
        a = 1 / 0,
        o = -1 / 0,
        s = 1 / 0,
        c = -1 / 0;
      for (let l of e) {
        let e = l.geometry.getAttribute(`position`);
        if (!e) continue;
        let u = new Float32Array(e.count),
          d = new Float32Array(e.count);
        for (let r = 0; r < e.count; r += 1)
          (i.fromBufferAttribute(e, r).applyMatrix4(l.matrixWorld),
            (u[r] = i.dot(t)),
            (d[r] = i.dot(n)),
            (a = Math.min(a, u[r])),
            (o = Math.max(o, u[r])),
            (s = Math.min(s, d[r])),
            (c = Math.max(c, d[r])));
        r.push({ mesh: l, u, v: d });
      }
      let l = o - a,
        u = c - s;
      if (!r.length || l <= 1e-9 || u <= 1e-9)
        return { mallas: [], aspecto: 1 };
      for (let e of r) {
        let t = new Float32Array(e.u.length * 2);
        for (let n = 0; n < e.u.length; n += 1)
          ((t[n * 2] = (e.u[n] - a) / l), (t[n * 2 + 1] = (e.v[n] - s) / u));
        (e.mesh.geometry.setAttribute(`uv1`, new w(t, 2)),
          (e.u = e.u.map((e) => (e - a) / l)),
          (e.v = e.v.map((e) => (e - s) / u)));
      }
      return { mallas: r, aspecto: l / u };
    }
    ajustarUvPantalla(e) {
      if (!e.uvPantalla.length) return;
      let { columnas: t, filas: n } = Jn,
        r = this.anchoMosaico / t,
        i = this.altoMosaico / n,
        a = this.celdas.length ? r / Math.max(1, i) : 0,
        o = 1,
        s = 1;
      this.config.videoLlenar &&
        a > 0 &&
        e.aspecto > 0 &&
        (a > e.aspecto ? (o = e.aspecto / a) : (s = a / e.aspecto));
      let c = this.celdas.length
          ? this.celdas[e.sitio.videoIndice % this.celdas.length]
          : 0,
        l = c % t,
        u = Math.floor(c / t),
        d = 1 / Math.max(1, r),
        f = 1 / Math.max(1, i);
      for (let r of e.uvPantalla) {
        let e = r.mesh.geometry.getAttribute(`uv1`);
        if (!e) continue;
        let i = e.array;
        for (let e = 0; e < r.u.length; e += 1) {
          let a = d + ((r.u[e] - 0.5) * o + 0.5) * (1 - 2 * d),
            c = f + ((r.v[e] - 0.5) * s + 0.5) * (1 - 2 * f);
          ((i[e * 2] = (l + a) / t), (i[e * 2 + 1] = 1 - (u + 1 - c) / n));
        }
        ((e.needsUpdate = !0), this.lote?.actualizarGeometria(r.mesh));
      }
    }
    texturaDe(e) {
      return this.texturas[0] ?? null;
    }
    prepararVideos(e, t) {
      this.celdas = e.celdas;
      let n = [e.url],
        r = [],
        a = () => {
          !t ||
            this.disposed ||
            t(
              n.reduce((e, t, n) => e + (this.avanceVideo[n] ?? 0), 0) /
                n.length,
            );
        };
      (n.forEach((e, t) => {
        this.avanceVideo[t] = 0;
        let n = document.createElement(`video`);
        ((n.loop = !0),
          (n.muted = !0),
          (n.defaultMuted = !0),
          (n.autoplay = !weekndVideoMotion.matches),
          (n.playsInline = !0),
          n.setAttribute(`playsinline`, ``),
          n.setAttribute(`muted`, ``),
          (n.preload = `auto`));
        let o = new oe(n);
        ((o.colorSpace = i),
          (o.channel = 1),
          (o.generateMipmaps = !1),
          (o.minFilter = _),
          (o.magFilter = _),
          (o.wrapS = k),
          (o.wrapT = k),
          n.addEventListener(`loadedmetadata`, () => {
            n.videoWidth &&
              n.videoHeight &&
              ((this.anchoMosaico = n.videoWidth),
              (this.altoMosaico = n.videoHeight));
            for (let e of this.entries) this.ajustarUvPantalla(e);
          }),
          r.push(
            this.descargarVideo(e, t, a).then((e) => {
              if (!this.disposed)
                return (
                  (n.src = e),
                  weekndDecorativePlayback(n, this.active),
                  Promise.race([this.esperarReproducible(n), ar(ir)])
                );
            }),
          ),
          (this.videos[t] = n),
          (this.texturas[t] = o));
      }),
        (this.listosVideos = Promise.all(r).then(() => {})),
        a(),
        (this.reintentarReproduccion = () => {
          this.active && this.reproducir(!0);
        }),
        document.addEventListener(`pointerdown`, this.reintentarReproduccion),
        document.addEventListener(`keydown`, this.reintentarReproduccion),
        (this.alCambiarVisibilidad = () => {
          this.reproducir(
            document.visibilityState === `visible` && this.active,
          );
        }),
        document.addEventListener(
          `visibilitychange`,
          this.alCambiarVisibilidad,
        ));
    }
    async descargarVideo(e, t, n) {
      let r = new AbortController();
      this.abortos.push(r);
      try {
        let i = await ot(e, {
          prioridad: `video`,
          signal: r.signal,
          onProgress: (e) => {
            ((this.avanceVideo[t] = e), n());
          },
        });
        if (this.disposed) return e;
        let a = URL.createObjectURL(
          i.type ? i : new Blob([i], { type: `video/mp4` }),
        );
        return (this.objetosBlob.push(a), a);
      } catch {
        return e;
      } finally {
        ((this.avanceVideo[t] = 1), n());
      }
    }
    esperarReproducible(e) {
      return new Promise((t) => {
        let n = () => {
            (e.removeEventListener(`canplaythrough`, r),
              e.removeEventListener(`loadeddata`, r),
              e.removeEventListener(`error`, r));
          },
          r = () => {
            (n(), t());
          };
        if (
          (this.limpiezasCarga.push(n),
          e.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA)
        ) {
          r();
          return;
        }
        (e.addEventListener(`canplaythrough`, r),
          e.addEventListener(`loadeddata`, r),
          e.addEventListener(`error`, r));
      });
    }
    limpiar(e) {
      (this.physics.clear(), this.lote?.dispose(), (this.lote = null));
      for (let e of this.entries)
        (e.anchor.removeFromParent(),
          e.holograma && this.holograma?.soltar(e.holograma),
          this.sombras?.quitar(e.sombra));
      (e &&
        or([
          ...this.entries.map((e) => e.anchor),
          ...(this.baseGltf ? [this.baseGltf.scene] : []),
        ]),
        (this.entries.length = 0));
    }
    placeOne(e) {
      let { anchor: t, sitio: n } = e,
        r = this.tunnel.worldZFor(this.baseAdvance + n.avance),
        i =
          this.tunnel.radiusAtDepth(Math.max(0, -r)) *
          n.radio *
          I.resolver(this.config.radioGlobal),
        a = p.degToRad(n.angulo);
      (t.position.set(Math.cos(a) * i, Math.sin(a) * i, r),
        n.desplazaX && (t.position.x += I.resolver(n.desplazaX)),
        n.desplazaY && (t.position.y += I.resolver(n.desplazaY)));
      let o = p.clamp(n.mirada + I.resolver(this.config.miradaGlobal), 0, 1);
      (this.tmpTarget.set(0, 0, r * (1 - o)),
        t.lookAt(this.tmpTarget),
        (n.giroX || n.giroY || n.giroZ) &&
          (this.tmpEuler.set(
            p.degToRad(n.giroX),
            p.degToRad(n.giroY),
            p.degToRad(n.giroZ),
          ),
          t.quaternion.multiply(this.tmpQuat.setFromEuler(this.tmpEuler))));
    }
    static screenFrame(e, t) {
      let n = new b(0, 0, 1),
        r = t.clone();
      if (!e.length) return { forward: n, center: r };
      let i = [],
        a = [],
        o = new b(),
        s = new b(),
        c = 0,
        l = new b(),
        u = new b(),
        d = new b(),
        f = new b(),
        p = new b(),
        m = new b();
      for (let t of e) {
        let e = t.geometry,
          n = e.getAttribute(`position`);
        if (!n) continue;
        let r = e.getIndex(),
          h = r ? r.count : n.count;
        for (let e = 0; e < h; e += 3) {
          let h = r ? r.getX(e) : e,
            g = r ? r.getX(e + 1) : e + 1,
            _ = r ? r.getX(e + 2) : e + 2;
          (l.fromBufferAttribute(n, h).applyMatrix4(t.matrixWorld),
            u.fromBufferAttribute(n, g).applyMatrix4(t.matrixWorld),
            d.fromBufferAttribute(n, _).applyMatrix4(t.matrixWorld),
            f.subVectors(u, l),
            p.subVectors(d, l),
            m.crossVectors(f, p));
          let v = m.length() / 2;
          if (v < 1e-12) continue;
          (o.add(m), (c += v));
          let y = (l.x + u.x + d.x) / 3,
            x = (l.y + u.y + d.y) / 3,
            S = (l.z + u.z + d.z) / 3;
          (i.push(y, x, S), a.push(v), s.add(new b(y * v, x * v, S * v)));
        }
      }
      if (!c) return { forward: n, center: r };
      if ((r.copy(s).divideScalar(c), o.length() / 2 / c > 0.5))
        return (n.copy(o).normalize(), { forward: n, center: r });
      let h = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let e = 0; e < a.length; e += 1) {
        let t = a[e],
          n = i[e * 3] - r.x,
          o = i[e * 3 + 1] - r.y,
          s = i[e * 3 + 2] - r.z;
        ((h[0] += t * n * n),
          (h[1] += t * n * o),
          (h[2] += t * n * s),
          (h[4] += t * o * o),
          (h[5] += t * o * s),
          (h[8] += t * s * s));
      }
      return (
        (h[3] = h[1]),
        (h[6] = h[2]),
        (h[7] = h[5]),
        n.copy(Pn(h, new b(0.5773, 0.5773, 0.5773))),
        n.dot(r.clone().sub(t)) < 0 && n.negate(),
        { forward: n, center: r }
      );
    }
  },
  cr = class {
    contenedor;
    constructor(e) {
      this.contenedor = e;
    }
    setEventos(e) {
      let t = e
        .filter((e) => e.url)
        .map((e) => {
          let t = document.createElement(`a`);
          return (
            (t.className = `evento-enlace`),
            (t.href = e.url),
            (t.target = `_blank`),
            (t.rel = `noopener noreferrer`),
            (t.textContent = `${e.nombre} · ${e.fechaLarga} · Listen to the album`),
            t
          );
        });
      this.contenedor.replaceChildren(...t);
    }
    destroy() {
      this.contenedor.replaceChildren();
    }
  },
  lr = `/the-weeknd-experience/assets/branding/dj-logo.webp`,
  ur = {
    activo: !0,
    color: `#ff5263`,
    fuerza: 1.15,
    grosor: 0.007,
    halo: 0,
    haloCaida: 4,
    trapecios: !0,
    margenLateral: 0,
    margenVertical: 0.22,
    separacion: 0.35,
    inclinacion: 0.37,
    lineaSuperior: !1,
    lineaMargen: 0.1,
    lineaLargo: 0.92,
    costados: !0,
    logo: !0,
    logoAlto: 0.29,
    logoCentroY: 0.005,
    logoTinta: `#f6baee`,
    logoFuerza: 0.45,
    logoHalo: 0,
    luz: !0,
    luzPotencia: 4,
    luzCaida: 12,
  },
  dr = { rect: [0.0625, 0.0938, 0.9375, 0.9102], aspecto: 448 / 209 },
  fr = `|hoyo-mesa-neon-1`,
  pr = `
varying vec3 vMesaLocal;
varying vec3 vMesaNormalObj;
`,
  mr = `
vMesaLocal = transformed;
vMesaNormalObj = normal;
`,
  hr = `
varying vec3 vMesaLocal;
varying vec3 vMesaNormalObj;
uniform vec3 uMesaCentro;
uniform vec3 uMesaMitad;
uniform vec3 uMesaColor;
uniform vec3 uMesaLogoTinta;
uniform vec4 uMesaTrazo;
uniform vec4 uMesaTrapecio;
uniform vec4 uMesaLinea;
uniform vec4 uMesaLogo;
uniform vec2 uMesaLogoLuz;
uniform vec2 uMesaLuz;
uniform vec4 uMesaLogoRect;
uniform float uMesaLogoAspecto;
uniform sampler2D uMesaLogoMapa;
uniform float uMesaNivel;
uniform float uMesaPaseBloom;

/** Distancia al eje de un segmento. */
float mesaSegmento(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  return length(pa - ba * h);
}

/** Medio plano exterior de la arista a-b de un polígono en sentido antihorario. */
float mesaArista(vec2 p, vec2 a, vec2 b) {
  vec2 e = b - a;
  return dot(p - a, normalize(vec2(e.y, -e.x)));
}

/**
 * Distancia con signo a un cuadrilátero convexo, por medios planos: exacta dentro y con las
 * esquinas en inglete fuera. Para un tubo de neón, que es lo que hay aquí, el inglete es
 * justamente lo que se quiere en las esquinas.
 */
float mesaQuad(vec2 p, vec2 a, vec2 b, vec2 c, vec2 d) {
  return max(max(mesaArista(p, a, b), mesaArista(p, b, c)), max(mesaArista(p, c, d), mesaArista(p, d, a)));
}

/** Un trazo encendido a partir de su distancia sin signo: núcleo con antialias y aureola. */
vec3 mesaTrazo(float d, vec3 color, float fuerza) {
  float medio = max(uMesaTrazo.y, 1e-4) * 0.5;
  float aa = fwidth(d) + 1e-5;
  float nucleo = 1.0 - smoothstep(medio - aa, medio + aa, d);
  float halo = exp(-max(d - medio, 0.0) * max(uMesaTrazo.w, 0.1));
  return color * nucleo * fuerza + uMesaColor * halo * uMesaTrazo.z;
}
`,
  gr = `
vec3 hoyoMesaNeon = vec3(0.0);
vec3 hoyoMesaRebote = vec3(0.0);
{
  float mesaCerca = 1e9;
  vec3 mesaN = normalize(vMesaNormalObj);
  vec3 mesaRel = vMesaLocal - uMesaCentro;
  // Cara y coordenadas dentro de ella: x transversal, y vertical, en unidades locales.
  vec2 mesaP = vec2(0.0);
  vec2 mesaMitad = vec2(0.0);
  float mesaCara = 0.0;
  if (mesaN.z > 0.5) {
    mesaP = mesaRel.xy;
    mesaMitad = vec2(uMesaMitad.x, uMesaMitad.y);
    mesaCara = 1.0;
  } else if (abs(mesaN.x) > 0.5 && uMesaLogo.w > 0.5) {
    mesaP = vec2(mesaRel.z, mesaRel.y);
    mesaMitad = vec2(uMesaMitad.z, uMesaMitad.y);
    mesaCara = 2.0;
  }
  if (mesaCara > 0.0 && uMesaNivel > 0.0) {
    // Espejado: los dos trapecios de una cara son el mismo, resuelto una vez.
    vec2 mesaQ = vec2(abs(mesaP.x), mesaP.y);
    float mesaAbajo = -mesaMitad.y + uMesaTrapecio.y * mesaMitad.y;
    float mesaArriba = mesaMitad.y - uMesaTrapecio.y * mesaMitad.y;
    if (uMesaLinea.x > 0.5) {
      float mesaY = mesaMitad.y - uMesaLinea.y * mesaMitad.y;
      float mesaLargo = mesaMitad.x * uMesaLinea.z;
      float mesaD = mesaSegmento(mesaP, vec2(-mesaLargo, mesaY), vec2(mesaLargo, mesaY));
      mesaCerca = min(mesaCerca, mesaD);
      hoyoMesaNeon += mesaTrazo(mesaD, uMesaColor, uMesaTrazo.x);
    }
    if (uMesaLinea.w > 0.5) {
      float mesaFuera = mesaMitad.x - uMesaTrapecio.x * mesaMitad.x;
      float mesaDentro = uMesaTrapecio.z * mesaMitad.x;
      float mesaTumbe = uMesaTrapecio.w * mesaMitad.x;
      // Antihorario visto desde fuera: dentro-abajo, fuera-abajo, fuera-arriba, dentro-arriba.
      float mesaSd = mesaQuad(
        mesaQ,
        vec2(mesaDentro, mesaAbajo),
        vec2(mesaFuera, mesaAbajo),
        vec2(mesaFuera, mesaArriba),
        vec2(mesaDentro + mesaTumbe, mesaArriba)
      );
      mesaCerca = min(mesaCerca, abs(mesaSd));
      hoyoMesaNeon += mesaTrazo(abs(mesaSd), uMesaColor, uMesaTrazo.x);
    }
    if (mesaCara < 1.5 && uMesaLogo.x > 0.5) {
      float mesaSemialto = uMesaLogo.y * mesaMitad.y;
      float mesaSemiancho = mesaSemialto * uMesaLogoAspecto;
      vec2 mesaDelLogo = vec2(mesaP.x, mesaP.y - uMesaLogo.z * mesaMitad.y);
      // Origen ARRIBA, como el rectángulo que escribe el script de la textura.
      vec2 mesaUv = vec2(0.5 + mesaDelLogo.x / (2.0 * max(mesaSemiancho, 1e-4)), 0.5 - mesaDelLogo.y / (2.0 * max(mesaSemialto, 1e-4)));
      vec2 mesaUvTex = mix(uMesaLogoRect.xy, uMesaLogoRect.zw, mesaUv);
      // El margen transparente de la textura hace el recorte: fuera del logo el alfa ya es cero,
      // tambien con el muestreo desenfocado y con el borde repetido del modo clamp.
      float mesaMascara = texture2D(uMesaLogoMapa, mesaUvTex).a;
      float mesaDifuso = texture2D(uMesaLogoMapa, mesaUvTex, 4.0).a;
      hoyoMesaNeon += uMesaLogoTinta * mesaMascara * uMesaLogoLuz.x + uMesaColor * mesaDifuso * uMesaLogoLuz.y;
    }
    hoyoMesaNeon *= uMesaNivel;
    // El rebote del tubo sobre la propia cara, por el albedo: es luz de superficie, no emisión.
    if (uMesaLuz.x > 0.0 && mesaCerca < 1e8) hoyoMesaRebote = uMesaColor * (uMesaLuz.x * exp(-mesaCerca * uMesaLuz.y)) * uMesaNivel;
  } else if (mesaN.y > 0.5 && uMesaLuz.x > 0.0) {
    // La tapa no lleva trazo: su luz viene del tubo del filo de delante, así que cae hacia el fondo.
    float mesaDelFilo = max(0.0, (uMesaCentro.z + uMesaMitad.z) - vMesaLocal.z);
    hoyoMesaRebote = uMesaColor * (uMesaLuz.x * exp(-mesaDelFilo * uMesaLuz.y)) * uMesaNivel;
  }
}
totalEmissiveRadiance += hoyoMesaNeon + hoyoMesaRebote * diffuseColor.rgb;
`,
  _r = `
if (uMesaPaseBloom > 0.5) outgoingLight = hoyoMesaNeon;
`,
  vr = class {
    mesa;
    config;
    uniforms;
    lista;
    material;
    textura = null;
    disposed = !1;
    enBloom = !1;
    colorAplicado = ``;
    tintaAplicada = ``;
    constructor(e, t) {
      ((this.mesa = e), (this.config = t));
      let n = Array.isArray(e.material) ? e.material[0] : e.material;
      if (!n.isMeshStandardMaterial)
        throw Error(`El neón de la mesa necesita un MeshStandardMaterial.`);
      this.material = n;
      let r =
          e.geometry.boundingBox ??
          (e.geometry.computeBoundingBox(), e.geometry.boundingBox),
        i = r ? r.getCenter(new b()) : new b(),
        a = r ? r.getSize(new b()).multiplyScalar(0.5) : new b(1, 1, 1);
      ((this.uniforms = {
        uMesaCentro: { value: i },
        uMesaMitad: { value: a },
        uMesaColor: { value: new E(16777215) },
        uMesaLogoTinta: { value: new E(16777215) },
        uMesaTrazo: { value: new s() },
        uMesaTrapecio: { value: new s() },
        uMesaLinea: { value: new s() },
        uMesaLogo: { value: new s() },
        uMesaLogoLuz: { value: new v() },
        uMesaLuz: { value: new v() },
        uMesaLogoRect: { value: new s(...dr.rect) },
        uMesaLogoAspecto: { value: dr.aspecto },
        uMesaLogoMapa: { value: null },
        uMesaNivel: { value: 1 },
        uMesaPaseBloom: lt,
      }),
        this.instalar(),
        this.aplicar(),
        (this.lista = this.cargarLogo()));
    }
    instalar() {
      let e = this.material,
        t = e.onBeforeCompile,
        n = e.customProgramCacheKey(),
        r = this.uniforms;
      ((e.onBeforeCompile = (n, i) => {
        (t.call(e, n, i),
          Object.assign(n.uniforms, r),
          (n.vertexShader =
            pr +
            n.vertexShader.replace(
              `#include <begin_vertex>`,
              `#include <begin_vertex>\n${mr}`,
            )),
          (n.fragmentShader =
            hr +
            n.fragmentShader
              .replace(
                `#include <emissivemap_fragment>`,
                `#include <emissivemap_fragment>\n${gr}`,
              )
              .replace(
                `#include <opaque_fragment>`,
                `${_r}\n#include <opaque_fragment>`,
              )));
      }),
        (e.customProgramCacheKey = () => n + fr),
        (e.needsUpdate = !0));
    }
    cargarLogo() {
      return Re(lr)
        .then((e) => {
          if (this.disposed) {
            e.dispose();
            return;
          }
          ((e.flipY = !1),
            (e.colorSpace = ``),
            (e.wrapS = k),
            (e.wrapT = k),
            (e.generateMipmaps = !0),
            (e.minFilter = y),
            (e.magFilter = _),
            (e.anisotropy = 4),
            (this.textura = e),
            (this.uniforms.uMesaLogoMapa.value = e));
        })
        .catch(() => {
          this.disposed ||
            console.warn(
              `[DJ] no se pudo cargar la máscara del logo de la mesa`,
            );
        });
    }
    aplicar() {
      let e = this.config,
        t = this.uniforms;
      (e.color !== this.colorAplicado &&
        (t.uMesaColor.value.set(e.color), (this.colorAplicado = e.color)),
        e.logoTinta !== this.tintaAplicada &&
          (t.uMesaLogoTinta.value.set(e.logoTinta),
          (this.tintaAplicada = e.logoTinta)),
        t.uMesaTrazo.value.set(e.fuerza, e.grosor, e.halo, e.haloCaida),
        t.uMesaTrapecio.value.set(
          e.margenLateral,
          e.margenVertical,
          e.separacion,
          e.inclinacion,
        ),
        t.uMesaLinea.value.set(
          +!!e.lineaSuperior,
          e.lineaMargen,
          e.lineaLargo,
          +!!e.trapecios,
        ),
        t.uMesaLogo.value.set(
          e.logo && this.textura ? 1 : 0,
          e.logoAlto,
          e.logoCentroY,
          +!!e.costados,
        ),
        t.uMesaLogoLuz.value.set(e.logoFuerza, e.logoHalo),
        t.uMesaLuz.value.set(e.luz ? e.luzPotencia : 0, e.luzCaida));
    }
    actualizar(e, t) {
      if (this.disposed) return !1;
      this.aplicar();
      let n = t && this.config.activo && e > 0.001;
      return (
        (this.uniforms.uMesaNivel.value = this.config.activo ? e : 0),
        this.config.activo !== this.enBloom &&
          ((this.enBloom = this.config.activo),
          this.enBloom
            ? H(this.mesa)
            : (this.mesa.layers.disable(1), this.mesa.layers.disable(2))),
        n
      );
    }
    dispose() {
      this.disposed ||
        ((this.disposed = !0),
        (this.uniforms.uMesaLogoMapa.value = null),
        this.textura?.dispose(),
        (this.textura = null));
    }
  },
  yr = { activo: !0, color: `#f0deb8`, fuerza: 1.6 },
  br = `|hoyo-cascos-filo-uv-2`,
  xr = `
varying float vCascoFilo;
uniform vec4 uFiloUV;
`,
  Sr = `
vCascoFilo = step(uFiloUV.x, uv.x) * step(uv.x, uFiloUV.z)
  * step(uFiloUV.y, uv.y) * step(uv.y, uFiloUV.w);
`,
  Cr = `
varying float vCascoFilo;
uniform vec3 uFiloColor;
uniform float uFiloFuerza;
uniform float uFiloNivel;
uniform float uFiloPaseBloom;
`,
  wr = `
vec3 hoyoCascoFilo = vec3(0.0);
if (uFiloFuerza > 0.0 && uFiloNivel > 0.0) {
  hoyoCascoFilo = uFiloColor * (uFiloFuerza * vCascoFilo * uFiloNivel);
}
totalEmissiveRadiance += hoyoCascoFilo;
`,
  Tr = `
if (uFiloPaseBloom > 0.5) outgoingLight = hoyoCascoFilo;
`;
function Er(e) {
  let t = e.userData.filo,
    n = t?.rect;
  return t?.tipo !== `uv` ||
    !Array.isArray(n) ||
    n.length !== 4 ||
    !n.every((e) => Number.isFinite(e) && e >= 0 && e <= 1) ||
    n[0] >= n[2] ||
    n[1] >= n[3]
    ? null
    : { tipo: `uv`, rect: [n[0], n[1], n[2], n[3]] };
}
var Dr = class {
    cascos;
    config;
    uniforms;
    material;
    disposed = !1;
    enBloom = !1;
    colorAplicado = ``;
    constructor(e, t, n) {
      ((this.cascos = e), (this.config = n));
      let r = Array.isArray(e.material) ? e.material[0] : e.material;
      if (!r.isMeshStandardMaterial)
        throw Error(`El filo de los cascos necesita un MeshStandardMaterial.`);
      ((this.material = r),
        (this.uniforms = {
          uFiloUV: { value: new s(...t.rect) },
          uFiloColor: { value: new E(16777215) },
          uFiloFuerza: { value: 0 },
          uFiloNivel: { value: 1 },
          uFiloPaseBloom: lt,
        }),
        this.instalar(),
        this.aplicar());
    }
    instalar() {
      let e = this.material,
        t = e.onBeforeCompile,
        n = e.customProgramCacheKey(),
        r = this.uniforms;
      ((e.onBeforeCompile = (n, i) => {
        (t.call(e, n, i),
          Object.assign(n.uniforms, r),
          (n.vertexShader =
            xr +
            n.vertexShader.replace(
              `#include <begin_vertex>`,
              `#include <begin_vertex>\n${Sr}`,
            )),
          (n.fragmentShader =
            Cr +
            n.fragmentShader
              .replace(
                `#include <emissivemap_fragment>`,
                `#include <emissivemap_fragment>\n${wr}`,
              )
              .replace(
                `#include <opaque_fragment>`,
                `${Tr}\n#include <opaque_fragment>`,
              )));
      }),
        (e.customProgramCacheKey = () => n + br),
        (e.needsUpdate = !0));
    }
    aplicar() {
      let e = this.config,
        t = this.uniforms;
      (e.color !== this.colorAplicado &&
        (t.uFiloColor.value.set(e.color), (this.colorAplicado = e.color)),
        (t.uFiloFuerza.value = e.activo ? e.fuerza : 0));
    }
    actualizar(e, t) {
      if (this.disposed) return !1;
      (this.aplicar(), (this.uniforms.uFiloNivel.value = e));
      let n = t && this.config.activo && this.config.fuerza > 0 && e > 0.001,
        r = this.config.activo && this.config.fuerza > 0;
      return (
        r !== this.enBloom &&
          ((this.enBloom = r),
          r
            ? H(this.cascos)
            : (this.cascos.layers.disable(1), this.cascos.layers.disable(2))),
        n
      );
    }
    dispose() {
      this.disposed = !0;
    }
  },
  Or = 8,
  kr = 32,
  Ar = class {
    config;
    mesh;
    material;
    geometria = null;
    firma = ``;
    tiempo = 0;
    uniforms = {
      uTiempo: { value: 0 },
      uGiro: { value: 0 },
      uRecorrido: { value: 0 },
      uRecorridoAncho: { value: 0.3 },
      uRecorridoFuerza: { value: 1 },
    };
    constructor(e) {
      ((this.config = e),
        (this.material = new N({
          name: `HoyoDjInstalacion`,
          color: `#050505`,
          roughness: 0.4,
          metalness: 0.2,
          emissive: new E(e.color),
        })),
        (this.material.onBeforeCompile = (e) => {
          (Object.assign(e.uniforms, this.uniforms),
            (e.vertexShader =
              Mr +
              e.vertexShader
                .replace(
                  `#include <beginnormal_vertex>`,
                  `#include <beginnormal_vertex>\n${Nr}`,
                )
                .replace(
                  `#include <begin_vertex>`,
                  `#include <begin_vertex>\n${Pr}`,
                )),
            (e.fragmentShader =
              Fr +
              e.fragmentShader.replace(
                `#include <emissivemap_fragment>`,
                `#include <emissivemap_fragment>\n${Ir}`,
              )));
        }),
        (this.material.customProgramCacheKey = () => `hoyo-dj-instalacion-1`),
        (this.mesh = new T(void 0, this.material)),
        (this.mesh.name = `HoyoDjInstalacion`),
        (this.mesh.frustumCulled = !1),
        H(this.mesh, !1),
        this.reconstruir());
    }
    firmaDeAhora() {
      let e = this.config;
      return [
        e.radio,
        e.grosor,
        e.arosSegundo,
        e.arosSeparacion,
        e.arosInclinacion,
        e.giroAlterno,
      ].join(`|`);
    }
    reconstruir() {
      let e = this.config,
        t = Math.max(0.005, e.grosor),
        n = this.construirAros(t),
        r = jr(n);
      for (let e of n) e.dispose();
      (this.geometria?.dispose(),
        (this.geometria = r),
        (this.mesh.geometry = r),
        (this.firma = this.firmaDeAhora()));
    }
    construirAros(e) {
      let t = this.config,
        n = Math.max(0.05, t.radio),
        r = Math.min(n * 0.9, e),
        i = p.degToRad(t.arosInclinacion),
        a = Math.max(0, t.arosSeparacion);
      return [1, -1].map((e, o) => {
        let s = o === 0 ? n : n * Math.max(0.1, t.arosSegundo),
          c = new fe(s, Math.min(s * 0.9, r), Or, kr)
            .rotateX(Math.PI / 2)
            .rotateZ(e * i)
            .translate(0, (e * a) / 2, 0);
        return this.marcarParte(c, (e) => (o + e) / 2, t.giroAlterno ? e : 1);
      });
    }
    marcarParte(e, t, n) {
      let r = e.getAttribute(`uv`),
        i = r.count,
        a = new Float32Array(i),
        o = new Float32Array(i);
      for (let e = 0; e < i; e++) ((a[e] = t(r.getX(e))), (o[e] = n));
      return (
        e.setAttribute(`aParte`, new w(a, 1)),
        e.setAttribute(`aGiro`, new w(o, 1)),
        e
      );
    }
    actualizar(e, t, n, r = 0) {
      let i = this.config;
      (this.firma !== this.firmaDeAhora() && this.reconstruir(),
        this.mesh.position.set(0, e + Math.max(0, i.altura), 0));
      let a = n && i.activo;
      return (
        (this.mesh.visible = a),
        a
          ? ((this.tiempo += Math.min(Math.max(0, r), 0.1)),
            this.material.emissive.set(i.color),
            (this.material.emissiveIntensity = Math.max(0, i.fuerza) * t),
            (this.uniforms.uTiempo.value = this.tiempo),
            (this.uniforms.uGiro.value = (i.giro * Math.PI * 2) / 60),
            (this.uniforms.uRecorrido.value = i.recorrido),
            (this.uniforms.uRecorridoAncho.value = p.clamp(
              i.recorridoAncho,
              0.01,
              1,
            )),
            (this.uniforms.uRecorridoFuerza.value = Math.max(
              0,
              i.recorridoFuerza,
            )),
            !0)
          : !1
      );
    }
    aporte(e) {
      let t = this.config;
      return !this.mesh.visible || !t.luz
        ? !1
        : (e
            .set(t.color)
            .multiplyScalar(
              Math.max(0, t.luzPotencia) * this.material.emissiveIntensity,
            ),
          !0);
    }
    dispose() {
      (this.geometria?.dispose(),
        this.material.dispose(),
        this.mesh.removeFromParent());
    }
  };
function jr(e) {
  let t = new ne(),
    n = 0,
    r = 0;
  for (let t of e)
    ((n += t.getAttribute(`position`).count), (r += t.getIndex()?.count ?? 0));
  for (let r of [`position`, `normal`, `uv`, `aParte`, `aGiro`]) {
    let i = e[0].getAttribute(r).itemSize,
      a = new Float32Array(n * i),
      o = 0;
    for (let t of e) {
      let e = t.getAttribute(r);
      (a.set(e.array, o), (o += e.count * i));
    }
    t.setAttribute(r, new w(a, i));
  }
  let i = n > 65535 ? new Uint32Array(r) : new Uint16Array(r),
    a = 0,
    o = 0;
  for (let t of e) {
    let e = t.getIndex();
    if (e) {
      for (let t = 0; t < e.count; t++) i[a + t] = e.getX(t) + o;
      a += e.count;
    }
    o += t.getAttribute(`position`).count;
  }
  return (t.setIndex(new w(i, 1)), t);
}
var Mr = `
attribute float aParte;
attribute float aGiro;
uniform float uTiempo;
uniform float uGiro;
varying float vParte;
`,
  Nr = `
  float hoyoAngulo = uGiro * aGiro * uTiempo;
  float hoyoCos = cos(hoyoAngulo);
  float hoyoSen = sin(hoyoAngulo);
  mat2 hoyoGiro = mat2(hoyoCos, -hoyoSen, hoyoSen, hoyoCos);
  if (uGiro != 0.0) objectNormal.xz = hoyoGiro * objectNormal.xz;
`,
  Pr = `
  if (uGiro != 0.0) transformed.xz = hoyoGiro * transformed.xz;
  vParte = aParte;
`,
  Fr = `
uniform float uTiempo;
uniform float uRecorrido;
uniform float uRecorridoAncho;
uniform float uRecorridoFuerza;
varying float vParte;
`,
  Ir = `
  if (uRecorrido != 0.0) {
    float hoyoFase = fract(vParte - uTiempo * uRecorrido);
    float hoyoPulso = smoothstep(1.0 - uRecorridoAncho, 1.0, hoyoFase);
    totalEmissiveRadiance *= 1.0 + uRecorridoFuerza * hoyoPulso;
  }
`,
  Lr = `|hoyo-tela-dj-1`,
  Rr = `|hoyo-piel-contacto-dj-1`,
  zr = `
varying vec3 vTelaReposo;
varying vec3 vTelaNormalReposo;
`,
  Br = `
vTelaReposo = position;
vTelaNormalReposo = normal;
`,
  Vr = `
varying vec3 vTelaReposo;
varying vec3 vTelaNormalReposo;
uniform float uTelaBrillo;
uniform vec3 uTelaBrilloColor;
uniform float uTelaBrilloCaida;
uniform float uTelaTejido;
uniform float uTelaCelda;
uniform float uTelaPoro;
uniform float uTelaOscuro;
uniform float uTelaInterior;
uniform float uTelaContacto;

// Poros en tresbolillo: 1 dentro del poro, 0 en la trama. q en celdas.
float hoyoTelaPoro(vec2 q) {
  vec2 r = vec2(1.0, 1.7320508);
  vec2 h = r * 0.5;
  vec2 a = mod(q, r) - h;
  vec2 b = mod(q - h, r) - h;
  vec2 g = dot(a, a) < dot(b, b) ? a : b;
  return 1.0 - smoothstep(uTelaPoro - 0.1, uTelaPoro + 0.1, length(g));
}

// Las tres proyecciones del reposo, pesadas por su normal; w: cuanto se ve (0 si el poro es subpixel).
float hoyoTelaPatron(out float w) {
  vec3 p = vTelaReposo / uTelaCelda;
  vec3 n = pow(abs(normalize(vTelaNormalReposo)), vec3(4.0));
  n /= (n.x + n.y + n.z);
  float v = n.x * hoyoTelaPoro(p.yz) + n.y * hoyoTelaPoro(p.xz) + n.z * hoyoTelaPoro(p.xy);
  float celdasPorPixel = length(fwidth(p));
  w = 1.0 - smoothstep(0.25, 0.6, celdasPorPixel);
  return v;
}
`,
  Hr = `
#if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR )
  diffuseColor.rgb *= mix(vec3(1.0), vColor.rgb, uTelaContacto);
#endif
float hoyoTelaVisible;
float hoyoTelaHueco = hoyoTelaPatron(hoyoTelaVisible);
diffuseColor.rgb *= 1.0 - uTelaOscuro * hoyoTelaHueco * hoyoTelaVisible;
if (!gl_FrontFacing) diffuseColor.rgb *= uTelaInterior;
`,
  Ur = `
if (uTelaTejido > 0.0 && hoyoTelaVisible > 0.0) {
  float hoyoTelaAlto = -hoyoTelaHueco * uTelaTejido * hoyoTelaVisible * 0.02;
  vec3 hoyoDpx = dFdx(-vViewPosition);
  vec3 hoyoDpy = dFdy(-vViewPosition);
  vec3 hoyoR1 = cross(hoyoDpy, normal);
  vec3 hoyoR2 = cross(normal, hoyoDpx);
  float hoyoDet = dot(hoyoDpx, hoyoR1);
  vec3 hoyoGrad = sign(hoyoDet) * (dFdx(hoyoTelaAlto) * hoyoR1 + dFdy(hoyoTelaAlto) * hoyoR2);
  normal = normalize(abs(hoyoDet) * normal - hoyoGrad);
}
`,
  Wr = `
if (uTelaBrillo > 0.0) {
  float hoyoNv = saturate(dot(normal, geometryViewDir));
  float hoyoRasante = pow(1.0 - hoyoNv, uTelaBrilloCaida);
  vec3 hoyoLuz = (reflectedLight.directDiffuse + reflectedLight.indirectDiffuse) / max(diffuseColor.rgb, vec3(0.04));
  outgoingLight += uTelaBrilloColor * (uTelaBrillo * hoyoRasante) * hoyoLuz;
}
`,
  Gr = `
uniform float uPielContacto;
`,
  Kr = `
#if defined( USE_COLOR_ALPHA ) || defined( USE_COLOR )
  diffuseColor.rgb *= mix(vec3(1.0), vColor.rgb, uPielContacto);
#endif
`;
function qr(e) {
  let t = Array.isArray(e.material) ? e.material[0] : e.material;
  if (!t.isMeshStandardMaterial)
    throw Error(
      `La tela del DJ necesita un MeshStandardMaterial en ${e.name}.`,
    );
  return t;
}
var Jr = class {
    config;
    uniforms;
    colorAplicado = ``;
    constructor(e, t, n) {
      ((this.config = n),
        (this.uniforms = {
          uTelaBrillo: { value: 0 },
          uTelaBrilloColor: { value: new E(16777215) },
          uTelaBrilloCaida: { value: 3 },
          uTelaTejido: { value: 0 },
          uTelaCelda: { value: 0.006 },
          uTelaPoro: { value: 0.28 },
          uTelaOscuro: { value: 0 },
          uTelaInterior: { value: 1 },
          uTelaContacto: { value: 0 },
          uPielContacto: { value: 0 },
        }),
        this.instalarTela(qr(e)),
        t && this.instalarPiel(qr(t)),
        this.aplicar());
    }
    instalarTela(e) {
      let t = e.onBeforeCompile,
        n = e.customProgramCacheKey(),
        r = this.uniforms;
      ((e.onBeforeCompile = (n, i) => {
        (t.call(e, n, i),
          Object.assign(n.uniforms, r),
          (n.vertexShader =
            zr +
            n.vertexShader.replace(
              `#include <begin_vertex>`,
              `#include <begin_vertex>\n${Br}`,
            )),
          (n.fragmentShader =
            Vr +
            n.fragmentShader
              .replace(`#include <color_fragment>`, Hr)
              .replace(
                `#include <normal_fragment_maps>`,
                `#include <normal_fragment_maps>\n${Ur}`,
              )
              .replace(
                `#include <opaque_fragment>`,
                `${Wr}\n#include <opaque_fragment>`,
              )));
      }),
        (e.customProgramCacheKey = () => n + Lr),
        (e.needsUpdate = !0));
    }
    instalarPiel(e) {
      let t = e.onBeforeCompile,
        n = e.customProgramCacheKey(),
        r = this.uniforms;
      ((e.onBeforeCompile = (n, i) => {
        (t.call(e, n, i),
          (n.uniforms.uPielContacto = r.uPielContacto),
          (n.fragmentShader =
            Gr + n.fragmentShader.replace(`#include <color_fragment>`, Kr)));
      }),
        (e.customProgramCacheKey = () => n + Rr),
        (e.needsUpdate = !0));
    }
    aplicar() {
      let e = this.config,
        t = this.uniforms,
        n = +!!e.activo;
      (e.brilloColor !== this.colorAplicado &&
        (t.uTelaBrilloColor.value.set(e.brilloColor),
        (this.colorAplicado = e.brilloColor)),
        (t.uTelaBrillo.value = e.brillo * n),
        (t.uTelaBrilloCaida.value = e.brilloCaida),
        (t.uTelaTejido.value = e.tejido * n),
        (t.uTelaCelda.value = Math.max(1e-4, e.tejidoCelda)),
        (t.uTelaPoro.value = e.tejidoPoro),
        (t.uTelaOscuro.value = e.tejidoOscuro * n),
        (t.uTelaInterior.value = e.activo ? e.interior : 1),
        (t.uTelaContacto.value = e.contactoTela * n),
        (t.uPielContacto.value = e.contactoPiel * n));
    }
    dispose() {}
  },
  Yr = {
    activo: !0,
    brillo: 0.35,
    brilloColor: `#ffe3e8`,
    brilloCaida: 3,
    tejido: 0.5,
    tejidoCelda: 0.006,
    tejidoPoro: 0.28,
    tejidoOscuro: 0.12,
    interior: 0.55,
    contactoTela: 0.85,
    contactoPiel: 0.7,
  },
  Xr = {
    activo: !0,
    color: `#ff5263`,
    fuerza: 0.95,
    altura: 0.6,
    grosor: 0.04,
    radio: 3,
    arosSegundo: 0.62,
    arosSeparacion: 0.2,
    arosInclinacion: 0,
    giro: 0,
    giroAlterno: !1,
    recorrido: 0.22,
    recorridoAncho: 0.28,
    recorridoFuerza: 1.6,
    luz: !0,
    luzPotencia: 0.01,
  },
  Zr = {
    visible: !0,
    avance: 112,
    tamano: z(1),
    apoyarEnSuelo: !0,
    velocidad: 1,
    neon: { ...ur },
    cascos: { ...yr },
    instalacion: { ...Xr },
    tela: { ...Yr },
  },
  Qr = 0.88,
  $r = 1.9,
  ei = Ie,
  ti = `DJ_Session`,
  ni = `dj-mesa-neon`,
  ri = `dj-cascos-filo`,
  ii = `dj-instalacion`;
function ai(e) {
  let t = new Set(),
    n = new Set(),
    r = new Set(),
    i = new Set();
  (e.traverse((e) => {
    let a = e;
    if (a.isMesh) {
      t.add(a.geometry);
      for (let e of Array.isArray(a.material) ? a.material : [a.material]) {
        n.add(e);
        for (let t of Object.values(e)) t instanceof c && r.add(t);
      }
      a.isSkinnedMesh && i.add(a.skeleton);
    }
  }),
    i.forEach((e) => e.dispose()),
    r.forEach((e) => e.dispose()),
    n.forEach((e) => e.dispose()),
    t.forEach((e) => e.dispose()),
    e.removeFromParent());
}
var oi = class {
    tunnel;
    camera;
    group = new D();
    modelo = new D();
    config;
    motion;
    asset = null;
    mixer = null;
    current = null;
    speakerEntries = [];
    pending = null;
    active = !1;
    ignicion = null;
    luminousMaterials = new Map();
    aporteInstalacion = new E();
    disposed = !1;
    baseWidth = 1;
    baseHeight = 1;
    baseDepth = 1;
    center = new b();
    holograma = null;
    hologramaEmisores = null;
    disolucionNav = null;
    mesaMesh = null;
    cascosMesh = null;
    mesaNeon = null;
    cascosFilo = null;
    telaDj = null;
    instalacion;
    bloom = null;
    sombras = null;
    volumenesSombra = [];
    constructor(e, t, n, r, i) {
      ((this.tunnel = t),
        (this.camera = n),
        (this.motion = new R(t, i, `dj`)),
        (this.config = r),
        (this.group.name = `HoyoDJ`),
        (this.modelo.name = `HoyoDJModelo`),
        (this.modelo.visible = !1),
        this.group.add(this.modelo),
        (this.instalacion = new Ar(r.instalacion)),
        this.group.add(this.instalacion.mesh),
        e.add(this.group));
    }
    setHolograma(e) {
      (this.holograma?.apagar(),
        this.hologramaEmisores?.apagar(),
        (this.holograma = e?.pieza() ?? null),
        (this.hologramaEmisores = e?.pieza(!0) ?? null),
        this.hologramaEmisores?.adoptar(this.instalacion.mesh),
        this.asset && this.adoptarHologramas(),
        this.colgarSombras());
    }
    setBloom(e) {
      (this.bloom &&
        this.bloom !== e &&
        (this.bloom.quitarFuente(ni), this.bloom.quitarFuente(ii)),
        (this.bloom = e));
    }
    adoptarHologramas() {
      let e = this.asset?.scene;
      if (!e) return;
      let t = [this.mesaMesh, this.cascosMesh].filter((e) => !!e);
      for (let e of t) this.hologramaEmisores?.adoptar(e);
      this.holograma?.adoptar(e, new Set(t));
    }
    setSombras(e) {
      (this.soltarSombras(), (this.sombras = e), this.colgarSombras());
    }
    colgarSombras() {
      this.soltarSombras();
      let e = this.sombras,
        t = this.asset?.scene;
      if (!e || !t) return;
      let n = this.holograma,
        r = this.volumenesSombra,
        i = t.children.find((e) => e.name === `Mesa_DJ`);
      if (i) {
        let t = e.anadirCaja(i, { holograma: this.hologramaEmisores ?? n });
        t && r.push(t);
      }
      for (let i of [
        t.getObjectByName(`Vaso_DJ`),
        ...this.speakerEntries.map((e) => e.model),
      ]) {
        let t = i ? e.anadirCaja(i, { holograma: n }) : null;
        t && r.push(t);
      }
      for (let [i, a, o] of ei) {
        let s = t.getObjectByName(i),
          c = t.getObjectByName(a);
        s && c && r.push(e.anadirSegmento(s, c, o, { holograma: n }));
      }
    }
    soltarSombras() {
      (this.sombras?.quitar(this.volumenesSombra),
        (this.volumenesSombra.length = 0));
    }
    get speakers() {
      return this.speakerEntries;
    }
    get clipNames() {
      return this.asset?.animations.map((e) => e.name) ?? [];
    }
    load(e) {
      return this.disposed
        ? Promise.resolve()
        : ((this.pending ||= L(e)
            .then((e) => {
              if (this.disposed) {
                ai(e.scene);
                return;
              }
              this.asset = e;
              let t = e.scene,
                n = e.animations.find((e) => e.name === ti),
                r = [1, 2, 3, 4].map((e) =>
                  t.children.find((t) => t.name === `Altavoz_${e}`),
                );
              if (!n || !t.getObjectByName(`Vaso_DJ`) || r.some((e) => !e))
                throw Error(
                  `Faltan DJ_Session, el vaso o los cuatro altavoces del contrato.`,
                );
              ((this.mixer = new A(t)),
                (this.current = this.mixer.clipAction(n).setLoop(x, 1 / 0)),
                this.current.play(),
                this.mixer.update(0),
                U(t),
                t.updateMatrixWorld(!0));
              let i = new O().setFromObject(t),
                a = i.getSize(new b());
              ((this.baseWidth = Math.max(a.x, 0.001)),
                (this.baseHeight = Math.max(a.y, 0.001)),
                (this.baseDepth = Math.max(a.z, 0.001)),
                i.getCenter(this.center),
                r.forEach((e) => {
                  if (!e?.parent) return;
                  let t = e.parent,
                    n = new O().setFromObject(e).getCenter(new b()),
                    r = new D(),
                    i = new D();
                  ((r.name = `${e.name}_Response`),
                    (i.name = `${e.name}_Float`),
                    r.position.copy(n),
                    e.position.sub(n),
                    t.add(r),
                    r.add(i),
                    i.add(e));
                  let a = this.motion.physics.createBody(`altavoces`);
                  ((a.tubeRadius = 1 / 0),
                    this.speakerEntries.push({
                      id: e.name,
                      float: i,
                      body: a,
                      response: r,
                      model: e,
                      base: n.clone(),
                    }));
                }));
              let o = [];
              (t.traverse((e) => {
                e.isLight && o.push(e);
              }),
                o.forEach((e) => e.removeFromParent()),
                t.traverse((e) => {
                  if (e instanceof T)
                    for (let t of Array.isArray(e.material)
                      ? e.material
                      : [e.material])
                      t instanceof N &&
                        !this.luminousMaterials.has(t) &&
                        (t.name === `Altavoz_Atlas` &&
                          ((t.onBeforeCompile = (e) => {
                            e.fragmentShader = e.fragmentShader.replace(
                              `#include <emissivemap_fragment>`,
                              `#include <emissivemap_fragment>
#ifdef USE_COLOR
 totalEmissiveRadiance *= vColor.rgb;
#endif`,
                            );
                          }),
                          (t.customProgramCacheKey = () =>
                            `hoyo-altavoz-atlas-1`)),
                        this.luminousMaterials.set(t, {
                          color: t.emissive.clone(),
                          intensity: t.emissiveIntensity,
                        }));
                  e.isSkinnedMesh && (e.frustumCulled = !1);
                }));
              let s = t.children.find((e) => e.name === `Mesa_DJ`);
              ((this.mesaMesh = s?.isMesh ? s : null),
                this.mesaMesh &&
                  (this.mesaNeon = new vr(this.mesaMesh, this.config.neon)));
              let c = t.getObjectByName(`Cascos_DJ`);
              this.cascosMesh = c?.isMesh ? c : null;
              let l = this.cascosMesh ? Er(this.cascosMesh) : null;
              this.cascosMesh &&
                l &&
                (this.cascosFilo = new Dr(
                  this.cascosMesh,
                  l,
                  this.config.cascos,
                ));
              let u = t.getObjectByName(`Camiseta_DJ`),
                d = t.getObjectByName(`Alien`);
              return (
                u?.isMesh &&
                  (this.telaDj = new Jr(
                    u,
                    d?.isMesh ? d : null,
                    this.config.tela,
                  )),
                this.adoptarHologramas(),
                this.modelo.add(t),
                this.colgarSombras(),
                this.resize(),
                this.place(),
                this.mesaNeon?.lista
              );
            })
            .catch((e) => {
              (this.soltarSombras(),
                this.mixer?.stopAllAction(),
                this.asset &&
                  (this.mixer?.uncacheRoot(this.asset.scene),
                  ai(this.asset.scene)),
                (this.mixer = null),
                (this.current = null),
                (this.asset = null),
                this.mesaNeon?.dispose(),
                (this.mesaNeon = null),
                (this.mesaMesh = null),
                this.cascosFilo?.dispose(),
                (this.cascosFilo = null),
                (this.cascosMesh = null),
                this.telaDj?.dispose(),
                (this.telaDj = null),
                this.luminousMaterials.clear());
              for (let e of this.speakerEntries)
                this.motion.physics.removeBody(e.body);
              ((this.speakerEntries.length = 0),
                this.disposed ||
                  console.warn(`[DJ] No se pudo cargar la escena:`, e));
            })),
          this.pending);
    }
    setIgnicion(e) {
      ((this.ignicion = e), this.place());
    }
    setDisolucionNav(e) {
      this.disolucionNav = e;
    }
    setVisible(e) {
      ((this.config.visible = e), this.motion.reset(), this.place());
    }
    setActive(e) {
      ((this.active = e), this.motion.reset(), this.place());
    }
    resize() {
      if (!this.asset) return;
      let e = 10 * Math.tan(p.degToRad(this.camera.fov) / 2),
        t = Me(Qr, this.camera.aspect, $r),
        n = Math.min(e * this.camera.aspect * t, this.tunnel.radius * 1.6);
      this.asset.scene.scale.setScalar(
        Math.min(n / this.baseWidth, (e * 0.7) / this.baseHeight) *
          I.resolver(this.config.tamano),
      );
      let r = this.asset.scene;
      r.position.copy(this.center).multiplyScalar(-r.scale.x);
    }
    place(e = 0) {
      let t = this.tunnel.sueloY,
        n = this.asset?.scene.scale.x ?? 1,
        r = (this.baseHeight * n) / 2,
        i = this.config.apoyarEnSuelo && t !== null ? t + r : 0;
      (this.group.position.set(0, i, this.tunnel.worldZFor(this.config.avance)),
        this.group.rotation.set(0, 0, 0));
      let a = this.active && this.config.visible;
      this.modelo.visible = a && this.asset !== null;
      let o =
        (Math.hypot(this.baseWidth, this.baseHeight, this.baseDepth) *
          (this.asset?.scene.scale.x ?? 1)) /
        2;
      (this.motion.prepare(this.group, o, r),
        a ? this.motion.update(e) : this.motion.reset(),
        this.flotarAltavoces());
      let s = a && this.asset !== null;
      (W(this.holograma, this.disolucionNav, this.group.position.z, o, s),
        W(
          this.hologramaEmisores,
          this.disolucionNav,
          this.group.position.z,
          o,
          s,
        ));
      let c = Math.abs(this.group.position.z),
        l = this.ignicion,
        u = l?.activa ? l.nivelEmisor(c) : 1,
        d = l?.activa ? l.apagado(c) * l.ambiente : 0,
        f = this.instalacion.actualizar(r, u, s, e);
      this.bloom?.setFuente(ii, f);
      let p = this.instalacion.aporte(this.aporteInstalacion);
      for (let [e, t] of this.luminousMaterials)
        (e.emissive.copy(t.color).multiplyScalar(t.intensity * u),
          (e.emissive.r += e.color.r * d),
          (e.emissive.g += e.color.g * d),
          (e.emissive.b += e.color.b * d),
          p &&
            ((e.emissive.r += e.color.r * this.aporteInstalacion.r),
            (e.emissive.g += e.color.g * this.aporteInstalacion.g),
            (e.emissive.b += e.color.b * this.aporteInstalacion.b)),
          (e.emissiveIntensity = 1));
      let m = this.mesaNeon?.actualizar(u, s) ?? !1;
      this.bloom?.setFuente(ni, m);
      let h = this.cascosFilo?.actualizar(u, s) ?? !1;
      (this.bloom?.setFuente(ri, h), this.telaDj?.aplicar());
    }
    flotarAltavoces() {
      let e = this.asset?.scene.scale.x ?? 1,
        t = this.motion.physics;
      for (let { body: n, float: r } of this.speakerEntries) {
        let i = Math.max(0, t.verticalAmplitude(n) + n.offset.y);
        (r.position.set(n.offset.x / e, i / e, n.offset.z / e),
          r.rotation.set(n.rotation.x, n.rotation.y, n.rotation.z));
      }
    }
    update(e, t = !1) {
      if (!this.active || !this.config.visible || this.disposed) {
        this.motion.reset();
        return;
      }
      this.place(t ? 0 : e);
      let n = t || !Number.isFinite(e) ? 0 : Math.min(Math.max(e, 0), 0.1),
        r = Number.isFinite(this.config.velocidad)
          ? Math.max(0, this.config.velocidad)
          : 1;
      this.mixer?.update(n * r);
    }
    dispose() {
      (this.motion.dispose(),
        !this.disposed &&
          ((this.disposed = !0),
          this.mixer?.stopAllAction(),
          this.asset &&
            (this.mixer?.uncacheRoot(this.asset.scene), ai(this.asset.scene)),
          (this.asset = null),
          (this.mixer = null),
          (this.current = null),
          (this.speakerEntries.length = 0),
          this.mesaNeon?.dispose(),
          (this.mesaNeon = null),
          (this.mesaMesh = null),
          this.cascosFilo?.dispose(),
          (this.cascosFilo = null),
          (this.cascosMesh = null),
          this.telaDj?.dispose(),
          (this.telaDj = null),
          this.instalacion.dispose(),
          this.bloom?.quitarFuente(ni),
          this.bloom?.quitarFuente(ri),
          this.bloom?.quitarFuente(ii),
          (this.bloom = null),
          this.hologramaEmisores?.apagar(),
          (this.hologramaEmisores = null),
          this.luminousMaterials.clear(),
          this.soltarSombras(),
          (this.sombras = null),
          this.holograma?.apagar(),
          (this.holograma = null),
          (this.ignicion = null),
          this.modelo.clear(),
          this.group.removeFromParent(),
          this.group.clear()));
    }
  },
  si = 6,
  ci = (e) => (`naturalWidth` in e ? e.naturalWidth : e.width) || 1,
  li = (e) => (`naturalHeight` in e ? e.naturalHeight : e.height) || 1,
  ui = (e) => {
    `close` in e && e.close();
  };
function di(e, t, n) {
  let r = async (e) => {
      let n = await Qe(e, { mode: `cors` });
      if (!n.ok) return null;
      let r = await n.blob();
      try {
        let e = await createImageBitmap(r, {
          resizeWidth: t,
          resizeQuality: `high`,
        });
        return e.height >= t
          ? e
          : (e.close(),
            await createImageBitmap(r, {
              resizeHeight: t,
              resizeQuality: `high`,
            }));
      } catch {
        return createImageBitmap(r);
      }
    },
    i = (e) =>
      new Promise((t) => {
        let n = new Image();
        ((n.crossOrigin = `anonymous`),
          (n.decoding = `async`),
          (n.onload = () => t(n)),
          (n.onerror = () => t(null)),
          (n.src = e));
      }),
    a = (e) =>
      typeof createImageBitmap == `function` ? r(e).catch(() => null) : i(e),
    o = () =>
      a(e).then(
        (t) => t || (n ? a(`${n}?src=${encodeURIComponent(e)}`) : null),
      );
  return o().then(
    (e) =>
      e ??
      new Promise((e) => {
        setTimeout(() => {
          o().then(e);
        }, 1500);
      }),
  );
}
function fi(e, t) {
  let n = Math.min(e, t);
  return { sx: (e - n) / 2, sy: (t - n) / 2, lado: n };
}
async function pi(e, t) {
  let n = Math.max(256, Math.round(t.lado)),
    r = Math.max(0, Math.round(t.canalon ?? 4)),
    a = e.slice(0, 256);
  if (!a.length) return null;
  let o = Math.ceil(Math.sqrt(a.length)),
    s = Math.floor(n / o),
    c = Math.max(1, s - r * 2),
    l = document.createElement(`canvas`);
  ((l.width = n), (l.height = n));
  let u = l.getContext(`2d`);
  if (!u) return null;
  ((u.fillStyle = `#000`), u.fillRect(0, 0, n, n));
  let d = [],
    f = 0,
    p = (e, t) => {
      f += 1;
      let i = t % o,
        a = Math.floor(t / o),
        l = i * s + r,
        p = a * s + r,
        { sx: m, sy: h, lado: g } = fi(ci(e), li(e));
      (u.drawImage(e, m, h, g, g, l, p, c, c), ui(e));
      let _ = 0.5,
        v = (l + _) / n,
        y = (c - _ * 2) / n,
        b = 1 - (p + c - _) / n;
      d[t] = { u: v, v: b, ancho: y, alto: y };
    },
    m = 0;
  if (
    (await Promise.all(
      Array.from({ length: Math.min(si, a.length) }, async () => {
        for (; m < a.length;) {
          let e = m++,
            n = await di(a[e], c, t.proxy);
          n && p(n, e);
        }
      }),
    ),
    !f)
  )
    return null;
  let h = d.filter((e) => e !== void 0),
    g = new ae(l);
  return (
    (g.colorSpace = i),
    (g.generateMipmaps = !0),
    (g.minFilter = y),
    (g.magFilter = _),
    (g.wrapS = k),
    (g.wrapT = k),
    (g.anisotropy = 4),
    (g.needsUpdate = !0),
    {
      textura: g,
      celdas: h,
      dispose() {
        (g.dispose(), (l.width = 0), (l.height = 0));
      },
    }
  );
}
var mi = -0.8,
  hi = {
    visible: !0,
    avance: 159.2,
    radio: z(6, 3.95),
    achatado: 0.87,
    x: 0,
    y: -0.22,
    caras: 0,
    caraTamano: 0.96,
    grandes: 0.12,
    grandeFactor: 1.6,
    satelites: 11,
    sateliteRadio: 1.3,
    sateliteTamano: 0.37,
    sateliteVariacion: 0.45,
    sateliteVelocidad: 1.4,
    sateliteReparto: 0.18,
    luces: !0,
    lucesColor: `#f952ae`,
    lucesFuerza: 0.45,
    lucesPuntos: 70,
    lucesTamano: 0.17,
    lucesAlcance: 5,
    lucesMezcla: 0.23,
    lucesVelocidad: 1.5,
    giroVelocidad: 2,
    brillo: 0.22,
    base: `#ff52ae`,
    metalico: 0.48,
    rugosidad: 0.32,
    reflejo: 1.9,
    espejoColor: `#0a0a12`,
    espejoRugosidad: 0.12,
    marco: 0.005,
    marcoColor: `#ff43cf`,
    marcoBrillo: 1.8,
    enPista: !0,
    pistaBrillo: 1,
    apertura: 0.13,
    aperturaRadio: 0.55,
    aperturaSuavizado: 0.12,
  };
function gi(e = hi) {
  return { ...e };
}
var _i = { caras: 90, fotos: 32, atlas: 1536 },
  vi = { caras: 140, fotos: 96, atlas: 2048 },
  yi = Math.PI * (3 - Math.sqrt(5)),
  bi = 12,
  xi = `galeria-marcos`;
function Si() {
  return F() ? _i : vi;
}
var Ci = class {
    group = new D();
    config;
    motion;
    tunnel;
    anchor = new D();
    deriva = new D();
    giro = new D();
    espejos = null;
    geometria = null;
    material = null;
    atlas = null;
    ladoCara = 1;
    uPunto = { value: new b(0, 0, 1) };
    uApertura = { value: 0 };
    uAperturaRadio = { value: 0.55 };
    uEspejoColor = { value: new E(`#0a0a12`) };
    uEspejoRugosidad = { value: 0.12 };
    uMarco = { value: 0 };
    uMarcoColor = { value: new E(`#ffffff`) };
    uMarcoBrillo = { value: 0 };
    uMarcoNivel = { value: 1 };
    uPistaBrillo = { value: 1 };
    bloom = null;
    uOrbita = { value: 0 };
    manchas = null;
    giroManchas = 0;
    giroBola = 0;
    tmpMundo = new b();
    puntoObjetivo = new b(0, 0, 1);
    fuerzaObjetivo = 0;
    fuerza = 0;
    active = !1;
    actividadAplicada = null;
    nivel = 1;
    ignicion = null;
    holoSeccion = null;
    holograma = null;
    disolucionNav = null;
    sombras = null;
    sombra = null;
    apagada = !1;
    aparicion = -1;
    aparicionSegundos = 0.7;
    disposed = !1;
    lienzo = null;
    camara = null;
    enlace = null;
    destino = `/the-weeknd-experience/galeria`;
    cursorPuesto = !1;
    raycaster = new de();
    puntero = new gt();
    esfera = new f();
    onClick = null;
    tmpMatriz = new e();
    tmpQuat = new P();
    tmpEscala = new b();
    tmpPos = new b();
    tmpDir = new b();
    tmpNormal = new b();
    tmpPunto = new b();
    tmpDerecha = new b();
    tmpArriba = new b();
    ejeY = new b(0, 1, 0);
    ejeX = new b(1, 0, 0);
    constructor(e, t, n, r) {
      ((this.tunnel = t),
        (this.motion = new R(t, r, `bola`)),
        (this.config = n ?? gi()),
        (this.group.name = `HoyoTunnelBall`),
        (this.anchor.name = `Galeria_Sitio`),
        (this.deriva.name = `Galeria_Flotado`),
        (this.giro.name = `Galeria_Giro`),
        this.group.add(this.anchor),
        this.anchor.add(this.deriva),
        this.deriva.add(this.giro),
        e.add(this.group));
    }
    async cargar(e) {
      if (this.disposed) return;
      let t = Si(),
        n = t.fotos,
        r = t.atlas,
        i = await pi(e.slice(0, n), { lado: r, proxy: `/the-weeknd-experience/api/cartel` });
      if (this.disposed) {
        i?.dispose();
        return;
      }
      if ((this.atlas?.dispose(), (this.atlas = i), !i)) {
        console.warn(
          `[galeria] ninguna foto se pudo cargar; la bola no se monta`,
        );
        return;
      }
      ((this.aparicion = 0), this.build());
    }
    get radio() {
      return I.resolver(this.config.radio);
    }
    get radioTrabajo() {
      return (
        this.radio * (1 + Math.max(0, this.config.apertura)) +
        this.ladoCara / Math.SQRT2
      );
    }
    satelites() {
      return Math.max(0, Math.min(24, Math.round(this.config.satelites)));
    }
    get montada() {
      return !!this.espejos && !!this.atlas;
    }
    setIgnicion(e) {
      this.ignicion = e;
    }
    setDisolucionNav(e) {
      this.disolucionNav = e;
    }
    setManchas(e) {
      (this.manchas && this.manchas !== e && this.manchas.apagar(),
        (this.manchas = e));
    }
    setBloom(e) {
      (this.bloom?.quitarFuente(xi), (this.bloom = e), this.refrescarBloom());
    }
    marcarCapas() {
      let e = this.espejos;
      e &&
        (e.layers.disable(1),
        e.layers.disable(2),
        H(e, this.config.enPista && !F()));
    }
    refrescarBloom() {
      let e =
        !!this.espejos?.visible &&
        this.uMarco.value > 0 &&
        this.uMarcoBrillo.value > 0 &&
        this.nivel > 0.001;
      this.bloom?.setFuente(xi, e);
    }
    setHolograma(e) {
      ((this.holoSeccion = e), this.renovarHolograma());
    }
    renovarHolograma() {
      (this.holograma && this.holoSeccion?.soltar(this.holograma),
        (this.holograma = this.espejos
          ? (this.holoSeccion?.pieza(!0) ?? null)
          : null),
        this.espejos && this.holograma?.adoptar(this.espejos),
        this.renovarSombra());
    }
    setSombras(e) {
      (this.sombras?.quitar(this.sombra),
        (this.sombra = null),
        (this.sombras = e),
        this.renovarSombra());
    }
    renovarSombra() {
      (this.sombras?.quitar(this.sombra),
        (this.sombra = this.espejos
          ? (this.sombras?.anadir(this.espejos, new b().setScalar(this.radio), {
              holograma: this.holograma,
            }) ?? null)
          : null));
    }
    update(e, t = !1) {
      if (!this.active || !this.config.visible) {
        this.motion.reset();
        return;
      }
      let n = Math.min(Math.max(e, 0), 0.1);
      (t ||
        ((this.uOrbita.value += n),
        (this.giroBola += n * ((this.config.giroVelocidad * Math.PI * 2) / 60)),
        (this.giroManchas +=
          n * ((this.config.lucesVelocidad * Math.PI * 2) / 60)),
        this.manchas?.girar(this.giroManchas)),
        this.aparicion >= 0 &&
          this.aparicion < 1 &&
          (this.aparicion = Math.min(
            1,
            this.aparicion + n / Math.max(0.01, this.aparicionSegundos),
          )),
        (this.giro.rotation.y = this.giroBola),
        (this.giro.rotation.z = p.degToRad(bi)),
        this.suavizarApertura(n),
        this.place(e),
        this.resolverPuntero());
    }
    setActive(e) {
      this.active !== e &&
        ((this.active = e),
        this.motion.reset(),
        this.applyVisibility(),
        e
          ? this.place()
          : (this.ponerCursor(!1),
            (this.fuerzaObjetivo = 0),
            this.holograma?.apagar(),
            this.manchas?.apagar(),
            this.encender()));
    }
    setVisible(e) {
      ((this.config.visible = e),
        this.motion.reset(),
        e ||
          (this.ponerCursor(!1),
          (this.fuerzaObjetivo = 0),
          (this.fuerza = 0),
          this.escribirApertura(),
          this.holograma?.apagar(),
          this.manchas?.apagar()),
        (this.actividadAplicada = null),
        this.applyVisibility(),
        this.active ? this.place() : this.encender());
    }
    applyVisibility() {
      this.espejos &&
        (this.espejos.visible = this.active && this.config.visible);
    }
    place(e = 0) {
      if (!this.montada) return;
      let t = this.tunnel.worldZFor(this.config.avance),
        n = this.tunnel.radiusAtDepth(Math.max(0, -t));
      (this.anchor.position.set(this.config.x * n, this.config.y * n, t),
        this.anchor.quaternion.identity(),
        this.deriva.position.set(0, 0, 0));
      let r = this.radioTrabajo;
      (this.motion.prepare(this.anchor, r), this.motion.update(e));
      let i = W(
        this.holograma,
        this.disolucionNav,
        this.anchor.position.z,
        r,
        this.active && this.config.visible,
      );
      if ((this.actualizarManchas(i), this.sombra)) {
        let e = Math.max(0.05, this.radio);
        (this.sombra.semiejes.set(
          e,
          e * p.clamp(this.config.achatado, 0.2, 1.5),
          e,
        ),
          (this.sombra.peso = Math.max(0, this.aparicion)));
      }
      this.encender();
    }
    actualizarManchas(e = 0) {
      let t = this.manchas;
      if (!t) return;
      let n = this.config;
      if (!(
        this.montada &&
        this.active &&
        n.visible &&
        n.luces &&
        !this.apagada
      )) {
        t.apagar();
        return;
      }
      (this.giro.getWorldPosition(this.tmpMundo),
        t.colocar(this.tmpMundo),
        t.aplicar(
          {
            color: n.lucesColor,
            fuerza: n.lucesFuerza,
            puntos: n.lucesPuntos,
            tamano: n.lucesTamano,
            alcance: n.lucesAlcance,
            mezcla: n.lucesMezcla,
          },
          this.nivel *
            Math.max(0, this.aparicion) *
            (1 - p.clamp(e, 0, 1)) *
            (this.holoSeccion?.fundido ?? 1),
        ));
    }
    activarInteraccion(e, t, n) {
      (this.desactivarInteraccion(),
        (this.lienzo = e),
        (this.camara = t),
        (this.enlace = n ?? null),
        n?.getAttribute(`href`) && (this.destino = n.getAttribute(`href`)),
        this.puntero.seguir(e),
        (this.onClick = (e) => {
          this.puntero.apuntar(e.clientX, e.clientY) &&
            this.picar() &&
            (this.enlace
              ? this.enlace.click()
              : (window.location.href = this.destino));
        }),
        e.addEventListener(`click`, this.onClick));
    }
    desactivarInteraccion() {
      (this.puntero.soltar(),
        this.lienzo &&
          (this.onClick &&
            this.lienzo.removeEventListener(`click`, this.onClick),
          this.cursorPuesto && (this.lienzo.style.cursor = ``)),
        (this.onClick = null),
        (this.cursorPuesto = !1),
        (this.lienzo = null),
        (this.camara = null),
        (this.enlace = null),
        (this.fuerzaObjetivo = 0));
    }
    resolverPuntero() {
      if (!this.puntero.pendiente) return;
      this.puntero.atendido();
      let e = this.puntero.sobre ? this.picar() : null;
      ((this.fuerzaObjetivo = +!!e),
        e && this.puntoObjetivo.copy(e),
        this.ponerCursor(!!e));
    }
    ponerCursor(e) {
      e === this.cursorPuesto ||
        !this.lienzo ||
        ((this.cursorPuesto = e),
        (this.lienzo.style.cursor = e ? `pointer` : ``));
    }
    apply() {
      if (!this.espejos || !this.material || !this.atlas) return;
      let e = Si();
      if (
        (this.config.caras > 0 ? Math.round(this.config.caras) : e.caras) +
          this.satelites() !==
        this.espejos.count
      ) {
        this.build();
        return;
      }
      (this.applyVisibility(), this.repartir(this.espejos));
      let t = this.material;
      (t.color.set(this.config.base),
        (t.metalness = p.clamp(this.config.metalico, 0, 1)),
        (t.roughness = p.clamp(this.config.rugosidad, 0, 1)),
        (t.map = this.atlas.textura),
        (t.emissiveMap = this.atlas.textura),
        t.emissive.setRGB(1, 1, 1),
        (t.emissiveIntensity = this.config.brillo),
        (t.envMapIntensity = Math.max(0, this.config.reflejo)),
        this.uEspejoColor.value.set(this.config.espejoColor),
        (this.uEspejoRugosidad.value = p.clamp(
          this.config.espejoRugosidad,
          0,
          1,
        )),
        (this.uMarco.value = Math.max(0, this.config.marco)),
        this.uMarcoColor.value.set(this.config.marcoColor),
        (this.uMarcoBrillo.value = Math.max(0, this.config.marcoBrillo)),
        (this.uPistaBrillo.value = Math.max(0, this.config.pistaBrillo)),
        (t.needsUpdate = !0),
        this.marcarCapas(),
        (this.uAperturaRadio.value = Math.max(0.02, this.config.aperturaRadio)),
        this.escribirApertura(),
        (this.actividadAplicada = null),
        this.place());
    }
    dispose() {
      (this.motion.dispose(),
        (this.disposed = !0),
        this.bloom?.quitarFuente(xi),
        (this.bloom = null),
        this.manchas?.apagar(),
        (this.manchas = null),
        this.sombras?.quitar(this.sombra),
        (this.sombra = null),
        this.desactivarInteraccion(),
        this.geometria?.dispose(),
        this.material?.dispose(),
        this.atlas?.dispose(),
        (this.geometria = null),
        (this.material = null),
        (this.espejos = null),
        (this.atlas = null),
        this.group.removeFromParent(),
        this.group.clear());
    }
    build() {
      if (!this.atlas) return;
      let e = Si(),
        t =
          Math.max(
            8,
            this.config.caras > 0 ? Math.round(this.config.caras) : e.caras,
          ) + this.satelites();
      (this.espejos?.removeFromParent(),
        this.espejos?.dispose(),
        this.geometria?.dispose(),
        this.material?.dispose(),
        (this.geometria = new j(1, 1)),
        (this.material = this.crearMaterial()));
      let n = new d(this.geometria, this.material, t);
      ((n.name = `Galeria_Espejos`),
        n.instanceMatrix.setUsage(o),
        (n.frustumCulled = !1),
        n.geometry.setAttribute(`aAtlas`, new l(new Float32Array(t * 4), 4)),
        n.geometry.setAttribute(`aOrbita`, new l(new Float32Array(t * 4), 4)),
        this.giro.add(n),
        (this.espejos = n),
        this.renovarHolograma(),
        this.apply());
    }
    crearMaterial() {
      let e = new N({
        color: new E(this.config.base),
        metalness: this.config.metalico,
        roughness: this.config.rugosidad,
        emissive: new E(1, 1, 1),
        emissiveIntensity: this.config.brillo,
        envMapIntensity: this.config.reflejo,
        side: 2,
      });
      return (
        (e.onBeforeCompile = (e) => {
          ((e.uniforms.uPunto = this.uPunto),
            (e.uniforms.uApertura = this.uApertura),
            (e.uniforms.uAperturaRadio = this.uAperturaRadio),
            (e.uniforms.uOrbita = this.uOrbita),
            (e.uniforms.uEspejoColor = this.uEspejoColor),
            (e.uniforms.uEspejoRugosidad = this.uEspejoRugosidad),
            (e.uniforms.uMarco = this.uMarco),
            (e.uniforms.uMarcoColor = this.uMarcoColor),
            (e.uniforms.uMarcoBrillo = this.uMarcoBrillo),
            (e.uniforms.uMarcoNivel = this.uMarcoNivel),
            (e.uniforms.uPistaBrillo = this.uPistaBrillo),
            (e.uniforms.uMarcoPase = lt),
            (e.uniforms.uPasePista = He),
            (e.vertexShader = `
varying vec2 vFotoUv;
attribute vec4 aAtlas;
attribute vec4 aOrbita;
uniform vec3 uPunto;
uniform float uApertura;
uniform float uAperturaRadio;
uniform float uOrbita;
${e.vertexShader}`),
            (e.vertexShader = e.vertexShader.replace(
              `#include <beginnormal_vertex>`,
              `#include <beginnormal_vertex>
  vec3 hoyoOrbSitio = vec3(0.0);
  mat3 hoyoOrbGiro = mat3(1.0);
  float hoyoEsSatelite = 0.0;
  if (aOrbita.x > 0.0) {
    hoyoEsSatelite = 1.0;
    float hoyoAng = aOrbita.z + uOrbita * aOrbita.w;
    vec3 hoyoEcuador = vec3(cos(hoyoAng) * aOrbita.x, 0.0, sin(hoyoAng) * aOrbita.x);
    // Se inclina el plano de la órbita girándolo sobre X: con inclinación 0 la foto va por el
    // ecuador de la bola y con PI/2 pasa por encima y por debajo.
    float hoyoSin = sin(aOrbita.y);
    float hoyoCos = cos(aOrbita.y);
    hoyoOrbSitio = vec3(hoyoEcuador.x, -hoyoEcuador.z * hoyoSin, hoyoEcuador.z * hoyoCos);
    // La foto mira hacia fuera, como los espejos, y va derecha: la base se construye a mano por lo
    // mismo que en el reparto de las caras (el giro mas corto deja un alabeo arbitrario).
    vec3 hoyoN = normalize(hoyoOrbSitio);
    vec3 hoyoAux = abs(hoyoN.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
    vec3 hoyoDer = normalize(cross(hoyoAux, hoyoN));
    hoyoOrbGiro = mat3(hoyoDer, cross(hoyoN, hoyoDer), hoyoN);
    objectNormal = hoyoOrbGiro * objectNormal;
  }`,
            )),
            (e.vertexShader = e.vertexShader.replace(
              `#include <uv_vertex>`,
              `#include <uv_vertex>
  // El uv del PLANO, antes de que el atlas lo reescriba: es lo que mide el filo de la foto.
  vFotoUv = uv;
  #ifdef USE_MAP
    vMapUv = aAtlas.xy + uv * aAtlas.zw;
  #endif
  #ifdef USE_EMISSIVEMAP
    vEmissiveMapUv = aAtlas.xy + uv * aAtlas.zw;
  #endif`,
            )),
            (e.vertexShader = e.vertexShader.replace(
              `#include <begin_vertex>`,
              `#include <begin_vertex>
  #ifdef USE_INSTANCING
  if (hoyoEsSatelite > 0.5) {
    // La matriz de una foto satélite sólo lleva su ESCALA (la pose la pone la órbita), así que el
    // sitio se divide por ella: al multiplicar luego por la matriz vuelve a su medida.
    float hoyoEscala = max(1e-4, length(instanceMatrix[0].xyz));
    transformed = hoyoOrbGiro * transformed + hoyoOrbSitio / hoyoEscala;
  } else {
    // La columna 3 de la matriz de instancia es su traslación: el centro de esta cara en el
    // espacio de la bola. Normalizarla da su dirección desde el centro, que con la bola achatada ya
    // no es exactamente su normal; da igual, aquí sólo sirve para medir cuál está bajo el puntero.
    vec3 hoyoNormal = normalize(instanceMatrix[3].xyz);
    // Cuerda entre normales (0 = justo ahí, 2 = el lado opuesto de la bola). Se mide sobre la
    // esfera unidad y no en unidades de mundo para que el alcance no cambie al reescalar la bola.
    float hoyoCuerda = distance(hoyoNormal, uPunto);
    float hoyoCerca = 1.0 - smoothstep(uAperturaRadio * 0.25, uAperturaRadio, hoyoCuerda);
    // +Z local de la cara = su normal (el plano nace mirando a +Z y así se orienta cada instancia).
    transformed.z += uApertura * hoyoCerca;
  }
  #endif`,
            )),
            (e.fragmentShader = `
varying vec2 vFotoUv;
uniform vec3 uEspejoColor;
uniform float uEspejoRugosidad;
uniform float uMarco;
uniform vec3 uMarcoColor;
uniform float uMarcoBrillo;
uniform float uMarcoNivel;
uniform float uMarcoPase;
uniform float uPasePista;
uniform float uPistaBrillo;
${e.fragmentShader}`
              .replace(
                `#include <map_fragment>`,
                `#include <map_fragment>
  if (!gl_FrontFacing) diffuseColor.rgb = uEspejoColor;`,
              )
              .replace(
                `#include <roughnessmap_fragment>`,
                `#include <roughnessmap_fragment>
  if (!gl_FrontFacing) roughnessFactor = uEspejoRugosidad;`,
              )
              .replace(
                `#include <metalnessmap_fragment>`,
                `#include <metalnessmap_fragment>
  if (!gl_FrontFacing) metalnessFactor = 1.0;`,
              )
              .replace(
                `#include <lights_fragment_maps>`,
                `if (uMarcoPase < 0.5) {
#include <lights_fragment_maps>
  }`,
              )
              .replace(
                `#include <emissivemap_fragment>`,
                `#include <emissivemap_fragment>
  // Se guarda aparte porque es lo UNICO que sale en la pasada del halo.
  vec3 hoyoMarcoLuz = vec3(0.0);
  if (!gl_FrontFacing) {
    // La cara de DETRAS. El espejo no emite la foto -lo que se ve en el es el entorno- pero SI
    // lleva el filo encendido: desde fuera no se ve el de la cara que tienes delante, se ve el de
    // las caras del FONDO asomando por los huecos y por donde el raton abre la bola. O sea, luz
    // encerrada dentro de la bola, que es lo que le da el volumen. Por delante la foto acaba a
    // hueso contra el espejo.
    totalEmissiveRadiance = vec3(0.0);
    if (uMarco > 0.0) {
      // El filo, medido en el uv del PLANO. Es simetrico, asi que mide igual por las dos caras.
      vec2 hoyoBorde = min(vFotoUv, 1.0 - vFotoUv);
      float hoyoDist = min(hoyoBorde.x, hoyoBorde.y);
      float hoyoAa = fwidth(hoyoDist) + 1e-5;
      float hoyoFilo = 1.0 - smoothstep(uMarco - hoyoAa, uMarco + hoyoAa, hoyoDist);
      hoyoMarcoLuz = uMarcoColor * (uMarcoBrillo * uMarcoNivel * hoyoFilo);
      totalEmissiveRadiance = hoyoMarcoLuz;
    }
  }`,
              )
              .replace(
                `#include <opaque_fragment>`,
                `  if (uPasePista > 0.5) outgoingLight = diffuseColor.rgb * (uPistaBrillo * uMarcoNivel) + hoyoMarcoLuz;
  else if (uMarcoPase > 0.5) outgoingLight = hoyoMarcoLuz;
#include <opaque_fragment>`,
              )));
        }),
        (e.customProgramCacheKey = () => `hoyo-galeria-espejos-6`),
        e
      );
    }
    repartir(e) {
      let t = this.satelites(),
        n = Math.max(1, e.count - t),
        r = Math.max(0.05, this.radio),
        i = p.clamp(this.config.achatado, 0.2, 1.5),
        a =
          2 *
          r *
          Math.sqrt(Math.PI / Math.max(1, n)) *
          Math.max(0.05, this.config.caraTamano);
      this.ladoCara = a;
      let o = e.geometry.getAttribute(`aAtlas`),
        s = o.array,
        c = this.atlas?.celdas ?? [],
        l = new Float32Array(n * 3);
      for (let e = 0; e < n; e += 1) {
        let t = 1 - (2 * (e + 0.5)) / n,
          r = Math.sqrt(Math.max(0, 1 - t * t)),
          i = yi * e;
        ((l[e * 3] = Math.cos(i) * r),
          (l[e * 3 + 1] = t),
          (l[e * 3 + 2] = Math.sin(i) * r));
      }
      let u = this.repartirTamanos(n, l, a / r);
      for (let t = 0; t < n; t += 1) {
        (this.tmpDir.set(l[t * 3], l[t * 3 + 1], l[t * 3 + 2]),
          this.tmpPos.set(
            this.tmpDir.x * r,
            this.tmpDir.y * r * i,
            this.tmpDir.z * r,
          ),
          this.tmpNormal
            .set(this.tmpDir.x, this.tmpDir.y / i, this.tmpDir.z)
            .normalize());
        let n = Math.abs(this.tmpNormal.y) > 0.999 ? this.ejeX : this.ejeY;
        (this.tmpDerecha.crossVectors(n, this.tmpNormal).normalize(),
          this.tmpArriba
            .crossVectors(this.tmpNormal, this.tmpDerecha)
            .normalize(),
          this.tmpMatriz.makeBasis(
            this.tmpDerecha,
            this.tmpArriba,
            this.tmpNormal,
          ),
          this.tmpQuat.setFromRotationMatrix(this.tmpMatriz),
          this.tmpEscala.setScalar(a * u[t]),
          this.tmpMatriz.compose(this.tmpPos, this.tmpQuat, this.tmpEscala),
          e.setMatrixAt(t, this.tmpMatriz));
        let o = c.length ? c[t % c.length] : null,
          d = t * 4;
        ((s[d] = o ? o.u : 0),
          (s[d + 1] = o ? o.v : 0),
          (s[d + 2] = o ? o.ancho : 1),
          (s[d + 3] = o ? o.alto : 1));
      }
      (this.repartirSatelites(e, t, n, r, c),
        (e.instanceMatrix.needsUpdate = !0),
        (o.needsUpdate = !0),
        (e.geometry.getAttribute(`aOrbita`).needsUpdate = !0),
        this.escribirApertura());
    }
    repartirTamanos(e, t, n) {
      let r = new Float32Array(e).fill(1),
        i = Math.max(1, this.config.grandeFactor),
        a = Math.round(e * p.clamp(this.config.grandes, 0, 1));
      if (a < 1 || i <= 1) return r;
      let o = i * n * 0.5 * Math.SQRT2,
        s = o * o,
        c = s * 4,
        l = (e, n) => {
          let r = t[e * 3] - t[n * 3],
            i = t[e * 3 + 1] - t[n * 3 + 1],
            a = t[e * 3 + 2] - t[n * 3 + 2];
          return r * r + i * i + a * a;
        },
        u = [],
        d = Math.max(1, Math.round(e * 0.381966)),
        f = 0;
      for (let t = 0; t < a; t += 1) {
        let t = -1;
        for (let n = 0; n < e; n += 1) {
          let i = (f + n) % e;
          if (r[i] === 1 && !u.some((e) => l(e, i) < c)) {
            t = i;
            break;
          }
        }
        if (t < 0) break;
        ((r[t] = i), u.push(t), (f = (t + d) % e));
      }
      for (let t of u)
        for (let n = 0; n < e; n += 1) r[n] === 1 && l(t, n) < s && (r[n] = 0);
      return r;
    }
    repartirSatelites(e, t, n, r, i) {
      if (t <= 0) return;
      let a = e.geometry.getAttribute(`aOrbita`).array,
        o = e.geometry.getAttribute(`aAtlas`).array,
        s = p.clamp(this.config.sateliteReparto, 0, 1),
        c = r * Math.max(0.2, this.config.sateliteRadio),
        l = r * Math.max(0.02, this.config.sateliteTamano),
        u = p.clamp(this.config.sateliteVariacion, 0, 1),
        d = (this.config.sateliteVelocidad * Math.PI * 2) / 60;
      (this.tmpQuat.identity(), this.tmpPos.set(0, 0, 0));
      for (let r = 0; r < t; r += 1) {
        let f = n + r,
          m = l * (1 - u + 2 * u * ((r * 0.73) % 1));
        (this.tmpEscala.setScalar(m),
          this.tmpMatriz.compose(this.tmpPos, this.tmpQuat, this.tmpEscala),
          e.setMatrixAt(f, this.tmpMatriz));
        let h = f * 4,
          g = c * (0.88 + 0.24 * ((r * 0.37) % 1)),
          _ =
            this.radioTrabajo - m * Math.SQRT1_2 - g * Math.sin(p.degToRad(bi)),
          v = Math.asin(p.clamp(_ / Math.max(1e-4, g), 0, 1));
        ((a[h] = g),
          (a[h + 1] = p.clamp(s * Math.asin(-1 + (2 * (r + 0.5)) / t), -v, v)),
          (a[h + 2] = yi * r),
          (a[h + 3] =
            d * (0.8 + 0.4 * ((r * 0.61) % 1)) * (r % 3 == 0 ? -1 : 1)));
        let y = i.length ? i[(r * 7 + 3) % i.length] : null;
        ((o[h] = y ? y.u : 0),
          (o[h + 1] = y ? y.v : 0),
          (o[h + 2] = y ? y.ancho : 1),
          (o[h + 3] = y ? y.alto : 1));
      }
    }
    suavizarApertura(e) {
      let t = 1 - Math.exp(-e / Math.max(0.001, this.config.aperturaSuavizado));
      ((this.fuerza += (this.fuerzaObjetivo - this.fuerza) * t),
        this.fuerza > 0.001 &&
          this.uPunto.value.lerp(this.puntoObjetivo, t).normalize(),
        this.escribirApertura());
    }
    escribirApertura() {
      let e = this.config.apertura * this.radio * this.fuerza * this.nivel;
      this.uApertura.value = e / Math.max(1e-4, this.ladoCara);
    }
    encender() {
      let e = this.ignicion,
        t = !!e && e.activa,
        n = this.aparicion >= 0 && this.aparicion < 1,
        r = this.active && this.config.visible,
        i = r !== this.actividadAplicada;
      if (!t && !this.apagada && !n && !i) return;
      ((this.apagada = t), (this.actividadAplicada = r));
      let a = this.aparicion < 0 ? 0 : this.aparicion,
        o = +!!r,
        s = (t ? e.nivelEmisor(Math.abs(this.anchor.position.z)) : 1) * a * o;
      ((this.nivel = s),
        this.material &&
          (this.material.emissiveIntensity = this.config.brillo * s),
        (this.uMarcoNivel.value = s),
        this.refrescarBloom());
    }
    picar() {
      let e = this.camara;
      return !e ||
        !this.montada ||
        !this.espejos?.visible ||
        this.anchor.position.z > 0 ||
        (this.holograma && !this.holograma.picable) ||
        (this.raycaster.setFromCamera(this.puntero.ndc, e),
        this.deriva.updateWorldMatrix(!0, !1),
        this.esfera.center.copy(this.deriva.getWorldPosition(this.tmpPos)),
        (this.esfera.radius = this.radio * (1 + this.config.apertura)),
        !this.raycaster.ray.intersectSphere(this.esfera, this.tmpPunto))
        ? null
        : (this.giro.updateWorldMatrix(!0, !1),
          this.giro.worldToLocal(this.tmpPunto).normalize());
    }
  },
  wi = {
    visible: !0,
    avance: 188.6,
    llenado: 0.62,
    aspectoMin: 0.5,
    aspectoMax: 3,
    ancho: z(1, 2),
    y: 0,
    margenSuelo: 0.75,
    brillo: 4,
    aparicion: 0.7,
    opacidad: 0,
    tapa: !0,
    rasgado: 0,
    rasgadoFila: 0.12,
    rasgadoRitmo: 18.5,
    borde: 0.4,
    celda: 0.01,
    dispersion: 0,
    glitch: 0,
    glitchRitmo: 3.5,
    aberracion: 0.0045,
    colorA: `#5be010`,
    colorB: `#ff43cf`,
    halo: 0,
    lineas: 0,
    lineasFuerza: 0.01,
    parpadeo: 0.21,
    grano: 0,
  };
function Ti(e = wi) {
  return { ...e, ancho: { ...e.ancho } };
}
function Ei() {
  return {
    uProyTiempo: { value: 0 },
    uProyTamano: { value: new v(1, 1) },
    uProyMargen: { value: new v(0, 0) },
    uProyRecorte: { value: new s(0, 0, 1, 1) },
    uProyNivel: { value: 0 },
    uProyOpacidad: { value: 0 },
    uProyRasgado: { value: 0 },
    uProyRasgadoFila: { value: 0.1 },
    uProyRasgadoRitmo: { value: 6 },
    uProyBorde: { value: 0 },
    uProyCelda: { value: 0.06 },
    uProyDispersion: { value: 0 },
    uProyGlitch: { value: 0 },
    uProyGlitchRitmo: { value: 8 },
    uProyRafaga: { value: 0 },
    uProyAberracion: { value: 0 },
    uProyColorA: { value: new E() },
    uProyColorB: { value: new E() },
    uProyHalo: { value: 0 },
    uProyLineas: { value: 20 },
    uProyLineasFuerza: { value: 0 },
    uProyParpadeo: { value: 0 },
    uProyGrano: { value: 0 },
  };
}
var Di = `|hoyo-proyeccion-fx-1`,
  Oi = `
varying vec2 vProyUv;
uniform float uProyTiempo;
uniform vec2 uProyTamano;
uniform vec2 uProyMargen;
uniform vec4 uProyRecorte;
uniform float uProyNivel;
uniform float uProyOpacidad;
uniform float uProyRasgado;
uniform float uProyRasgadoFila;
uniform float uProyRasgadoRitmo;
uniform float uProyBorde;
uniform float uProyCelda;
uniform float uProyDispersion;
uniform float uProyGlitch;
uniform float uProyGlitchRitmo;
uniform float uProyRafaga;
uniform float uProyAberracion;
uniform vec3 uProyColorA;
uniform vec3 uProyColorB;
uniform float uProyHalo;
uniform float uProyLineas;
uniform float uProyLineasFuerza;
uniform float uProyParpadeo;
uniform float uProyGrano;

// Hash sin seno (hash12 de Dave Hoskins): el de manual se degrada en float de 32 bits.
float hoyoProyHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// Ruido de valor en una dimension, para que el ancho del borde ondule a lo largo de el.
float hoyoProyOnda(float x) {
  float i = floor(x);
  float f = fract(x);
  return mix(hoyoProyHash(vec2(i, 3.1)), hoyoProyHash(vec2(i + 1.0, 3.1)), f * f * (3.0 - 2.0 * f));
}
`,
  ki = `
#ifdef USE_EMISSIVEMAP
vec4 hoyoProyVideo(vec2 uv) {
  vec4 c = texture2D(emissiveMap, uProyRecorte.xy + clamp(uv, 0.0, 1.0) * uProyRecorte.zw);
  #ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
    c = sRGBTransferEOTF(c);
  #endif
  return c;
}
#endif
`,
  Ai = `
#ifdef USE_EMISSIVEMAP
{
  // Coordenadas del MARCO: 0..1 dentro; la malla sobresale uProyMargen por cada lado.
  vec2 hpF = (vProyUv - 0.5) * (1.0 + 2.0 * uProyMargen) + 0.5;
  vec2 hpMundo = hpF * uProyTamano;
  float hpLado = min(uProyTamano.x, uProyTamano.y);
  float hpPaso = floor(uProyTiempo * uProyRasgadoRitmo);
  float hpPasoG = floor(uProyTiempo * uProyGlitchRitmo);

  // Bandas descuadradas: pocas, y mas durante la rafaga.
  float hpBanda = floor(hpMundo.y / max(uProyRasgadoFila * 3.0, 1e-3));
  float hpSalta = step(1.0 - (0.05 + 0.3 * uProyRafaga), hoyoProyHash(vec2(hpBanda, hpPasoG + 7.0)));
  float hpDesp = (hoyoProyHash(vec2(hpBanda, hpPasoG + 3.0)) - 0.5) * 2.0 * uProyGlitch * hpSalta;
  vec2 hpUv = hpF + vec2(hpDesp, 0.0);

  // Distancia al borde en unidades de mundo (negativa fuera del marco).
  float hpDx = min(hpUv.x, 1.0 - hpUv.x) * uProyTamano.x;
  float hpDy = min(hpUv.y, 1.0 - hpUv.y) * uProyTamano.y;
  float hpD = min(hpDx, hpDy);
  float hpA_lo_largo = hpDx < hpDy ? hpMundo.y : hpMundo.x;
  float hpBordeW = max(uProyBorde * hpLado * (0.45 + hoyoProyOnda(hpA_lo_largo * 0.9 + uProyTiempo * 0.15)), 1e-3);

  // Celdas: dentro de la franja sobreviven menos cuanto mas cerca del borde; fuera, alguna suelta.
  vec2 hpCelda = floor(hpMundo / max(uProyCelda, 1e-3));
  float hpRc = hoyoProyHash(hpCelda + vec2(17.0, 31.0) * floor(hpPaso * 0.5));
  float hpDentro = step(hpRc, smoothstep(0.0, hpBordeW, hpD));
  float hpSuelta = step(1.0 - uProyDispersion * 0.35 * exp(1.5 * hpD / hpBordeW), hpRc) * step(hpD, 0.0);
  float hpMascara = hpD > 0.0 ? hpDentro : hpSuelta * 0.7;

  // Rasgados laterales: la fila arrastra hacia fuera el color de la columna del borde.
  float hpFila = floor(hpMundo.y / max(uProyRasgadoFila, 1e-3));
  float hpIzq = uProyRasgado * pow(hoyoProyHash(vec2(hpFila, hpPaso)), 3.0);
  float hpDer = uProyRasgado * pow(hoyoProyHash(vec2(hpFila + 57.0, hpPaso)), 3.0);
  float hpFueraI = -hpUv.x;
  float hpFueraD = hpUv.x - 1.0;
  float hpFuera = max(hpFueraI, hpFueraD);
  float hpLargo = hpFueraI > 0.0 ? hpIzq : hpDer;
  float hpEstela = hpFuera / max(hpLargo, 1e-4);
  float hpTrazo = step(0.3, hoyoProyHash(vec2(floor(hpMundo.x / max(uProyCelda * 2.5, 1e-3)), hpFila)));
  float hpRasgo = hpFuera > 0.0 && hpDy > 0.0 && hpLargo > 1e-4
    ? pow(max(0.0, 1.0 - hpEstela), 1.5) * hpTrazo : 0.0;
  vec2 hpMuestra = hpUv;
  if (hpFuera > 0.0) hpMuestra.x = hpFueraI > 0.0 ? 0.004 : 0.996;
  hpMascara = max(hpMascara, hpRasgo);

  // Separacion de color: verde hacia un lado, magenta hacia el otro. Mas fuerte en la banda rota.
  float hpAb = uProyAberracion * (1.0 + 4.0 * hpSalta);
  vec2 hpOff = vec2(hpAb, 0.0);
  vec3 hpBase = hoyoProyVideo(hpMuestra).rgb;
  vec3 hpVerde = hoyoProyVideo(hpMuestra + hpOff).rgb;
  vec3 hpMagenta = hoyoProyVideo(hpMuestra - hpOff).rgb;
  vec3 hpColor = vec3(hpMagenta.r, hpVerde.g, hpMagenta.b);
  // Lo que se separa se tine de los colores del holograma, no del rojo/azul de un RGB cualquiera.
  hpColor += (hpVerde - hpBase) * uProyColorA * 0.6 + (hpMagenta - hpBase) * uProyColorB * 0.6;
  hpColor = max(hpColor, vec3(0.0));

  // Barrido, parpadeo y grano.
  float hpLinea = 0.5 + 0.5 * cos((hpMundo.y * uProyLineas - uProyTiempo * 0.4) * 6.2831853);
  float hpBrillo = 1.0 - uProyLineasFuerza * hpLinea;
  hpBrillo *= 1.0 - uProyParpadeo * hoyoProyHash(vec2(floor(uProyTiempo * 14.0), 5.0));
  hpBrillo *= 1.0 + uProyGrano * (hoyoProyHash(gl_FragCoord.xy + fract(uProyTiempo) * 97.0) - 0.5);

  // Halo del color del holograma sobre el borde, las estelas y los fragmentos: solo luz, nunca tapa.
  vec3 hpHalo = uProyColorA * uProyHalo * 0.35 * exp(-abs(hpD) / (hpBordeW * 0.8));

  // Solo se dibuja donde hay proyeccion. Tambien por el holograma de cruce, que va encima: tinie lo
  // que le llega, y un margen sin descartar saldria como un rectangulo de color al cruzar.
  float hpVisible = hpMascara * uProyNivel;
  if (hpVisible < 0.002) discard;
  totalEmissiveRadiance *= (hpColor * hpBrillo + hpHalo) * hpMascara * uProyNivel;
  diffuseColor.a = clamp(uProyOpacidad * hpVisible, 0.0, 1.0);
}
#endif
`;
function ji(e, t) {
  let n = e.onBeforeCompile,
    r = e.customProgramCacheKey();
  ((e.onBeforeCompile = (r, i) => {
    (n.call(e, r, i),
      Object.assign(r.uniforms, t),
      (r.vertexShader =
        `varying vec2 vProyUv;
` +
        r.vertexShader.replace(
          `#include <uv_vertex>`,
          `#include <uv_vertex>
vProyUv = uv;`,
        )),
      (r.fragmentShader =
        Oi +
        r.fragmentShader
          .replace(
            `#include <emissivemap_pars_fragment>`,
            `#include <emissivemap_pars_fragment>\n${ki}`,
          )
          .replace(`#include <emissivemap_fragment>`, Ai)
          .replace(
            `#include <fog_fragment>`,
            `#include <fog_fragment>
#ifdef USE_FOG
  gl_FragColor.a *= 1.0 - fogFactor;
#endif`,
          )));
  }),
    (e.customProgramCacheKey = () => r + Di),
    (e.blending = 5),
    (e.blendEquation = 100),
    (e.blendSrc = 201),
    (e.blendDst = 205),
    (e.needsUpdate = !0));
}
var Mi = 1e3,
  Ni = class {
    group = new D();
    config;
    motion;
    malla;
    tunnel;
    anchor = new D();
    fx = Ei();
    tiempo = 0;
    fuentes = new Map();
    videos = null;
    fuente = null;
    abortos = [];
    objetosBlob = [];
    limpiezasCarga = [];
    aspectoCuadro = 1;
    ancho = 1;
    alto = 1;
    centroY = 0;
    active = !1;
    aparicion = -1;
    ignicion = null;
    holograma = null;
    disolucionNav = null;
    disposed = !1;
    lienzo = null;
    camara = null;
    enlace = null;
    cursorPuesto = !1;
    onClick = null;
    puntero = new gt();
    raycaster = new de();
    plano = new re();
    tmpNormal = new b();
    tmpPos = new b();
    tmpPunto = new b();
    tmpQuat = new P();
    reintentarReproduccion = () => this.reproducir();
    alCambiarVisibilidad = () => this.reproducir();
    constructor(e, t, n, r) {
      ((this.tunnel = t),
        (this.config = n ?? Ti()),
        (this.motion = new R(t, r, `proyeccion`)));
      let i = new N({
        color: 0,
        metalness: 0,
        roughness: 1,
        envMapIntensity: 0,
        emissive: new E(1, 1, 1),
        emissiveIntensity: 0,
        transparent: !0,
        depthWrite: this.config.tapa,
        alphaTest: this.config.tapa ? 0.5 : 0,
      });
      (ji(i, this.fx),
        (this.malla = new T(new j(1, 1), i)),
        (this.malla.name = `Proyeccion_Luz`),
        (this.malla.visible = !1),
        (this.group.name = `HoyoTunnelProyeccion`),
        (this.anchor.name = `Proyeccion_Sitio`),
        this.anchor.add(this.malla),
        this.group.add(this.anchor),
        e.add(this.group),
        document.addEventListener(`pointerdown`, this.reintentarReproduccion),
        document.addEventListener(`keydown`, this.reintentarReproduccion),
        document.addEventListener(
          `visibilitychange`,
          this.alCambiarVisibilidad,
        ));
    }
    async cargar(e, t, n) {
      ((this.videos = e), (this.aspectoCuadro = t));
      let r = this.obtenerFuente(this.urlPara(t), n);
      (this.mostrar(r),
        await r.lista,
        !this.disposed &&
          (this.aparicion < 0 && (this.aparicion = 0), this.place()));
    }
    get montada() {
      return !!this.fuente;
    }
    setIgnicion(e) {
      this.ignicion = e;
    }
    setDisolucionNav(e) {
      this.disolucionNav = e;
    }
    setHolograma(e) {
      (this.holograma?.apagar(),
        (this.holograma = e?.pieza(!1, !1) ?? null),
        this.holograma?.adoptar(this.malla));
    }
    setAspecto(e) {
      if (((this.aspectoCuadro = e), this.videos)) {
        let t = this.urlPara(e);
        if (t !== this.fuente?.url) {
          let e = this.obtenerFuente(t);
          e.preparada
            ? this.mostrar(e)
            : e.lista.then(() => {
                !this.disposed &&
                  this.urlPara(this.aspectoCuadro) === e.url &&
                  this.mostrar(e);
              });
        }
      }
      this.place();
    }
    reducedPlayback = weekndVideoMotion.matches;
    update(e) {
      const reduced = weekndVideoMotion.matches;
      if (reduced !== this.reducedPlayback) {
        this.reducedPlayback = reduced;
        this.reproducir();
      }
      if (!this.active || !this.config.visible) {
        this.motion.reset();
        return;
      }
      let t = Math.min(Math.max(e, 0), 0.1);
      (this.aparicion >= 0 &&
        this.aparicion < 1 &&
        (this.aparicion = Math.min(
          1,
          this.aparicion + t / Math.max(0.01, this.config.aparicion),
        )),
        (this.tiempo = weekndVideoMotion.matches ? this.tiempo : (this.tiempo + t) % Mi),
        this.place(e),
        this.resolverPuntero());
    }
    setActive(e) {
      this.active !== e &&
        ((this.active = e),
        this.motion.reset(),
        this.reproducir(),
        e
          ? this.place()
          : ((this.malla.visible = !1),
            this.ponerCursor(!1),
            this.holograma?.apagar()));
    }
    setVisible(e) {
      ((this.config.visible = e),
        this.motion.reset(),
        this.reproducir(),
        this.active && e
          ? this.place()
          : ((this.malla.visible = !1),
            this.ponerCursor(!1),
            this.holograma?.apagar()));
    }
    activarInteraccion(e, t, n) {
      (this.desactivarInteraccion(),
        (this.lienzo = e),
        (this.camara = t),
        (this.enlace = n),
        this.puntero.seguir(e),
        (this.onClick = (e) => {
          !this.puntero.apuntar(e.clientX, e.clientY) ||
            !this.picar() ||
            (this.enlace && this.enlace.click());
        }),
        e.addEventListener(`click`, this.onClick));
    }
    desactivarInteraccion() {
      (this.puntero.soltar(),
        this.lienzo &&
          (this.onClick &&
            this.lienzo.removeEventListener(`click`, this.onClick),
          this.cursorPuesto && (this.lienzo.style.cursor = ``)),
        (this.onClick = null),
        (this.cursorPuesto = !1),
        (this.lienzo = null),
        (this.camara = null),
        (this.enlace = null));
    }
    place(e = 0) {
      this.fuente &&
        (this.encajar(),
        this.anchor.position.set(
          0,
          this.centroY,
          this.tunnel.worldZFor(this.config.avance),
        ),
        this.anchor.quaternion.identity(),
        this.motion.prepare(
          this.anchor,
          Math.hypot(this.ancho, this.alto) / 2,
          this.alto / 2,
        ),
        this.motion.update(e),
        this.aplicarAspecto(),
        this.recortar(),
        this.encender(),
        W(
          this.holograma,
          this.disolucionNav,
          this.anchor.position.z,
          Math.hypot(this.ancho, this.alto) / 2,
          this.active && this.config.visible,
        ));
    }
    dispose() {
      ((this.disposed = !0),
        this.desactivarInteraccion(),
        document.removeEventListener(
          `pointerdown`,
          this.reintentarReproduccion,
        ),
        document.removeEventListener(`keydown`, this.reintentarReproduccion),
        document.removeEventListener(
          `visibilitychange`,
          this.alCambiarVisibilidad,
        ),
        this.motion.dispose(),
        this.limpiezasCarga.forEach((e) => e()),
        (this.limpiezasCarga.length = 0),
        this.abortos.forEach((e) => e.abort()),
        (this.abortos.length = 0),
        this.objetosBlob.forEach((e) => URL.revokeObjectURL(e)),
        (this.objetosBlob.length = 0));
      for (let { video: e, textura: t } of this.fuentes.values())
        (weekndReleaseDecorativeVideo(e), t.dispose(), e.pause(), e.removeAttribute(`src`), e.load());
      (this.fuentes.clear(),
        (this.fuente = null),
        this.malla.geometry.dispose(),
        this.malla.material.dispose(),
        this.group.removeFromParent(),
        this.group.clear());
    }
    urlPara(e) {
      let t = this.videos;
      return e < 1 ? t.vertical : t.horizontal;
    }
    encajar() {
      let e = this.config,
        t = this.tunnel.radius,
        n = t * Math.max(0.05, e.llenado),
        r = p.clamp(
          this.aspectoCuadro,
          Math.max(0.1, e.aspectoMin),
          Math.max(e.aspectoMin, e.aspectoMax),
        ),
        i = (2 * n) / Math.hypot(r, 1),
        a = e.y * t,
        o = this.tunnel.sueloY;
      if (o !== null) {
        let t = o + Math.max(0, e.margenSuelo);
        ((i = Math.min(i, Math.max(0.1, n - t))),
          (a = Math.max(t + i / 2, Math.min(a, n - i / 2))));
      }
      ((this.alto = i),
        (this.ancho = i * r * Math.max(0.1, I.resolver(e.ancho))),
        (this.centroY = a));
    }
    aplicarAspecto() {
      let e = this.config,
        t = this.fx,
        n = Math.min(this.ancho, this.alto),
        r = 3.5 * Math.max(0, e.borde) * n,
        i = Math.max(Math.max(0, e.rasgado) * this.ancho, r) / this.ancho,
        a = r / this.alto;
      (t.uProyMargen.value.set(i, a),
        t.uProyTamano.value.set(this.ancho, this.alto),
        this.malla.scale.set(
          this.ancho * (1 + 2 * i),
          this.alto * (1 + 2 * a),
          1,
        ),
        (t.uProyTiempo.value = this.tiempo),
        (t.uProyRafaga.value = qe(
          Math.floor(this.tiempo * Math.max(0.1, e.glitchRitmo)),
        )),
        (t.uProyOpacidad.value = p.clamp(e.opacidad, 0, 1)),
        (t.uProyRasgado.value = Math.max(0, e.rasgado)),
        (t.uProyRasgadoFila.value = Math.max(0.005, e.rasgadoFila)),
        (t.uProyRasgadoRitmo.value = Math.max(0, e.rasgadoRitmo)),
        (t.uProyBorde.value = Math.max(0, e.borde)),
        (t.uProyCelda.value = Math.max(0.005, e.celda)),
        (t.uProyDispersion.value = p.clamp(e.dispersion, 0, 1)),
        (t.uProyGlitch.value = Math.max(0, e.glitch)),
        (t.uProyGlitchRitmo.value = Math.max(0, e.glitchRitmo)),
        (t.uProyAberracion.value = Math.max(0, e.aberracion)),
        t.uProyColorA.value.set(e.colorA),
        t.uProyColorB.value.set(e.colorB),
        (t.uProyHalo.value = Math.max(0, e.halo)),
        (t.uProyLineas.value = Math.max(0, e.lineas)),
        (t.uProyLineasFuerza.value = p.clamp(e.lineasFuerza, 0, 1)),
        (t.uProyParpadeo.value = p.clamp(e.parpadeo, 0, 1)),
        (t.uProyGrano.value = Math.max(0, e.grano)));
    }
    recortar() {
      let e = this.fuente;
      if (!e) return;
      let t = this.ancho / Math.max(1e-4, this.alto),
        n = e.aspecto > 0 ? e.aspecto : t,
        r = n > t ? t / n : 1,
        i = n > t ? 1 : n / t;
      this.fx.uProyRecorte.value.set((1 - r) / 2, (1 - i) / 2, r, i);
    }
    encender() {
      let e = -this.anchor.position.z,
        t = this.config,
        n = this.ignicion,
        r = n?.activa ? Math.min(1, n.nivelEmisor(Math.abs(e))) : 1,
        i = Math.max(0, this.aparicion) * r;
      ((this.malla.material.emissiveIntensity = t.brillo),
        (this.fx.uProyNivel.value = i),
        (this.malla.visible = this.active && t.visible && i > 0.001));
    }
    resolverPuntero() {
      this.puntero.pendiente &&
        (this.puntero.atendido(),
        this.ponerCursor(this.puntero.sobre && this.picar()));
    }
    ponerCursor(e) {
      e === this.cursorPuesto ||
        !this.lienzo ||
        ((this.cursorPuesto = e),
        (this.lienzo.style.cursor = e ? `pointer` : ``));
    }
    picar() {
      let e = this.camara;
      return !e ||
        !this.fuente ||
        !this.malla.visible ||
        !this.enlace ||
        this.anchor.position.z > 0 ||
        this.fx.uProyNivel.value < 0.5 ||
        (this.holograma && !this.holograma.picable) ||
        (this.anchor.updateWorldMatrix(!0, !1),
        this.anchor.getWorldPosition(this.tmpPos),
        this.tmpNormal
          .set(0, 0, 1)
          .applyQuaternion(this.anchor.getWorldQuaternion(this.tmpQuat)),
        this.plano.setFromNormalAndCoplanarPoint(this.tmpNormal, this.tmpPos),
        this.raycaster.setFromCamera(this.puntero.ndc, e),
        !this.raycaster.ray.intersectPlane(this.plano, this.tmpPunto))
        ? !1
        : (this.anchor.worldToLocal(this.tmpPunto),
          Math.abs(this.tmpPunto.x) <= this.ancho / 2 &&
            Math.abs(this.tmpPunto.y) <= this.alto / 2);
    }
    mostrar(e) {
      ((this.fuente = e),
        (this.malla.material.emissiveMap = e.textura),
        this.soltarOtras(e),
        this.reproducir(),
        this.place());
    }
    soltarOtras(e) {
      for (let [t, n] of this.fuentes)
        if (!(n === e || !n.preparada)) {
          if (
            (weekndReleaseDecorativeVideo(n.video),
            n.textura.dispose(),
            n.video.pause(),
            n.video.removeAttribute(`src`),
            n.video.load(),
            n.blob)
          ) {
            URL.revokeObjectURL(n.blob);
            let e = this.objetosBlob.indexOf(n.blob);
            e >= 0 && this.objetosBlob.splice(e, 1);
          }
          this.fuentes.delete(t);
        }
    }
    reproducir() {
      let e =
        this.active &&
        this.config.visible &&
        document.visibilityState === `visible`;
      for (let t of this.fuentes.values())
        weekndDecorativePlayback(t.video, e && t === this.fuente);
    }
    obtenerFuente(e, t) {
      let n = this.fuentes.get(e);
      if (n) return n;
      let r = document.createElement(`video`);
      ((r.loop = !0),
        (r.muted = !0),
        (r.defaultMuted = !0),
        (r.playsInline = !0),
        r.setAttribute(`playsinline`, ``),
        r.setAttribute(`muted`, ``),
        (r.preload = `auto`));
      let a = new oe(r);
      ((a.colorSpace = i),
        (a.generateMipmaps = !1),
        (a.minFilter = _),
        (a.magFilter = _),
        (a.wrapS = k),
        (a.wrapT = k));
      let o = {
        url: e,
        video: r,
        textura: a,
        aspecto: 0,
        lista: Promise.resolve(),
        preparada: !1,
        blob: null,
      };
      return (
        r.addEventListener(`loadedmetadata`, () => {
          ((o.aspecto = r.videoWidth / Math.max(1, r.videoHeight)),
            o === this.fuente && this.recortar());
        }),
        (o.lista = this.descargar(e, t)
          .then((e) => {
            if (!this.disposed)
              return (
                e.startsWith(`blob:`) && (o.blob = e),
                (r.src = e),
                this.reproducir(),
                Promise.race([this.esperarReproducible(r), ar(ir)])
              );
          })
          .then(() => {
            o.preparada = !0;
          })),
        this.fuentes.set(e, o),
        o
      );
    }
    async descargar(e, t) {
      let n = new AbortController();
      this.abortos.push(n);
      try {
        let r = await ot(e, {
          prioridad: `video`,
          signal: n.signal,
          onProgress: t,
        });
        if (this.disposed) return e;
        let i = URL.createObjectURL(
          r.type ? r : new Blob([r], { type: `video/mp4` }),
        );
        return (this.objetosBlob.push(i), i);
      } catch {
        return e;
      } finally {
        this.disposed || t?.(1);
      }
    }
    esperarReproducible(e) {
      return new Promise((t) => {
        let n = () => {
            (e.removeEventListener(`canplaythrough`, r),
              e.removeEventListener(`loadeddata`, r),
              e.removeEventListener(`error`, r));
          },
          r = () => {
            (n(), t());
          };
        if (
          (this.limpiezasCarga.push(n),
          e.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA)
        ) {
          r();
          return;
        }
        (e.addEventListener(`canplaythrough`, r),
          e.addEventListener(`loadeddata`, r),
          e.addEventListener(`error`, r));
      });
    }
  },
  Pi = new b(0, 1, 0),
  Fi = {
    visible: !0,
    avance: -5.5,
    sitios: [0.17, 0.31, 0.69, 0.83],
    retranqueo: 0,
    tamano: 0.6,
    suspension: !1,
    color: `#756373`,
    ciclo: 11,
    objetivoAltura: 0,
    objetivoSeparacion: 8,
    barridoAncho: 6.2,
    barridoFondo: 8,
    juntas: !1,
    focosEn: [1, 2],
    luzColores: [`#f8e4fb`, `#ff94a4`, `#fa94a4`, `#f8e3fb`],
    luzFuerza: 160,
    luzAlcance: 60,
    luzApertura: 45,
    luzPenumbra: 1,
    luzDesde: 26.5,
    luzEntra: 3,
    haz: !0,
    hazLargo: 27,
    hazAncho: 0.3,
    hazFuerza: 0.05,
    hazDensidad: 6.4,
    hazDesvanece: 0.68,
    hazEnReflejo: !1,
    humoCantidad: 0.55,
    humoEscala: 1.6,
    humoVelocidad: 0.35,
    charco: !0,
    charcoFuerza: 0.05,
    charcoAncho: 0.35,
    charcoSuave: 1,
    charcoGrano: 0.5,
    gobo: !0,
    goboCeldas: 16,
    goboDensidad: 0.97,
    goboFondo: 1,
  },
  Ii = 12,
  Li = 6,
  Ri = class {
    tunnel;
    forma;
    trayectoria;
    group = new D();
    config;
    motion;
    cabezas = [];
    materialesHaz = [];
    materialesCharco = [];
    geometrias = [];
    material;
    holograma = null;
    hologramaSeccion = null;
    disolucionNav = null;
    ignicion = null;
    activa = !1;
    fase = 0;
    tiempo = 0;
    tmpCentro = new v();
    tmpDir = new b();
    tmpSitio = new b();
    tmpLocal = new b();
    tmpGiroInv = new P();
    tmpDesvio = new v();
    tmpOrigen = new b();
    tmpAqui = new v();
    tmpPos = new b();
    tmpDestino = new b();
    constructor(e, t, n, r, i = { ...Fi }, a) {
      ((this.tunnel = t),
        (this.forma = n),
        (this.trayectoria = r),
        (this.config = i),
        (this.group.name = `HoyoCabezasDj`),
        e.add(this.group),
        (this.motion = new R(t, a, `dj`)),
        (this.material = new N({
          name: `HoyoCabezaDj`,
          color: i.color,
          roughness: 0.42,
          metalness: 0.85,
        })),
        this.rehacerCabezas(),
        this.medirHaz(),
        this.place());
    }
    colorDe(e) {
      let t = this.config.luzColores;
      return t[Math.min(e, t.length - 1)] ?? `#ffffff`;
    }
    crearMaterialHaz(e) {
      let r = this.config;
      return new t({
        name: `HoyoHazDj`,
        uniforms: {
          ...n.clone(M.fog),
          uColor: { value: new E(e) },
          uFuerza: { value: r.hazFuerza },
          uDensidad: { value: r.hazDensidad },
          uDesvanece: { value: r.hazDesvanece },
          uNivel: { value: 0 },
          uTiempo: { value: 0 },
          uOrigen: { value: new b() },
          uHumoCantidad: { value: r.humoCantidad },
          uHumoEscala: { value: r.humoEscala },
          uHumoVelocidad: { value: r.humoVelocidad },
        },
        vertexShader: zi,
        fragmentShader: Bi,
        fog: !0,
        transparent: !0,
        depthWrite: !1,
        blending: 2,
        side: 1,
      });
    }
    crearMaterialCharco(e) {
      let r = this.config;
      return new t({
        name: `HoyoCharcoDj`,
        uniforms: {
          ...n.clone(M.fog),
          ...this.trayectoria,
          uColor: { value: new E(e) },
          uFuerza: { value: r.charcoFuerza },
          uCeldas: { value: 1 },
          uDensidad: { value: r.goboDensidad },
          uSuave: { value: r.charcoSuave },
          uNivel: { value: 0 },
        },
        vertexShader: Vi,
        fragmentShader: Hi,
        fog: !0,
        transparent: !0,
        depthWrite: !1,
        blending: 2,
      });
    }
    construirCabeza(e) {
      let t = new D();
      t.name = `HoyoCabezaDj${e}`;
      let n = new C(0.34, 0.4, 0.22, Ii),
        r = new le(0.1, 0.62, 0.26),
        i = new C(0.3, 0.34, 1, Ii, 1, !0);
      this.geometrias.push(n, r, i);
      let a = new T(n, this.material);
      ((a.position.y = -0.11), t.add(a));
      let o = new D();
      ((o.position.y = -0.22), t.add(o));
      for (let e of [-1, 1]) {
        let t = new T(r, this.material);
        (t.position.set(e * 0.36, -0.31, 0), o.add(t));
      }
      let s = new D();
      ((s.position.y = -0.62), o.add(s));
      let c = new T(i, this.material);
      ((c.position.y = -0.5), s.add(c));
      let l = new C(0.05, 1, 1, 18, 1, !0);
      this.geometrias.push(l);
      let u = this.crearMaterialHaz(this.colorDe(e));
      this.materialesHaz[e] = u;
      let d = new T(l, u);
      ((d.name = `HoyoHazDj${e}`),
        (d.frustumCulled = !1),
        (d.renderOrder = 1),
        s.add(d));
      let f = new D();
      f.name = `HoyoCharcoDjPivote${e}`;
      let p = new j(1, 1, Li, Li * 2);
      this.geometrias.push(p);
      let m = this.crearMaterialCharco(this.colorDe(e));
      this.materialesCharco[e] = m;
      let h = new T(p, m);
      return (
        (h.name = `HoyoCharcoDj${e}`),
        (h.rotation.x = -Math.PI / 2),
        (h.frustumCulled = !1),
        (h.renderOrder = 1),
        f.add(h),
        this.group.add(f),
        this.group.add(t),
        { nodo: t, yugo: o, cabeza: s, haz: d, charcoPivote: f, charco: h }
      );
    }
    rehacerCabezas() {
      let e = Math.max(1, this.config.sitios.length);
      if (this.cabezas.length !== e) {
        for (let { nodo: e, charcoPivote: t } of this.cabezas)
          (e.removeFromParent(), t.removeFromParent());
        for (let e of this.materialesHaz) e.dispose();
        for (let e of this.materialesCharco) e.dispose();
        ((this.materialesHaz.length = 0),
          (this.materialesCharco.length = 0),
          (this.cabezas.length = 0));
        for (let t = 0; t < e; t += 1)
          this.cabezas.push(this.construirCabeza(t));
        (this.holograma?.adoptar(this.group), this.medirHaz());
      }
    }
    sitioDe(e, t) {
      let n = this.forma,
        r = n?.uRadius.value ?? this.tunnel.radius,
        i = n?.uArco.value ?? Math.PI,
        a = n?.uOjo.value ?? 0.2,
        o = 2 * Math.PI - i,
        s = -a * r * (1 + Math.cos(0.5 * o)),
        c = s + r * Math.cos(0.5 * o),
        l = p.clamp(this.config.sitios[e] ?? 0.5, 0, 1),
        u = p.lerp(-0.5 * Math.PI + 0.5 * o, 1.5 * Math.PI - 0.5 * o, l),
        d = this.tmpDir.set(Math.cos(u), Math.sin(u), 0),
        f = Math.max(0, r - Math.max(0, this.config.retranqueo));
      return t.set(d.x * f, d.y * f + c - s, 0);
    }
    setHolograma(e) {
      (this.holograma && this.hologramaSeccion?.soltar(this.holograma),
        (this.hologramaSeccion = e),
        (this.holograma = e?.pieza() ?? null),
        this.holograma?.adoptar(this.group));
    }
    setIgnicion(e) {
      this.ignicion = e;
    }
    setDisolucionNav(e) {
      this.disolucionNav = e;
    }
    setActive(e) {
      ((this.activa = e), this.motion.reset(), this.place());
    }
    setVisible(e) {
      ((this.config.visible = e), this.place());
    }
    goboPintado = [];
    apply() {
      ((this.goboPintado = []), this.rehacerCabezas());
      let e = this.config;
      (this.material.color.set(e.color),
        this.materialesHaz.forEach((t, n) => {
          let r = t.uniforms;
          (r.uColor.value.set(this.colorDe(n)),
            (r.uFuerza.value = Math.max(0, e.hazFuerza)),
            (r.uDensidad.value = Math.max(0.1, e.hazDensidad)),
            (r.uDesvanece.value = p.clamp(e.hazDesvanece, 0, 1)),
            (r.uHumoCantidad.value = p.clamp(e.humoCantidad, 0, 1)),
            (r.uHumoEscala.value = Math.max(0.05, e.humoEscala)),
            (r.uHumoVelocidad.value = e.humoVelocidad));
        }),
        this.materialesCharco.forEach((t, n) => {
          let r = t.uniforms;
          (r.uColor.value.set(this.colorDe(n)),
            (r.uFuerza.value = Math.max(0, e.charcoFuerza)),
            (r.uDensidad.value = p.clamp(e.goboDensidad, 0, 1)),
            (r.uSuave.value = p.clamp(e.charcoSuave, 0, 1)));
        }),
        this.medirHaz(),
        this.place());
    }
    medirHaz() {
      let e = this.config,
        t = Math.max(0.5, e.hazLargo),
        n =
          Math.tan(p.degToRad(p.clamp(e.luzApertura, 1, 89))) *
          t *
          Math.max(0.05, e.hazAncho);
      for (let { haz: r, charco: i } of this.cabezas)
        (i.layers.set(0),
          e.charco && i.layers.enable(1),
          r.scale.set(n, t, n),
          (r.position.y = -0.5 * t),
          r.layers.set(0),
          e.haz && (r.layers.enable(1), e.hazEnReflejo && r.layers.enable(2)));
    }
    setAvanceSeccion(e) {
      ((this.avanceSeccion = e), this.place());
    }
    avanceSeccion = 0;
    get profundidad() {
      return Math.abs(
        this.tunnel.worldZFor(this.avanceSeccion + this.config.avance),
      );
    }
    focosQuiere() {
      return !this.config.visible || !this.activa
        ? 0
        : this.profundidad <= this.config.luzDesde
          ? this.cabezasConFoco().length
          : 0;
    }
    cabezasConFoco() {
      let e = this.cabezas.length,
        t = [];
      for (let n of this.config.focosEn) {
        let r = Math.round(n);
        !Number.isFinite(r) || r < 0 || r >= e || t.includes(r) || t.push(r);
      }
      return t;
    }
    place(e = 0) {
      let t = this.config,
        n = this.tunnel.sueloY ?? 0,
        r = this.tunnel.worldZFor(this.avanceSeccion + t.avance);
      this.group.position.set(0, n, r);
      let i = this.activa && t.visible,
        a = 0;
      this.cabezas.forEach(({ nodo: e, haz: n }, r) => {
        ((e.visible = i),
          e.scale.setScalar(Math.max(0.05, t.tamano)),
          (n.visible = t.haz),
          this.sitioDe(r, this.tmpSitio),
          e.position.copy(this.tmpSitio),
          this.tmpDir.set(this.tmpSitio.x, this.tmpSitio.y, 0),
          this.tmpDir.lengthSq() > 1e-6 &&
            e.quaternion.setFromUnitVectors(Pi, this.tmpDir.normalize()),
          (a = Math.max(a, Math.abs(this.tmpSitio.x), this.tmpSitio.y)));
      });
      let o = Math.max(a, t.tamano * 2);
      (t.suspension
        ? (this.motion.prepare(this.group, o, 0),
          i ? this.motion.update(e) : this.motion.reset())
        : (this.motion.reset(),
          this.group.quaternion.identity(),
          this.tunnel.centroEn(this.group.position.z, this.tmpCentro),
          (this.group.position.x += this.tmpCentro.x),
          (this.group.position.y += this.tmpCentro.y)),
        W(this.holograma, this.disolucionNav, this.group.position.z, o, i));
      for (let e of this.materialesHaz)
        ((e.uniforms.uTiempo.value = this.tiempo),
          e.uniforms.uOrigen.value.copy(this.group.position));
      this.orientar();
    }
    objetivoDe(e, t) {
      let n = this.config,
        r = (this.fase + (n.juntas ? 0 : e * 0.5)) * Math.PI * 2,
        i = Math.max(1, this.cabezas.length),
        a = i > 1 ? e / (i - 1) - 0.5 : 0;
      return t.set(
        a * n.objetivoSeparacion + n.barridoAncho * Math.sin(r),
        n.objetivoAltura,
        n.avance + n.barridoFondo * Math.sin(2 * r),
      );
    }
    desvioEn(e, t) {
      return (
        this.tunnel.centroEn(this.group.position.z + e, t),
        this.tunnel.centroEn(this.group.position.z, this.tmpAqui),
        t.sub(this.tmpAqui)
      );
    }
    orientar() {
      let e = this.config,
        t = this.activa && e.visible,
        n =
          Math.tan(p.degToRad(p.clamp(e.luzApertura, 1, 89))) *
          Math.max(0.05, e.charcoAncho);
      this.cabezas.forEach(
        ({ nodo: r, yugo: i, cabeza: a, charcoPivote: o, charco: s }, c) => {
          this.objetivoDe(c, this.tmpDestino).sub(r.position).normalize();
          let l = this.tmpDestino,
            u = Math.sqrt(Math.max(0, 1 - l.y * l.y));
          this.tmpLocal
            .copy(l)
            .applyQuaternion(this.tmpGiroInv.copy(r.quaternion).invert());
          let d = this.tmpLocal,
            f = Math.sqrt(Math.max(0, 1 - d.y * d.y));
          if (
            ((a.rotation.x = Math.acos(p.clamp(-d.y, -1, 1))),
            (i.rotation.y = f > 1e-4 ? Math.atan2(-d.x, -d.z) : 0),
            !t || !e.charco)
          ) {
            o.visible = !1;
            return;
          }
          if (((o.visible = !0), l.y >= -0.01)) {
            o.visible = !1;
            return;
          }
          this.tmpOrigen
            .set(0, -0.84 * Math.max(0.05, e.tamano), 0)
            .applyQuaternion(r.quaternion)
            .add(r.position);
          let m = this.tmpOrigen,
            h = -m.y / l.y;
          for (let e = 0; e < 2; e += 1)
            (this.desvioEn(m.z + l.z * h, this.tmpDesvio),
              (h = (this.tmpDesvio.y - m.y) / l.y));
          if (h <= 0) {
            o.visible = !1;
            return;
          }
          (o.position.set(
            m.x + l.x * h,
            0 + this.tmpDesvio.y + 0.03,
            m.z + l.z * h,
          ),
            (o.rotation.y = u > 1e-4 ? Math.atan2(l.x, l.z) : 0));
          let g = 2 * Math.max(0.05, n * h);
          s.scale.set(g, g / Math.max(0.33, Math.abs(l.y)), 1);
          let _ = this.materialesCharco[c];
          _ && (_.uniforms.uCeldas.value = Math.max(1, e.charcoGrano * g));
        },
      );
    }
    alumbrar(e) {
      if (!e.length) return;
      let t = this.config,
        n = this.profundidad,
        r = p.clamp((t.luzDesde - n) / Math.max(0.001, t.luzEntra), 0, 1),
        i = this.ignicion?.activa ? this.ignicion.nivelEmisor(n) : 1,
        a = this.holograma?.fundido ?? 1,
        o = this.activa && t.visible ? r * i * a : 0;
      for (let e of this.materialesHaz) e.uniforms.uNivel.value = o;
      for (let e of this.materialesCharco) e.uniforms.uNivel.value = o;
      let s = this.cabezasConFoco(),
        c = (e) => s[e] ?? e;
      ((this.goboPintado.length !== e.length ||
        e.some((e, t) => this.goboPintado[t] !== e)) &&
        (e.forEach((e, n) => {
          t.gobo
            ? e.pintarGobo({
                celdas: t.goboCeldas,
                densidad: t.goboDensidad,
                fondo: t.goboFondo,
                semilla: 17 + c(n) * 101,
              })
            : e.sinGobo();
        }),
        (this.goboPintado = [...e])),
        e.forEach((e, n) => {
          let r = c(n),
            i = this.cabezas[r];
          if (!i) {
            e.apagar();
            return;
          }
          (i.cabeza.getWorldPosition(this.tmpPos),
            this.objetivoDe(r, this.tmpDir),
            this.desvioEn(this.tmpDir.z, this.tmpDesvio),
            (this.tmpDir.x += this.tmpDesvio.x),
            (this.tmpDir.y += this.tmpDesvio.y),
            this.group.localToWorld(this.tmpDestino.copy(this.tmpDir)),
            e.colocar(this.tmpPos, this.tmpDestino),
            e.formar({
              color: this.colorDe(r),
              potencia: t.luzFuerza,
              alcance: t.luzAlcance,
              caida: 1.4,
              apertura: t.luzApertura,
              penumbra: t.luzPenumbra,
            }),
            e.setNivel(o));
        }));
    }
    update(e, t = !1) {
      if (!this.activa || !this.config.visible) {
        this.motion.reset();
        return;
      }
      let n = t || !Number.isFinite(e) ? 0 : Math.min(Math.max(e, 0), 0.1);
      ((this.fase = (this.fase + n / Math.max(0.1, this.config.ciclo)) % 1),
        (this.tiempo += n),
        this.place(t ? 0 : e));
    }
    dispose() {
      for (let e of this.materialesHaz) e.dispose();
      for (let e of this.materialesCharco) e.dispose();
      ((this.materialesHaz.length = 0),
        (this.materialesCharco.length = 0),
        this.motion.dispose(),
        this.holograma && this.hologramaSeccion?.soltar(this.holograma),
        (this.holograma = null),
        (this.hologramaSeccion = null),
        this.group.removeFromParent(),
        this.group.clear(),
        (this.cabezas.length = 0));
      for (let e of this.geometrias) e.dispose();
      ((this.geometrias.length = 0), this.material.dispose());
    }
  },
  zi = `
#include <common>
#include <fog_pars_vertex>

uniform vec3 uOrigen;

varying vec3 vNormalVista;
varying vec3 vPosVista;
varying vec3 vPosSeccion;
varying float vLargo;

void main() {
  // 0 en la punta (donde esta la cabeza) y 1 en la boca: el cilindro va de +Y a -Y.
  vLargo = 0.5 - position.y;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vPosVista = mvPosition.xyz;
  vNormalVista = normalMatrix * normal;
  // En el marco de la SECCION: el humo se queda quieto en la sala aunque la cabeza gire y aunque el
  // tramo avance con el scroll. Ver humoCantidad en la config.
  vPosSeccion = (modelMatrix * vec4(position, 1.0)).xyz - uOrigen;
  gl_Position = projectionMatrix * mvPosition;

  #include <fog_vertex>
}
`,
  Bi = `
#include <common>
#include <fog_pars_fragment>

uniform vec3 uColor;
uniform float uFuerza;
uniform float uDensidad;
uniform float uDesvanece;
uniform float uNivel;
uniform float uTiempo;
uniform float uHumoCantidad;
uniform float uHumoEscala;
uniform float uHumoVelocidad;

varying vec3 vNormalVista;
varying vec3 vPosVista;
varying vec3 vPosSeccion;
varying float vLargo;

// Hash sin seno (Hoskins). El de manual, fract(sin(dot(...)) * 43758.5453), se degrada en float de
// 32 bits y deja de ser ruido: ya nos mordio en la desintegracion de las marquesinas.
float hashHumo(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

// Ruido de valor trilineal. Dos octavas bastan: el haz es un filamento fino y el detalle de mas no
// se ve, pero si se paga en cada pixel del cono.
float ruidoHumo(vec3 p) {
  vec3 celda = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = mix(hashHumo(celda), hashHumo(celda + vec3(1.0, 0.0, 0.0)), f.x);
  float b = mix(hashHumo(celda + vec3(0.0, 1.0, 0.0)), hashHumo(celda + vec3(1.0, 1.0, 0.0)), f.x);
  float c = mix(hashHumo(celda + vec3(0.0, 0.0, 1.0)), hashHumo(celda + vec3(1.0, 0.0, 1.0)), f.x);
  float d = mix(hashHumo(celda + vec3(0.0, 1.0, 1.0)), hashHumo(celda + vec3(1.0, 1.0, 1.0)), f.x);
  return mix(mix(a, b, f.y), mix(c, d, f.y), f.z);
}

void main() {
  // Cuanta niebla atraviesa la vista dentro del cono, aproximada con la cara: por el centro del haz
  // la superficie te mira de frente (N.V alto) y es donde la cuerda es mas larga; en el filo la roza
  // y la cuerda se va a cero. Elevarlo concentra el nucleo y deja los bordes deshechos.
  float nv = abs(dot(normalize(vNormalVista), normalize(-vPosVista)));
  float cuerpo = pow(nv, uDensidad);
  // Se apaga hacia la boca, y SIEMPRE llega a cero: el haz no puede acabar en un corte recto. Lo que
  // elige uDesvanece es la CURVA de la caida, no si se apaga — con la forma anterior,
  // mix(1, 1 - vLargo, uDesvanece), en la boca quedaba 1 - uDesvanece de brillo y el cono cortaba en
  // seco (se vio en el preview del equipo, 16/09, con uDesvanece 0,68 -> 0,32 de brillo en el filo).
  float largo = pow(clamp(1.0 - vLargo, 0.0, 1.0), mix(0.35, 4.0, uDesvanece));
  // Y arranca suave: sin esto se ve el disco del cilindro pegado a la cabeza.
  float arranque = smoothstep(0.0, 0.08, vLargo);

  // El humo. El if es de uniform —el mismo valor para todos los fragmentos del cono—, asi que no
  // hay divergencia: con humoCantidad a 0 el ruido no se calcula y el haz vuelve a ser el de antes.
  float humo = 1.0;
  if (uHumoCantidad > 0.0) {
    vec3 p = vPosSeccion / max(0.05, uHumoEscala);
    // El humo sube, asi que la muestra baja; y se estira en vertical, que es como se apelmaza en una
    // sala: columnas, no bolas.
    p.y = p.y * 0.6 - uTiempo * uHumoVelocidad;
    float veta = ruidoHumo(p) * 0.65 + ruidoHumo(p * 2.1 + vec3(3.7, 1.3, 5.1)) * 0.35;
    // Se estrecha el rango para que haya claros DE VERDAD entre veta y veta y no quede una moqueta
    // gris. El 0,35 + 1,15 mantiene el brillo medio en ~0,9: lo que el equipo afino en hazFuerza
    // sigue valiendo lo mismo con el humo puesto.
    humo = mix(1.0, 0.35 + 1.15 * smoothstep(0.18, 0.82, veta), uHumoCantidad);
  }

  gl_FragColor = vec4(uColor * (uFuerza * uNivel * cuerpo * largo * arranque * humo), 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,
  Vi = `
#include <common>
#include <fog_pars_vertex>

varying vec2 vUv;

${dt}
// Ni un acento grave en estos comentarios: el GLSL vive en un template literal de JS.

void main() {
  vUv = uv;

  // La PISTA no es plana: la trayectoria la dobla vertice a vertice (y el raton la tuerce en vivo).
  // Un charco plano la atraviesa, y como hace test de profundidad, el suelo lo corta con una recta
  // que barre la mancha al mover el raton — lo que reporto el equipo el 22/09. Aqui cada vertice
  // toma la curva de SU profundidad, como las luminarias del suelo, y el charco se dobla con la
  // pista en vez de cortarla.
  //
  // Va en RELATIVO al centro del quad porque la CPU ya lo puso a la cota de la pista de alli
  // (en orientar): lo que falta es solo como cambia esa cota a lo largo del charco.
  vec4 mundo = modelMatrix * vec4(position, 1.0);
  vec4 centro = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  mundo.xy += bovedaCurva(-mundo.z) - bovedaCurva(-centro.z);

  // El nombre importa: el chunk <fog_vertex> de Three lee una variable llamada mvPosition.
  vec4 mvPosition = viewMatrix * mundo;
  gl_Position = projectionMatrix * mvPosition;

  #include <fog_vertex>
}
`,
  Hi = `
#include <common>
#include <fog_pars_fragment>

uniform vec3 uColor;
uniform float uFuerza;
uniform float uCeldas;
uniform float uDensidad;
uniform float uSuave;
uniform float uNivel;

varying vec2 vUv;

// Hash sin seno (hash12 de Hoskins). El de manual, fract(sin(dot(c,k)) * 43758.5453), se degrada en
// float de 32 bits y el moteado saldria casi constante: es una trampa ya pagada en este proyecto.
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  // El charco es redondo en su marco; el estiron de la elipse lo pone la escala del quad.
  // uSuave decide DESDE DONDE empieza a apagarse: a 0 es un disco de filo marcado y a 1 se deshace
  // ya desde el centro. Es lo que separa «un charco» de «una mancha con borde».
  float disco = 1.0 - smoothstep(mix(0.9, 0.0, uSuave), 1.0, length(p));
  if (disco <= 0.0) discard;

  // Moteado: celdas al azar, cada una con su gota. Es el dibujo del gobo, no una textura.
  vec2 celda = vUv * uCeldas;
  vec2 cual = floor(celda);
  float suerte = hash12(cual);
  vec2 dentro = fract(celda) - 0.5;
  // Cada gota tiene su tamano, para que no se lea la retícula.
  float radio = mix(0.18, 0.46, hash12(cual + 7.31));
  float gota = 1.0 - smoothstep(radio * 0.55, radio, length(dentro));
  float moteado = gota * step(suerte, uDensidad);

  // Un fondo tenue bajo el moteado: el charco no es solo las gotas, tambien la luz que las rodea.
  float intensidad = (0.22 + 0.78 * moteado) * disco;

  gl_FragColor = vec4(uColor * (uFuerza * uNivel * intensidad), 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,
  Ui = {
    activas: !0,
    separacion: 1,
    largo: 1.3,
    ancho: 0.64,
    altura: 0.04,
    color: `#ff3ad0`,
    colorAlterno: `#5be010`,
    potencia: 3.15,
    filo: 0.99,
    alcance: 60,
    luces: 4,
    luzDesde: 30,
    luzEntra: 0.5,
    luzFuerza: 99,
    luzAlcance: 6.5,
    luzAltura: 0,
    luzLateral: 1,
    franja: !1,
    franjaFuerza: 1.85,
    franjaAlcance: 13,
    franjaRugosidad: 0.2,
    franjaMadera: 2,
  },
  Wi = class {
    config;
    mesh;
    material;
    geometria;
    sitios = [];
    activa = !1;
    fundido = 1;
    cercanas = [];
    fondoCercanas = [];
    colores = new Map();
    colorDe(e) {
      let t = this.colores.get(e);
      return (t || ((t = new E(e)), this.colores.set(e, t)), t);
    }
    tmpCentro = new v();
    tmpPunto = new b();
    fuentes = [];
    constructor(e, r, i, a, o = { ...Ui }) {
      ((this.config = o),
        (this.material = new t({
          name: `HoyoLuminariasSuelo`,
          uniforms: {
            ...n.clone(M.fog),
            ...r,
            ...i,
            ...a,
            uAvanceSeccion: { value: 0 },
            uSeparacion: { value: this.config.separacion },
            uTira: { value: new v(this.config.ancho, this.config.largo) },
            uAltura: { value: this.config.altura },
            uColorLuz: { value: new E(this.config.color) },
            uColorAlterno: { value: new E(this.config.colorAlterno) },
            uPotencia: { value: this.config.potencia },
            uFilo: { value: this.config.filo },
            uAlcanceLuces: { value: this.config.alcance },
            uFundido: { value: 1 },
          },
          vertexShader: Ki,
          fragmentShader: qi,
          fog: !0,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
        })),
        (this.geometria = Gi([])),
        (this.mesh = new T(this.geometria, this.material)),
        (this.mesh.name = `HoyoLuminariasSuelo`),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 1),
        (this.mesh.visible = !1),
        H(this.mesh),
        e.add(this.mesh));
    }
    setSitios(e) {
      ((this.sitios = [...e].sort((e, t) => e - t)), this.rehacer());
    }
    setActive(e) {
      ((this.activa = e), this.apply());
    }
    setFundido(e) {
      let t = p.clamp(e, 0, 1);
      t !== this.fundido &&
        ((this.fundido = t),
        (this.material.uniforms.uFundido.value = t),
        (this.mesh.visible = this.dibuja));
    }
    get dibuja() {
      return (
        this.activa &&
        this.config.activas &&
        this.sitios.length > 0 &&
        this.fundido > 0
      );
    }
    setAvanceSeccion(e) {
      this.material.uniforms.uAvanceSeccion.value = e;
    }
    apply() {
      let e = this.config,
        t = this.material.uniforms;
      ((t.uSeparacion.value = p.clamp(e.separacion, 0, 1)),
        t.uTira.value.set(Math.max(0.01, e.ancho), Math.max(0.05, e.largo)),
        (t.uAltura.value = e.altura),
        t.uColorLuz.value.set(e.color),
        t.uColorAlterno.value.set(e.colorAlterno),
        (t.uPotencia.value = Math.max(0, e.potencia)),
        (t.uFilo.value = p.clamp(e.filo, 0, 0.99)),
        (t.uAlcanceLuces.value = Math.max(1, e.alcance)),
        (this.mesh.visible = this.dibuja));
    }
    rehacer() {
      let e = this.geometria;
      ((this.geometria = Gi(this.sitios)),
        (this.mesh.geometry = this.geometria),
        e.dispose(),
        (this.mesh.visible = this.dibuja));
    }
    lucesQuiere(e) {
      let t = this.config;
      if (!t.activas || !this.sitios.length) return 0;
      let n = this.material.uniforms.uAvanceSeccion.value,
        r = 0;
      for (let i of this.sitios)
        Math.abs(e.worldZFor(n + i)) <= t.luzDesde && (r += 1);
      return Math.min(r, Math.max(0, Math.round(t.luces)));
    }
    setLuzSuelo(e) {
      for (let e of this.fuentes) e.soltar();
      if (((this.fuentes = []), e))
        for (let t of [`izquierda`, `derecha`]) {
          let n = e.pedir(`eventos-${t}`);
          n && this.fuentes.push(n);
        }
    }
    alumbrar(e, t, n) {
      if (!e.length && !this.fuentes.length) return;
      let r = this.config,
        i = this.material.uniforms,
        a = i.uRadius.value,
        o = 2 * Math.PI - i.uArco.value,
        s = a * Math.sin(0.5 * o),
        c = -i.uOjo.value * a * (1 + Math.cos(0.5 * o)),
        l = i.uAvanceSeccion.value;
      if (((this.cercanas.length = 0), r.activas)) {
        for (let e = 0; e < this.sitios.length; e++) {
          let n = t.worldZFor(l + this.sitios[e]);
          if (Math.abs(n) > r.luzDesde) continue;
          let i = (this.fondoCercanas[this.cercanas.length] ??= {
            indice: 0,
            z: 0,
          });
          ((i.indice = e), (i.z = n), this.cercanas.push(i));
        }
        this.cercanas.sort(Ji);
      }
      e.forEach((e, i) => {
        let a = this.cercanas[i];
        if (!a) {
          e.intensity = 0;
          return;
        }
        let o = a.indice % 2 == 0 ? -1 : 1;
        (t.centroEn(a.z, this.tmpCentro),
          e.position.set(
            o * r.luzLateral * r.separacion * s + this.tmpCentro.x,
            c + r.luzAltura + this.tmpCentro.y,
            a.z,
          ),
          e.color.copy(
            this.colorDe(a.indice % 2 == 0 ? r.color : r.colorAlterno),
          ),
          (e.distance = Math.max(0, r.luzAlcance)));
        let l = n?.activa ? n.nivelEmisor(Math.abs(a.z)) : 1,
          u = p.clamp(
            (r.luzDesde - Math.abs(a.z)) / Math.max(0.001, r.luzEntra),
            0,
            1,
          );
        e.intensity = Math.max(0, r.luzFuerza) * l * u * this.fundido;
      });
      let u = this.cercanas[0];
      this.fuentes.forEach((e, i) => {
        if (!r.franja || !u) {
          e.apagar();
          return;
        }
        t.centroEn(u.z, this.tmpCentro);
        let a = (i === 0 ? -1 : 1) * r.separacion * s + this.tmpCentro.x;
        (e.colocar(this.tmpPunto.set(a, c + r.altura + this.tmpCentro.y, u.z)),
          e.formar({
            color: u.indice % 2 == 0 ? r.color : r.colorAlterno,
            potencia: r.franjaFuerza,
            alcance: r.franjaAlcance,
            rugosidad: r.franjaRugosidad,
            madera: r.franjaMadera,
          }));
        let o = p.clamp(
            (r.luzDesde - Math.abs(u.z)) / Math.max(0.001, r.luzEntra),
            0,
            1,
          ),
          l = n?.activa ? n.nivelEmisor(Math.abs(u.z)) : 1;
        e.setNivel(o * l * this.fundido);
      });
    }
    dispose() {
      for (let e of this.fuentes) e.soltar();
      ((this.fuentes = []),
        this.mesh.removeFromParent(),
        this.geometria.dispose(),
        this.material.dispose());
    }
  };
function Gi(e) {
  let t = [];
  e.forEach((e, n) => {
    for (let r of [-1, 1]) t.push({ offset: e, lado: r, alterna: n % 2 });
  });
  let n = t.length,
    r = new Float32Array(n * 4),
    i = new Float32Array(n * 4),
    a = new Float32Array(n * 4 * 2),
    o = new Float32Array(n * 4),
    s = new Uint32Array(n * 6),
    c = [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ];
  t.forEach((e, t) => {
    for (let n = 0; n < 4; n += 1) {
      let s = t * 4 + n;
      ((r[s] = e.offset),
        (i[s] = e.lado),
        (a[s * 2] = c[n][0]),
        (a[s * 2 + 1] = c[n][1]),
        (o[s] = e.alterna));
    }
    let n = t * 4;
    s.set([n, n + 1, n + 2, n + 1, n + 3, n + 2], t * 6);
  });
  let l = new ne();
  return (
    l.setAttribute(`position`, new w(new Float32Array(n * 4 * 3), 3)),
    l.setAttribute(`aOffset`, new w(r, 1)),
    l.setAttribute(`aLado`, new w(i, 1)),
    l.setAttribute(`aEsquina`, new w(a, 2)),
    l.setAttribute(`aAlterna`, new w(o, 1)),
    l.setIndex(new w(s, 1)),
    (l.boundingSphere = new f(new b(), 1e4)),
    l
  );
}
var Ki = `
#include <common>
#include <fog_pars_vertex>

attribute float aOffset;   // avance de la luminaria, relativo a la seccion
attribute float aLado;     // -1 izquierda, 1 derecha
attribute vec2 aEsquina;   // (-1..1 a lo ancho, -1..1 a lo largo)
attribute float aAlterna;  // 0 color base, 1 color alterno

uniform float uAdvance;
uniform float uLoop;
uniform float uRadius;
uniform float uArco;
uniform float uOjo;
uniform float uMargenDetras;
uniform float uAvanceSeccion;
uniform float uSeparacion;
uniform vec2 uTira;
uniform float uAltura;
uniform float uAlcanceLuces;

varying vec2 vEsquina;
// Constantes en toda la luminaria: se resuelven una vez por vertice y el fragmento solo las lee.
flat varying float vAlterna;
flat varying float vNivel;

${rt}
${dt}
${Pe}
// Nada de acentos graves en estos comentarios: el GLSL vive en un template literal de JS.

void main() {
  // Profundidad del centro de la luminaria, envuelta a una ventana que empieza uMargenDetras por
  // detras de la camara: la misma cuenta que zDeRecorrido hace en CPU.
  float centro = mod(aOffset + uAvanceSeccion - uAdvance + uMargenDetras, uLoop) - uMargenDetras;

  // Fuera de su ventana no se dibuja: los cuatro vertices se van fuera del volumen de recorte y la
  // luminaria ni se rasteriza. Es lo que hace que el numero de piezas no se pague en relleno.
  if (centro > uAlcanceLuces) {
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
    return;
  }

  // El encendido, UNA vez por luminaria y con la profundidad de su centro: se enciende entera, como
  // una tira del techo, y no medio cruzada por el frente.
  vNivel = hoyoIgnicion(abs(centro));
  if (vNivel <= 0.0) {
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
    return;
  }

  float profundidad = centro + aEsquina.y * 0.5 * uTira.y;
  // El doblado se toma en la profundidad de CADA vertice, asi que la tira se curva con el tubo en
  // vez de quedarse recta sobre una pista que gira.
  vec2 curva = bovedaCurva(profundidad);
  float x = aLado * uSeparacion * bovedaSemiancho() + aEsquina.x * 0.5 * uTira.x;
  vec3 posicion = vec3(x + curva.x, bovedaSueloY() + uAltura + curva.y, -profundidad);

  vEsquina = aEsquina;
  vAlterna = aAlterna;

  // El nombre importa: el chunk <fog_vertex> de Three lee una variable llamada mvPosition.
  vec4 mvPosition = modelViewMatrix * vec4(posicion, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  #include <fog_vertex>
}
`,
  qi = `
#include <common>
#include <fog_pars_fragment>

uniform vec3 uColorLuz;
uniform vec3 uColorAlterno;
uniform float uPotencia;
uniform float uFilo;
uniform float uFundido;

varying vec2 vEsquina;
flat varying float vAlterna;
flat varying float vNivel;

void main() {
  // Perfil transversal: pico en el eje de la tira y cero en su borde, como las cintas del techo.
  float ancho = 1.0 - abs(vEsquina.x);
  // Los extremos se funden en vez de cortarse en seco: una tira de luz no acaba con una arista.
  float largo = 1.0 - smoothstep(1.0 - uFilo, 1.0, abs(vEsquina.y));

  vec3 color = mix(uColorLuz, uColorAlterno, vAlterna);
  float energia = uPotencia * vNivel * uFundido;
  gl_FragColor = vec4(color * (energia * ancho * largo), 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`;
function Ji(e, t) {
  return Math.abs(e.z) - Math.abs(t.z);
}
var Yi = {
  activa: !0,
  forzar: !1,
  espera: 7,
  distancia: z(9, 8.5),
  separacion: z(1.3, 1.2),
  ancho: z(2, 1.7),
  largo: z(0.95, 0.85),
  grosor: 0.1,
  linea: 0.04,
  relleno: 0.35,
  nucleo: 0.55,
  halo: 0.06,
  haloFuerza: 0.35,
  altura: 0.03,
  color: `#ff2fb4`,
  potencia: 3,
  entrada: 0.6,
  cascadaEntrada: 0.18,
  titileoHz: 16,
  periodo: 1.8,
  desfase: 0.2,
  llenado: 0.3,
  mantener: 0.1,
  vaciado: 0.3,
  base: 0.3,
  cabeza: 0.8,
  suave: 0.08,
  salida: 0.25,
  margenToque: z(0.5, 0.7),
  umbralArrastre: 12,
  demoraPulsado: 0.35,
  velocidadPulsado: 1200,
  rampaPulsado: 0.25,
  vista: 12,
  vistaGaleria: 22,
  margen: 5,
  saltoVelocidad: 45,
  saltoMin: 0.8,
  saltoMax: 2.6,
};
function Xi() {
  let e = Yi;
  return {
    ...e,
    distancia: { ...e.distancia },
    separacion: { ...e.separacion },
    ancho: { ...e.ancho },
    largo: { ...e.largo },
    margenToque: { ...e.margenToque },
  };
}
var Zi = `flecha-sigue`,
  Qi = 8,
  $i = 4,
  ea = 0.12,
  ta = class {
    config;
    mesh;
    material;
    geometria;
    estado = `apagada`;
    t = 0;
    reloj = 0;
    quieto = 0;
    nivelSalida = 1;
    niveles = new v();
    barrido = new s();
    lienzo = null;
    camara = null;
    tubo = null;
    acciones = null;
    puntero = new gt();
    cursorPuesto = !1;
    pulsacion = null;
    velocidadPulsado = 0;
    saltoPendiente = !1;
    tragarClickHasta = 0;
    raycaster = new de();
    plano = new re();
    tmpPunto = new b();
    tmpCentro = new v();
    constructor(e, r, i, a = { ...Yi }) {
      ((this.config = a),
        (this.material = new t({
          name: `HoyoFlechaSigue`,
          uniforms: {
            ...n.clone(M.fog),
            ...r,
            ...i,
            uDistancia: { value: 0 },
            uSeparacion: { value: 0 },
            uCaja: { value: new v(1, 1) },
            uAncho: { value: 1 },
            uLargo: { value: 1 },
            uGrosor: { value: 0.1 },
            uLinea: { value: 0.03 },
            uRelleno: { value: 0 },
            uNucleo: { value: 0 },
            uHalo: { value: 0.05 },
            uHaloFuerza: { value: 0 },
            uAltura: { value: 0 },
            uColor: { value: new E() },
            uPotencia: { value: 1 },
            uNivel: { value: this.niveles },
            uBarrido: { value: this.barrido },
            uBase: { value: 0.3 },
            uCabeza: { value: 0.8 },
            uSuave: { value: 0.08 },
          },
          vertexShader: aa,
          fragmentShader: oa,
          fog: !0,
          transparent: !0,
          depthWrite: !1,
          blending: 2,
          side: 2,
        })),
        (this.geometria = ia()),
        (this.mesh = new T(this.geometria, this.material)),
        (this.mesh.name = `HoyoFlechaSigue`),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 1),
        (this.mesh.visible = !1),
        H(this.mesh),
        e.add(this.mesh),
        this.apply());
    }
    get visible() {
      return this.mesh.visible;
    }
    apply() {
      let e = this.config,
        t = this.material.uniforms,
        n = Math.max(0.05, I.resolver(e.ancho)),
        r = Math.max(0.05, I.resolver(e.largo)),
        i = Math.max(0.005, e.grosor),
        a = Math.max(0.005, e.halo),
        o = i + 4 * a;
      ((t.uDistancia.value = I.resolver(e.distancia)),
        (t.uSeparacion.value = I.resolver(e.separacion)),
        t.uCaja.value.set(0.5 * n + o, 0.5 * r + o),
        (t.uAncho.value = n),
        (t.uLargo.value = r),
        (t.uGrosor.value = i),
        (t.uLinea.value = p.clamp(e.linea, 0.002, i)),
        (t.uRelleno.value = p.clamp(e.relleno, 0, 1)),
        (t.uNucleo.value = p.clamp(e.nucleo, 0, 1)),
        (t.uHalo.value = a),
        (t.uHaloFuerza.value = Math.max(0, e.haloFuerza)),
        (t.uAltura.value = e.altura),
        t.uColor.value.set(e.color),
        (t.uPotencia.value = Math.max(0, e.potencia)),
        (t.uBase.value = p.clamp(e.base, 0, 1)),
        (t.uCabeza.value = Math.max(0, e.cabeza)),
        (t.uSuave.value = p.clamp(e.suave, 0.005, 0.5)));
    }
    rejugar() {
      ((this.estado = `entrando`), (this.t = 0));
    }
    activarInteraccion(e, t, n, r) {
      (this.desactivarInteraccion(),
        (this.lienzo = e),
        (this.camara = t),
        (this.tubo = n),
        (this.acciones = r),
        this.puntero.seguir(e),
        e.addEventListener(`pointerdown`, this.alPulsar),
        e.addEventListener(`pointermove`, this.alMover),
        e.addEventListener(`pointerup`, this.alSoltar),
        e.addEventListener(`pointercancel`, this.alCancelar),
        e.addEventListener(`lostpointercapture`, this.alCancelar),
        e.addEventListener(`contextmenu`, this.alMenuContextual),
        window.addEventListener(`click`, this.alClick, !0));
    }
    desactivarInteraccion() {
      this.puntero.soltar();
      let e = this.lienzo;
      (e &&
        (e.removeEventListener(`pointerdown`, this.alPulsar),
        e.removeEventListener(`pointermove`, this.alMover),
        e.removeEventListener(`pointerup`, this.alSoltar),
        e.removeEventListener(`pointercancel`, this.alCancelar),
        e.removeEventListener(`lostpointercapture`, this.alCancelar),
        e.removeEventListener(`contextmenu`, this.alMenuContextual),
        this.cursorPuesto && (e.style.cursor = ``)),
        window.removeEventListener(`click`, this.alClick, !0),
        (this.saltoPendiente = !1),
        (this.velocidadPulsado = 0),
        (this.cursorPuesto = !1),
        (this.pulsacion = null),
        (this.lienzo = null),
        (this.camara = null),
        (this.tubo = null),
        (this.acciones = null));
    }
    update(e, t, n, r) {
      let i = this.config,
        a = Math.min(Math.max(e, 0), 0.1);
      if (!i.activa || !t)
        ((this.quieto = 0),
          (this.pulsacion = null),
          (this.saltoPendiente = !1),
          (this.velocidadPulsado = 0),
          this.apagar());
      else if (this.saltoPendiente)
        ((this.saltoPendiente = !1),
          (this.quieto = 0),
          this.acciones?.saltar(),
          this.apagar());
      else if (this.pulsacion) {
        ((this.pulsacion.t += a), (this.quieto = 0));
        let e = this.pulsacion.t - Math.max(0, i.demoraPulsado);
        if (e > 0 && a > 0) {
          let t = p.clamp(e / Math.max(0.001, i.rampaPulsado), 0, 1);
          ((this.velocidadPulsado = Math.max(0, i.velocidadPulsado) * t),
            this.acciones?.empujar(this.velocidadPulsado * a, !0));
        }
      } else
        n && !i.forzar
          ? ((this.quieto = 0), this.apagar())
          : ((this.quieto += a),
            (i.forzar || this.quieto >= i.espera) && this.encender());
      (!this.pulsacion &&
        this.velocidadPulsado > 0 &&
        (this.acciones?.empujar(this.velocidadPulsado * ea, !1),
        (this.velocidadPulsado = 0)),
        (this.t += a),
        this.avanzarNeon(a, r));
      let o = this.niveles.x > 0 || this.niveles.y > 0;
      ((this.mesh.visible = o), o && this.apply(), this.atenderCursor());
    }
    encender() {
      this.estado === `entrando` ||
        this.estado === `encendida` ||
        ((this.estado = `entrando`), (this.t = 0));
    }
    apagar() {
      this.estado === `apagada` ||
        this.estado === `saliendo` ||
        ((this.nivelSalida = Math.max(this.niveles.x, this.niveles.y)),
        (this.estado = `saliendo`),
        (this.t = 0));
    }
    avanzarNeon(e, t) {
      let n = this.config,
        r = Math.max(0.05, n.entrada),
        i = Math.max(0, n.cascadaEntrada),
        a = 0,
        o = 0;
      if (
        (this.estado === `entrando` &&
          ((a = this.nivelEntrada(this.t, 0, r, t)),
          (o = this.nivelEntrada(this.t - i, 1, r, t)),
          t ? this.barrido.set(1, 0, 1, 0) : this.barrido.set(0, 0, 0, 0),
          this.t >= r + i && ((this.estado = `encendida`), (this.reloj = 0))),
        this.estado === `encendida`)
      )
        ((this.reloj += e),
          (a = o = 1),
          t || this.pulsacion !== null
            ? this.barrido.set(1, 0, 1, 0)
            : this.barrer());
      else if (this.estado === `saliendo`) {
        let e = this.nivelSalida * (1 - this.t / Math.max(0.01, n.salida));
        (e <= 0 && (this.estado = `apagada`), (a = o = Math.max(0, e)));
      }
      this.niveles.set(a, o);
    }
    nivelEntrada(e, t, n, r) {
      if (e <= 0) return 0;
      let i = e / n;
      return i >= 1
        ? 1
        : r
          ? i
          : ra(Math.floor(e * Math.max(1, this.config.titileoHz)) + t * 17.3) <
              0.2 + 0.8 * i
            ? 1
            : 0.06;
    }
    barrer() {
      let e = this.config,
        t = p.clamp(e.desfase, 0, 0.9),
        n = Math.max(0.01, e.llenado),
        r = Math.max(0, e.mantener),
        i = Math.max(0.01, e.vaciado),
        a = (1 - t) / (n + r + i);
      a < 1 && ((n *= a), (r *= a), (i *= a));
      let o = na(this.reloj / Math.max(0.1, e.periodo)),
        s = (e, a) => {
          let s = e * t + (a ? 0 : n + r);
          return p.clamp((o - s) / (a ? n : i), 0, 1);
        };
      this.barrido.set(s(0, !0), s(0, !1), s(1, !0), s(1, !1));
    }
    get tocable() {
      return (
        this.estado === `encendida` ||
        (this.estado === `entrando` && this.t > 0.15)
      );
    }
    alPulsar = (e) => {
      if (
        !(!this.tocable || this.pulsacion) &&
        !(e.pointerType === `mouse` && e.button !== 0) &&
        !(!this.puntero.apuntar(e.clientX, e.clientY) || !this.picar())
      ) {
        this.pulsacion = { id: e.pointerId, x: e.clientX, y: e.clientY, t: 0 };
        try {
          this.lienzo?.setPointerCapture(e.pointerId);
        } catch {}
      }
    };
    alMover = (e) => {
      let t = this.pulsacion;
      !t ||
        e.pointerId !== t.id ||
        (Math.hypot(e.clientX - t.x, e.clientY - t.y) >
          this.config.umbralArrastre &&
          (this.pulsacion = null));
    };
    alSoltar = (e) => {
      let t = this.pulsacion;
      !t ||
        e.pointerId !== t.id ||
        ((this.pulsacion = null),
        (this.tragarClickHasta = performance.now() + 600),
        t.t < this.config.demoraPulsado && (this.saltoPendiente = !0));
    };
    alClick = (e) => {
      performance.now() > this.tragarClickHasta ||
        ((this.tragarClickHasta = 0),
        e.stopImmediatePropagation(),
        e.preventDefault());
    };
    alCancelar = (e) => {
      this.pulsacion &&
        e.pointerId === this.pulsacion.id &&
        (this.pulsacion = null);
    };
    alMenuContextual = (e) => {
      this.pulsacion && e.preventDefault();
    };
    atenderCursor() {
      if (!this.puntero.pendiente && !(this.cursorPuesto && !this.tocable))
        return;
      this.puntero.atendido();
      let e = this.tocable && this.puntero.sobre && this.picar();
      e === this.cursorPuesto ||
        !this.lienzo ||
        ((this.cursorPuesto = e),
        (this.lienzo.style.cursor = e ? `pointer` : ``));
    }
    picar() {
      let e = this.camara,
        t = this.tubo;
      if (!e || !t || t.sueloY === null) return !1;
      let n = this.config,
        r = I.resolver(n.distancia),
        i = I.resolver(n.separacion),
        a = 0.5 * I.resolver(n.ancho),
        o = 0.5 * I.resolver(n.largo),
        s = Math.max(0, I.resolver(n.margenToque));
      (e.updateMatrixWorld(),
        this.raycaster.setFromCamera(this.puntero.ndc, e),
        this.plano.normal.set(0, 1, 0));
      let c = -(r + 0.5 * i);
      for (let e = 0; e < 2; e += 1) {
        if (
          (t.centroEn(c, this.tmpCentro),
          (this.plano.constant = -(t.sueloY + n.altura + this.tmpCentro.y)),
          !this.raycaster.ray.intersectPlane(this.plano, this.tmpPunto))
        )
          return !1;
        c = this.tmpPunto.z;
      }
      let l = -this.tmpPunto.z;
      return l < r - o - s || l > r + i + o + s
        ? !1
        : (t.centroEn(this.tmpPunto.z, this.tmpCentro),
          Math.abs(this.tmpPunto.x - this.tmpCentro.x) <= a + s);
    }
    dispose() {
      (this.desactivarInteraccion(),
        this.mesh.removeFromParent(),
        this.geometria.dispose(),
        this.material.dispose());
    }
  };
function na(e) {
  return e - Math.floor(e);
}
function ra(e) {
  return na(Math.sin(e * 127.1 + 311.7) * 43758.5453);
}
function ia() {
  let e = new Float32Array(180),
    t = new Float32Array(90),
    n = [];
  for (let r = 0; r < 2; r += 1) {
    let i = r * 45;
    for (let n = 0; n <= $i; n += 1)
      for (let a = 0; a <= Qi; a += 1) {
        let o = i + n * 9 + a;
        ((e[o * 2] = (a / Qi) * 2 - 1),
          (e[o * 2 + 1] = (n / $i) * 2 - 1),
          (t[o] = r));
      }
    for (let e = 0; e < $i; e += 1)
      for (let t = 0; t < Qi; t += 1) {
        let r = i + e * 9 + t,
          a = r + 1,
          o = r + Qi + 1,
          s = o + 1;
        n.push(r, a, o, a, s, o);
      }
  }
  let r = new ne();
  return (
    r.setAttribute(`position`, new w(new Float32Array(270), 3)),
    r.setAttribute(`aLocal`, new w(e, 2)),
    r.setAttribute(`aGalon`, new w(t, 1)),
    r.setIndex(n),
    (r.boundingSphere = new f(new b(), 1e4)),
    r
  );
}
var aa = `
#include <common>
#include <fog_pars_vertex>

attribute vec2 aLocal;   // (-1..1 a lo ancho, -1..1 a lo largo, +1 = hacia delante)
attribute float aGalon;  // 0 el cercano, 1 el lejano

uniform float uRadius;
uniform float uArco;
uniform float uOjo;
uniform float uDistancia;
uniform float uSeparacion;
uniform vec2 uCaja;
uniform float uAltura;
uniform vec2 uNivel;
uniform vec4 uBarrido;

varying vec2 vLocal;
flat varying float vNivel;
flat varying vec2 vBarrido;

${rt}
${dt}
// Nada de acentos graves en estos comentarios: el GLSL vive en un template literal de JS.

void main() {
  vNivel = aGalon < 0.5 ? uNivel.x : uNivel.y;
  vBarrido = aGalon < 0.5 ? uBarrido.xy : uBarrido.zw;
  // Galon apagado: fuera del volumen de recorte, ni se rasteriza.
  if (vNivel <= 0.0) {
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
    return;
  }
  vLocal = aLocal * uCaja;
  float profundidad = uDistancia + aGalon * uSeparacion + vLocal.y;
  // El doblado en la profundidad de CADA vertice: la flecha se curva con la pista y no la atraviesa.
  vec2 curva = bovedaCurva(profundidad);
  vec3 posicion = vec3(vLocal.x + curva.x, bovedaSueloY() + uAltura + curva.y, -profundidad);

  // El nombre importa: el chunk <fog_vertex> de Three lee una variable llamada mvPosition.
  vec4 mvPosition = modelViewMatrix * vec4(posicion, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  #include <fog_vertex>
}
`,
  oa = `
#include <common>
#include <fog_pars_fragment>

uniform float uAncho;
uniform float uLargo;
uniform float uGrosor;
uniform float uLinea;
uniform float uRelleno;
uniform float uNucleo;
uniform float uHalo;
uniform float uHaloFuerza;
uniform vec3 uColor;
uniform float uPotencia;
uniform float uBase;
uniform float uCabeza;
uniform float uSuave;

varying vec2 vLocal;
flat varying float vNivel;
flat varying vec2 vBarrido;

void main() {
  // Distancia a la V: la punta hacia delante y los dos brazos hacia la camara. Con el valor absoluto
  // de x basta un solo brazo.
  vec2 p = vec2(abs(vLocal.x), vLocal.y);
  vec2 a = vec2(0.0, 0.5 * uLargo);
  vec2 b = vec2(0.5 * uAncho, -0.5 * uLargo);
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  float d = length(pa - ba * h);
  // Antialias con la derivada: la pista se ve de refilon y el tubo es fino en pantalla.
  float aa = max(fwidth(d), 1e-4);

  // El tubo de neon: un contorno que brilla, un interior mas tenue y un resplandor corto fuera.
  float dentro = 1.0 - smoothstep(uGrosor - aa, uGrosor + aa, d);
  float contorno = 1.0 - smoothstep(uLinea - aa, uLinea + aa, abs(d - (uGrosor - uLinea)));
  float fuera = exp(-max(d - uGrosor, 0.0) / uHalo) * uHaloFuerza * (1.0 - dentro);
  float forma = max(contorno, dentro * uRelleno) + fuera;

  // El barrido: s va de 0 en la punta de cada brazo a 1 en la punta de la flecha. Encendido entre la
  // cola y la cabeza, con los bordes suaves; fuera, al nivel base. La cabeza lleva un destello que
  // nace y muere con el recorrido (seno), para que no aparezca de golpe en los extremos.
  float s = 1.0 - h;
  float cabeza = vBarrido.x;
  float cola = vBarrido.y;
  float lleno = smoothstep(cola - uSuave, cola, s) * (1.0 - smoothstep(cabeza, cabeza + uSuave, s));
  lleno *= step(0.0001, cabeza);
  float destello = uCabeza * sin(PI * clamp(cabeza, 0.0, 1.0)) * exp(-abs(s - cabeza) / max(uSuave, 1e-3));
  float energia = mix(uBase, 1.0, lleno) + destello;

  vec3 color = mix(uColor, vec3(1.0), clamp(contorno * uNucleo + destello * 0.5, 0.0, 1.0));
  gl_FragColor = vec4(color * (forma * energia * uPotencia * vNivel), 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}
`,
  sa = {
    activo: !0,
    opacidad: z(0.18, 0),
    paso: 2.2,
    retranqueo: 0.35,
    altura: 0.02,
    ambiente: 0.65,
    vida: 26,
    sube: 0.05,
    haciaCentro: 0.22,
    aplastadoAncho: 2.6,
    aplastadoAlto: 0.34,
    apoyo: 0.95,
    tamanoInicio: 1.25,
    tamanoFin: 3.8,
    giro: 0.07,
    racha: 0.25,
    densidad: {
      hero: 0,
      eventos: 0.32,
      dj: 1.35,
      galeria: 0.5,
      proyeccion: 1.21,
      contacto: 0.55,
    },
    meseta: 12,
    veta: 1.13,
    detalle: 0.08,
    filo: 0.75,
    color: `#b9b2bd`,
    colorSuelo: `#ff5263`,
    luz: 0.8,
    soloConLuz: 0.42,
    techo: 3,
    cercaDesde: 1.5,
    cercaHasta: 7,
    alcance: 40,
  };
function ca() {
  return { ...sa, opacidad: { ...sa.opacidad }, densidad: { ...sa.densidad } };
}
var la = Sn,
  X = 256,
  ua = [4, 8, 16, 32];
function da(e, t, n) {
  let r = (e * 374761393 + t * 668265263 + n * 0x14057b7ef7678100) | 0;
  return (
    (r = (r ^ (r >>> 13)) * 1274126177),
    (r ^= r >>> 16),
    ((r >>> 0) % 65536) / 65535
  );
}
function fa(e) {
  return e * e * (3 - 2 * e);
}
function pa(e, t, n, r) {
  let i = X / t;
  for (let a = 0; a < X; a += 1) {
    let o = Math.floor(a / i),
      s = fa(a / i - o),
      c = o % t,
      l = (o + 1) % t;
    for (let o = 0; o < X; o += 1) {
      let u = Math.floor(o / i),
        d = fa(o / i - u),
        f = u % t,
        p = (u + 1) % t,
        m = da(f, c, r),
        h = da(p, c, r),
        g = da(f, l, r),
        _ = da(p, l, r),
        v = m + (h - m) * d,
        y = g + (_ - g) * d;
      e[a * X + o] += n * (v + (y - v) * s);
    }
  }
}
function ma(e, t = 0) {
  let n = new Float32Array(X * X),
    r = 0;
  for (let i = t; i < ua.length; i += 1) {
    let a = 1 / 2 ** (i - t);
    ((r += a), pa(n, ua[i], a, e + i * 977));
  }
  for (let e = 0; e < n.length; e += 1) n[e] /= r;
  return n;
}
var ha = null;
function ga() {
  if (ha) return ha;
  let e = ma(11),
    t = ma(3301),
    n = ma(7717),
    r = ma(5099, 2),
    i = new Uint8Array(X * X * 4);
  for (let a = 0; a < X * X; a += 1)
    ((i[a * 4] = Math.round(e[a] * 255)),
      (i[a * 4 + 1] = Math.round(t[a] * 255)),
      (i[a * 4 + 2] = Math.round(n[a] * 255)),
      (i[a * 4 + 3] = Math.round(r[a] * 255)));
  let o = new ue(i, X, X, te);
  return (
    (o.name = `HoyoRuidoHumo`),
    (o.wrapS = a),
    (o.wrapT = a),
    (o.minFilter = _),
    (o.magFilter = _),
    (o.generateMipmaps = !1),
    (o.needsUpdate = !0),
    (ha = o),
    o
  );
}
var _a = 0.35,
  va = class {
    config;
    mesh;
    material;
    geometria;
    densidades;
    datos = new Uint8Array(256);
    porLado = 0;
    activa = !1;
    hayHumoCerca = !0;
    avanceMirado = NaN;
    tiempo = 0;
    recorrido = { ...V };
    eventos = 4;
    claves = [];
    tmpColor = new E();
    constructor(e, r, i, o, c) {
      ((this.config = c),
        (this.densidades = new ue(this.datos, 256, 1, g)),
        (this.densidades.name = `HoyoHumoDensidades`),
        (this.densidades.wrapS = a),
        (this.densidades.minFilter = _),
        (this.densidades.magFilter = _),
        (this.densidades.generateMipmaps = !1),
        (this.densidades.needsUpdate = !0),
        (this.material = new t({
          name: `HoyoHumoTunel`,
          uniforms: {
            ...n.clone(M.fog),
            ...r,
            ...i,
            ...o,
            uRuido: { value: ga() },
            uDensidades: { value: this.densidades },
            uDensidadMax: { value: 2 },
            uTiempo: { value: 0 },
            uOpacidad: { value: 0 },
            uLinea: { value: new b(c.retranqueo, c.altura, c.alcance) },
            uVida: { value: new s(c.vida, c.sube, c.haciaCentro, c.giro) },
            uTamano: { value: new v(c.tamanoInicio, c.tamanoFin) },
            uForma: {
              value: new b(c.aplastadoAncho, c.aplastadoAlto, c.apoyo),
            },
            uAmbiente: { value: c.ambiente },
            uRacha: { value: c.racha },
            uVeta: { value: c.veta },
            uDetalle: { value: c.detalle },
            uFilo: { value: c.filo },
            uColor: { value: new E(c.color) },
            uColorSuelo: { value: new E(c.colorSuelo) },
            uLuzTecho: { value: new E(16777215) },
            uLuz: { value: c.luz },
            uSoloConLuz: { value: c.soloConLuz },
            uTecho: { value: c.techo },
            uCerca: { value: new v(c.cercaDesde, c.cercaHasta) },
            uMuro: { value: new s(0, 0, 0, 0) },
            uMuroConv: { value: new b(1, 0, _a) },
          },
          vertexShader: ba,
          fragmentShader: xa,
          fog: !0,
          transparent: !0,
          depthWrite: !1,
          premultipliedAlpha: !0,
          side: 2,
        })),
        (this.geometria = ya(0)),
        (this.mesh = new T(this.geometria, this.material)),
        (this.mesh.name = `HoyoHumoTunel`),
        (this.mesh.frustumCulled = !1),
        (this.mesh.renderOrder = 2),
        (this.mesh.visible = !1),
        e.add(this.mesh),
        this.apply());
    }
    setActive(e) {
      ((this.activa = e), (this.mesh.visible = this.visibleAhora()));
    }
    visibleAhora() {
      return (
        this.activa &&
        this.config.activo &&
        this.hayHumoCerca &&
        this.material.uniforms.uOpacidad.value > 0.001
      );
    }
    setAvance(e) {
      if (Math.abs(e - this.avanceMirado) < 0.5) return;
      this.avanceMirado = e;
      let t = Math.max(1e-6, this.recorrido.vuelta),
        n = this.material.uniforms.uMargenDetras?.value ?? 10,
        r = Math.max(5, this.config.alcance),
        i = Math.floor(((e - n) / t) * 256) - 1,
        a = Math.ceil(((e + r) / t) * 256) + 1,
        o = !1;
      for (let e = i; e <= a && !o; e += 1)
        this.datos[p.euclideanModulo(e, 256)] > 0 && (o = !0);
      ((this.hayHumoCerca = o), (this.mesh.visible = this.visibleAhora()));
    }
    setRecorrido(e, t) {
      ((this.recorrido = e),
        (this.eventos = t),
        this.sembrar(),
        this.hornear());
    }
    apply() {
      let e = this.config,
        t = this.material.uniforms;
      (this.sembrar(),
        t.uLinea.value.set(
          Math.max(0, e.retranqueo),
          e.altura,
          Math.max(5, e.alcance),
        ),
        t.uVida.value.set(Math.max(0.5, e.vida), e.sube, e.haciaCentro, e.giro),
        t.uTamano.value.set(
          Math.max(0.05, e.tamanoInicio),
          Math.max(0.05, e.tamanoFin),
        ),
        t.uForma.value.set(
          Math.max(0.2, e.aplastadoAncho),
          Math.max(0.05, e.aplastadoAlto),
          Math.max(0, e.apoyo),
        ),
        (t.uAmbiente.value = p.clamp(e.ambiente, 0, 1)),
        (t.uRacha.value = p.clamp(e.racha, 0, 1)),
        (t.uVeta.value = Math.max(0.02, e.veta)),
        (t.uDetalle.value = p.clamp(e.detalle, 0, 1)),
        (t.uFilo.value = p.clamp(e.filo, 0.02, 1)),
        t.uColor.value.set(e.color),
        t.uColorSuelo.value.set(e.colorSuelo),
        (t.uLuz.value = p.clamp(e.luz, 0, 1)),
        (t.uSoloConLuz.value = p.clamp(e.soloConLuz, 0, 1)),
        (t.uTecho.value = Math.max(0.2, e.techo)),
        t.uCerca.value.set(
          e.cercaDesde,
          Math.max(e.cercaDesde + 0.1, e.cercaHasta),
        ));
      let n = Math.max(0, I.resolver(e.opacidad));
      ((t.uOpacidad.value = n),
        this.hornear(),
        (this.mesh.visible = this.visibleAhora()));
    }
    sembrar() {
      let e = Math.max(1e-6, this.recorrido.vuelta),
        t = p.clamp(Math.round(e / Math.max(0.3, this.config.paso)), 4, 900);
      t !== this.porLado &&
        (this.geometria.dispose(),
        (this.geometria = ya(t)),
        (this.mesh.geometry = this.geometria),
        (this.porLado = t));
    }
    hornear() {
      let e = Math.max(1e-6, this.recorrido.vuelta),
        t = this.config;
      this.claves.length = 0;
      for (let n of la) {
        if (n === `eventos` && this.eventos <= 0) continue;
        let r = p.clamp((t.densidad[n] ?? 0) / 2, 0, 1);
        this.claves.push({
          seccion: n,
          avance: p.euclideanModulo(this.recorrido[n], e),
          color: new E().setRGB(r, r, r),
        });
      }
      this.claves.sort((e, t) => e.avance - t.avance);
      let n = Math.max(0, t.meseta);
      for (let t = 0; t < 256; t += 1) {
        let r = Dn(((t + 0.5) / 256) * e, e, this.claves, n, this.tmpColor).r;
        this.datos[t] = Math.round(p.clamp(r, 0, 1) * 255);
      }
      ((this.densidades.needsUpdate = !0), (this.avanceMirado = NaN));
    }
    setColorLuz(e) {
      this.material.uniforms.uLuzTecho.value.copy(e);
    }
    setMuro(e) {
      let t = this.material.uniforms.uMuro.value;
      if (!e) {
        t.set(0, 0, 0, 0);
        return;
      }
      (t.set(
        Math.sign(e.lado),
        e.separacion,
        e.profundidad,
        Math.max(0, e.largo),
      ),
        this.material.uniforms.uMuroConv.value.set(
          Math.cos(e.convergencia),
          Math.sin(e.convergencia),
          _a,
        ));
    }
    update(e, t = !1) {
      if (!this.mesh.visible) return;
      let n = t || !Number.isFinite(e) ? 0 : Math.min(Math.max(e, 0), 0.1);
      ((this.tiempo += n),
        (this.material.uniforms.uTiempo.value = this.tiempo));
    }
    dispose() {
      (this.geometria.dispose(),
        this.densidades.dispose(),
        this.material.dispose(),
        this.mesh.removeFromParent());
    }
  };
function ya(e) {
  let t = e * 2,
    n = new Float32Array(t * 4),
    r = new Float32Array(t * 4),
    i = new Float32Array(t * 4),
    a = new Float32Array(t * 4 * 2),
    o = new Uint32Array(t * 6),
    s = [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ];
  for (let c = 0; c < t; c += 1) {
    let t = Math.floor(c / 2) / Math.max(1, e),
      l = (c * 0.6180339887 + (c % 2) * 0.5) % 1;
    for (let e = 0; e < 4; e += 1) {
      let o = c * 4 + e;
      ((n[o] = t),
        (r[o] = c % 2 == 0 ? -1 : 1),
        (i[o] = l),
        (a[o * 2] = s[e][0]),
        (a[o * 2 + 1] = s[e][1]));
    }
    let u = c * 4;
    o.set([u, u + 1, u + 2, u + 1, u + 3, u + 2], c * 6);
  }
  let c = new ne();
  return (
    c.setAttribute(`position`, new w(new Float32Array(t * 4 * 3), 3)),
    c.setAttribute(`aIndice`, new w(n, 1)),
    c.setAttribute(`aLado`, new w(r, 1)),
    c.setAttribute(`aSuerte`, new w(i, 1)),
    c.setAttribute(`aEsquina`, new w(a, 2)),
    c.setIndex(new w(o, 1)),
    (c.boundingSphere = new f(new b(), 1e4)),
    c
  );
}
var ba = `
#include <common>
#include <fog_pars_vertex>

attribute float aIndice;   // 0..1, su sitio fijo en la vuelta
attribute float aLado;     // -1 la junta de la izquierda, 1 la de la derecha
attribute float aSuerte;   // 0..1, su desfase, su tamano, su giro y su trozo de textura
attribute vec2 aEsquina;   // -1..1 en las dos, las cuatro esquinas del cuadro

uniform float uAdvance;
uniform float uLoop;
uniform float uRadius;
uniform float uArco;
uniform float uOjo;
uniform float uMargenDetras;
uniform float uTiempo;
uniform vec3 uLinea;       // (retranqueo, altura de la boca, alcance)
uniform vec4 uVida;        // (vida en s, sube u/s, se abre u/s, giro en vueltas)
uniform vec2 uTamano;      // (al salir, al final)
uniform vec3 uForma;       // (mas ancha al nacer, mas baja al nacer, cuanto se apoya en la pista)
uniform float uAmbiente;
uniform float uTecho;
uniform vec3 uLuzTecho;
uniform float uSoloConLuz;
uniform vec2 uCerca;
uniform float uRacha;
uniform vec4 uMuro;        // (lado -1/1 y 0 = no hay, separacion, profundidad del centro, largo)
uniform vec3 uMuroConv;    // (cos, sin) de su convergencia y cuanto se queda el humo por dentro
uniform sampler2D uDensidades;
uniform float uDensidadMax;

varying vec2 vEsquina;
// La x del punto en el tunel SIN la curva de la trayectoria, que es la coordenada en la que el muro
// dice donde esta su cara. Interpola, asi que el corte del fragmento es por pixel.
varying float vX;
// Constantes en toda la bocanada: se resuelven una vez por vertice y el fragmento solo las lee.
flat varying float vAlfa;
flat varying float vSilueta;
flat varying vec2 vCelda;
flat varying float vAbajo;
flat varying vec2 vMuro;   // (lado del muro o 0, x de su cara a esta profundidad)

${rt}
${dt}
${Pe}
// Nada de acentos graves en estos comentarios: el GLSL vive en un template literal de JS.

void main() {
  // Su sitio en la vuelta es FIJO: lo que corre es su reloj. Por eso el humo se queda en la sala y
  // por eso el bucle cierra exacto, sin nada que cuadrar.
  float avance = aIndice * uLoop;
  float prof = mod(avance - uAdvance + uMargenDetras, uLoop) - uMargenDetras;

  // Su reloj: sale, sube y se deshace. El desfase lo pone su suerte, asi que la linea echa humo de
  // forma continua en vez de soltar todas a la vez.
  float vida = max(0.5, uVida.x);
  float t = fract(uTiempo / vida + aSuerte);

  // Cuanto humo hay en su tramo (tabla horneada por vuelta, misma curva que el color del techo) y si
  // su tramo esta encendido.
  float densidad = texture2D(uDensidades, vec2(aIndice, 0.5)).r * uDensidadMax;
  float nivel = hoyoIgnicion(abs(prof));

  // Las rachas: la emision sube y baja por el tunel y con el tiempo. Sin esto la linea echa humo
  // constante y se lee como una alfombra.
  float onda = 0.5 + 0.5 * sin(avance * 0.35 + uTiempo * 0.6 + aSuerte * 6.2831);
  float emision = mix(1.0, onda, uRacha);

  // Se disuelve por OPACIDAD, no encogiendose: entra deprisa y se va apagando durante casi toda su
  // vida mientras se sigue hinchando. Es la diferencia entre humo que se disipa en el ambiente y un
  // circulo que se abre y se cierra, que es lo que se veia cuando la vida entraba en la silueta.
  float ciclo = smoothstep(0.0, 0.08, t) * pow(1.0 - t, 1.6);
  // Y se deshace pegada a la camara: sin esto, atravesar una bocanada es un fogonazo de pantalla.
  float cerca = smoothstep(uCerca.x, uCerca.y, prof);
  vAlfa = densidad * nivel * emision * ciclo * cerca;

  // La silueta es SUYA y no cambia con la vida: unas son mas compactas y otras mas deshilachadas.
  vSilueta = mix(0.78, 1.0, fract(aSuerte * 2.7));

  if (prof > uLinea.z || prof < -uMargenDetras || vAlfa <= 0.004) {
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
    return;
  }

  // LA PARED de la sala de Contacto, si la hay a esta profundidad. La cuenta es la MISMA que hace
  // el vertex del muro (sala-contacto.ts): x = lado * (separacion - largo * sin de la
  // convergencia). Fuera de su tramo el lado se queda en 0 y nada de esto pesa.
  float ladoMuro = uMuro.x;
  float cara = 0.0;
  if (ladoMuro != 0.0) {
    float largoMuro = (prof - uMuro.z) / max(0.05, uMuroConv.x);
    if (abs(largoMuro) <= uMuro.w * 0.5) cara = max(0.0, uMuro.y - largoMuro * uMuroConv.y);
    else ladoMuro = 0.0;
  }

  // De donde sale: la junta entre el suelo y la boveda. Con uAmbiente > 0 las bocanadas nacen
  // repartidas hacia el centro del pasillo en vez de todas en la linea, que es lo que separa "dos
  // chorros" de "humo que hay en la sala".
  vec2 curva = bovedaCurva(prof);
  float semi = max(0.0, bovedaSemiancho() - uLinea.x);
  // Por el lado del muro la sala acaba en el hormigon y no en el borde del suelo: la bocanada nace
  // DENTRO. Su sitio en la vuelta es fijo y el muro viaja con su seccion, asi que una que nace
  // dentro se queda dentro y esto no parpadea con el scroll.
  float semiLado = (ladoMuro == aLado) ? min(semi, max(0.0, cara - uMuroConv.z)) : semi;
  float dentro = uAmbiente * semiLado * fract(aSuerte * 4.7 + aIndice * 2.3);
  float bordeX = aLado * (semiLado - dentro);
  // Y lo que ha hecho desde que salio: subir y abrirse hacia el centro del pasillo.
  float sube = uLinea.y + t * uVida.y * vida;
  float abre = t * uVida.z * vida;

  // Se hincha mientras se deshace, y cada una con su tamano: con mas rango, dos bocanadas vecinas no
  // se leen como la misma pieza repetida.
  float tam = mix(uTamano.x, uTamano.y, t) * mix(0.55, 1.6, aSuerte);
  // Nace APLASTADA —un humo que toca el suelo se extiende por el— y se va volviendo bola al subir.
  vec2 radio = vec2(tam * mix(uForma.x, 1.0, t), tam * mix(uForma.y, 1.0, t));
  // Y APOYADA en la pista, no atravesandola: centrada en la junta, la pista le corta media figura
  // con su profundidad y lo que se ve es la linea del suelo partiendo el humo.
  vec2 centro = vec2(bordeX - aLado * abre, bovedaSueloY() + radio.y * uForma.z + sube) + curva;

  // El giro entra cuando ya esta redonda: inclinar la tortita del suelo la despegaria de el.
  float angulo = (aSuerte * 6.2831 + t * uVida.w * 6.2831) * smoothstep(0.1, 0.55, t);
  float co = cos(angulo);
  float si = sin(angulo);
  vec2 e = vec2(aEsquina.x * co - aEsquina.y * si, aEsquina.x * si + aEsquina.y * co) * radio;

  vEsquina = aEsquina;
  // Lo que el fragmento necesita para que la pared lo corte: su x en el tunel (sin la curva, que es
  // la misma para el muro y para la bocanada porque las dos se miden a ESTA profundidad) y donde
  // esta la cara. Va en el vertice: el cuadro es plano en XY, asi que la cara es la misma para toda
  // la bocanada.
  vX = centro.x + e.x - curva.x;
  vMuro = vec2(ladoMuro, ladoMuro * cara);
  vCelda = vec2(fract(aSuerte * 7.3), fract(aSuerte * 3.1 + aIndice));
  // Es un TAPETE, no una nube a media altura: lo que sube se apaga aunque le quede vida. Y la misma
  // altura dice cuanta luz de la pista recoge (abajo) y cuanta del techo (arriba).
  float altura = clamp(sube / max(0.2, uTecho), 0.0, 1.0);
  vAbajo = 1.0 - altura;
  vAlfa *= 1.0 - smoothstep(0.45, 1.0, altura);

  // Se ve donde hay luz, y casi no se ve donde no la hay: el humo no es una capa pintada encima, es
  // materia que solo se nota cuando algo la alumbra. El brillo lo da la luz del tramo (la misma que
  // el techo). No es la luz de CADA foco: el humo no recibe las luces de la escena.
  float brillo = dot(uLuzTecho, vec3(0.2126, 0.7152, 0.0722));
  vAlfa *= mix(1.0, smoothstep(0.02, 0.55, brillo), uSoloConLuz);

  vec3 posicion = vec3(centro.x + e.x, centro.y + e.y, -prof);

  // El nombre importa: el chunk <fog_vertex> de Three lee una variable llamada mvPosition.
  vec4 mvPosition = modelViewMatrix * vec4(posicion, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  #include <fog_vertex>
}
`,
  xa = `
#include <common>
#include <fog_pars_fragment>

uniform sampler2D uRuido;
uniform float uOpacidad;
uniform float uVeta;
uniform float uDetalle;
uniform float uFilo;
uniform vec3 uColor;
uniform vec3 uColorSuelo;
uniform vec3 uLuzTecho;
uniform float uLuz;

varying vec2 vEsquina;
varying float vX;
flat varying float vAlfa;
flat varying float vSilueta;
flat varying vec2 vCelda;
flat varying float vAbajo;
flat varying vec2 vMuro;

// Nada de acentos graves en estos comentarios: el GLSL vive en un template literal de JS.

void main() {
  // LA PARED CORTA EL HUMO. Lo que cae al otro lado de la cara esta dentro del hormigon, y se veia
  // flotando por delante de la pared porque la bocanada es un cuadro plano y su profundidad es
  // menor que la del punto en el que el rayo entra en el muro. Con el lado a 0 (fuera del tramo del
  // muro, o sin muro) esto es siempre falso. Va primero: es una multiplicacion y una comparacion.
  if (vMuro.x * (vX - vMuro.y) > 0.0) discard;
  // La bocanada es redonda: fuera de su circulo no hay nada que calcular. Va antes de la textura
  // para que los pixeles de las esquinas del cuadro no lleguen ni a muestrearla.
  float r2 = dot(vEsquina, vEsquina);
  if (r2 >= 1.0) discard;
  // Caida MUY blanda hacia fuera. Lo que se ve en pantalla no es una bocanada: es la suma de muchas
  // pasando unas por delante de otras, asi que ninguna puede tener contorno propio.
  float forma = pow(1.0 - r2, 1.7);

  // La mascara de la EROSION no lleva la vida dentro a proposito: si la llevara, al apagarse la
  // bocanada el umbral subiria y solo quedarian los picos del centro, que se ve como un iris
  // cerrandose. La vida va en el alfa, al final, y lo unico que hace es disolverla.
  float mascara = clamp(forma * vSilueta, 0.0, 1.0);
  if (mascara <= 0.003) discard;

  // La veta y su detalle fino, horneados: una sola muestra para las dos (canales R y A). Cada
  // bocanada lee su trozo de textura, asi que no se repiten entre ellas.
  vec4 ruido = texture2D(uRuido, vCelda + vEsquina * uVeta);
  float veta = clamp(ruido.r + uDetalle * 0.7 * (ruido.a - 0.5), 0.0, 1.0);

  // EROSION, y no un degradado: lo que decide si hay humo en un pixel es si la veta LLEGA al umbral
  // que pone la mascara, asi que el borde lo dibuja el ruido. Donde la mascara vale poco solo pasan
  // los picos (jirones); donde vale mucho, pasa entera. Recortar con un degradado es lo que dejaba
  // los cantos del cuadro a la vista.
  float trozo = smoothstep(1.0 - mascara - uFilo, 1.0 - mascara + uFilo, veta);
  // Y el borde se apaga OTRA VEZ al final: la erosion rompe la silueta, pero por si sola deja un filo
  // —duro o blando, pero filo—, y lo que no puede haber es un limite que se lea como el canto de la
  // pieza. Con esto el ultimo tercio del radio se va a nada pase lo que pase con el ruido.
  float apagado = 1.0 - smoothstep(0.35, 1.0, r2);
  float alfa = clamp(uOpacidad * vAlfa * trozo * apagado, 0.0, 1.0);
  if (alfa <= 0.002) discard;

  // El humo RECOGE LA LUZ DE LA SALA: el de abajo, el de la pista; el de arriba, el color del techo
  // que toca a ese punto de la vuelta. Con uLuz a 0 se queda con su gris —y vuelve a leerse como una
  // calcomania encima de la escena, que es lo que lo separaba de la referencia del equipo—.
  vec3 sala = mix(uLuzTecho, uColorSuelo, vAbajo * 0.55);
  // Se TINE y se aclara donde la sala ilumina; no se vuelve del color de la luz. En la referencia el
  // humo es blanco caliente bajo las tiras, no naranja: lo que cambia es el tono, no la identidad.
  vec3 color = mix(uColor, uColor * (0.5 + 1.2 * sala), uLuz);

  // Se resuelve el color OPACO —tono, niebla y salida— y solo al final se premultiplica por el alfa,
  // que es lo que espera el premultipliedAlpha del material.
  gl_FragColor = vec4(color, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>

  gl_FragColor = vec4(gl_FragColor.rgb * alfa, alfa);
}
`,
  Sa = `cartelas`,
  Ca = class {
    group = new D();
    config;
    motion;
    tunnel;
    entradas = [];
    raizGlb = null;
    sombras = null;
    pendiente = null;
    ignicion = null;
    hologramas = new Map();
    disposed = !1;
    decorado = !1;
    ventanaDelante = 38;
    ventanaDetras = 10;
    disolucionNav = null;
    dormidas = !1;
    colorAplicado = ``;
    neonAplicado = !1;
    neonReflejoAplicado = !0;
    bloom = null;
    tmpCaja = new O();
    tmpTamano = new b();
    tmpCentro = new b();
    tmpObjetivo = new b();
    tmpEuler = new r();
    tmpQuat = new P();
    constructor(e, t, n, r) {
      ((this.tunnel = t),
        (this.config = n),
        (this.motion = new R(t, r, `titulos`)),
        (this.group.name = `HoyoTunnelTitulos`),
        e.add(this.group));
    }
    setHolograma(e, t) {
      let n = this.entradas.find((t) => t.clave === e);
      if (n) {
        (n.holograma?.apagar(),
          (n.holograma = t?.pieza(!0) ?? null),
          n.holograma?.adoptar(n.raiz),
          this.colgarSombra(n));
        return;
      }
      this.hologramas.set(e, t);
    }
    setSombras(e) {
      (this.soltarSombras(), (this.sombras = e));
      for (let e of this.entradas) this.colgarSombra(e);
    }
    colgarSombra(e) {
      if ((this.soltarSombraDe(e), !this.sombras)) return;
      let t = e.raiz.geometry,
        n = t?.getAttribute(`position`);
      if (!n) return;
      let r = Math.max(1, Math.min(16, Math.round(this.config.sombraTramos)));
      t.computeBoundingBox();
      let i = t.boundingBox;
      if (!i) return;
      let a = i.min.x,
        o = Math.max(1e-4, i.max.x - a),
        s = Array.from({ length: r }, () => new O());
      for (let e = 0; e < n.count; e += 1)
        (this.tmpCentro.fromBufferAttribute(n, e),
          s[
            Math.min(r - 1, Math.floor(((this.tmpCentro.x - a) / o) * r))
          ]?.expandByPoint(this.tmpCentro));
      for (let t of s) {
        if (t.isEmpty()) continue;
        t.getSize(this.tmpTamano).multiplyScalar(0.5);
        let n = new b(
            Math.max(this.tmpTamano.x, o / r / 2),
            Math.max(this.tmpTamano.y, 0.05),
            Math.max(this.tmpTamano.z, 0.05),
          ),
          i = new ie();
        ((i.name = `${e.anchor.name}_Sombra`),
          i.position.copy(t.getCenter(this.tmpCentro)),
          e.anchor.add(i),
          e.nodosSombra.push(i),
          e.sombras.push(
            this.sombras.anadirFranja(i, n, { holograma: e.holograma }),
          ));
      }
    }
    soltarSombraDe(e) {
      (this.sombras?.quitar(e.sombras), (e.sombras.length = 0));
      for (let t of e.nodosSombra) t.removeFromParent();
      e.nodosSombra.length = 0;
    }
    soltarSombras() {
      for (let e of this.entradas) this.soltarSombraDe(e);
    }
    refrescarSombras() {
      for (let e of this.entradas) this.colgarSombra(e);
    }
    setIgnicion(e) {
      this.ignicion = e;
    }
    setDisolucionNav(e) {
      this.disolucionNav = e;
    }
    setBloom(e) {
      (this.bloom?.quitarFuente(Sa), (this.bloom = e));
    }
    setNeon(e) {
      ((this.config.neon = e), this.aplicarMaterial(!0));
    }
    setVisible(e) {
      ((this.config.visible = e), this.motion.reset());
    }
    setActive(e, t, n) {
      ((this.decorado = e),
        (this.ventanaDelante = t),
        (this.ventanaDetras = n),
        e || this.motion.reset());
    }
    cargar(e, t) {
      return (
        (this.pendiente ||= L(e, t)
          .then((e) => {
            if (this.disposed) {
              this.desecharGlb(e.scene);
              return;
            }
            this.adoptar(e.scene);
          })
          .catch((e) => {
            this.disposed ||
              console.warn(`[cartelas] No se pudo cargar el glb:`, e);
          })),
        this.pendiente
      );
    }
    adoptar(e) {
      ((this.raizGlb = e), e.updateMatrixWorld(!0));
      for (let t of Ge) {
        let n = e.getObjectByName(B[t]);
        if (!n) {
          console.warn(
            `[cartelas] El glb no trae ${B[t]}; esa cartela se queda fuera.`,
          );
          continue;
        }
        let r = n,
          i = r.material;
        if (!r.isMesh || !(i instanceof N)) {
          console.warn(
            `[cartelas] ${B[t]} no es una malla PBR; esa cartela se queda fuera.`,
          );
          continue;
        }
        let a = new D();
        ((a.name = `${B[t]}_Sitio`),
          a.add(n),
          (a.visible = !1),
          this.group.add(a),
          this.tmpCaja.setFromObject(n),
          this.tmpCaja.getSize(this.tmpTamano),
          this.tmpCaja.getCenter(this.tmpCentro));
        let o = Math.max(this.tmpTamano.x, 0.001),
          s = Math.max(this.tmpTamano.z, 0.001),
          c = {
            clave: t,
            sitio: this.config.cartelas[t],
            anchor: a,
            raiz: n,
            material: i,
            filo: null,
            holograma: null,
            sombras: [],
            nodosSombra: [],
            apoyos: [
              new b(-o / 2, 0, -s / 2),
              new b(-o / 2, 0, s / 2),
              new b(o / 2, 0, -s / 2),
              new b(o / 2, 0, s / 2),
            ],
            radioBase: this.tmpTamano.length() / 2 + this.tmpCentro.length(),
            activa: !1,
          };
        (this.entradas.push(c), r.geometry.computeBoundingBox());
        let l = r.geometry.boundingBox?.max.z;
        l === void 0
          ? console.warn(`[cartelas] ${B[t]} sin caja; se queda sin filo.`)
          : (c.filo = new ze(i, l));
        let u = this.hologramas.get(t);
        (u !== void 0 &&
          ((c.holograma = u?.pieza(!0) ?? null), c.holograma?.adoptar(n)),
          this.colgarSombra(c));
      }
      (this.hologramas.clear(), this.aplicarMaterial(!0), this.place());
    }
    aplicarMaterial(e = !1) {
      let t = this.config,
        n =
          e ||
          t.color !== this.colorAplicado ||
          t.neon !== this.neonAplicado ||
          t.neonEnReflejo !== this.neonReflejoAplicado;
      for (let e of this.entradas) {
        let r = e.material;
        (n &&
          (r.color.set(t.color), r.emissive.set(t.color), (r.needsUpdate = !0)),
          (r.roughness = p.clamp(t.rugosidad, 0, 1)),
          (r.metalness = p.clamp(t.metalico, 0, 1)),
          n && this.marcarCapas(e));
      }
      n &&
        ((this.colorAplicado = t.color),
        (this.neonAplicado = t.neon),
        (this.neonReflejoAplicado = t.neonEnReflejo),
        t.neon || this.bloom?.setFuente(Sa, !1));
    }
    marcarCapas(e) {
      let t = e.raiz;
      (t.layers.disable(1),
        t.layers.disable(2),
        this.config.neon && H(t, this.config.neonEnReflejo));
    }
    setAspecto() {
      (ut(this.config), this.place());
    }
    place(e = 0) {
      if (!this.entradas.length) return;
      let t = !1;
      for (let e of this.entradas) {
        let n = e.sitio.avanceSeccion - e.sitio.antes;
        if (
          this.decorado &&
          this.tunnel.isActiveAt(n, this.ventanaDelante, this.ventanaDetras)
        ) {
          t = !0;
          break;
        }
      }
      let n = !t && this.disolucionNav === null;
      if (n && this.dormidas) return;
      ((this.dormidas = n), this.aplicarMaterial());
      let r = this.config,
        i = this.tunnel.sueloY;
      for (let e of this.entradas) {
        let t = e.sitio,
          n = t.avanceSeccion - t.antes;
        e.activa =
          this.decorado &&
          this.tunnel.isActiveAt(n, this.ventanaDelante, this.ventanaDetras);
        let a = this.tunnel.worldZFor(n),
          o = this.tunnel.radiusAtDepth(Math.max(0, -a)),
          s = Math.max(0.01, t.tamano * r.tamanoGlobal);
        (e.anchor.scale.setScalar(s),
          e.anchor.position.set(t.x * r.anchoGlobal * o, i ?? 0, a));
        let c = p.clamp(t.mirada + r.miradaGlobal, 0, 1);
        (this.tmpObjetivo.set(
          e.anchor.position.x * (1 - c),
          e.anchor.position.y,
          a + Math.max(0.5, t.miradaDistancia),
        ),
          e.anchor.lookAt(this.tmpObjetivo),
          (t.giroX || t.giroY || t.giroZ) &&
            (this.tmpEuler.set(
              p.degToRad(t.giroX),
              p.degToRad(t.giroY),
              p.degToRad(t.giroZ),
            ),
            e.anchor.quaternion.multiply(
              this.tmpQuat.setFromEuler(this.tmpEuler),
            )));
        let l = e.activa && t.visible && r.visible;
        ((e.anchor.visible = l),
          this.motion.prepare(e.anchor, e.radioBase * s, 0, e.apoyos));
      }
      this.motion.update(e);
      let a = !1;
      for (let e of this.entradas) {
        let t = e.anchor.scale.x;
        W(
          e.holograma,
          this.disolucionNav,
          e.anchor.position.z,
          e.radioBase * t,
          e.anchor.visible,
        );
        let n = Math.abs(e.anchor.position.z),
          r = this.ignicion?.activa
            ? Math.min(1, this.ignicion.nivelEmisor(n))
            : 1;
        ((e.material.emissiveIntensity = Math.max(0, this.config.emisivo) * r),
          e.filo?.aplicar(this.config, e.anchor.visible ? r : 0),
          e.anchor.visible && (a = !0));
      }
      this.bloom && this.bloom.setFuente(Sa, this.config.neon && a);
    }
    update(e, t = !1) {
      if (!this.disposed) {
        if (!this.decorado || !this.config.visible) {
          this.motion.reset();
          return;
        }
        this.place(t ? 0 : e);
      }
    }
    desecharGlb(e) {
      let t = new Set(),
        n = new Set();
      (e.traverse((e) => {
        let r = e;
        if (r.isMesh) {
          t.add(r.geometry);
          for (let e of Array.isArray(r.material) ? r.material : [r.material])
            n.add(e);
        }
      }),
        n.forEach((e) => e.dispose()),
        t.forEach((e) => e.dispose()),
        e.removeFromParent());
    }
    dispose() {
      if ((this.motion.dispose(), !this.disposed)) {
        ((this.disposed = !0),
          this.bloom?.quitarFuente(Sa),
          (this.bloom = null),
          this.soltarSombras(),
          (this.sombras = null));
        for (let e of this.entradas)
          (e.holograma?.apagar(),
            (e.holograma = null),
            e.filo?.dispose(),
            (e.filo = null),
            this.desecharGlb(e.raiz),
            e.anchor.clear(),
            e.anchor.removeFromParent());
        ((this.entradas.length = 0),
          this.hologramas.clear(),
          this.raizGlb && this.desecharGlb(this.raizGlb),
          (this.raizGlb = null),
          (this.ignicion = null),
          this.group.removeFromParent(),
          this.group.clear());
      }
    }
  },
  wa = [`vaso`, `vasoRoto`, `cristales`, `botellin`, `botella`],
  Ta = {
    vaso: `Resto_Vaso`,
    vasoRoto: `Resto_VasoRoto`,
    cristales: `Resto_Cristales`,
    botellin: `Resto_Botellin`,
    botella: `Resto_Botella`,
  },
  Ea = {
    visible: !0,
    escala: 3.6,
    ventana: 37,
    grupos: {
      entrada: {
        visible: !0,
        seccion: `eventos`,
        antes: 25.5,
        lado: 0.42,
        giro: -1,
        piezas: [
          { pieza: `botellin`, x: 0, z: 0, giro: 74 },
          { pieza: `vaso`, x: 0.34, z: 0.22, giro: -30 },
        ],
      },
      barraUno: {
        visible: !0,
        seccion: `eventos`,
        antes: 9,
        lado: -0.52,
        giro: -8,
        piezas: [
          { pieza: `botella`, x: 0, z: 0, giro: 18 },
          { pieza: `cristales`, x: 0.42, z: -0.18, giro: 0 },
        ],
      },
      barraDos: {
        visible: !0,
        seccion: `eventos`,
        antes: -3,
        lado: 0.58,
        giro: 22,
        piezas: [
          { pieza: `vasoRoto`, x: 0, z: 0, giro: -12 },
          { pieza: `cristales`, x: -0.3, z: 0.26, giro: 40 },
          { pieza: `vaso`, x: 0.38, z: -0.3, giro: 96 },
        ],
      },
      cabina: {
        visible: !0,
        seccion: `dj`,
        antes: 6,
        lado: -0.46,
        giro: -20,
        piezas: [
          { pieza: `botellin`, x: 0, z: 0, giro: 132 },
          { pieza: `botellin`, x: 0.26, z: 0.3, giro: 58 },
          { pieza: `vaso`, x: -0.3, z: 0.14, giro: -84 },
        ],
      },
      pista: {
        visible: !0,
        seccion: `dj`,
        antes: 5.5,
        lado: 0.3,
        giro: 6,
        piezas: [
          { pieza: `cristales`, x: -0.11, z: 0.69, giro: 25 },
          { pieza: `vasoRoto`, x: 0.4, z: 0.18, giro: -77 },
        ],
      },
      bola: {
        visible: !0,
        seccion: `proyeccion`,
        antes: 1.5,
        lado: 0.25,
        giro: 14,
        piezas: [
          { pieza: `botella`, x: 0, z: 0, giro: -66 },
          { pieza: `vaso`, x: 0.32, z: -0.24, giro: 12 },
        ],
      },
      proyeccion: {
        visible: !0,
        seccion: `proyeccion`,
        antes: 6.5,
        lado: 0.5,
        giro: -10,
        piezas: [{ pieza: `botellin`, x: 0, z: 0, giro: 40 }],
      },
      salida: {
        visible: !0,
        seccion: `contacto`,
        antes: -6,
        lado: -0.38,
        giro: 28,
        piezas: [
          { pieza: `vaso`, x: 0, z: 0, giro: -18 },
          { pieza: `cristales`, x: 0.34, z: 0.22, giro: 70 },
        ],
      },
    },
  };
Object.keys(Ea.grupos);
function Da(e) {
  let t = Object.fromEntries(wa.map((e) => [e, 0]));
  for (let n of Object.values(e.grupos))
    for (let e of n.piezas) t[e.pieza] += 1;
  return t;
}
var Oa = () => structuredClone(Ea),
  ka = class {
    tunnel;
    config;
    group = new D();
    motion;
    anclas = new Map();
    mallas = new Map();
    geometrias = [];
    materiales = [];
    montado = !1;
    disposed = !1;
    recorrido = null;
    tmpMatriz = new e();
    tmpLocal = new e();
    tmpEuler = new r();
    tmpQuat = new P();
    tmpEscala = new b();
    tmpPos = new b();
    constructor(e, t, n, r) {
      ((this.tunnel = t),
        (this.config = n),
        (this.group.name = `HoyoRestosSuelo`),
        e.add(this.group),
        (this.motion = new R(t, r, `marquesinas`)));
    }
    setRecorrido(e) {
      this.recorrido = e;
    }
    async load(e) {
      if (this.montado || this.disposed) return;
      let t = await L(e);
      if (this.disposed) return;
      U(t.scene);
      let n = Da(this.config);
      for (let e of wa) {
        if (n[e] <= 0) continue;
        let r = t.scene.getObjectByName(Ta[e]);
        if (!r?.isMesh) continue;
        let i = new d(r.geometry, r.material, n[e]);
        ((i.name = `HoyoRestos_${e}`),
          i.instanceMatrix.setUsage(m),
          (i.frustumCulled = !1),
          (i.castShadow = !1),
          (i.receiveShadow = !1),
          (i.count = 0),
          this.group.add(i),
          this.mallas.set(e, i),
          this.geometrias.push(r.geometry));
        for (let e of Array.isArray(r.material) ? r.material : [r.material])
          this.materiales.push(e);
      }
      this.montado = !0;
    }
    setVisible(e) {
      this.group.visible = e;
    }
    setAlcance(e) {
      this.alcance = Math.max(0, e);
    }
    update(e) {
      if (
        this.disposed ||
        !this.montado ||
        !this.group.visible ||
        !this.recorrido
      )
        return;
      let t = this.config,
        n = this.tunnel.sueloY ?? 0,
        r = Math.max(0.01, t.escala),
        i = this.activos;
      i.clear();
      let a = !1;
      for (let e in t.grupos) {
        let n = t.grupos[e],
          r = this.recorrido[n.seccion] - n.antes,
          o =
            t.visible &&
            n.visible &&
            this.tunnel.isActiveAt(
              r,
              Math.max(t.ventana, this.alcance),
              t.ventana,
            );
        (i.set(e, o), o && (a = !0));
      }
      if (!a && this.ninguno) return;
      this.ninguno = !a;
      for (let e in t.grupos) {
        let a = t.grupos[e];
        if (!i.get(e)) continue;
        let o = this.recorrido[a.seccion] - a.antes,
          s = this.ancla(e),
          c = this.tunnel.worldZFor(o),
          l = this.tunnel.radiusAtDepth(Math.max(0, -c)) * Aa;
        (s.position.set(p.clamp(a.lado, -1, 1) * l, n, c),
          s.quaternion.setFromEuler(
            this.tmpEuler.set(0, p.degToRad(a.giro), 0),
          ),
          s.scale.setScalar(r),
          this.motion.prepare(s, r * 0.3, 0, ja));
      }
      this.motion.update(e);
      let o = this.escritas;
      o.clear();
      for (let e in t.grupos) {
        let n = t.grupos[e];
        if (!i.get(e)) continue;
        let r = this.anclas.get(e);
        if (r) {
          r.updateMatrixWorld(!0);
          for (let e of n.piezas) {
            let t = this.mallas.get(e.pieza);
            if (!t) continue;
            let n = o.get(e.pieza) ?? 0;
            n >= t.instanceMatrix.count ||
              (this.tmpLocal.compose(
                this.tmpPos.set(e.x, 0, e.z),
                this.tmpQuat.setFromEuler(
                  this.tmpEuler.set(0, p.degToRad(e.giro), 0),
                ),
                this.tmpEscala.setScalar(1),
              ),
              this.tmpMatriz.multiplyMatrices(r.matrixWorld, this.tmpLocal),
              t.setMatrixAt(n, this.tmpMatriz),
              o.set(e.pieza, n + 1));
          }
        }
      }
      for (let [e, t] of this.mallas) {
        let n = o.get(e) ?? 0;
        (t.count !== n && (t.count = n),
          n > 0 && (t.instanceMatrix.needsUpdate = !0));
      }
    }
    activos = new Map();
    escritas = new Map();
    ninguno = !1;
    alcance = 0;
    ancla(e) {
      let t = this.anclas.get(e);
      return (
        t ||
          ((t = new ie()),
          (t.name = `HoyoRestosGrupo_${e}`),
          this.group.add(t),
          this.anclas.set(e, t)),
        t
      );
    }
    dispose() {
      if (!this.disposed) {
        ((this.disposed = !0), this.motion.dispose());
        for (let e of this.mallas.values()) e.dispose();
        (this.mallas.clear(), this.anclas.clear());
        for (let e of this.geometrias) e.dispose();
        // These maps belong to this per-home debris model, shared by its instances.
        const textures = new Set();
        for (let material of this.materiales)
          for (let value of Object.values(material))
            if (value instanceof c) textures.add(value);
        for (let texture of textures) texture.dispose();
        for (let e of this.materiales) e.dispose();
        ((this.geometrias.length = 0),
          (this.materiales.length = 0),
          this.group.removeFromParent(),
          this.group.clear());
      }
    }
  },
  Aa = 0.966,
  ja = [new b(0, 0, 0)],
  Ma = new P().setFromAxisAngle(new b(1, 0, 0), Math.PI / 2),
  Na = new b(0, 1, 0),
  Pa = class {
    boveda;
    config;
    group = new D();
    soporte = new D();
    motion;
    escena = null;
    dimensiones = new b(0.72, 1, 0.6);
    materiales = new Set();
    avanceProyeccion = 0;
    activa = !1;
    rumboVivo = 0;
    disolucionNav = null;
    seccionHolograma = null;
    pieza = null;
    disposed = !1;
    tmpGiro = new P();
    constructor(e, t, n, r) {
      ((this.boveda = t),
        (this.config = n),
        (this.group.name = `HoyoAstronauta`),
        (this.soporte.name = `HoyoAstronautaSoporte`),
        this.group.add(this.soporte),
        (this.group.visible = !1),
        e.add(this.group),
        (this.motion = new R(t, r, `proyeccion`)));
    }
    setAvanceProyeccion(e) {
      this.avanceProyeccion = e;
    }
    get avance() {
      return this.avanceProyeccion - this.config.antes;
    }
    get semilargo() {
      return 0.5 * this.dimensiones.y * this.largo();
    }
    setActive(e) {
      ((this.activa = e), this.aplicarVisible());
    }
    setVisible(e) {
      ((this.config.visible = e), this.aplicarVisible());
    }
    fundido = We();
    setHolograma(e) {
      (this.seccionHolograma &&
        this.pieza &&
        this.seccionHolograma.soltar(this.pieza),
        (this.pieza = null),
        (this.seccionHolograma = e),
        !(!e || this.disposed) &&
          ((this.pieza = e.pieza(!1, !0, this.fundido)),
          this.escena && this.pieza.adoptar(this.escena)));
    }
    setDisolucionNav(e) {
      this.disolucionNav = e;
    }
    aplicarMaterial() {
      for (let e of this.materiales) {
        let t = e;
        t.isMeshStandardMaterial && (t.roughness = this.config.rugosidad);
      }
    }
    async load(e) {
      if (this.escena || this.disposed) return;
      let t = await L(e);
      if (this.disposed) return;
      U(t.scene);
      let n = t.scene;
      (n.traverse((e) => {
        let t = e;
        if (t.isMesh)
          for (let e of Array.isArray(t.material) ? t.material : [t.material])
            this.materiales.add(e);
      }),
        this.materiales.size,
        new O().setFromObject(n).getSize(this.dimensiones),
        (this.escena = n),
        this.soporte.add(n),
        this.aplicarMaterial(),
        this.pieza?.adoptar(n),
        this.aplicarVisible(),
        this.colocar());
    }
    aplicarVisible() {
      ((this.group.visible =
        this.activa && this.config.visible && this.escena !== null),
        this.group.visible || this.pieza?.apagar());
    }
    largo() {
      return I.resolver(this.config.largo) * this.boveda.radius;
    }
    colocar() {
      if (this.disposed || !this.escena) return;
      let e = this.config,
        t = this.boveda.radius,
        n = this.largo(),
        r = 0.5 * this.dimensiones.x * n,
        i = 0.5 * this.dimensiones.y * n,
        a = 0.5 * this.dimensiones.z * n,
        o = p.degToRad(e.rumbo + this.rumboVivo),
        s = Math.min(
          t * 0.98,
          (Math.abs(Math.cos(o)) * r + Math.abs(Math.sin(o)) * i) * e.cenido,
        ),
        c = Math.PI - xe(this.boveda.config) / 2,
        l =
          this.boveda.sueloY +
          t * Math.cos(c) +
          Math.sqrt(t * t - s * s) -
          this.boveda.config.relieve,
        u = p.degToRad(this.motion.physics.config.maxRotation * e.giroFisica),
        d = l - e.holgura - a - i * Math.sin(u);
      (this.soporte.scale.setScalar(n),
        this.soporte.position.set(0, d, this.boveda.worldZFor(this.avance)),
        this.soporte.quaternion
          .copy(Ma)
          .premultiply(this.tmpGiro.setFromAxisAngle(Na, o)));
      let f = Math.max(0, t - Math.abs(d) - e.holgura);
      this.motion.prepare(this.soporte, f, 0, void 0, e.giroFisica);
    }
    update(e, t) {
      if (!this.disposed) {
        if (!this.group.visible) {
          this.pieza?.apagar();
          return;
        }
        (t ||
          (this.rumboVivo =
            (this.rumboVivo + this.config.giroVelocidad * e) % 360),
          this.colocar(),
          this.motion.update(e),
          W(
            this.pieza,
            this.disolucionNav,
            this.soporte.position.z,
            this.semilargo,
          ));
      }
    }
    dispose() {
      if (!this.disposed) {
        ((this.disposed = !0),
          this.setHolograma(null),
          this.motion.dispose(),
          this.group.removeFromParent(),
          this.escena?.traverse((e) => {
            let t = e;
            t.isMesh && t.geometry.dispose();
          }));
        for (let e of this.materiales) (e.map?.dispose(), e.dispose());
        (this.materiales.clear(), this.group.clear(), (this.escena = null));
      }
    }
  },
  Fa = {
    visible: !0,
    antes: 10,
    largo: z(0.65, 0.52),
    holgura: 0.15,
    cenido: 0.4,
    rumbo: 0,
    giroVelocidad: 0,
    giroFisica: 0.23,
    rugosidad: 0.21,
  };
function Ia() {
  return { ...Fa, largo: { ...Fa.largo } };
}
var La = { activo: !0, largo: 12, adelanto: 6, largoAstronauta: 6 };
function Ra() {
  return { ...La };
}
function za(e, t) {
  return ((e % t) + t) % t;
}
function Ba(e, t, n, r, i, a = 30) {
  if (!(r > 0) || !Number.isFinite(e)) return 1;
  let o = za(n - t, r),
    s = Math.min(r, o + Math.max(0, a)),
    c = za(e - t - s, r) + s - r;
  if (c <= 0) return 0;
  if (!(i > 0)) return 1;
  let l = Math.min(1, c / i);
  return l * l * (3 - 2 * l);
}
var Va = class {
    tubo;
    camara;
    config;
    mesh;
    lienzo;
    textura;
    material;
    geometria;
    centro = new v();
    objetivo = new b();
    direccion = new b();
    progreso = 0;
    pintado = -1;
    despedida = -1;
    esperandoFuente = !1;
    disposed = !1;
    constructor(e, t, n, r) {
      ((this.tubo = t),
        (this.camara = n),
        (this.config = r),
        (this.lienzo = document.createElement(`canvas`)),
        (this.lienzo.width = Ha),
        (this.lienzo.height = Ha),
        (this.textura = new ae(this.lienzo)),
        (this.textura.colorSpace = i),
        (this.textura.wrapS = k),
        (this.textura.wrapT = k),
        (this.textura.generateMipmaps = !0),
        (this.textura.minFilter = y),
        (this.textura.magFilter = _),
        (this.textura.anisotropy = 8),
        (this.material = new ce({
          map: this.textura,
          transparent: !0,
          opacity: 0,
          depthWrite: !1,
          depthTest: !0,
          toneMapped: !1,
          fog: !1,
          side: 0,
        })),
        (this.geometria = new j(1, 1)),
        (this.mesh = new T(this.geometria, this.material)),
        (this.mesh.name = `HoyoIntroCifra`),
        (this.mesh.renderOrder = 19),
        this.mesh.layers.disable(1),
        this.mesh.layers.disable(2),
        e.add(this.mesh),
        this.aplicar());
    }
    setProgreso(e) {
      ((this.progreso = Math.min(1, Math.max(0, e))),
        this.porcentaje !== this.pintado && this.repintar());
    }
    get porcentaje() {
      return Math.round(this.progreso * 100);
    }
    despedir() {
      this.despedida < 0 && this.mesh.visible && (this.despedida = 0);
    }
    get despidiendo() {
      return this.despedida >= 0;
    }
    update(e, t = !1) {
      if (this.disposed || !this.mesh.visible) return;
      let n = this.config,
        r = Math.max(1, n.cifraDistancia),
        i = -r;
      (this.camara.getWorldPosition(this.objetivo),
        this.camara.getWorldDirection(this.direccion));
      let a =
        this.direccion.z < -0.001
          ? (i - this.objetivo.z) / this.direccion.z
          : 0;
      (this.tubo.centroEn(i, this.centro),
        this.mesh.position.set(
          this.objetivo.x + this.direccion.x * a,
          this.centro.y + n.cifraAltura,
          i,
        ));
      let o = Math.max(0.01, n.cifraCuerpo) * 2 * this.tubo.radiusAtDepth(r);
      (this.mesh.scale.set(o, o, 1), this.mesh.lookAt(this.objetivo));
      let s =
          n.cifraOpacidadMin +
          (n.cifraOpacidad - n.cifraOpacidadMin) * this.progreso,
        c = Math.exp(-((Math.max(0, n.cifraNiebla) * r) ** 2)),
        l = 1;
      if (this.despedida >= 0) {
        this.despedida += Math.max(0, e);
        let r = Math.min(1, this.despedida / Math.max(0.05, n.cifraApagado));
        ((l = t ? 1 - r : Fe(1 - r, qa)),
          r >= 1 && ((this.mesh.visible = !1), (l = 0)));
      }
      this.material.opacity = Math.min(1, Math.max(0, s * c * l));
    }
    aplicar() {
      ((this.pintado = -1), this.repintar(), this.asegurarFuente());
    }
    reiniciar() {
      ((this.progreso = 0),
        (this.despedida = -1),
        (this.mesh.visible = !0),
        (this.material.opacity = 0),
        this.aplicar());
    }
    apagar() {
      this.mesh.visible = !1;
    }
    get visible() {
      return this.mesh.visible;
    }
    repintar() {
      this.pintado = this.porcentaje;
      let e = this.lienzo.getContext(`2d`);
      if (!e) return;
      let t = this.lienzo.width,
        n = this.lienzo.height;
      (e.clearRect(0, 0, t, n),
        e.save(),
        (e.font = `${Ka} ${Math.round(n * Ua)}px ${Ga}`),
        (e.fillStyle = this.config.cifraTinta),
        Ye(e, String(this.porcentaje), t / 2, n / 2, Math.round(n * Wa)),
        e.restore(),
        (this.textura.needsUpdate = !0));
    }
    asegurarFuente() {
      if (this.esperandoFuente) return;
      let e = typeof document > `u` ? null : document.fonts;
      e?.load &&
        (e.check(`${Ka} 100px Morganite`) ||
          ((this.esperandoFuente = !0),
          e
            .load(`${Ka} 100px Morganite`)
            .then(() => {
              ((this.esperandoFuente = !1),
                !this.disposed && ((this.pintado = -1), this.repintar()));
            })
            .catch(() => {
              this.esperandoFuente = !1;
            })));
    }
    dispose() {
      this.disposed ||
        ((this.disposed = !0),
        this.mesh.removeFromParent(),
        this.geometria.dispose(),
        this.material.dispose(),
        this.textura.dispose());
    }
  },
  Ha = 512,
  Ua = 0.82,
  Wa = 0.012,
  Ga = `"Morganite", "Arial Narrow", Impact, sans-serif`,
  Ka = 900,
  qa = 3.7,
  Ja = class {
    material;
    constructor() {
      this.material = new t({
        transparent: !0,
        depthWrite: !1,
        depthTest: !1,
        blending: 2,
        toneMapped: !1,
        uniforms: {
          uTiempo: { value: 0 },
          uColor: { value: new E(`#5be010`) },
          uFuerza: { value: 1.5 },
          uGrosor: { value: 0.06 },
          uVelocidad: { value: 0.55 },
          uHalo: { value: 0.5 },
          uLatido: { value: 0.35 },
          uRugosidad: { value: 0.014 },
          uNodos: { value: 0.55 },
          uEstallido: { value: 0 },
          uOnda: { value: 0.12 },
          uOpacidad: { value: 0 },
          uMitad: { value: new v(0.3, 0.3) },
          uRadio: { value: 0.06 },
          uAspecto: { value: 1 },
        },
        vertexShader: `
varying vec2 vUvAura;
void main() {
  vUvAura = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,
        fragmentShader: `
uniform float uTiempo;
uniform vec3 uColor;
uniform float uFuerza;
uniform float uGrosor;
uniform float uVelocidad;
uniform float uHalo;
uniform float uLatido;
uniform float uRugosidad;
uniform float uNodos;
uniform float uEstallido;
uniform float uOnda;
uniform float uOpacidad;
uniform vec2 uMitad;
uniform float uRadio;
uniform float uAspecto;

varying vec2 vUvAura;

float auraHash(float n) {
  return fract(sin(n * 127.1) * 43758.5453123);
}

/**
 * Ruido de valor en 1D, PERIÓDICO.
 *
 * El filo es un anillo cerrado: con un ruido normal, la vuelta no empalma consigo misma y aparece
 * una costura recta en el punto de corte — el mismo fallo que ya se pagó con la cabeza del cometa.
 * Con el índice en módulo del periodo, el último tramo interpola contra el primero y no hay junta.
 */
float auraRuido(float x, float periodo) {
  float i = floor(x);
  float f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(auraHash(mod(i, periodo)), auraHash(mod(i + 1.0, periodo)), f);
}

/** Distancia con signo a un rectángulo redondeado. Negativa dentro, 0 en el filo. */
float sdTroquel(vec2 p, vec2 mitad, float radio) {
  vec2 q = abs(p) - mitad + radio;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - radio;
}

void main() {
  if (uOpacidad <= 0.001) discard;

  // Coordenadas del plano con el alto normalizado a 1, para que el SDF no salga estirado.
  vec2 p = (vUvAura - 0.5) * vec2(uAspecto, 1.0);
  float d = sdTroquel(p, uMitad, uRadio);

  // El estallido no ensancha el filo hasta llenar la pantalla —eso da un rectángulo verde gigante,
  // que es exactamente lo que NO se quiere— sino que lo SUELTA: el anillo se separa del troquel y
  // sale hacia fuera mientras se apaga. Lo que ilumina el túnel no es este plano, es el frente de
  // ignicion.ts y la puntual que viaja con él; esto es sólo el fogonazo en el origen.
  float onda = uEstallido * uOnda;
  float grosor = uGrosor * (1.0 + uEstallido * 4.0);
  float halo = uHalo * (1.0 + uEstallido * 4.0);

  // 1) Cometa. Recorre el perímetro una y otra vez. El ángulo se corrige por la proporción del
  //    troquel para que no corra más por los lados largos que por los cortos. Se apaga al estallar:
  //    a plena onda su cola se lee como una cuña, no como un reflejo.
  float ang = atan(p.y * max(0.001, uMitad.x) / max(0.001, uMitad.y), p.x) * 0.15915494 + 0.5;
  float fase = fract(ang - uTiempo * uVelocidad);
  //    El smoothstep de la cabeza no es decorativo: sin él la cola salta de 0 a 1 en el punto de
  //    corte de la fase y se ve una costura recta cruzando el filo, que delata que esto es una
  //    coordenada y no una luz.
  float cometa = pow(1.0 - fase, 4.0) * smoothstep(0.0, 0.08, fase) * (1.0 - smoothstep(0.0, 0.15, uEstallido));

  // 2) La FIBRA. Dos octavas de ruido periódico que giran despacio alrededor del troquel: mueven
  //     el filo unas décimas y le cambian el brillo por tramos. Es lo que separa un rectángulo con
  //     borde de un tubo de plasma — en la referencia el hilo tiembla y tiene nodos más vivos.
  float giro = ang + uTiempo * 0.06;
  float fibra = auraRuido(giro * 13.0, 13.0) * 0.62 + auraRuido(giro * 31.0, 31.0) * 0.38;

  // 4) Latido. Lento, para que el botón respire mientras espera en vez de vibrar.
  float latido = 1.0 - uLatido * 0.5 * (1.0 - sin(uTiempo * 2.4));

  // 5) Halo exterior. Sólo hacia fuera del anillo: por dentro está el propio botón y lo lavaría.
  float fuera = exp(-max(d - onda, 0.0) / max(0.0015, halo)) * step(onda, d);

  // Y el apagado del estallido, que es lo que impide que el fogonazo se quede en pantalla.
  float apagado = pow(1.0 - uEstallido, 1.6);

  // Y el desvanecido contra el borde del PLANO. Sin esto el halo se corta en seco contra la
  // geometría y aparece un rectángulo con filo duro en mitad del túnel — que es exactamente lo que
  // el aura está intentando no ser.
  vec2 q = abs(vUvAura - 0.5) * 2.0;
  float dentro = 1.0 - smoothstep(0.7, 1.0, max(q.x, q.y));

  // El filo manda y el cometa sólo lo recorre: en la referencia (threeui/induction) el borde es una
  // línea fina y constante con un halo ancho y flojo, no una barra que se enciende y se apaga.
  // 3) El FILO (o anillo, si está estallando): una banda luminosa a los dos lados del trazo, ya
  //    desplazada por la fibra y encendida a tramos por ella.
  float filo = exp(-abs(d - onda - (fibra - 0.5) * uRugosidad) / max(0.0015, grosor));
  filo *= 1.0 - uNodos * (1.0 - fibra);

  float intensidad = (filo * (0.8 + 0.8 * cometa) * latido + fuera * 0.45);
  intensidad *= uFuerza * uOpacidad * (1.0 + uEstallido * 3.5) * apagado * dentro;

  if (intensidad <= 0.002) discard;
  gl_FragColor = vec4(uColor * intensidad, intensidad);
}`,
      });
    }
    encajar(e, t, n, r) {
      ((this.material.uniforms.uAspecto.value = e),
        this.material.uniforms.uMitad.value.set(t, n),
        (this.material.uniforms.uRadio.value = r));
    }
    aplicar(e) {
      let t = this.material.uniforms;
      (t.uColor.value.set(e.color),
        (t.uFuerza.value = e.fuerza),
        (t.uGrosor.value = e.grosor),
        (t.uVelocidad.value = e.velocidad),
        (t.uHalo.value = e.halo),
        (t.uLatido.value = e.latido),
        (t.uRugosidad.value = e.rugosidad),
        (t.uNodos.value = e.nodos));
    }
    set tiempo(e) {
      this.material.uniforms.uTiempo.value = e;
    }
    set opacidad(e) {
      this.material.uniforms.uOpacidad.value = e;
    }
    set estallido(e) {
      this.material.uniforms.uEstallido.value = e;
    }
    dispose() {
      this.material.dispose();
    }
  },
  Ya = 1024,
  Xa = 0.14;
function Za(e) {
  let t = Math.max(2, 320 * e),
    n = Xa * 320 + t / 2,
    r = (320 - 2 * n) / 320;
  return {
    aspecto: Ya / 320,
    ancho: (Ya - 2 * n) / 320,
    alto: r,
    radio: r * eo,
  };
}
var Qa = `"Panchang", "Arial Black", Impact, sans-serif`,
  $a = 800,
  eo = 0.22,
  to = -0.055,
  no = 0.07,
  ro = 0.72;
function io(e, t, n, r, i, a, o) {
  let s = a * eo;
  (e.save(),
    (e.lineJoin = `round`),
    (e.lineWidth = o),
    (e.globalCompositeOperation = `destination-over`),
    (e.globalAlpha = 1),
    (e.strokeStyle = t.sombra),
    ge(e, n + a * to, r + a * no, i, a, s),
    e.stroke(),
    (e.globalCompositeOperation = `source-over`),
    (e.strokeStyle = t.borde),
    ge(e, n, r, i, a, s),
    e.stroke(),
    e.restore());
}
function ao(e, t, n) {
  let r = e.getContext(`2d`);
  if (!r) return;
  let i = e.width,
    a = e.height;
  r.clearRect(0, 0, i, a);
  let o = a * Xa,
    s = Math.max(2, a * t.grosor),
    c = o + s / 2,
    l = o + s / 2,
    u = i - 2 * c,
    d = a - 2 * l;
  (r.save(),
    ge(r, c, l, u, d, d * eo),
    r.clip(),
    (r.globalAlpha = ro),
    (r.fillStyle = t.fondo),
    r.fillRect(c, l, u, d),
    Xe(r, c, l, u, d, t.suciedad * 0.5, 9),
    r.restore(),
    io(r, t, c, l, u, d, s));
  let f = n.trim().toUpperCase();
  if (!f) return;
  let p = Te(r, f, u - d * eo * 4, d * 0.44, Qa, $a, 0.04);
  ((r.fillStyle = t.tinta), Ye(r, f, i / 2, a / 2, p * 0.04));
}
var oo = 0.66,
  so = class e {
    group = new D();
    config;
    ignicion;
    onPulsar = null;
    onEncendido = null;
    puedeTerminar = null;
    contacto = !1;
    onEntrada = null;
    onEstado = null;
    anfitrion = null;
    reducedMotion = () => !1;
    disposed = !1;
    soltarContexto = null;
    setAnfitrion(e, t) {
      ((this.anfitrion = e), (this.reducedMotion = t));
    }
    camara;
    botonLienzo;
    botonTextura;
    boton;
    botonMaterial;
    aura;
    auraMalla;
    cifra = null;
    padre;
    tubo;
    estadoActual = `cargando`;
    reloj = 0;
    fase = 0;
    progresoReal = 0;
    progresoVisto = 0;
    cargaLista = !1;
    esperandoFuente = !1;
    avisado = !1;
    lienzo = null;
    cursorPuesto = !1;
    onClick = null;
    onKeyDown = null;
    raycaster = new de();
    puntero = new gt();
    constructor(t, n, r, i = new Ne(), a = null) {
      ((this.ignicion = i),
        (this.ignicion.activa = !0),
        (this.ignicion.frente = -1),
        (this.ignicion.apagando = !1),
        (this.camara = n),
        (this.config = r ?? $t()),
        (this.ignicion.base = this.config.apagado),
        (this.ignicion.estela = this.config.estela),
        (this.ignicion.ambiente = this.config.apagadoCuerpo),
        (this.group.name = `HoyoTunnelIntro`),
        (this.group.renderOrder = 20),
        t.add(this.group),
        (this.botonLienzo = e.crearLienzo(Ya, 320)),
        (this.botonTextura = e.crearTextura(this.botonLienzo)),
        (this.botonMaterial = e.crearMaterial(this.botonTextura)));
      let o = new j(1, 1);
      ((this.boton = new T(o, this.botonMaterial)),
        (this.boton.name = `HoyoIntroBoton`),
        (this.aura = new Ja()),
        (this.auraMalla = new T(o, this.aura.material)),
        (this.auraMalla.name = `HoyoIntroAura`));
      for (let e of [this.boton, this.auraMalla])
        ((e.frustumCulled = !1), (e.renderOrder = 20), this.group.add(e));
      (H(this.auraMalla),
        (this.auraMalla.renderOrder = 21),
        (this.boton.visible = !1),
        (this.auraMalla.visible = !1),
        (this.aura.opacidad = 0),
        (this.padre = t),
        (this.tubo = a),
        (this.cifra = this.crearCifra()),
        this.apply());
    }
    get estado() {
      return this.estadoActual;
    }
    crearCifra() {
      return this.tubo
        ? new Va(this.padre, this.tubo, this.camara, this.config)
        : null;
    }
    get progreso() {
      return this.progresoVisto;
    }
    setProgreso(e) {
      this.progresoReal = Math.min(1, Math.max(this.progresoReal, e));
    }
    terminarCarga() {
      ((this.cargaLista = !0), (this.progresoReal = 1));
    }
    update(e) {
      if (this.disposed) return;
      this.resolverPuntero();
      let t = Math.min(Math.max(e, 0), 0.1);
      if (
        ((this.reloj += t),
        (this.fase += t),
        (this.aura.tiempo = this.reloj),
        !this.config.visible && this.estadoActual !== `dentro`)
      ) {
        this.terminar();
        return;
      }
      if (
        (this.estadoActual === `cargando` || this.estadoActual === `listo`) &&
        (this.anfitrion?.update(
          t,
          this.progresoVisto,
          this.cargaLista,
          this.reducedMotion(),
        ),
        this.anfitrion)
      ) {
        let e = this.anfitrion.config;
        ((this.ignicion.base =
          e.claridadEspera *
          (e.penumbraInicial + (1 - e.penumbraInicial) * this.progresoVisto)),
          (this.ignicion.reposoLeds = e.ledsEspera),
          (this.ignicion.tirasEntrada = e.tirasEntrada),
          (this.ignicion.tirasVivas =
            e.tirasInicio +
            (e.tirasEspera - e.tirasInicio) * this.progresoVisto),
          (this.ignicion.tirasSubida = 0));
      }
      switch (this.estadoActual) {
        case `cargando`:
          (this.avanzarCarga(t),
            this.cifra &&
              (this.cifra.setProgreso(this.progresoVisto),
              this.cifra.update(t, this.reducedMotion())));
          break;
        case `saliendo`:
          this.paso(this.config.esperaBoton) >= 1 &&
            ((this.boton.visible = !0),
            (this.auraMalla.visible = !0),
            this.cambiar(`listo`));
          break;
        case `listo`: {
          if (this.anfitrion) break;
          let e = this.paso(this.config.botonEntrada);
          ((this.botonMaterial.opacity = e), (this.aura.opacidad = e));
          break;
        }
        case `pulsando`:
          (this.anfitrion?.actualizarPulsacion(t),
            (this.reducedMotion() || this.anfitrion?.activation.contact) &&
              this.iniciarEncendido());
          break;
        case `entrando`:
          (this.reducedMotion()
            ? this.anfitrion?.retirar()
            : this.anfitrion?.actualizarPulsacion(t),
            this.avanzarEncendido());
          break;
        case `dentro`:
          break;
      }
      (this.cifra?.visible &&
        this.estadoActual !== `cargando` &&
        this.cifra.update(t, this.reducedMotion()),
        this.place());
    }
    avanzarCarga(e) {
      let t =
          this.config.duracionMinima > 0
            ? this.reloj / this.config.duracionMinima
            : 1,
        n =
          this.anfitrion && !this.anfitrion.admite100
            ? 0.99
            : this.cargaLista
              ? 1
              : 0.99,
        r = Math.min(this.progresoReal, Math.max(0, t), n),
        i =
          1 -
          (1 - Math.min(0.9, Math.max(0.01, this.config.progresoSuavizado))) **
            (e * 60);
      if (
        ((this.progresoVisto += (r - this.progresoVisto) * i),
        Math.abs(r - this.progresoVisto) < 0.002 && (this.progresoVisto = r),
        this.anfitrion?.admite100 &&
          this.cargaLista &&
          t >= 1 &&
          (this.progresoVisto = 1),
        this.cifra &&
          this.progresoVisto >= 1 &&
          !this.cifra.despidiendo &&
          (this.cifra.setProgreso(1), this.cifra.despedir()),
        this.cargaLista &&
          this.progresoVisto >= 0.999 &&
          this.reloj >= this.config.duracionMinima)
      )
        if (this.anfitrion) {
          if (!this.anfitrion.esperando) return;
          (this.cifra && !this.cifra.despidiendo && this.cifra.apagar(),
            this.cambiar(`listo`));
        } else (this.cifra?.apagar(), this.cambiar(`saliendo`));
    }
    avanzarEncendido() {
      let e = Math.max(0.05, this.config.estallido),
        t = Math.min(1, this.fase / e);
      ((this.aura.estallido = t),
        (this.aura.opacidad = +(t < 1)),
        (this.botonMaterial.opacity = Math.max(0, 1 - this.fase / (e * 0.45))),
        this.botonMaterial.opacity <= 0.001 && (this.boton.visible = !1),
        this.aura.opacidad <= 0.001 && (this.auraMalla.visible = !1));
      let n = this.duracionEncendido,
        r = Math.min(1, this.fase / n),
        i = this.anfitrion
          ? r
          : 1 - (1 - r) ** Math.max(0.2, this.config.curva),
        a = Math.max(this.config.alcance, this.camara.far + this.config.estela);
      ((this.ignicion.frente = this.anfitrion
        ? a * i
        : this.config.distancia + (a - this.config.distancia) * i),
        this.anfitrion &&
          ((this.ignicion.tirasSubida = r),
          (this.ignicion.tirasVivas = Math.max(
            this.anfitrion.config.tirasEspera,
            r,
          ))),
        r >= 1 &&
          (this.anfitrion || t >= 1) &&
          (this.puedeTerminar?.() ?? !0) &&
          this.terminar());
    }
    get duracionEncendido() {
      return this.reducedMotion()
        ? 0.25
        : this.anfitrion
          ? Math.max(0.1, this.anfitrion.config.encendido)
          : Math.max(0.1, this.config.duracion);
    }
    get progresoEncendido() {
      return this.estadoActual === `dentro`
        ? 1
        : this.estadoActual === `entrando`
          ? Math.min(1, this.fase / this.duracionEncendido)
          : 0;
    }
    entrar() {
      this.estadoActual === `listo` &&
        (this.setCursor(!1),
        !this.reducedMotion() && this.anfitrion?.pulsar()
          ? this.cambiar(`pulsando`)
          : this.iniciarEncendido(),
        this.onPulsar?.());
    }
    iniciarEncendido() {
      this.contacto ||
        ((this.contacto = !0),
        (this.ignicion.origen = this.anfitrion?.profundidadBoton ?? 0),
        (this.ignicion.frente = 0),
        this.cambiar(`entrando`),
        this.reducedMotion() && this.anfitrion?.retirar(),
        this.onEncendido?.());
    }
    reiniciar() {
      ((this.contacto = !1),
        (this.ignicion.origen = 0),
        this.anfitrion?.reset(),
        (this.reloj = 0),
        (this.progresoVisto = 0),
        (this.progresoReal = this.cargaLista ? 1 : this.progresoReal),
        (this.avisado = !1),
        (this.ignicion.apagando = !1),
        (this.ignicion.activa = !0),
        (this.ignicion.frente = -1),
        (this.ignicion.reposoLeds = 0),
        (this.ignicion.tirasVivas = 0),
        (this.ignicion.tirasSubida = 0),
        (this.group.visible = !0),
        this.cifra ? this.cifra.reiniciar() : (this.cifra = this.crearCifra()),
        (this.boton.visible = !1),
        (this.botonMaterial.opacity = 0),
        (this.auraMalla.visible = !1),
        this.auraMalla.scale.setScalar(1),
        (this.aura.opacidad = 0),
        (this.aura.estallido = 0),
        this.cambiar(`cargando`),
        this.apply());
    }
    terminar() {
      (this.anfitrion?.retirar(),
        (this.ignicion.origen = 0),
        (this.ignicion.reposoLeds = 0),
        (this.ignicion.tirasVivas = 1),
        (this.ignicion.tirasSubida = 1),
        (this.ignicion.activa = !1),
        (this.ignicion.frente = this.config.alcance),
        (this.group.visible = !1),
        this.cifra?.dispose(),
        (this.cifra = null),
        this.setCursor(!1),
        this.cambiar(`dentro`),
        !this.avisado && ((this.avisado = !0), this.onEntrada?.()));
    }
    cambiar(e) {
      ((this.estadoActual = e), (this.fase = 0), this.onEstado?.(e));
    }
    paso(e) {
      return e <= 0 ? 1 : Math.min(1, this.fase / e);
    }
    place() {
      (this.group.position.copy(this.camara.position),
        this.group.quaternion.copy(this.camara.quaternion));
      let e = Math.max(0.2, this.config.distancia),
        t = 2 * e * Math.tan(p.degToRad(this.camara.fov) / 2),
        n = t * this.camara.aspect,
        r = t * this.config.altura,
        i = n * Me(this.config.botonLlenado, this.camara.aspect, oo),
        a = (i * 320) / Ya;
      (this.boton.scale.set(i, a, 1), this.boton.position.set(0, r, -e));
      let o = Math.max(1, this.config.auraMargen),
        s = 1 + this.aura.material.uniforms.uEstallido.value * 0.9;
      (this.auraMalla.scale.set(i * o * s, a * o * s, 1),
        this.auraMalla.position.set(0, r, -e + 0.01));
    }
    apply() {
      ((this.ignicion.base = this.config.apagado),
        (this.ignicion.estela = this.config.estela),
        (this.ignicion.ambiente = this.config.apagadoCuerpo),
        this.cifra?.aplicar(),
        ao(this.botonLienzo, this.estilo(), this.config.botonTexto),
        (this.botonTextura.needsUpdate = !0));
      let e = Math.max(0, this.config.brillo);
      (this.botonMaterial.color.setScalar(e),
        this.config.bloomLienzos
          ? H(this.boton)
          : this.boton.layers.disable(1));
      let t = Za(this.config.botonFilo),
        n = Math.max(1, this.config.auraMargen);
      (this.aura.encajar(
        t.aspecto,
        t.ancho / 2 / n,
        t.alto / 2 / n,
        t.radio / n,
      ),
        this.aura.aplicar({
          color: this.config.auraColor,
          fuerza: this.config.auraFuerza,
          grosor: this.config.auraGrosor / n,
          velocidad: this.config.auraVelocidad,
          halo: this.config.auraHalo / n,
          latido: this.config.auraLatido,
          rugosidad: this.config.auraRugosidad / n,
          nodos: this.config.auraNodos,
        }),
        this.asegurarFuente(),
        this.place());
    }
    estilo() {
      return {
        fondo: this.config.fondo,
        borde: this.config.botonBorde,
        sombra: this.config.botonSombra,
        tinta: this.config.tinta,
        suciedad: this.config.suciedad,
        grosor: this.config.botonFilo,
      };
    }
    asegurarFuente() {
      if (this.esperandoFuente) return;
      let e = typeof document > `u` ? null : document.fonts;
      e?.load &&
        (e.check(`800 100px Panchang`) ||
          ((this.esperandoFuente = !0),
          e
            .load(`800 100px Panchang`)
            .then(() => {
              ((this.esperandoFuente = !1),
                !this.disposed &&
                  (ao(this.botonLienzo, this.estilo(), this.config.botonTexto),
                  (this.botonTextura.needsUpdate = !0)));
            })
            .catch(() => {
              this.esperandoFuente = !1;
            })));
    }
    activarInteraccion(e) {
      (this.desactivarInteraccion(),
        (this.lienzo = e),
        this.puntero.seguir(e),
        (this.onClick = (e) => {
          if (this.estadoActual !== `listo`) return;
          let t = e.target instanceof Element ? e.target : null;
          (t?.closest(
            `a,button,input,select,textarea,[role="button"],[data-intro-ignore],.lil-gui`,
          ) &&
            !t.closest(`[data-intro-entrar]`)) ||
            (!this.anfitrion &&
              (!this.puntero.apuntar(e.clientX, e.clientY) || !this.picar())) ||
            this.entrar();
        }),
        document.addEventListener(`click`, this.onClick),
        (this.onKeyDown = (e) => {
          e.repeat ||
            e.defaultPrevented ||
            this.estadoActual !== `listo` ||
            ![`Enter`, ` `].includes(e.key) ||
            (e.target instanceof Element ? e.target : null)?.closest(
              `a,button,input,select,textarea,[role="button"],[contenteditable="true"],.lil-gui`,
            ) ||
            (e.preventDefault(), this.entrar());
        }),
        document.addEventListener(`keydown`, this.onKeyDown));
    }
    desactivarInteraccion() {
      (this.puntero.soltar(),
        this.lienzo &&
          (this.onClick && document.removeEventListener(`click`, this.onClick),
          this.setCursor(!1)),
        this.onKeyDown &&
          document.removeEventListener(`keydown`, this.onKeyDown),
        (this.onKeyDown = null),
        (this.onClick = null),
        (this.lienzo = null));
    }
    resolverPuntero() {
      this.puntero.pendiente &&
        (this.puntero.atendido(),
        this.setCursor(
          this.estadoActual === `listo` &&
            this.puntero.sobre &&
            (!!this.anfitrion || this.picar()),
        ));
    }
    picar() {
      return this.boton.visible
        ? (this.raycaster.setFromCamera(this.puntero.ndc, this.camara),
          this.raycaster.intersectObject(this.boton, !1).length > 0)
        : !1;
    }
    setCursor(e) {
      !this.lienzo ||
        e === this.cursorPuesto ||
        ((this.cursorPuesto = e),
        (this.lienzo.style.cursor = e ? `pointer` : ``));
    }
    dispose() {
      this.disposed ||
        ((this.disposed = !0),
        this.soltarContexto?.(),
        (this.soltarContexto = null),
        (this.onEstado = null),
        (this.onEntrada = null),
        (this.onPulsar = null),
        (this.onEncendido = null),
        (this.puedeTerminar = null),
        (this.anfitrion = null),
        this.desactivarInteraccion(),
        this.group.removeFromParent(),
        this.boton.geometry.dispose(),
        this.botonMaterial.dispose(),
        this.botonTextura.dispose(),
        this.aura.dispose(),
        this.cifra?.dispose(),
        this.group.clear());
    }
    static crearLienzo(e, t) {
      let n = document.createElement(`canvas`);
      return ((n.width = e), (n.height = t), n);
    }
    static crearTextura(e) {
      let t = new ae(e);
      return (
        (t.colorSpace = i),
        (t.wrapS = k),
        (t.wrapT = k),
        (t.generateMipmaps = !0),
        (t.minFilter = y),
        (t.magFilter = _),
        (t.anisotropy = 8),
        t
      );
    }
    static crearMaterial(e) {
      return new ce({
        map: e,
        transparent: !0,
        opacity: 1,
        depthWrite: !1,
        depthTest: !1,
        toneMapped: !1,
        fog: !1,
        side: 0,
      });
    }
  },
  Z = {
    version: 1,
    fps: 30,
    fuente: `scripts/blender/export_pulsador.py (base de nuevo_pulsador.glb + la seta y el clip de alien-loader.glb)`,
    nodes: { button: `Button`, cap: `Button_Cap` },
    clip: {
      name: `Press_Button`,
      duration: 5.766666889190674,
      events: { contact: 3.3, depressed: 3.5, release: 3.8333333333333335 },
    },
    buttonTravel: 0.026,
    colocacion: `mismas coordenadas que Alien_Placement en alien.glb: cuélgalos del mismo padre con add(), no attach()`,
  },
  co = class {
    config;
    phase = `loading`;
    time = 0;
    direct = !1;
    available = !1;
    reduced = !1;
    completed = !1;
    resumePhase = 0;
    constructor(e = je()) {
      this.config = e;
    }
    get readyFor100() {
      return [`run`, `recovery`, `idle`, `fallback`, `hidden`].includes(
        this.phase,
      );
    }
    get waiting() {
      return this.phase === `idle` || this.phase === `fallback`;
    }
    get moving() {
      return ![`loading`, `fallback`, `hidden`].includes(this.phase);
    }
    get clip() {
      return this.phase === `walk`
        ? `Walk_Loop`
        : this.phase === `braking`
          ? `Load_Brake`
          : this.phase === `waiting-load`
            ? `Load_Idle`
            : this.phase === `resuming`
              ? `Load_Resume`
              : this.phase === `run`
                ? `Run_Flip`
                : this.phase === `recovery`
                  ? `Recovery`
                  : this.phase === `idle`
                    ? `Idle_Loop`
                    : `Approach_Start`;
    }
    get approachOffset() {
      return this.clip === `Approach_Start` || this.clip === `Walk_Loop`;
    }
    get blendingResume() {
      return (
        this.phase === `resuming` && this.time < G.transitions.loadResumeBlend
      );
    }
    get resumeIdleTime() {
      return (this.resumePhase + this.time) % G.clips.Load_Idle.duration;
    }
    beginLoad() {
      this.available = !1;
    }
    ready() {
      this.available = !0;
    }
    fallback() {
      ((this.phase = `fallback`), (this.time = 0));
    }
    hide() {
      this.phase = `hidden`;
    }
    reset() {
      ((this.time = 0),
        (this.resumePhase = 0),
        (this.completed = !1),
        (this.direct = !1),
        (this.phase = this.reduced ? `fallback` : `loading`));
    }
    get speed() {
      return Math.max(
        0.05,
        [`idle`, `waiting-load`].includes(this.phase)
          ? this.config.velocidadEspera
          : this.config.velocidadLlegada,
      );
    }
    update(e, t, n, r = !1) {
      if (this.phase === `hidden`) return;
      if (r) {
        ((this.reduced = !0), this.fallback());
        return;
      }
      if (this.phase === `fallback`) return;
      this.completed ||= n;
      let i = Math.min(0.1, Math.max(0, e));
      if (this.phase === `loading`) {
        if (!this.available || t < this.config.salida) return;
        ((this.phase = `approach`),
          (this.time = 0),
          (this.direct = this.completed));
      }
      for (let e = 0; i > 1e-9 && e < 8; e++) {
        this.phase === `waiting-load` &&
          this.completed &&
          ((this.resumePhase = this.time),
          (this.phase = `resuming`),
          (this.time = 0));
        let e = this.speed;
        if (this.phase === `waiting-load` || this.phase === `idle`) {
          this.time = (this.time + i * e) % G.clips[this.clip].duration;
          break;
        }
        let t = this.phase === `walk` && !this.completed,
          n = t ? G.transitions.loadBrakeAt : G.clips[this.clip].duration,
          r = Math.min(i * e, Math.max(0, n - this.time));
        if (((this.time += r), (i -= r / e), this.time < n - 1e-8)) break;
        ((this.time = 0),
          t
            ? (this.phase = `braking`)
            : this.phase === `approach`
              ? (this.phase = this.direct ? `run` : `walk`)
              : this.phase === `walk` || this.phase === `resuming`
                ? (this.phase = `run`)
                : this.phase === `braking`
                  ? (this.phase = `waiting-load`)
                  : this.phase === `run`
                    ? (this.phase = `recovery`)
                    : this.phase === `recovery` && (this.phase = `idle`));
      }
    }
  },
  lo = `Pulsar`,
  uo = G.clips[lo],
  fo = class {
    config;
    time = 0;
    active = !1;
    clip = 0;
    releaseAt = -1;
    clipEndAt = -1;
    constructor(e = je()) {
      this.config = e;
    }
    start() {
      return this.active
        ? !1
        : ((this.active = !0),
          (this.time = 0),
          (this.clip = 0),
          (this.releaseAt = -1),
          (this.clipEndAt = -1),
          !0);
    }
    update(e) {
      if (!this.active) return;
      let t = Math.min(0.1, Math.max(0, e));
      ((this.time += t),
        this.clip < uo.duration &&
          (this.clip = Math.min(
            uo.duration,
            this.clip + Math.max(0.05, this.config.velocidadPulsacion) * t,
          )),
        this.releaseAt < 0 &&
          this.clip >= uo.events.release &&
          (this.releaseAt = this.time),
        this.clipEndAt < 0 &&
          this.clip >= uo.duration &&
          (this.clipEndAt = this.time),
        this.time > this.end && (this.time = this.end));
    }
    get contact() {
      return this.active && this.clip >= uo.events.contact;
    }
    get clipTime() {
      return this.clip;
    }
    get dissolveAt() {
      return (
        (this.releaseAt >= 0 ? this.releaseAt : 1 / 0) +
        Math.max(0, this.config.disolucionRetraso)
      );
    }
    get dissolveDuration() {
      return Math.max(0.01, this.config.disolucionDuracion);
    }
    get dissolve() {
      return Math.max(
        0,
        Math.min(1, (this.time - this.dissolveAt) / this.dissolveDuration),
      );
    }
    get end() {
      return this.releaseAt < 0 || this.clipEndAt < 0
        ? 1 / 0
        : Math.max(this.dissolveAt + this.dissolveDuration, this.clipEndAt);
    }
    get done() {
      return this.active && this.time >= this.end;
    }
    reset() {
      ((this.time = 0),
        (this.clip = 0),
        (this.releaseAt = -1),
        (this.clipEndAt = -1),
        (this.active = !1));
    }
  },
  po = class {
    root;
    mixer;
    mesh;
    hips;
    foot;
    feet = [];
    fromPosition = new b();
    toPosition = new b();
    fromRotation = new P();
    toRotation = new P();
    parentRotation = new P();
    delta = new b();
    point = new b();
    inverse = new e();
    assetInverse = new e();
    constructor(e, t, n, r) {
      if (
        ((this.root = e),
        (this.mixer = t),
        (this.mesh = n),
        (this.hips = e.getObjectByName(r.hips)),
        (this.foot = e.getObjectByName(r.foot)),
        !this.hips?.isBone || !this.foot?.isBone)
      )
        throw Error(`Anfitrión sin huesos de apoyo (${r.hips}, ${r.foot})`);
      let i = new Set(
          n.skeleton.bones.flatMap((e, t) => (r.feet.test(e.name) ? [t] : [])),
        ),
        a = n.geometry.getAttribute(`skinIndex`),
        o = n.geometry.getAttribute(`skinWeight`);
      for (let e = 0; e < a.count; e++) {
        let t = 0;
        for (let n = 0; n < 4; n++)
          i.has(a.getComponent(e, n)) && (t += o.getComponent(e, n));
        t > 0.9 && this.feet.push(e);
      }
    }
    blend(e, t, n) {
      ((e.enabled = t.enabled = !0),
        e.setEffectiveWeight(1),
        t.setEffectiveWeight(0),
        this.mixer.update(0),
        this.root.updateWorldMatrix(!0, !0),
        this.foot.getWorldPosition(this.fromPosition),
        this.foot.getWorldQuaternion(this.fromRotation),
        e.setEffectiveWeight(0),
        t.setEffectiveWeight(1),
        this.mixer.update(0),
        this.root.updateWorldMatrix(!0, !0),
        this.foot.getWorldPosition(this.toPosition),
        this.foot.getWorldQuaternion(this.toRotation),
        e.setEffectiveWeight(1 - n),
        t.setEffectiveWeight(n),
        this.mixer.update(0),
        this.root.updateWorldMatrix(!0, !0),
        this.foot.parent.getWorldQuaternion(this.parentRotation).invert(),
        this.foot.quaternion
          .copy(this.parentRotation)
          .multiply(this.fromRotation.slerp(this.toRotation, n)),
        this.foot.getWorldPosition(this.point),
        this.delta
          .copy(this.fromPosition)
          .lerp(this.toPosition, n)
          .sub(this.point),
        this.shiftRoot());
    }
    ground(e) {
      (this.root.updateWorldMatrix(!0, !1),
        this.root.updateMatrixWorld(!0),
        this.mesh.skeleton.update(),
        this.assetInverse.copy(this.root.matrixWorld).invert());
      let t = 1 / 0;
      for (let e of this.feet)
        (this.mesh
          .getVertexPosition(e, this.point)
          .applyMatrix4(this.mesh.matrixWorld)
          .applyMatrix4(this.assetInverse),
          (t = Math.min(t, this.point.y)));
      t >= e ||
        (this.inverse.copy(this.root.matrixWorld).setPosition(0, 0, 0),
        this.delta.set(0, e - t, 0).applyMatrix4(this.inverse),
        this.shiftRoot());
    }
    shiftRoot() {
      (this.inverse
        .copy(this.hips.parent.matrixWorld)
        .invert()
        .setPosition(0, 0, 0),
        this.hips.position.add(this.delta.applyMatrix4(this.inverse)),
        this.root.updateWorldMatrix(!0, !0));
    }
  };
function mo(e) {
  let t = Math.max(0, Math.min(1, e));
  return t * t * t * (10 + t * (-15 + 6 * t));
}
var ho = {
    "Alien · PBR original": `emisionPiel`,
    "Pulsador · Rojo señal": `emisionCabeza`,
    "Pulsador · Anillo de luz": `emisionAro`,
    "Pulsador · Hierro": `emisionCuerpo`,
    "Pulsador · Pegatinas": `emisionCuerpo`,
  },
  go = `Pulsador · Anillo de luz`,
  _o = `intro-aro`,
  vo = `intro-cabeza`,
  yo = G.clips.Pulsado_Carrera.corte_s,
  bo = Z.clip.events.contact - G.clips[lo].events.contact,
  xo = `intro-seta`,
  So = class {
    parent;
    camera;
    tunnel;
    physics;
    config;
    prestamo;
    group = new D();
    arrival;
    activation;
    motion;
    outgoing = null;
    outgoingTime = 0;
    arrivalOutgoing = null;
    poseBlend = null;
    removed = !1;
    reload = null;
    contactPoint = new b();
    section;
    supports = [new b(-0.2, 0, -0.25), new b(0.2, 0, 0.25)];
    asset = null;
    mixer = null;
    action = null;
    pulsador = null;
    capMixer = null;
    capAction = null;
    actions = new Map();
    placement = null;
    placementBase = new b();
    walkOffset = new b();
    directOffset = new b();
    alienHolo = null;
    buttonHolo = null;
    aroHolo = null;
    cabezaHolo = null;
    bloom;
    ready = !1;
    disposed = !1;
    generation = 0;
    appearance = 0;
    materializacion = 0;
    materializacionAlien = 0;
    relojRespiracion = 0;
    latido = 1;
    cancelLoad = null;
    emisores = [];
    focoPosicion = new b();
    focoDestino = new b();
    sombras = null;
    volumenesSombra = [];
    volumenesAlien = [];
    alCeder = null;
    cedido = !1;
    cesionFallida = !1;
    luzSuelo = null;
    fuenteSuelo = null;
    cabeza = null;
    reflejoPosicion = new b();
    pedirPuntual = null;
    puntual = null;
    setaPosicion = new b();
    cajaPulsador = new O();
    constructor(e, t, n, r, i, a = je(), o = null) {
      ((this.parent = e),
        (this.camera = t),
        (this.tunnel = n),
        (this.physics = i),
        (this.config = a),
        (this.prestamo = o),
        (this.arrival = new co(a)),
        (this.activation = new fo(a)),
        (this.group.name = `HoyoIntroAlien`),
        (this.group.renderOrder = 0),
        e.add(this.group),
        (this.motion = new R(n, i, `intro`)),
        (this.section = r.seccion(`hero`)),
        (this.bloom = r.bloom));
    }
    get admite100() {
      return this.arrival.readyFor100;
    }
    get esperando() {
      return (
        this.arrival.phase === `fallback` ||
        (this.arrival.waiting && this.materializacion >= 1)
      );
    }
    get fase() {
      return this.arrival.phase;
    }
    load(e, t, n, r = L) {
      ((this.reload = () => this.load(e, t, void 0, r)),
        (this.ready = !1),
        this.arrival.beginLoad());
      let i = ++this.generation;
      return new Promise((a) => {
        let o = () => {
            ((this.cancelLoad = null), a());
          },
          s = () => {
            this.generation === i &&
              (this.generation++,
              this.arrival.fallback(),
              this.releaseAsset(),
              o());
          };
        this.cancelLoad = () => {
          (this.generation++, o());
        };
        let c = [0, 0],
          l = () => n?.(c[0] * 0.81 + c[1] * 0.19),
          u = (e, t) =>
            r(e, (e) => {
              ((c[t] = e), l());
            });
        Promise.all([u(e.alien, 0), u(e.pulsador, 1)])
          .then(async ([e, n]) => {
            if (this.disposed || this.generation !== i) {
              (To(e.scene), To(n.scene));
              return;
            }
            (this.adopt(e, n),
              a(),
              await t().catch(() => {}),
              !(this.disposed || this.generation !== i) &&
                ((this.ready = !0), this.arrival.ready(), o()));
          })
          .catch((e) => {
            this.generation === i &&
              (console.warn(`La entrada continúa sin anfitrión:`, e), s());
          });
      });
    }
    adopt(e, t) {
      ((this.asset = e),
        (this.pulsador = t),
        U(e.scene),
        U(t.scene),
        (this.placement = e.scene.getObjectByName(G.nodes.placement) ?? null));
      let n = e.scene.getObjectByName(G.nodes.alien),
        r = t.scene.getObjectByName(Z.nodes.button);
      if (!this.placement || !n || !r)
        throw Error(`Anfitrión sin nodos requeridos`);
      ((this.cabeza = t.scene.getObjectByName(Z.nodes.cap) ?? null),
        this.placementBase.copy(this.placement.position),
        this.walkOffset
          .fromArray(G.clips.Run_Flip.hipsStart)
          .sub(new b().fromArray(G.clips.Walk_Loop.hipsEnd)),
        this.directOffset
          .fromArray(G.clips.Run_Flip.hipsStart)
          .sub(new b().fromArray(G.clips.Approach_Start.hipsEnd)),
        e.scene.updateMatrixWorld(!0));
      let i = this.placement.parent;
      if (i) {
        let e = i.matrixWorld.clone().invert();
        (e.setPosition(0, 0, 0),
          this.walkOffset.applyMatrix4(e),
          this.directOffset.applyMatrix4(e));
      }
      (this.group.add(e.scene),
        this.group.add(t.scene),
        (this.mixer = new A(e.scene)),
        (this.capMixer = new A(t.scene)));
      let a = t.animations.find((e) => e.name === Z.clip.name);
      if (!a) throw Error(`Pulsador sin el clip ${Z.clip.name}`);
      if (
        ((this.capAction = this.capMixer.clipAction(a)),
        this.capAction.setLoop(S, 1),
        (this.capAction.clampWhenFinished = !0),
        !n?.isSkinnedMesh)
      )
        throw Error(`Anfitrión sin malla animada`);
      this.poseBlend = new po(e.scene, this.mixer, n, {
        hips: G.nodes.hips,
        foot: G.nodes.foot,
        feet: /Foot|Toe/,
      });
      for (let t of Object.keys(G.clips).filter(
        (e) => G.clips[e].grupo === `entrada`,
      )) {
        let n = e.animations.find((e) => e.name === t);
        if (!n) throw Error(`Falta el clip ${t}`);
        let r = this.mixer.clipAction(n);
        (r.setLoop(S, 1), (r.clampWhenFinished = !0), this.actions.set(t, r));
      }
      this.emisores = [];
      for (let n of [e.scene, t.scene])
        n.traverse((e) => {
          let t = e;
          if (t.isMesh) {
            t.frustumCulled = !1;
            for (let e of Array.isArray(t.material)
              ? t.material
              : [t.material]) {
              if (!(e instanceof N)) continue;
              let t = ho[e.name];
              t &&
                (e.emissive.copy(e.color),
                (e.emissiveMap = e.map),
                this.emisores.push({ material: e, grupo: t }));
            }
          }
        });
      (this.aplicarEmision(),
        (this.alienHolo = this.section.pieza()),
        this.alienHolo.adoptar(n));
      let o = wo(r, go);
      o &&
        (H(o),
        (this.aroHolo = this.section.pieza(!0)),
        this.aroHolo.adoptar(o));
      let s = Co(this.cabeza);
      if (this.cabeza && s.length) {
        for (let e of s) H(e);
        ((this.cabezaHolo = this.section.pieza(!0)),
          this.cabezaHolo.adoptar(this.cabeza));
      }
      ((this.buttonHolo = this.section.pieza()),
        this.buttonHolo.adoptar(r, new Set([...(o ? [o] : []), ...s])),
        this.alienHolo.controlar(0),
        this.controlarPulsador(1),
        (this.placement.visible = !1),
        this.place(0),
        this.colgarSombras());
    }
    setSombras(e) {
      (this.soltarSombras(), (this.sombras = e), this.colgarSombras());
    }
    colgarSombras() {
      this.soltarSombras();
      let e = this.sombras,
        t = this.asset?.scene;
      if (!e || !t) return;
      let n = this.pulsador?.scene.getObjectByName(Z.nodes.button),
        r = n ? e.anadirCaja(n, { holograma: this.buttonHolo }) : null;
      if ((r && this.volumenesSombra.push(r), !this.cedido))
        for (let [n, r, i] of [...$e, ...Je]) {
          let a = t.getObjectByName(n),
            o = t.getObjectByName(r);
          a &&
            o &&
            this.volumenesAlien.push(
              e.anadirSegmento(a, o, i, { holograma: this.alienHolo }),
            );
        }
    }
    get foco() {
      return this.prestamo?.focos[0] ?? null;
    }
    soltarFoco() {
      (this.foco?.apagar(), this.prestamo?.soltar());
    }
    soltarSombras() {
      (this.sombras?.quitar(this.volumenesSombra),
        this.sombras?.quitar(this.volumenesAlien),
        (this.volumenesSombra.length = 0),
        (this.volumenesAlien.length = 0));
    }
    ceder() {
      if (this.cedido || this.cesionFallida || !this.asset) return;
      if (!this.alCeder?.(this.group, this.placement)) {
        this.cesionFallida = !0;
        return;
      }
      this.cedido = !0;
      let e = this.asset.scene.getObjectByName(G.nodes.alien);
      (e && (e.visible = !1),
        this.sombras?.quitar(this.volumenesAlien),
        (this.volumenesAlien.length = 0),
        this.alienHolo?.apagar());
    }
    update(e, t, n, r = !1) {
      if (this.disposed || this.arrival.phase === `hidden`) return;
      this.arrival.update(e, t, n, r);
      let i = this.arrival.phase === `fallback`;
      if (((this.group.visible = !i), i)) {
        (this.alienHolo?.controlar(0),
          this.controlarPulsador(0),
          this.foco?.apagar(),
          this.fuenteSuelo?.apagar(),
          this.florecer(!1),
          this.soltarPuntual());
        return;
      }
      if (!this.ready || !this.asset || !this.placement) return;
      let a = Math.max(0, e),
        o = a / Math.max(0.01, this.config.aparicionPulsador);
      ((this.appearance = Math.min(1, this.appearance + o)),
        ((t >= 0.999 && this.arrival.waiting) || this.materializacion > 0) &&
          (this.materializacion = Math.min(1, this.materializacion + o)),
        this.controlarPulsador(1 - this.materializacion),
        this.florecer(this.materializacion > 0),
        this.respirar(a, r),
        (this.placement.visible = this.arrival.phase !== `loading`),
        this.placement.visible &&
          this.materializacionAlien < 1 &&
          !this.activation.active &&
          !this.cedido &&
          ((this.materializacionAlien = Math.min(
            1,
            this.materializacionAlien +
              a / Math.max(0.01, this.config.aparicionAlien),
          )),
          this.alienHolo?.controlar(1 - this.materializacionAlien)));
      let s = this.actions.get(this.arrival.clip);
      if (
        (s !== this.action &&
          (this.action?.stop(),
          s.reset().setEffectiveWeight(1).play(),
          (this.action = s)),
        (s.time = this.arrival.time),
        s.setEffectiveWeight(1),
        this.placement.position.copy(this.placementBase),
        this.arrival.approachOffset &&
          this.placement.position.add(
            this.arrival.direct ? this.directOffset : this.walkOffset,
          ),
        this.arrival.blendingResume)
      ) {
        let e = this.actions.get(`Load_Idle`);
        (this.arrivalOutgoing !== e &&
          (e.reset().play(), (this.arrivalOutgoing = e)),
          (e.time = this.arrival.resumeIdleTime),
          this.poseBlend.blend(
            e,
            s,
            mo(this.arrival.time / G.transitions.loadResumeBlend),
          ));
      } else
        (this.arrivalOutgoing?.stop(),
          (this.arrivalOutgoing = null),
          this.mixer.update(0));
      (this.arrival.clip === `Load_Resume` &&
        this.poseBlend.ground(G.transitions.footClearance),
        this.place(e),
        this.construirPulsador(),
        this.alumbrar(this.appearance, this.materializacion));
    }
    respirar(e, t) {
      let n = this.config,
        r = 1;
      if (
        !t &&
        this.materializacion >= 1 &&
        this.arrival.waiting &&
        !this.activation.active &&
        n.respiracionCabeza > 0
      ) {
        this.relojRespiracion += e;
        let t =
          (this.relojRespiracion / Math.max(0.2, n.respiracionPeriodo)) *
          Math.PI *
          2;
        r = 1 - Math.min(1, n.respiracionCabeza) * (0.5 - 0.5 * Math.cos(t));
      }
      this.aplicarLatido(r);
    }
    aplicarLatido(e) {
      if (!(Math.abs(e - this.latido) < 1e-4)) {
        this.latido = e;
        for (let { material: t, grupo: n } of this.emisores)
          n === `emisionCabeza` &&
            (t.emissiveIntensity = Math.max(0, this.config.emisionCabeza * e));
      }
    }
    place(e) {
      let t = Math.tan(p.degToRad(this.camera.fov) / 2),
        n = this.tunnel.sueloY ?? -this.tunnel.radius * 0.3,
        { ancho: r, escalaMax: i, lateral: a, alturaSuelo: o } = this.config,
        s = I.resolver(this.config.distancia),
        c = 2 * (s + this.camera.position.z) * t,
        l = Math.min(i, (c * this.camera.aspect * r) / _e);
      (this.group.scale.setScalar(l),
        this.group.position.set(a * l, n, -s),
        this.group.quaternion.identity(),
        this.motion.prepare(this.group, l, 0, this.supports),
        this.motion.update(e),
        (this.group.position.y += o));
    }
    get esperaToque() {
      return this.activation.active
        ? !1
        : this.removed || this.arrival.phase === `fallback`
          ? !0
          : this.materializacion >= 1 && this.arrival.waiting;
    }
    aplicarEmision() {
      for (let { material: e, grupo: t } of this.emisores)
        e.emissiveIntensity = Math.max(
          0,
          this.config[t] * (t === `emisionCabeza` ? this.latido : 1),
        );
    }
    alumbrar(e, t = e) {
      let n = this.config,
        r = this.foco;
      (r &&
        (this.group.updateWorldMatrix(!0, !1),
        this.group.localToWorld(
          this.focoPosicion.set(n.focoX, n.focoY, n.focoZ),
        ),
        this.group.localToWorld(
          this.focoDestino.set(n.focoDestinoX, n.focoDestinoY, n.focoDestinoZ),
        ),
        r.colocar(this.focoPosicion, this.focoDestino),
        r.formar({
          color: n.focoColor,
          potencia: n.focoPotencia,
          alcance: n.focoAlcance,
          caida: n.focoCaida,
          apertura: n.focoApertura,
          penumbra: n.focoPenumbra,
        }),
        r.setNivel(e)),
        this.luzSuelo?.setFocoEnSuelo(n.focoSuelo));
      let i = this.fuenteSuelo;
      (i &&
        this.cabeza &&
        (this.cabeza.updateWorldMatrix(!0, !1),
        i.colocar(
          this.cabeza.localToWorld(
            this.reflejoPosicion.set(0, n.reflejoAltura, 0),
          ),
        ),
        i.formar({
          color: n.reflejoColor,
          potencia: n.reflejoPotencia * this.latido,
          alcance: n.reflejoAlcance,
          rugosidad: n.reflejoRugosidad,
          madera: n.reflejoMadera,
        }),
        i.setNivel(t)),
        this.alumbrarSeta(t));
    }
    alumbrarSeta(e) {
      let t = this.config;
      !this.puntual &&
        e > 0 &&
        t.luzSetaPotencia > 0 &&
        this.pedirPuntual &&
        (this.puntual = this.pedirPuntual());
      let n = this.puntual?.luz;
      if (n) {
        if (!this.cabeza || e <= 0) {
          n.intensity = 0;
          return;
        }
        (this.cabeza.updateWorldMatrix(!0, !1),
          this.cabeza.localToWorld(
            this.setaPosicion.set(0, t.luzSetaAltura, 0),
          ),
          n.parent && n.parent.worldToLocal(this.setaPosicion),
          n.position.copy(this.setaPosicion),
          n.color.set(t.luzSetaColor),
          (n.distance = t.luzSetaAlcance * this.group.scale.x),
          (n.decay = t.luzSetaCaida),
          (n.intensity = t.luzSetaPotencia * this.latido * e));
      }
    }
    soltarPuntual() {
      this.puntual &&=
        (this.puntual.luz && (this.puntual.luz.intensity = 0),
        this.puntual.soltar(),
        null);
    }
    setPuntual(e) {
      (this.soltarPuntual(), (this.pedirPuntual = e));
    }
    setLuzSuelo(e) {
      (this.fuenteSuelo?.soltar(),
        (this.luzSuelo = e),
        (this.fuenteSuelo = e?.pedir(`intro`) ?? null));
    }
    pulsar() {
      return !this.ready ||
        !this.esperando ||
        !this.asset ||
        !this.activation.start()
        ? !1
        : (this.aplicarLatido(1),
          (this.outgoing = this.action),
          (this.outgoingTime = this.outgoing?.time ?? 0),
          (this.action = this.actions.get(lo)),
          this.action.reset().setEffectiveWeight(0).play(),
          this.capAction?.reset().play(),
          this.construirPulsador(),
          !0);
    }
    get profundidadBoton() {
      let e = this.pulsador?.scene.getObjectByName(Z.nodes.cap);
      return e ? Math.abs(e.getWorldPosition(this.contactPoint).z) : 0;
    }
    actualizarPulsacion(e) {
      if (this.disposed || this.removed || !this.activation.active) return;
      this.activation.update(e);
      let t = mo(
        this.activation.clipTime / Math.max(0.01, this.config.mezclaPulsacion),
      );
      ((this.action.time = this.activation.clipTime),
        this.capAction &&
          ((this.capAction.time = this.activation.clipTime + bo),
          this.capMixer.update(0)),
        this.outgoing && t < 1
          ? ((this.outgoing.time =
              (this.outgoingTime + this.activation.clipTime) %
              G.clips.Idle_Loop.duration),
            this.poseBlend.blend(this.outgoing, this.action, t))
          : (this.outgoing?.stop(),
            (this.outgoing = null),
            this.action.setEffectiveWeight(1),
            this.mixer.update(0)),
        this.place(e),
        this.activation.clipTime >= yo - 1e-6 && this.ceder(),
        !this.cedido &&
          (!this.alCeder || this.cesionFallida) &&
          this.alienHolo?.controlar(this.activation.dissolve),
        this.controlarPulsador(this.activation.dissolve),
        this.florecer(this.activation.dissolve < 1),
        this.alumbrar(
          this.appearance * (1 - this.activation.dissolve),
          this.materializacion * (1 - this.activation.dissolve),
        ),
        this.activation.done && this.retirar());
    }
    retirar() {
      this.removed ||
        ((this.removed = !0),
        this.cancelLoad?.(),
        this.hide(),
        this.soltarFoco(),
        this.soltarPuntual(),
        this.releaseAsset(),
        (this.ready = !1),
        this.motion.dispose(),
        this.group.removeFromParent());
    }
    hide() {
      (this.arrival.hide(),
        (this.group.visible = !1),
        this.alienHolo?.controlar(0),
        this.controlarPulsador(0),
        this.foco?.apagar(),
        this.fuenteSuelo?.apagar(),
        this.florecer(!1),
        this.puntual?.luz && (this.puntual.luz.intensity = 0));
    }
    construirPulsador() {
      let e = [this.buttonHolo, this.aroHolo, this.cabezaHolo],
        t = this.pulsador?.scene.getObjectByName(Z.nodes.button),
        n = this.config.aparicionBanda;
      if (
        !t ||
        n <= 0 ||
        this.materializacion <= 0 ||
        this.materializacion >= 1
      ) {
        for (let t of e) t?.construirEnAltura(0, 0, 0);
        return;
      }
      (t.updateWorldMatrix(!0, !0), this.cajaPulsador.setFromObject(t));
      let { min: r, max: i } = this.cajaPulsador;
      for (let t of e) t?.construirEnAltura(r.y, i.y, n * (i.y - r.y));
    }
    controlarPulsador(e) {
      (this.buttonHolo?.controlar(e),
        this.aroHolo?.controlar(e),
        this.cabezaHolo?.controlar(e));
    }
    florecer(e) {
      let t = this.config;
      (this.bloom?.setFuente(_o, e && !!this.aroHolo && t.emisionAro > 0),
        this.bloom?.setFuente(
          vo,
          e && !!this.cabezaHolo && t.emisionCabeza > 0,
        ));
    }
    reset() {
      if ((this.activation.reset(), (this.cesionFallida = !1), this.cedido)) {
        this.cedido = !1;
        let e = this.asset?.scene.getObjectByName(G.nodes.alien);
        (e && (e.visible = !0), this.colgarSombras());
      }
      (this.outgoing?.stop(),
        (this.outgoing = null),
        (this.outgoingTime = 0),
        this.arrivalOutgoing?.stop(),
        (this.arrivalOutgoing = null),
        this.capAction?.stop(),
        this.removed &&
          ((this.removed = !1),
          (this.motion = new R(this.tunnel, this.physics, `intro`)),
          this.parent.add(this.group)),
        this.arrival.reset(),
        this.asset || (this.reload ? this.reload() : this.arrival.fallback()),
        (this.appearance = 0),
        (this.materializacion = 0),
        (this.materializacionAlien = 0),
        (this.relojRespiracion = 0),
        this.aplicarLatido(1),
        this.motion.reset(),
        (this.group.visible = !0));
    }
    releaseAsset() {
      (this.soltarSombras(),
        this.alienHolo && this.section.soltar(this.alienHolo),
        this.buttonHolo && this.section.soltar(this.buttonHolo),
        this.aroHolo && this.section.soltar(this.aroHolo),
        this.cabezaHolo && this.section.soltar(this.cabezaHolo),
        (this.alienHolo = null),
        (this.buttonHolo = null),
        (this.aroHolo = null),
        (this.cabezaHolo = null),
        this.bloom?.quitarFuente(_o),
        this.bloom?.quitarFuente(vo),
        this.asset &&
          (this.mixer?.stopAllAction(),
          this.mixer?.uncacheRoot(this.asset.scene),
          this.asset.scene.removeFromParent(),
          To(this.asset.scene)),
        this.pulsador &&
          (this.capMixer?.stopAllAction(),
          this.capMixer?.uncacheRoot(this.pulsador.scene),
          this.pulsador.scene.removeFromParent(),
          To(this.pulsador.scene)),
        (this.pulsador = null),
        (this.capMixer = null),
        (this.capAction = null),
        (this.outgoing = null),
        (this.arrivalOutgoing = null),
        (this.poseBlend = null),
        (this.emisores = []),
        (this.cabeza = null),
        (this.asset = null),
        (this.placement = null),
        (this.mixer = null),
        (this.action = null),
        this.actions.clear());
    }
    dispose() {
      this.disposed ||
        ((this.disposed = !0),
        this.cancelLoad?.(),
        this.hide(),
        this.soltarFoco(),
        this.soltarPuntual(),
        (this.pedirPuntual = null),
        this.releaseAsset(),
        this.removed || this.motion.dispose(),
        this.group.removeFromParent(),
        this.fuenteSuelo?.soltar(),
        (this.fuenteSuelo = null),
        (this.reload = null),
        (this.sombras = null),
        (this.luzSuelo = null));
    }
  };
function Co(e) {
  let t = [];
  return (
    e?.traverse((e) => {
      e.isMesh && t.push(e);
    }),
    t
  );
}
function wo(e, t) {
  let n = null;
  return (
    e.traverse((e) => {
      let r = e;
      n ||
        !r.isMesh ||
        ((Array.isArray(r.material) ? r.material : [r.material]).some(
          (e) => e.name === t,
        ) &&
          (n = r));
    }),
    n
  );
}
function To(e) {
  if (Ee(e)) {
    be(e);
    return;
  }
  let t = new Set();
  e.traverse((e) => {
    let n = e;
    if (!n.isMesh) return;
    let r = [n.geometry];
    for (let e of Array.isArray(n.material) ? n.material : [n.material]) {
      r.push(e);
      for (let t of Object.values(e)) t instanceof c && r.push(t);
    }
    n.isSkinnedMesh && r.push(n.skeleton);
    for (let e of r) t.has(e) || (t.add(e), e.dispose());
  });
}
var Eo = 2;
function Do(e, t = !1) {
  let n;
  if (t)
    (e.parent?.updateWorldMatrix(!0, !0),
      e.computeBoundingSphere(),
      (n = e.boundingSphere.clone()));
  else {
    let t = e.geometry;
    (t.boundingSphere || t.computeBoundingSphere(),
      (n = t.boundingSphere.clone()));
  }
  ((n.radius *= Eo), (e.boundingSphere = n), (e.frustumCulled = !0));
}
var Oo = 1024,
  ko = class {
    config;
    seccion;
    fundido;
    group = new D();
    coristas = [];
    pending = null;
    disposed = !1;
    radio = 1;
    giroInverso = new P();
    centroAnfitrion = new v();
    centroCorista = new v();
    sombras = null;
    volumenesSombra = [];
    solape = null;
    sitios = [];
    constructor(e, t, n) {
      ((this.config = e),
        (this.seccion = t),
        (this.fundido = n),
        (this.group.name = `HoyoCoroAnfitrion`),
        (this.group.visible = !1));
    }
    get parada() {
      return this.config.parada;
    }
    setSombras(e) {
      (this.soltarSombras(), (this.sombras = e));
      for (let e of this.coristas) this.colgarSombras(e);
    }
    colgarSombras(e) {
      let t = this.sombras;
      if (t)
        for (let [n, r, i] of Ke) {
          let a = e.root.getObjectByName(n),
            o = e.root.getObjectByName(r);
          a &&
            o &&
            this.volumenesSombra.push(
              t.anadirSegmento(a, o, i, { holograma: e.holograma }),
            );
        }
    }
    soltarSombras() {
      (this.sombras?.quitar(this.volumenesSombra),
        (this.volumenesSombra.length = 0));
    }
    setSolape(e) {
      for (let e of this.coristas)
        (e.darDeBajaSolape?.(), (e.darDeBajaSolape = null));
      this.solape = e;
      for (let e of this.coristas) this.altaSolape(e);
    }
    altaSolape(e) {
      let t = Ut(e.root);
      !this.solape ||
        !t ||
        (e.darDeBajaSolape = this.solape.registrar({
          materiales: Kt(e.root),
          huesos: t,
          marco: null,
          visible: () => this.group.visible,
        }));
    }
    get cuantos() {
      return this.coristas.length;
    }
    ocupados() {
      return (
        this.coristas.forEach((e, t) => {
          let n =
            this.sitios[t] ?? (this.sitios[t] = { lateral: 0, profundidad: 0 });
          ((n.lateral = I.resolver(e.config.lateral)),
            (n.profundidad = I.resolver(e.config.profundidad)));
        }),
        (this.sitios.length = this.coristas.length),
        this.sitios
      );
    }
    load(e, t) {
      return this.pending
        ? this.pending
        : this.disposed
          ? Promise.resolve()
          : ((this.pending = Promise.all(
              this.config.coristas.map(async (n) => {
                let r = await t(e);
                if (this.disposed) {
                  Ao(r.scene);
                  return;
                }
                this.adoptar(n, r);
              }),
            )
              .then(() => void 0)
              .catch((e) => {
                this.disposed ||
                  console.warn(`[coro] El anfitrión baila solo:`, e);
              })),
            this.pending);
    }
    adoptar(e, t) {
      let n = t.scene,
        r = t.animations.find((t) => t.name === e.baile);
      if (!r) throw (Ao(n), Error(`Corista sin el clip ${e.baile}`));
      U(n, Oo);
      let i = new A(n),
        a = i.clipAction(r).setLoop(x, 1 / 0);
      if (
        (a.play(),
        (a.time = p.clamp(e.fase, 0, 1) * r.duration),
        i.update(0),
        n.updateMatrixWorld(!0),
        n.traverse((e) => {
          e.isSkinnedMesh ? Do(e, !0) : e.isMesh && (e.frustumCulled = !1);
        }),
        !this.coristas.length)
      ) {
        let e = new O().setFromObject(n);
        this.radio = Math.max(e.max.y - e.min.y, 1) * 0.6;
      }
      let o = this.seccion.pieza(!1, !1, this.fundido);
      (o.adoptar(n), o.apagar());
      let s = new D();
      ((s.name = `HoyoCorista${this.coristas.length}`),
        s.add(n),
        this.group.add(s));
      let c = {
        config: e,
        pivote: s,
        root: n,
        clips: t.animations,
        mixer: i,
        action: a,
        ritmo: new Ce(),
        holograma: o,
        darDeBajaSolape: null,
      };
      (this.coristas.push(c), this.colgarSombras(c), this.altaSolape(c));
    }
    aplicarBaile(e) {
      let t = this.coristas.find((t) => t.config === e);
      if (!t) return;
      let n = t.clips.find((t) => t.name === e.baile);
      if (!n) {
        console.warn(`[coro] sin el clip ${e.baile}`);
        return;
      }
      (t.action.getClip() !== n &&
        (t.action.stop(),
        t.mixer.uncacheAction(t.action.getClip()),
        (t.action = t.mixer.clipAction(n).setLoop(x, 1 / 0)),
        t.action.play()),
        (t.action.time = p.clamp(e.fase, 0, 1) * n.duration),
        t.mixer.update(0),
        t.ritmo.reiniciar(),
        t.root.updateMatrixWorld(!0),
        t.root.traverse((e) => {
          e.isSkinnedMesh && Do(e, !0);
        }));
    }
    actualizar(e, t, n, r, i) {
      if (
        !this.config.visible ||
        e !== this.config.parada ||
        !this.coristas.length
      ) {
        this.esconder();
        return;
      }
      ((this.group.visible = !0),
        this.giroInverso.copy(t.quaternion).invert(),
        this.group.quaternion.copy(this.giroInverso));
      let a = Math.max(0.01, t.scale.x),
        o = this.radio * a,
        s = this.seccion.tramo;
      n.centroEn(t.position.z, this.centroAnfitrion);
      for (let e of this.coristas) {
        let c = e.config,
          l = I.resolver(c.lateral),
          u = I.resolver(c.profundidad);
        (n
          .centroEn(t.position.z + u, this.centroCorista)
          .sub(this.centroAnfitrion),
          e.pivote.position.set(
            (l + this.centroCorista.x) / a,
            this.centroCorista.y / a,
            u / a,
          ),
          e.pivote.rotation.set(0, p.degToRad(c.giro), 0),
          e.ritmo.avanzar(e.mixer, r));
        let d = t.position.z + u;
        if (i.nav !== null) e.holograma.controlar(i.nav);
        else if (i.materializacion > 0) {
          let t = s.activo ? nt(d, s.inicio, s.completo) : 0;
          e.holograma.controlar(Math.max(i.materializacion, t));
        } else e.holograma.actualizar(d, o);
      }
    }
    esconder() {
      if (this.group.visible) {
        this.group.visible = !1;
        for (let e of this.coristas)
          (e.holograma.apagar(), e.ritmo.reiniciar());
      }
    }
    dispose() {
      if (!this.disposed) {
        ((this.disposed = !0), this.soltarSombras(), (this.sombras = null));
        for (let e of this.coristas)
          (e.darDeBajaSolape?.(),
            e.mixer.stopAllAction(),
            e.mixer.uncacheRoot(e.root),
            this.seccion.soltar(e.holograma),
            Ao(e.root));
        ((this.coristas.length = 0),
          this.group.removeFromParent(),
          this.group.clear());
      }
    }
  };
function Ao(e) {
  if ((e.removeFromParent(), Ee(e))) {
    be(e);
    return;
  }
  let t = new Set();
  e.traverse((e) => {
    let n = e;
    if (!n.isMesh) return;
    let r = [n.geometry];
    for (let e of Array.isArray(n.material) ? n.material : [n.material]) {
      r.push(e);
      for (let t of Object.values(e)) t instanceof c && r.push(t);
    }
    n.isSkinnedMesh && r.push(n.skeleton);
    for (let e of r) t.has(e) || (t.add(e), e.dispose());
  });
}
var jo = {
  visible: !0,
  parada: `dj`,
  coristas: [
    {
      baile: `Gangnam_Style`,
      fase: 0.3,
      lateral: z(7, 6.8),
      profundidad: z(0),
      giro: -15,
    },
    {
      baile: `Macarena_Dance`,
      fase: 0.65,
      lateral: z(6, 5.8),
      profundidad: z(-3.4, -3.3),
      giro: 5,
    },
  ],
};
function Mo() {
  let e = jo;
  return {
    ...e,
    coristas: e.coristas.map((e) => ({
      ...e,
      lateral: { ...e.lateral },
      profundidad: { ...e.profundidad },
    })),
  };
}
var No = 1024,
  Po = 3,
  Fo = 40,
  Io = 104729,
  Lo = null;
typeof window < `u` &&
  window.addEventListener(`resize`, () => {
    Lo = null;
  });
function Ro() {
  return ((Lo ??= F()), Lo);
}
var zo = class {
    config;
    seccion;
    fundido;
    group = new D();
    miembros = [];
    directores = new Map();
    pendientes = new Map();
    bailesFallidos = new Set();
    centroAnfitrion = new v();
    centroMiembro = new v();
    url = null;
    request = null;
    solape = null;
    disposed = !1;
    radio = 1;
    giroInverso = new P();
    sitios = [];
    claveSitios = ``;
    visibles = 0;
    constructor(e, t, n) {
      ((this.config = e),
        (this.seccion = t),
        (this.fundido = n),
        (this.group.name = `HoyoPublicoAnfitrion`),
        (this.group.visible = !1));
    }
    fuente(e, t) {
      ((this.url = e), (this.request = t));
    }
    setSolape(e) {
      for (let e of this.miembros)
        (e.darDeBajaSolape?.(), (e.darDeBajaSolape = null));
      this.solape = e;
      for (let e of this.miembros) this.altaSolape(e);
    }
    get tope() {
      return Math.max(
        0,
        Math.round(Ro() ? this.config.topeMovil : this.config.topeEscritorio),
      );
    }
    get enPista() {
      return this.visibles;
    }
    get creados() {
      return this.miembros.length;
    }
    get poses() {
      return this.directores.size;
    }
    invalidar() {
      this.claveSitios = ``;
    }
    actualizar(e, t, n, r, i, a, o, s, c) {
      let l = Math.min(Math.max(0, Math.floor(a)), this.tope);
      if (!this.config.visible || !e || l <= 0) {
        this.esconder();
        return;
      }
      this.crear(l);
      let u = `${e}|${r.toFixed(3)}|${i.toFixed(2)}|${o.map((e) => `${e.lateral.toFixed(2)},${e.profundidad.toFixed(2)}`).join(`;`)}`;
      if (u !== this.claveSitios) {
        ((this.claveSitios = u), (this.sitios = this.repartir(e, r, i, o)));
        for (let e of this.miembros) e.giro = this.giroDe(e.indice);
      }
      let d = this.group.visible;
      ((this.group.visible = !0),
        this.giroInverso.copy(t.quaternion).invert(),
        this.group.quaternion.copy(this.giroInverso));
      let f = Math.max(0.01, t.scale.x),
        m = this.radio * f,
        h = this.seccion.tramo;
      n.centroEn(t.position.z, this.centroAnfitrion);
      for (let e of this.directores.values()) e.enUso = !1;
      let g = 0;
      for (let e of this.miembros) {
        let r = e.indice < l ? this.sitios[e.indice] : void 0,
          i = this.directores.get(e.clave);
        if (!r || !i) {
          ((e.presente = !1), this.apagar(e));
          continue;
        }
        e.presente
          ? (e.aparicion = Math.max(0, e.aparicion - c.aparicion))
          : ((e.presente = !0), (e.aparicion = +!!d));
        let a = t.position.z + r.profundidad;
        if (a - m > 0) {
          this.apagar(e);
          continue;
        }
        if (
          ((e.pivote.visible = !0),
          g++,
          (i.enUso = !0),
          n.centroEn(a, this.centroMiembro).sub(this.centroAnfitrion),
          e.pivote.position.set(
            (r.lateral + this.centroMiembro.x) / f,
            this.centroMiembro.y / f,
            r.profundidad / f,
          ),
          e.pivote.rotation.set(0, p.degToRad(e.giro), 0),
          c.nav !== null)
        )
          e.holograma.controlar(c.nav);
        else if (c.materializacion > 0 || e.aparicion > 0) {
          let t = h.activo ? nt(a, h.inicio, h.completo) : 0;
          e.holograma.controlar(Math.max(c.materializacion, e.aparicion, t));
        } else e.holograma.actualizar(a, m);
      }
      this.visibles = g;
      for (let e of this.directores.values())
        e.enUso && e.ritmo.avanzar(e.mixer, s) && e.root.updateMatrixWorld(!0);
    }
    esconder() {
      if (((this.visibles = 0), this.group.visible)) {
        this.group.visible = !1;
        for (let e of this.miembros) ((e.presente = !1), this.apagar(e));
        for (let e of this.directores.values()) e.ritmo.reiniciar();
      }
    }
    apagar(e) {
      e.pivote.visible && ((e.pivote.visible = !1), e.holograma.apagar());
    }
    repartir(e, t, n, r) {
      let i = this.config,
        a = Math.max(0.5, i.separacion),
        o = Math.max(0, i.paradas[e]?.atras ?? 0),
        s = p.clamp(i.desorden, 0, 0.49) * a,
        c = Vo(i.semilla * 7919 + Bo[e]),
        l = Math.max(0, n),
        u = [];
      for (let e = 0; ; e++) {
        let n = -o + e * a;
        if (n > Fo) break;
        let i = e % 2 ? a / 2 : 0;
        for (let e = -l + i; e <= l; e += a) {
          let i = {
              lateral: p.clamp(e + (c() * 2 - 1) * s, -l, l) - t,
              profundidad: Math.max(-o, n + (c() * 2 - 1) * s),
            },
            d = (e) =>
              Math.hypot(e.lateral - i.lateral, e.profundidad - i.profundidad) <
              a * 0.8;
          d({ lateral: 0, profundidad: 0 }) ||
            r.some(d) ||
            u.push({
              ...i,
              d: Math.hypot(i.lateral, i.profundidad) + c() * 0.01,
            });
        }
      }
      return u
        .sort((e, t) => e.d - t.d)
        .map(({ lateral: e, profundidad: t }) => ({
          lateral: e,
          profundidad: t,
        }));
    }
    crear(e) {
      let t = 0;
      for (; this.miembros.length < e && t < Po;) {
        let e = this.miembros.length,
          n = this.reparto(e);
        if (!n) return;
        let { clave: r, baile: i, fase: a } = n,
          o = this.directores.get(r);
        if (!o) {
          this.pedirDirector(r, i, a);
          return;
        }
        (this.miembros.push(this.miembro(e, r, this.giroDe(e), o)), t++);
      }
    }
    reparto(e) {
      let t = this.config,
        n = Vo(Io + e * 31337),
        r = t.bailes.filter((e) => !this.bailesFallidos.has(e));
      if (!r.length) return null;
      let i = r[Math.floor(n() * r.length) % r.length],
        a = Math.max(
          1,
          Math.round(Ro() ? t.fasesPorBaileMovil : t.fasesPorBaile),
        ),
        o = Math.floor(n() * a) % a;
      return { clave: `${i}|${o}`, baile: i, fase: (o + 0.5) / a };
    }
    giroDe(e) {
      return (
        (Vo(this.config.semilla * 65537 + e * 7919)() * 2 - 1) *
        this.config.giroAzar
      );
    }
    pedirDirector(e, t, n) {
      if (this.pendientes.has(e) || !this.url || !this.request) return;
      let r = this.request(this.url)
        .then((r) => {
          if (this.disposed) return (Ho(r.scene), null);
          let i = this.director(r, t, n);
          return (
            i ? this.directores.set(e, i) : this.bailesFallidos.add(t),
            this.pendientes.delete(e),
            i
          );
        })
        .catch(
          (t) => (
            this.pendientes.delete(e),
            this.disposed || console.warn(`[público] sin director para`, e, t),
            null
          ),
        );
      this.pendientes.set(e, r);
    }
    director(e, t, n) {
      let r = e.scene,
        i = e.animations.find((e) => e.name === t),
        a = null;
      if (
        (r.traverse((e) => {
          !a && e.isSkinnedMesh && (a = e);
        }),
        !i || !a)
      )
        return (
          Ho(r),
          console.warn(`[público] el glb no trae ${i ? `piel` : t}`),
          null
        );
      U(r, No);
      let o = new A(r),
        s = o.clipAction(i).setLoop(x, 1 / 0);
      if (
        (s.play(),
        (s.time = n * i.duration),
        o.update(0),
        r.position.set(0, 0, 0),
        r.quaternion.identity(),
        r.scale.setScalar(1),
        r.updateMatrixWorld(!0),
        this.directores.size === 0)
      ) {
        let e = new O().setFromObject(r);
        this.radio = Math.max(e.max.y - e.min.y, 1) * 0.6;
      }
      return {
        root: r,
        malla: a,
        mixer: o,
        ritmo: new Ce(),
        huesos: Ut(r),
        enUso: !1,
      };
    }
    miembro(e, t, n, r) {
      let i = r.malla,
        a = i.material.clone(),
        o = new u(i.geometry, a);
      ((o.name = `HoyoPublico${e}`),
        (o.bindMode = ee),
        o.bind(i.skeleton, i.bindMatrix),
        (o.matrixAutoUpdate = !1),
        o.matrix.copy(i.bindMatrix),
        Do(o));
      let s = new D();
      ((s.name = `HoyoPublicoPivote${e}`),
        (s.visible = !1),
        s.add(o),
        this.group.add(s));
      let c = this.seccion.pieza(!1, !1, this.fundido);
      (c.adoptar(o), c.apagar());
      let l = {
        indice: e,
        clave: t,
        giro: n,
        pivote: s,
        malla: o,
        holograma: c,
        darDeBajaSolape: null,
        presente: !1,
        aparicion: 0,
      };
      return (this.altaSolape(l), l);
    }
    altaSolape(e) {
      let t = this.directores.get(e.clave);
      !this.solape ||
        !t?.huesos ||
        (e.darDeBajaSolape = this.solape.registrar({
          materiales: [e.malla.material],
          huesos: t.huesos,
          marco: e.pivote,
          visible: () => this.group.visible && e.pivote.visible,
        }));
    }
    dispose() {
      if (!this.disposed) {
        this.disposed = !0;
        for (let e of this.miembros)
          (e.darDeBajaSolape?.(),
            this.seccion.soltar(e.holograma),
            e.malla.material.dispose());
        this.miembros.length = 0;
        for (let e of this.directores.values())
          (e.mixer.stopAllAction(), e.mixer.uncacheRoot(e.root), Ho(e.root));
        (this.directores.clear(),
          this.pendientes.clear(),
          (this.solape = null),
          this.group.removeFromParent(),
          this.group.clear());
      }
    }
  },
  Bo = {
    hero: 11,
    eventos: 23,
    dj: 37,
    galeria: 41,
    proyeccion: 53,
    contacto: 67,
  };
function Vo(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Ho(e) {
  if ((e.removeFromParent(), Ee(e))) {
    be(e);
    return;
  }
  let t = new Set();
  e.traverse((e) => {
    let n = e;
    if (!n.isMesh) return;
    let r = [n.geometry];
    for (let e of Array.isArray(n.material) ? n.material : [n.material]) {
      r.push(e);
      for (let t of Object.values(e)) t instanceof c && r.push(t);
    }
    n.isSkinnedMesh && r.push(n.skeleton);
    for (let e of r) t.has(e) || (t.add(e), e.dispose());
  });
}
var Uo = {
  visible: !0,
  topeEscritorio: 50,
  topeMovil: 15,
  vueltasSimuladas: 0,
  separacion: 2.2,
  desorden: 0.35,
  margenPared: 1.2,
  giroAzar: 35,
  fasesPorBaile: 3,
  fasesPorBaileMovil: 1,
  semilla: 23,
  bailes: [
    `Dancing_Twerk`,
    `Hip_Hop_Dancing`,
    `Gangnam_Style`,
    `Tut_Hip_Hop_Dance`,
    `Macarena_Dance`,
    `Flair`,
  ],
  paradas: {
    hero: { atras: 4 },
    eventos: { atras: 4 },
    dj: { atras: 1.5 },
    galeria: { atras: 2 },
    proyeccion: { atras: 2 },
    contacto: { atras: 3 },
  },
};
function Wo() {
  let e = Uo;
  return {
    ...e,
    bailes: [...e.bailes],
    paradas: Object.fromEntries(
      Object.entries(e.paradas).map(([e, t]) => [e, { ...t }]),
    ),
  };
}
var Go = `/the-weeknd-experience/_astro/pulsador.BQ51WIjM.glb`,
  Ko = class {
    config;
    entradas = [];
    espera = 0;
    completado = !1;
    encendiendo = !1;
    reservarHastaEntrada = !1;
    constructor(e) {
      this.config = e;
    }
    anadir(e) {
      let t = this.completado;
      (this.entradas.push({
        actor: e,
        reloj: t ? 1 / 0 : -1,
        hecho: t,
        valor: +!!t,
        semilla: this.entradas.length * 3 + 1,
      }),
        e.aplicar(+!!t));
    }
    get finalizado() {
      return this.entradas.every((e) => e.hecho || !e.actor.listo());
    }
    iniciarEncendido() {
      ((this.encendiendo = !0), (this.reservarHastaEntrada = !1));
    }
    update(e, t) {
      if (
        !this.entradas.length ||
        (this.reservarHastaEntrada && !this.completado)
      )
        return;
      let n = Math.min(Math.max(t, 0), 0.1);
      this.espera = Math.max(0, this.espera - n);
      let r = this.encendiendo
          ? Math.max(0.05, this.config.repartoEncendidoFundido)
          : Math.max(0.05, this.config.repartoFundido),
        i = this.entradas.length;
      for (let t = 0; t < i; t += 1) {
        let a = this.entradas[t];
        if (a.hecho) continue;
        if (a.reloj < 0) {
          if (e < this.umbral(t, i) || !a.actor.listo() || this.espera > 0)
            continue;
          ((a.reloj = 0),
            (this.espera = this.encendiendo
              ? Math.max(0, this.config.repartoEncendidoSeparacion)
              : this.config.repartoVisible
                ? Math.max(0, this.config.repartoRecuperacion)
                : 0));
        } else a.reloj += n;
        let o = Math.min(1, a.reloj / r);
        ((a.hecho = o >= 1),
          (a.valor = a.hecho
            ? 1
            : this.encendiendo
              ? o * o * (3 - 2 * o)
              : this.forma(o, a.semilla)),
          a.actor.aplicar(a.valor));
      }
    }
    completar() {
      this.completado = !0;
      for (let e of this.entradas)
        e.hecho ||
          ((e.hecho = !0),
          (e.valor = 1),
          (e.reloj = 1 / 0),
          e.actor.aplicar(1));
      this.espera = 0;
    }
    reiniciar() {
      ((this.espera = 0),
        (this.encendiendo = !1),
        (this.reservarHastaEntrada = !0),
        (this.completado = !1));
      for (let e of this.entradas)
        ((e.reloj = -1), (e.hecho = !1), (e.valor = 0), e.actor.aplicar(0));
    }
    umbral(e, t) {
      if (!this.config.repartoVisible) return 0;
      let n = Math.min(1, Math.max(0, this.config.repartoDesde)),
        r = Math.min(1, Math.max(n, this.config.repartoHasta));
      return t <= 1 ? n : n + ((r - n) * e) / (t - 1);
    }
    forma(e, t) {
      return this.config.repartoParpadeo
        ? Fe(e, t) * De(e)
        : e * e * (3 - 2 * e);
    }
  },
  qo = `/the-weeknd-experience/assets/models/weeknd-neon.glb`,
  Jo = `/the-weeknd-experience/_astro/teles-retro.Cy4aUkS2.glb`,
  Yo = `/the-weeknd-experience/_astro/marquesina.DuJuYHpD.glb`,
  Xo = `/the-weeknd-experience/_astro/dj-home.dSW1blte.glb`,
  Zo = `/the-weeknd-experience/assets/media/projection-landscape.mp4`,
  Qo = `/the-weeknd-experience/assets/media/projection-portrait.mp4`,
  $o = `/the-weeknd-experience/_astro/pegatinas-alien.CAcjjX5E.webp`,
  es = `/the-weeknd-experience/_astro/pintadas-tunel.DSERuJ9F.webp`,
  ts = `/the-weeknd-experience/_astro/restos-suelo.MA4AJneu.glb`,
  ns = `/the-weeknd-experience/_astro/astronauta.Dy4iPdAg.glb`,
  rs = 0.05,
  is = { horizontal: Zo, vertical: Qo },
  as = 4.9,
  os = 0.35,
  ss = 0.3,
  cs = 0.25,
  ls = 0.15,
  us = 0.15,
  ds = 0.2,
  fs = 0.2,
  ps = Ct.venueAddress.toUpperCase().split(` `),
  ms = [`AFTER HOURS`, `TIL DAWN`, `THE WEEKND`],
  hs = `@${Ct.instagram.replace(/\/+$/, ``).split(`/`).pop() ?? `theweeknd`}`,
  gs = [],
  _s = 38,
  Q = 10,
  vs = 0.7,
  ys = 1.9,
  bs = 3e4;
function xs(e) {
  return new Promise((t) => setTimeout(t, e));
}
var Ss = {
    ...it,
    neonColor: `#ef3e32`,
    neonLuzFuerza: 600,
    neonLuzAlcance: 18,
    neonLuzReparto: 5,
    neonEmisivo: 3.1,
    neonApagadoColor: `#39100e`,
    neonApagadoBrillo: 0.14,
    neonVisibleDesde: 49,
    neonProgresion: 4.4,
  },
  Cs = 6,
  ws = 1.35,
  Ts = {
    visible: !0,
    avance: 12,
    llenado: 0.5,
    giroX: 0,
    giroY: 0,
    giroZ: 0,
    desplazaX: 0,
    desplazaY: 0,
  };
Object.entries(G.clips)
  .filter(([, e]) => e.loop && (e.grupo === `parada` || e.grupo === `espera`))
  .map(([e]) => e);
var Es = class extends xt {
  universe = null;
  background = null;
  content = new D();
  tunnel = null;
  physicsConfig = ye();
  paletaConfig = wn();
  paleta = null;
  techoObjetivo = new E();
  tmpColorTecho = new E();
  techoAlimentado = !1;
  neonMotion = null;
  neonBaseRadius = 1;
  tvs = null;
  marquees = null;
  enlacesEventos = null;
  dj = null;
  djConfig = {
    ...Zr,
    neon: { ...Zr.neon },
    cascos: { ...Zr.cascos },
    instalacion: { ...Zr.instalacion },
    tela: { ...Zr.tela },
  };
  ball = null;
  luminarias = null;
  humo = null;
  humoActive = !1;
  luminariasLights = [];
  puntualesEventos = -1;
  puntualesHero = -1;
  cabezas = null;
  cabezasConfig = { ...Fi };
  prestamoFocos = null;
  cabezasFocos = [];
  luminariasConfig = { ...Ui };
  flecha = null;
  flechaConfig = Xi();
  flechaEnBloom = !1;
  flechaScroll = NaN;
  menuAbierto = !1;
  soltarMenu = null;
  humoConfig = ca();
  humoRecorrido = { ...V };
  humoEventos = 4;
  titulos = null;
  titulosConfig = ht();
  pintadasAtlas = null;
  pintadasLienzo = null;
  pintadasRecortes = {};
  contactoAvance = V.contacto;
  pegatinasConfig = et();
  pegatinasRecorrido = V;
  pegatinasAtlas = null;
  pintadasTunelConfig = st();
  pintadasTunelAtlas = null;
  cartelesTunelConfig = Ue();
  restosConfig = Oa();
  restosRecorrido = V;
  restos = null;
  muroContacto = null;
  muroContactoConfig = Pt();
  muroContactoActive = !1;
  cajasContacto = null;
  horarios = null;
  horariosConfig = (() => {
    let e = Tt();
    return ((e.cartelBrillo = 0.97), (e.neonBrillo = 0.18), e);
  })();
  horariosActive = !1;
  marquesinaGltf = null;
  glbMarquesina() {
    return ((this.marquesinaGltf ??= L(Yo)), this.marquesinaGltf);
  }
  proyeccion = null;
  proyeccionConfig = Ti();
  hologramaConfig = ct();
  holograma = null;
  fundidoConfig = Ra();
  fundidos = {
    hero: 1,
    eventos: 1,
    dj: 1,
    galeria: 1,
    proyeccion: 1,
    contacto: 1,
  };
  sonidoConfig = rn();
  sonido = null;
  neonHolograma = null;
  neonSombra = null;
  intro = null;
  cifraNav = null;
  cifraNavReal = 0;
  cifraNavVista = 0;
  cifraNavLista = !1;
  introAlien = null;
  anfitrion = null;
  anfitrionConfig = pt();
  coroConfig = Mo();
  publicoConfig = Wo();
  solapeConfig = { ...Mt };
  decoradoEntrada = !1;
  introStatus = null;
  reparto = null;
  carga = new Qt();
  vigia = null;
  soltarAlienEspera = null;
  introBoton = null;
  onIntroBoton = null;
  introRotulo = null;
  scrollListo = !1;
  ignicionViva = !1;
  neonRoot = null;
  neonLights = [];
  neonEnUso = 0;
  neonLightRig = Object.assign(new D(), { name: `HoyoNeonLuces` });
  neonMaterials = [];
  neonAparicion = -1;
  neonGobernado = !1;
  disolucionNav = null;
  tmpColorA = new E();
  tmpColorB = new E();
  scene = { ...Ss };
  neon = { ...Ts };
  tvsConfig = Bn();
  marqueesConfig = Tt();
  miradaEventos = new St(this.marqueesConfig.miradaCamara);
  miradaBase = new P();
  miradaContactoConfig = Bt();
  miradaCartelFlat = {
    activa: !0,
    fuerza: 0,
    giroMaximo: 0,
    cabeceoMaximo: 0,
    desde: 1,
    centro: 0.5,
    hasta: 0,
    suavizado: 0,
  };
  miradaParedFlat = {
    activa: !0,
    fuerza: 0,
    giroMaximo: 0,
    cabeceoMaximo: 0,
    desde: 1,
    centro: 0.5,
    hasta: 0,
    suavizado: 0,
  };
  miradaContactoCartel = new St(this.miradaCartelFlat);
  miradaContactoPared = new St(this.miradaParedFlat);
  objetivoPared = { posicion: new b(), peso: 0 };
  objetivosParedArr = [this.objetivoPared];
  miradaCombinada = new P();
  soltarPerfil = null;
  movimientoReducido =
    typeof window > `u`
      ? null
      : window.matchMedia(`(prefers-reduced-motion: reduce)`);
  ballConfig = gi();
  introConfig = $t();
  introAlienConfig = je();
  neonMesh = null;
  neonBaseWidth = 1;
  scrollBound = !1;
  cargasEscena = [];
  precalentado = null;
  lenis = null;
  releaseIntroScrollLock = null;
  onUniverseResize = null;
  onTick = null;
  neonDormido = !1;
  panelHome = null;
  pidiendoPanel = !1;
  soltarContextoMedicion = null;
  torn = !1;
  navigationEntry = !1;
  heroActive = !1;
  eventsActive = !1;
  djActive = !1;
  galeriaActive = !1;
  proyeccionActive = !1;
  astronauta = null;
  astronautaConfig = Ia();
  astronautaActive = !1;
  onPrepared() {
    (this.lockScrollForIntro(),
      this.mountScene(),
      this.navigationEntry && this.setDisolucionNav(1),
      this.navigationEntry &&
        this.universe &&
        !this.scrollBound &&
        this.bindScroll());
  }
  onRegisterLoads() {
    ((this.navigationEntry = q()),
      this.introConfig.visible && !this.navigationEntry && me());
  }
  onVisible() {
    (this.lockScrollForIntro(),
      this.mountScene(),
      this.disolucionNav !== null && !q() && this.setDisolucionNav(null),
      !(!this.universe || this.scrollBound) && this.bindScroll());
  }
  destroy() {
    (this.teardownScene(), super.destroy());
  }
  setDisolucionNav(e) {
    ((this.disolucionNav = e),
      this.tvs?.setDisolucionNav(e),
      this.marquees?.setDisolucionNav(e),
      this.dj?.setDisolucionNav(e),
      this.cabezas?.setDisolucionNav(e),
      this.ball?.setDisolucionNav(e),
      this.proyeccion?.setDisolucionNav(e),
      this.astronauta?.setDisolucionNav(e),
      this.titulos?.setDisolucionNav(e),
      this.anfitrion?.setDisolucionNav(e));
  }
  mountScene() {
    if (this.universe) return;
    delete document.documentElement.dataset.sceneFailed;
    let e = document.querySelector(`#webgl-canvas`);
    if (!e) {
      document.documentElement.dataset.sceneFailed = `true`;
      window.dispatchEvent(new CustomEvent(`weeknd:scene-failed`));
      (this.abrirScroll(),
        console.warn(`No #webgl-canvas found in the home; skipping 3D scene.`));
      return;
    }
    try {
      ((this.background = Le()),
        (this.anfitrionConfig = this.background.alienAnfitrionConfig));
    } catch (e) {
      document.documentElement.dataset.sceneFailed = `true`;
      window.dispatchEvent(new CustomEvent(`weeknd:scene-failed`));
      (console.warn(`No se pudo montar la escena de la home:`, e),
        this.abrirScroll());
      return;
    }
    ((this.universe = this.background.universe),
      Oe(),
      (this.tunnel = this.background.tubo),
      (this.vigia = new en(this.carga, {
        paciencia: document.querySelector(`[data-carga-paciencia]`),
        lenta: document.querySelector(`[data-carga-lenta]`),
        fallo: document.querySelector(`[data-carga-fallida]`),
        reintentar: document.querySelector(`[data-carga-reintentar]`),
      })));
    let t = this.background.retenerAlienEspera();
    ((this.soltarAlienEspera = t),
      this.carga.waitUntilReady().then(t),
      (this.paleta = new On(this.paletaConfig, ke(4), 4)),
      (this.neon.avance = V.hero),
      (this.djConfig.avance = V.dj),
      (this.ballConfig.avance = V.galeria + mi),
      (this.proyeccionConfig.avance = V.proyeccion),
      this.sincronizarCartelas(V),
      (this.lenis = bt()));
    let { camera: n } = this.universe;
    ((this.content.name = `HoyoHomeContent`),
      this.universe.scene.add(this.content),
      this.background.refrescarEntorno(),
      (this.holograma = new Ve(this.hologramaConfig, this.background.bloom)),
      (this.sonido = new xn(this.sonidoConfig, n.instance)),
      (this.holograma.onCruce = (e, t) => this.sonido?.cruce(e, t)),
      this.navigationEntry && this.sonido.precargar(),
      (this.introStatus = document.querySelector(`[data-intro-status]`)));
    let r = null;
    if (this.navigationEntry)
      this.introStatus && (this.introStatus.hidden = !0);
    else {
      ((this.reparto = new Ko(this.introConfig)),
        (this.reparto.reservarHastaEntrada = !0),
        this.background.setEncuadreEntrada(+!!this.introConfig.visible),
        (this.introAlien = new So(
          this.content,
          n.instance,
          this.tunnel,
          this.holograma,
          this.physicsConfig,
          this.introAlienConfig,
          this.background.pedirFocos(`intro`),
        )),
        this.introAlien.setSombras(this.background.sombras),
        this.introAlien.setLuzSuelo(this.background.luzSuelo));
      let e = this.background;
      if (
        (this.introAlien.setPuntual(() => ({
          luz: e.pedirPuntuales(`intro-seta`, 1)[0] ?? null,
          soltar: () => {
            (e.soltarPuntuales(xo),
              this.introAlien &&
                ((this.puntualesHero = -1), this.repartirPuntuales()));
          },
        })),
        this.movimientoReducido?.matches || !this.introConfig.visible)
      )
        this.introAlien.arrival.fallback();
      else {
        let e = this.introAlien;
        ((r = this.introAlien.load(
          { alien: at, pulsador: Go },
          () => this.calentarRama(e.group),
          (e) => this.carga.setItemProgress(`intro:anfitrion`, e),
          (e, t) =>
            e === `/the-weeknd-experience/_astro/alien.DVECqh-s.glb`
              ? we(e, t, { prioridad: `alta` })
              : L(e, t, { prioridad: `alta` }),
        )),
          this.seguir(`intro:anfitrion`, r, 0.97));
      }
    }
    (this.seguir(`intro:neon`, this.mountNeon(), 0.24),
      this.mountTvs(),
      Gt(this.marqueesConfig),
      this.mountMarquees(e),
      this.mountLuminarias(),
      this.mountFlecha(e),
      (this.dj = new oi(
        this.content,
        this.tunnel,
        n.instance,
        this.djConfig,
        this.physicsConfig,
      )),
      this.dj.setHolograma(this.holograma?.seccion(`dj`) ?? null),
      this.dj.setSombras(this.background.sombras),
      this.dj.setBloom(this.background.bloom),
      this.seguir(`intro:dj`, this.dj.load(Xo), 3.3));
    let i = this.holograma?.seccion(`hero`);
    if (i && !this.movimientoReducido?.matches) {
      ((this.anfitrion = new Nt(
        this.content,
        this.tunnel,
        this.anfitrionConfig,
        i,
        ke(4),
        4,
        this.physicsConfig,
      )),
        this.anfitrion.setSombras(this.background.sombras));
      let e = this.background;
      (this.anfitrion.setFocos((t, n) => e.pedirFocos(t, n)),
        this.anfitrion.setLuzSuelo(e.luzSuelo),
        this.introAlien &&
          (this.introAlien.alCeder = (e, t) =>
            this.anfitrion?.salir(e, t) ?? !1),
        this.anfitrion.setCoro(
          new ko(this.coroConfig, i, this.anfitrion.fundido),
        ),
        this.anfitrion.setPublico(
          new zo(this.publicoConfig, i, this.anfitrion.fundido),
        ),
        this.anfitrion.setSolape(new Dt(this.solapeConfig)));
      let t = this.anfitrion;
      this.seguir(`home:anfitrion`, t.load(at, we), 0.9);
    }
    (this.mountCabezas(),
      this.mountHumo(),
      this.mountBall(e),
      this.mountProyeccion(e),
      this.mountAstronauta(),
      this.mountPintadas(),
      this.mountMuroContacto(),
      this.mountPegatinas(),
      this.mountRestos(),
      this.mountHorarios(e),
      this.mountTitulos());
    let a = document.fonts;
    if (
      (this.seguir(
        `intro:fuentes`,
        a
          ? Promise.all([
              a.ready,
              a.load(`900 100px Morganite`).catch(() => []),
            ])
          : Promise.resolve(),
        0.1,
      ),
      (this.background.transitionConfig = this.introConfig),
      this.navigationEntry)
    ) {
      this.scrollListo = !0;
      let e = this.background.ignicion;
      (this.tvs?.setIgnicion(e),
        this.marquees?.setIgnicion(e),
        this.ball?.setIgnicion(e),
        this.dj?.setIgnicion(e),
        this.proyeccion?.setIgnicion(e),
        this.titulos?.setIgnicion(e),
        this.cabezas?.setIgnicion(e),
        this.muroContacto?.setIgnicion(e),
        (this.ignicionViva = !0),
        this.mountCifraNav());
    } else (this.mountIntro(e), this.background?.setInfluenciaPuntero(0));
    if (
      (this.setupResize(),
      (this.precalentado = this.precalentar()),
      this.carga.trackPromise(`intro:precalentar`, this.precalentado, {
        weight: 0.8,
      }),
      this.navigationEntry)
    ) {
      qt(`home:escena`, this.escenaLista(), { escena: !0 });
      let e = ({ progress: e }) => Jt(`home:escena`, Math.min(0.99, e));
      (this.carga.on(`progress`, e),
        this.carga.once(`ready`, () => this.carga.off(`progress`, e)));
    }
    this.buildGui();
  }
  escenaLista() {
    return this.carga.waitUntilReady().then(() => {
      if (this.vigia?.fallida) return new Promise(() => {});
    });
  }
  seguir(e, t, n) {
    (this.cargasEscena.push(t.catch(() => {})),
      this.carga.trackPromise(e, t, { weight: n }));
  }
  async precalentar() {
    await Promise.allSettled(this.cargasEscena);
    if (this.torn) return;
    let timeout;
    try {
      await Promise.race([
        this.calentarGpu(),
        new Promise((resolve) => {
          timeout = setTimeout(() => {
            this.torn || console.warn(
              `[home] el precalentado pasó de ${bs / 1e3} s: se revela y compila donde caiga`,
            );
            resolve();
          }, bs);
        }),
      ]);
    } finally {
      clearTimeout(timeout);
    }
  }
  async calentarRama(e) {
    let t = this.universe;
    !t ||
      this.torn ||
      (await Be({
        renderer: t.renderer.instance,
        escena: t.scene,
        camara: t.camera.instance,
        raices: [e],
        objetivoComposer: this.background?.bloom.objetivoPrecalentado ?? null,
        capaBloom: this.background
          ? (e) => this.background.bloom.precalentarCapa(e)
          : void 0,
        abortado: () => this.torn,
      }));
  }
  async calentarGpu() {
    let e = this.universe;
    if (!e || this.torn) return;
    let t = this.background?.bloom;
    await Be({
      renderer: e.renderer.instance,
      escena: e.scene,
      camara: e.camera.instance,
      raices: [e.scene],
      objetivoComposer: t?.objetivoPrecalentado ?? null,
      capaBloom: t ? (e) => t.precalentarCapa(e) : void 0,
      abortado: () => this.torn,
    });
  }
  async mountNeon() {
    let e = await L(qo);
    if (!this.universe || !this.tunnel) {
      Ds(e.scene);
      return;
    }
    let t = new D();
    t.name = `HoyoNeonHero`;
    let n = e.scene;
    An(n);
    let r = Rn(n);
    n.position.sub(r.centro);
    let i = new D();
    ((i.name = `HoyoNeonCentro`),
      i.position.copy(r.desplazamiento).negate(),
      i.add(n));
    let a = new D();
    ((a.name = `HoyoNeonEncaje`),
      a.quaternion.copy(Mn(r)),
      a.add(i),
      (this.neonBaseWidth = Math.max(1e-4, r.tamano.x)),
      (this.neonBaseRadius = r.tamano.length() / 2),
      t.add(a),
      (this.neonMesh = a),
      n.traverse((e) => {
        let t = e;
        t.isMesh &&
          (H(t),
          (t.frustumCulled = !1),
          (Array.isArray(t.material) ? t.material : [t.material]).forEach(
            (e) => {
              let t = e;
              t.isMeshStandardMaterial &&
                (t.color.setRGB(0, 0, 0),
                (t.metalness = 0),
                (t.roughness = 1),
                (t.emissive = new E(this.scene.neonColor)),
                (t.emissiveIntensity = this.scene.neonEmisivo),
                (t.toneMapped = !1),
                (t.fog = !1),
                (t.side = 0),
                this.neonMaterials.push(t));
            },
          ));
      }),
      (this.neonHolograma = this.holograma?.seccion(`hero`).pieza(!0) ?? null),
      this.neonHolograma?.adoptar(n));
    let o = new ie();
    ((o.name = `HoyoNeonSombra`),
      o.quaternion.copy(a.quaternion).invert(),
      a.add(o),
      (this.neonSombra =
        this.background?.sombras?.anadirCaja(o, {
          raiz: n,
          holograma: this.neonHolograma,
        }) ?? null),
      (this.neonLightRig.name = `HoyoNeonLuces`),
      t.add(this.neonLightRig),
      this.content.add(t),
      (this.neonRoot = t),
      (this.neonMotion = new R(this.tunnel, this.physicsConfig, `neon`)),
      (this.neonAparicion = 0),
      this.buildNeonLights(),
      this.applyNeonPlacement(),
      this.reparto?.anadir({
        clave: `neon`,
        listo: () => !!this.neonRoot,
        aplicar: (e) => {
          ((this.neonGobernado = !0),
            (this.neonAparicion = e),
            this.applyNeonNivel());
        },
      }));
  }
  buildNeonLights() {
    (this.repartirPuntuales(), this.applyNeonColor());
  }
  repartirPuntuales() {
    let e = this.background;
    if (!e) return;
    let t = this.tunnel
        ? p.clamp(this.luminarias?.lucesQuiere(this.tunnel) ?? 0, 0, 5)
        : 0,
      n = this.heroActive
        ? p.clamp(Math.round(this.scene.neonLuzReparto), 1, 5)
        : 0;
    if (!(t === this.puntualesEventos && n === this.puntualesHero)) {
      ((this.puntualesEventos = t),
        (this.puntualesHero = n),
        e.pedirPuntuales(`hero`, Math.min(n, 5 - t)),
        (this.luminariasLights = e.pedirPuntuales(`eventos`, t)),
        (this.neonLights = e.pedirPuntuales(`hero`, n)));
      for (let e of this.neonLights)
        e.parent !== this.neonLightRig && this.neonLightRig.add(e);
      ((this.neonEnUso = this.neonLights.length),
        this.spreadNeonLights(),
        this.applyNeonColor());
    }
  }
  spreadNeonLights() {
    let e = this.neonBaseWidth * (this.neonMesh?.scale.x ?? 1),
      t = Math.max(1, this.neonEnUso);
    this.neonLights.forEach((n, r) => {
      let i = r >= t || t === 1 ? 0.5 : r / (t - 1);
      n.position.set((i - 0.5) * e, 0, 0);
    });
  }
  neonNivel() {
    let e = Math.max(0.001, this.scene.neonVisibleDesde),
      t = Math.abs(this.neonRoot?.position.z ?? 0);
    return (
      p.clamp(1 - t / e, 0, 1) ** Math.max(0.05, this.scene.neonProgresion)
    );
  }
  applyNeonNivel() {
    let e = this.heroActive && this.neon.visible,
      t = e ? this.neonNivel() : 0,
      n = Math.abs(this.neonRoot?.position.z ?? 0),
      r = this.intro?.ignicion ?? this.background?.ignicion,
      i = !!r && r.activa,
      a = i ? r.nivelEmisor(n) : 1,
      o = i ? r.apagado(n) : 0,
      s = this.neonAparicion < 0 ? 0 : Math.min(1, this.neonAparicion),
      c = Math.min(1, a),
      l = e && s > 0.001 && (o > 0.001 || t > 0.001);
    (this.neonMesh && (this.neonMesh.visible = l),
      this.background?.bloom.setFuente(`hero-neon`, l));
    let u = Math.max(1, this.neonEnUso);
    this.neonLights.forEach((e, n) => {
      e.intensity =
        n >= this.neonEnUso
          ? 0
          : (this.scene.neonLuzFuerza / u) * t * a * s * this.fundidos.hero;
    });
    let d = this.tmpColorA.set(this.scene.neonColor),
      f = this.tmpColorB.set(this.scene.neonApagadoColor).lerp(d, c);
    for (let e of this.neonMaterials)
      (e.emissive.copy(f),
        (e.emissiveIntensity =
          (this.scene.neonApagadoBrillo * o + this.scene.neonEmisivo * t * a) *
          s));
  }
  avanzarNeon(e) {
    this.neonGobernado ||
      this.neonAparicion < 0 ||
      this.neonAparicion >= 1 ||
      ((this.neonAparicion = Math.min(1, this.neonAparicion + e / vs)),
      this.applyNeonNivel());
  }
  mountTvs() {
    if (!this.universe || !this.tunnel || this.tvs) return;
    let e = new sr(
      this.content,
      this.tunnel,
      this.tvsConfig,
      this.physicsConfig,
    );
    (e.setHolograma(this.holograma?.seccion(`hero`) ?? null),
      e.setSombras(this.background?.sombras ?? null),
      e.setBaseAdvance(this.neon.avance),
      e.setActive(this.heroActive),
      (this.tvs = e));
    let t = new Set(this.tvsConfig.teles.map((e) => e.videoIndice)).size,
      n = e.load(Jo, er(t), (e) =>
        this.carga.setItemProgress(`intro:tv-videos`, e),
      );
    (this.seguir(`intro:teles`, n, 1.7),
      this.seguir(`intro:tv-videos`, e.videosListos, t * ys),
      n.then(() => this.apuntarTelesAlReparto(e)).catch(() => {}),
      (this.onTick = () => {
        if (this.lenis && this.scrollBound) {
          let e = this.lenis.progress;
          this.applyProgress(Number.isFinite(e) ? e : 0, !0);
        }
        let e = Math.min(this.universe?.time.delta ?? 16, 100) / 1e3;
        (this.actualizarCifraNav(e),
          this.background?.transitionOwned ||
            (this.intro?.update(e),
            this.introRotulo?.actualizar(
              this.intro?.estado === `listo` &&
                (this.introAlien?.esperaToque ?? !0),
            ),
            this.intro?.estado === `entrando` &&
              this.movimientoReducido?.matches &&
              ((this.decoradoEntrada = !0),
              this.reparto?.completar(),
              this.background?.setEncuadreEntrada(0)),
            !this.decoradoEntrada &&
              this.intro?.estado === `entrando` &&
              this.intro.progresoEncendido * this.intro.duracionEncendido >=
                this.decoradoIntro &&
              ((this.decoradoEntrada = !0),
              this.reparto?.iniciarEncendido(),
              this.background?.setEncuadreEntrada(
                0,
                this.intro.duracionEncendido - this.decoradoIntro,
              )),
            this.intro && this.reparto?.update(this.intro.progreso, e)),
          this.updateSectionActivity(),
          this.holograma?.update(e),
          this.avanzarNeon(e),
          this.placeNeon((this.universe?.time.delta ?? 16) / 1e3),
          this.aplicarIgnicion(),
          this.tvs?.update((this.universe?.time.delta ?? 16) / 1e3),
          this.marquees?.update(
            (this.universe?.time.delta ?? 16) / 1e3,
            this.actualizarMiradaEventos,
          ),
          this.dj?.update(
            (this.universe?.time.delta ?? 16) / 1e3,
            this.movimientoReducido?.matches ?? !1,
          ),
          this.anfitrion?.update(
            (this.universe?.time.delta ?? 16) / 1e3,
            this.movimientoReducido?.matches ?? !1,
          ),
          this.ball?.update(
            (this.universe?.time.delta ?? 16) / 1e3,
            this.movimientoReducido?.matches ?? !1,
          ),
          this.proyeccion?.update((this.universe?.time.delta ?? 16) / 1e3),
          this.astronauta?.update(
            (this.universe?.time.delta ?? 16) / 1e3,
            this.movimientoReducido?.matches ?? !1,
          ),
          this.horarios?.update((this.universe?.time.delta ?? 16) / 1e3),
          this.muroContacto?.update(),
          this.cajasContacto?.update((this.universe?.time.delta ?? 16) / 1e3),
          this.titulos?.update(
            (this.universe?.time.delta ?? 16) / 1e3,
            this.movimientoReducido?.matches ?? !1,
          ),
          this.restos?.update((this.universe?.time.delta ?? 16) / 1e3),
          this.repartirPuntuales(),
          this.tunnel &&
            this.luminarias?.alumbrar(
              this.luminariasLights,
              this.tunnel,
              this.background?.ignicion ?? null,
            ),
          this.actualizarFlecha(),
          this.cabezas?.update(
            (this.universe?.time.delta ?? 16) / 1e3,
            this.movimientoReducido?.matches ?? !1,
          ),
          this.humo?.setMuro(this.muroContacto?.planoMuro() ?? null),
          this.tunnel && this.humo?.setAvance(this.tunnel.currentAdvance),
          this.humo?.update(
            (this.universe?.time.delta ?? 16) / 1e3,
            this.movimientoReducido?.matches ?? !1,
          ),
          this.repartirFocos(),
          this.cabezas?.alumbrar(this.cabezasFocos),
          this.holograma?.publicar(),
          this.actualizarViento());
      }),
      this.universe.time.on(`tick`, this.onTick));
  }
  actualizarViento() {
    if (!this.sonido) return;
    let e = Math.min(this.universe?.time.delta ?? 16, 100) / 1e3,
      t = Math.max(1, window.innerHeight),
      n =
        this.scrollListo && this.lenis && !this.background?.transitionOwned
          ? this.lenis.velocity
          : 0,
      r = Math.abs(n) > t * 1.5 || e <= 0 ? 0 : n / t / e;
    this.sonido.update(r, e);
  }
  resolverFaseMirada(e, t) {
    ((t.activa = e.activa),
      (t.fuerza = I.resolver(e.fuerza)),
      (t.giroMaximo = I.resolver(e.giroMaximo)),
      (t.cabeceoMaximo = I.resolver(e.cabeceoMaximo)),
      (t.suavizado = I.resolver(e.suavizado)),
      (t.desde = e.desde),
      (t.centro = e.centro),
      (t.hasta = e.hasta));
  }
  actualizarMiradaEventos = () => {
    let e = this.background,
      t = this.marquees;
    if (!e?.boveda || !t) return;
    let n = e.universe.camera.instance,
      r = e.universe.time.delta / 1e3;
    this.miradaBase.setFromEuler(e.boveda.trayectoria.giroCamara);
    let i =
        this.scrollListo &&
        !e.transitionOwned &&
        !q() &&
        !this.movimientoReducido?.matches,
      a = t.config.visible && t.group.visible;
    this.miradaEventos.update(
      r,
      t.objetivosMirada,
      this.miradaBase,
      n.position,
      i && a,
    );
    let o = this.horarios,
      s = !!o && o.config.visible && o.group.visible;
    (this.resolverFaseMirada(
      this.miradaContactoConfig.cartel,
      this.miradaCartelFlat,
    ),
      this.miradaContactoCartel.update(
        r,
        o ? o.objetivosMirada : gs,
        this.miradaBase,
        n.position,
        i && s,
      ));
    let c = this.muroContacto,
      l = !!c && this.muroContactoActive;
    (c && this.objetivoPared.posicion.copy(c.puntoMirada()),
      (this.objetivoPared.peso = +!!l),
      this.resolverFaseMirada(
        this.miradaContactoConfig.pared,
        this.miradaParedFlat,
      ),
      this.miradaContactoPared.update(
        r,
        this.objetivosParedArr,
        this.miradaBase,
        n.position,
        i && l,
      ),
      this.miradaCombinada
        .copy(this.miradaEventos.giro)
        .multiply(this.miradaContactoCartel.giro)
        .multiply(this.miradaContactoPared.giro),
      e.aplicarMiradaPagina(this.miradaCombinada));
  };
  soltarMiradaEventos() {
    (this.miradaEventos.reset(),
      this.miradaContactoCartel.reset(),
      this.miradaContactoPared.reset(),
      this.background?.aplicarMiradaPagina(null));
  }
  apuntarTelesAlReparto(e) {
    if (!(!this.reparto || !e.montadas)) {
      e.place();
      for (let t of e.ordenPorProfundidad())
        this.reparto.anadir({
          clave: `tele-${t}`,
          listo: () => e.montadas > t,
          aplicar: (n) => e.setAparicion(t, n),
        });
    }
  }
  mountMarquees(e) {
    if (!this.universe || !this.tunnel || this.marquees) return;
    let t = new kt(
      this.content,
      this.tunnel,
      this.marqueesConfig,
      this.physicsConfig,
    );
    (t.setHolograma(this.holograma?.seccion(`eventos`) ?? null),
      t.setSombras(this.background?.sombras ?? null),
      t.setBloom(this.background?.bloom ?? null),
      t.setActive(this.eventsActive),
      (this.marquees = t),
      t.activarInteraccion(e, this.universe.camera.instance));
    let n = document.querySelector(`[data-eventos-enlaces]`);
    n && (this.enlacesEventos = new cr(n));
    let r = this.glbMarquesina();
    r.catch(() => {});
    let i = (async () => {
      let {
        eventos: e,
        fuente: n,
        mensaje: i,
      } = await Yt(this.marqueesConfig.marquesinas.length);
      n === `error` && console.warn(`[eventos] sin datos de Fourvenues:`, i);
      let a = e.map((e) => ({
        id: e.id,
        nombre: e.nombre,
        imagen: e.imagen,
        url: e.url,
        ficha: {
          fechaLarga: e.fechaLarga,
          horario: e.horaFin ? `${e.hora} — ${e.horaFin}` : e.hora,
          nombre: e.nombre,
          lineas: e.descripcion,
        },
      }));
      (this.enlacesEventos?.setEventos(e), t.precargarCarteles(a));
      try {
        await t.load(await r, a);
      } finally {
        this.ajustarRecorrido(t.nombres.length);
      }
    })();
    this.seguir(`intro:eventos`, i, 1.05);
  }
  ajustarRecorrido(e) {
    let t = this.background?.boveda;
    if (this.torn || !t || this.tunnel !== t) return;
    let n = ke(e);
    (this.paleta?.recorrido(n, e),
      (this.djConfig.avance = n.dj),
      this.cabezas?.setAvanceSeccion(n.dj),
      (this.humoRecorrido = n),
      (this.humoEventos = e),
      this.humo?.setRecorrido(n, e),
      (this.ballConfig.avance = n.galeria + mi),
      (this.proyeccionConfig.avance = n.proyeccion),
      this.astronauta?.setAvanceProyeccion(n.proyeccion),
      (this.contactoAvance = n.contacto),
      this.muroContacto?.seguirAvance(n.contacto),
      this.cajasContacto?.seguirAvance(n.contacto),
      (this.pegatinasRecorrido = n),
      this.colocarPegatinas(),
      (this.restosRecorrido = n),
      this.restos?.setRecorrido(n),
      (this.horariosConfig.avance = n.contacto),
      this.horarios?.place(),
      this.sincronizarCartelas(n),
      this.sincronizarLuminarias(e),
      this.anfitrion?.recorrido(n, e));
    let r = n.vuelta / t.config.pasoAnillo;
    if (t.config.anillosPorBucle !== r) {
      let e = t.currentAdvance;
      if (((t.config.anillosPorBucle = r), t.refresh(), this.scrollBound)) {
        let n = document.querySelector(`[data-scroll-track]`);
        n && (n.style.height = `${mt(t.loopLength)}vh`);
        let r = bt();
        r.resize();
        let i = p.euclideanModulo(e, t.loopLength) / t.loopLength;
        (K(i * r.limit, { immediate: !0, force: !0 }), this.applyProgress(i));
      }
    }
    this.updateSectionActivity();
  }
  mountBall(e) {
    if (!this.universe || !this.tunnel || this.ball) return;
    let t = new Ci(
      this.content,
      this.tunnel,
      this.ballConfig,
      this.physicsConfig,
    );
    (t.setHolograma(this.holograma?.seccion(`galeria`) ?? null),
      t.setSombras(this.background?.sombras ?? null),
      t.setManchas(F() ? null : (this.background?.boveda.manchasBola ?? null)),
      t.setBloom(this.background?.bloom ?? null),
      (this.ball = t));
    let n = document.querySelector(`[data-galeria-enlace]`);
    t.activarInteraccion(e, this.universe.camera.instance, n);
    let r = (async () => {
      let e = Si().fotos,
        { fotos: n, fuente: r, mensaje: i } = await Xt(e);
      (r === `error` &&
        console.warn(`[galeria] sin fotos:`, i ?? `sin bucket configurado`),
        await t.cargar(n.map((e) => e.mini)));
    })();
    this.seguir(`intro:galeria`, r, 1.2);
  }
  mountAstronauta() {
    let e = this.background?.boveda;
    if (!e || this.tunnel !== e || !this.content || this.astronauta) return;
    let t = new Pa(this.content, e, this.astronautaConfig, this.physicsConfig);
    (t.setAvanceProyeccion(this.proyeccionConfig.avance),
      t.setHolograma(this.holograma?.seccion(`proyeccion`) ?? null),
      (this.astronauta = t),
      this.seguir(`intro:astronauta`, t.load(ns), ds));
  }
  mountProyeccion(e) {
    if (!this.universe || !this.tunnel || !this.background || this.proyeccion)
      return;
    let t = new Ni(
      this.content,
      this.tunnel,
      this.proyeccionConfig,
      this.physicsConfig,
    );
    ((this.proyeccion = t),
      t.setHolograma(this.holograma?.seccion(`proyeccion`) ?? null),
      t.setActive(this.proyeccionActive),
      t.activarInteraccion(
        e,
        this.universe.camera.instance,
        document.querySelector(`[data-proyeccion-enlace]`),
      ));
    let n = t.cargar(is, this.universe.camera.instance.aspect, (e) =>
      this.carga.setItemProgress(`intro:proyeccion`, e),
    );
    this.seguir(`intro:proyeccion`, n, as);
  }
  mountPintadas() {
    if (!this.universe || !this.background || this.pintadasAtlas) return;
    let e = this.universe.renderer.instance.capabilities.getMaxAnisotropy(),
      t = jt(Ft(), e)
        .then((e) => {
          this.torn ||
            ((this.pintadasAtlas = e), this.muroContacto?.setAtlas(e));
        })
        .catch(() => {}),
      n = Ht()
        .then(() => {
          if (this.torn || !this.universe) return;
          let t = {
              direccion: { icono: `pin`, lineas: ms },
              telefono: { icono: `telefono`, lineas: [Ct.phone] },
              instagram: { icono: `instagram`, lineas: [hs.toUpperCase()] },
            },
            n = this.muroContactoConfig.pintadas.color,
            { textura: r, recortes: i } = Rt(
              JSON.stringify([t, n]),
              () => At(t, n),
              e,
            );
          ((this.pintadasLienzo = r),
            (this.pintadasRecortes = i),
            this.muroContacto?.setLienzo(r, i));
        })
        .catch(() => {});
    this.seguir(`intro:pintadas`, Promise.all([t, n]), os);
  }
  mountMuroContacto() {
    let e = this.background,
      t = this.tunnel;
    if (!this.universe || !e || !t || this.muroContacto) return;
    let n = e.boveda,
      r = new Lt(
        this.content,
        this.universe.camera.instance,
        t,
        n.uniformsForma,
        n.trayectoria.uniforms,
        n.uniformsIgnicion,
        this.muroContactoConfig,
      );
    if (
      (r.setHolograma(this.holograma?.seccion(`contacto`) ?? null),
      r.setIgnicion(e.ignicion),
      this.pintadasAtlas && r.setAtlas(this.pintadasAtlas),
      this.pintadasLienzo &&
        r.setLienzo(this.pintadasLienzo, this.pintadasRecortes),
      r.setLuces((t, n) => e.pedirPuntuales(t, n)),
      r.seguirAvance(this.contactoAvance),
      r.setVisible(this.muroContactoActive),
      (this.muroContacto = r),
      !this.muroContactoConfig.cajas.visible)
    )
      return;
    let i = new It(
      this.content,
      t,
      this.muroContactoConfig.cajas,
      this.physicsConfig,
    );
    (i.setAncla({
      cara: (e, n) => r.anclaMuro(e, n, t).x,
      muroDe: (e) => r.muroDe(e),
      frontal: () => r.enPortrait(),
      profundidadMuro: () => r.profundidad(),
      adelanto: () => r.adelanto(),
    }),
      i.seguirAvance(this.contactoAvance),
      i.setHolograma(this.holograma?.seccion(`contacto`) ?? null),
      i.setVisible(this.muroContactoActive),
      (this.cajasContacto = i),
      this.seguir(
        `intro:cajas-contacto`,
        i.load({ botellines: Vt }).catch(() => {}),
        us,
      ));
  }
  mountPegatinas() {
    if (!this.universe || !this.background || this.pegatinasAtlas || F())
      return;
    let e = this.universe.renderer.instance.capabilities.getMaxAnisotropy(),
      t = he($o, e)
        .then((e) => {
          if (this.torn) {
            e.dispose();
            return;
          }
          ((this.pegatinasAtlas = e),
            this.background?.boveda.pegatinas.setAtlas(e),
            this.colocarPegatinas());
        })
        .catch(() => {});
    this.seguir(`intro:pegatinas`, t, ss);
    let n = he(es, e)
      .then((e) => {
        if (this.torn) {
          e.dispose();
          return;
        }
        ((this.pintadasTunelAtlas = e),
          this.background?.boveda.pegatinas.setAtlasColor(e),
          this.colocarPegatinas());
      })
      .catch(() => {});
    this.seguir(`intro:pintadas-tunel`, n, cs);
  }
  colocarPegatinas() {
    let e = this.background?.boveda;
    e &&
      (e.pegatinas.colocar(
        this.pegatinasConfig,
        this.pintadasTunelConfig,
        this.cartelesTunelConfig,
        this.pegatinasRecorrido,
        e.radius,
        xe(e.config),
      ),
      e.pegatinas.encender(1));
  }
  mountRestos() {
    if (!this.tunnel || !this.content || this.restos || F()) return;
    let e = new ka(
      this.content,
      this.tunnel,
      this.restosConfig,
      this.physicsConfig,
    );
    (e.setRecorrido(this.restosRecorrido), (this.restos = e));
    let t = e.load(ts).catch(() => {});
    this.seguir(`intro:restos`, t, ls);
  }
  mountHorarios(e) {
    if (!this.universe || !this.tunnel || this.horarios) return;
    let t = this.horariosConfig;
    ((t.enSuelo = !0),
      (t.avance = this.contactoAvance),
      (t.marquesinas.length = 1),
      Object.assign(t.marquesinas[0], {
        avance: -0.5,
        x: 0.62,
        y: 0,
        tamano: 7.7,
        mirada: 0,
        giroX: 0,
        giroY: -49,
        giroZ: 0,
      }),
      (t.cartelBrillo = 0.97),
      (t.neonBrillo = 0.18),
      (t.luminaria.visible = !0));
    let n = new kt(
      this.content,
      this.tunnel,
      t,
      this.physicsConfig,
      `contacto`,
    );
    n.setHolograma(this.holograma?.seccion(`contacto`) ?? null);
    let r = this.background;
    (n.setFocos(r ? (e, t) => r.pedirFocos(e, t) : null),
      n.setSombras(this.background?.sombras ?? null),
      n.setBloom(this.background?.bloom ?? null),
      n.setActive(this.horariosActive),
      (this.horarios = n),
      n.activarInteraccion(
        e,
        this.universe.camera.instance,
        document.querySelector(`[data-horarios-enlace]`),
      ));
    let i = Ht()
      .then(() => {
        if (this.torn) return;
        let e = Wt({ lineas: Et, remate: wt });
        return this.glbMarquesina().then((t) =>
          n.load(t, [
            {
              id: `horarios`,
              nombre: `Connect with The Weeknd`,
              imagen: e,
              url: `/the-weeknd-experience/contacto`,
            },
          ]),
        );
      })
      .catch(() => {});
    this.seguir(`intro:horarios`, i, fs);
  }
  mountTitulos() {
    if (!this.universe || !this.tunnel || this.titulos) return;
    let e = new Ca(
      this.content,
      this.tunnel,
      this.titulosConfig,
      this.physicsConfig,
    );
    this.titulos = e;
    for (let t of Ge) e.setHolograma(t, this.holograma?.seccion(t) ?? null);
    (e.setSombras(this.background?.sombras ?? null),
      e.setBloom(this.background?.bloom ?? null),
      e.setIgnicion(this.background?.ignicion ?? null),
      e.setAspecto());
    let t = e.cargar(tt, (e) =>
      this.carga.setItemProgress(`intro:cartelas`, e),
    );
    this.seguir(`intro:cartelas`, t, rs);
  }
  mountLuminarias() {
    let e = this.background?.boveda;
    !e ||
      this.tunnel !== e ||
      this.luminarias ||
      ((this.luminarias = new Wi(
        this.content,
        e.uniformsForma,
        e.trayectoria.uniforms,
        e.uniformsIgnicion,
        this.luminariasConfig,
      )),
      this.luminarias.setLuzSuelo(e.luzSuelo),
      this.luminarias.setActive(this.eventsActive),
      this.sincronizarLuminarias(this.marqueesConfig.marquesinas.length));
  }
  mountFlecha(e) {
    let t = this.background?.boveda;
    if (!t || this.tunnel !== t || this.flecha || !this.universe) return;
    ((this.flecha = new ta(
      this.content,
      t.uniformsForma,
      t.trayectoria.uniforms,
      this.flechaConfig,
    )),
      this.flecha.activarInteraccion(e, this.universe.camera.instance, t, {
        saltar: () => this.saltarASiguienteSeccion(),
        empujar: (e, t) => this.empujarScroll(e, t),
      }),
      this.soltarMenu?.());
    let n = an(`menu:opened`, () => {
        this.menuAbierto = !0;
      }),
      r = an(`menu:closed`, () => {
        this.menuAbierto = !1;
      });
    this.soltarMenu = () => {
      (n(), r());
    };
  }
  actualizarFlecha() {
    let e = this.flecha,
      t = this.lenis;
    if (!e) return;
    let n = t?.animatedScroll ?? 0,
      r =
        !Number.isFinite(this.flechaScroll) ||
        Math.abs(n - this.flechaScroll) > 2;
    r && (this.flechaScroll = n);
    let i =
      this.scrollListo &&
      !!t &&
      !t.isStopped &&
      !this.menuAbierto &&
      !this.background?.transitionOwned &&
      !q() &&
      !this.torn;
    (e.update(
      (this.universe?.time.delta ?? 16) / 1e3,
      i,
      r,
      this.movimientoReducido?.matches ?? !1,
    ),
      e.visible !== this.flechaEnBloom &&
        ((this.flechaEnBloom = e.visible),
        this.background?.bloom.setFuente(Zi, e.visible)));
  }
  iniciosDeSeccion() {
    let e = this.flechaConfig,
      t = this.titulosConfig.cartelas,
      n = (e, t) => (t?.visible ? Math.min(e, e - t.antes) : e),
      r = [
        this.neon.avance,
        this.djConfig.avance,
        this.proyeccionConfig.avance,
        n(this.contactoAvance, t.contacto),
      ].map((t) => ({ inicio: t, antes: e.vista })),
      i = this.marquees?.nombres.length ?? 0;
    if (i > 0) {
      let a = this.marqueesConfig.marquesinas.slice(0, i).map((e) => e.avance),
        o = this.marqueesConfig.avance;
      r.push({
        inicio: Math.min(n(o, t.eventos), o + Math.min(...a)),
        antes: e.vista,
      });
    }
    return (
      this.ball &&
        r.push({
          inicio: Math.min(
            this.ballConfig.avance,
            n(t.galeria.avanceSeccion, t.galeria),
          ),
          antes: e.vistaGaleria,
        }),
      r
    );
  }
  saltarASiguienteSeccion() {
    let e = this.tunnel,
      t = this.lenis;
    if (!e || !t || t.limit <= 0) return;
    let n = this.flechaConfig,
      r = e.loopLength,
      i = e.currentAdvance,
      a = 1 / 0;
    for (let { inicio: e, antes: t } of this.iniciosDeSeccion()) {
      let o = p.euclideanModulo(e - t - i, r);
      o > n.margen && o < a && (a = o);
    }
    if (!Number.isFinite(a)) return;
    let o = p.clamp(a / Math.max(1, n.saltoVelocidad), n.saltoMin, n.saltoMax);
    K(t.animatedScroll + a * (t.limit / r), {
      programmatic: !1,
      duration: o,
      easing: (e) => (e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2),
    });
  }
  empujarScroll(e, t) {
    let n = this.lenis;
    !n ||
      e <= 0 ||
      K(
        n.targetScroll + e,
        t ? { programmatic: !1, lerp: 1 } : { programmatic: !1 },
      );
  }
  mountHumo() {
    let e = this.background?.boveda;
    if (!e || this.tunnel !== e || this.humo || F()) return;
    let t = new va(
      this.content,
      e.uniformsForma,
      e.trayectoria.uniforms,
      e.uniformsIgnicion,
      this.humoConfig,
    );
    (t.setRecorrido(this.humoRecorrido, this.humoEventos),
      t.setActive(this.humoActive),
      (this.humo = t));
  }
  mountCabezas() {
    let e = this.background?.boveda;
    if (!e || this.tunnel !== e || this.cabezas) return;
    let t = new Ri(
      this.content,
      this.tunnel,
      e.uniformsForma,
      e.trayectoria.uniforms,
      this.cabezasConfig,
      this.physicsConfig,
    );
    (t.setHolograma(this.holograma?.seccion(`dj`) ?? null),
      t.setIgnicion(this.background?.ignicion ?? null),
      t.setAvanceSeccion(this.djConfig.avance),
      t.setActive(this.djActive),
      (this.cabezas = t));
  }
  repartirFocos() {
    let e = this.background;
    if (!e) return;
    let t = this.cabezas?.focosQuiere() ?? 0;
    t !== this.cabezasFocos.length &&
      (t > 0
        ? (this.prestamoFocos = e.pedirFocos(`dj`, t, 1))
        : (this.prestamoFocos?.soltar(), (this.prestamoFocos = null)),
      (this.cabezasFocos = this.prestamoFocos?.focos ?? []));
  }
  sincronizarLuminarias(e) {
    let t = this.luminarias;
    t &&
      (t.setAvanceSeccion(this.marqueesConfig.avance),
      t.setSitios(
        this.marqueesConfig.marquesinas
          .slice(0, Math.max(0, e))
          .map((e) => e.avance),
      ));
  }
  sincronizarCartelas(e) {
    let t = this.titulosConfig.cartelas;
    ((t.eventos.avanceSeccion = e.eventos),
      (t.galeria.avanceSeccion = e.galeria),
      (t.contacto.avanceSeccion = e.contacto));
  }
  mountIntro(e) {
    if (!this.universe || !this.tunnel || this.intro) return;
    let t = new so(
      this.content,
      this.universe.camera.instance,
      this.introConfig,
      this.background?.ignicion,
      this.tunnel,
    );
    ((this.intro = t),
      this.introAlien &&
        t.setAnfitrion(
          this.introAlien,
          () => this.movimientoReducido?.matches ?? !1,
        ),
      this.introStatus && (this.introStatus.dataset.canvas = `true`),
      (this.ignicionViva = !0),
      t.activarInteraccion(e),
      this.tvs?.setIgnicion(t.ignicion),
      this.marquees?.setIgnicion(t.ignicion),
      this.ball?.setIgnicion(t.ignicion),
      this.proyeccion?.setIgnicion(t.ignicion),
      this.dj?.setIgnicion(t.ignicion),
      this.titulos?.setIgnicion(t.ignicion),
      this.cabezas?.setIgnicion(t.ignicion),
      this.muroContacto?.setIgnicion(t.ignicion),
      this.aplicarIgnicion(),
      (t.onPulsar = () => {
        (J().desbloquear(), this.sonido?.desbloquear());
      }),
      (t.onEncendido = () => {
        (J().fundirEntrada(),
          this.sonido?.desbloquear(),
          this.sonido?.reproducirEntrada(),
          this.movimientoReducido?.matches &&
            ((this.decoradoEntrada = !0),
            this.reparto?.completar(),
            this.background?.setEncuadreEntrada(0)));
      }),
      (t.puedeTerminar = () => this.reparto?.finalizado ?? !0),
      (t.onEntrada = () => {
        (this.reparto?.completar(), this.abrirScroll());
      }),
      (this.introBoton = document.querySelector(`[data-intro-entrar]`)),
      this.introBoton &&
        ((this.onIntroBoton = () => t.entrar()),
        this.introBoton.addEventListener(`click`, this.onIntroBoton),
        this.introBoton.setAttribute(`hidden`, ``)),
      (this.introRotulo = new on(() => {
        (J().silenciar(), t.entrar());
      })),
      this.background?.calidad.pausar(`carga de la entrada`, !0),
      (t.onEstado = (e) => {
        (this.background?.calidad.pausar(
          `carga de la entrada`,
          e === `cargando`,
        ),
          e === `listo` && (J().precargar(), this.sonido?.precargar()),
          this.introBoton && (this.introBoton.hidden = e !== `listo`),
          this.introStatus &&
            (this.introStatus.textContent =
              e === `listo`
                ? this.introAlienConfig.textoToque
                : e === `cargando`
                  ? `Loading the night`
                  : e === `pulsando`
                    ? `Starting the experience`
                    : e === `entrando`
                      ? `Lighting up the night`
                      : ``));
      }),
      this.carga.on(`progress`, ({ progress: e }) => t.setProgreso(e)),
      this.carga.waitUntilReady().then(() => {
        !this.torn &&
          this.intro === t &&
          !this.vigia?.fallida &&
          t.terminarCarga();
      }));
  }
  mountCifraNav() {
    if (!this.universe || !this.tunnel || this.cifraNav) return;
    let e = new Va(
      this.content,
      this.tunnel,
      this.universe.camera.instance,
      this.introConfig,
    );
    ((this.cifraNav = e),
      (this.cifraNavReal = 0),
      (this.cifraNavVista = 0),
      (this.cifraNavLista = !1),
      this.carga.on(`progress`, ({ progress: e }) => {
        this.cifraNavReal = Math.max(this.cifraNavReal, e);
      }),
      this.escenaLista().then(() => {
        this.cifraNav === e && (this.cifraNavLista = !0);
      }));
  }
  actualizarCifraNav(e) {
    let t = this.cifraNav;
    if (t) {
      if (!t.visible) {
        (t.dispose(), (this.cifraNav = null));
        return;
      }
      if (!t.despidiendo) {
        if (this.cifraNavLista) this.cifraNavVista = 1;
        else {
          let t = Math.min(0.99, this.cifraNavReal),
            n =
              1 -
              (1 -
                Math.min(
                  0.9,
                  Math.max(0.01, this.introConfig.progresoSuavizado),
                )) **
                (e * 60);
          this.cifraNavVista += (t - this.cifraNavVista) * n;
        }
        (t.setProgreso(this.cifraNavVista),
          this.cifraNavVista >= 1 && t.despedir());
      }
      t.update(e, this.movimientoReducido?.matches ?? !1);
    }
  }
  get decoradoIntro() {
    return Math.min(
      this.introAlienConfig.decorado,
      this.intro?.duracionEncendido ?? 0,
    );
  }
  abrirScroll() {
    if (this.scrollListo) return;
    ((this.scrollListo = !0),
      (this.decoradoEntrada = !0),
      this.background?.setEncuadreEntrada(0));
    let e = this.introStatus ?? document.querySelector(`[data-intro-status]`);
    (e && (e.hidden = !0),
      this.introBoton && this.introBoton.setAttribute(`hidden`, ``),
      this.releaseIntroScrollLock?.(),
      (this.releaseIntroScrollLock = null),
      _t(),
      this.background?.setInfluenciaPuntero(1),
      pe());
  }
  lockScrollForIntro() {
    this.navigationEntry ||
      !this.introConfig.visible ||
      this.scrollListo ||
      this.releaseIntroScrollLock ||
      (this.releaseIntroScrollLock = vt());
  }
  rejugarIntro() {
    this.intro &&
      (this.soltarMiradaEventos(),
      this.background?.ignitionTransition.cancel(),
      (this.scrollListo = !1),
      J().prepararEntrada(),
      this.sonido?.cancelarEntrada(),
      this.lockScrollForIntro(),
      yt(),
      K(0, { immediate: !0 }),
      (this.ignicionViva = !0),
      this.introBoton && (this.introBoton.hidden = !0),
      this.introStatus && (this.introStatus.hidden = !1),
      (this.decoradoEntrada = !1),
      this.background?.setEncuadreEntrada(1),
      this.intro.reiniciar(),
      this.updateSectionActivity(),
      this.reparto?.reiniciar(),
      this.aplicarIgnicion());
  }
  aplicarIgnicion() {
    let e = this.intro?.ignicion ?? this.background?.ignicion;
    e &&
      ((!e.activa && !this.ignicionViva) ||
        ((this.ignicionViva = e.activa),
        this.tunnel?.setIgnicion(e),
        this.applyNeonNivel()));
  }
  applyNeonPlacement() {
    if (!(!this.neonRoot || !this.tunnel)) {
      if (this.neonMesh && this.universe) {
        let e = this.universe.camera.instance,
          t = 2 * Cs * Math.tan(p.degToRad(e.fov) / 2) * e.aspect,
          n = Me(this.neon.llenado, e.aspect, ws);
        (this.neonMesh.scale.setScalar(
          (t * n) / Math.max(1e-4, this.neonBaseWidth),
        ),
          this.spreadNeonLights());
      }
      (this.neonRoot.rotation.set(
        p.degToRad(this.neon.giroX),
        p.degToRad(this.neon.giroY),
        p.degToRad(this.neon.giroZ),
      ),
        (this.neonRoot.position.x = this.neon.desplazaX),
        (this.neonRoot.position.y = this.neon.desplazaY),
        this.placeNeon());
    }
  }
  placeNeon(e = 0) {
    if (
      (this.tvs?.setBaseAdvance(this.neon.avance),
      !this.neonRoot || !this.tunnel)
    )
      return;
    let t = !this.heroActive && this.disolucionNav === null;
    (t && this.neonDormido) ||
      ((this.neonDormido = t),
      this.neonRoot.position.set(
        this.neon.desplazaX,
        this.neon.desplazaY,
        this.tunnel.worldZFor(this.neon.avance),
      ),
      this.neonRoot.rotation.set(
        p.degToRad(this.neon.giroX),
        p.degToRad(this.neon.giroY),
        p.degToRad(this.neon.giroZ),
      ),
      this.neonMotion?.prepare(
        this.neonRoot,
        this.neonBaseRadius * (this.neonMesh?.scale.x ?? 1),
      ),
      !this.heroActive || !this.neon.visible
        ? this.neonMotion?.reset()
        : this.neonMotion?.update(e),
      this.disolucionNav === null
        ? (this.neonHolograma?.actualizar(
            this.neonRoot.position.z,
            this.neonBaseRadius * (this.neonMesh?.scale.x ?? 1),
            this.heroActive && this.neon.visible,
          ),
          this.heroActive &&
            this.neonGobernado &&
            this.neonAparicion < 1 &&
            this.neonHolograma?.controlar(1 - Math.max(0, this.neonAparicion)))
        : this.neonHolograma?.controlar(this.disolucionNav),
      this.applyNeonNivel());
  }
  setupResize() {
    this.universe &&
      ((this.onUniverseResize = () => {
        this.universe &&
          (this.applyNeonPlacement(),
          this.dj?.resize(),
          this.proyeccion?.setAspecto(this.universe.camera.instance.aspect),
          this.titulos?.setAspecto(),
          this.tvs?.apply(),
          this.ball?.apply(),
          Gt(this.marqueesConfig) && this.marquees?.apply());
      }),
      this.universe.on(`resize`, this.onUniverseResize),
      (this.soltarPerfil = I.onCambio(this.onUniverseResize)));
  }
  bindScroll() {
    this.scrollBound = !0;
    let e = document.querySelector(`[data-scroll-track]`);
    e && this.tunnel && (e.style.height = `${mt(this.tunnel.loopLength)}vh`);
    let t = bt();
    (t.resize(),
      this.scrollListo || !this.introConfig.visible ? _t() : yt(),
      K(0, { immediate: !0, force: !0 }));
    let n = t.progress;
    this.applyProgress(Number.isFinite(n) ? n : 0);
  }
  applyProgress(e, t = !1) {
    this.tunnel &&
      (this.tunnel.setAdvance(e * this.tunnel.loopLength),
      this.alimentarTecho(),
      !t && (this.updateSectionActivity(), this.placeNeon()));
  }
  alimentarTecho() {
    let e = this.paleta,
      t = this.tunnel,
      n = this.background;
    if (!e || !t || !n || !e.config.activa || n.transitionOwned || q()) {
      this.techoAlimentado = !1;
      return;
    }
    let r = e.colorEn(t.currentAdvance, this.tmpColorTecho);
    this.humo?.setColorLuz(r);
    let i = this.techoObjetivo;
    (this.techoAlimentado &&
      Math.abs(r.r - i.r) < 1e-4 &&
      Math.abs(r.g - i.g) < 1e-4 &&
      Math.abs(r.b - i.b) < 1e-4) ||
      (i.copy(r),
      (this.techoAlimentado = !0),
      n.setColorTecho(
        r,
        this.movimientoReducido?.matches
          ? 0
          : Math.max(0, e.config.persecucion),
      ));
  }
  calcularFundido() {
    if (!this.tunnel) return;
    let e = this.fundidos,
      t = this.neon.avance,
      n = this.marquees?.ultimoAvance ?? null,
      r = this.ballConfig.avance;
    ((e.hero = this.pesoFundido(this.contactoAvance, t)),
      (e.eventos = n === null ? 0 : this.pesoFundido(t, n)),
      (e.dj = this.pesoFundido(n ?? t, this.djConfig.avance)),
      (e.galeria = this.pesoFundido(this.djConfig.avance, r)),
      (e.proyeccion = this.pesoFundido(r, this.proyeccionConfig.avance)),
      (e.contacto = this.pesoFundido(
        this.proyeccionConfig.avance,
        this.contactoAvance,
      )));
    let i = this.holograma;
    if (i) for (let t of Ze) i.seccion(t).fundido = e[t];
    let a = this.anfitrion;
    if (a) {
      let t = a.parada;
      a.fundido.value = t ? e[t] : 1;
    }
    let o = this.astronauta;
    (o &&
      (o.fundido.value = this.pesoFundido(
        r,
        o.avance + o.semilargo,
        this.fundidoConfig.largoAstronauta,
      )),
      this.luminarias?.setFundido(e.eventos));
  }
  pesoFundido(e, t, n = this.fundidoConfig.largo) {
    if (!this.fundidoConfig.activo || !this.tunnel) return 1;
    let r = e - Math.max(0, this.fundidoConfig.adelanto);
    return Ba(this.tunnel.currentAdvance, r, t, this.tunnel.loopLength, n);
  }
  updateSectionActivity() {
    if (!this.tunnel) return;
    this.calcularFundido();
    let e = this.fundidos,
      t =
        this.navigationEntry ||
        this.scrollListo ||
        this.decoradoEntrada ||
        this.intro?.estado === `dentro`,
      n = this.background?.alcanceNiebla ?? _s;
    (this.anfitrion?.setActivo(t, n), this.restos?.setAlcance(n));
    let r = t && e.hero > 0 && this.tunnel.isActiveAt(this.neon.avance, n, Q);
    r !== this.heroActive &&
      ((this.heroActive = r),
      this.neonMotion?.reset(),
      this.tvs?.setActive(r),
      this.repartirPuntuales(),
      this.applyNeonNivel());
    let i =
      t &&
      e.eventos > 0 &&
      (this.marquees?.isActiveAt(n, Q) ??
        this.tunnel.isActiveAt(this.marqueesConfig.avance, n, Q));
    i !== this.eventsActive &&
      ((this.eventsActive = i),
      this.marquees?.setActive(i),
      this.luminarias?.setActive(i),
      this.repartirPuntuales());
    let a = t && e.dj > 0 && this.tunnel.isActiveAt(this.djConfig.avance, n, Q);
    (a !== this.djActive &&
      ((this.djActive = a), this.dj?.setActive(a), this.cabezas?.setActive(a)),
      t !== this.humoActive &&
        ((this.humoActive = t), this.humo?.setActive(t)));
    let o =
      t &&
      e.galeria > 0 &&
      this.tunnel.isActiveAt(this.ballConfig.avance, n, Q);
    o !== this.galeriaActive &&
      ((this.galeriaActive = o), this.ball?.setActive(o));
    let s =
      t &&
      e.proyeccion > 0 &&
      this.tunnel.isActiveAt(this.proyeccionConfig.avance, n, Q);
    s !== this.proyeccionActive &&
      ((this.proyeccionActive = s), this.proyeccion?.setActive(s));
    let c = this.astronauta,
      l =
        t &&
        c !== null &&
        c.fundido.value > 0 &&
        this.tunnel.isActiveAt(c.avance, n + c.semilargo, Q + c.semilargo);
    l !== this.astronautaActive &&
      ((this.astronautaActive = l), c?.setActive(l));
    let u =
      t &&
      this.horarios !== null &&
      e.contacto > 0 &&
      this.horarios.isActiveAt(n, Q);
    u !== this.horariosActive &&
      ((this.horariosActive = u), this.horarios?.setActive(u));
    let d =
      t && e.contacto > 0 && this.tunnel.isActiveAt(this.contactoAvance, n, Q);
    (d !== this.muroContactoActive &&
      ((this.muroContactoActive = d),
      this.muroContacto?.setVisible(d),
      this.cajasContacto?.setVisible(d),
      this.background?.bloom.setFuente(Ot, d)),
      this.titulos?.setActive(t, n, Q));
  }
  async buildGui() {}
  applyNeonColor() {
    let e = new E(this.scene.neonColor);
    for (let t of this.neonLights)
      (t.color.copy(e), (t.distance = this.scene.neonLuzAlcance));
    this.applyNeonNivel();
  }
  teardownScene() {
    if (this.torn) return;
    ((this.torn = !0),
      this.vigia?.destroy(),
      (this.vigia = null),
      this.soltarAlienEspera?.(),
      (this.soltarAlienEspera = null),
      this.soltarMiradaEventos(),
      this.background?.ignitionTransition.cancel(),
      this.releaseIntroScrollLock?.(),
      (this.releaseIntroScrollLock = null),
      this.background?.setInfluenciaPuntero(1),
      (this.lenis = null),
      (this.scrollBound = !1),
      this.universe &&
        this.onUniverseResize &&
        (this.universe.off(`resize`, this.onUniverseResize),
        this.soltarPerfil?.(),
        (this.soltarPerfil = null),
        (this.onUniverseResize = null)),
      this.universe &&
        this.onTick &&
        (this.universe.time.off(`tick`, this.onTick), (this.onTick = null)),
      this.panelHome?.soltar(),
      (this.panelHome = null),
      this.soltarContextoMedicion?.(),
      (this.soltarContextoMedicion = null),
      this.neonMotion?.dispose(),
      (this.neonMotion = null),
      this.tvs?.dispose(),
      (this.tvs = null),
      this.marquees?.dispose(),
      (this.marquees = null),
      this.enlacesEventos?.destroy(),
      (this.enlacesEventos = null),
      this.dj?.dispose(),
      (this.dj = null),
      this.ball?.dispose(),
      (this.ball = null),
      this.proyeccion?.dispose(),
      (this.proyeccion = null),
      this.horarios?.dispose(),
      (this.horarios = null),
      (this.horariosActive = !1),
      this.muroContacto?.dispose(),
      (this.muroContacto = null),
      this.cajasContacto?.dispose(),
      (this.cajasContacto = null),
      (this.muroContactoActive = !1),
      this.background?.soltarPuntuales(zt),
      this.background?.bloom.quitarFuente(Ot),
      // Release the source only after both event and contact marquee consumers.
      this.marquesinaGltf?.then((gltf) => Ds(gltf.scene)).catch(() => {}),
      (this.marquesinaGltf = null),
      (this.pintadasAtlas = null),
      (this.pintadasLienzo = null),
      (this.pintadasRecortes = {}),
      this.background?.boveda.pegatinas.soltar(),
      this.pegatinasAtlas?.dispose(),
      (this.pegatinasAtlas = null),
      this.pintadasTunelAtlas?.dispose(),
      (this.pintadasTunelAtlas = null),
      this.restos?.dispose(),
      (this.restos = null),
      this.astronauta?.dispose(),
      (this.astronauta = null),
      this.titulos?.dispose(),
      (this.titulos = null),
      this.luminarias?.dispose(),
      (this.luminarias = null),
      this.flecha?.dispose(),
      (this.flecha = null),
      this.soltarMenu?.(),
      (this.soltarMenu = null),
      (this.menuAbierto = !1),
      (this.flechaEnBloom = !1),
      (this.flechaScroll = NaN),
      this.background?.bloom.quitarFuente(Zi),
      this.cabezas?.dispose(),
      (this.cabezas = null),
      this.humo?.dispose(),
      (this.humo = null),
      this.prestamoFocos?.soltar(),
      (this.prestamoFocos = null),
      (this.cabezasFocos = []),
      this.background?.soltarPuntuales(`eventos`),
      (this.luminariasLights = []),
      (this.puntualesEventos = -1),
      (this.puntualesHero = -1),
      this.background?.setEncuadreEntrada(0),
      this.anfitrion?.dispose(),
      (this.anfitrion = null));
    let e = this.introAlien;
    ((this.introAlien = null),
      e?.dispose(),
      this.sonido?.dispose(),
      (this.sonido = null),
      this.holograma && (this.holograma.onCruce = null),
      this.holograma?.dispose(),
      (this.holograma = null),
      (this.neonHolograma = null),
      this.introBoton &&
        this.onIntroBoton &&
        (this.introBoton.removeEventListener(`click`, this.onIntroBoton),
        this.introBoton.setAttribute(`hidden`, ``)),
      (this.introBoton = null),
      this.introRotulo?.destroy(),
      (this.introRotulo = null),
      (this.introStatus = null),
      (this.onIntroBoton = null),
      this.background?.calidad.pausar(`carga de la entrada`, !1),
      this.intro?.dispose(),
      (this.intro = null),
      this.cifraNav?.dispose(),
      (this.cifraNav = null),
      (this.reparto = null),
      (this.neonGobernado = !1),
      this.carga.removeAllListeners(),
      this.carga.reset(),
      (this.ignicionViva = !1),
      (this.heroActive = !1),
      (this.eventsActive = !1),
      (this.djActive = !1),
      (this.galeriaActive = !1),
      (this.proyeccionActive = !1),
      this.neonRoot && Ds(this.neonRoot),
      (this.neonRoot = null),
      this.background?.devolverPuntuales(),
      (this.neonLights = []),
      (this.neonEnUso = 0),
      (this.neonAparicion = -1),
      (this.neonMaterials.length = 0),
      this.background?.bloom.quitarFuente(`hero-neon`),
      this.background?.sombras?.quitar(this.neonSombra),
      (this.neonSombra = null),
      this.background?.sombras?.vaciar(),
      (this.universe &&=
        (this.background?.releasePage(),
        this.content.removeFromParent(),
        this.content.clear(),
        (this.tunnel = null),
        (this.background = null),
        null)));
  }
};
function Ds(e) {
  let t = new Set(),
    n = new Set(),
    r = new Set();
  (e.traverse((e) => {
    if (e instanceof T) {
      t.add(e.geometry);
      for (let t of Array.isArray(e.material) ? e.material : [e.material]) {
        n.add(t);
        for (let e of Object.values(t)) e instanceof c && r.add(e);
      }
    }
  }),
    r.forEach((e) => e.dispose()),
    n.forEach((e) => e.dispose()),
    t.forEach((e) => e.dispose()),
    e.removeFromParent());
}
var $ = null,
  Os = () => {
    $ ||
      location.pathname !== "/the-weeknd-experience/" ||
      !document.querySelector(`[data-scroll-track]`) ||
      (($ = new Es()), $.init(), Zt($));
  };
// Give the static loading interface a paint before constructing the renderer.
let bootEpoch = 0;
const scheduleScene = () => {
  const epoch = ++bootEpoch;
  const run = () => { if (epoch === bootEpoch) Os(); };
  if (document.hidden) run();
  else requestAnimationFrame(() => requestAnimationFrame(run));
};
(scheduleScene(),
  document.addEventListener(`astro:page-load`, scheduleScene),
  document.addEventListener(`astro:before-swap`, () => {
    ++bootEpoch;
    ($?.destroy(), ($ = null), Zt(null));
  }));
