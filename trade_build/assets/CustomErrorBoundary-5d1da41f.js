import{R as t,j as e}from"./index-07053450.js";class a extends t.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}render(){var r;return this.state.hasError?e.jsx("h1",{className:"text-red-600 text-lg font-semibold",children:(r=this.props)==null?void 0:r.errorMsg}):this.props.children}}export{a as C};
