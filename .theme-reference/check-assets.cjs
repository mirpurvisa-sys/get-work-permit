const fs=require('fs'),path=require('path'),http=require('http');
const html=fs.readFileSync('.theme-reference/home-render.html','utf8');
const refs=[...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m=>m[1].replaceAll('&amp;','&')).filter(v=>v.startsWith('/')&&!v.startsWith('//'));
const images=new Set();
for(const root of ['app','components','lib']){function walk(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory())walk(p);else if(/\.(tsx|ts|css)$/.test(p)){for(const m of fs.readFileSync(p,'utf8').matchAll(/['"(](\/(?:services|home|about|contact|our-process|work-permit)\/[\w.-]+\.(?:jpg|jpeg|avif|webp|png))/gi))images.add(m[1]);}}}walk(root)}
const missing=[...images].filter(src=>!fs.existsSync(path.join('public',src)));
console.log('Local images:',images.size,'Missing:',JSON.stringify(missing));
console.log('Homepage: collaged intro',html.includes('GLOBAL WORK'),'crossed ribbons',html.includes('ribbonSection'),'fixed service cards',html.includes('Growth &amp; Scale Advisory'),'consultation form',html.includes('id="consultation"'));
const contact=fs.readFileSync('.theme-reference/contact-render.html','utf8');
console.log('Contact form:',contact.includes('required=""'),'route options',contact.includes('sweden-job-seeker'),'email notice',contact.includes('It does not submit a government visa application'));
const css=[...new Set(refs.filter(r=>r.includes('.css')))];
Promise.all(css.map(url=>new Promise((resolve,reject)=>http.get('http://localhost:3000'+url,r=>{let body='';r.on('data',c=>body+=c);r.on('end',()=>resolve({status:r.statusCode,bytes:body.length,hasHomeLayout:body.includes('ribbonSection')}))}).on('error',reject)))).then(results=>console.log('Stylesheets:',JSON.stringify(results))).catch(console.error);
