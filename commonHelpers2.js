import"./assets/styles-1146ed2b.js";document.addEventListener("DOMContentLoaded",function(){const e={email:"",message:""},a=document.querySelector(".feedback-form"),t=a.querySelector('input[name="email"]'),m=a.querySelector('textarea[name="message"]');function n(){e.email=t.value,e.message=m.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}const s=JSON.parse(localStorage.getItem("feedback-form-state"));s&&(e.email=s.email,e.message=s.message,t.value=e.email,m.value=e.message),a.addEventListener("input",function(o){(o.target===t||o.target===m)&&n()}),a.addEventListener("submit",function(o){if(o.preventDefault(),!e.email||!e.message){alert("Будь ласка, заповніть всі поля");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.value="",m.value=""})});
//# sourceMappingURL=commonHelpers2.js.map
