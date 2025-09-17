// src/infrastructure/console-shim.js
(function () {
  const box = document.getElementById("console");
  if (!box) return;

  const write = (s) => { box.textContent += s; box.scrollTop = box.scrollHeight; };
  const writeLine = (s = "") => write(String(s).replace(/\r?\n$/, "") + "\n");

  // 1) Mirror console.log -> <pre> (covers any library paths that use console directly)
  const _log = console.log.bind(console);
  console.log = (...args) => {
    _log(...args);
    const msg = args.map(a => (typeof a === "string" ? a : String(a))).join(" ");
    if (!/live reload enabled\./i.test(msg)) writeLine(msg); // ignore Live Server ping
  };

  // 2) Wrap CodeHS-style print/println -> <pre>
  //    IMPORTANT: this runs AFTER the library defines them,
  //    so our wrappers see the final implementations.
  const _print = window.print;
  const _println = window.println;

  window.print = function (...args) {
    try { _print && _print.apply(this, args); } catch {}
    write(args.join(" "));
  };

  window.println = function (val = "") {
    try { _println && _println.call(this, val); } catch {}
    writeLine(val);
  };

  // 3) Echo prompt + answer (ensures readInt/readFloat/readLine always show up)
  const _prompt = window.prompt ? window.prompt.bind(window) : null;
  if (_prompt) {
    window.prompt = function (message, defaultValue) {
      const answer = _prompt(message, defaultValue);
      if (message != null) writeLine(message);
      if (answer !== null) writeLine(answer);
      return answer;
    };
  }
})();
