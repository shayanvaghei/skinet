(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6ANv":function(t,e,n){"use strict";n.r(e),n.d(e,"ShopModule",function(){return z});var s=n("ofXK"),c=n("PCNd"),i=n("fXoL");class o{constructor(){this.data=[]}}var a=n("tk/3"),r=n("lJxs");class p{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6}}var b=n("LRne"),u=n("AytR");let h=(()=>{class t{constructor(t){this.http=t,this.baseUrl=u.a.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new o,this.shopParams=new p,this.productCache=new Map}getProducts(t){if(!1===t&&(this.productCache=new Map),this.productCache.size>0&&!0===t&&this.productCache.has(Object.values(this.shopParams).join("-")))return this.pagination.data=this.productCache.get(Object.values(this.shopParams).join("-")),Object(b.a)(this.pagination);let e=new a.e;return 0!==this.shopParams.brandId&&(e=e.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(e=e.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(e=e.append("search",this.shopParams.search)),e=e.append("sort",this.shopParams.sort),e=e.append("pageIndex",this.shopParams.pageNumber.toString()),e=e.append("pageIndex",this.shopParams.pageSize.toString()),this.http.get(this.baseUrl+"products",{observe:"response",params:e}).pipe(Object(r.a)(t=>(this.productCache.set(Object.values(this.shopParams).join("-"),t.body.data),this.pagination=t.body,this.pagination)))}setShopParams(t){this.shopParams=t}getShopParams(){return this.shopParams}getProduct(t){let e;return this.productCache.forEach(n=>{e=n.find(e=>e.id===t)}),e?Object(b.a)(e):this.http.get(this.baseUrl+"products/"+t)}getBrands(){return this.brands.length>0?Object(b.a)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe(Object(r.a)(t=>(this.brands=t,t)))}getTypes(){return this.types.length>0?Object(b.a)(this.types):this.http.get(this.baseUrl+"products/types").pipe(Object(r.a)(t=>(this.types=t,t)))}}return t.\u0275fac=function(e){return new(e||t)(i.Wb(a.b))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n("tyNb"),l=n("tc9g"),g=n("cAP4");function m(t,e){if(1&t){const t=i.Tb();i.Sb(0,"div",2),i.Sb(1,"div",3),i.Nb(2,"img",4),i.Rb(),i.Sb(3,"div",3),i.Sb(4,"h3"),i.Ac(5),i.Rb(),i.Sb(6,"p",5),i.Ac(7),i.cc(8,"currency"),i.Rb(),i.Sb(9,"div",6),i.Sb(10,"i",7),i.Zb("click",function(){return i.sc(t),i.bc().decrementQuamtity()}),i.Rb(),i.Sb(11,"span",8),i.Ac(12),i.Rb(),i.Sb(13,"i",9),i.Zb("click",function(){return i.sc(t),i.bc().incrementQuantity()}),i.Rb(),i.Sb(14,"button",10),i.Zb("click",function(){return i.sc(t),i.bc().addItemToBasket()}),i.Ac(15,"Add to Cart"),i.Rb(),i.Rb(),i.Rb(),i.Sb(16,"div",11),i.Sb(17,"div",12),i.Sb(18,"h4"),i.Ac(19,"Description"),i.Rb(),i.Sb(20,"p"),i.Ac(21),i.Rb(),i.Rb(),i.Rb(),i.Rb()}if(2&t){const t=i.bc();i.Bb(2),i.ic("src",t.product.pictureUrl,i.uc),i.ic("alt",t.product.name),i.Bb(3),i.Bc(t.product.name),i.Bb(2),i.Bc(i.dc(8,6,t.product.price)),i.Bb(5),i.Bc(t.quantity),i.Bb(9),i.Bc(t.product.description)}}let f=(()=>{class t{constructor(t,e,n,s){this.shopService=t,this.activateRoute=e,this.bcService=n,this.basketService=s,this.quantity=1,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuamtity(){this.quantity>1&&this.quantity--}loadProduct(){this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get("id")).subscribe(t=>{this.product=t,this.bcService.set("@productDetails",t.name)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(h),i.Mb(d.a),i.Mb(l.c),i.Mb(g.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"containter","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","mx-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ml-4",3,"click"],[1,"row","mt-5"],[1,"col-12","ml-3"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.yc(1,m,22,8,"div",1),i.Rb()),2&t&&(i.Bb(1),i.hc("ngIf",e.product))},directives:[s.m],pipes:[s.d],styles:[""]}),t})();function S(t,e){if(1&t&&(i.Sb(0,"span"),i.Ac(1," Showing "),i.Sb(2,"strong"),i.Ac(3),i.Rb(),i.Ac(4," of "),i.Sb(5,"strong"),i.Ac(6),i.Rb(),i.Ac(7," Results"),i.Rb()),2&t){const t=i.bc();i.Bb(3),i.Dc(" ",(t.pageNumber-1)*t.pageSize+1," - ",t.pageNumber*t.pageSize>t.totalCount?t.totalCount:t.pageNumber*t.pageSize," "),i.Bb(3),i.Bc(t.totalCount)}}function v(t,e){1&t&&(i.Sb(0,"span"),i.Ac(1," There are "),i.Sb(2,"strong"),i.Ac(3,"0"),i.Rb(),i.Ac(4," results for this filter "),i.Rb())}let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(i.Sb(0,"header"),i.yc(1,S,8,3,"span",0),i.yc(2,v,5,0,"span",0),i.Rb()),2&t&&(i.Bb(1),i.hc("ngIf",e.totalCount&&e.totalCount>0),i.Bb(1),i.hc("ngIf",0===e.totalCount))},directives:[s.m],styles:[""]}),t})();var P=n("3Pt+");let R=(()=>{class t{constructor(t){this.basketService=t}ngOnInit(){}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(g.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:8,consts:[[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],[3,"routerLink"],[1,"text-uppercase"],[1,"mb-2"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Nb(2,"img",2),i.Sb(3,"div",3),i.Sb(4,"button",4),i.Zb("click",function(){return e.addItemToBasket()}),i.Rb(),i.Sb(5,"button",5),i.Ac(6,"View"),i.Rb(),i.Rb(),i.Rb(),i.Sb(7,"div",6),i.Sb(8,"a",7),i.Sb(9,"h6",8),i.Ac(10),i.Rb(),i.Rb(),i.Sb(11,"span",9),i.Ac(12),i.cc(13,"currency"),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.Bb(2),i.ic("src",e.product.pictureUrl,i.uc),i.ic("alt",e.product.name),i.Bb(3),i.jc("routerLink","/shop/",e.product.id,""),i.Bb(3),i.jc("routerLink","/shop/",e.product.id,""),i.Bb(2),i.Bc(e.product.name),i.Bb(2),i.Bc(i.dc(13,6,e.product.price)))},directives:[d.d,d.f],pipes:[s.d],styles:[".btn-group[_ngcontent-%COMP%]{width:100%}.btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:hsla(0,0%,100%,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translateX(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translateX(20px)}"]}),t})();var C=n("Lm2G");let B=(()=>{class t{constructor(){this.pageChanged=new i.n}ngOnInit(){}onPagerChange(t){this.pageChanged.emit(t.page)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:4,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","ngModel","itemsPerPage","pageChanged"]],template:function(t,e){1&t&&(i.Sb(0,"pagination",0),i.Zb("pageChanged",function(t){return e.onPagerChange(t)}),i.Rb()),2&t&&i.hc("boundaryLinks",!0)("totalItems",e.totalCount)("ngModel",e.pageNumber)("itemsPerPage",e.pageSize)},directives:[C.a,P.k,P.m],styles:[""]}),t})();const w=["search"];function k(t,e){if(1&t&&(i.Sb(0,"option",16),i.Ac(1),i.Rb()),2&t){const t=e.$implicit,n=i.bc(2);i.hc("selected",n.shopParams.sort===t.value)("value",t.value),i.Bb(1),i.Cc(" ",t.name," ")}}function I(t,e){if(1&t){const t=i.Tb();i.Sb(0,"li",17),i.Zb("click",function(){i.sc(t);const n=e.$implicit;return i.bc(2).onBrandSelected(n.id)}),i.Ac(1),i.Rb()}if(2&t){const t=e.$implicit,n=i.bc(2);i.Eb("active",t.id===n.shopParams.brandId),i.hc("value",t.id),i.Bb(1),i.Cc(" ",t.name," ")}}function O(t,e){if(1&t){const t=i.Tb();i.Sb(0,"li",17),i.Zb("click",function(){i.sc(t);const n=e.$implicit;return i.bc(2).onTypeSelected(n.id)}),i.Ac(1),i.Rb()}if(2&t){const t=e.$implicit,n=i.bc(2);i.Eb("active",t.id===n.shopParams.typeId),i.hc("value",t.id),i.Bb(1),i.Cc(" ",t.name," ")}}function A(t,e){if(1&t){const t=i.Tb();i.Qb(0),i.Sb(1,"h5",10),i.Ac(2,"Sort"),i.Rb(),i.Sb(3,"select",11),i.Zb("change",function(e){return i.sc(t),i.bc().onSortSelected(e.target.value)}),i.yc(4,k,2,3,"option",12),i.Rb(),i.Sb(5,"h5",13),i.Ac(6,"Brands"),i.Rb(),i.Sb(7,"ul",14),i.yc(8,I,2,4,"li",15),i.Rb(),i.Sb(9,"h5",13),i.Ac(10,"Types"),i.Rb(),i.Sb(11,"ul",14),i.yc(12,O,2,4,"li",15),i.Rb(),i.Pb()}if(2&t){const t=i.bc();i.Bb(4),i.hc("ngForOf",t.sortOptions),i.Bb(4),i.hc("ngForOf",t.brands),i.Bb(4),i.hc("ngForOf",t.types)}}function N(t,e){if(1&t){const t=i.Tb();i.Sb(0,"div",18),i.Sb(1,"input",19,20),i.Zb("keyup.enter",function(){return i.sc(t),i.bc().onSearch()}),i.Rb(),i.Sb(3,"button",21),i.Zb("click",function(){return i.sc(t),i.bc().onSearch()}),i.Ac(4,"Search"),i.Rb(),i.Sb(5,"button",22),i.Zb("click",function(){return i.sc(t),i.bc().onReset()}),i.Ac(6,"Reset"),i.Rb(),i.Rb()}}function x(t,e){if(1&t&&(i.Sb(0,"div",23),i.Nb(1,"app-product-item",24),i.Rb()),2&t){const t=e.$implicit;i.Bb(1),i.hc("product",t)}}function M(t,e){if(1&t){const t=i.Tb();i.Sb(0,"div",25),i.Sb(1,"app-pager",26),i.Zb("pageChanged",function(e){return i.sc(t),i.bc().onPageChaned(e)}),i.Rb(),i.Rb()}if(2&t){const t=i.bc();i.Bb(1),i.hc("pageSize",t.shopParams.pageSize)("totalCount",t.totalCount)("pageNumber",t.shopParams.pageNumber)}}const T=[{path:"",component:(()=>{class t{constructor(t){this.shopService=t,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: Hight to Low",value:"priceDesc"}],this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(t=!1){this.shopService.getProducts(t).subscribe(t=>{this.products=t.data,this.totalCount=t.count},t=>{console.log(t)})}getBrands(){this.shopService.getBrands().subscribe(t=>{this.brands=[{id:0,name:"All"},...t]},t=>{console.log(t)})}getTypes(){this.shopService.getTypes().subscribe(t=>{this.types=[{id:0,name:"All"},...t]},t=>{console.log(t)})}onBrandSelected(t){const e=this.shopService.getShopParams();e.brandId=t,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onTypeSelected(t){const e=this.shopService.getShopParams();e.typeId=t,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onSortSelected(t){const e=this.shopService.getShopParams();e.sort=t,this.shopService.setShopParams(e),this.getProducts()}onPageChaned(t){const e=this.shopService.getShopParams();e.pageNumber!==t&&(e.pageNumber=t,this.shopService.setShopParams(e),this.getProducts(!0))}onSearch(){const t=this.shopService.getShopParams();t.search=this.searchTerm.nativeElement.value,t.pageNumber=1,this.shopService.setShopParams(t),this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new p,this.shopService.setShopParams(this.shopParams),this.getProducts()}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(h))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-shop"]],viewQuery:function(t,e){if(1&t&&i.Ec(w,1),2&t){let t;i.pc(t=i.ac())&&(e.searchTerm=t.first)}},decls:11,vars:7,consts:[[1,"container","mt-3"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageSize","pageNumber"],["class","form-inline",4,"ngIf"],["class","col-4 mb-4",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[1,"text-warning","ml-3","mt-4","mb-3"],["name","",1,"custom-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"text-warning","ml-3"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"form-inline"],["type","text","placeholder","Search",1,"form-control","mr-2",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","my-2",3,"click"],[1,"btn","btn-outline-success","ml-2","my-2",3,"click"],[1,"col-4","mb-4"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"pageSize","totalCount","pageNumber","pageChanged"]],template:function(t,e){1&t&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"section",2),i.yc(3,A,13,3,"ng-container",3),i.Rb(),i.Sb(4,"section",4),i.Sb(5,"div",5),i.Nb(6,"app-paging-header",6),i.yc(7,N,7,0,"div",7),i.Rb(),i.Sb(8,"div",1),i.yc(9,x,2,1,"div",8),i.Rb(),i.yc(10,M,2,3,"div",9),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.Bb(3),i.hc("ngIf",e.types&&e.brands),i.Bb(3),i.hc("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber),i.Bb(1),i.hc("ngIf",e.products),i.Bb(2),i.hc("ngForOf",e.products),i.Bb(1),i.hc("ngIf",e.totalCount>0))},directives:[s.m,y,s.l,P.n,P.s,R,B],styles:[".list-group[_ngcontent-%COMP%]:hover{cursor:pointer}"]}),t})()},{path:":id",component:f,data:{breadcrumb:{alias:"productDetails"}}}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[d.g.forChild(T)],d.g]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({imports:[[s.c,c.a,j]]}),t})()}}]);