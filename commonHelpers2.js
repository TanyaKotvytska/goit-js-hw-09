import"./assets/styles-1146ed2b.js";document.addEventListener("DOMContentLoaded",function(){const e={email:"",message:""},a=document.querySelector(".feedback-form"),t=a.querySelector('input[name="email"]'),m=a.querySelector('textarea[name="message"]');function l(){e.email=t.value.trim(),e.message=m.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))}const o=JSON.parse(localStorage.getItem("feedback-form-state"));o&&(e.email=o.email,e.message=o.message,t.value=e.email,m.value=e.message),a.addEventListener("input",function(s){(s.target===t||s.target===m)&&l()}),a.addEventListener("submit",function(s){if(s.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.value="",m.value=""})});
//# sourceMappingURL=commonHelpers2.js.map
