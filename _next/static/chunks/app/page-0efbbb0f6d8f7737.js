(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3414:function(){},172:function(){},2001:function(){},3779:function(){},2258:function(){},3782:function(e,t,i){Promise.resolve().then(i.bind(i,6543))},6543:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return D}});var s=i(7437),a=i(2265),r=i(6154),n=i(8252),o=i(2549),l=i(8759),c=i(1393),d=i(9303);let u={name:"Steve Meckman",about:{title:"About Me",description:"Business-results focused software engineer with proven leadership in creating innovative and efficient designs across multiple platforms. Quickly and effectively harnesses new technologies. A passionate developer with a love for creating immersive experiences."},experience:{title:"Experience"},skills:{title:"Skills",categories:[{category:"JVM",items:[{text:"Java"},{text:"Spring Boot"},{text:"Reactive Streams"}]},{category:"JavaScript",items:[{text:"React"},{text:"Angular"},{text:"Node.js"},{text:"ECMAScript",url:"https://gist.github.com/smeckman"},{text:"TypeScript"},{text:"RxJS"}]},{category:"Data Management",items:[{text:"PostgreSQL"},{text:"Kafka"},{text:"NoSQL"}]},{category:"Continuous Delivery",items:[{text:"AWS"},{text:"Kubernetes"},{text:"Docker"},{text:"Git"}]},{category:"Cloud Infrastructure",items:[{text:"AWS"},{text:"Azure"}]},{category:"Other",items:[{text:"Loves puppies"},{text:"Long walks on the beach"}]}]}};var h=i(2860),m=i(1519),x=i(6106),p=i(363),f=e=>{let{radius:t,speed:i,text:r,onClick:n,isActive:o}=e,l=(0,a.useRef)(null),[c,d]=(0,a.useState)(!1),[u,f]=(0,a.useState)([t,0,0]),g=(0,a.useRef)(100*Math.random()),[y,b]=(0,a.useState)(!1),[j,w]=(0,a.useState)(!1),{scale:v}=(0,p.q_)({scale:j?1.3:c?1.1:1,config:j?{tension:100,friction:10}:p.vc.wobbly});(0,a.useEffect)(()=>{let e=setTimeout(()=>{w(!0),setTimeout(()=>{w(!1),setTimeout(()=>{w(!0),setTimeout(()=>{w(!1)},250)},250)},250)},15e3);return()=>clearTimeout(e)},[]);let{rotation:S}=(0,p.q_)({rotation:y?[.2,.2,.2]:[0,0,0],config:{mass:1,tension:200,friction:10,precision:.001}});(0,h.F)(()=>{g.current+=.01;let e=Math.cos(g.current*i)*t,s=Math.sin(g.current*i)*t;f([e,0,s]),l.current&&!y&&(l.current.rotation.x+=.01,l.current.rotation.y+=.01)});let k=c?r:"About"===r?"ℹ️":"Skills"===r?"\uD83D\uDD27":"Experience"===r?"\uD83D\uDCBC":r;return(0,s.jsxs)(p.q.group,{ref:l,scale:v,onClick:()=>{b(!0),n(),setTimeout(()=>{b(!1)},150)},onPointerOver:e=>{e.stopPropagation(),d(!0),document.body.style.cursor="pointer"},onPointerOut:e=>{e.stopPropagation(),d(!1),document.body.style.cursor="auto"},position:u,rotation:S.get(),children:[(0,s.jsx)(m.Z,{args:[1,1,1],radius:.1,smoothness:4,castShadow:!0,children:(0,s.jsx)("meshStandardMaterial",{color:o?"#ff6b6b":c?"#4dabf7":"#228be6",roughness:.3,metalness:.4})}),(0,s.jsx)(x.x,{position:[0,0,.51],fontSize:c?.15:.2,color:"white",anchorX:"center",anchorY:"middle",children:k}),(0,s.jsx)(x.x,{position:[0,0,-.51],fontSize:c?.15:.2,color:"white",anchorX:"center",anchorY:"middle",rotation:[0,Math.PI,0],children:k}),(0,s.jsx)(x.x,{position:[-.51,0,0],fontSize:c?.15:.2,color:"white",anchorX:"center",anchorY:"middle",rotation:[0,Math.PI/2,0],children:k}),(0,s.jsx)(x.x,{position:[.51,0,0],fontSize:c?.15:.2,color:"white",anchorX:"center",anchorY:"middle",rotation:[0,-Math.PI/2,0],children:k}),(0,s.jsx)(x.x,{position:[0,.51,0],fontSize:c?.15:.2,color:"white",anchorX:"center",anchorY:"middle",rotation:[-Math.PI/2,0,0],children:k}),(0,s.jsx)(x.x,{position:[0,-.51,0],fontSize:c?.15:.2,color:"white",anchorX:"center",anchorY:"middle",rotation:[Math.PI/2,0,0],children:k})]})},g=e=>{let{setIntroFinished:t}=e,i=[0,30,0],s=[0,-2,10],[{cameraPosition:r},n]=(0,p.q_)(()=>({cameraPosition:i,config:{mass:1,tension:20,friction:45},onRest:e=>{e.finished&&t(!0)}}));return(0,a.useEffect)(()=>{n.start({cameraPosition:s})},[n]),(0,h.F)(e=>{let{camera:t}=e,[i,s,a]=r.get();t.position.set(i,s,a),t.lookAt(0,0,0)}),null},y=()=>(0,s.jsx)(x.x,{position:[0,0,0],fontSize:1.5,font:"https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZFhjQ.ttf",color:"#1a202c",anchorX:"center",anchorY:"middle",letterSpacing:-.1,strokeWidth:.25,strokeColor:"#000000",fontWeight:700,children:u.name}),b=i(6375),j=()=>{let e=(0,a.useRef)(null),t=(0,a.useRef)(0),i=(0,a.useMemo)(()=>{let e=new b.PlaneGeometry(100,100,64,64),t=e.attributes.position.array;for(let e=0;e<t.length;e+=3){let i=t[e],s=t[e+2];t[e+1]=Math.sin(.3*i)*Math.sin(.3*s)*2}return e.computeVertexNormals(),e},[]);return(0,h.F)(()=>{if(t.current+=.001,e.current){let i=e.current.geometry.attributes.position.array;for(let e=0;e<i.length;e+=3){let s=i[e],a=i[e+2];i[e+1]=Math.sin(.3*s+t.current)*Math.sin(.3*a)*2+Math.cos(.2*s)*Math.cos(.2*a)*1.5}e.current.geometry.attributes.position.needsUpdate=!0,e.current.geometry.computeVertexNormals()}}),(0,s.jsxs)("group",{children:[(0,s.jsx)("mesh",{ref:e,receiveShadow:!0,castShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,-4,0],geometry:i,children:(0,s.jsx)("meshStandardMaterial",{color:"#4a5568",roughness:.8,metalness:.2,side:b.DoubleSide,wireframe:!1})}),(0,s.jsxs)("mesh",{receiveShadow:!0,rotation:[-Math.PI/2,0,0],position:[0,-4.1,0],children:[(0,s.jsx)("planeGeometry",{args:[200,200]}),(0,s.jsx)("meshStandardMaterial",{color:"#2d3748",roughness:1,metalness:0})]})]})},w=i(1243),v=e=>{let{setIntroFinished:t}=e,i=(0,a.useRef)(null),[r,n]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{i.current=new Audio("https://smeckman.github.io/resources/resume-jingle.mp3"),i.current.loop=!1,i.current.volume=.4},[]),(0,s.jsx)("button",{onClick:()=>{i.current&&(r?(t(!1),i.current.play()):i.current.pause(),n(!r))},className:"fixed bottom-4 right-4 z-50 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white/100 transition-colors","aria-label":r?"Unmute background music":"Mute background music",children:(0,s.jsx)(w.Z,{className:"w-6 h-6 text-gray-800"})})},S=i(3188),k=i(2385),N=i(7931),M=i(6637),E=i(415),P=i.n(E);S.default.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(S.default.version,"/pdf.worker.min.js");let C=()=>{let[e,t]=(0,a.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{onClick:()=>t(!0),className:"z-50 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white/100 transition-colors","aria-label":"Open PDF viewer",children:(0,s.jsx)(M.Z,{className:"w-6 h-6 text-gray-800"})}),(0,s.jsx)(c.M,{children:e&&(0,s.jsx)(d.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",onClick:e=>{e.target===e.currentTarget&&t(!1)},children:(0,s.jsxs)(d.E.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},className:"bg-white rounded-lg shadow-xl w-full max-w-4xl h-[80vh] fixed bottom-px",children:[(0,s.jsx)("button",{onClick:()=>t(!1),className:"absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors",children:(0,s.jsx)(o.Z,{className:"w-6 h-6"})}),(0,s.jsx)("div",{className:"h-full p-8 overflow-auto",children:e&&(0,s.jsxs)(k.Z,{file:"https://smeckman.github.io/resources/resume.pdf",className:"flex flex-col items-center",loading:(0,s.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,s.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"})}),error:(0,s.jsx)("div",{className:"text-red-500",children:"Failed to load PDF. Please try again."}),children:[(0,s.jsx)("div",{className:"p-4 bg-gray-500",children:(0,s.jsx)(N.Z,{pageNumber:1,renderTextLayer:!1,renderAnnotationLayer:!1,className:"max-w-full"})}),(0,s.jsx)("div",{className:"p-4 bg-gray-500",children:(0,s.jsx)(N.Z,{pageNumber:2,renderTextLayer:!1,renderAnnotationLayer:!1,className:"max-w-full"})})]})})]})})})]})};var A=P()(()=>Promise.resolve(C),{ssr:!1}),D=()=>{let[e,t]=(0,a.useState)(null),[i,h]=(0,a.useState)(!1),m=(0,a.useRef)(null),x=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&x.current&&!x.current.contains(e.target)&&t(null)},i=e=>{"Escape"===e.key&&t(null)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",i),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",i)}},[]),(0,s.jsxs)("div",{className:"fixed inset-0 bg-gray-100",children:[i?(0,s.jsx)(v,{setIntroFinished:h}):null,(0,s.jsx)("div",{ref:x,className:"h-screen",children:(0,s.jsxs)(r.Xz,{shadows:!0,children:[i?(0,s.jsx)(n.z,{enableZoom:!0,enablePan:!0,minPolarAngle:0,maxPolarAngle:Math.PI,maxDistance:30,minDistance:2,enableDamping:!0,dampingFactor:.05}):(0,s.jsx)(g,{setIntroFinished:h}),(0,s.jsx)("color",{attach:"background",args:["#f7fafc"]}),(0,s.jsx)("ambientLight",{intensity:1}),(0,s.jsx)("directionalLight",{position:[5,10,5],intensity:2,castShadow:!0,"shadow-mapSize-width":2048,"shadow-mapSize-height":2048,"shadow-camera-far":50,"shadow-camera-left":-20,"shadow-camera-right":20,"shadow-camera-top":20,"shadow-camera-bottom":-20}),(0,s.jsx)("pointLight",{position:[-5,10,-5],intensity:1,castShadow:!0}),(0,s.jsx)("fog",{attach:"fog",args:["#f7fafc",10,25]}),(0,s.jsx)(y,{}),(0,s.jsx)(j,{}),[{id:"about",text:"About",radius:5,speed:.5},{id:"experience",text:"Experience",radius:4,speed:.3},{id:"skills",text:"Skills",radius:6,speed:.7}].map(i=>(0,s.jsx)(f,{radius:i.radius,speed:i.speed,text:i.text,isActive:e===i.id,onClick:()=>t(e=>e===i.id?null:i.id)},i.id))]})}),(0,s.jsx)(c.M,{mode:"wait",children:e&&(0,s.jsx)(d.E.div,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",damping:20,stiffness:300},className:"fixed bottom-0 left-0 right-0 bg-white/90 text-gray-900 backdrop-blur-sm",children:(0,s.jsxs)(d.E.div,{ref:m,className:"relative max-w-2xl mx-auto p-8",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1},children:[(0,s.jsx)(d.E.button,{onClick:()=>t(null),className:"absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors",whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,s.jsx)(o.Z,{className:"w-5 h-5"})}),"about"===e&&(0,s.jsxs)(d.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4",children:u.about.title}),(0,s.jsx)("p",{children:u.about.description})]}),"experience"===e&&(0,s.jsxs)(d.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4",children:u.experience.title}),(0,s.jsxs)("div",{className:"text-xl",children:["Click for resume: ",(0,s.jsx)(A,{})]})]}),"skills"===e&&(0,s.jsxs)(d.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[u.skills.title," ",(0,s.jsx)(l.Z,{className:"w-6 h-6 text-yellow-500"})]}),(0,s.jsx)("div",{className:"grid grid-cols-3 gap-4",children:u.skills.categories.map((e,t)=>(0,s.jsxs)(d.E.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.3+.1*t},className:"bg-gray-50/80 p-4 rounded-lg shadow-sm",children:[(0,s.jsx)("h3",{className:"font-semibold",children:e.category}),(0,s.jsx)("p",{className:"text-sm text-gray-600",children:e.items.map((t,i)=>t.url?(0,s.jsxs)("a",{className:"text-gray-500 hover:text-gray-300",href:t.url,target:"_blank",children:[t.text,", "]},"{item.text}"):t.text+(i<e.items.length-1?", ":""))})]},t))})]})]})})})]})}}},function(e){e.O(0,[689,918,651,482,971,864,744],function(){return e(e.s=3782)}),_N_E=e.O()}]);