(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{4011:function(e,n,t){"use strict";var s=t(6265),r=t(5893),a=t(7294),i=t(1163),c=t(4494),l=t(2679),o=t(5708),d=t(8040),m=t(6723),u=t(890),h=t(3699);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=(0,c.$j)((function(e){return{wishlist:e.wishlist.list?e.wishlist.list:[]}}),f(f(f({},o.Nw),d.Nw),m.Nw))((function(e){var n=(0,i.useRouter)(),t=e.adClass,s=void 0===t?"":t,c=e.link,o=void 0===c?"default":c,d=e.product;function m(){return d.price[0]!==d.price[1]&&0===d.variants.length?"-"+(100*(d.price[1]-d.price[0])/d.price[1]).toFixed(0)+"%":!!d.variants.find((function(e){return e.sale_price}))&&"Sale"}function p(){return d&&e.wishlist.findIndex((function(e){return e.slug===d.slug}))>-1}return(0,r.jsxs)("div",{className:"product-default media-with-lazy ".concat(s),children:[(0,r.jsxs)("figure",{children:[(0,r.jsxs)(u.Z,{href:"/product/".concat(o,"/").concat(d.slug),children:[(0,r.jsx)("div",{className:"lazy-overlay"}),(0,r.jsx)(l.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/porto"+d.pictures[0].url,threshold:500,effect:"black and white",width:"100%",height:"auto"}),d.pictures.length>=2?(0,r.jsx)(l.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/porto"+d.pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""]}),(0,r.jsxs)("div",{className:"label-group",children:[d.is_hot?(0,r.jsx)("div",{className:"product-label label-hot",children:"HOT"}):"",m()?(0,r.jsx)("div",{className:"product-label label-sale",children:m()}):""]}),(0,r.jsx)("div",{className:"btn-icon-group",children:d.variants.length>0?(0,r.jsx)(u.Z,{href:"/product/default/".concat(d.slug),className:"btn-icon btn-add-cart",children:(0,r.jsx)("i",{className:"fa fa-arrow-right"})}):(0,r.jsx)("a",{href:"#",className:"btn-icon btn-add-cart product-type-simple",title:"Add To Cart",onClick:function(n){n.preventDefault(),e.addToCart(d)},children:(0,r.jsx)("i",{className:"icon-shopping-cart"})})}),d.until&&null!==d.until&&(0,r.jsx)(h.Z,{}),(0,r.jsx)("a",{href:"#",className:"btn-quickview",title:"Quick View",onClick:function(n){n.preventDefault(),e.showQuickView(d.slug)},children:"Quick View"})]}),(0,r.jsxs)("div",{className:"product-details",children:[(0,r.jsxs)("div",{className:"category-wrap",children:[(0,r.jsx)("div",{className:"category-list",children:d.categories?d.categories.map((function(e,n){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(u.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:e.name}),n<d.categories.length-1?", ":""]},e.slug+"-"+n)})):""}),(0,r.jsx)("a",{href:"#",className:"btn-icon-wish ".concat(p()?"added-wishlist":""),onClick:function(t){if(t.preventDefault(),p())n.push("/pages/wishlist");else{var s=t.currentTarget;s.classList.add("load-more-overlay"),s.classList.add("loading"),setTimeout((function(){s.classList.remove("load-more-overlay"),s.classList.remove("loading"),e.addToWishList(d)}),1e3)}},title:"".concat(!0===p()?"Go to Wishlist":"Add to Wishlist"),children:(0,r.jsx)("i",{className:"icon-heart"})})]}),(0,r.jsx)("h3",{className:"product-title",children:(0,r.jsx)(u.Z,{href:"/product/default/".concat(d.slug),children:d.name})}),(0,r.jsx)("div",{className:"ratings-container",children:(0,r.jsxs)("div",{className:"product-ratings",children:[(0,r.jsx)("span",{className:"ratings",style:{width:20*d.ratings+"%"}}),(0,r.jsx)("span",{className:"tooltiptext tooltip-top",children:d.ratings.toFixed(2)})]})}),(0,r.jsx)("div",{className:"price-box",children:d.price[0]==d.price[1]?(0,r.jsx)("span",{className:"product-price",children:"$"+d.price[0].toFixed(2)}):d.variants.length>0?(0,r.jsxs)("span",{className:"product-price",children:["$"+d.price[0].toFixed(2)," \u2013 ","$"+d.price[1].toFixed(2)]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"old-price",children:"$"+d.price[1].toFixed(2)}),(0,r.jsx)("span",{className:"product-price",children:"$"+d.price[0].toFixed(2)})]})})]})]})}))},6207:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var s=t(5893),r=t(6829),a=t(645),i=t(8665),c=t(5853),l=t(890),o=t(4011),d=t(9905);function m(e){var n=e.product;return(0,s.jsx)("div",{className:"top-sellers-section",children:(0,s.jsx)(c.ZP,{keyframes:d.Ji,delay:200,duration:1e3,triggerOnce:!0,children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"banner banner3 d-flex flex-wrap align-items-center",style:{background:"#dc7a1f no-repeat center/cover url(images/home/banners/banner-3.jpg)"},children:[(0,s.jsxs)("div",{className:"col-lg-9 mb-2 mb-lg-0",children:[(0,s.jsxs)("h2",{className:"d-inline-block ls-n-20 text-white text-uppercase mb-0",children:[(0,s.jsx)("span",{className:"sale-off",children:"Big sale"})," ALL HIGH PERFORMANCE ITEMS UP TO 70% OFF"]}),(0,s.jsx)("h6",{className:"d-inline-block mb-0",children:"Online Purchases Only"})]}),(0,s.jsx)("div",{className:"col-lg-3 text-lg-right",children:(0,s.jsx)(l.Z,{href:"/shop",className:"btn btn-light btn-lg",children:"View Sale"})})]}),(0,s.jsx)("h2",{className:"section-title pb-3 m-b-4",children:"Top Seller"}),(0,s.jsx)("div",{className:"row",children:n?n.slice(0,6).map((function(e,n){return(0,s.jsx)("div",{className:"col-6 col-md-4 col-lg-3 col-xl-2",children:(0,s.jsx)(o.Z,{product:e,adClass:"inner-quickview inner-icon"})},"product-one"+n)})):[0,1,2,3,4,5].map((function(e,n){return(0,s.jsx)("div",{className:"col-6 col-md-4 col-lg-3 col-xl-2",children:(0,s.jsx)("div",{className:"skel-pro skel-pro-list"},"product-one"+n)},"Featured Product:"+n)}))})]})})})}var u=t(7294),h=t(4138),p=t(8509);function f(){return(0,s.jsx)("div",{className:"info-boxes-container",children:(0,s.jsx)(c.ZP,{keyframes:d.Ji,delay:200,duration:1e3,triggerOnce:!0,children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)(h.Z,{adClass:"info-boxes-slider owl-theme",options:p.cJ,children:[(0,s.jsxs)("div",{className:"info-box info-box-icon-left",children:[(0,s.jsx)("i",{className:"icon-shipping text-primary"}),(0,s.jsxs)("div",{className:"info-box-content",children:[(0,s.jsx)("h4",{className:"line-height-1",children:"Free Shipping on Orders Over $99"}),(0,s.jsx)("p",{className:"font2 line-height-1 text-body ",children:"For more than 100,000 parts!"})]})]}),(0,s.jsxs)("div",{className:"info-box info-box-icon-left",children:[(0,s.jsx)("i",{className:"icon-money text-primary"}),(0,s.jsxs)("div",{className:"info-box-content",children:[(0,s.jsx)("h4",{className:"line-height-1",children:"Up to 40% OFF on Selected Items"}),(0,s.jsx)("p",{className:"font2 line-height-1 text-body ",children:"Available for all Categories!"})]})]}),(0,s.jsxs)("div",{className:"info-box info-box-icon-left",children:[(0,s.jsx)("i",{className:"icon-secure-payment text-primary"}),(0,s.jsxs)("div",{className:"info-box-content",children:[(0,s.jsx)("h4",{className:"line-height-1",children:"100% Secure Payments"}),(0,s.jsx)("p",{className:"font2 line-height-1 text-body ",children:"We ensure secure payment!"})]})]})]})})})})}var x=t(2679);function g(){return(0,s.jsx)("section",{className:"brands-section",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("h2",{className:"section-title pb-3 mb-4",children:"Brands We Trust"}),(0,s.jsx)(c.ZP,{keyframes:d.Ji,delay:100,duration:500,triggerOnce:!0,children:(0,s.jsxs)(h.Z,{adClass:"brands-slider images-center mb-4",options:p.mI,children:[(0,s.jsx)("figure",{className:"mb-0",children:(0,s.jsx)(x.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand1.png",width:"100%",height:60,threshold:500,effect:"black and white"})}),(0,s.jsx)("figure",{className:"mb-0",children:(0,s.jsx)(x.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand2.png",width:"100%",height:60,threshold:500,effect:"black and white"})}),(0,s.jsx)("figure",{className:"mb-0",children:(0,s.jsx)(x.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand3.png",width:"100%",height:60,threshold:500,effect:"black and white"})}),(0,s.jsx)("figure",{className:"mb-0",children:(0,s.jsx)(x.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand4.png",width:"100%",height:60,threshold:500,effect:"black and white"})}),(0,s.jsx)("figure",{className:"mb-0",children:(0,s.jsx)(x.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand5.png",width:"100%",height:60,threshold:500,effect:"black and white"})}),(0,s.jsx)("figure",{className:"mb-0",children:(0,s.jsx)(x.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand6.png",width:"100%",height:60,threshold:500,effect:"black and white"})})]})})]})})}var j=u.memo(g),b=t(4494),v=t(2879),N=t(6723);var y=(0,b.$j)(null,N.Nw)((function(e){var n=e.adClass,t=void 0===n?"":n,r=e.blog,a=new Date(r.date),i=(0,u.useState)(!1),c=i[0],o=i[1],d=(0,u.useState)(0),m=d[0],f=d[1],g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],j={onTranslated:function(e){f(e.item.index)}};function b(n){n.preventDefault(),e.showVideo()}function N(){o(!0)}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("article",{className:"post media-with-lazy ".concat(t),children:[r.picture&&(r.picture.length>1?(0,s.jsx)(h.Z,{adClass:"owl-theme post-slider mb-0 show-nav-hover",options:p.jP,events:j,children:r.picture.map((function(e,n){return(0,s.jsxs)("figure",{className:"post-media zoom-effect",children:[(0,s.jsxs)(l.Z,{href:"/pages/blog/".concat(r.slug),children:[(0,s.jsx)("div",{className:"lazy-overlay"}),(0,s.jsx)(x.LazyLoadImage,{alt:"post_image",src:"https://d-themes.com/react_asset_api/porto"+e.url,"data-zoom-image":"https://d-themes.com/react_asset_api/porto"+e.url,width:"100%",height:"auto",effect:"blur"})]}),(0,s.jsxs)("div",{className:"post-date",children:[(0,s.jsx)("span",{className:"day",children:"".concat(a.getUTCDate()<10?"0"+a.getUTCDate():a.getUTCDate())}),(0,s.jsx)("span",{className:"month",children:g[a.getUTCMonth()]})]}),(0,s.jsx)("span",{className:"prod-full-screen",onClick:N,children:(0,s.jsx)("i",{className:"fas fa-search"})}),r.video&&(0,s.jsx)("a",{className:"btn-play btn-iframe",onClick:b,href:"https://www.youtube.com/watch?v=vBPgmASQ1A0",children:(0,s.jsx)("i",{className:"fas fa-play"})})]},n)}))}):(0,s.jsxs)("figure",{className:"post-media zoom-effect",children:[(0,s.jsxs)(l.Z,{href:"/pages/blog/".concat(r.slug),children:[(0,s.jsx)("div",{className:"lazy-overlay"}),(0,s.jsx)(x.LazyLoadImage,{alt:"post_image",src:"https://d-themes.com/react_asset_api/porto"+r.picture[0].url,threshold:500,width:"100%",height:"auto",effect:"blur"})]}),(0,s.jsx)("span",{className:"prod-full-screen",onClick:N,children:(0,s.jsx)("i",{className:"fas fa-search"})}),r.video&&(0,s.jsx)("a",{className:"btn-play btn-iframe",onClick:b,href:"https://www.youtube.com/watch?v=vBPgmASQ1A0",children:(0,s.jsx)("i",{className:"fas fa-play"})}),(0,s.jsxs)("div",{className:"post-date",children:[(0,s.jsx)("span",{className:"day",children:"".concat(a.getUTCDate()<10?"0"+a.getUTCDate():a.getUTCDate())}),(0,s.jsx)("span",{className:"month",children:g[a.getUTCMonth()]})]})]})),(0,s.jsxs)("div",{className:"post-body",children:[(0,s.jsx)("h2",{className:"post-title",children:(0,s.jsx)(l.Z,{href:"/pages/blog/".concat(r.slug),children:r.title})}),(0,s.jsx)("div",{className:"post-content",children:(0,s.jsxs)("p",{children:[r.content,(0,s.jsxs)(l.Z,{href:"/pages/blog/".concat(r.slug),className:"read-more d-inline-flex align-items-center",children:["read more",(0,s.jsx)("i",{className:"fas fa-angle-right"})]})]})})]})]}),c&&(0,s.jsx)(v.Z,{mainSrc:"https://d-themes.com/react_asset_api/porto"+r.picture[m].url,prevSrc:"https://d-themes.com/react_asset_api/porto"+r.picture[(m+r.picture.length-1)%r.picture.length].url,nextSrc:"https://d-themes.com/react_asset_api/porto"+r.picture[(m+1)%r.picture.length].url,onCloseRequest:function(){o(!1)},onMoveNextRequest:function(){f((m+1)%r.picture.length)},onMovePrevRequest:function(){f((m+r.picture.length-1)%r.picture.length)}})]})}));function w(e){var n=e.blog;return(0,s.jsx)("section",{className:"blog-section post-date-in-media media-with-zoom bg-gray",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(h.Z,{options:p.Uw,children:n?n.map((function(e,n){return(0,s.jsx)(y,{blog:e},"blog"+n)})):new Array(3).fill(1).map((function(e,n){return(0,s.jsx)("div",{className:"skel-pro skel-pro-grid"},"Blog Skeleton:"+n)}))})})})}function Z(e){var n=e.product;return(0,s.jsx)("div",{className:"products-container bg-gray mt-1",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(c.ZP,{keyframes:d.lN,delay:200,duration:1e3,triggerOnce:!0,children:(0,s.jsx)("div",{className:"row custom-products no-gutters",children:n?n.slice(0,6).map((function(e,n){return(0,s.jsx)("div",{className:"col-sm-6 col-lg-4",children:(0,s.jsx)(o.Z,{product:e,adClass:"inner-quickview inner-icon"})},"product-one"+n)})):[0,1,2,3,4,5].map((function(e,n){return(0,s.jsx)("div",{className:"col-sm-6 col-lg-4",children:(0,s.jsx)("div",{className:"skel-pro skel-pro-list"},"product-one"+n)},"Featured Product:"+n)}))})})})})}function k(){return(0,s.jsx)("section",{className:"intro-section",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-md-8 mb-2",children:(0,s.jsxs)("div",{className:"banner banner1 d-flex flex-wrap align-items-center bg-gray no-gutters",children:[(0,s.jsx)("div",{className:"col-md-5",children:(0,s.jsxs)(c.ZP,{keyframes:d.uT,delay:200,duration:1e3,triggerOnce:!0,children:[(0,s.jsx)("div",{className:"brand m-b-2",children:(0,s.jsx)("figure",{className:"mb-0",children:(0,s.jsx)(x.LazyLoadImage,{alt:"brand",src:"images/home/banners/brand.png",threshold:500,effect:"black and white",width:"100%",height:26})})}),(0,s.jsx)("h3",{className:"ls-n-20 text-body text-uppercase m-b-2",children:"Car shock absorbers"}),(0,s.jsxs)("h2",{className:"ls-n-20 text-uppercase m-b-4",children:["Starting",(0,s.jsx)("br",{}),"at",(0,s.jsx)("small",{className:"pl-2 ml-1",children:"$"}),"99",(0,s.jsx)("small",{children:"99"})]}),(0,s.jsx)("h4",{className:"font-weight-normal ls-n-20 m-b-3",children:"Start Shopping Right Now"}),(0,s.jsx)("p",{className:"font2 text-body m-b-3",children:"* Get Plus Discount Buying Package"}),(0,s.jsx)(l.Z,{href:"/shop",className:"btn btn-dark btn-lg m-b-5",children:"View Sale"})]})}),(0,s.jsx)("div",{className:"col-md-7",children:(0,s.jsx)("figure",{children:(0,s.jsx)(x.LazyLoadImage,{alt:"banner",src:"images/home/banners/banner-1.jpg",threshold:500,effect:"black and white",width:"100%",height:380})})})]})}),(0,s.jsx)("div",{className:"col-md-4 mb-2",children:(0,s.jsx)("div",{className:"banner banner2 h-100",style:{background:"#414141 no-repeat center/cover url(images/home/banners/banner-2.jpg)"},children:(0,s.jsxs)("div",{className:"banner-layer d-flex flex-column justify-content-center align-items-end text-right",children:[(0,s.jsx)(c.ZP,{keyframes:d.uT,delay:100,duration:1e3,triggerOnce:!0,children:(0,s.jsx)("h3",{className:"font-weight-bold ls-n-20 text-primary text-uppercase m-b-2",children:"Flash Sale"})}),(0,s.jsx)(c.ZP,{keyframes:d.uT,delay:250,duration:1e3,triggerOnce:!0,children:(0,s.jsxs)("h3",{className:"ls-n-20 m-b-2",children:["ALL HIGH PERFORMANCE",(0,s.jsx)("br",{}),"WHEELS AND TIRES"]})}),(0,s.jsx)(c.ZP,{keyframes:d.uT,delay:400,duration:1e3,triggerOnce:!0,children:(0,s.jsxs)("h2",{className:"ls-n-20 text-white text-uppercase m-b-3",children:["Starting",(0,s.jsx)("br",{}),"at",(0,s.jsx)("small",{className:"pl-2 ml-1",children:"$"}),"199",(0,s.jsx)("small",{children:"99"})]})}),(0,s.jsx)(c.ZP,{keyframes:d.uT,delay:600,duration:1e3,triggerOnce:!0,children:(0,s.jsx)(l.Z,{href:"/shop",className:"btn btn-light btn-lg",children:"View Sale"})})]})})})]})})})}var F=u.memo(k),O=t(3253),C=t.n(O),P=t(6808),S=t.n(P),L={content:{backgroundColor:"#fff",backgroundImage:"url(images/newsletter_popup_bg.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",top:"auto",outline:"none",width:"100%",marginLeft:"1rem",marginRight:"1rem"}};function _(){var e=(0,u.useState)(!1),n=e[0],t=e[1],r=(0,u.useState)(!1),a=r[0],i=r[1];function c(){document.querySelector(".mfp-newsletter.open-modal")&&(document.querySelector(".mfp-newsletter.open-modal").classList.add("close-modal"),setTimeout((function(){t(!1),a&&S().set("hideNewsletter","true",{expires:7,path:router.basePath})}),350))}return(0,u.useEffect)((function(){var e;return S().get("hideNewsletter")||(e=setTimeout((function(){t(!0)}),5e3)),function(){e&&clearTimeout(e)}}),[]),(0,s.jsxs)(C(),{isOpen:n,style:L,onRequestClose:c,shouldReturnFocusAfterClose:!1,className:"newsletter-popup bg-img",overlayClassName:"mfp-bg mfp-newsletter d-flex align-items-center justify-content-center open-modal",children:[(0,s.jsxs)("div",{className:"newsletter-popup-content",children:[(0,s.jsx)("img",{src:"images/logo-black.png",alt:"Logo",className:"logo-newsletter"}),(0,s.jsx)("h2",{children:"Subscribe to newsletter"}),(0,s.jsx)("p",{children:"Subscribe to the Porto mailing list to receive updates on new arrivals, special offers and our promotions."}),(0,s.jsx)("form",{action:"#",children:(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("input",{type:"email",className:"form-control",id:"newsletter-email",name:"newsletter-email",placeholder:"Your email address",required:!0}),(0,s.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Submit"})]})}),(0,s.jsx)("div",{className:"newsletter-subscribe",children:(0,s.jsxs)("div",{className:"custom-control custom-checkbox",children:[(0,s.jsx)("input",{type:"checkbox",className:"custom-control-input",value:a,id:"show-again",onChange:function(e){i(e.target.checked)}}),(0,s.jsx)("label",{htmlFor:"show-again",className:"custom-control-label",children:"Don't show this popup again"})]})})]}),(0,s.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:c,children:"\xd7"})]})}function T(e){var n=e.product;return(0,s.jsx)("section",{className:"popular-section",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)(c.ZP,{keyframes:d.lN,delay:400,duration:1e3,triggerOnce:!0,children:[(0,s.jsx)("h2",{className:"section-title pb-3 m-b-4",children:"Popular Items"}),(0,s.jsx)("div",{className:"row m-b-2",children:n?n.slice(0,6).map((function(e,n){return(0,s.jsx)("div",{className:"col-6 col-md-4 col-lg-3 col-xl-2",children:(0,s.jsx)(o.Z,{product:e,adClass:"inner-quickview inner-icon"})},"product-one"+n)})):[0,1,2,3,4,5].map((function(e,n){return(0,s.jsx)("div",{className:"col-6 col-md-4 col-lg-3 col-xl-2",children:(0,s.jsx)("div",{className:"skel-pro skel-pro-grid"},"product-one"+n)},"Featured Product:"+n)}))})]}),(0,s.jsx)(c.ZP,{keyframes:d.lN,delay:600,duration:1e3,triggerOnce:!0,children:(0,s.jsxs)("div",{className:"tagcloud d-flex flex-wrap justify-content-between bg-gray mb-4",children:[(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"cadillac"}},scroll:!1,children:"Cadillac"}),(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"chevy"}},scroll:!1,children:"Chevy"}),(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"dodge"}},scroll:!1,children:"Dodge"}),(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"ford"}},scroll:!1,children:"Ford"}),(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"honda"}},scroll:!1,children:"Honda"}),(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"hyundai"}},scroll:!1,children:"Hyundai"}),(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"jeep"}},scroll:!1,children:"Jeep"}),(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"nissan"}},scroll:!1,children:"Nissan"}),(0,s.jsx)(l.Z,{href:{pathname:"/shop",query:{category:"toyota"}},scroll:!1,children:"Toyota"})]})})]})})}function z(){return(0,s.jsx)("section",{className:"newsletter-section",children:(0,s.jsx)(c.ZP,{keyframes:d.lN,delay:200,duration:1e3,triggerOnce:!0,children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"widget-newsletter",children:(0,s.jsxs)("div",{className:"row no-gutters m-0",children:[(0,s.jsx)("div",{className:"col-md-5",children:(0,s.jsxs)("div",{className:"info-box info-box-icon-left justify-content-start align-itmes-center",children:[(0,s.jsx)("i",{className:"far fa-envelope line-height-1 text-primary"}),(0,s.jsxs)("div",{className:"info-content",children:[(0,s.jsx)("h4",{className:"line-height-1 text-dark",children:"Get Special Offers and Savings"}),(0,s.jsx)("p",{className:"font2 text-body",children:"Get all the latest information on Events, Sales and Offers."})]})]})}),(0,s.jsx)("div",{className:"col-md-7",children:(0,s.jsxs)("form",{className:"newsletter-form",action:"#",method:"get",children:[(0,s.jsx)("input",{type:"email",className:"form-control font2 mb-0",placeholder:"Enter Your E-mail Address...",required:!0}),(0,s.jsx)("button",{type:"submit",className:"btn btn-submit text-white",children:"Sign Up"})]})})]})})})})})}C().setAppElement("#__next");var q=u.memo(z);var E=(0,a.Z)({ssr:!1})((function(){var e=(0,r.useQuery)(i.vP,{variables:{productsCount:6,postsCount:3}}),n=e.data,t=e.loading,a=e.error,c=n&&n.specialProducts.featured,l=n&&n.specialProducts.topRated,o=n&&n.products.data,d=n&&n.posts.data;return a?(0,s.jsx)("div",{children:a.message}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("main",{className:"home skeleton-body skel-shop-products ".concat(t?"":"loaded"),children:[(0,s.jsx)(F,{}),(0,s.jsx)(q,{}),(0,s.jsx)(T,{product:c}),(0,s.jsx)(Z,{product:o}),(0,s.jsx)(m,{product:l}),(0,s.jsx)(f,{}),(0,s.jsx)(j,{}),(0,s.jsx)(w,{blog:d})]}),(0,s.jsx)(_,{})]})}))},9905:function(e,n,t){"use strict";t.d(n,{Ji:function(){return L},uT:function(){return _},lN:function(){return T}});var s=t(7261),r=t(917);function a(){var e=(0,s.Z)(["{\n    0%{\n        transform:scale3d(1,1,1);\n        opacity: 1;\n    }\n    100% {\n        transform:scale3d(1.1,1.1,1);\n        opacity: 1;\n    }\n}"]);return a=function(){return e},e}function i(){var e=(0,s.Z)(["{\n    from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n\n    from {\n        opacity: 0;\n        transform: translate3d(0, 3000px, 0);\n    }\n\n    60% {\n        opacity: 1;\n        transform: translate3d(0, -20px, 0);\n    }\n\n    75% {\n        transform: translate3d(0, 10px, 0);\n    }\n\n    90% {\n        transform: translate3d(0, -5px, 0);\n    }\n\n    to {\n        transform: translate3d(0, 0, 0);\n    }\n}"]);return i=function(){return e},e}function c(){var e=(0,s.Z)(["{\n    0%{\n        -webkit-transform:scale3d(.8,.8,.8);\n        opacity:0;\n        transform:scale3d(.8,.8,.8)\n    }\n    50%{\n        opacity:1\n    }\n}"]);return c=function(){return e},e}function l(){var e=(0,s.Z)([" {\n    0% {\n        animation-timing-function: ease-in;\n        filter: brightness(0%)\n    }\n  \n    to {\n        filter: brightness(100%)\n    }\n}"]);return l=function(){return e},e}function o(){var e=(0,s.Z)(["{\n    0% {\n        animation-timing-function: ease-out;\n        transform: perspective(400px)\n    }\n\n    to {\n        opacity: 0;\n        transform: perspective(400px) rotateY(90deg)\n    }\n}"]);return o=function(){return e},e}function d(){var e=(0,s.Z)(["{\n  0% {\n      animation-timing-function: ease-in;\n      opacity: 0;\n      transform: perspective(400px) rotateY(90deg);\n  }\n\n  to {\n      transform: perspective(400px);\n  }\n}"]);return d=function(){return e},e}function m(){var e=(0,s.Z)(["{\n    0% {\n        animation-timing-function: ease-in;\n        opacity: 0;\n        transform: perspective(400px) rotateX(90deg)\n    }\n  \n    to {\n        transform: perspective(400px)\n    }\n}"]);return m=function(){return e},e}function u(){var e=(0,s.Z)(["{\n    0% {\n        transform: translate3d(100%, 0, 0);\n        visibility: visible\n    }\n  \n    to {\n        transform: translateZ(0)\n    }\n}"]);return u=function(){return e},e}function h(){var e=(0,s.Z)(["{\n    0% {\n        transform: translate3d(-100%, 0, 0);\n        visibility: visible\n    }\n  \n    to {\n        transform: translateZ(0)\n    }\n}"]);return h=function(){return e},e}function p(){var e=(0,s.Z)(["{\n    0% {\n        transform: translate3d(0, -100%, 0);\n        visibility: visible\n    }\n\n    to {\n        transform: translateZ(0)\n    }\n}"]);return p=function(){return e},e}function f(){var e=(0,s.Z)(["{\n    0% {\n        transform: translate3d(0, 100%, 0);\n        visibility: visible\n    }\n\n    to {\n        transform: translateZ(0)\n    }\n}"]);return f=function(){return e},e}function x(){var e=(0,s.Z)(["{\n    from {\n        transform: translate(100%,0)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return x=function(){return e},e}function g(){var e=(0,s.Z)(["{\n    from {\n        transform: translate(0,-100%)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return g=function(){return e},e}function j(){var e=(0,s.Z)(["{\n    from {\n        transform: translate(-100%,0)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return j=function(){return e},e}function b(){var e=(0,s.Z)(["{\n    from {\n        transform: translate(0,100%)\n    }\n  \n    to {\n        transform: translate(0,0)\n    }\n}"]);return b=function(){return e},e}function v(){var e=(0,s.Z)(["{\n    from {\n        opacity:1;\n        transform:scale(.2)\n    }\n  \n    to {\n        opacity:0;\n        transform:scale(1)\n    }\n}"]);return v=function(){return e},e}function N(){var e=(0,s.Z)(["{\n    from {\n        opacity: 1;\n        filter: grayscale(0);\n    }\n    15% {\n        filter: grayscale(100%);\n    }\n    to {\n        opacity: .0;\n        filter: grayscale(100%);\n    }\n}"]);return N=function(){return e},e}function y(){var e=(0,s.Z)(["{\n    from {\n        opacity: 0;\n        filter: blur(20px);\n        transform: scale(1.2);\n    }\n    to {\n        opacity: 1;\n        filter: blur(0);\n        transform: none \n    }\n}"]);return y=function(){return e},e}function w(){var e=(0,s.Z)(["\nfrom {\n    opacity: 0;\n    transform: translate(0,-50px);\n    transform-origin: 0 0;\n}\n\nto {\n    opacity: 1;\n    transform: none\n}"]);return w=function(){return e},e}function Z(){var e=(0,s.Z)(["\n0% {\n    -webkit-transform: translate3d( 0, 100%, 0 );\n    opacity: 0;\n    transform: translate3d( 0, 100 %, 0 )\n}\n\nto {\n    -webkit-transform: translateZ( 0 );\n    opacity: 1;\n    transform: translateZ( 0 )\n}"]);return Z=function(){return e},e}function k(){var e=(0,s.Z)(["\nfrom {\n    opacity: 0;\n    transform: translate(0,50px);\n    transform-origin: 0 0;\n}\nto {\n    opacity:1;\n    transform:none\n}"]);return k=function(){return e},e}function F(){var e=(0,s.Z)(["\n0% {\n    -webkit-transform: translate3d(-100%,0,0);\n    opacity: 0;\n    transform: translate3d(-100%,0,0)\n}\n\nto {\n    -webkit-transform: translateZ(0);\n    opacity: 1;\n    transform: translateZ(0)\n}"]);return F=function(){return e},e}function O(){var e=(0,s.Z)(["{\n    from {\n        opacity: 0;\n        transform: translate(50px,0);\n        transform-origin: 0 0;\n    }\n    to {\n        opacity: 1;\n        transform: none\n    }\n}"]);return O=function(){return e},e}function C(){var e=(0,s.Z)(["\n0% {\n    -webkit-transform: translate3d(100%,0,0);\n    opacity: 0;\n    transform: translate3d(100%,0,0)\n}\n\nto {\n    -webkit-transform: translateZ(0);\n    opacity: 1;\n    transform: translateZ(0)\n}"]);return C=function(){return e},e}function P(){var e=(0,s.Z)(["\nfrom {\n  opacity: 0;\n  transform: translate(-50px,0);\n  transform-origin: 0 0;\n}\n\nto {\n  opacity: 1;\n  transform: none\n}"]);return P=function(){return e},e}function S(){var e=(0,s.Z)(["{\n    from {\n        opacity:0;\n    }\n  \n    to {\n        opacity:1;\n    }\n}"]);return S=function(){return e},e}var L=(0,r.F4)(S()),_=(0,r.F4)(P()),T=((0,r.F4)(C()),(0,r.F4)(O()),(0,r.F4)(F()),(0,r.F4)(k()));(0,r.F4)(Z()),(0,r.F4)(w()),(0,r.F4)(y()),(0,r.F4)(N()),(0,r.F4)(v()),(0,r.F4)(b()),(0,r.F4)(j()),(0,r.F4)(g()),(0,r.F4)(x()),(0,r.F4)(f()),(0,r.F4)(p()),(0,r.F4)(h()),(0,r.F4)(u()),(0,r.F4)(m()),(0,r.F4)(d()),(0,r.F4)(o()),(0,r.F4)(l()),(0,r.F4)(c()),(0,r.F4)(i()),(0,r.F4)(a())},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6207)}])}},function(e){e.O(0,[917,3733,9774,2888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);