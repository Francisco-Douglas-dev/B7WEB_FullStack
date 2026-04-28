"use strict";

// 12. Promises com async/await
// async/await simplifica o uso de Promises, tornando o código mais legível e fácil de entender.
function buscarPost() {
  var resp, post;
  return regeneratorRuntime.async(function buscarPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://jsonplaceholder.typicode.com/posts/1'));

        case 3:
          resp = _context.sent;

          if (resp.ok) {
            _context.next = 6;
            break;
          }

          throw new Error("Erro na requisi\xE7\xE3o: ".concat(resp.status, " - ").concat(resp.statusText));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(resp.json());

        case 8:
          post = _context.sent;
          console.log("Post recebido:", post);
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error("Erro ao buscar o post:", _context.t0);

        case 15:
          _context.prev = 15;
          console.log("Operação concluída.");
          return _context.finish(15);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12, 15, 18]]);
}

buscarPost();