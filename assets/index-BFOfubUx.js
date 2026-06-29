(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();function c(){const n=window.matchMedia("(display-mode: standalone)").matches,t=window.navigator.standalone===!0;return n||t}let s=null;function a(){var i;const n=document.getElementById("app"),t=c(),r=s!==null?s==="standalone":t;r?n.innerHTML=`
      <div class="success-container">
        <div class="success-icon-wrapper">
          <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 class="success-title">インストール成功</h1>
      </div>
      <button id="toggle-mode" class="debug-toggle">
        ${s==="standalone"?"自動判定に戻す":"未インストール画面を試す"}
      </button>
    `:n.innerHTML=`
      <div class="guide-overlay">
        <div class="guide-header">
          <img src="./apple-touch-icon.png" alt="App Logo" class="app-logo-preview" />
          <h1 class="guide-title">ホーム画面に追加して起動</h1>
          <p class="guide-desc">
            このアプリを使用するには、ホーム画面への追加が必要です。<br>ブラウザ内からの操作はできません。
          </p>
        </div>
        
        <div class="guide-footer-indicator">
          <div class="share-instruction">
            下の 
            <svg class="ios-share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            ボタンから「ホーム画面に追加」
          </div>
          <svg class="arrow-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
      <button id="toggle-mode" class="debug-toggle">
        ${s==="browser"?"自動判定に戻す":"成功画面をプレビュー"}
      </button>
    `,(i=document.getElementById("toggle-mode"))==null||i.addEventListener("click",()=>{s===null?s=r?"browser":"standalone":s=null,a()})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(n=>console.log("SW Registered:",n)).catch(n=>console.error("SW Registration failed:",n))});a();window.matchMedia("(display-mode: standalone)").addEventListener("change",()=>{a()});
