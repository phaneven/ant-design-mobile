webpackJsonp([112],{391:function(n,t){n.exports={content:["section",["h2","Naming Conventions"],["p","Each icon has its own semantic naming\uff0cthe naming rules are as follows:"],["ul",["li",["p","The solid and line icons have same name\uff0cwe use ",["code","-o"]," to distinguish it. eg: ",["code","question-circle"]," (solid icon), ",["code","question-circle-o"]," (line icon)"]],["li",["p","Sequence in naming: ",["code","[icon name]-[shape(optional)]-["],"-o",["code","or not]-[direction(optional)]"],"\u3002"]]],["h2","How to Use (WEB)"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>'},["code",'<Icon type="check" />']],["h3","Tips"],["p","Now, we only support the built-in 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up' , 'left', 'right', 'ellipsis', 'loading' these icon types."],["blockquote",["p","Note: ",["code","loading"],"(Deprecated) icon is not animated, it is recommended to use RN ",["code","ActivityIndicator"]," instead."]],["p",["strong","No longer support other custom types of icon"],". If you need to use your custom icon type, there are several ways:"],["ol",["li",["p","view svg icon document for 1.x => 2.0 in ",["a",{title:null,href:"/docs/react/upgrade-notes#1.x-=>-2.0"},"/docs/react/upgrade-notes"]]],["li",["p","Use your own iconfont file"]],["li",["p","Other methods, you can reuse the ",["code",".am-icon"]," style name we have provided"]]],["h2","How to Use (React-Native)"],["blockquote",["p","You need to use custom font(",["code","anticon.ttf"],") for RN"]],["ul",["li",["p","Download",["code","https://at.alicdn.com/t/font_r5u29ls31bgldi.ttf"]," and rename to ",["code","anticon.ttf"]]],["li",["p","Open ",["code","info.plist"]," file in your xcode project, add ",["code","Fonts provided by application"]," property with one item and value ",["code","anticon.ttf"],", then drag ",["code","anticon.ttf"]," to your xcode project."]],["li",["p","In Android project, you need place ",["code","anticon.ttf"]," in the ",["code","android/app/src/main/assets/fonts/"]," folder;"]]],["blockquote",["p","In addition, in ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/pull/2270"},"pull/2270"],", another way of using ",["code","react-native link"],"/rpm is proposed. Maybe you can try it."]],["p","example\uff1a"],["pre",{lang:"html",highlighted:'built-in icon\uff1a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>md<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\ncustomized icon\uff1a&lt;Icon type={\'\\ue601\'} size={55} /> (\u5177\u4f53\u53c2\u770b demo)'},["code",'built-in icon\uff1a <Icon type="check" size="md" color="red" />\ncustomized icon\uff1a<Icon type={\'\\ue601\'} size={55} /> (\u5177\u4f53\u53c2\u770b demo)']],["blockquote",["p","Note: You can find some unicode characters in ",["a",{title:null,href:"https://ant.design/components/icon/"},"https://ant.design/components/icon/"]," by using Chrome Developer Tool to inspect icons."]]],meta:{category:"Components",type:"Data Display",title:"Icon",filename:"components/icon/index.en-US.md"},api:["section",["h2","API"],["p","Support\uff1aWEB\u3001React-Native"],["table",["thead",["tr",["th","Properties"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","type"],["td","string name of built-in icon for ",["code","WEB"]," or unicode string for ",["code","RN"]],["td","String"]],["tr",["td","size"],["td","icon size"],["td","'xxs'/'xs'/'sm'/'md'/'lg' (",["code","RN/WEB"],")/ number(",["code","RN Only"],")"],["td",["code","md"]]],["tr",["td","color"],["td","icon color"],["td","Color"],["td","'#000'"]]]]]}}});