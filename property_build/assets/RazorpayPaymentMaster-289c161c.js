import{b as d,A as n,g as c}from"./index-dedcd94c.js";const I="/assets/pay2-ab51edb4.png",P="/assets/rupee2-e24d208b.png",{verifyPaymentStatus:i}=c(),l=d();async function m(o,e){let r;var s={key:"rzp_test_3MPOKRI8WOd54p",amount:o.amount,currency:"INR",image:"http://example.com/your_logo.jpg",name:"JUDCO Corp.",description:"Testing with SAM and WEbhook",order_id:o.orderId,handler:async function(a){p(a),console.log("All response",a),alert("Payment Susscess",a.razorpay_payment_id),console.log("Payment ID",a.razorpay_payment_id),r="data from handle: payment success",e({status:!0,message:"Payment Success",data:a})},prefill:{name:o.name,email:o.email,contact:o.mobile},modal:{ondismiss:function(a){console.log("Payment Cancel BY user",a)},onfailed:function(a){console.log("Payment Failed Response modal",a)}},notes:{ulbId:o.ulbId||0,departmentId:o.departmentId||0,applicationId:o.applicationId||0,workflowId:o.workflowId||0,userId:o.userId||0,name:o.name||0,email:o.email||0,contact:o.mobile||0},theme:{color:"#3399cc"}},t=new window.Razorpay(s);return t.on("payment.failed",function(a){console.log("Failed Response",a),y(a),alert("Payment Failed"),e({status:!1,message:"Payment Failed",data:a})}),t.open(),r}const p=o=>{const e={razorpayOrderId:o.razorpay_order_id,razorpayPaymentId:o.razorpay_payment_id,razorpaySignature:o.razorpay_signature};n.post(i,e,l).then(r=>{console.log("2nd API Data saved ",r)}).catch(r=>{console.log("Error when inserting 2 api data ",r)})},y=o=>{const e={razorpayOrderId:o.error.metadata.order_id,razorpayPaymentId:o.error.metadata.payment_id,reason:o.error.reason,source:o.error.source,step:o.error.step,code:o.error.code,description:o.error.description};return n.post(i,e,l).then(r=>{console.log("2nd API Filed Data saved ",r)}).catch(r=>{console.log("Error when inserting 2 api Failed data ",r)}),m};export{m as R,I as p,P as r};
