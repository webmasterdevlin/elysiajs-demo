(()=>{function e(e){if(e<=1)return!1;if(e<=3)return!0;if(e%2==0||e%3==0)return!1;let o=5;for(;o*o<=e;){if(e%o==0||e%(o+2)==0)return!1;o+=6}return!0}console.time("fibonacci");const o=function(e){let o=[0,1];for(let e=2;e<1e3;e++)o.push(o[e-1]+o[e-2]);return o}();console.timeEnd("fibonacci"),console.time("primeNumbers");const n=[];for(let r=0;r<o.length;r++)e(o[r])&&n.push(o[r]);console.timeEnd("primeNumbers"),console.time("factorial");const r=function(e){let o=1;for(let n=2;n<=e;n++)o*=n;return o}(1e3);console.timeEnd("factorial"),console.time("randomNumbers");const t=function(e){const o=[];for(let e=0;e<1e4;e++)o.push(Math.random());return o}();console.timeEnd("randomNumbers"),console.time("sortedNumbers"),t.sort(((e,o)=>e-o)),console.timeEnd("sortedNumbers"),console.time("reverseString");const s="Hello, World!".split("").reverse().join("");console.timeEnd("reverseString"),console.log("Prime numbers in Fibonacci sequence:",n),console.log("Factorial result:",r),console.log("Reversed string:",s)})();
//# sourceMappingURL=demo.js.map