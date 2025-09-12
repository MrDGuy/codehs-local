// src/infrastructure/console-shim.js
(function () {
  const box = document.getElementById("console");

  function writeLine(...args) {
    const msg = args.join(" ");
    if (msg.includes("Live Reload Enabled")) return; // filter Live Server message
    box.textContent += msg + "\n";
    box.scrollTop = box.scrollHeight;
  }

  // Mirror console.log
  const _log = console.log.bind(console);
  console.log = (...args) => { _log(...args); writeLine(...args); };

  // Wrap CodeHS print/println
  const _print = window.print;
  const _println = window.println;

  window.print = function (...args) {
    try { _print && _print.apply(this, args); } catch {}
    writeLine(...args);
  };

  window.println = function (...args) {
    try { _println && _println.apply(this, args); } catch {}
    writeLine(...args);
  };
})();