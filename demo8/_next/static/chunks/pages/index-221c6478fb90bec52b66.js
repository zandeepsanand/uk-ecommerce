(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{4011:function(e,n,t){"use strict";var r=t(6265),a=t(5893),s=t(7294),i=t(1163),c=t(4494),l=t(2679),o=t(5708),d=t(8040),u=t(6723),h=t(890),m=t(6442),f=t(7821);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e){var n=(0,i.useRouter)(),t=e.adClass,r=void 0===t?"":t,c=e.link,o=void 0===c?"default":c,d=e.product;function u(){return d.price[0]!==d.price[1]&&0===d.variants.length?"-"+(100*(d.price[1]-d.price[0])/d.price[1]).toFixed(0)+"%":!!d.variants.find((function(e){return e.sale_price}))&&"Sale"}function p(){return d&&e.wishlist.findIndex((function(e){return e.slug===d.slug}))>-1}return(0,s.useEffect)((function(){(0,m.Lp)()})),(0,a.jsxs)("div",{className:"product-default inner-quickview inner-icon media-with-lazy ".concat(r),children:[(0,a.jsxs)("figure",{children:[(0,a.jsxs)(h.Z,{href:"/product/".concat(o,"/").concat(d.slug),children:[(0,a.jsx)("div",{className:"lazy-overlay"}),(0,a.jsx)(l.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/porto"+d.pictures[0].url,threshold:500,effect:"black and white",width:"100%",height:"auto"}),d.pictures.length>=2?(0,a.jsx)(l.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/porto"+d.pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""]}),(0,a.jsxs)("div",{className:"label-group",children:[d.is_hot?(0,a.jsx)("div",{className:"product-label label-hot",children:"HOT"}):"",u()?(0,a.jsx)("div",{className:"product-label label-sale",children:u()}):""]}),(0,a.jsx)("div",{className:"btn-icon-group",children:d.variants.length>0?(0,a.jsx)(h.Z,{href:"/product/default/".concat(d.slug),className:"btn-icon btn-add-cart",children:(0,a.jsx)("i",{className:"fa fa-arrow-right"})}):(0,a.jsx)("a",{href:"#",className:"btn-icon btn-add-cart product-type-simple",title:"Add To Cart",onClick:function(n){n.preventDefault(),e.addToCart(d)},children:(0,a.jsx)("i",{className:"icon-shopping-cart"})})}),d.until&&null!==d.until&&(0,a.jsx)(f.Z,{product:d}),(0,a.jsx)("a",{href:"#",className:"btn-quickview",title:"Quick View",onClick:function(n){n.preventDefault(),e.showQuickView(d.slug)},children:"Quick View"})]}),(0,a.jsxs)("div",{className:"product-details",children:[(0,a.jsxs)("div",{className:"category-wrap",children:[(0,a.jsx)("div",{className:"category-list",children:d.categories?d.categories.map((function(e,n){return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(h.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:e.name}),n<d.categories.length-1?", ":""]},e.slug+"-"+n)})):""}),(0,a.jsx)("a",{href:"#",className:"btn-icon-wish ".concat(p()?"added-wishlist":""),onClick:function(t){if(t.preventDefault(),p())n.push("/pages/wishlist");else{var r=t.currentTarget;r.classList.add("load-more-overlay"),r.classList.add("loading"),setTimeout((function(){r.classList.remove("load-more-overlay"),r.classList.remove("loading"),e.addToWishList(d)}),1e3)}},title:"".concat(!0===p()?"Go to Wishlist":"Add to Wishlist"),children:(0,a.jsx)("i",{className:"icon-heart"})})]}),(0,a.jsx)("h3",{className:"product-title",children:(0,a.jsx)(h.Z,{href:"/product/default/".concat(d.slug),children:d.name})}),(0,a.jsx)("div",{className:"ratings-container",children:(0,a.jsxs)("div",{className:"product-ratings",children:[(0,a.jsx)("span",{className:"ratings",style:{width:20*d.ratings+"%"}}),(0,a.jsx)("span",{className:"tooltiptext tooltip-top",children:d.ratings.toFixed(2)})]})}),(0,a.jsx)("div",{className:"price-box",children:d.price[0]==d.price[1]?(0,a.jsx)("span",{className:"product-price",children:"$"+d.price[0].toFixed(2)}):d.variants.length>0?(0,a.jsxs)("span",{className:"product-price",children:["$"+d.price[0].toFixed(2)," \u2013 ","$"+d.price[1].toFixed(2)]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"old-price",children:"$"+d.price[1].toFixed(2)}),(0,a.jsx)("span",{className:"product-price",children:"$"+d.price[0].toFixed(2)})]})})]})]})}n.Z=(0,c.$j)((function(e){return{wishlist:e.wishlist.list?e.wishlist.list:[]}}),g(g(g({},o.Nw),d.Nw),u.Nw))(s.memo(x))},6343:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r=t(5893),a=t(6829),s=t(645),i=t(8665),c=t(7294),l=t(3253),o=t.n(l),d=t(6808),u=t.n(d),h={content:{backgroundColor:"#fff",backgroundImage:"url(images/newsletter_popup_bg.jpg)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",top:"auto",outline:"none",width:"100%",marginLeft:"1rem",marginRight:"1rem"}};function m(){var e=(0,c.useState)(!1),n=e[0],t=e[1],a=(0,c.useState)(!1),s=a[0],i=a[1];function l(){document.querySelector(".mfp-newsletter.open-modal")&&(document.querySelector(".mfp-newsletter.open-modal").classList.add("close-modal"),setTimeout((function(){t(!1),s&&u().set("hideNewsletter","true",{expires:7,path:router.basePath})}),350))}return(0,c.useEffect)((function(){var e;return u().get("hideNewsletter")||(e=setTimeout((function(){t(!0)}),5e3)),function(){e&&clearTimeout(e)}}),[]),(0,r.jsxs)(o(),{isOpen:n,style:h,onRequestClose:l,className:"newsletter-popup bg-img",overlayClassName:"mfp-bg mfp-newsletter d-flex align-items-center justify-content-center open-modal",children:[(0,r.jsxs)("div",{className:"newsletter-popup-content",children:[(0,r.jsx)("img",{src:"images/home/logo_red.png",alt:"Porto Logo",width:"104",height:"41"}),(0,r.jsx)("h2",{children:"Subscribe to newsletter"}),(0,r.jsx)("p",{children:"Subscribe to the Porto mailing list to receive updates on new arrivals, special offers and our promotions."}),(0,r.jsx)("form",{action:"#",children:(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("input",{type:"email",className:"form-control",id:"newsletter-email",name:"newsletter-email",placeholder:"Your email address",required:!0}),(0,r.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Submit"})]})}),(0,r.jsx)("div",{className:"newsletter-subscribe",children:(0,r.jsxs)("div",{className:"custom-control custom-checkbox",children:[(0,r.jsx)("input",{type:"checkbox",className:"custom-control-input",value:s,id:"show-again",onChange:function(e){i(e.target.checked)}}),(0,r.jsx)("label",{htmlFor:"show-again",className:"custom-control-label",children:"Don't show this popup again"})]})})]}),(0,r.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:l,children:"\xd7"})]})}o().setAppElement("#__next");var f=t(5853),p=t(2679),g=t(890),x=t(4138),j=t(8509),b=t(9905);function v(){return(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"home-slider-container",children:(0,r.jsxs)(x.Z,{adClass:"home-slider owl-theme owl-theme-light nav-outer show-nav-hover",options:j.TU,children:[(0,r.jsxs)("div",{className:"home-slide",children:[(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{className:"slide-bg",alt:"slider image",src:"images/home/slider/slide-1.jpg",width:"100%",height:"auto"})}),(0,r.jsxs)("div",{className:"home-slide-content sale-banner",children:[(0,r.jsx)(f.ZP,{keyframes:b.h6,delay:100,duration:1e3,children:(0,r.jsxs)("div",{className:"row no-gutter bg-primary",children:[(0,r.jsxs)("div",{className:"col-auto col-md-6 d-flex flex-column justify-content-center col-1",children:[(0,r.jsx)(f.ZP,{keyframes:b.$k,delay:400,duration:1e3,children:(0,r.jsx)("h4",{className:"align-left text-uppercase mb-0",children:"Furniture & Garden"})}),(0,r.jsx)(f.ZP,{keyframes:b.$k,delay:400,duration:1e3,children:(0,r.jsx)("h3",{className:"text-white mb-0 align-left text-uppercase",children:"Huge Sale"})})]}),(0,r.jsx)("div",{className:"col-auto col-md-6 col-2",children:(0,r.jsx)(f.ZP,{keyframes:b.$k,delay:400,duration:1e3,children:(0,r.jsxs)("h2",{className:"text-white mb-0 position-relative align-left",children:["50",(0,r.jsxs)("small",{children:["%",(0,r.jsx)("ins",{children:"OFF"})]})]})})})]})}),(0,r.jsx)("div",{className:"mb-0 text-right",children:(0,r.jsx)(f.ZP,{keyframes:b.lN,delay:600,duration:1e3,children:(0,r.jsx)(g.Z,{href:"/shop",className:"btn btn-lg btn-dark",children:"Shop Now!"})})})]})]}),(0,r.jsxs)("div",{className:"home-slide home-slide-left",children:[(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{className:"slide-bg",alt:"slider image",src:"images/home/slider/slide-2.jpg",width:"100%",height:"auto"})}),(0,r.jsxs)("div",{className:"home-slide-content slide-content-dark sale-banner",children:[(0,r.jsx)(f.ZP,{keyframes:b.uT,delay:100,duration:1e3,children:(0,r.jsxs)("div",{className:"row no-gutter bg-secondary",children:[(0,r.jsxs)("div",{className:"col-auto col-md-6 d-flex flex-column justify-content-center col-1",children:[(0,r.jsx)(f.ZP,{keyframes:b.$k,delay:300,duration:1e3,children:(0,r.jsx)("h4",{className:"align-left text-uppercase mb-0",children:"Home office sale"})}),(0,r.jsx)(f.ZP,{keyframes:b.$k,delay:300,duration:1e3,children:(0,r.jsx)("h3",{className:"text-white mb-0 align-left text-uppercase",children:"mega off"})})]}),(0,r.jsx)("div",{className:"col-auto col-md-6 col-2",children:(0,r.jsx)(f.ZP,{keyframes:b.$k,delay:300,duration:1e3,children:(0,r.jsxs)("h2",{className:"text-white mb-0 position-relative align-left",children:["50",(0,r.jsxs)("small",{children:["%",(0,r.jsx)("ins",{children:"OFF"})]})]})})})]})}),(0,r.jsx)("div",{className:"mb-0",children:(0,r.jsx)(f.ZP,{keyframes:b.lN,delay:600,duration:1e3,children:(0,r.jsx)(g.Z,{href:"/shop",className:"btn btn-lg btn-primary",children:"Shop Now!"})})})]})]})]})})})}var N=c.memo(v);function y(){return(0,r.jsx)("div",{className:"container banner-container",children:(0,r.jsxs)("div",{className:"row justify-content-center",children:[(0,r.jsx)("div",{className:"col-md-4 col-sm-6 mt-3 mt-md-0",children:(0,r.jsxs)(f.ZP,{keyframes:b.uT,delay:200,duration:1e3,triggerOnce:!0,children:[(0,r.jsx)("h3",{className:"subtitle",children:"SHOP LIVING ROOM"}),(0,r.jsx)("div",{className:"heading-spacer"}),(0,r.jsx)("div",{className:"banner banner-image",children:(0,r.jsx)(g.Z,{href:"/shop",children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/banners/banner-living.jpg",threshold:500,effect:"black and white",width:"100%",height:"auto"})})})}),(0,r.jsxs)("div",{className:"banner-meta",children:[(0,r.jsx)(g.Z,{href:"/shop",children:"LIVING ROOM "}),(0,r.jsxs)("span",{className:"banner-price",children:["Starting at ",(0,r.jsx)("strong",{children:"$999"})]})]})]})}),(0,r.jsx)("div",{className:"col-md-4 col-sm-6 mt-3 mt-md-0",children:(0,r.jsxs)(f.ZP,{keyframes:b.uT,delay:200,duration:1500,triggerOnce:!0,children:[(0,r.jsx)("h3",{className:"subtitle",children:"SHOP DINNING ROOM"}),(0,r.jsx)("div",{className:"heading-spacer"}),(0,r.jsx)("div",{className:"banner banner-image",children:(0,r.jsx)(g.Z,{href:"/shop",children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/banners/banner-dining.jpg",threshold:500,effect:"black and white",width:"100%",height:"auto"})})})}),(0,r.jsxs)("div",{className:"banner-meta",children:[(0,r.jsx)(g.Z,{href:"/shop",className:"white-nowrap",children:"DINNING ROOM "}),(0,r.jsxs)("span",{className:"banner-price white-nowrap",children:["Starting at ",(0,r.jsx)("strong",{children:"$899"})]})]})]})}),(0,r.jsx)("div",{className:"col-md-4 col-sm-6 mt-3 mt-md-0",children:(0,r.jsxs)(f.ZP,{keyframes:b.h6,delay:200,duration:1500,triggerOnce:!0,children:[(0,r.jsx)("h3",{className:"subtitle",children:"SHOP BEDROOM"}),(0,r.jsx)("div",{className:"heading-spacer"}),(0,r.jsx)("div",{className:"banner banner-image",children:(0,r.jsx)(g.Z,{href:"/shop",children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/banners/banner-bedroom.jpg",threshold:500,effect:"black and white",width:"100%",height:"auto"})})})}),(0,r.jsxs)("div",{className:"banner-meta",children:[(0,r.jsx)(g.Z,{href:"/shop",children:"BEDROOM "}),(0,r.jsxs)("span",{className:"banner-price",children:["Starting at ",(0,r.jsx)("strong",{children:"$799"})]})]})]})})]})})}var w=c.memo(y),k=t(4011);function Z(e){var n=e.product,t=e.loading;return(0,r.jsxs)("div",{className:"container feature-container",children:[(0,r.jsx)("h2",{className:"subtitle text-center text-uppercase",children:"Featured Products"}),(0,r.jsx)("div",{className:"heading-spacer"}),(0,r.jsx)("div",{className:"row",children:t?[0,1,2,3,4].map((function(e,n){return(0,r.jsx)("div",{className:"col-6 col-sm-4 col-md-3",children:(0,r.jsx)("div",{className:"skel-pro skel-pro-grid"})},"product-one"+n)})):n.map((function(e,n){return(0,r.jsx)("div",{className:"col-6 col-sm-4 col-md-3",children:(0,r.jsx)(f.ZP,{keyframes:b.uT,delay:100,duration:1500,triggerOnce:!0,children:(0,r.jsx)(k.Z,{product:e})})},"product-one"+n)}))})]})}function L(){return(0,r.jsx)("div",{className:"sale-banner banner",children:(0,r.jsx)("div",{className:"container banner-content",children:(0,r.jsx)(f.ZP,{keyframes:b.Ji,delay:100,duration:1500,triggerOnce:!0,children:(0,r.jsxs)("div",{className:"row no-gutter bg-secondary",children:[(0,r.jsxs)("div",{className:"col-auto col-md-4 d-flex flex-column justify-content-center col-1",children:[(0,r.jsx)("h4",{className:"align-left text-uppercase mb-0",children:"Furniture & Garden"}),(0,r.jsx)("h3",{className:"text-white mb-0 align-left text-uppercase",children:"Huge Sale"})]}),(0,r.jsx)("div",{className:"col-auto col-md-4 col-2",children:(0,r.jsxs)("h5",{className:"text-white mb-0 position-relative align-left",children:["50",(0,r.jsxs)("small",{children:["%",(0,r.jsx)("ins",{children:"OFF"})]})]})}),(0,r.jsx)("div",{className:"mb-0 col-md-4 col-3 col-auto btn-shop",children:(0,r.jsx)(g.Z,{href:"/shop",className:"btn btn-lg btn-primary",children:"Shop Now!"})})]})})})})}var F=c.memo(L),O=t(1163);function P(e){(0,O.useRouter)();var n=e.adClass,t=void 0===n?"":n,a=e.link,s=void 0===a?"default":a,i=e.product;return(0,r.jsxs)("div",{className:"product-default left-details product-widget mb-2 ".concat(t),children:[(0,r.jsx)("figure",{children:(0,r.jsxs)(g.Z,{href:"/product/".concat(s,"/").concat(i.slug),children:[(0,r.jsx)("img",{alt:"product",src:"https://d-themes.com/react_asset_api/porto"+i.pictures[0].url,width:175,height:175}),i.pictures.length>=2?(0,r.jsx)("img",{alt:"product",src:"https://d-themes.com/react_asset_api/porto"+i.pictures[1].url,className:"hover-img",width:175,height:175}):""]})}),(0,r.jsxs)("div",{className:"product-details",children:[(0,r.jsx)("div",{className:"category-list",children:i.categories?i.categories.map((function(e,n){return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(g.Z,{href:{pathname:"/shop",query:{category:e.slug}},children:e.name}),n<i.categories.length-1?", ":""]},e.slug+"-"+n)})):""}),(0,r.jsx)("h3",{className:"product-title",children:(0,r.jsx)(g.Z,{href:"/product/default/".concat(i.slug),children:i.name})}),(0,r.jsx)("div",{className:"ratings-container",children:(0,r.jsxs)("div",{className:"product-ratings",children:[(0,r.jsx)("span",{className:"ratings",style:{width:20*i.ratings+"%"}}),(0,r.jsx)("span",{className:"tooltiptext tooltip-top",children:i.ratings.toFixed(2)})]})}),(0,r.jsx)("div",{className:"price-box",children:i.price[0]==i.price[1]?(0,r.jsx)("span",{className:"product-price",children:"$"+i.price[0].toFixed(2)}):i.variants.length>0?(0,r.jsxs)("span",{className:"product-price",children:["$"+i.price[0].toFixed(2)," \u2013 ","$"+i.price[1].toFixed(2)]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"old-price",children:"$"+i.price[1].toFixed(2)}),(0,r.jsx)("span",{className:"product-price",children:"$"+i.price[0].toFixed(2)})]})})]})]})}function I(e){var n=e.topRated,t=e.latest,a=e.bestselling,s=e.loading;return(0,r.jsxs)("div",{className:"product-widgets row pt-1",children:[(0,r.jsx)("div",{className:"col-md-4 col-sm-6 pb-5",children:s?[0,1,2].map((function(e,n){return(0,r.jsx)("div",{className:"skel-product-col skel-pro mb-2"},"ProductFour"+n)})):(0,r.jsxs)(f.ZP,{keyframes:b.uT,delay:500,duration:1e3,triggerOnce:!0,children:[(0,r.jsx)("h4",{className:"subtitle text-left text-uppercase",children:"Top Rated Products"}),(0,r.jsx)("div",{className:"heading-spacer"}),n&&n.slice(0,3).map((function(e,n){return(0,r.jsx)(P,{product:e,type:"widget"},"ProductFour"+n)}))]})}),(0,r.jsx)("div",{className:"col-md-4 col-sm-6 pb-5",children:s?[0,1,2].map((function(e,n){return(0,r.jsx)("div",{className:"skel-product-col skel-pro mb-2"},"best"+n)})):(0,r.jsxs)(f.ZP,{keyframes:b.uT,delay:100,duration:1e3,triggerOnce:!0,children:[(0,r.jsx)("h4",{className:"subtitle text-left text-uppercase",children:"Best Selling Products"}),(0,r.jsx)("div",{className:"heading-spacer"}),a.slice(1,4).map((function(e,n){return(0,r.jsx)(P,{product:e,type:"widget"},"best"+n)}))]})}),(0,r.jsx)("div",{className:"col-md-4 col-sm-6 pb-5",children:s?[0,1,2].map((function(e,n){return(0,r.jsx)("div",{className:"skel-product-col skel-pro mb-2"},"ProductFour"+n)})):(0,r.jsxs)(f.ZP,{keyframes:b.uT,delay:800,duration:1e3,triggerOnce:!0,children:[(0,r.jsx)("h4",{className:"subtitle text-left text-uppercase",children:"Latest Products"}),(0,r.jsx)("div",{className:"heading-spacer"}),t.slice(0,3).map((function(e,n){return(0,r.jsx)(P,{product:e,type:"widget"},"ProductFour"+n)}))]})})]})}function C(){return(0,r.jsx)("div",{className:"brands-section",children:(0,r.jsx)(f.ZP,{keyframes:b.Ji,delay:100,duration:500,triggerOnce:!0,children:(0,r.jsxs)(x.Z,{adClass:"brands-slider images-center nav-outer show-nav-hover",options:j.mI,children:[(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand1.png",effect:"black and white",width:"100%",height:56,threshold:500})}),(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand2.png",effect:"black and white",width:"100%",height:56,threshold:500})}),(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand3.png",effect:"black and white",width:"100%",height:56,threshold:500})}),(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand4.png",effect:"black and white",width:"100%",height:56,threshold:500})}),(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand5.png",effect:"black and white",width:"100%",height:56,threshold:500})}),(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand6.png",effect:"black and white",width:"100%",height:56,threshold:500})}),(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"brand",src:"images/brands/small/brand4.png",effect:"black and white",width:"100%",height:56,threshold:500})})]})})})}var z=c.memo(C);function _(){return(0,r.jsxs)("div",{className:"instagram-section",children:[(0,r.jsx)("h2",{className:"subtitle text-uppercase",children:"Follow On Instagram"}),(0,r.jsx)("div",{className:"heading-spacer"}),(0,r.jsxs)(x.Z,{adClass:"instagram-feed-carousel instagram-feed-list media-with-lazy",options:j.oM,children:[(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/1.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/2.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/3.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/4.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/5.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/6.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/7.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/8.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/9.jpg",effect:"black and white",width:"100%",height:"auto"})})}),(0,r.jsx)("a",{href:"#",onClick:function(e){return e.preventDefault()},children:(0,r.jsx)("figure",{children:(0,r.jsx)(p.LazyLoadImage,{alt:"banner",src:"images/home/instagram/10.jpg",effect:"black and white",width:"100%",height:"auto"})})})]})]})}var S=(0,s.Z)({ssr:!1})((function(){var e=(0,a.useQuery)(i.vP,{variables:{productsCount:8}}),n=e.data,t=e.loading,s=e.error,c=n&&n.products.data,l=n&&n.specialProducts.topRated,o=n&&n.specialProducts.bestSelling,d=n&&n.specialProducts.latest;return s?(0,r.jsx)("div",{children:s.message}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("main",{className:"skeleton-body skel-shop-products ".concat(t?"":"loaded"),children:[(0,r.jsx)(N,{}),(0,r.jsx)(w,{}),(0,r.jsx)(Z,{product:c,loading:t}),(0,r.jsx)(F,{}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(I,{topRated:l,bestselling:o,latest:d,loading:t}),(0,r.jsx)(z,{})]}),(0,r.jsx)(_,{})]}),(0,r.jsx)(m,{})]})}))},9905:function(e,n,t){"use strict";t.d(n,{Ji:function(){return C},uT:function(){return z},h6:function(){return _},lN:function(){return S},$k:function(){return D}});var r=t(7261),a=t(917);function s(){var e=(0,r.Z)(["{\n    0%{\n        transform:scale3d(1,1,1);\n        opacity: 1;\n    }\n    100% {\n        transform:scale3d(1.1,1.1,1);\n        opacity: 1;\n    }\n}"]);return s=function(){return e},e}function i(){var e=(0,r.Z)(["{\n    from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n\n    from {\n        opacity: 0;\n        transform: translate3d(0, 3000px, 0);\n    }\n\n    60% {\n        opacity: 1;\n        transform: translate3d(0, -20px, 0);\n    }\n\n    75% {\n        transform: translate3d(0, 10px, 0);\n    }\n\n    90% {\n        transform: translate3d(0, -5px, 0);\n    }\n\n    to {\n        transform: translate3d(0, 0, 0);\n    }\n}"]);return i=function(){return e},e}function c(){var e=(0,r.Z)(["{\n    0%{\n        -webkit-transform:scale3d(.8,.8,.8);\n        opacity:0;\n        transform:scale3d(.8,.8,.8)\n    }\n    50%{\n        opacity:1\n    }\n}"]);return c=function(){return e},e}function l(){var e=(0,r.Z)([" {\n    0% {\n        animation-timing-function: ease-in;\n        filter: brightness(0%)\n    }\n  \n    to {\n        filter: brightness(100%)\n    }\n}"]);return l=function(){return e},e}function o(){var e=(0,r.Z)(["{\n    0% {\n        animation-timing-function: ease-out;\n        transform: perspective(400px)\n    }\n\n    to {\n        opacity: 0;\n        transform: perspective(400px) rotateY(90deg)\n    }\n}"]);return o=function(){return e},e}function d(){var e=(0,r.Z)(["{\n  0% {\n      animation-timing-function: ease-in;\n      opacity: 0;\n      transform: perspective(400px) rotateY(90deg);\n  }\n\n  to {\n      transform: perspective(400px);\n  }\n}"]);return d=function(){return e},e}function u(){var e=(0,r.Z)(["{\n    0% {\n        animation-timing-function: ease-in;\n        opacity: 0;\n        transform: perspective(400px) rotateX(90deg)\n    }\n  \n    to {\n        transform: perspective(400px)\n    }\n}"]);return u=function(){return e},e}function h(){var e=(0,r.Z)(["{\n    0% {\n        transform: translate3d(100%, 0, 0);\n        visibility: visible\n    }\n  \n    to {\n        transform: translateZ(0)\n    }\n}"]);return h=function(){return e},e}function m(){var e=(0,r.Z)(["{\n    0% {\n        transform: translate3d(-100%, 0, 0);\n        visibility: visible\n    }\n  \n    to {\n        transform: translateZ(0)\n    }\n}"]);return m=function(){return e},e}function f(){var e=(0,r.Z)(["{\n    0% {\n        transform: translate3d(0, -100%, 0);\n        visibility: visible\n    }\n\n    to {\n        transform: translateZ(0)\n    }\n}"]);return f=function(){return e},e}function p(){var e=(0,r.Z)(["{\n    0% {\n        transform: translate3d(0, 100%, 0);\n        visibility: visible\n    }\n\n    to {\n        transform: translateZ(0)\n    }\n}"]);return p=function(){return e},e}function g(){var e=(0,r.Z)(["{\n    from {\n        transform: translate(100%,0)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return g=function(){return e},e}function x(){var e=(0,r.Z)(["{\n    from {\n        transform: translate(0,-100%)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return x=function(){return e},e}function j(){var e=(0,r.Z)(["{\n    from {\n        transform: translate(-100%,0)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return j=function(){return e},e}function b(){var e=(0,r.Z)(["{\n    from {\n        transform: translate(0,100%)\n    }\n  \n    to {\n        transform: translate(0,0)\n    }\n}"]);return b=function(){return e},e}function v(){var e=(0,r.Z)(["{\n    from {\n        opacity:1;\n        transform:scale(.2)\n    }\n  \n    to {\n        opacity:0;\n        transform:scale(1)\n    }\n}"]);return v=function(){return e},e}function N(){var e=(0,r.Z)(["{\n    from {\n        opacity: 1;\n        filter: grayscale(0);\n    }\n    15% {\n        filter: grayscale(100%);\n    }\n    to {\n        opacity: .0;\n        filter: grayscale(100%);\n    }\n}"]);return N=function(){return e},e}function y(){var e=(0,r.Z)(["{\n    from {\n        opacity: 0;\n        filter: blur(20px);\n        transform: scale(1.2);\n    }\n    to {\n        opacity: 1;\n        filter: blur(0);\n        transform: none \n    }\n}"]);return y=function(){return e},e}function w(){var e=(0,r.Z)(["\nfrom {\n    opacity: 0;\n    transform: translate(0,-50px);\n    transform-origin: 0 0;\n}\n\nto {\n    opacity: 1;\n    transform: none\n}"]);return w=function(){return e},e}function k(){var e=(0,r.Z)(["\n0% {\n    -webkit-transform: translate3d( 0, 100%, 0 );\n    opacity: 0;\n    transform: translate3d( 0, 100 %, 0 )\n}\n\nto {\n    -webkit-transform: translateZ( 0 );\n    opacity: 1;\n    transform: translateZ( 0 )\n}"]);return k=function(){return e},e}function Z(){var e=(0,r.Z)(["\nfrom {\n    opacity: 0;\n    transform: translate(0,20px);\n    transform-origin: 0 0;\n}\nto {\n    opacity:1;\n    transform:none\n}"]);return Z=function(){return e},e}function L(){var e=(0,r.Z)(["\n0% {\n    -webkit-transform: translate3d(-100%,0,0);\n    opacity: 0;\n    transform: translate3d(-100%,0,0)\n}\n\nto {\n    -webkit-transform: translateZ(0);\n    opacity: 1;\n    transform: translateZ(0)\n}"]);return L=function(){return e},e}function F(){var e=(0,r.Z)(["{\n    from {\n        opacity: 0;\n        transform: translate(50px,0);\n        transform-origin: 0 0;\n    }\n    to {\n        opacity: 1;\n        transform: none\n    }\n}"]);return F=function(){return e},e}function O(){var e=(0,r.Z)(["\n0% {\n    -webkit-transform: translate3d(100%,0,0);\n    opacity: 0;\n    transform: translate3d(100%,0,0)\n}\n\nto {\n    -webkit-transform: translateZ(0);\n    opacity: 1;\n    transform: translateZ(0)\n}"]);return O=function(){return e},e}function P(){var e=(0,r.Z)(["\nfrom {\n  opacity: 0;\n  transform: translate(-50px,0);\n  transform-origin: 0 0;\n}\n\nto {\n  opacity: 1;\n  transform: none\n}"]);return P=function(){return e},e}function I(){var e=(0,r.Z)(["{\n    from {\n        opacity:0;\n    }\n  \n    to {\n        opacity:1;\n    }\n}"]);return I=function(){return e},e}var C=(0,a.F4)(I()),z=(0,a.F4)(P()),_=((0,a.F4)(O()),(0,a.F4)(F())),S=((0,a.F4)(L()),(0,a.F4)(Z())),D=((0,a.F4)(k()),(0,a.F4)(w()),(0,a.F4)(y()),(0,a.F4)(N()),(0,a.F4)(v()),(0,a.F4)(b()),(0,a.F4)(j()),(0,a.F4)(x()),(0,a.F4)(g()),(0,a.F4)(p()),(0,a.F4)(f()),(0,a.F4)(m()),(0,a.F4)(h()));(0,a.F4)(u()),(0,a.F4)(d()),(0,a.F4)(o()),(0,a.F4)(l()),(0,a.F4)(c()),(0,a.F4)(i()),(0,a.F4)(s())},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6343)}])}},function(e){e.O(0,[917,5853,9774,2888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);