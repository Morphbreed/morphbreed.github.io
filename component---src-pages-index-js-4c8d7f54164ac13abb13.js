(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return s});var a=n(0),r=n.n(a),o=n(165),i=n(181),c=n(149),u=n.n(c),l=n(182);t.default=Object(l.a)(function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return{date:e.node.frontmatter.date,course:e.node.frontmatter.course?e.node.frontmatter.course:"",courseUrl:e.node.frontmatter.courseUrl?e.node.frontmatter.courseUrl:"",title:e.node.frontmatter.title,text:e.node.excerpt}}).map(function(e,t){return r.a.createElement(i.a,{key:t,date:e.date,title:e.title,content:r.a.createElement(u.a,{style:{marginBottom:10},variant:"body1",color:"inherit"},e.text),course:e.course,courseUrl:e.courseUrl})});return r.a.createElement(o.a,{title:"Index"},t)});var s="137762117"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(151),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Morphbreed's Page"}}}}},161:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(55),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},164:function(e,t,n){},165:function(e,t,n){"use strict";var a=n(160),r=n(0),o=n.n(r),i=n(4),c=n.n(i),u=n(150),l=n(171),s=n.n(l),m=n(179),d=n.n(m),f=n(159),p=n.n(f),h=n(149),g=n.n(h),y=n(157);var E=Object(y.withStyles)({root:{flexGrow:1,marginBottom:15},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(s.a,{position:"static"},o.a.createElement(d.a,null,o.a.createElement(g.a,{variant:"h6",color:"inherit",className:t.grow},o.a.createElement(u.Link,{className:"link",to:"/"},"Morphbreed's Page")),o.a.createElement(u.Link,{className:"link",to:"/"},o.a.createElement(p.a,{color:"inherit"},"Home")),o.a.createElement(u.Link,{className:"link",to:"/infos"},o.a.createElement(p.a,{color:"inherit"},"Infos")))))}),v=n(180),b=(n(164),function(e){var t=e.title,n=e.children;return o.a.createElement(u.StaticQuery,{query:"2994927498",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Morphbreed's Page | "+t)),o.a.createElement(E,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n))},data:a})});b.propTypes={children:c.a.node.isRequired};t.a=b},181:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(213),i=n.n(o),c=n(214),u=n.n(c),l=n(215),s=n.n(l),m=n(211),d=n.n(m),f=n(159),p=n.n(f),h=n(149),g=n.n(h),y={marginBottom:10};t.a=function(e){var t=e.courseUrl?r.a.createElement(d.a,null," ",r.a.createElement("a",{rel:"noopener noreferrer",style:{textDecoration:"none"},target:"_blank",href:e.courseUrl},r.a.createElement(p.a,{size:"small",color:"primary"},r.a.createElement(g.a,{variant:"body1",color:"inherit"},"To the Course")))):"";return r.a.createElement(i.a,{style:y},r.a.createElement(u.a,{style:{paddingBottom:5},title:e.title,subheader:e.date}),r.a.createElement(s.a,{style:{padding:"5px 16px"}},e.content,t))}},182:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(157),u=n(224),l=n.n(u),s=n(216),m=n.n(s),d=n(183);t.a=function(e){return function(t){function n(e){var n;return(n=t.call(this,e)||this).muiPageContext=Object(d.a)(),n}r()(n,t);var a=n.prototype;return a.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},a.render=function(){return i.a.createElement(m.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(l.a,null),i.a.createElement(e,this.props)))},n}(i.a.Component)}},183:function(e,t,n){"use strict";(function(e,a){n.d(t,"a",function(){return d});n(77),n(54),n(78),n(220);var r=n(162),o=n(157),i=n(176),c=n.n(i),u=n(223),l=n.n(u),s=Object(o.createMuiTheme)({palette:{primary:{light:c.a[300],main:c.a[500],dark:c.a[700]},secondary:{light:l.a[300],main:l.a[500],dark:l.a[700]}},typography:{useNextVariants:!0}});function m(){return{theme:s,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(o.createGenerateClassName)()}}function d(){return e.browser?(a.__INIT_MATERIAL_UI__||(a.__INIT_MATERIAL_UI__=m()),a.__INIT_MATERIAL_UI__):m()}}).call(this,n(219),n(73))}}]);
//# sourceMappingURL=component---src-pages-index-js-4c8d7f54164ac13abb13.js.map