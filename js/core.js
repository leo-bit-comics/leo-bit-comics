// Series registry. Series files call LBC.registerSeries({...}); episode files call
// LBC.registerEpisode(seriesId, number, {...}). LBC.finalize() builds SERIES in manifest order.
const SERIES=[];
window.LBC={manifest:[],_s:{},
  registerSeries(s){if(this._s[s.id])console.warn('LBC: duplicate series',s.id);s.episodes=s.episodes||[];this._s[s.id]=s;},
  registerEpisode(id,n,ep){const s=this._s[id];if(!s){console.warn('LBC: episode for unknown series',id,n);return;}s.episodes[n-1]=ep;},
  finalize(){SERIES.length=0;for(const id of this.manifest){const s=this._s[id];if(!s){console.warn('LBC: manifest lists missing series',id);continue;}
      for(let i=0;i<s.episodes.length;i++)if(!s.episodes[i])console.warn('LBC: missing episode',id,i+1);
      s.episodes=s.episodes.filter(Boolean);SERIES.push(s);}
    for(const id in this._s)if(!this.manifest.includes(id))console.warn('LBC: series not in manifest',id);}
};
