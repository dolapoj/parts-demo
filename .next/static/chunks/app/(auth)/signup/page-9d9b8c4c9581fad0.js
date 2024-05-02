(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{2325:function(e,s,t){Promise.resolve().then(t.t.bind(t,1397,23)),Promise.resolve().then(t.bind(t,9390)),Promise.resolve().then(t.bind(t,8071)),Promise.resolve().then(t.bind(t,3226)),Promise.resolve().then(t.bind(t,5404)),Promise.resolve().then(t.t.bind(t,1749,23)),Promise.resolve().then(t.t.bind(t,5250,23))},9390:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return b}});var a=t(7437),l=t(2265),i=t(703),n=t(8792),r=t(248);let o=r.z.object({email:r.z.string().min(1,"Email is required").email("Invalid email address"),role:r.z.string().min(1,"Buyer is required"),first_name:r.z.string().min(1,"First name is required"),last_name:r.z.string().min(1,"Last name is required"),country:r.z.string().min(1,"Country is required"),password:r.z.string().min(8,"Password must be at least 8 characters").min(1,"Password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{message:"Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"}),confirm_password:r.z.string().min(8,"Password must be at least 8 characters").min(1,"Password is required").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{message:"Password does not match"}),phone_number:r.z.string().min(1,"Phone number is required"),company:r.z.string().min(1,"Company name  is required").optional()}).strip();var c=t(1270),d=t(2670),m=t(7908),x=t(8009),u=t(5587),p=t(4360),h=t(6347),A=t.n(h),g=t(5404);let f=[{id:"Step 1",name:"Registration",fields:["email"]},{id:"Step 2",name:"Information",fields:["role","first_name","last_name","email","country","password","confirm_password","phone_number","company_name"]},{id:"Step 3",name:"Verification"},{id:"Step 4",name:"Complete"}];var b=()=>{var e,s,t,r,h,b,j,N,v,w;let[y,C]=(0,l.useState)(0),[_,k]=(0,l.useState)(""),[P,E]=(0,l.useState)(""),[B,D]=(0,l.useState)(""),[I,S]=(0,l.useState)(!1),{register:q,handleSubmit:F,watch:R,reset:U,trigger:Y,formState:{errors:z}}=(0,d.cI)({resolver:(0,c.F)(o)}),W=async e=>{try{let s=await m.Z.post("http://kineticparts.africa/auth/register/",e,{headers:{"Content-Type":"application/json"}});console.log(s.data.activation_link),E(s.data.activation_link),x.default.success("You can now check your email for account activation.")}catch(e){x.default.error("There might be an issue with your internet")}U()},L=async()=>{let e=f[y].fields;if(!await Y(e,{shouldFocus:!0})&&y<2)return console.log("there is a problem");y<f.length-1&&(y===f.length-3&&await F(W)(),C(e=>e+1))};return(0,a.jsxs)("main",{className:"p-6",children:[(0,a.jsx)("p",{style:{fontWeight:"700"},className:"text-2xl",children:"Create Account"}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("nav",{"aria-label":"Progress",children:(0,a.jsx)("ol",{role:"list",className:"space-y-2 md:flex md:space-x-8 md:space-y-0",children:f.map((e,s)=>(0,a.jsx)("li",{className:"md:flex-1",children:y>s?(0,a.jsxs)("div",{className:"group flex w-full flex-col border-l-4 stepColorBorder py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4",children:[(0,a.jsx)("span",{className:"text-sm font-medium stepColorBorder transition-colors ",children:e.id}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]}):y===s?(0,a.jsxs)("div",{className:"flex w-full flex-col border-l-4 stepColorBorder py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4","aria-current":"step",children:[(0,a.jsx)("span",{className:"text-sm font-medium stepColor",children:e.id}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]}):(0,a.jsxs)("div",{className:"group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4",children:[(0,a.jsx)("span",{className:"text-sm font-medium text-gray-500 transition-colors",children:e.id}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]})},e.name))})}),(0,a.jsxs)("form",{className:"py-12",onSubmit:F(W),children:[0===y&&(0,a.jsxs)(u.E.div,{initial:{x:y>=0?"50%":"-50%",opacity:0},animate:{x:0,opacity:1},transition:{duration:.7,ease:"easeInOut"},children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4 font-semibold",children:"Sign Up with Email"}),(0,a.jsx)("input",{type:"text",placeholder:"",...q("email"),autoComplete:"email",onChange:e=>k(e.target.value),className:"rounded-md"}),(null===(e=z.email)||void 0===e?void 0:e.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.email.message})]}),(0,a.jsx)("div",{className:"strike mt-8",children:(0,a.jsx)("span",{children:"or with"})}),(0,a.jsx)(p.Z,{})]}),1===y&&(0,a.jsxs)(u.E.div,{initial:{x:y>=0?"50%":"-50%",opacity:0},animate:{x:0,opacity:1},transition:{duration:.7,ease:"easeInOut"},children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("label",{className:"text-left sm:ml-4",children:["What type of user are you?"," ",(0,a.jsx)("span",{className:"text-sm italic",children:"(optional)"})]}),(0,a.jsxs)("select",{className:"block w-full rounded-md",...q("role"),value:B,onChange:e=>{let s=e.target.value;D(s),S("Fleet Manager"===s)},defaultValue:"Vehicle Owner",children:[(0,a.jsx)("option",{value:"Individual",children:"Individual"}),(0,a.jsx)("option",{value:"Fleet Manager",children:"Fleet Manager"}),(0,a.jsx)("option",{value:"Mechanic",children:"Mechanic"})]}),(null===(s=z.role)||void 0===s?void 0:s.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.role.message})]}),I&&(0,a.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4",children:"Company"}),(0,a.jsx)("input",{type:"text",placeholder:"Ade & Sons",...q("company"),autoComplete:"off",className:"inputField rounded-md"}),(null===(t=z.company)||void 0===t?void 0:t.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.company.message})]}),(0,a.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4",children:"Firstname"}),(0,a.jsx)("input",{type:"text",autoComplete:"off",...q("first_name"),className:"rounded-md"}),(null===(r=z.first_name)||void 0===r?void 0:r.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.first_name.message})]}),(0,a.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4",children:"Lastname"}),(0,a.jsx)("input",{type:"text",...q("last_name"),autoComplete:"off",className:"rounded-md"}),(null===(h=z.last_name)||void 0===h?void 0:h.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.last_name.message})]}),(0,a.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4",children:"Email Address"}),(0,a.jsx)("input",{type:"text",...q("email"),autoComplete:"off",className:"".concat(A().inputBg," rounded-md focus:outline-none"),readOnly:!0}),(null===(b=z.email)||void 0===b?void 0:b.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.email.message})]}),(0,a.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4",children:"Country/Region"}),(0,a.jsx)("input",{type:"text",...q("country"),autoComplete:"off",className:"rounded-md"}),(null===(j=z.country)||void 0===j?void 0:j.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.country.message})]}),(0,a.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4",children:"Password"}),(0,a.jsx)("input",{type:"password",...q("password"),autoComplete:"off",className:"rounded-md"}),(null===(N=z.password)||void 0===N?void 0:N.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.password.message})]}),(0,a.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4",children:"Confirm Password"}),(0,a.jsx)("input",{type:"password",autoComplete:"off",...q("confirm_password"),className:"rounded-md"}),(null===(v=z.confirm_password)||void 0===v?void 0:v.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.confirm_password.message})]}),(0,a.jsxs)("div",{className:"flex flex-col mt-4",children:[(0,a.jsx)("label",{className:"text-left sm:ml-4",children:"Mobile Number"}),(0,a.jsx)("input",{type:"tel",placeholder:"8100617304",...q("phone_number"),autoComplete:"off",className:"inputField rounded-md"}),(null===(w=z.phone_number)||void 0===w?void 0:w.message)&&(0,a.jsx)("p",{className:"mt-2 text-xs text-red-400",children:z.phone_number.message})]}),(0,a.jsxs)("label",{className:"flex items-center mt-2",children:[(0,a.jsx)("input",{type:"checkbox",className:"mr-2 w-4 h-4"}),(0,a.jsxs)("p",{className:"text-xs text-gray-600",children:["I agree to the"," ",(0,a.jsx)("span",{className:"text-blue-900 font-bold cursor-pointer",children:"User Agreement"})," ","and the"," ",(0,a.jsx)("span",{className:"text-blue-900 font-bold cursor-pointer",children:"Privacy Policy"})]})]})]}),2===y&&(0,a.jsxs)(u.E.div,{initial:{x:y>=0?"50%":"-50%",opacity:0},animate:{x:0,opacity:1},transition:{duration:.7,ease:"easeInOut"},children:[(0,a.jsxs)("p",{children:["Activate your account with this link ",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"font-bold text-blue-600",children:P})," ",(0,a.jsx)("br",{})]}),(0,a.jsxs)("p",{className:"text-xs mt-2",children:[(0,a.jsx)("span",{className:"text-blue-600",children:"Please check your email"})," ","and continue your registration with 1 hour"]}),(0,a.jsx)("p",{className:"mt-4 text-sm font-medium",children:"Having problems receiving email?"}),(0,a.jsxs)("p",{className:"flex flex-row items-center mb-2 mt-2 space text-xs",children:[(0,a.jsx)(i.default,{className:"w-1",src:g.default,alt:"rectangle"}),(0,a.jsx)("span",{className:"text-black pl-2",children:"Please check your spam folder"})]}),(0,a.jsxs)("p",{className:"flex flex-row items-center mb-2 mt-2 space text-xs",children:[(0,a.jsx)(i.default,{className:"w-1",src:g.default,alt:"rectangle"}),(0,a.jsxs)("span",{className:"text-black pl-2",children:["Click here to"," ",(0,a.jsx)("span",{className:"text-blue-600 cursor-pointer",children:"resend the email"})]})]}),(0,a.jsxs)("p",{className:"flex flex-row items-center mb-2 mt-2 space text-xs",children:[(0,a.jsx)(i.default,{className:"w-1",src:g.default,alt:"rectangle"}),(0,a.jsxs)("span",{className:"text-black pl-2",children:["Have you received? Try to"," ",(0,a.jsx)("span",{className:"text-blue-600 cursor-pointer",children:"change your email address"})," ","instead of ",_]})]})]}),3===y&&(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsx)("h1",{style:{color:"#00E600"},className:"text-base text-center mt-6 sm:text-3xl  font-bold leading-7",children:"Welcome Back"}),(0,a.jsx)("p",{className:"mt-1 text-center text-sm leading-6",children:"You have successfully created an account"})]})]}),(0,a.jsx)("div",{className:"flex mt-8",children:(0,a.jsx)("button",{type:"button",className:"button m-auto font-medium text-white w-full p-2",onClick:L,disabled:y===f.length-1,children:3===y?(0,a.jsx)(n.default,{className:"w-100",href:"/login",children:"Sign In"}):"Next"})})]})]})}},4360:function(e,s,t){"use strict";t.d(s,{Z:function(){return d}});var a=t(7437);t(2265);var l=t(703),i={src:"/_next/static/media/facebook.1df10826.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6ElEQVR42jVOsS5EURCdT9jVrCVUCu9JVBqNzxAKQiMq0biXJ0TtF/yAXidbvO2QqBQrmvUKtHNHwt69d9/ZuS/ZSc7k5JwzOUNzRkiRL1opW2cu0iFH2uP+xpXklGbeSr5ghdvGYbWQ+r73P7l7+AOdOm5CHeP6a4WA9tn3XkY1gPrxeeQ1gJULKalrJSoBnTgMvwLePwPogJGOOkYi5YWuI4enN4/ZvA7GoGNXZ8lb0ue61mHrRnz1HVD9BGxei9dqLJ9rRdtItn4pTDuMwXDcgHYZSWupR9u3vwmZiuVHFWJC4o1GRFOVo6OlIt6VjgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},n={src:"/_next/static/media/google.7ed4de50.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42mMAgb9xKur/vdUO//FS/X/bXvH/DTvFo7fslU3Bkv94NNT/Wah/+++t+v+vl9qiW466S6/ba/6/4WhYDVbw/zT7of9zpP7/Y9DVYoCC/wwMzAww8O8aw/8/d5kWgSVWMLBq1zyey1D/4qho7bOdErVP1zP8v8rw//81BrCCw+cZ2MTqnhyWqX3yXLz26X/Rumf/GT5dFD606bDJf4aVAXArxMv+qosCFYjVPTvKwLDOS51ho8c3oc3u/4U2BizmncuwWLhr83+xmlffRRvua4N1+G11URfc7H5YcKP7f/7Zxv/5p6YeEav5oMHAwMAAABh7Z5nRkIXjAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},r={src:"/_next/static/media/linkedin.1c40a7d0.png",height:64,width:64,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42h2PsUrEQBRF77yZbLImi4YUFgM22ygo9na2FvYW+zWWdpZ2kq+w8ieCq4XgIgFFRIlJTDaT93bY7sCFyznq6K44X7YuxyAWsZaMFBqB6oASIgtaVkN+e5Lap6s5ww/fA6tOhDPAAsgNPMxC4jjUdBZpzLTCcz/SqmdOA7IGAkmnhqaBxv3FAeb7Mep+xPXDim7eGiGwYDcySJMAWTJB8V7BjYzLwz2gG0EQqIlRbDRhJ9Qof3vU/w7+cetkEFL5+FrZn9ZxOzC9fHX4/FvzR+0IEZXq2GcWjc90YqEgCAieFQjlaWIWG3DHZ2md3S0HAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},o=t(1580),c=t(7908),d=()=>(0,a.jsxs)("div",{className:"flex flex-row mt-4 justify-center gap-8 text-xs items-center",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(l.default,{src:i,alt:"Facebook",quality:100,className:"w-8"})}),(0,a.jsx)("div",{children:(0,a.jsx)(o.GoogleLogin,{clientId:"806292803476-urs300nfiqdfc0gekdnf3mrrpml5ehg9.apps.googleusercontent.com",onSuccess:e=>{console.log(e);try{c.Z.post("http://kineticparts.africa/social/google",e.accessToken,{headers:{"Content-Type":"application/json"}})}catch(e){console.error(e)}},onFailure:e=>{console.error("Google login failed:",e)},cookiePolicy:"single_host_origin",render:e=>(0,a.jsx)("button",{onClick:e.onClick,disabled:e.disabled,className:"google-login-button",children:(0,a.jsx)(l.default,{src:n,alt:"Google",quality:100,className:"w-8"})})})}),(0,a.jsx)("div",{children:(0,a.jsx)(l.default,{src:r,alt:"LinkedIn",quality:100,className:"w-8"})})]})},1397:function(e){e.exports={login_container:"login_login_container__gp75k",logo:"login_logo__hBfiD",no_acct_text:"login_no_acct_text__BkxP2",bg_blue:"login_bg_blue__EBEu4"}},6347:function(e){e.exports={inputBg:"signup_inputBg__hEufl",btnBg:"signup_btnBg__n_pd9"}},8071:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/kinetic-parts-logo.d8cfdbeb.png",height:103,width:337,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASElEQVR4nBXKMQqAIBSA4d+UoLYOENTQ0Bx0n87RYd1d3iYK4lPn7zPwPWAi2Bs0s2lE7AKuAjLC3oPCtHLqjO/wy8UbDpIrDQwJEfx0ilN5AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},3226:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/sign-up-vector.87ec454d.png",height:650,width:646,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AfuQqjkD9AU15FA5x8Ll7z/p5e0C/gUE7AnaGT4L9AikAfitsvAHFSAP9ePqjqTmyEv76fMnDRYP/PD8NQT+5StxAfOjlXYJDyMjAfuXuAIW7K4A6QUAACD3/qnAdAIX5Da5AZ9t3iNhkwkC/syDMv/586gCAAP89QYMA7+xNQFK9RTwAamB9On6+wv1QDKl2xsYtkYBChj+6fED/9WxLQNCAxLVAZNu0pfT5gL2mWwsAADtWHIACgL64foUBuC7Nv0/DRB3AV8UIlnY7AcZjogtIPkAIG0YFQgA4PIJAPzYFqrd+AhXAXk+fEQWDQ4HcbXb9y5YMnYpFhIJCfv2JxT36VeM//fB6IV4ezTyvPgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},5404:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/square.366edb74.svg",height:15,width:14,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[703,792,908,9,848,971,69,744],function(){return e(e.s=2325)}),_N_E=e.O()}]);