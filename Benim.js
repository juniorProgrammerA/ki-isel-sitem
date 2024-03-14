
let liste = ""
var gunler = [
  { name: "Home Page", link: "index.html", clasname: "ulli", },
  { name: "About Me", link: "about me.html", clasname: "ulli", },
  { name: "My Project", link: "My Project.html", clasname: "ulli", },



  {
    name: "Blog", link: "#", clasname: "df",
    altmenu:
      [
        { alt: "Java Script", link: "java.html" },
        { alt: "HTML", link: "html.html" },
        { alt: "CSS", link: "css.html" },
      ]
  },




  { name: "Contact", link: "iletisim.html", clasname: "ulli", },
];

for (let i = 0; i < gunler.length; i++) {
  // console.log(gunler[i].altmenu[i].alt);

  liste += `<li class="${gunler[i].clasname}" ><a class="ullia"  href="${gunler[i].link}">${gunler[i].name}</a>`
  if (gunler[i].altmenu) {
    for (let i = 0; i < gunler[3].altmenu.length; i++) {
      liste += `<div class="javadiv"><ul class="javaul"><li class="javali"><a class="javaa" href="${gunler[3].altmenu[i].link}">
    ${gunler[3].altmenu[i].alt}</a></li></ul></div>`
    }
  }
  +
    `</li>`
}
document.getElementById("menus").innerHTML = liste;

let liste2 = ""
let alt_yazılar = [
  {name:"Youtube Kanalım",cls:"youtube_foto"},
  {name:"İnstagram Sayfam",cls:"insta_foto"},
  {name:"Twitter Sayfam",cls:"Twitter_foto"},
]
for(let i = 0 ; i<alt_yazılar.length;i++){
liste2 += `<a class="şş" href="#">${alt_yazılar[i].name}</a> 
<div class=${alt_yazılar[i].cls}></div>`
}
document.getElementById("alt_menu").innerHTML = liste2;
console.log(alt_yazılar[0].name)