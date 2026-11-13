(() => {
  if (window.__weekndAccessibility) return;
  window.__weekndAccessibility = true;
  let cleanup = () => {};
  function install() {
    cleanup();
    if (location.pathname !== "/the-weeknd-experience/") return;
    document.documentElement.classList.add('immersive-home');
    let delayReached = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const entrance = document.querySelector('[data-intro-entrar]');
    const entranceLabel = entrance?.textContent;
    const labelEntrance = () => {
      if (entrance) entrance.textContent = reducedMotion.matches ? 'Enter with sound' : entranceLabel;
    };
    labelEntrance();
    reducedMotion.addEventListener('change', labelEntrance);
    const link = document.createElement('a');
    link.className = 'experience-fallback';
    link.href = "/the-weeknd-experience/discover.html";
    link.textContent = 'Explore without 3D';
    const panel = document.createElement('section');
    panel.className = 'experience-unavailable';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'A lighter way into the night');
    panel.innerHTML = '<h1>ENTER THE NIGHT.</h1><p>This device could not start the 3D scene. Explore the music and visual archive in the lighter edition.</p><a href="/the-weeknd-experience/discover.html">Open the lighter experience ↗</a>';
    document.body.append(link, panel);
    const update = () => {
      const rendererFailed = document.documentElement.dataset.sceneFailed === 'true';
      const failure = document.querySelector('[data-carga-fallida]');
      const assetsFailed = !!failure && !failure.hidden;
      const entered = document.querySelector('footer[data-arrancado]')?.dataset.arrancado === 'true';
      const loading = !rendererFailed && !assetsFailed && !entered && !!entrance?.hidden;
      document.documentElement.classList.toggle('experience-loading-delayed', delayReached && loading);
      const panelHidden = !rendererFailed;
      const linkHidden = rendererFailed || (entered && !assetsFailed);
      if (panel.hidden !== panelHidden) panel.hidden = panelHidden;
      if (link.hidden !== linkHidden) link.hidden = linkHidden;
      if (assetsFailed) link.dataset.visible = 'true';
    };
    const failed = () => { document.documentElement.dataset.sceneFailed = 'true'; update(); };
    const canvas = document.getElementById('webgl-canvas');
    canvas?.addEventListener('webglcontextlost', failed);
    window.addEventListener('weeknd:scene-failed', failed);
    const observer = new MutationObserver(update);
    observer.observe(document.body, {subtree:true,attributes:true,attributeFilter:['data-arrancado','hidden']});
    const sceneObserver = new MutationObserver(update);
    sceneObserver.observe(document.documentElement,{attributes:true,attributeFilter:['data-scene-failed']});
    const timer = setTimeout(() => {delayReached = true;link.dataset.visible = 'true';update();},12000);
    update();
    cleanup = () => {clearTimeout(timer);observer.disconnect();sceneObserver.disconnect();reducedMotion.removeEventListener('change',labelEntrance);canvas?.removeEventListener('webglcontextlost',failed);window.removeEventListener('weeknd:scene-failed',failed);link.remove();panel.remove();document.documentElement.classList.remove('immersive-home','experience-loading-delayed');};
  }
  document.addEventListener('astro:page-load',install);
  document.addEventListener('astro:before-swap',() => cleanup());
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',install,{once:true}); else install();
})();
