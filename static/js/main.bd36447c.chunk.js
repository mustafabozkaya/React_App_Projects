(this["webpackJsonpmobile-react"]=this["webpackJsonpmobile-react"]||[]).push([[0],{29:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(11),i=c.n(s),a=(c(29),c(6)),o=c(7),j=c(9),l=c(8),d=c(16),h=c(4),b=c(12),u=c(2),O=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var r;return Object(a.a)(this,c),(r=t.call(this,e)).empty_cart=function(){return Object(u.jsx)(h.z,{inNavbar:!0,nav:!0,children:Object(u.jsx)(h.j,{nav:!0,children:"Empity"})})},r.cart_review=function(){return Object(u.jsxs)(h.z,{inNavbar:!0,nav:!0,children:[Object(u.jsxs)(h.j,{caret:!0,nav:!0,children:["Your Carts (",r.props.carts.length,")"]}),Object(u.jsxs)(h.i,{children:[r.props.carts.map((function(e,t){return Object(u.jsxs)(h.h,{children:[Object(u.jsx)(h.a,{color:"danger",onClick:function(){return r.props.remove(e.product)},children:" X "}),e.product.productName,"    ",Object(u.jsxs)(h.a,{color:"success",children:[" ",e.quantity," "]})]},t)})),Object(u.jsx)(h.h,{divider:!0}),Object(u.jsx)(h.h,{children:Object(u.jsx)(b.b,{to:"carts",children:" GoTo Cart list"})})]})]})},r.state={},r}return Object(o.a)(c,[{key:"render",value:function(){return 0!==this.props.carts.length?this.cart_review():this.empty_cart()}}]),c}(r.Component),x=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var r;return Object(a.a)(this,c),(r=t.call(this,e)).changestate=function(){r.setState({brand:"E-TRAD\u0130NG APP"})},r.state={brand:r.props.brand,isOpen:!1},r.toggle=r.toggle.bind(Object(d.a)(r)),r}return Object(o.a)(c,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(h.u,{color:"warning",expand:"md",fixed:"True",light:!0,children:[Object(u.jsx)(h.v,{href:"/",children:"E -Trading App"}),Object(u.jsx)(h.w,{onClick:this.toggle}),Object(u.jsx)(h.g,{className:" justify-content-end",isOpen:this.state.isOpen,navbar:!0,children:Object(u.jsxs)(h.r,{className:"ml-auto ",navbar:!0,children:[Object(u.jsx)(h.s,{children:Object(u.jsx)(b.b,{href:"homeproducts",children:"Home"})}),Object(u.jsx)(h.s,{children:Object(u.jsx)(h.t,{children:Object(u.jsx)(b.b,{to:"formuser",children:"Log in"})})}),Object(u.jsx)(h.s,{children:Object(u.jsx)(h.t,{to:"#/about",children:"About"})}),Object(u.jsx)(h.s,{children:Object(u.jsx)(h.t,{to:"/faq",className:function(e){return"nav-link"+(e?"":" unselected")},children:"FAQs"})}),Object(u.jsx)(h.s,{children:Object(u.jsx)(h.t,{strict:!0,to:"/events/",children:"Events"})}),Object(u.jsx)(h.s,{children:Object(u.jsx)(h.t,{href:"https://github.com/reactstrap/reactstrap",children:"GitHub"})}),Object(u.jsx)(O,{carts:this.props.cart,remove:this.props.removeCart})]})})]})})}}]),c}(r.Component),p=c(22),m=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var r;return Object(a.a)(this,c),(r=t.call(this,e)).get_categories=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return r.setState({itemcategory:e})}))},r.onmouseover=function(){r.setState((function(e){return{itemcategory:[].concat(Object(p.a)(e.itemcategory),[{id:9,categoryName:"Home & Garden",seoUrl:"HomeGarden"}])}}))},r.state={itemcategory:[]},r}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{class:"container",children:[Object(u.jsx)(h.x,{children:Object(u.jsxs)(h.b,{children:[Object(u.jsx)(h.c,{children:Object(u.jsx)("a",{href:"#/homeproducts",children:"Home"})}),Object(u.jsx)(h.c,{active:!0,children:this.props.currentcat.categoryName})]})}),Object(u.jsx)(h.x,{children:Object(u.jsx)(h.e,{children:this.props.info})}),Object(u.jsx)(h.p,{children:this.state.itemcategory.map((function(t,c){return Object(u.jsxs)(h.q,{active:e.props.currentcat.id===t.id,onClick:function(){return e.props.click(t)},className:"justify-content-start",children:[t.categoryName," ",Object(u.jsx)(h.a,{pill:!0})]},c)}))})]})}},{key:"componentDidMount",value:function(){this.get_categories(this.props.baseUrl+"/categories")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{current:e.info}}}]),c}(r.Component),f=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){var r;return Object(a.a)(this,c),(r=t.call(this,e)).state={itemproducts:[],carts:[]},r}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(h.x,{children:Object(u.jsx)(h.e,{children:this.props.currentcat.id?this.props.info+" / "+this.props.currentcat.categoryName:this.props.info})}),Object(u.jsxs)(h.y,{hover:!0,responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"categoryId"}),Object(u.jsx)("th",{children:"productName"}),Object(u.jsx)("th",{children:"quantityPerUnit"}),Object(u.jsx)("th",{children:"unitPrice($)"}),Object(u.jsx)("th",{children:"unitsInStock"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:this.props.products.map((function(t,c){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:t.id}),Object(u.jsx)("td",{children:t.categoryId}),Object(u.jsx)("td",{children:t.productName}),Object(u.jsx)("td",{children:t.quantityPerUnit}),Object(u.jsx)("td",{children:t.unitPrice}),Object(u.jsx)("td",{children:t.unitsInStock}),Object(u.jsx)("td",{children:Object(u.jsx)(h.d,{outline:!0,color:"info",onClick:function(){return e.props.addchart(t)},children:"ADD"})})]},c)}))})]})]})}}]),c}(r.Component),v=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"Error Page"})}}]),c}(r.Component),g=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(e){return Object(a.a)(this,c),t.call(this,e)}return Object(o.a)(c,[{key:"render_cart",value:function(){var e=this;return Object(u.jsx)("div",{className:"container-md",children:Object(u.jsxs)(h.y,{hover:!0,responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"categoryId"}),Object(u.jsx)("th",{children:"productName"}),Object(u.jsx)("th",{children:"quantityPerUnit"}),Object(u.jsx)("th",{children:"unitPrice($)"}),Object(u.jsx)("th",{children:"unitsInStock"}),Object(u.jsx)("th",{children:"Quantity"})]})}),Object(u.jsx)("tbody",{children:this.props.carts.map((function(t,c){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:t.product.categoryId}),Object(u.jsx)("td",{children:t.product.productName}),Object(u.jsx)("td",{children:t.product.quantityPerUnit}),Object(u.jsx)("td",{children:t.product.unitPrice}),Object(u.jsx)("td",{children:t.product.unitsInStock}),Object(u.jsx)("td",{children:Object(u.jsx)(h.d,{outline:!0,color:"danger",onClick:function(){return e.props.remove(t.product)},children:"Remove"})})]},c)}))})]})})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"container-md",children:Object(u.jsxs)(h.y,{hover:!0,responsive:!0,children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"categoryId"}),Object(u.jsx)("th",{children:"productName"}),Object(u.jsx)("th",{children:"quantityPerUnit"}),Object(u.jsx)("th",{children:"unitPrice($)"}),Object(u.jsx)("th",{children:"unitsInStock"}),Object(u.jsx)("th",{children:"Quantity"}),Object(u.jsx)("th",{children:"Action"})]})}),Object(u.jsx)("tbody",{children:this.props.carts.map((function(t,c){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:c}),Object(u.jsx)("th",{children:t.product.categoryId}),Object(u.jsx)("td",{children:t.product.productName}),Object(u.jsx)("td",{children:t.product.quantityPerUnit}),Object(u.jsx)("td",{children:t.product.unitPrice}),Object(u.jsx)("td",{children:t.product.unitsInStock}),Object(u.jsx)("td",{children:t.quantity}),Object(u.jsx)("td",{children:Object(u.jsx)(h.d,{outline:!0,color:"danger",onClick:function(){return e.props.remove(t.product)},children:"Remove"})})]},c)}))})]})})}}]),c}(r.Component),y=c(21),k=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={username:"",email:"",password:""},e.onchange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.onSubmithandler=function(t){t.preventDefault(),alert(e.state.username)},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(h.k,{onSubmit:this.onSubmithandler,children:[Object(u.jsxs)(h.l,{children:[Object(u.jsxs)(h.o,{for:"exampleUsername",children:["Username--",this.state.username]}),Object(u.jsx)(h.n,{onChange:this.onchange,type:"text",name:"username",id:"exampleUsername",placeholder:"with a placeholder"})]}),Object(u.jsxs)(h.l,{children:[Object(u.jsxs)(h.o,{for:"exampleEmail",children:["Email--",this.state.email]}),Object(u.jsx)(h.n,{onChange:this.onchange,type:"email",name:"email",id:"exampleEmail",placeholder:"with a placeholder"})]}),Object(u.jsxs)(h.l,{children:[Object(u.jsxs)(h.o,{for:"examplePassword",children:["Password --",this.state.password]}),Object(u.jsx)(h.n,{onChange:this.onchange,type:"password",name:"password",id:"examplePassword",placeholder:"password placeholder"})]}),Object(u.jsxs)(h.l,{children:[Object(u.jsx)(h.o,{for:"exampleSelect",children:"Select"}),Object(u.jsxs)(h.n,{type:"select",name:"select",id:"exampleSelect",children:[Object(u.jsx)("option",{children:"1"}),Object(u.jsx)("option",{children:"2"}),Object(u.jsx)("option",{children:"3"}),Object(u.jsx)("option",{children:"4"}),Object(u.jsx)("option",{children:"5"})]})]}),Object(u.jsxs)(h.l,{children:[Object(u.jsx)(h.o,{for:"exampleSelectMulti",children:"Select Multiple"}),Object(u.jsxs)(h.n,{type:"select",name:"selectMulti",id:"exampleSelectMulti",multiple:!0,children:[Object(u.jsx)("option",{children:"1"}),Object(u.jsx)("option",{children:"2"}),Object(u.jsx)("option",{children:"3"}),Object(u.jsx)("option",{children:"4"}),Object(u.jsx)("option",{children:"5"})]})]}),Object(u.jsxs)(h.l,{children:[Object(u.jsx)(h.o,{for:"exampleText",children:"Text Area"}),Object(u.jsx)(h.n,{type:"textarea",name:"text",id:"exampleText"})]}),Object(u.jsxs)(h.l,{children:[Object(u.jsx)(h.o,{for:"exampleFile",children:"File"}),Object(u.jsx)(h.n,{type:"file",name:"file",id:"exampleFile"}),Object(u.jsx)(h.m,{color:"muted",children:"This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."})]}),Object(u.jsxs)(h.l,{tag:"fieldset",children:[Object(u.jsx)("legend",{children:"Radio Buttons"}),Object(u.jsx)(h.l,{check:!0,children:Object(u.jsxs)(h.o,{check:!0,children:[Object(u.jsx)(h.n,{type:"radio",name:"radio1"})," Option one is this and that\u2014be sure to include why it's great"]})}),Object(u.jsx)(h.l,{check:!0,children:Object(u.jsxs)(h.o,{check:!0,children:[Object(u.jsx)(h.n,{type:"radio",name:"radio1"})," Option two can be something else and selecting it will deselect option one"]})}),Object(u.jsx)(h.l,{check:!0,disabled:!0,children:Object(u.jsxs)(h.o,{check:!0,children:[Object(u.jsx)(h.n,{type:"radio",name:"radio1",disabled:!0})," Option three is disabled"]})})]}),Object(u.jsx)(h.l,{check:!0,children:Object(u.jsxs)(h.o,{check:!0,children:[Object(u.jsx)(h.n,{type:"checkbox"})," Check me out"]})}),Object(u.jsx)(h.d,{children:"Submit"})]})})}}]),c}(r.Component),S=c(18),w=c.n(S),C=c(5),N=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).baseUrl="https://server-backend-api.herokuapp.com",e.state={currentcategory:"",products:[],carts:[]},e.remove_cart=function(t){var c=e.state.carts.filter((function(e,c){return e.product.id!==t.id}));e.setState({carts:c}),w.a.error(t.productName+" removed from chart..",2)},e.add_chart=function(t){var c=e.state.carts,r=c.find((function(e){return e.product.id===t.id}));r?(r.quantity+=1,console.log(r)):c.push({product:t,quantity:1}),e.setState({carts:c}),console.log("carts_state ::"),c.forEach((function(e){return console.log(e)})),w.a.success(t.productName+" add to chart..",2)},e.get_products=function(t){var c=e.baseUrl+"/products";t.seoUrl&&(c=c+"?categoryId="+t.id),fetch(c).then((function(e){return e.json()})).then((function(t){return e.setState({products:t})}))},e.onclic=function(t){e.setState({currentcategory:t}),e.get_products(t)},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(h.x,{children:Object(u.jsx)(x,{brand:"First React Apps",cart:this.state.carts,removeCart:this.remove_cart})}),Object(u.jsxs)(h.x,{children:[Object(u.jsx)(h.f,{xs:"4",children:Object(u.jsx)(m,{baseUrl:this.baseUrl,click:this.onclic,info:"Categories",currentcat:this.state.currentcategory})}),Object(u.jsx)(h.f,{xs:"8",children:Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{path:"/homeproducts",element:Object(u.jsx)(f,{info:"Products",products:this.state.products,currentcat:this.state.currentcategory,addchart:this.add_chart})}),Object(u.jsx)(C.a,{path:"/carts",element:Object(u.jsx)(g,{carts:this.state.carts,remove:this.remove_cart})}),Object(u.jsx)(C.a,{path:"/err-404",element:Object(u.jsx)(v,{})}),Object(u.jsx)(C.a,{path:"/formuser",element:Object(u.jsx)(k,{})})]})})]}),Object(u.jsx)(h.x,{children:Object(u.jsx)(h.f,{xs:{span:4,offset:3}})})]})}},{key:"componentDidMount",value:function(){this.get_products(this.baseUrl+"/products")}}]),c}(r.Component),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),s(e),i(e)}))};c(33),c(34);i.a.render(Object(u.jsx)(b.a,{children:Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(N,{})})}),document.getElementById("root")),P()}},[[35,1,2]]]);
//# sourceMappingURL=main.bd36447c.chunk.js.map