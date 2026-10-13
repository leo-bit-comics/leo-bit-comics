// Series registry. Series files call LBC.registerSeries({...}) with a titles:[T(...)] list (one per episode);
// episode files data/series/<id>/ep<N>.js call LBC.registerEpisode(id, N, {...}) and are loaded on demand
// by LBC.loadEpisode(id, N) (script injection, cached promise). LBC.finalize() builds SERIES in manifest order.
// Until its file has loaded, SERIES[i].episodes[n] is a stub {t}; LBC.isLoaded(ep) tells them apart.
const SERIES=[];
window.LBC={manifest:[],_s:{},_p:{},
  registerSeries(s){if(this._s[s.id])console.warn('LBC: duplicate series',s.id);
    s.episodes=(s.titles||[]).map(t=>({t}));this._s[s.id]=s;},
  registerEpisode(id,n,ep){const s=this._s[id];if(!s){console.warn('LBC: episode for unknown series',id,n);return;}
    const stub=s.episodes[n-1];if(!stub){console.warn('LBC: episode not listed in series titles',id,n);return;}
    Object.assign(stub,ep,{_ok:1});},
  isLoaded(ep){return !!(ep&&ep._ok);},
  loadEpisode(id,n){const key=id+'-'+n,s=this._s[id];
    if(s&&this.isLoaded(s.episodes[n-1]))return Promise.resolve(s.episodes[n-1]);
    return this._p[key]||(this._p[key]=new Promise((res,rej)=>{const el=document.createElement('script');
      el.src='data/series/'+id+'/ep'+n+'.js';el.async=true;
      el.onload=()=>{const e=s&&s.episodes[n-1];if(this.isLoaded(e))res(e);else{console.warn('LBC: missing episode',id,n);delete this._p[key];rej(new Error(key));}};
      el.onerror=()=>{console.warn('LBC: missing episode',id,n);delete this._p[key];el.remove();rej(new Error(key));};
      document.head.appendChild(el);}));},
  loadAll(){return Promise.all(SERIES.flatMap(s=>s.episodes.map((e,i)=>this.loadEpisode(s.id,i+1))));},
  finalize(){SERIES.length=0;for(const id of this.manifest){const s=this._s[id];if(!s){console.warn('LBC: manifest lists missing series',id);continue;}
      if(!s.episodes.length)console.warn('LBC: series has no titles',id);SERIES.push(s);}
    for(const id in this._s)if(!this.manifest.includes(id))console.warn('LBC: series not in manifest',id);}
};
