function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var i=o("eWCmQ");function l(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setInterval((()=>{n?r({position:e,delay:t}):o({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();const n=t.currentTarget.elements;let r=Number(n.amount.value),o=Number(n.delay.value),u=Number(n.step.value);for(let t=1;t<=r;t++)l(t,o).then((({i:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({i:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),o+=u}));
//# sourceMappingURL=03-promises.78b2916b.js.map
