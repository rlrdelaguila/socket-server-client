/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs4/jszip-2.5.0/dt-1.10.22/af-2.3.5/b-1.6.5/b-colvis-1.6.5/b-flash-1.6.5/b-html5-1.6.5/b-print-1.6.5/cr-1.5.2/fc-3.3.1/fh-3.1.7/kt-2.5.3/r-2.2.6/rg-1.1.2/rr-1.2.7/sc-2.0.3/sb-1.0.0/sp-1.2.1/sl-1.3.1
 *
 * Included libraries:
 *  JSZip 2.5.0, DataTables 1.10.22, AutoFill 2.3.5, Buttons 1.6.5, Column visibility 1.6.5, Flash export 1.6.5, HTML5 export 1.6.5, Print view 1.6.5, ColReorder 1.5.2, FixedColumns 3.3.1, FixedHeader 3.1.7, KeyTable 2.5.3, Responsive 2.2.6, RowGroup 1.1.2, RowReorder 1.2.7, Scroller 2.0.3, SearchBuilder 1.0.0, SearchPanes 1.2.1, Select 1.3.1
 */

/*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
! function (a) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
  else if ("function" == typeof define && define.amd) define([], a);
  else {
    var b;
    "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.JSZip = a()
  }
}(function () {
  return function a(b, c, d) {
    function e(g, h) {
      if (!c[g]) {
        if (!b[g]) {
          var i = "function" == typeof require && require;
          if (!h && i) return i(g, !0);
          if (f) return f(g, !0);
          throw new Error("Cannot find module '" + g + "'")
        }
        var j = c[g] = {
          exports: {}
        };
        b[g][0].call(j.exports, function (a) {
          var c = b[g][1][a];
          return e(c ? c : a)
        }, j, j.exports, a, b, c, d)
      }
      return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
  }({
    1: [function (a, b, c) {
      "use strict";
      var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function (a) {
        for (var b, c, e, f, g, h, i, j = "", k = 0; k < a.length;) b = a.charCodeAt(k++), c = a.charCodeAt(k++), e = a.charCodeAt(k++), f = b >> 2, g = (3 & b) << 4 | c >> 4, h = (15 & c) << 2 | e >> 6, i = 63 & e, isNaN(c) ? h = i = 64 : isNaN(e) && (i = 64), j = j + d.charAt(f) + d.charAt(g) + d.charAt(h) + d.charAt(i);
        return j
      }, c.decode = function (a) {
        var b, c, e, f, g, h, i, j = "",
          k = 0;
        for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;) f = d.indexOf(a.charAt(k++)), g = d.indexOf(a.charAt(k++)), h = d.indexOf(a.charAt(k++)), i = d.indexOf(a.charAt(k++)), b = f << 2 | g >> 4, c = (15 & g) << 4 | h >> 2, e = (3 & h) << 6 | i, j += String.fromCharCode(b), 64 != h && (j += String.fromCharCode(c)), 64 != i && (j += String.fromCharCode(e));
        return j
      }
    }, {}],
    2: [function (a, b) {
      "use strict";

      function c() {
        this.compressedSize = 0, this.uncompressedSize = 0, this.crc32 = 0, this.compressionMethod = null, this.compressedContent = null
      }
      c.prototype = {
        getContent: function () {
          return null
        },
        getCompressedContent: function () {
          return null
        }
      }, b.exports = c
    }, {}],
    3: [function (a, b, c) {
      "use strict";
      c.STORE = {
        magic: "\x00\x00",
        compress: function (a) {
          return a
        },
        uncompress: function (a) {
          return a
        },
        compressInputType: null,
        uncompressInputType: null
      }, c.DEFLATE = a("./flate")
    }, {
      "./flate": 8
    }],
    4: [function (a, b) {
      "use strict";
      var c = a("./utils"),
        d = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
      b.exports = function (a, b) {
        if ("undefined" == typeof a || !a.length) return 0;
        var e = "string" !== c.getTypeOf(a);
        "undefined" == typeof b && (b = 0);
        var f = 0,
          g = 0,
          h = 0;
        b = -1 ^ b;
        for (var i = 0, j = a.length; j > i; i++) h = e ? a[i] : a.charCodeAt(i), g = 255 & (b ^ h), f = d[g], b = b >>> 8 ^ f;
        return -1 ^ b
      }
    }, {
      "./utils": 21
    }],
    5: [function (a, b) {
      "use strict";

      function c() {
        this.data = null, this.length = 0, this.index = 0
      }
      var d = a("./utils");
      c.prototype = {
        checkOffset: function (a) {
          this.checkIndex(this.index + a)
        },
        checkIndex: function (a) {
          if (this.length < a || 0 > a) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?")
        },
        setIndex: function (a) {
          this.checkIndex(a), this.index = a
        },
        skip: function (a) {
          this.setIndex(this.index + a)
        },
        byteAt: function () {},
        readInt: function (a) {
          var b, c = 0;
          for (this.checkOffset(a), b = this.index + a - 1; b >= this.index; b--) c = (c << 8) + this.byteAt(b);
          return this.index += a, c
        },
        readString: function (a) {
          return d.transformTo("string", this.readData(a))
        },
        readData: function () {},
        lastIndexOfSignature: function () {},
        readDate: function () {
          var a = this.readInt(4);
          return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1)
        }
      }, b.exports = c
    }, {
      "./utils": 21
    }],
    6: [function (a, b, c) {
      "use strict";
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !1, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null
    }, {}],
    7: [function (a, b, c) {
      "use strict";
      var d = a("./utils");
      c.string2binary = function (a) {
        return d.string2binary(a)
      }, c.string2Uint8Array = function (a) {
        return d.transformTo("uint8array", a)
      }, c.uint8Array2String = function (a) {
        return d.transformTo("string", a)
      }, c.string2Blob = function (a) {
        var b = d.transformTo("arraybuffer", a);
        return d.arrayBuffer2Blob(b)
      }, c.arrayBuffer2Blob = function (a) {
        return d.arrayBuffer2Blob(a)
      }, c.transformTo = function (a, b) {
        return d.transformTo(a, b)
      }, c.getTypeOf = function (a) {
        return d.getTypeOf(a)
      }, c.checkSupport = function (a) {
        return d.checkSupport(a)
      }, c.MAX_VALUE_16BITS = d.MAX_VALUE_16BITS, c.MAX_VALUE_32BITS = d.MAX_VALUE_32BITS, c.pretty = function (a) {
        return d.pretty(a)
      }, c.findCompression = function (a) {
        return d.findCompression(a)
      }, c.isRegExp = function (a) {
        return d.isRegExp(a)
      }
    }, {
      "./utils": 21
    }],
    8: [function (a, b, c) {
      "use strict";
      var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
        e = a("pako");
      c.uncompressInputType = d ? "uint8array" : "array", c.compressInputType = d ? "uint8array" : "array", c.magic = "\b\x00", c.compress = function (a, b) {
        return e.deflateRaw(a, {
          level: b.level || -1
        })
      }, c.uncompress = function (a) {
        return e.inflateRaw(a)
      }
    }, {
      pako: 24
    }],
    9: [function (a, b) {
      "use strict";

      function c(a, b) {
        return this instanceof c ? (this.files = {}, this.comment = null, this.root = "", a && this.load(a, b), void(this.clone = function () {
          var a = new c;
          for (var b in this) "function" != typeof this[b] && (a[b] = this[b]);
          return a
        })) : new c(a, b)
      }
      var d = a("./base64");
      c.prototype = a("./object"), c.prototype.load = a("./load"), c.support = a("./support"), c.defaults = a("./defaults"), c.utils = a("./deprecatedPublicUtils"), c.base64 = {
        encode: function (a) {
          return d.encode(a)
        },
        decode: function (a) {
          return d.decode(a)
        }
      }, c.compressions = a("./compressions"), b.exports = c
    }, {
      "./base64": 1,
      "./compressions": 3,
      "./defaults": 6,
      "./deprecatedPublicUtils": 7,
      "./load": 10,
      "./object": 13,
      "./support": 17
    }],
    10: [function (a, b) {
      "use strict";
      var c = a("./base64"),
        d = a("./zipEntries");
      b.exports = function (a, b) {
        var e, f, g, h;
        for (b = b || {}, b.base64 && (a = c.decode(a)), f = new d(a, b), e = f.files, g = 0; g < e.length; g++) h = e[g], this.file(h.fileName, h.decompressed, {
          binary: !0,
          optimizedBinaryString: !0,
          date: h.date,
          dir: h.dir,
          comment: h.fileComment.length ? h.fileComment : null,
          unixPermissions: h.unixPermissions,
          dosPermissions: h.dosPermissions,
          createFolders: b.createFolders
        });
        return f.zipComment.length && (this.comment = f.zipComment), this
      }
    }, {
      "./base64": 1,
      "./zipEntries": 22
    }],
    11: [function (a, b) {
      (function (a) {
        "use strict";
        b.exports = function (b, c) {
          return new a(b, c)
        }, b.exports.test = function (b) {
          return a.isBuffer(b)
        }
      }).call(this, "undefined" != typeof Buffer ? Buffer : void 0)
    }, {}],
    12: [function (a, b) {
      "use strict";

      function c(a) {
        this.data = a, this.length = this.data.length, this.index = 0
      }
      var d = a("./uint8ArrayReader");
      c.prototype = new d, c.prototype.readData = function (a) {
        this.checkOffset(a);
        var b = this.data.slice(this.index, this.index + a);
        return this.index += a, b
      }, b.exports = c
    }, {
      "./uint8ArrayReader": 18
    }],
    13: [function (a, b) {
      "use strict";
      var c = a("./support"),
        d = a("./utils"),
        e = a("./crc32"),
        f = a("./signature"),
        g = a("./defaults"),
        h = a("./base64"),
        i = a("./compressions"),
        j = a("./compressedObject"),
        k = a("./nodeBuffer"),
        l = a("./utf8"),
        m = a("./stringWriter"),
        n = a("./uint8ArrayWriter"),
        o = function (a) {
          if (a._data instanceof j && (a._data = a._data.getContent(), a.options.binary = !0, a.options.base64 = !1, "uint8array" === d.getTypeOf(a._data))) {
            var b = a._data;
            a._data = new Uint8Array(b.length), 0 !== b.length && a._data.set(b, 0)
          }
          return a._data
        },
        p = function (a) {
          var b = o(a),
            e = d.getTypeOf(b);
          return "string" === e ? !a.options.binary && c.nodebuffer ? k(b, "utf-8") : a.asBinary() : b
        },
        q = function (a) {
          var b = o(this);
          return null === b || "undefined" == typeof b ? "" : (this.options.base64 && (b = h.decode(b)), b = a && this.options.binary ? D.utf8decode(b) : d.transformTo("string", b), a || this.options.binary || (b = d.transformTo("string", D.utf8encode(b))), b)
        },
        r = function (a, b, c) {
          this.name = a, this.dir = c.dir, this.date = c.date, this.comment = c.comment, this.unixPermissions = c.unixPermissions, this.dosPermissions = c.dosPermissions, this._data = b, this.options = c, this._initialMetadata = {
            dir: c.dir,
            date: c.date
          }
        };
      r.prototype = {
        asText: function () {
          return q.call(this, !0)
        },
        asBinary: function () {
          return q.call(this, !1)
        },
        asNodeBuffer: function () {
          var a = p(this);
          return d.transformTo("nodebuffer", a)
        },
        asUint8Array: function () {
          var a = p(this);
          return d.transformTo("uint8array", a)
        },
        asArrayBuffer: function () {
          return this.asUint8Array().buffer
        }
      };
      var s = function (a, b) {
          var c, d = "";
          for (c = 0; b > c; c++) d += String.fromCharCode(255 & a), a >>>= 8;
          return d
        },
        t = function () {
          var a, b, c = {};
          for (a = 0; a < arguments.length; a++)
            for (b in arguments[a]) arguments[a].hasOwnProperty(b) && "undefined" == typeof c[b] && (c[b] = arguments[a][b]);
          return c
        },
        u = function (a) {
          return a = a || {}, a.base64 !== !0 || null !== a.binary && void 0 !== a.binary || (a.binary = !0), a = t(a, g), a.date = a.date || new Date, null !== a.compression && (a.compression = a.compression.toUpperCase()), a
        },
        v = function (a, b, c) {
          var e, f = d.getTypeOf(b);
          if (c = u(c), "string" == typeof c.unixPermissions && (c.unixPermissions = parseInt(c.unixPermissions, 8)), c.unixPermissions && 16384 & c.unixPermissions && (c.dir = !0), c.dosPermissions && 16 & c.dosPermissions && (c.dir = !0), c.dir && (a = x(a)), c.createFolders && (e = w(a)) && y.call(this, e, !0), c.dir || null === b || "undefined" == typeof b) c.base64 = !1, c.binary = !1, b = null, f = null;
          else if ("string" === f) c.binary && !c.base64 && c.optimizedBinaryString !== !0 && (b = d.string2binary(b));
          else {
            if (c.base64 = !1, c.binary = !0, !(f || b instanceof j)) throw new Error("The data of '" + a + "' is in an unsupported format !");
            "arraybuffer" === f && (b = d.transformTo("uint8array", b))
          }
          var g = new r(a, b, c);
          return this.files[a] = g, g
        },
        w = function (a) {
          "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
          var b = a.lastIndexOf("/");
          return b > 0 ? a.substring(0, b) : ""
        },
        x = function (a) {
          return "/" != a.slice(-1) && (a += "/"), a
        },
        y = function (a, b) {
          return b = "undefined" != typeof b ? b : !1, a = x(a), this.files[a] || v.call(this, a, null, {
            dir: !0,
            createFolders: b
          }), this.files[a]
        },
        z = function (a, b, c) {
          var f, g = new j;
          return a._data instanceof j ? (g.uncompressedSize = a._data.uncompressedSize, g.crc32 = a._data.crc32, 0 === g.uncompressedSize || a.dir ? (b = i.STORE, g.compressedContent = "", g.crc32 = 0) : a._data.compressionMethod === b.magic ? g.compressedContent = a._data.getCompressedContent() : (f = a._data.getContent(), g.compressedContent = b.compress(d.transformTo(b.compressInputType, f), c))) : (f = p(a), (!f || 0 === f.length || a.dir) && (b = i.STORE, f = ""), g.uncompressedSize = f.length, g.crc32 = e(f), g.compressedContent = b.compress(d.transformTo(b.compressInputType, f), c)), g.compressedSize = g.compressedContent.length, g.compressionMethod = b.magic, g
        },
        A = function (a, b) {
          var c = a;
          return a || (c = b ? 16893 : 33204), (65535 & c) << 16
        },
        B = function (a) {
          return 63 & (a || 0)
        },
        C = function (a, b, c, g, h) {
          var i, j, k, m, n = (c.compressedContent, d.transformTo("string", l.utf8encode(b.name))),
            o = b.comment || "",
            p = d.transformTo("string", l.utf8encode(o)),
            q = n.length !== b.name.length,
            r = p.length !== o.length,
            t = b.options,
            u = "",
            v = "",
            w = "";
          k = b._initialMetadata.dir !== b.dir ? b.dir : t.dir, m = b._initialMetadata.date !== b.date ? b.date : t.date;
          var x = 0,
            y = 0;
          k && (x |= 16), "UNIX" === h ? (y = 798, x |= A(b.unixPermissions, k)) : (y = 20, x |= B(b.dosPermissions, k)), i = m.getHours(), i <<= 6, i |= m.getMinutes(), i <<= 5, i |= m.getSeconds() / 2, j = m.getFullYear() - 1980, j <<= 4, j |= m.getMonth() + 1, j <<= 5, j |= m.getDate(), q && (v = s(1, 1) + s(e(n), 4) + n, u += "up" + s(v.length, 2) + v), r && (w = s(1, 1) + s(this.crc32(p), 4) + p, u += "uc" + s(w.length, 2) + w);
          var z = "";
          z += "\n\x00", z += q || r ? "\x00\b" : "\x00\x00", z += c.compressionMethod, z += s(i, 2), z += s(j, 2), z += s(c.crc32, 4), z += s(c.compressedSize, 4), z += s(c.uncompressedSize, 4), z += s(n.length, 2), z += s(u.length, 2);
          var C = f.LOCAL_FILE_HEADER + z + n + u,
            D = f.CENTRAL_FILE_HEADER + s(y, 2) + z + s(p.length, 2) + "\x00\x00\x00\x00" + s(x, 4) + s(g, 4) + n + u + p;
          return {
            fileRecord: C,
            dirRecord: D,
            compressedObject: c
          }
        },
        D = {
          load: function () {
            throw new Error("Load method is not defined. Is the file jszip-load.js included ?")
          },
          filter: function (a) {
            var b, c, d, e, f = [];
            for (b in this.files) this.files.hasOwnProperty(b) && (d = this.files[b], e = new r(d.name, d._data, t(d.options)), c = b.slice(this.root.length, b.length), b.slice(0, this.root.length) === this.root && a(c, e) && f.push(e));
            return f
          },
          file: function (a, b, c) {
            if (1 === arguments.length) {
              if (d.isRegExp(a)) {
                var e = a;
                return this.filter(function (a, b) {
                  return !b.dir && e.test(a)
                })
              }
              return this.filter(function (b, c) {
                return !c.dir && b === a
              })[0] || null
            }
            return a = this.root + a, v.call(this, a, b, c), this
          },
          folder: function (a) {
            if (!a) return this;
            if (d.isRegExp(a)) return this.filter(function (b, c) {
              return c.dir && a.test(b)
            });
            var b = this.root + a,
              c = y.call(this, b),
              e = this.clone();
            return e.root = c.name, e
          },
          remove: function (a) {
            a = this.root + a;
            var b = this.files[a];
            if (b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]), b && !b.dir) delete this.files[a];
            else
              for (var c = this.filter(function (b, c) {
                  return c.name.slice(0, a.length) === a
                }), d = 0; d < c.length; d++) delete this.files[c[d].name];
            return this
          },
          generate: function (a) {
            a = t(a || {}, {
              base64: !0,
              compression: "STORE",
              compressionOptions: null,
              type: "base64",
              platform: "DOS",
              comment: null,
              mimeType: "application/zip"
            }), d.checkSupport(a.type), ("darwin" === a.platform || "freebsd" === a.platform || "linux" === a.platform || "sunos" === a.platform) && (a.platform = "UNIX"), "win32" === a.platform && (a.platform = "DOS");
            var b, c, e = [],
              g = 0,
              j = 0,
              k = d.transformTo("string", this.utf8encode(a.comment || this.comment || ""));
            for (var l in this.files)
              if (this.files.hasOwnProperty(l)) {
                var o = this.files[l],
                  p = o.options.compression || a.compression.toUpperCase(),
                  q = i[p];
                if (!q) throw new Error(p + " is not a valid compression method !");
                var r = o.options.compressionOptions || a.compressionOptions || {},
                  u = z.call(this, o, q, r),
                  v = C.call(this, l, o, u, g, a.platform);
                g += v.fileRecord.length + u.compressedSize, j += v.dirRecord.length, e.push(v)
              } var w = "";
            w = f.CENTRAL_DIRECTORY_END + "\x00\x00\x00\x00" + s(e.length, 2) + s(e.length, 2) + s(j, 4) + s(g, 4) + s(k.length, 2) + k;
            var x = a.type.toLowerCase();
            for (b = "uint8array" === x || "arraybuffer" === x || "blob" === x || "nodebuffer" === x ? new n(g + j + w.length) : new m(g + j + w.length), c = 0; c < e.length; c++) b.append(e[c].fileRecord), b.append(e[c].compressedObject.compressedContent);
            for (c = 0; c < e.length; c++) b.append(e[c].dirRecord);
            b.append(w);
            var y = b.finalize();
            switch (a.type.toLowerCase()) {
              case "uint8array":
              case "arraybuffer":
              case "nodebuffer":
                return d.transformTo(a.type.toLowerCase(), y);
              case "blob":
                return d.arrayBuffer2Blob(d.transformTo("arraybuffer", y), a.mimeType);
              case "base64":
                return a.base64 ? h.encode(y) : y;
              default:
                return y
            }
          },
          crc32: function (a, b) {
            return e(a, b)
          },
          utf8encode: function (a) {
            return d.transformTo("string", l.utf8encode(a))
          },
          utf8decode: function (a) {
            return l.utf8decode(a)
          }
        };
      b.exports = D
    }, {
      "./base64": 1,
      "./compressedObject": 2,
      "./compressions": 3,
      "./crc32": 4,
      "./defaults": 6,
      "./nodeBuffer": 11,
      "./signature": 14,
      "./stringWriter": 16,
      "./support": 17,
      "./uint8ArrayWriter": 19,
      "./utf8": 20,
      "./utils": 21
    }],
    14: [function (a, b, c) {
      "use strict";
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\b"
    }, {}],
    15: [function (a, b) {
      "use strict";

      function c(a, b) {
        this.data = a, b || (this.data = e.string2binary(this.data)), this.length = this.data.length, this.index = 0
      }
      var d = a("./dataReader"),
        e = a("./utils");
      c.prototype = new d, c.prototype.byteAt = function (a) {
        return this.data.charCodeAt(a)
      }, c.prototype.lastIndexOfSignature = function (a) {
        return this.data.lastIndexOf(a)
      }, c.prototype.readData = function (a) {
        this.checkOffset(a);
        var b = this.data.slice(this.index, this.index + a);
        return this.index += a, b
      }, b.exports = c
    }, {
      "./dataReader": 5,
      "./utils": 21
    }],
    16: [function (a, b) {
      "use strict";
      var c = a("./utils"),
        d = function () {
          this.data = []
        };
      d.prototype = {
        append: function (a) {
          a = c.transformTo("string", a), this.data.push(a)
        },
        finalize: function () {
          return this.data.join("")
        }
      }, b.exports = d
    }, {
      "./utils": 21
    }],
    17: [function (a, b, c) {
      (function (a) {
        "use strict";
        if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, c.nodebuffer = "undefined" != typeof a, c.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) c.blob = !1;
        else {
          var b = new ArrayBuffer(0);
          try {
            c.blob = 0 === new Blob([b], {
              type: "application/zip"
            }).size
          } catch (d) {
            try {
              var e = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                f = new e;
              f.append(b), c.blob = 0 === f.getBlob("application/zip").size
            } catch (d) {
              c.blob = !1
            }
          }
        }
      }).call(this, "undefined" != typeof Buffer ? Buffer : void 0)
    }, {}],
    18: [function (a, b) {
      "use strict";

      function c(a) {
        a && (this.data = a, this.length = this.data.length, this.index = 0)
      }
      var d = a("./dataReader");
      c.prototype = new d, c.prototype.byteAt = function (a) {
        return this.data[a]
      }, c.prototype.lastIndexOfSignature = function (a) {
        for (var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = this.length - 4; f >= 0; --f)
          if (this.data[f] === b && this.data[f + 1] === c && this.data[f + 2] === d && this.data[f + 3] === e) return f;
        return -1
      }, c.prototype.readData = function (a) {
        if (this.checkOffset(a), 0 === a) return new Uint8Array(0);
        var b = this.data.subarray(this.index, this.index + a);
        return this.index += a, b
      }, b.exports = c
    }, {
      "./dataReader": 5
    }],
    19: [function (a, b) {
      "use strict";
      var c = a("./utils"),
        d = function (a) {
          this.data = new Uint8Array(a), this.index = 0
        };
      d.prototype = {
        append: function (a) {
          0 !== a.length && (a = c.transformTo("uint8array", a), this.data.set(a, this.index), this.index += a.length)
        },
        finalize: function () {
          return this.data
        }
      }, b.exports = d
    }, {
      "./utils": 21
    }],
    20: [function (a, b, c) {
      "use strict";
      for (var d = a("./utils"), e = a("./support"), f = a("./nodeBuffer"), g = new Array(256), h = 0; 256 > h; h++) g[h] = h >= 252 ? 6 : h >= 248 ? 5 : h >= 240 ? 4 : h >= 224 ? 3 : h >= 192 ? 2 : 1;
      g[254] = g[254] = 1;
      var i = function (a) {
          var b, c, d, f, g, h = a.length,
            i = 0;
          for (f = 0; h > f; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4;
          for (b = e.uint8array ? new Uint8Array(i) : new Array(i), g = 0, f = 0; i > g; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), 128 > c ? b[g++] = c : 2048 > c ? (b[g++] = 192 | c >>> 6, b[g++] = 128 | 63 & c) : 65536 > c ? (b[g++] = 224 | c >>> 12, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c) : (b[g++] = 240 | c >>> 18, b[g++] = 128 | c >>> 12 & 63, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c);
          return b
        },
        j = function (a, b) {
          var c;
          for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]);) c--;
          return 0 > c ? b : 0 === c ? b : c + g[a[c]] > b ? c : b
        },
        k = function (a) {
          var b, c, e, f, h = a.length,
            i = new Array(2 * h);
          for (c = 0, b = 0; h > b;)
            if (e = a[b++], 128 > e) i[c++] = e;
            else if (f = g[e], f > 4) i[c++] = 65533, b += f - 1;
          else {
            for (e &= 2 === f ? 31 : 3 === f ? 15 : 7; f > 1 && h > b;) e = e << 6 | 63 & a[b++], f--;
            f > 1 ? i[c++] = 65533 : 65536 > e ? i[c++] = e : (e -= 65536, i[c++] = 55296 | e >> 10 & 1023, i[c++] = 56320 | 1023 & e)
          }
          return i.length !== c && (i.subarray ? i = i.subarray(0, c) : i.length = c), d.applyFromCharCode(i)
        };
      c.utf8encode = function (a) {
        return e.nodebuffer ? f(a, "utf-8") : i(a)
      }, c.utf8decode = function (a) {
        if (e.nodebuffer) return d.transformTo("nodebuffer", a).toString("utf-8");
        a = d.transformTo(e.uint8array ? "uint8array" : "array", a);
        for (var b = [], c = 0, f = a.length, g = 65536; f > c;) {
          var h = j(a, Math.min(c + g, f));
          b.push(e.uint8array ? k(a.subarray(c, h)) : k(a.slice(c, h))), c = h
        }
        return b.join("")
      }
    }, {
      "./nodeBuffer": 11,
      "./support": 17,
      "./utils": 21
    }],
    21: [function (a, b, c) {
      "use strict";

      function d(a) {
        return a
      }

      function e(a, b) {
        for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c);
        return b
      }

      function f(a) {
        var b = 65536,
          d = [],
          e = a.length,
          f = c.getTypeOf(a),
          g = 0,
          h = !0;
        try {
          switch (f) {
            case "uint8array":
              String.fromCharCode.apply(null, new Uint8Array(0));
              break;
            case "nodebuffer":
              String.fromCharCode.apply(null, j(0))
          }
        } catch (i) {
          h = !1
        }
        if (!h) {
          for (var k = "", l = 0; l < a.length; l++) k += String.fromCharCode(a[l]);
          return k
        }
        for (; e > g && b > 1;) try {
          d.push("array" === f || "nodebuffer" === f ? String.fromCharCode.apply(null, a.slice(g, Math.min(g + b, e))) : String.fromCharCode.apply(null, a.subarray(g, Math.min(g + b, e)))), g += b
        } catch (i) {
          b = Math.floor(b / 2)
        }
        return d.join("")
      }

      function g(a, b) {
        for (var c = 0; c < a.length; c++) b[c] = a[c];
        return b
      }
      var h = a("./support"),
        i = a("./compressions"),
        j = a("./nodeBuffer");
      c.string2binary = function (a) {
        for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(255 & a.charCodeAt(c));
        return b
      }, c.arrayBuffer2Blob = function (a, b) {
        c.checkSupport("blob"), b = b || "application/zip";
        try {
          return new Blob([a], {
            type: b
          })
        } catch (d) {
          try {
            var e = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
              f = new e;
            return f.append(a), f.getBlob(b)
          } catch (d) {
            throw new Error("Bug : can't construct the Blob.")
          }
        }
      }, c.applyFromCharCode = f;
      var k = {};
      k.string = {
        string: d,
        array: function (a) {
          return e(a, new Array(a.length))
        },
        arraybuffer: function (a) {
          return k.string.uint8array(a).buffer
        },
        uint8array: function (a) {
          return e(a, new Uint8Array(a.length))
        },
        nodebuffer: function (a) {
          return e(a, j(a.length))
        }
      }, k.array = {
        string: f,
        array: d,
        arraybuffer: function (a) {
          return new Uint8Array(a).buffer
        },
        uint8array: function (a) {
          return new Uint8Array(a)
        },
        nodebuffer: function (a) {
          return j(a)
        }
      }, k.arraybuffer = {
        string: function (a) {
          return f(new Uint8Array(a))
        },
        array: function (a) {
          return g(new Uint8Array(a), new Array(a.byteLength))
        },
        arraybuffer: d,
        uint8array: function (a) {
          return new Uint8Array(a)
        },
        nodebuffer: function (a) {
          return j(new Uint8Array(a))
        }
      }, k.uint8array = {
        string: f,
        array: function (a) {
          return g(a, new Array(a.length))
        },
        arraybuffer: function (a) {
          return a.buffer
        },
        uint8array: d,
        nodebuffer: function (a) {
          return j(a)
        }
      }, k.nodebuffer = {
        string: f,
        array: function (a) {
          return g(a, new Array(a.length))
        },
        arraybuffer: function (a) {
          return k.nodebuffer.uint8array(a).buffer
        },
        uint8array: function (a) {
          return g(a, new Uint8Array(a.length))
        },
        nodebuffer: d
      }, c.transformTo = function (a, b) {
        if (b || (b = ""), !a) return b;
        c.checkSupport(a);
        var d = c.getTypeOf(b),
          e = k[d][a](b);
        return e
      }, c.getTypeOf = function (a) {
        return "string" == typeof a ? "string" : "[object Array]" === Object.prototype.toString.call(a) ? "array" : h.nodebuffer && j.test(a) ? "nodebuffer" : h.uint8array && a instanceof Uint8Array ? "uint8array" : h.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0
      }, c.checkSupport = function (a) {
        var b = h[a.toLowerCase()];
        if (!b) throw new Error(a + " is not supported by this browser")
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function (a) {
        var b, c, d = "";
        for (c = 0; c < (a || "").length; c++) b = a.charCodeAt(c), d += "\\x" + (16 > b ? "0" : "") + b.toString(16).toUpperCase();
        return d
      }, c.findCompression = function (a) {
        for (var b in i)
          if (i.hasOwnProperty(b) && i[b].magic === a) return i[b];
        return null
      }, c.isRegExp = function (a) {
        return "[object RegExp]" === Object.prototype.toString.call(a)
      }
    }, {
      "./compressions": 3,
      "./nodeBuffer": 11,
      "./support": 17
    }],
    22: [function (a, b) {
      "use strict";

      function c(a, b) {
        this.files = [], this.loadOptions = b, a && this.load(a)
      }
      var d = a("./stringReader"),
        e = a("./nodeBufferReader"),
        f = a("./uint8ArrayReader"),
        g = a("./utils"),
        h = a("./signature"),
        i = a("./zipEntry"),
        j = a("./support"),
        k = a("./object");
      c.prototype = {
        checkSignature: function (a) {
          var b = this.reader.readString(4);
          if (b !== a) throw new Error("Corrupted zip or bug : unexpected signature (" + g.pretty(b) + ", expected " + g.pretty(a) + ")")
        },
        readBlockEndOfCentral: function () {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2), this.zipComment = this.reader.readString(this.zipCommentLength), this.zipComment = k.utf8decode(this.zipComment)
        },
        readBlockZip64EndOfCentral: function () {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.versionMadeBy = this.reader.readString(2), this.versionNeeded = this.reader.readInt(2), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var a, b, c, d = this.zip64EndOfCentralSize - 44, e = 0; d > e;) a = this.reader.readInt(2), b = this.reader.readInt(4), c = this.reader.readString(b), this.zip64ExtensibleData[a] = {
            id: a,
            length: b,
            value: c
          }
        },
        readBlockZip64EndOfCentralLocator: function () {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error("Multi-volumes zip are not supported")
        },
        readLocalFiles: function () {
          var a, b;
          for (a = 0; a < this.files.length; a++) b = this.files[a], this.reader.setIndex(b.localHeaderOffset), this.checkSignature(h.LOCAL_FILE_HEADER), b.readLocalPart(this.reader), b.handleUTF8(), b.processAttributes()
        },
        readCentralDir: function () {
          var a;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === h.CENTRAL_FILE_HEADER;) a = new i({
            zip64: this.zip64
          }, this.loadOptions), a.readCentralPart(this.reader), this.files.push(a)
        },
        readEndOfCentral: function () {
          var a = this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);
          if (-1 === a) {
            var b = !0;
            try {
              this.reader.setIndex(0), this.checkSignature(h.LOCAL_FILE_HEADER), b = !1
            } catch (c) {}
            throw new Error(b ? "Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html" : "Corrupted zip : can't find end of central directory")
          }
          if (this.reader.setIndex(a), this.checkSignature(h.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === g.MAX_VALUE_16BITS || this.diskWithCentralDirStart === g.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === g.MAX_VALUE_16BITS || this.centralDirRecords === g.MAX_VALUE_16BITS || this.centralDirSize === g.MAX_VALUE_32BITS || this.centralDirOffset === g.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, a = this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR), -1 === a) throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
            this.reader.setIndex(a), this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
          }
        },
        prepareReader: function (a) {
          var b = g.getTypeOf(a);
          this.reader = "string" !== b || j.uint8array ? "nodebuffer" === b ? new e(a) : new f(g.transformTo("uint8array", a)) : new d(a, this.loadOptions.optimizedBinaryString)
        },
        load: function (a) {
          this.prepareReader(a), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
        }
      }, b.exports = c
    }, {
      "./nodeBufferReader": 12,
      "./object": 13,
      "./signature": 14,
      "./stringReader": 15,
      "./support": 17,
      "./uint8ArrayReader": 18,
      "./utils": 21,
      "./zipEntry": 23
    }],
    23: [function (a, b) {
      "use strict";

      function c(a, b) {
        this.options = a, this.loadOptions = b
      }
      var d = a("./stringReader"),
        e = a("./utils"),
        f = a("./compressedObject"),
        g = a("./object"),
        h = 0,
        i = 3;
      c.prototype = {
        isEncrypted: function () {
          return 1 === (1 & this.bitFlag)
        },
        useUTF8: function () {
          return 2048 === (2048 & this.bitFlag)
        },
        prepareCompressedContent: function (a, b, c) {
          return function () {
            var d = a.index;
            a.setIndex(b);
            var e = a.readData(c);
            return a.setIndex(d), e
          }
        },
        prepareContent: function (a, b, c, d, f) {
          return function () {
            var a = e.transformTo(d.uncompressInputType, this.getCompressedContent()),
              b = d.uncompress(a);
            if (b.length !== f) throw new Error("Bug : uncompressed data size mismatch");
            return b
          }
        },
        readLocalPart: function (a) {
          var b, c;
          if (a.skip(22), this.fileNameLength = a.readInt(2), c = a.readInt(2), this.fileName = a.readString(this.fileNameLength), a.skip(c), -1 == this.compressedSize || -1 == this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
          if (b = e.findCompression(this.compressionMethod), null === b) throw new Error("Corrupted zip : compression " + e.pretty(this.compressionMethod) + " unknown (inner file : " + this.fileName + ")");
          if (this.decompressed = new f, this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(a, a.index, this.compressedSize, b), this.decompressed.getContent = this.prepareContent(a, a.index, this.compressedSize, b, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = e.transformTo("string", this.decompressed.getContent()), g.crc32(this.decompressed) !== this.crc32)) throw new Error("Corrupted zip : CRC32 mismatch")
        },
        readCentralPart: function (a) {
          if (this.versionMadeBy = a.readInt(2), this.versionNeeded = a.readInt(2), this.bitFlag = a.readInt(2), this.compressionMethod = a.readString(2), this.date = a.readDate(), this.crc32 = a.readInt(4), this.compressedSize = a.readInt(4), this.uncompressedSize = a.readInt(4), this.fileNameLength = a.readInt(2), this.extraFieldsLength = a.readInt(2), this.fileCommentLength = a.readInt(2), this.diskNumberStart = a.readInt(2), this.internalFileAttributes = a.readInt(2), this.externalFileAttributes = a.readInt(4), this.localHeaderOffset = a.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          this.fileName = a.readString(this.fileNameLength), this.readExtraFields(a), this.parseZIP64ExtraField(a), this.fileComment = a.readString(this.fileCommentLength)
        },
        processAttributes: function () {
          this.unixPermissions = null, this.dosPermissions = null;
          var a = this.versionMadeBy >> 8;
          this.dir = 16 & this.externalFileAttributes ? !0 : !1, a === h && (this.dosPermissions = 63 & this.externalFileAttributes), a === i && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileName.slice(-1) || (this.dir = !0)
        },
        parseZIP64ExtraField: function () {
          if (this.extraFields[1]) {
            var a = new d(this.extraFields[1].value);
            this.uncompressedSize === e.MAX_VALUE_32BITS && (this.uncompressedSize = a.readInt(8)), this.compressedSize === e.MAX_VALUE_32BITS && (this.compressedSize = a.readInt(8)), this.localHeaderOffset === e.MAX_VALUE_32BITS && (this.localHeaderOffset = a.readInt(8)), this.diskNumberStart === e.MAX_VALUE_32BITS && (this.diskNumberStart = a.readInt(4))
          }
        },
        readExtraFields: function (a) {
          var b, c, d, e = a.index;
          for (this.extraFields = this.extraFields || {}; a.index < e + this.extraFieldsLength;) b = a.readInt(2), c = a.readInt(2), d = a.readString(c), this.extraFields[b] = {
            id: b,
            length: c,
            value: d
          }
        },
        handleUTF8: function () {
          if (this.useUTF8()) this.fileName = g.utf8decode(this.fileName), this.fileComment = g.utf8decode(this.fileComment);
          else {
            var a = this.findExtraFieldUnicodePath();
            null !== a && (this.fileName = a);
            var b = this.findExtraFieldUnicodeComment();
            null !== b && (this.fileComment = b)
          }
        },
        findExtraFieldUnicodePath: function () {
          var a = this.extraFields[28789];
          if (a) {
            var b = new d(a.value);
            return 1 !== b.readInt(1) ? null : g.crc32(this.fileName) !== b.readInt(4) ? null : g.utf8decode(b.readString(a.length - 5))
          }
          return null
        },
        findExtraFieldUnicodeComment: function () {
          var a = this.extraFields[25461];
          if (a) {
            var b = new d(a.value);
            return 1 !== b.readInt(1) ? null : g.crc32(this.fileComment) !== b.readInt(4) ? null : g.utf8decode(b.readString(a.length - 5))
          }
          return null
        }
      }, b.exports = c
    }, {
      "./compressedObject": 2,
      "./object": 13,
      "./stringReader": 15,
      "./utils": 21
    }],
    24: [function (a, b) {
      "use strict";
      var c = a("./lib/utils/common").assign,
        d = a("./lib/deflate"),
        e = a("./lib/inflate"),
        f = a("./lib/zlib/constants"),
        g = {};
      c(g, d, e, f), b.exports = g
    }, {
      "./lib/deflate": 25,
      "./lib/inflate": 26,
      "./lib/utils/common": 27,
      "./lib/zlib/constants": 30
    }],
    25: [function (a, b, c) {
      "use strict";

      function d(a, b) {
        var c = new s(b);
        if (c.push(a, !0), c.err) throw c.msg;
        return c.result
      }

      function e(a, b) {
        return b = b || {}, b.raw = !0, d(a, b)
      }

      function f(a, b) {
        return b = b || {}, b.gzip = !0, d(a, b)
      }
      var g = a("./zlib/deflate.js"),
        h = a("./utils/common"),
        i = a("./utils/strings"),
        j = a("./zlib/messages"),
        k = a("./zlib/zstream"),
        l = 0,
        m = 4,
        n = 0,
        o = 1,
        p = -1,
        q = 0,
        r = 8,
        s = function (a) {
          this.options = h.assign({
            level: p,
            method: r,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: q,
            to: ""
          }, a || {});
          var b = this.options;
          b.raw && b.windowBits > 0 ? b.windowBits = -b.windowBits : b.gzip && b.windowBits > 0 && b.windowBits < 16 && (b.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new k, this.strm.avail_out = 0;
          var c = g.deflateInit2(this.strm, b.level, b.method, b.windowBits, b.memLevel, b.strategy);
          if (c !== n) throw new Error(j[c]);
          b.header && g.deflateSetHeader(this.strm, b.header)
        };
      s.prototype.push = function (a, b) {
        var c, d, e = this.strm,
          f = this.options.chunkSize;
        if (this.ended) return !1;
        d = b === ~~b ? b : b === !0 ? m : l, e.input = "string" == typeof a ? i.string2buf(a) : a, e.next_in = 0, e.avail_in = e.input.length;
        do {
          if (0 === e.avail_out && (e.output = new h.Buf8(f), e.next_out = 0, e.avail_out = f), c = g.deflate(e, d), c !== o && c !== n) return this.onEnd(c), this.ended = !0, !1;
          (0 === e.avail_out || 0 === e.avail_in && d === m) && this.onData("string" === this.options.to ? i.buf2binstring(h.shrinkBuf(e.output, e.next_out)) : h.shrinkBuf(e.output, e.next_out))
        } while ((e.avail_in > 0 || 0 === e.avail_out) && c !== o);
        return d === m ? (c = g.deflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === n) : !0
      }, s.prototype.onData = function (a) {
        this.chunks.push(a)
      }, s.prototype.onEnd = function (a) {
        a === n && (this.result = "string" === this.options.to ? this.chunks.join("") : h.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg
      }, c.Deflate = s, c.deflate = d, c.deflateRaw = e, c.gzip = f
    }, {
      "./utils/common": 27,
      "./utils/strings": 28,
      "./zlib/deflate.js": 32,
      "./zlib/messages": 37,
      "./zlib/zstream": 39
    }],
    26: [function (a, b, c) {
      "use strict";

      function d(a, b) {
        var c = new m(b);
        if (c.push(a, !0), c.err) throw c.msg;
        return c.result
      }

      function e(a, b) {
        return b = b || {}, b.raw = !0, d(a, b)
      }
      var f = a("./zlib/inflate.js"),
        g = a("./utils/common"),
        h = a("./utils/strings"),
        i = a("./zlib/constants"),
        j = a("./zlib/messages"),
        k = a("./zlib/zstream"),
        l = a("./zlib/gzheader"),
        m = function (a) {
          this.options = g.assign({
            chunkSize: 16384,
            windowBits: 0,
            to: ""
          }, a || {});
          var b = this.options;
          b.raw && b.windowBits >= 0 && b.windowBits < 16 && (b.windowBits = -b.windowBits, 0 === b.windowBits && (b.windowBits = -15)), !(b.windowBits >= 0 && b.windowBits < 16) || a && a.windowBits || (b.windowBits += 32), b.windowBits > 15 && b.windowBits < 48 && 0 === (15 & b.windowBits) && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new k, this.strm.avail_out = 0;
          var c = f.inflateInit2(this.strm, b.windowBits);
          if (c !== i.Z_OK) throw new Error(j[c]);
          this.header = new l, f.inflateGetHeader(this.strm, this.header)
        };
      m.prototype.push = function (a, b) {
        var c, d, e, j, k, l = this.strm,
          m = this.options.chunkSize;
        if (this.ended) return !1;
        d = b === ~~b ? b : b === !0 ? i.Z_FINISH : i.Z_NO_FLUSH, l.input = "string" == typeof a ? h.binstring2buf(a) : a, l.next_in = 0, l.avail_in = l.input.length;
        do {
          if (0 === l.avail_out && (l.output = new g.Buf8(m), l.next_out = 0, l.avail_out = m), c = f.inflate(l, i.Z_NO_FLUSH), c !== i.Z_STREAM_END && c !== i.Z_OK) return this.onEnd(c), this.ended = !0, !1;
          l.next_out && (0 === l.avail_out || c === i.Z_STREAM_END || 0 === l.avail_in && d === i.Z_FINISH) && ("string" === this.options.to ? (e = h.utf8border(l.output, l.next_out), j = l.next_out - e, k = h.buf2string(l.output, e), l.next_out = j, l.avail_out = m - j, j && g.arraySet(l.output, l.output, e, j, 0), this.onData(k)) : this.onData(g.shrinkBuf(l.output, l.next_out)))
        } while (l.avail_in > 0 && c !== i.Z_STREAM_END);
        return c === i.Z_STREAM_END && (d = i.Z_FINISH), d === i.Z_FINISH ? (c = f.inflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === i.Z_OK) : !0
      }, m.prototype.onData = function (a) {
        this.chunks.push(a)
      }, m.prototype.onEnd = function (a) {
        a === i.Z_OK && (this.result = "string" === this.options.to ? this.chunks.join("") : g.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg
      }, c.Inflate = m, c.inflate = d, c.inflateRaw = e, c.ungzip = d
    }, {
      "./utils/common": 27,
      "./utils/strings": 28,
      "./zlib/constants": 30,
      "./zlib/gzheader": 33,
      "./zlib/inflate.js": 35,
      "./zlib/messages": 37,
      "./zlib/zstream": 39
    }],
    27: [function (a, b, c) {
      "use strict";
      var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
      c.assign = function (a) {
        for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
          var c = b.shift();
          if (c) {
            if ("object" != typeof c) throw new TypeError(c + "must be non-object");
            for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
          }
        }
        return a
      }, c.shrinkBuf = function (a, b) {
        return a.length === b ? a : a.subarray ? a.subarray(0, b) : (a.length = b, a)
      };
      var e = {
          arraySet: function (a, b, c, d, e) {
            if (b.subarray && a.subarray) return void a.set(b.subarray(c, c + d), e);
            for (var f = 0; d > f; f++) a[e + f] = b[c + f]
          },
          flattenChunks: function (a) {
            var b, c, d, e, f, g;
            for (d = 0, b = 0, c = a.length; c > b; b++) d += a[b].length;
            for (g = new Uint8Array(d), e = 0, b = 0, c = a.length; c > b; b++) f = a[b], g.set(f, e), e += f.length;
            return g
          }
        },
        f = {
          arraySet: function (a, b, c, d, e) {
            for (var f = 0; d > f; f++) a[e + f] = b[c + f]
          },
          flattenChunks: function (a) {
            return [].concat.apply([], a)
          }
        };
      c.setTyped = function (a) {
        a ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, e)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, f))
      }, c.setTyped(d)
    }, {}],
    28: [function (a, b, c) {
      "use strict";

      function d(a, b) {
        if (65537 > b && (a.subarray && g || !a.subarray && f)) return String.fromCharCode.apply(null, e.shrinkBuf(a, b));
        for (var c = "", d = 0; b > d; d++) c += String.fromCharCode(a[d]);
        return c
      }
      var e = a("./common"),
        f = !0,
        g = !0;
      try {
        String.fromCharCode.apply(null, [0])
      } catch (h) {
        f = !1
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1))
      } catch (h) {
        g = !1
      }
      for (var i = new e.Buf8(256), j = 0; 256 > j; j++) i[j] = j >= 252 ? 6 : j >= 248 ? 5 : j >= 240 ? 4 : j >= 224 ? 3 : j >= 192 ? 2 : 1;
      i[254] = i[254] = 1, c.string2buf = function (a) {
        var b, c, d, f, g, h = a.length,
          i = 0;
        for (f = 0; h > f; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), i += 128 > c ? 1 : 2048 > c ? 2 : 65536 > c ? 3 : 4;
        for (b = new e.Buf8(i), g = 0, f = 0; i > g; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && h > f + 1 && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), 128 > c ? b[g++] = c : 2048 > c ? (b[g++] = 192 | c >>> 6, b[g++] = 128 | 63 & c) : 65536 > c ? (b[g++] = 224 | c >>> 12, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c) : (b[g++] = 240 | c >>> 18, b[g++] = 128 | c >>> 12 & 63, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c);
        return b
      }, c.buf2binstring = function (a) {
        return d(a, a.length)
      }, c.binstring2buf = function (a) {
        for (var b = new e.Buf8(a.length), c = 0, d = b.length; d > c; c++) b[c] = a.charCodeAt(c);
        return b
      }, c.buf2string = function (a, b) {
        var c, e, f, g, h = b || a.length,
          j = new Array(2 * h);
        for (e = 0, c = 0; h > c;)
          if (f = a[c++], 128 > f) j[e++] = f;
          else if (g = i[f], g > 4) j[e++] = 65533, c += g - 1;
        else {
          for (f &= 2 === g ? 31 : 3 === g ? 15 : 7; g > 1 && h > c;) f = f << 6 | 63 & a[c++], g--;
          g > 1 ? j[e++] = 65533 : 65536 > f ? j[e++] = f : (f -= 65536, j[e++] = 55296 | f >> 10 & 1023, j[e++] = 56320 | 1023 & f)
        }
        return d(j, e)
      }, c.utf8border = function (a, b) {
        var c;
        for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]);) c--;
        return 0 > c ? b : 0 === c ? b : c + i[a[c]] > b ? c : b
      }
    }, {
      "./common": 27
    }],
    29: [function (a, b) {
      "use strict";

      function c(a, b, c, d) {
        for (var e = 65535 & a | 0, f = a >>> 16 & 65535 | 0, g = 0; 0 !== c;) {
          g = c > 2e3 ? 2e3 : c, c -= g;
          do e = e + b[d++] | 0, f = f + e | 0; while (--g);
          e %= 65521, f %= 65521
        }
        return e | f << 16 | 0
      }
      b.exports = c
    }, {}],
    30: [function (a, b) {
      b.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      }
    }, {}],
    31: [function (a, b) {
      "use strict";

      function c() {
        for (var a, b = [], c = 0; 256 > c; c++) {
          a = c;
          for (var d = 0; 8 > d; d++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          b[c] = a
        }
        return b
      }

      function d(a, b, c, d) {
        var f = e,
          g = d + c;
        a = -1 ^ a;
        for (var h = d; g > h; h++) a = a >>> 8 ^ f[255 & (a ^ b[h])];
        return -1 ^ a
      }
      var e = c();
      b.exports = d
    }, {}],
    32: [function (a, b, c) {
      "use strict";

      function d(a, b) {
        return a.msg = G[b], b
      }

      function e(a) {
        return (a << 1) - (a > 4 ? 9 : 0)
      }

      function f(a) {
        for (var b = a.length; --b >= 0;) a[b] = 0
      }

      function g(a) {
        var b = a.state,
          c = b.pending;
        c > a.avail_out && (c = a.avail_out), 0 !== c && (C.arraySet(a.output, b.pending_buf, b.pending_out, c, a.next_out), a.next_out += c, b.pending_out += c, a.total_out += c, a.avail_out -= c, b.pending -= c, 0 === b.pending && (b.pending_out = 0))
      }

      function h(a, b) {
        D._tr_flush_block(a, a.block_start >= 0 ? a.block_start : -1, a.strstart - a.block_start, b), a.block_start = a.strstart, g(a.strm)
      }

      function i(a, b) {
        a.pending_buf[a.pending++] = b
      }

      function j(a, b) {
        a.pending_buf[a.pending++] = b >>> 8 & 255, a.pending_buf[a.pending++] = 255 & b
      }

      function k(a, b, c, d) {
        var e = a.avail_in;
        return e > d && (e = d), 0 === e ? 0 : (a.avail_in -= e, C.arraySet(b, a.input, a.next_in, e, c), 1 === a.state.wrap ? a.adler = E(a.adler, b, e, c) : 2 === a.state.wrap && (a.adler = F(a.adler, b, e, c)), a.next_in += e, a.total_in += e, e)
      }

      function l(a, b) {
        var c, d, e = a.max_chain_length,
          f = a.strstart,
          g = a.prev_length,
          h = a.nice_match,
          i = a.strstart > a.w_size - jb ? a.strstart - (a.w_size - jb) : 0,
          j = a.window,
          k = a.w_mask,
          l = a.prev,
          m = a.strstart + ib,
          n = j[f + g - 1],
          o = j[f + g];
        a.prev_length >= a.good_match && (e >>= 2), h > a.lookahead && (h = a.lookahead);
        do
          if (c = b, j[c + g] === o && j[c + g - 1] === n && j[c] === j[f] && j[++c] === j[f + 1]) {
            f += 2, c++;
            do; while (j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && m > f);
            if (d = ib - (m - f), f = m - ib, d > g) {
              if (a.match_start = b, g = d, d >= h) break;
              n = j[f + g - 1], o = j[f + g]
            }
          } while ((b = l[b & k]) > i && 0 !== --e);
        return g <= a.lookahead ? g : a.lookahead
      }

      function m(a) {
        var b, c, d, e, f, g = a.w_size;
        do {
          if (e = a.window_size - a.lookahead - a.strstart, a.strstart >= g + (g - jb)) {
            C.arraySet(a.window, a.window, g, g, 0), a.match_start -= g, a.strstart -= g, a.block_start -= g, c = a.hash_size, b = c;
            do d = a.head[--b], a.head[b] = d >= g ? d - g : 0; while (--c);
            c = g, b = c;
            do d = a.prev[--b], a.prev[b] = d >= g ? d - g : 0; while (--c);
            e += g
          }
          if (0 === a.strm.avail_in) break;
          if (c = k(a.strm, a.window, a.strstart + a.lookahead, e), a.lookahead += c, a.lookahead + a.insert >= hb)
            for (f = a.strstart - a.insert, a.ins_h = a.window[f], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[f + 1]) & a.hash_mask; a.insert && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[f + hb - 1]) & a.hash_mask, a.prev[f & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = f, f++, a.insert--, !(a.lookahead + a.insert < hb)););
        } while (a.lookahead < jb && 0 !== a.strm.avail_in)
      }

      function n(a, b) {
        var c = 65535;
        for (c > a.pending_buf_size - 5 && (c = a.pending_buf_size - 5);;) {
          if (a.lookahead <= 1) {
            if (m(a), 0 === a.lookahead && b === H) return sb;
            if (0 === a.lookahead) break
          }
          a.strstart += a.lookahead, a.lookahead = 0;
          var d = a.block_start + c;
          if ((0 === a.strstart || a.strstart >= d) && (a.lookahead = a.strstart - d, a.strstart = d, h(a, !1), 0 === a.strm.avail_out)) return sb;
          if (a.strstart - a.block_start >= a.w_size - jb && (h(a, !1), 0 === a.strm.avail_out)) return sb
        }
        return a.insert = 0, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.strstart > a.block_start && (h(a, !1), 0 === a.strm.avail_out) ? sb : sb
      }

      function o(a, b) {
        for (var c, d;;) {
          if (a.lookahead < jb) {
            if (m(a), a.lookahead < jb && b === H) return sb;
            if (0 === a.lookahead) break
          }
          if (c = 0, a.lookahead >= hb && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + hb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), 0 !== c && a.strstart - c <= a.w_size - jb && (a.match_length = l(a, c)), a.match_length >= hb)
            if (d = D._tr_tally(a, a.strstart - a.match_start, a.match_length - hb), a.lookahead -= a.match_length, a.match_length <= a.max_lazy_match && a.lookahead >= hb) {
              a.match_length--;
              do a.strstart++, a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + hb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart; while (0 !== --a.match_length);
              a.strstart++
            } else a.strstart += a.match_length, a.match_length = 0, a.ins_h = a.window[a.strstart], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 1]) & a.hash_mask;
          else d = D._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++;
          if (d && (h(a, !1), 0 === a.strm.avail_out)) return sb
        }
        return a.insert = a.strstart < hb - 1 ? a.strstart : hb - 1, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
      }

      function p(a, b) {
        for (var c, d, e;;) {
          if (a.lookahead < jb) {
            if (m(a), a.lookahead < jb && b === H) return sb;
            if (0 === a.lookahead) break
          }
          if (c = 0, a.lookahead >= hb && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + hb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), a.prev_length = a.match_length, a.prev_match = a.match_start, a.match_length = hb - 1, 0 !== c && a.prev_length < a.max_lazy_match && a.strstart - c <= a.w_size - jb && (a.match_length = l(a, c), a.match_length <= 5 && (a.strategy === S || a.match_length === hb && a.strstart - a.match_start > 4096) && (a.match_length = hb - 1)), a.prev_length >= hb && a.match_length <= a.prev_length) {
            e = a.strstart + a.lookahead - hb, d = D._tr_tally(a, a.strstart - 1 - a.prev_match, a.prev_length - hb), a.lookahead -= a.prev_length - 1, a.prev_length -= 2;
            do ++a.strstart <= e && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + hb - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart); while (0 !== --a.prev_length);
            if (a.match_available = 0, a.match_length = hb - 1, a.strstart++, d && (h(a, !1), 0 === a.strm.avail_out)) return sb
          } else if (a.match_available) {
            if (d = D._tr_tally(a, 0, a.window[a.strstart - 1]), d && h(a, !1), a.strstart++, a.lookahead--, 0 === a.strm.avail_out) return sb
          } else a.match_available = 1, a.strstart++, a.lookahead--
        }
        return a.match_available && (d = D._tr_tally(a, 0, a.window[a.strstart - 1]), a.match_available = 0), a.insert = a.strstart < hb - 1 ? a.strstart : hb - 1, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
      }

      function q(a, b) {
        for (var c, d, e, f, g = a.window;;) {
          if (a.lookahead <= ib) {
            if (m(a), a.lookahead <= ib && b === H) return sb;
            if (0 === a.lookahead) break
          }
          if (a.match_length = 0, a.lookahead >= hb && a.strstart > 0 && (e = a.strstart - 1, d = g[e], d === g[++e] && d === g[++e] && d === g[++e])) {
            f = a.strstart + ib;
            do; while (d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && f > e);
            a.match_length = ib - (f - e), a.match_length > a.lookahead && (a.match_length = a.lookahead)
          }
          if (a.match_length >= hb ? (c = D._tr_tally(a, 1, a.match_length - hb), a.lookahead -= a.match_length, a.strstart += a.match_length, a.match_length = 0) : (c = D._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++), c && (h(a, !1), 0 === a.strm.avail_out)) return sb
        }
        return a.insert = 0, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
      }

      function r(a, b) {
        for (var c;;) {
          if (0 === a.lookahead && (m(a), 0 === a.lookahead)) {
            if (b === H) return sb;
            break
          }
          if (a.match_length = 0, c = D._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++, c && (h(a, !1), 0 === a.strm.avail_out)) return sb
        }
        return a.insert = 0, b === K ? (h(a, !0), 0 === a.strm.avail_out ? ub : vb) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? sb : tb
      }

      function s(a) {
        a.window_size = 2 * a.w_size, f(a.head), a.max_lazy_match = B[a.level].max_lazy, a.good_match = B[a.level].good_length, a.nice_match = B[a.level].nice_length, a.max_chain_length = B[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = hb - 1, a.match_available = 0, a.ins_h = 0
      }

      function t() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Y, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new C.Buf16(2 * fb), this.dyn_dtree = new C.Buf16(2 * (2 * db + 1)), this.bl_tree = new C.Buf16(2 * (2 * eb + 1)), f(this.dyn_ltree), f(this.dyn_dtree), f(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new C.Buf16(gb + 1), this.heap = new C.Buf16(2 * cb + 1), f(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new C.Buf16(2 * cb + 1), f(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
      }

      function u(a) {
        var b;
        return a && a.state ? (a.total_in = a.total_out = 0, a.data_type = X, b = a.state, b.pending = 0, b.pending_out = 0, b.wrap < 0 && (b.wrap = -b.wrap), b.status = b.wrap ? lb : qb, a.adler = 2 === b.wrap ? 0 : 1, b.last_flush = H, D._tr_init(b), M) : d(a, O)
      }

      function v(a) {
        var b = u(a);
        return b === M && s(a.state), b
      }

      function w(a, b) {
        return a && a.state ? 2 !== a.state.wrap ? O : (a.state.gzhead = b, M) : O
      }

      function x(a, b, c, e, f, g) {
        if (!a) return O;
        var h = 1;
        if (b === R && (b = 6), 0 > e ? (h = 0, e = -e) : e > 15 && (h = 2, e -= 16), 1 > f || f > Z || c !== Y || 8 > e || e > 15 || 0 > b || b > 9 || 0 > g || g > V) return d(a, O);
        8 === e && (e = 9);
        var i = new t;
        return a.state = i, i.strm = a, i.wrap = h, i.gzhead = null, i.w_bits = e, i.w_size = 1 << i.w_bits, i.w_mask = i.w_size - 1, i.hash_bits = f + 7, i.hash_size = 1 << i.hash_bits, i.hash_mask = i.hash_size - 1, i.hash_shift = ~~((i.hash_bits + hb - 1) / hb), i.window = new C.Buf8(2 * i.w_size), i.head = new C.Buf16(i.hash_size), i.prev = new C.Buf16(i.w_size), i.lit_bufsize = 1 << f + 6, i.pending_buf_size = 4 * i.lit_bufsize, i.pending_buf = new C.Buf8(i.pending_buf_size), i.d_buf = i.lit_bufsize >> 1, i.l_buf = 3 * i.lit_bufsize, i.level = b, i.strategy = g, i.method = c, v(a)
      }

      function y(a, b) {
        return x(a, b, Y, $, _, W)
      }

      function z(a, b) {
        var c, h, k, l;
        if (!a || !a.state || b > L || 0 > b) return a ? d(a, O) : O;
        if (h = a.state, !a.output || !a.input && 0 !== a.avail_in || h.status === rb && b !== K) return d(a, 0 === a.avail_out ? Q : O);
        if (h.strm = a, c = h.last_flush, h.last_flush = b, h.status === lb)
          if (2 === h.wrap) a.adler = 0, i(h, 31), i(h, 139), i(h, 8), h.gzhead ? (i(h, (h.gzhead.text ? 1 : 0) + (h.gzhead.hcrc ? 2 : 0) + (h.gzhead.extra ? 4 : 0) + (h.gzhead.name ? 8 : 0) + (h.gzhead.comment ? 16 : 0)), i(h, 255 & h.gzhead.time), i(h, h.gzhead.time >> 8 & 255), i(h, h.gzhead.time >> 16 & 255), i(h, h.gzhead.time >> 24 & 255), i(h, 9 === h.level ? 2 : h.strategy >= T || h.level < 2 ? 4 : 0), i(h, 255 & h.gzhead.os), h.gzhead.extra && h.gzhead.extra.length && (i(h, 255 & h.gzhead.extra.length), i(h, h.gzhead.extra.length >> 8 & 255)), h.gzhead.hcrc && (a.adler = F(a.adler, h.pending_buf, h.pending, 0)), h.gzindex = 0, h.status = mb) : (i(h, 0), i(h, 0), i(h, 0), i(h, 0), i(h, 0), i(h, 9 === h.level ? 2 : h.strategy >= T || h.level < 2 ? 4 : 0), i(h, wb), h.status = qb);
          else {
            var m = Y + (h.w_bits - 8 << 4) << 8,
              n = -1;
            n = h.strategy >= T || h.level < 2 ? 0 : h.level < 6 ? 1 : 6 === h.level ? 2 : 3, m |= n << 6, 0 !== h.strstart && (m |= kb), m += 31 - m % 31, h.status = qb, j(h, m), 0 !== h.strstart && (j(h, a.adler >>> 16), j(h, 65535 & a.adler)), a.adler = 1
          } if (h.status === mb)
          if (h.gzhead.extra) {
            for (k = h.pending; h.gzindex < (65535 & h.gzhead.extra.length) && (h.pending !== h.pending_buf_size || (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending !== h.pending_buf_size));) i(h, 255 & h.gzhead.extra[h.gzindex]), h.gzindex++;
            h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), h.gzindex === h.gzhead.extra.length && (h.gzindex = 0, h.status = nb)
          } else h.status = nb;
        if (h.status === nb)
          if (h.gzhead.name) {
            k = h.pending;
            do {
              if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending === h.pending_buf_size)) {
                l = 1;
                break
              }
              l = h.gzindex < h.gzhead.name.length ? 255 & h.gzhead.name.charCodeAt(h.gzindex++) : 0, i(h, l)
            } while (0 !== l);
            h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), 0 === l && (h.gzindex = 0, h.status = ob)
          } else h.status = ob;
        if (h.status === ob)
          if (h.gzhead.comment) {
            k = h.pending;
            do {
              if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending === h.pending_buf_size)) {
                l = 1;
                break
              }
              l = h.gzindex < h.gzhead.comment.length ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++) : 0, i(h, l)
            } while (0 !== l);
            h.gzhead.hcrc && h.pending > k && (a.adler = F(a.adler, h.pending_buf, h.pending - k, k)), 0 === l && (h.status = pb)
          } else h.status = pb;
        if (h.status === pb && (h.gzhead.hcrc ? (h.pending + 2 > h.pending_buf_size && g(a), h.pending + 2 <= h.pending_buf_size && (i(h, 255 & a.adler), i(h, a.adler >> 8 & 255), a.adler = 0, h.status = qb)) : h.status = qb), 0 !== h.pending) {
          if (g(a), 0 === a.avail_out) return h.last_flush = -1, M
        } else if (0 === a.avail_in && e(b) <= e(c) && b !== K) return d(a, Q);
        if (h.status === rb && 0 !== a.avail_in) return d(a, Q);
        if (0 !== a.avail_in || 0 !== h.lookahead || b !== H && h.status !== rb) {
          var o = h.strategy === T ? r(h, b) : h.strategy === U ? q(h, b) : B[h.level].func(h, b);
          if ((o === ub || o === vb) && (h.status = rb), o === sb || o === ub) return 0 === a.avail_out && (h.last_flush = -1), M;
          if (o === tb && (b === I ? D._tr_align(h) : b !== L && (D._tr_stored_block(h, 0, 0, !1), b === J && (f(h.head), 0 === h.lookahead && (h.strstart = 0, h.block_start = 0, h.insert = 0))), g(a), 0 === a.avail_out)) return h.last_flush = -1, M
        }
        return b !== K ? M : h.wrap <= 0 ? N : (2 === h.wrap ? (i(h, 255 & a.adler), i(h, a.adler >> 8 & 255), i(h, a.adler >> 16 & 255), i(h, a.adler >> 24 & 255), i(h, 255 & a.total_in), i(h, a.total_in >> 8 & 255), i(h, a.total_in >> 16 & 255), i(h, a.total_in >> 24 & 255)) : (j(h, a.adler >>> 16), j(h, 65535 & a.adler)), g(a), h.wrap > 0 && (h.wrap = -h.wrap), 0 !== h.pending ? M : N)
      }

      function A(a) {
        var b;
        return a && a.state ? (b = a.state.status, b !== lb && b !== mb && b !== nb && b !== ob && b !== pb && b !== qb && b !== rb ? d(a, O) : (a.state = null, b === qb ? d(a, P) : M)) : O
      }
      var B, C = a("../utils/common"),
        D = a("./trees"),
        E = a("./adler32"),
        F = a("./crc32"),
        G = a("./messages"),
        H = 0,
        I = 1,
        J = 3,
        K = 4,
        L = 5,
        M = 0,
        N = 1,
        O = -2,
        P = -3,
        Q = -5,
        R = -1,
        S = 1,
        T = 2,
        U = 3,
        V = 4,
        W = 0,
        X = 2,
        Y = 8,
        Z = 9,
        $ = 15,
        _ = 8,
        ab = 29,
        bb = 256,
        cb = bb + 1 + ab,
        db = 30,
        eb = 19,
        fb = 2 * cb + 1,
        gb = 15,
        hb = 3,
        ib = 258,
        jb = ib + hb + 1,
        kb = 32,
        lb = 42,
        mb = 69,
        nb = 73,
        ob = 91,
        pb = 103,
        qb = 113,
        rb = 666,
        sb = 1,
        tb = 2,
        ub = 3,
        vb = 4,
        wb = 3,
        xb = function (a, b, c, d, e) {
          this.good_length = a, this.max_lazy = b, this.nice_length = c, this.max_chain = d, this.func = e
        };
      B = [new xb(0, 0, 0, 0, n), new xb(4, 4, 8, 4, o), new xb(4, 5, 16, 8, o), new xb(4, 6, 32, 32, o), new xb(4, 4, 16, 16, p), new xb(8, 16, 32, 32, p), new xb(8, 16, 128, 128, p), new xb(8, 32, 128, 256, p), new xb(32, 128, 258, 1024, p), new xb(32, 258, 258, 4096, p)], c.deflateInit = y, c.deflateInit2 = x, c.deflateReset = v, c.deflateResetKeep = u, c.deflateSetHeader = w, c.deflate = z, c.deflateEnd = A, c.deflateInfo = "pako deflate (from Nodeca project)"
    }, {
      "../utils/common": 27,
      "./adler32": 29,
      "./crc32": 31,
      "./messages": 37,
      "./trees": 38
    }],
    33: [function (a, b) {
      "use strict";

      function c() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
      }
      b.exports = c
    }, {}],
    34: [function (a, b) {
      "use strict";
      var c = 30,
        d = 12;
      b.exports = function (a, b) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
        e = a.state, f = a.next_in, B = a.input, g = f + (a.avail_in - 5), h = a.next_out, C = a.output, i = h - (b - a.avail_out), j = h + (a.avail_out - 257), k = e.dmax, l = e.wsize, m = e.whave, n = e.wnext, o = e.window, p = e.hold, q = e.bits, r = e.lencode, s = e.distcode, t = (1 << e.lenbits) - 1, u = (1 << e.distbits) - 1;
        a: do {
          15 > q && (p += B[f++] << q, q += 8, p += B[f++] << q, q += 8), v = r[p & t];
          b: for (;;) {
            if (w = v >>> 24, p >>>= w, q -= w, w = v >>> 16 & 255, 0 === w) C[h++] = 65535 & v;
            else {
              if (!(16 & w)) {
                if (0 === (64 & w)) {
                  v = r[(65535 & v) + (p & (1 << w) - 1)];
                  continue b
                }
                if (32 & w) {
                  e.mode = d;
                  break a
                }
                a.msg = "invalid literal/length code", e.mode = c;
                break a
              }
              x = 65535 & v, w &= 15, w && (w > q && (p += B[f++] << q, q += 8), x += p & (1 << w) - 1, p >>>= w, q -= w), 15 > q && (p += B[f++] << q, q += 8, p += B[f++] << q, q += 8), v = s[p & u];
              c: for (;;) {
                if (w = v >>> 24, p >>>= w, q -= w, w = v >>> 16 & 255, !(16 & w)) {
                  if (0 === (64 & w)) {
                    v = s[(65535 & v) + (p & (1 << w) - 1)];
                    continue c
                  }
                  a.msg = "invalid distance code", e.mode = c;
                  break a
                }
                if (y = 65535 & v, w &= 15, w > q && (p += B[f++] << q, q += 8, w > q && (p += B[f++] << q, q += 8)), y += p & (1 << w) - 1, y > k) {
                  a.msg = "invalid distance too far back", e.mode = c;
                  break a
                }
                if (p >>>= w, q -= w, w = h - i, y > w) {
                  if (w = y - w, w > m && e.sane) {
                    a.msg = "invalid distance too far back", e.mode = c;
                    break a
                  }
                  if (z = 0, A = o, 0 === n) {
                    if (z += l - w, x > w) {
                      x -= w;
                      do C[h++] = o[z++]; while (--w);
                      z = h - y, A = C
                    }
                  } else if (w > n) {
                    if (z += l + n - w, w -= n, x > w) {
                      x -= w;
                      do C[h++] = o[z++]; while (--w);
                      if (z = 0, x > n) {
                        w = n, x -= w;
                        do C[h++] = o[z++]; while (--w);
                        z = h - y, A = C
                      }
                    }
                  } else if (z += n - w, x > w) {
                    x -= w;
                    do C[h++] = o[z++]; while (--w);
                    z = h - y, A = C
                  }
                  for (; x > 2;) C[h++] = A[z++], C[h++] = A[z++], C[h++] = A[z++], x -= 3;
                  x && (C[h++] = A[z++], x > 1 && (C[h++] = A[z++]))
                } else {
                  z = h - y;
                  do C[h++] = C[z++], C[h++] = C[z++], C[h++] = C[z++], x -= 3; while (x > 2);
                  x && (C[h++] = C[z++], x > 1 && (C[h++] = C[z++]))
                }
                break
              }
            }
            break
          }
        } while (g > f && j > h);
        x = q >> 3, f -= x, q -= x << 3, p &= (1 << q) - 1, a.next_in = f, a.next_out = h, a.avail_in = g > f ? 5 + (g - f) : 5 - (f - g), a.avail_out = j > h ? 257 + (j - h) : 257 - (h - j), e.hold = p, e.bits = q
      }
    }, {}],
    35: [function (a, b, c) {
      "use strict";

      function d(a) {
        return (a >>> 24 & 255) + (a >>> 8 & 65280) + ((65280 & a) << 8) + ((255 & a) << 24)
      }

      function e() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
      }

      function f(a) {
        var b;
        return a && a.state ? (b = a.state, a.total_in = a.total_out = b.total = 0, a.msg = "", b.wrap && (a.adler = 1 & b.wrap), b.mode = K, b.last = 0, b.havedict = 0, b.dmax = 32768, b.head = null, b.hold = 0, b.bits = 0, b.lencode = b.lendyn = new r.Buf32(ob), b.distcode = b.distdyn = new r.Buf32(pb), b.sane = 1, b.back = -1, C) : F
      }

      function g(a) {
        var b;
        return a && a.state ? (b = a.state, b.wsize = 0, b.whave = 0, b.wnext = 0, f(a)) : F
      }

      function h(a, b) {
        var c, d;
        return a && a.state ? (d = a.state, 0 > b ? (c = 0, b = -b) : (c = (b >> 4) + 1, 48 > b && (b &= 15)), b && (8 > b || b > 15) ? F : (null !== d.window && d.wbits !== b && (d.window = null), d.wrap = c, d.wbits = b, g(a))) : F
      }

      function i(a, b) {
        var c, d;
        return a ? (d = new e, a.state = d, d.window = null, c = h(a, b), c !== C && (a.state = null), c) : F
      }

      function j(a) {
        return i(a, rb)
      }

      function k(a) {
        if (sb) {
          var b;
          for (p = new r.Buf32(512), q = new r.Buf32(32), b = 0; 144 > b;) a.lens[b++] = 8;
          for (; 256 > b;) a.lens[b++] = 9;
          for (; 280 > b;) a.lens[b++] = 7;
          for (; 288 > b;) a.lens[b++] = 8;
          for (v(x, a.lens, 0, 288, p, 0, a.work, {
              bits: 9
            }), b = 0; 32 > b;) a.lens[b++] = 5;
          v(y, a.lens, 0, 32, q, 0, a.work, {
            bits: 5
          }), sb = !1
        }
        a.lencode = p, a.lenbits = 9, a.distcode = q, a.distbits = 5
      }

      function l(a, b, c, d) {
        var e, f = a.state;
        return null === f.window && (f.wsize = 1 << f.wbits, f.wnext = 0, f.whave = 0, f.window = new r.Buf8(f.wsize)), d >= f.wsize ? (r.arraySet(f.window, b, c - f.wsize, f.wsize, 0), f.wnext = 0, f.whave = f.wsize) : (e = f.wsize - f.wnext, e > d && (e = d), r.arraySet(f.window, b, c - d, e, f.wnext), d -= e, d ? (r.arraySet(f.window, b, c - d, d, 0), f.wnext = d, f.whave = f.wsize) : (f.wnext += e, f.wnext === f.wsize && (f.wnext = 0), f.whave < f.wsize && (f.whave += e))), 0
      }

      function m(a, b) {
        var c, e, f, g, h, i, j, m, n, o, p, q, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab = 0,
          Bb = new r.Buf8(4),
          Cb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!a || !a.state || !a.output || !a.input && 0 !== a.avail_in) return F;
        c = a.state, c.mode === V && (c.mode = W), h = a.next_out, f = a.output, j = a.avail_out, g = a.next_in, e = a.input, i = a.avail_in, m = c.hold, n = c.bits, o = i, p = j, xb = C;
        a: for (;;) switch (c.mode) {
          case K:
            if (0 === c.wrap) {
              c.mode = W;
              break
            }
            for (; 16 > n;) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            if (2 & c.wrap && 35615 === m) {
              c.check = 0, Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, c.check = t(c.check, Bb, 2, 0), m = 0, n = 0, c.mode = L;
              break
            }
            if (c.flags = 0, c.head && (c.head.done = !1), !(1 & c.wrap) || (((255 & m) << 8) + (m >> 8)) % 31) {
              a.msg = "incorrect header check", c.mode = lb;
              break
            }
            if ((15 & m) !== J) {
              a.msg = "unknown compression method", c.mode = lb;
              break
            }
            if (m >>>= 4, n -= 4, wb = (15 & m) + 8, 0 === c.wbits) c.wbits = wb;
            else if (wb > c.wbits) {
              a.msg = "invalid window size", c.mode = lb;
              break
            }
            c.dmax = 1 << wb, a.adler = c.check = 1, c.mode = 512 & m ? T : V, m = 0, n = 0;
            break;
          case L:
            for (; 16 > n;) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            if (c.flags = m, (255 & c.flags) !== J) {
              a.msg = "unknown compression method", c.mode = lb;
              break
            }
            if (57344 & c.flags) {
              a.msg = "unknown header flags set", c.mode = lb;
              break
            }
            c.head && (c.head.text = m >> 8 & 1), 512 & c.flags && (Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, c.check = t(c.check, Bb, 2, 0)), m = 0, n = 0, c.mode = M;
          case M:
            for (; 32 > n;) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            c.head && (c.head.time = m), 512 & c.flags && (Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, Bb[2] = m >>> 16 & 255, Bb[3] = m >>> 24 & 255, c.check = t(c.check, Bb, 4, 0)), m = 0, n = 0, c.mode = N;
          case N:
            for (; 16 > n;) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            c.head && (c.head.xflags = 255 & m, c.head.os = m >> 8), 512 & c.flags && (Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, c.check = t(c.check, Bb, 2, 0)), m = 0, n = 0, c.mode = O;
          case O:
            if (1024 & c.flags) {
              for (; 16 > n;) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              c.length = m, c.head && (c.head.extra_len = m), 512 & c.flags && (Bb[0] = 255 & m, Bb[1] = m >>> 8 & 255, c.check = t(c.check, Bb, 2, 0)), m = 0, n = 0
            } else c.head && (c.head.extra = null);
            c.mode = P;
          case P:
            if (1024 & c.flags && (q = c.length, q > i && (q = i), q && (c.head && (wb = c.head.extra_len - c.length, c.head.extra || (c.head.extra = new Array(c.head.extra_len)), r.arraySet(c.head.extra, e, g, q, wb)), 512 & c.flags && (c.check = t(c.check, e, q, g)), i -= q, g += q, c.length -= q), c.length)) break a;
            c.length = 0, c.mode = Q;
          case Q:
            if (2048 & c.flags) {
              if (0 === i) break a;
              q = 0;
              do wb = e[g + q++], c.head && wb && c.length < 65536 && (c.head.name += String.fromCharCode(wb)); while (wb && i > q);
              if (512 & c.flags && (c.check = t(c.check, e, q, g)), i -= q, g += q, wb) break a
            } else c.head && (c.head.name = null);
            c.length = 0, c.mode = R;
          case R:
            if (4096 & c.flags) {
              if (0 === i) break a;
              q = 0;
              do wb = e[g + q++], c.head && wb && c.length < 65536 && (c.head.comment += String.fromCharCode(wb)); while (wb && i > q);
              if (512 & c.flags && (c.check = t(c.check, e, q, g)), i -= q, g += q, wb) break a
            } else c.head && (c.head.comment = null);
            c.mode = S;
          case S:
            if (512 & c.flags) {
              for (; 16 > n;) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              if (m !== (65535 & c.check)) {
                a.msg = "header crc mismatch", c.mode = lb;
                break
              }
              m = 0, n = 0
            }
            c.head && (c.head.hcrc = c.flags >> 9 & 1, c.head.done = !0), a.adler = c.check = 0, c.mode = V;
            break;
          case T:
            for (; 32 > n;) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            a.adler = c.check = d(m), m = 0, n = 0, c.mode = U;
          case U:
            if (0 === c.havedict) return a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, E;
            a.adler = c.check = 1, c.mode = V;
          case V:
            if (b === A || b === B) break a;
          case W:
            if (c.last) {
              m >>>= 7 & n, n -= 7 & n, c.mode = ib;
              break
            }
            for (; 3 > n;) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            switch (c.last = 1 & m, m >>>= 1, n -= 1, 3 & m) {
              case 0:
                c.mode = X;
                break;
              case 1:
                if (k(c), c.mode = bb, b === B) {
                  m >>>= 2, n -= 2;
                  break a
                }
                break;
              case 2:
                c.mode = $;
                break;
              case 3:
                a.msg = "invalid block type", c.mode = lb
            }
            m >>>= 2, n -= 2;
            break;
          case X:
            for (m >>>= 7 & n, n -= 7 & n; 32 > n;) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            if ((65535 & m) !== (m >>> 16 ^ 65535)) {
              a.msg = "invalid stored block lengths", c.mode = lb;
              break
            }
            if (c.length = 65535 & m, m = 0, n = 0, c.mode = Y, b === B) break a;
          case Y:
            c.mode = Z;
          case Z:
            if (q = c.length) {
              if (q > i && (q = i), q > j && (q = j), 0 === q) break a;
              r.arraySet(f, e, g, q, h), i -= q, g += q, j -= q, h += q, c.length -= q;
              break
            }
            c.mode = V;
            break;
          case $:
            for (; 14 > n;) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            if (c.nlen = (31 & m) + 257, m >>>= 5, n -= 5, c.ndist = (31 & m) + 1, m >>>= 5, n -= 5, c.ncode = (15 & m) + 4, m >>>= 4, n -= 4, c.nlen > 286 || c.ndist > 30) {
              a.msg = "too many length or distance symbols", c.mode = lb;
              break
            }
            c.have = 0, c.mode = _;
          case _:
            for (; c.have < c.ncode;) {
              for (; 3 > n;) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              c.lens[Cb[c.have++]] = 7 & m, m >>>= 3, n -= 3
            }
            for (; c.have < 19;) c.lens[Cb[c.have++]] = 0;
            if (c.lencode = c.lendyn, c.lenbits = 7, yb = {
                bits: c.lenbits
              }, xb = v(w, c.lens, 0, 19, c.lencode, 0, c.work, yb), c.lenbits = yb.bits, xb) {
              a.msg = "invalid code lengths set", c.mode = lb;
              break
            }
            c.have = 0, c.mode = ab;
          case ab:
            for (; c.have < c.nlen + c.ndist;) {
              for (; Ab = c.lencode[m & (1 << c.lenbits) - 1], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= qb);) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              if (16 > sb) m >>>= qb, n -= qb, c.lens[c.have++] = sb;
              else {
                if (16 === sb) {
                  for (zb = qb + 2; zb > n;) {
                    if (0 === i) break a;
                    i--, m += e[g++] << n, n += 8
                  }
                  if (m >>>= qb, n -= qb, 0 === c.have) {
                    a.msg = "invalid bit length repeat", c.mode = lb;
                    break
                  }
                  wb = c.lens[c.have - 1], q = 3 + (3 & m), m >>>= 2, n -= 2
                } else if (17 === sb) {
                  for (zb = qb + 3; zb > n;) {
                    if (0 === i) break a;
                    i--, m += e[g++] << n, n += 8
                  }
                  m >>>= qb, n -= qb, wb = 0, q = 3 + (7 & m), m >>>= 3, n -= 3
                } else {
                  for (zb = qb + 7; zb > n;) {
                    if (0 === i) break a;
                    i--, m += e[g++] << n, n += 8
                  }
                  m >>>= qb, n -= qb, wb = 0, q = 11 + (127 & m), m >>>= 7, n -= 7
                }
                if (c.have + q > c.nlen + c.ndist) {
                  a.msg = "invalid bit length repeat", c.mode = lb;
                  break
                }
                for (; q--;) c.lens[c.have++] = wb
              }
            }
            if (c.mode === lb) break;
            if (0 === c.lens[256]) {
              a.msg = "invalid code -- missing end-of-block", c.mode = lb;
              break
            }
            if (c.lenbits = 9, yb = {
                bits: c.lenbits
              }, xb = v(x, c.lens, 0, c.nlen, c.lencode, 0, c.work, yb), c.lenbits = yb.bits, xb) {
              a.msg = "invalid literal/lengths set", c.mode = lb;
              break
            }
            if (c.distbits = 6, c.distcode = c.distdyn, yb = {
                bits: c.distbits
              }, xb = v(y, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, yb), c.distbits = yb.bits, xb) {
              a.msg = "invalid distances set", c.mode = lb;
              break
            }
            if (c.mode = bb, b === B) break a;
          case bb:
            c.mode = cb;
          case cb:
            if (i >= 6 && j >= 258) {
              a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, u(a, p), h = a.next_out, f = a.output, j = a.avail_out, g = a.next_in, e = a.input, i = a.avail_in, m = c.hold, n = c.bits, c.mode === V && (c.back = -1);
              break
            }
            for (c.back = 0; Ab = c.lencode[m & (1 << c.lenbits) - 1], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= qb);) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            if (rb && 0 === (240 & rb)) {
              for (tb = qb, ub = rb, vb = sb; Ab = c.lencode[vb + ((m & (1 << tb + ub) - 1) >> tb)], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= tb + qb);) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              m >>>= tb, n -= tb, c.back += tb
            }
            if (m >>>= qb, n -= qb, c.back += qb, c.length = sb, 0 === rb) {
              c.mode = hb;
              break
            }
            if (32 & rb) {
              c.back = -1, c.mode = V;
              break
            }
            if (64 & rb) {
              a.msg = "invalid literal/length code", c.mode = lb;
              break
            }
            c.extra = 15 & rb, c.mode = db;
          case db:
            if (c.extra) {
              for (zb = c.extra; zb > n;) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              c.length += m & (1 << c.extra) - 1, m >>>= c.extra, n -= c.extra, c.back += c.extra
            }
            c.was = c.length, c.mode = eb;
          case eb:
            for (; Ab = c.distcode[m & (1 << c.distbits) - 1], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= qb);) {
              if (0 === i) break a;
              i--, m += e[g++] << n, n += 8
            }
            if (0 === (240 & rb)) {
              for (tb = qb, ub = rb, vb = sb; Ab = c.distcode[vb + ((m & (1 << tb + ub) - 1) >> tb)], qb = Ab >>> 24, rb = Ab >>> 16 & 255, sb = 65535 & Ab, !(n >= tb + qb);) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              m >>>= tb, n -= tb, c.back += tb
            }
            if (m >>>= qb, n -= qb, c.back += qb, 64 & rb) {
              a.msg = "invalid distance code", c.mode = lb;
              break
            }
            c.offset = sb, c.extra = 15 & rb, c.mode = fb;
          case fb:
            if (c.extra) {
              for (zb = c.extra; zb > n;) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              c.offset += m & (1 << c.extra) - 1, m >>>= c.extra, n -= c.extra, c.back += c.extra
            }
            if (c.offset > c.dmax) {
              a.msg = "invalid distance too far back", c.mode = lb;
              break
            }
            c.mode = gb;
          case gb:
            if (0 === j) break a;
            if (q = p - j, c.offset > q) {
              if (q = c.offset - q, q > c.whave && c.sane) {
                a.msg = "invalid distance too far back", c.mode = lb;
                break
              }
              q > c.wnext ? (q -= c.wnext, ob = c.wsize - q) : ob = c.wnext - q, q > c.length && (q = c.length), pb = c.window
            } else pb = f, ob = h - c.offset, q = c.length;
            q > j && (q = j), j -= q, c.length -= q;
            do f[h++] = pb[ob++]; while (--q);
            0 === c.length && (c.mode = cb);
            break;
          case hb:
            if (0 === j) break a;
            f[h++] = c.length, j--, c.mode = cb;
            break;
          case ib:
            if (c.wrap) {
              for (; 32 > n;) {
                if (0 === i) break a;
                i--, m |= e[g++] << n, n += 8
              }
              if (p -= j, a.total_out += p, c.total += p, p && (a.adler = c.check = c.flags ? t(c.check, f, p, h - p) : s(c.check, f, p, h - p)), p = j, (c.flags ? m : d(m)) !== c.check) {
                a.msg = "incorrect data check", c.mode = lb;
                break
              }
              m = 0, n = 0
            }
            c.mode = jb;
          case jb:
            if (c.wrap && c.flags) {
              for (; 32 > n;) {
                if (0 === i) break a;
                i--, m += e[g++] << n, n += 8
              }
              if (m !== (4294967295 & c.total)) {
                a.msg = "incorrect length check", c.mode = lb;
                break
              }
              m = 0, n = 0
            }
            c.mode = kb;
          case kb:
            xb = D;
            break a;
          case lb:
            xb = G;
            break a;
          case mb:
            return H;
          case nb:
          default:
            return F
        }
        return a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, (c.wsize || p !== a.avail_out && c.mode < lb && (c.mode < ib || b !== z)) && l(a, a.output, a.next_out, p - a.avail_out) ? (c.mode = mb, H) : (o -= a.avail_in, p -= a.avail_out, a.total_in += o, a.total_out += p, c.total += p, c.wrap && p && (a.adler = c.check = c.flags ? t(c.check, f, p, a.next_out - p) : s(c.check, f, p, a.next_out - p)), a.data_type = c.bits + (c.last ? 64 : 0) + (c.mode === V ? 128 : 0) + (c.mode === bb || c.mode === Y ? 256 : 0), (0 === o && 0 === p || b === z) && xb === C && (xb = I), xb)
      }

      function n(a) {
        if (!a || !a.state) return F;
        var b = a.state;
        return b.window && (b.window = null), a.state = null, C
      }

      function o(a, b) {
        var c;
        return a && a.state ? (c = a.state, 0 === (2 & c.wrap) ? F : (c.head = b, b.done = !1, C)) : F
      }
      var p, q, r = a("../utils/common"),
        s = a("./adler32"),
        t = a("./crc32"),
        u = a("./inffast"),
        v = a("./inftrees"),
        w = 0,
        x = 1,
        y = 2,
        z = 4,
        A = 5,
        B = 6,
        C = 0,
        D = 1,
        E = 2,
        F = -2,
        G = -3,
        H = -4,
        I = -5,
        J = 8,
        K = 1,
        L = 2,
        M = 3,
        N = 4,
        O = 5,
        P = 6,
        Q = 7,
        R = 8,
        S = 9,
        T = 10,
        U = 11,
        V = 12,
        W = 13,
        X = 14,
        Y = 15,
        Z = 16,
        $ = 17,
        _ = 18,
        ab = 19,
        bb = 20,
        cb = 21,
        db = 22,
        eb = 23,
        fb = 24,
        gb = 25,
        hb = 26,
        ib = 27,
        jb = 28,
        kb = 29,
        lb = 30,
        mb = 31,
        nb = 32,
        ob = 852,
        pb = 592,
        qb = 15,
        rb = qb,
        sb = !0;
      c.inflateReset = g, c.inflateReset2 = h, c.inflateResetKeep = f, c.inflateInit = j, c.inflateInit2 = i, c.inflate = m, c.inflateEnd = n, c.inflateGetHeader = o, c.inflateInfo = "pako inflate (from Nodeca project)"
    }, {
      "../utils/common": 27,
      "./adler32": 29,
      "./crc32": 31,
      "./inffast": 34,
      "./inftrees": 36
    }],
    36: [function (a, b) {
      "use strict";
      var c = a("../utils/common"),
        d = 15,
        e = 852,
        f = 592,
        g = 0,
        h = 1,
        i = 2,
        j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        k = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
        l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
        m = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      b.exports = function (a, b, n, o, p, q, r, s) {
        var t, u, v, w, x, y, z, A, B, C = s.bits,
          D = 0,
          E = 0,
          F = 0,
          G = 0,
          H = 0,
          I = 0,
          J = 0,
          K = 0,
          L = 0,
          M = 0,
          N = null,
          O = 0,
          P = new c.Buf16(d + 1),
          Q = new c.Buf16(d + 1),
          R = null,
          S = 0;
        for (D = 0; d >= D; D++) P[D] = 0;
        for (E = 0; o > E; E++) P[b[n + E]]++;
        for (H = C, G = d; G >= 1 && 0 === P[G]; G--);
        if (H > G && (H = G), 0 === G) return p[q++] = 20971520, p[q++] = 20971520, s.bits = 1, 0;
        for (F = 1; G > F && 0 === P[F]; F++);
        for (F > H && (H = F), K = 1, D = 1; d >= D; D++)
          if (K <<= 1, K -= P[D], 0 > K) return -1;
        if (K > 0 && (a === g || 1 !== G)) return -1;
        for (Q[1] = 0, D = 1; d > D; D++) Q[D + 1] = Q[D] + P[D];
        for (E = 0; o > E; E++) 0 !== b[n + E] && (r[Q[b[n + E]]++] = E);
        if (a === g ? (N = R = r, y = 19) : a === h ? (N = j, O -= 257, R = k, S -= 257, y = 256) : (N = l, R = m, y = -1), M = 0, E = 0, D = F, x = q, I = H, J = 0, v = -1, L = 1 << H, w = L - 1, a === h && L > e || a === i && L > f) return 1;
        for (var T = 0;;) {
          T++, z = D - J, r[E] < y ? (A = 0, B = r[E]) : r[E] > y ? (A = R[S + r[E]], B = N[O + r[E]]) : (A = 96, B = 0), t = 1 << D - J, u = 1 << I, F = u;
          do u -= t, p[x + (M >> J) + u] = z << 24 | A << 16 | B | 0; while (0 !== u);
          for (t = 1 << D - 1; M & t;) t >>= 1;
          if (0 !== t ? (M &= t - 1, M += t) : M = 0, E++, 0 === --P[D]) {
            if (D === G) break;
            D = b[n + r[E]]
          }
          if (D > H && (M & w) !== v) {
            for (0 === J && (J = H), x += F, I = D - J, K = 1 << I; G > I + J && (K -= P[I + J], !(0 >= K));) I++, K <<= 1;
            if (L += 1 << I, a === h && L > e || a === i && L > f) return 1;
            v = M & w, p[v] = H << 24 | I << 16 | x - q | 0
          }
        }
        return 0 !== M && (p[x + M] = D - J << 24 | 64 << 16 | 0), s.bits = H, 0
      }
    }, {
      "../utils/common": 27
    }],
    37: [function (a, b) {
      "use strict";
      b.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      }
    }, {}],
    38: [function (a, b, c) {
      "use strict";

      function d(a) {
        for (var b = a.length; --b >= 0;) a[b] = 0
      }

      function e(a) {
        return 256 > a ? gb[a] : gb[256 + (a >>> 7)]
      }

      function f(a, b) {
        a.pending_buf[a.pending++] = 255 & b, a.pending_buf[a.pending++] = b >>> 8 & 255
      }

      function g(a, b, c) {
        a.bi_valid > V - c ? (a.bi_buf |= b << a.bi_valid & 65535, f(a, a.bi_buf), a.bi_buf = b >> V - a.bi_valid, a.bi_valid += c - V) : (a.bi_buf |= b << a.bi_valid & 65535, a.bi_valid += c)
      }

      function h(a, b, c) {
        g(a, c[2 * b], c[2 * b + 1])
      }

      function i(a, b) {
        var c = 0;
        do c |= 1 & a, a >>>= 1, c <<= 1; while (--b > 0);
        return c >>> 1
      }

      function j(a) {
        16 === a.bi_valid ? (f(a, a.bi_buf), a.bi_buf = 0, a.bi_valid = 0) : a.bi_valid >= 8 && (a.pending_buf[a.pending++] = 255 & a.bi_buf, a.bi_buf >>= 8, a.bi_valid -= 8)
      }

      function k(a, b) {
        var c, d, e, f, g, h, i = b.dyn_tree,
          j = b.max_code,
          k = b.stat_desc.static_tree,
          l = b.stat_desc.has_stree,
          m = b.stat_desc.extra_bits,
          n = b.stat_desc.extra_base,
          o = b.stat_desc.max_length,
          p = 0;
        for (f = 0; U >= f; f++) a.bl_count[f] = 0;
        for (i[2 * a.heap[a.heap_max] + 1] = 0, c = a.heap_max + 1; T > c; c++) d = a.heap[c], f = i[2 * i[2 * d + 1] + 1] + 1, f > o && (f = o, p++), i[2 * d + 1] = f, d > j || (a.bl_count[f]++, g = 0, d >= n && (g = m[d - n]), h = i[2 * d], a.opt_len += h * (f + g), l && (a.static_len += h * (k[2 * d + 1] + g)));
        if (0 !== p) {
          do {
            for (f = o - 1; 0 === a.bl_count[f];) f--;
            a.bl_count[f]--, a.bl_count[f + 1] += 2, a.bl_count[o]--, p -= 2
          } while (p > 0);
          for (f = o; 0 !== f; f--)
            for (d = a.bl_count[f]; 0 !== d;) e = a.heap[--c], e > j || (i[2 * e + 1] !== f && (a.opt_len += (f - i[2 * e + 1]) * i[2 * e], i[2 * e + 1] = f), d--)
        }
      }

      function l(a, b, c) {
        var d, e, f = new Array(U + 1),
          g = 0;
        for (d = 1; U >= d; d++) f[d] = g = g + c[d - 1] << 1;
        for (e = 0; b >= e; e++) {
          var h = a[2 * e + 1];
          0 !== h && (a[2 * e] = i(f[h]++, h))
        }
      }

      function m() {
        var a, b, c, d, e, f = new Array(U + 1);
        for (c = 0, d = 0; O - 1 > d; d++)
          for (ib[d] = c, a = 0; a < 1 << _[d]; a++) hb[c++] = d;
        for (hb[c - 1] = d, e = 0, d = 0; 16 > d; d++)
          for (jb[d] = e, a = 0; a < 1 << ab[d]; a++) gb[e++] = d;
        for (e >>= 7; R > d; d++)
          for (jb[d] = e << 7, a = 0; a < 1 << ab[d] - 7; a++) gb[256 + e++] = d;
        for (b = 0; U >= b; b++) f[b] = 0;
        for (a = 0; 143 >= a;) eb[2 * a + 1] = 8, a++, f[8]++;
        for (; 255 >= a;) eb[2 * a + 1] = 9, a++, f[9]++;
        for (; 279 >= a;) eb[2 * a + 1] = 7, a++, f[7]++;
        for (; 287 >= a;) eb[2 * a + 1] = 8, a++, f[8]++;
        for (l(eb, Q + 1, f), a = 0; R > a; a++) fb[2 * a + 1] = 5, fb[2 * a] = i(a, 5);
        kb = new nb(eb, _, P + 1, Q, U), lb = new nb(fb, ab, 0, R, U), mb = new nb(new Array(0), bb, 0, S, W)
      }

      function n(a) {
        var b;
        for (b = 0; Q > b; b++) a.dyn_ltree[2 * b] = 0;
        for (b = 0; R > b; b++) a.dyn_dtree[2 * b] = 0;
        for (b = 0; S > b; b++) a.bl_tree[2 * b] = 0;
        a.dyn_ltree[2 * X] = 1, a.opt_len = a.static_len = 0, a.last_lit = a.matches = 0
      }

      function o(a) {
        a.bi_valid > 8 ? f(a, a.bi_buf) : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf), a.bi_buf = 0, a.bi_valid = 0
      }

      function p(a, b, c, d) {
        o(a), d && (f(a, c), f(a, ~c)), E.arraySet(a.pending_buf, a.window, b, c, a.pending), a.pending += c
      }

      function q(a, b, c, d) {
        var e = 2 * b,
          f = 2 * c;
        return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
      }

      function r(a, b, c) {
        for (var d = a.heap[c], e = c << 1; e <= a.heap_len && (e < a.heap_len && q(b, a.heap[e + 1], a.heap[e], a.depth) && e++, !q(b, d, a.heap[e], a.depth));) a.heap[c] = a.heap[e], c = e, e <<= 1;
        a.heap[c] = d
      }

      function s(a, b, c) {
        var d, f, i, j, k = 0;
        if (0 !== a.last_lit)
          do d = a.pending_buf[a.d_buf + 2 * k] << 8 | a.pending_buf[a.d_buf + 2 * k + 1], f = a.pending_buf[a.l_buf + k], k++, 0 === d ? h(a, f, b) : (i = hb[f], h(a, i + P + 1, b), j = _[i], 0 !== j && (f -= ib[i], g(a, f, j)), d--, i = e(d), h(a, i, c), j = ab[i], 0 !== j && (d -= jb[i], g(a, d, j))); while (k < a.last_lit);
        h(a, X, b)
      }

      function t(a, b) {
        var c, d, e, f = b.dyn_tree,
          g = b.stat_desc.static_tree,
          h = b.stat_desc.has_stree,
          i = b.stat_desc.elems,
          j = -1;
        for (a.heap_len = 0, a.heap_max = T, c = 0; i > c; c++) 0 !== f[2 * c] ? (a.heap[++a.heap_len] = j = c, a.depth[c] = 0) : f[2 * c + 1] = 0;
        for (; a.heap_len < 2;) e = a.heap[++a.heap_len] = 2 > j ? ++j : 0, f[2 * e] = 1, a.depth[e] = 0, a.opt_len--, h && (a.static_len -= g[2 * e + 1]);
        for (b.max_code = j, c = a.heap_len >> 1; c >= 1; c--) r(a, f, c);
        e = i;
        do c = a.heap[1], a.heap[1] = a.heap[a.heap_len--], r(a, f, 1), d = a.heap[1], a.heap[--a.heap_max] = c, a.heap[--a.heap_max] = d, f[2 * e] = f[2 * c] + f[2 * d], a.depth[e] = (a.depth[c] >= a.depth[d] ? a.depth[c] : a.depth[d]) + 1, f[2 * c + 1] = f[2 * d + 1] = e, a.heap[1] = e++, r(a, f, 1); while (a.heap_len >= 2);
        a.heap[--a.heap_max] = a.heap[1], k(a, b), l(f, j, a.bl_count)
      }

      function u(a, b, c) {
        var d, e, f = -1,
          g = b[1],
          h = 0,
          i = 7,
          j = 4;
        for (0 === g && (i = 138, j = 3), b[2 * (c + 1) + 1] = 65535, d = 0; c >= d; d++) e = g, g = b[2 * (d + 1) + 1], ++h < i && e === g || (j > h ? a.bl_tree[2 * e] += h : 0 !== e ? (e !== f && a.bl_tree[2 * e]++, a.bl_tree[2 * Y]++) : 10 >= h ? a.bl_tree[2 * Z]++ : a.bl_tree[2 * $]++, h = 0, f = e, 0 === g ? (i = 138, j = 3) : e === g ? (i = 6, j = 3) : (i = 7, j = 4))
      }

      function v(a, b, c) {
        var d, e, f = -1,
          i = b[1],
          j = 0,
          k = 7,
          l = 4;
        for (0 === i && (k = 138, l = 3), d = 0; c >= d; d++)
          if (e = i, i = b[2 * (d + 1) + 1], !(++j < k && e === i)) {
            if (l > j) {
              do h(a, e, a.bl_tree); while (0 !== --j)
            } else 0 !== e ? (e !== f && (h(a, e, a.bl_tree), j--), h(a, Y, a.bl_tree), g(a, j - 3, 2)) : 10 >= j ? (h(a, Z, a.bl_tree), g(a, j - 3, 3)) : (h(a, $, a.bl_tree), g(a, j - 11, 7));
            j = 0, f = e, 0 === i ? (k = 138, l = 3) : e === i ? (k = 6, l = 3) : (k = 7, l = 4)
          }
      }

      function w(a) {
        var b;
        for (u(a, a.dyn_ltree, a.l_desc.max_code), u(a, a.dyn_dtree, a.d_desc.max_code), t(a, a.bl_desc), b = S - 1; b >= 3 && 0 === a.bl_tree[2 * cb[b] + 1]; b--);
        return a.opt_len += 3 * (b + 1) + 5 + 5 + 4, b
      }

      function x(a, b, c, d) {
        var e;
        for (g(a, b - 257, 5), g(a, c - 1, 5), g(a, d - 4, 4), e = 0; d > e; e++) g(a, a.bl_tree[2 * cb[e] + 1], 3);
        v(a, a.dyn_ltree, b - 1), v(a, a.dyn_dtree, c - 1)
      }

      function y(a) {
        var b, c = 4093624447;
        for (b = 0; 31 >= b; b++, c >>>= 1)
          if (1 & c && 0 !== a.dyn_ltree[2 * b]) return G;
        if (0 !== a.dyn_ltree[18] || 0 !== a.dyn_ltree[20] || 0 !== a.dyn_ltree[26]) return H;
        for (b = 32; P > b; b++)
          if (0 !== a.dyn_ltree[2 * b]) return H;
        return G
      }

      function z(a) {
        pb || (m(), pb = !0), a.l_desc = new ob(a.dyn_ltree, kb), a.d_desc = new ob(a.dyn_dtree, lb), a.bl_desc = new ob(a.bl_tree, mb), a.bi_buf = 0, a.bi_valid = 0, n(a)
      }

      function A(a, b, c, d) {
        g(a, (J << 1) + (d ? 1 : 0), 3), p(a, b, c, !0)
      }

      function B(a) {
        g(a, K << 1, 3), h(a, X, eb), j(a)
      }

      function C(a, b, c, d) {
        var e, f, h = 0;
        a.level > 0 ? (a.strm.data_type === I && (a.strm.data_type = y(a)), t(a, a.l_desc), t(a, a.d_desc), h = w(a), e = a.opt_len + 3 + 7 >>> 3, f = a.static_len + 3 + 7 >>> 3, e >= f && (e = f)) : e = f = c + 5, e >= c + 4 && -1 !== b ? A(a, b, c, d) : a.strategy === F || f === e ? (g(a, (K << 1) + (d ? 1 : 0), 3), s(a, eb, fb)) : (g(a, (L << 1) + (d ? 1 : 0), 3), x(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, h + 1), s(a, a.dyn_ltree, a.dyn_dtree)), n(a), d && o(a)
      }

      function D(a, b, c) {
        return a.pending_buf[a.d_buf + 2 * a.last_lit] = b >>> 8 & 255, a.pending_buf[a.d_buf + 2 * a.last_lit + 1] = 255 & b, a.pending_buf[a.l_buf + a.last_lit] = 255 & c, a.last_lit++, 0 === b ? a.dyn_ltree[2 * c]++ : (a.matches++, b--, a.dyn_ltree[2 * (hb[c] + P + 1)]++, a.dyn_dtree[2 * e(b)]++), a.last_lit === a.lit_bufsize - 1
      }
      var E = a("../utils/common"),
        F = 4,
        G = 0,
        H = 1,
        I = 2,
        J = 0,
        K = 1,
        L = 2,
        M = 3,
        N = 258,
        O = 29,
        P = 256,
        Q = P + 1 + O,
        R = 30,
        S = 19,
        T = 2 * Q + 1,
        U = 15,
        V = 16,
        W = 7,
        X = 256,
        Y = 16,
        Z = 17,
        $ = 18,
        _ = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
        ab = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        bb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        cb = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        db = 512,
        eb = new Array(2 * (Q + 2));
      d(eb);
      var fb = new Array(2 * R);
      d(fb);
      var gb = new Array(db);
      d(gb);
      var hb = new Array(N - M + 1);
      d(hb);
      var ib = new Array(O);
      d(ib);
      var jb = new Array(R);
      d(jb);
      var kb, lb, mb, nb = function (a, b, c, d, e) {
          this.static_tree = a, this.extra_bits = b, this.extra_base = c, this.elems = d, this.max_length = e, this.has_stree = a && a.length
        },
        ob = function (a, b) {
          this.dyn_tree = a, this.max_code = 0, this.stat_desc = b
        },
        pb = !1;
      c._tr_init = z, c._tr_stored_block = A, c._tr_flush_block = C, c._tr_tally = D, c._tr_align = B
    }, {
      "../utils/common": 27
    }],
    39: [function (a, b) {
      "use strict";

      function c() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
      }
      b.exports = c
    }, {}]
  }, {}, [9])(9)
});

/*!
   Copyright 2008-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.10.22
 ©2008-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (k, y, z) {
  k instanceof String && (k = String(k));
  for (var q = k.length, G = 0; G < q; G++) {
    var O = k[G];
    if (y.call(z, O, G, k)) return {
      i: G,
      v: O
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (k, y, z) {
  if (k == Array.prototype || k == Object.prototype) return k;
  k[y] = z.value;
  return k
};
$jscomp.getGlobal = function (k) {
  k = ["object" == typeof globalThis && globalThis, k, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var y = 0; y < k.length; ++y) {
    var z = k[y];
    if (z && z.Math == Math) return z
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (k, y) {
  var z = $jscomp.propertyToPolyfillSymbol[y];
  if (null == z) return k[y];
  z = k[z];
  return void 0 !== z ? z : k[y]
};
$jscomp.polyfill = function (k, y, z, q) {
  y && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(k, y, z, q) : $jscomp.polyfillUnisolated(k, y, z, q))
};
$jscomp.polyfillUnisolated = function (k, y, z, q) {
  z = $jscomp.global;
  k = k.split(".");
  for (q = 0; q < k.length - 1; q++) {
    var G = k[q];
    if (!(G in z)) return;
    z = z[G]
  }
  k = k[k.length - 1];
  q = z[k];
  y = y(q);
  y != q && null != y && $jscomp.defineProperty(z, k, {
    configurable: !0,
    writable: !0,
    value: y
  })
};
$jscomp.polyfillIsolated = function (k, y, z, q) {
  var G = k.split(".");
  k = 1 === G.length;
  q = G[0];
  q = !k && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var O = 0; O < G.length - 1; O++) {
    var ma = G[O];
    if (!(ma in q)) return;
    q = q[ma]
  }
  G = G[G.length - 1];
  z = $jscomp.IS_SYMBOL_NATIVE && "es6" === z ? q[G] : null;
  y = y(z);
  null != y && (k ? $jscomp.defineProperty($jscomp.polyfills, G, {
    configurable: !0,
    writable: !0,
    value: y
  }) : y !== z && ($jscomp.propertyToPolyfillSymbol[G] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(G) : $jscomp.POLYFILL_PREFIX + G,
    G = $jscomp.propertyToPolyfillSymbol[G], $jscomp.defineProperty(q, G, {
      configurable: !0,
      writable: !0,
      value: y
    })))
};
$jscomp.polyfill("Array.prototype.find", function (k) {
  return k ? k : function (y, z) {
    return $jscomp.findInternal(this, y, z).v
  }
}, "es6", "es3");
(function (k) {
  "function" === typeof define && define.amd ? define(["jquery"], function (y) {
    return k(y, window, document)
  }) : "object" === typeof exports ? module.exports = function (y, z) {
    y || (y = window);
    z || (z = "undefined" !== typeof window ? require("jquery") : require("jquery")(y));
    return k(z, y, y.document)
  } : k(jQuery, window, document)
})(function (k, y, z, q) {
  function G(a) {
    var b, c, d = {};
    k.each(a, function (f, e) {
      (b = f.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = f.replace(b[0], b[2].toLowerCase()),
        d[c] = f, "o" === b[1] && G(a[f]))
    });
    a._hungarianMap = d
  }

  function O(a, b, c) {
    a._hungarianMap || G(a);
    var d;
    k.each(b, function (f, e) {
      d = a._hungarianMap[f];
      d === q || !c && b[d] !== q || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), k.extend(!0, b[d], b[f]), O(a[d], b[d], c)) : b[d] = b[f])
    })
  }

  function ma(a) {
    var b = u.defaults.oLanguage,
      c = b.sDecimal;
    c && Va(c);
    if (a) {
      var d = a.sZeroRecords;
      !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && V(a, a, "sZeroRecords", "sEmptyTable");
      !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && V(a, a,
        "sZeroRecords", "sLoadingRecords");
      a.sInfoThousands && (a.sThousands = a.sInfoThousands);
      (a = a.sDecimal) && c !== a && Va(a)
    }
  }

  function yb(a) {
    R(a, "ordering", "bSort");
    R(a, "orderMulti", "bSortMulti");
    R(a, "orderClasses", "bSortClasses");
    R(a, "orderCellsTop", "bSortCellsTop");
    R(a, "order", "aaSorting");
    R(a, "orderFixed", "aaSortingFixed");
    R(a, "paging", "bPaginate");
    R(a, "pagingType", "sPaginationType");
    R(a, "pageLength", "iDisplayLength");
    R(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" :
      "");
    "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
    if (a = a.aoSearchCols)
      for (var b = 0, c = a.length; b < c; b++) a[b] && O(u.models.oSearch, a[b])
  }

  function zb(a) {
    R(a, "orderable", "bSortable");
    R(a, "orderData", "aDataSort");
    R(a, "orderSequence", "asSorting");
    R(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b])
  }

  function Ab(a) {
    if (!u.__browser) {
      var b = {};
      u.__browser = b;
      var c = k("<div/>").css({
          position: "fixed",
          top: 0,
          left: -1 * k(y).scrollLeft(),
          height: 1,
          width: 1,
          overflow: "hidden"
        }).append(k("<div/>").css({
          position: "absolute",
          top: 1,
          left: 1,
          width: 100,
          overflow: "scroll"
        }).append(k("<div/>").css({
          width: "100%",
          height: 10
        }))).appendTo("body"),
        d = c.children(),
        f = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === f[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(f.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove()
    }
    k.extend(a.oBrowser, u.__browser);
    a.oScroll.iBarWidth = u.__browser.barWidth
  }

  function Bb(a, b, c, d, f, e) {
    var g = !1;
    if (c !== q) {
      var h = c;
      g = !0
    }
    for (; d !== f;) a.hasOwnProperty(d) && (h = g ? b(h, a[d], d, a) : a[d], g = !0, d += e);
    return h
  }

  function Wa(a, b) {
    var c = u.defaults.column,
      d = a.aoColumns.length;
    c = k.extend({}, u.models.oColumn, c, {
      nTh: b ? b : z.createElement("th"),
      sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
      aDataSort: c.aDataSort ? c.aDataSort : [d],
      mData: c.mData ? c.mData : d,
      idx: d
    });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = k.extend({}, u.models.oSearch, c[d]);
    Da(a, d, k(b).data())
  }

  function Da(a, b, c) {
    b = a.aoColumns[b];
    var d = a.oClasses,
      f = k(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig = f.attr("width") || null;
      var e = (f.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      e && (b.sWidthOrig = e[1])
    }
    c !== q && null !== c && (zb(c), O(u.defaults.column, c, !0), c.mDataProp === q || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && f.addClass(c.sClass), k.extend(b, c), V(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== q && (b.aDataSort = [c.iDataSort]), V(b, c, "aDataSort"));
    var g = b.mData,
      h = ia(g),
      l = b.mRender ? ia(b.mRender) : null;
    c = function (n) {
      return "string" === typeof n && -1 !== n.indexOf("@")
    };
    b._bAttrSrc = k.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;
    b.fnGetData = function (n, m, p) {
      var t = h(n, m, q, p);
      return l && m ? l(t, m, n, p) : t
    };
    b.fnSetData = function (n, m, p) {
      return da(g)(n, m, p)
    };
    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || (b.bSortable = !1, f.addClass(d.sSortableNone));
    a = -1 !== k.inArray("asc", b.asSorting);
    c = -1 !== k.inArray("desc", b.asSorting);
    b.bSortable && (a || c) ? a && !c ?
      (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "")
  }

  function ra(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Xa(a);
      for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
    }
    b = a.oScroll;
    "" === b.sY && "" === b.sX || Ea(a);
    I(a, null, "column-sizing", [a])
  }

  function sa(a, b) {
    a = Fa(a, "bVisible");
    return "number" === typeof a[b] ? a[b] : null
  }

  function ta(a, b) {
    a = Fa(a, "bVisible");
    b = k.inArray(b, a);
    return -1 !== b ? b : null
  }

  function na(a) {
    var b = 0;
    k.each(a.aoColumns, function (c, d) {
      d.bVisible && "none" !== k(d.nTh).css("display") && b++
    });
    return b
  }

  function Fa(a, b) {
    var c = [];
    k.map(a.aoColumns, function (d, f) {
      d[b] && c.push(f)
    });
    return c
  }

  function Ya(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = u.ext.type.detect,
      f, e, g;
    var h = 0;
    for (f = b.length; h < f; h++) {
      var l = b[h];
      var n = [];
      if (!l.sType && l._sManualType) l.sType = l._sManualType;
      else if (!l.sType) {
        var m =
          0;
        for (e = d.length; m < e; m++) {
          var p = 0;
          for (g = c.length; p < g; p++) {
            n[p] === q && (n[p] = S(a, p, h, "type"));
            var t = d[m](n[p], a);
            if (!t && m !== d.length - 1) break;
            if ("html" === t) break
          }
          if (t) {
            l.sType = t;
            break
          }
        }
        l.sType || (l.sType = "string")
      }
    }
  }

  function Cb(a, b, c, d) {
    var f, e, g, h = a.aoColumns;
    if (b)
      for (f = b.length - 1; 0 <= f; f--) {
        var l = b[f];
        var n = l.targets !== q ? l.targets : l.aTargets;
        Array.isArray(n) || (n = [n]);
        var m = 0;
        for (e = n.length; m < e; m++)
          if ("number" === typeof n[m] && 0 <= n[m]) {
            for (; h.length <= n[m];) Wa(a);
            d(n[m], l)
          } else if ("number" === typeof n[m] &&
          0 > n[m]) d(h.length + n[m], l);
        else if ("string" === typeof n[m]) {
          var p = 0;
          for (g = h.length; p < g; p++)("_all" == n[m] || k(h[p].nTh).hasClass(n[m])) && d(p, l)
        }
      }
    if (c)
      for (f = 0, a = c.length; f < a; f++) d(f, c[f])
  }

  function ea(a, b, c, d) {
    var f = a.aoData.length,
      e = k.extend(!0, {}, u.models.oRow, {
        src: c ? "dom" : "data",
        idx: f
      });
    e._aData = b;
    a.aoData.push(e);
    for (var g = a.aoColumns, h = 0, l = g.length; h < l; h++) g[h].sType = null;
    a.aiDisplayMaster.push(f);
    b = a.rowIdFn(b);
    b !== q && (a.aIds[b] = e);
    !c && a.oFeatures.bDeferRender || Za(a, f, c, d);
    return f
  }

  function Ga(a,
    b) {
    var c;
    b instanceof k || (b = k(b));
    return b.map(function (d, f) {
      c = $a(a, f);
      return ea(a, c.data, f, c.cells)
    })
  }

  function S(a, b, c, d) {
    var f = a.iDraw,
      e = a.aoColumns[c],
      g = a.aoData[b]._aData,
      h = e.sDefaultContent,
      l = e.fnGetData(g, d, {
        settings: a,
        row: b,
        col: c
      });
    //if (l === q) return a.iDrawError != f && null === h && (aa(a, 0, "Requested unknown parameter " + ("function" == typeof e.mData ? "{function}" : "'" + e.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = f), h;
    if ((l === g || null === l) && null !== h && d !== q) l = h;
    else if ("function" === typeof l) return l.call(g);
    return null === l && "display" == d ? "" : l
  }

  function Db(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c
    })
  }

  function ab(a) {
    return k.map(a.match(/(\\.|[^\.])+/g) || [""], function (b) {
      return b.replace(/\\\./g, ".")
    })
  }

  function ia(a) {
    if (k.isPlainObject(a)) {
      var b = {};
      k.each(a, function (d, f) {
        f && (b[d] = ia(f))
      });
      return function (d, f, e, g) {
        var h = b[f] || b._;
        return h !== q ? h(d, f, e, g) : d
      }
    }
    if (null === a) return function (d) {
      return d
    };
    if ("function" === typeof a) return function (d, f, e, g) {
      return a(d, f, e, g)
    };
    if ("string" !==
      typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (d, f) {
      return d[a]
    };
    var c = function (d, f, e) {
      if ("" !== e) {
        var g = ab(e);
        for (var h = 0, l = g.length; h < l; h++) {
          e = g[h].match(ua);
          var n = g[h].match(oa);
          if (e) {
            g[h] = g[h].replace(ua, "");
            "" !== g[h] && (d = d[g[h]]);
            n = [];
            g.splice(0, h + 1);
            g = g.join(".");
            if (Array.isArray(d))
              for (h = 0, l = d.length; h < l; h++) n.push(c(d[h], f, g));
            d = e[0].substring(1, e[0].length - 1);
            d = "" === d ? n : n.join(d);
            break
          } else if (n) {
            g[h] = g[h].replace(oa, "");
            d = d[g[h]]();
            continue
          }
          if (null ===
            d || d[g[h]] === q) return q;
          d = d[g[h]]
        }
      }
      return d
    };
    return function (d, f) {
      return c(d, f, a)
    }
  }

  function da(a) {
    if (k.isPlainObject(a)) return da(a._);
    if (null === a) return function () {};
    if ("function" === typeof a) return function (c, d, f) {
      a(c, "set", d, f)
    };
    if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function (c, d) {
      c[a] = d
    };
    var b = function (c, d, f) {
      f = ab(f);
      var e = f[f.length - 1];
      for (var g, h, l = 0, n = f.length - 1; l < n; l++) {
        if ("__proto__" === f[l]) throw Error("Cannot set prototype values");
        g =
          f[l].match(ua);
        h = f[l].match(oa);
        if (g) {
          f[l] = f[l].replace(ua, "");
          c[f[l]] = [];
          e = f.slice();
          e.splice(0, l + 1);
          g = e.join(".");
          if (Array.isArray(d))
            for (h = 0, n = d.length; h < n; h++) e = {}, b(e, d[h], g), c[f[l]].push(e);
          else c[f[l]] = d;
          return
        }
        h && (f[l] = f[l].replace(oa, ""), c = c[f[l]](d));
        if (null === c[f[l]] || c[f[l]] === q) c[f[l]] = {};
        c = c[f[l]]
      }
      if (e.match(oa)) c[e.replace(oa, "")](d);
      else c[e.replace(ua, "")] = d
    };
    return function (c, d) {
      return b(c, d, a)
    }
  }

  function bb(a) {
    return T(a.aoData, "_aData")
  }

  function Ha(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length =
      0;
    a.aiDisplay.length = 0;
    a.aIds = {}
  }

  function Ia(a, b, c) {
    for (var d = -1, f = 0, e = a.length; f < e; f++) a[f] == b ? d = f : a[f] > b && a[f]--; - 1 != d && c === q && a.splice(d, 1)
  }

  function va(a, b, c, d) {
    var f = a.aoData[b],
      e, g = function (l, n) {
        for (; l.childNodes.length;) l.removeChild(l.firstChild);
        l.innerHTML = S(a, b, n, "display")
      };
    if ("dom" !== c && (c && "auto" !== c || "dom" !== f.src)) {
      var h = f.anCells;
      if (h)
        if (d !== q) g(h[d], d);
        else
          for (c = 0, e = h.length; c < e; c++) g(h[c], c)
    } else f._aData = $a(a, f, d, d === q ? q : f._aData).data;
    f._aSortData = null;
    f._aFilterData = null;
    g =
      a.aoColumns;
    if (d !== q) g[d].sType = null;
    else {
      c = 0;
      for (e = g.length; c < e; c++) g[c].sType = null;
      cb(a, f)
    }
  }

  function $a(a, b, c, d) {
    var f = [],
      e = b.firstChild,
      g, h = 0,
      l, n = a.aoColumns,
      m = a._rowReadObject;
    d = d !== q ? d : m ? {} : [];
    var p = function (x, r) {
        if ("string" === typeof x) {
          var A = x.indexOf("@"); - 1 !== A && (A = x.substring(A + 1), da(x)(d, r.getAttribute(A)))
        }
      },
      t = function (x) {
        if (c === q || c === h) g = n[h], l = x.innerHTML.trim(), g && g._bAttrSrc ? (da(g.mData._)(d, l), p(g.mData.sort, x), p(g.mData.type, x), p(g.mData.filter, x)) : m ? (g._setter || (g._setter = da(g.mData)),
          g._setter(d, l)) : d[h] = l;
        h++
      };
    if (e)
      for (; e;) {
        var v = e.nodeName.toUpperCase();
        if ("TD" == v || "TH" == v) t(e), f.push(e);
        e = e.nextSibling
      } else
        for (f = b.anCells, e = 0, v = f.length; e < v; e++) t(f[e]);
    (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && da(a.rowId)(d, b);
    return {
      data: d,
      cells: f
    }
  }

  function Za(a, b, c, d) {
    var f = a.aoData[b],
      e = f._aData,
      g = [],
      h, l;
    if (null === f.nTr) {
      var n = c || z.createElement("tr");
      f.nTr = n;
      f.anCells = g;
      n._DT_RowIndex = b;
      cb(a, f);
      var m = 0;
      for (h = a.aoColumns.length; m < h; m++) {
        var p = a.aoColumns[m];
        var t = (l = c ? !1 : !0) ?
          z.createElement(p.sCellType) : d[m];
        t._DT_CellIndex = {
          row: b,
          column: m
        };
        g.push(t);
        if (l || !(c && !p.mRender && p.mData === m || k.isPlainObject(p.mData) && p.mData._ === m + ".display")) t.innerHTML = S(a, b, m, "display");
        p.sClass && (t.className += " " + p.sClass);
        p.bVisible && !c ? n.appendChild(t) : !p.bVisible && c && t.parentNode.removeChild(t);
        p.fnCreatedCell && p.fnCreatedCell.call(a.oInstance, t, S(a, b, m), e, b, m)
      }
      I(a, "aoRowCreatedCallback", null, [n, e, b, g])
    }
    f.nTr.setAttribute("role", "row")
  }

  function cb(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      if (a =
        a.rowIdFn(d)) c.id = a;
      d.DT_RowClass && (a = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? Ja(b.__rowc.concat(a)) : a, k(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && k(c).attr(d.DT_RowAttr);
      d.DT_RowData && k(c).data(d.DT_RowData)
    }
  }

  function Eb(a) {
    var b, c, d = a.nTHead,
      f = a.nTFoot,
      e = 0 === k("th, td", d).length,
      g = a.oClasses,
      h = a.aoColumns;
    e && (c = k("<tr/>").appendTo(d));
    var l = 0;
    for (b = h.length; l < b; l++) {
      var n = h[l];
      var m = k(n.nTh).addClass(n.sClass);
      e && m.appendTo(c);
      a.oFeatures.bSort && (m.addClass(n.sSortingClass),
        !1 !== n.bSortable && (m.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), db(a, n.nTh, l)));
      n.sTitle != m[0].innerHTML && m.html(n.sTitle);
      eb(a, "header")(a, m, n, g)
    }
    e && wa(a.aoHeader, d);
    k(d).children("tr").attr("role", "row");
    k(d).children("tr").children("th, td").addClass(g.sHeaderTH);
    k(f).children("tr").children("th, td").addClass(g.sFooterTH);
    if (null !== f)
      for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++) n = h[l], n.nTf = a[l].cell, n.sClass && k(n.nTf).addClass(n.sClass)
  }

  function xa(a, b, c) {
    var d, f, e = [],
      g = [],
      h =
      a.aoColumns.length;
    if (b) {
      c === q && (c = !1);
      var l = 0;
      for (d = b.length; l < d; l++) {
        e[l] = b[l].slice();
        e[l].nTr = b[l].nTr;
        for (f = h - 1; 0 <= f; f--) a.aoColumns[f].bVisible || c || e[l].splice(f, 1);
        g.push([])
      }
      l = 0;
      for (d = e.length; l < d; l++) {
        if (a = e[l].nTr)
          for (; f = a.firstChild;) a.removeChild(f);
        f = 0;
        for (b = e[l].length; f < b; f++) {
          var n = h = 1;
          if (g[l][f] === q) {
            a.appendChild(e[l][f].cell);
            for (g[l][f] = 1; e[l + h] !== q && e[l][f].cell == e[l + h][f].cell;) g[l + h][f] = 1, h++;
            for (; e[l][f + n] !== q && e[l][f].cell == e[l][f + n].cell;) {
              for (c = 0; c < h; c++) g[l + c][f + n] = 1;
              n++
            }
            k(e[l][f].cell).attr("rowspan",
              h).attr("colspan", n)
          }
        }
      }
    }
  }

  function fa(a) {
    var b = I(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== k.inArray(!1, b)) U(a, !1);
    else {
      b = [];
      var c = 0,
        d = a.asStripeClasses,
        f = d.length,
        e = a.oLanguage,
        g = a.iInitDisplayStart,
        h = "ssp" == P(a),
        l = a.aiDisplay;
      a.bDrawing = !0;
      g !== q && -1 !== g && (a._iDisplayStart = h ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
      g = a._iDisplayStart;
      var n = a.fnDisplayEnd();
      if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, U(a, !1);
      else if (!h) a.iDraw++;
      else if (!a.bDestroying && !Fb(a)) return;
      if (0 !== l.length)
        for (e =
          h ? a.aoData.length : n, h = h ? 0 : g; h < e; h++) {
          var m = l[h],
            p = a.aoData[m];
          null === p.nTr && Za(a, m);
          var t = p.nTr;
          if (0 !== f) {
            var v = d[c % f];
            p._sRowStripe != v && (k(t).removeClass(p._sRowStripe).addClass(v), p._sRowStripe = v)
          }
          I(a, "aoRowCallback", null, [t, p._aData, c, h, m]);
          b.push(t);
          c++
        } else c = e.sZeroRecords, 1 == a.iDraw && "ajax" == P(a) ? c = e.sLoadingRecords : e.sEmptyTable && 0 === a.fnRecordsTotal() && (c = e.sEmptyTable), b[0] = k("<tr/>", {
          "class": f ? d[0] : ""
        }).append(k("<td />", {
          valign: "top",
          colSpan: na(a),
          "class": a.oClasses.sRowEmpty
        }).html(c))[0];
      I(a, "aoHeaderCallback", "header", [k(a.nTHead).children("tr")[0], bb(a), g, n, l]);
      I(a, "aoFooterCallback", "footer", [k(a.nTFoot).children("tr")[0], bb(a), g, n, l]);
      d = k(a.nTBody);
      d.children().detach();
      d.append(k(b));
      I(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1
    }
  }

  function ja(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && Gb(a);
    d ? ya(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    fa(a);
    a._drawHold = !1
  }

  function Hb(a) {
    var b = a.oClasses,
      c = k(a.nTable);
    c = k("<div/>").insertBefore(c);
    var d = a.oFeatures,
      f = k("<div/>", {
        id: a.sTableId + "_wrapper",
        "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
      });
    a.nHolding = c[0];
    a.nTableWrapper = f[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var e = a.sDom.split(""), g, h, l, n, m, p, t = 0; t < e.length; t++) {
      g = null;
      h = e[t];
      if ("<" == h) {
        l = k("<div/>")[0];
        n = e[t + 1];
        if ("'" == n || '"' == n) {
          m = "";
          for (p = 2; e[t + p] != n;) m += e[t + p], p++;
          "H" == m ? m = b.sJUIHeader : "F" == m && (m = b.sJUIFooter); - 1 != m.indexOf(".") ? (n = m.split("."), l.id = n[0].substr(1,
            n[0].length - 1), l.className = n[1]) : "#" == m.charAt(0) ? l.id = m.substr(1, m.length - 1) : l.className = m;
          t += p
        }
        f.append(l);
        f = k(l)
      } else if (">" == h) f = f.parent();
      else if ("l" == h && d.bPaginate && d.bLengthChange) g = Ib(a);
      else if ("f" == h && d.bFilter) g = Jb(a);
      else if ("r" == h && d.bProcessing) g = Kb(a);
      else if ("t" == h) g = Lb(a);
      else if ("i" == h && d.bInfo) g = Mb(a);
      else if ("p" == h && d.bPaginate) g = Nb(a);
      else if (0 !== u.ext.feature.length)
        for (l = u.ext.feature, p = 0, n = l.length; p < n; p++)
          if (h == l[p].cFeature) {
            g = l[p].fnInit(a);
            break
          } g && (l = a.aanFeatures, l[h] ||
        (l[h] = []), l[h].push(g), f.append(g))
    }
    c.replaceWith(f);
    a.nHolding = null
  }

  function wa(a, b) {
    b = k(b).children("tr");
    var c, d, f;
    a.splice(0, a.length);
    var e = 0;
    for (f = b.length; e < f; e++) a.push([]);
    e = 0;
    for (f = b.length; e < f; e++) {
      var g = b[e];
      for (c = g.firstChild; c;) {
        if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
          var h = 1 * c.getAttribute("colspan");
          var l = 1 * c.getAttribute("rowspan");
          h = h && 0 !== h && 1 !== h ? h : 1;
          l = l && 0 !== l && 1 !== l ? l : 1;
          var n = 0;
          for (d = a[e]; d[n];) n++;
          var m = n;
          var p = 1 === h ? !0 : !1;
          for (d = 0; d < h; d++)
            for (n = 0; n <
              l; n++) a[e + n][m + d] = {
              cell: c,
              unique: p
            }, a[e + n].nTr = g
        }
        c = c.nextSibling
      }
    }
  }

  function Ka(a, b, c) {
    var d = [];
    c || (c = a.aoHeader, b && (c = [], wa(c, b)));
    b = 0;
    for (var f = c.length; b < f; b++)
      for (var e = 0, g = c[b].length; e < g; e++) !c[b][e].unique || d[e] && a.bSortCellsTop || (d[e] = c[b][e].cell);
    return d
  }

  function La(a, b, c) {
    I(a, "aoServerParams", "serverParams", [b]);
    if (b && Array.isArray(b)) {
      var d = {},
        f = /(.*?)\[\]$/;
      k.each(b, function (m, p) {
        (m = p.name.match(f)) ? (m = m[0], d[m] || (d[m] = []), d[m].push(p.value)) : d[p.name] = p.value
      });
      b = d
    }
    var e = a.ajax,
      g = a.oInstance,
      h = function (m) {
        I(a, null, "xhr", [a, m, a.jqXHR]);
        c(m)
      };
    if (k.isPlainObject(e) && e.data) {
      var l = e.data;
      var n = "function" === typeof l ? l(b, a) : l;
      b = "function" === typeof l && n ? n : k.extend(!0, b, n);
      delete e.data
    }
    n = {
      data: b,
      success: function (m) {
        var p = m.error || m.sError;
        p && aa(a, 0, p);
        a.json = m;
        h(m)
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function (m, p, t) {
        t = I(a, null, "xhr", [a, null, a.jqXHR]); - 1 === k.inArray(!0, t) && ("parsererror" == p ? aa(a, 0, "Invalid JSON response", 1) : 4 === m.readyState && aa(a, 0, "Ajax error", 7));
        U(a, !1)
      }
    };
    a.oAjaxData = b;
    I(a, null, "preXhr", [a, b]);
    a.fnServerData ? a.fnServerData.call(g, a.sAjaxSource, k.map(b, function (m, p) {
      return {
        name: p,
        value: m
      }
    }), h, a) : a.sAjaxSource || "string" === typeof e ? a.jqXHR = k.ajax(k.extend(n, {
      url: e || a.sAjaxSource
    })) : "function" === typeof e ? a.jqXHR = e.call(g, b, h, a) : (a.jqXHR = k.ajax(k.extend(n, e)), e.data = l)
  }

  function Fb(a) {
    return a.bAjaxDataGet ? (a.iDraw++, U(a, !0), La(a, Ob(a), function (b) {
      Pb(a, b)
    }), !1) : !0
  }

  function Ob(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      f = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      g = [],
      h = pa(a);
    var l = a._iDisplayStart;
    var n = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var m = function (x, r) {
      g.push({
        name: x,
        value: r
      })
    };
    m("sEcho", a.iDraw);
    m("iColumns", c);
    m("sColumns", T(b, "sName").join(","));
    m("iDisplayStart", l);
    m("iDisplayLength", n);
    var p = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: l,
      length: n,
      search: {
        value: f.sSearch,
        regex: f.bRegex
      }
    };
    for (l = 0; l < c; l++) {
      var t = b[l];
      var v = e[l];
      n = "function" == typeof t.mData ? "function" : t.mData;
      p.columns.push({
        data: n,
        name: t.sName,
        searchable: t.bSearchable,
        orderable: t.bSortable,
        search: {
          value: v.sSearch,
          regex: v.bRegex
        }
      });
      m("mDataProp_" + l, n);
      d.bFilter && (m("sSearch_" + l, v.sSearch), m("bRegex_" + l, v.bRegex), m("bSearchable_" + l, t.bSearchable));
      d.bSort && m("bSortable_" + l, t.bSortable)
    }
    d.bFilter && (m("sSearch", f.sSearch), m("bRegex", f.bRegex));
    d.bSort && (k.each(h, function (x, r) {
      p.order.push({
        column: r.col,
        dir: r.dir
      });
      m("iSortCol_" + x, r.col);
      m("sSortDir_" + x, r.dir)
    }), m("iSortingCols", h.length));
    b = u.ext.legacy.ajax;
    return null === b ? a.sAjaxSource ? g : p : b ? g : p
  }

  function Pb(a, b) {
    var c = function (g, h) {
        return b[g] !==
          q ? b[g] : b[h]
      },
      d = Ma(a, b),
      f = c("sEcho", "draw"),
      e = c("iTotalRecords", "recordsTotal");
    c = c("iTotalDisplayRecords", "recordsFiltered");
    if (f !== q) {
      if (1 * f < a.iDraw) return;
      a.iDraw = 1 * f
    }
    Ha(a);
    a._iRecordsTotal = parseInt(e, 10);
    a._iRecordsDisplay = parseInt(c, 10);
    f = 0;
    for (e = d.length; f < e; f++) ea(a, d[f]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    fa(a);
    a._bInitComplete || Na(a, b);
    a.bAjaxDataGet = !0;
    U(a, !1)
  }

  function Ma(a, b) {
    a = k.isPlainObject(a.ajax) && a.ajax.dataSrc !== q ? a.ajax.dataSrc : a.sAjaxDataProp;
    return "data" ===
      a ? b.aaData || b[a] : "" !== a ? ia(a)(b) : b
  }

  function Jb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      f = a.oPreviousSearch,
      e = a.aanFeatures,
      g = '<input type="search" class="' + b.sFilterInput + '"/>',
      h = d.sSearch;
    h = h.match(/_INPUT_/) ? h.replace("_INPUT_", g) : h + g;
    b = k("<div/>", {
      id: e.f ? null : c + "_filter",
      "class": b.sFilter
    }).append(k("<label/>").append(h));
    var l = function () {
      var m = this.value ? this.value : "";
      m != f.sSearch && (ya(a, {
          sSearch: m,
          bRegex: f.bRegex,
          bSmart: f.bSmart,
          bCaseInsensitive: f.bCaseInsensitive
        }), a._iDisplayStart = 0,
        fa(a))
    };
    e = null !== a.searchDelay ? a.searchDelay : "ssp" === P(a) ? 400 : 0;
    var n = k("input", b).val(f.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", e ? fb(l, e) : l).on("mouseup", function (m) {
      setTimeout(function () {
        l.call(n[0])
      }, 10)
    }).on("keypress.DT", function (m) {
      if (13 == m.keyCode) return !1
    }).attr("aria-controls", c);
    k(a.nTable).on("search.dt.DT", function (m, p) {
      if (a === p) try {
        n[0] !== z.activeElement && n.val(f.sSearch)
      } catch (t) {}
    });
    return b[0]
  }

  function ya(a, b, c) {
    var d = a.oPreviousSearch,
      f = a.aoPreSearchCols,
      e = function (h) {
        d.sSearch = h.sSearch;
        d.bRegex = h.bRegex;
        d.bSmart = h.bSmart;
        d.bCaseInsensitive = h.bCaseInsensitive
      },
      g = function (h) {
        return h.bEscapeRegex !== q ? !h.bEscapeRegex : h.bRegex
      };
    Ya(a);
    if ("ssp" != P(a)) {
      Qb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
      e(b);
      for (b = 0; b < f.length; b++) Rb(a, f[b].sSearch, b, g(f[b]), f[b].bSmart, f[b].bCaseInsensitive);
      Sb(a)
    } else e(b);
    a.bFiltered = !0;
    I(a, null, "search", [a])
  }

  function Sb(a) {
    for (var b = u.ext.search, c = a.aiDisplay, d, f, e = 0, g = b.length; e < g; e++) {
      for (var h = [], l = 0, n = c.length; l < n; l++) f = c[l], d = a.aoData[f], b[e](a, d._aFilterData, f, d._aData, l) && h.push(f);
      c.length = 0;
      k.merge(c, h)
    }
  }

  function Rb(a, b, c, d, f, e) {
    if ("" !== b) {
      var g = [],
        h = a.aiDisplay;
      d = gb(b, d, f, e);
      for (f = 0; f < h.length; f++) b = a.aoData[h[f]]._aFilterData[c], d.test(b) && g.push(h[f]);
      a.aiDisplay = g
    }
  }

  function Qb(a, b, c, d, f, e) {
    f = gb(b, d, f, e);
    var g = a.oPreviousSearch.sSearch,
      h = a.aiDisplayMaster;
    e = [];
    0 !== u.ext.search.length && (c = !0);
    var l = Tb(a);
    if (0 >= b.length) a.aiDisplay = h.slice();
    else {
      if (l || c || d || g.length > b.length || 0 !==
        b.indexOf(g) || a.bSorted) a.aiDisplay = h.slice();
      b = a.aiDisplay;
      for (c = 0; c < b.length; c++) f.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
      a.aiDisplay = e
    }
  }

  function gb(a, b, c, d) {
    a = b ? a : hb(a);
    c && (a = "^(?=.*?" + k.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (f) {
      if ('"' === f.charAt(0)) {
        var e = f.match(/^"(.*)"$/);
        f = e ? e[1] : f
      }
      return f.replace('"', "")
    }).join(")(?=.*?") + ").*$");
    return new RegExp(a, d ? "i" : "")
  }

  function Tb(a) {
    var b = a.aoColumns,
      c, d, f = u.ext.type.search;
    var e = !1;
    var g = 0;
    for (c = a.aoData.length; g < c; g++) {
      var h = a.aoData[g];
      if (!h._aFilterData) {
        var l = [];
        var n = 0;
        for (d = b.length; n < d; n++) {
          e = b[n];
          if (e.bSearchable) {
            var m = S(a, g, n, "filter");
            f[e.sType] && (m = f[e.sType](m));
            null === m && (m = "");
            "string" !== typeof m && m.toString && (m = m.toString())
          } else m = "";
          m.indexOf && -1 !== m.indexOf("&") && (Oa.innerHTML = m, m = rc ? Oa.textContent : Oa.innerText);
          m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
          l.push(m)
        }
        h._aFilterData = l;
        h._sFilterRow = l.join("  ");
        e = !0
      }
    }
    return e
  }

  function Ub(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive
    }
  }

  function Vb(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive
    }
  }

  function Mb(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = k("<div/>", {
        "class": a.oClasses.sInfo,
        id: c ? null : b + "_info"
      });
    c || (a.aoDrawCallback.push({
      fn: Wb,
      sName: "information"
    }), d.attr("role", "status").attr("aria-live", "polite"), k(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0]
  }

  function Wb(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart + 1,
        f = a.fnDisplayEnd(),
        e = a.fnRecordsTotal(),
        g = a.fnRecordsDisplay(),
        h = g ? c.sInfo : c.sInfoEmpty;
      g !== e && (h += " " + c.sInfoFiltered);
      h += c.sInfoPostFix;
      h = Xb(a, h);
      c = c.fnInfoCallback;
      null !== c && (h = c.call(a.oInstance, a, d, f, e, g, h));
      k(b).html(h)
    }
  }

  function Xb(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      f = a._iDisplayLength,
      e = a.fnRecordsDisplay(),
      g = -1 === f;
    return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, e)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d /
      f))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(e / f)))
  }

  function za(a) {
    var b = a.iInitDisplayStart,
      c = a.aoColumns;
    var d = a.oFeatures;
    var f = a.bDeferLoading;
    if (a.bInitialised) {
      Hb(a);
      Eb(a);
      xa(a, a.aoHeader);
      xa(a, a.aoFooter);
      U(a, !0);
      d.bAutoWidth && Xa(a);
      var e = 0;
      for (d = c.length; e < d; e++) {
        var g = c[e];
        g.sWidth && (g.nTh.style.width = K(g.sWidth))
      }
      I(a, null, "preInit", [a]);
      ja(a);
      c = P(a);
      if ("ssp" != c || f) "ajax" == c ? La(a, [], function (h) {
          var l = Ma(a, h);
          for (e = 0; e < l.length; e++) ea(a, l[e]);
          a.iInitDisplayStart = b;
          ja(a);
          U(a, !1);
          Na(a, h)
        },
        a) : (U(a, !1), Na(a))
    } else setTimeout(function () {
      za(a)
    }, 200)
  }

  function Na(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && ra(a);
    I(a, null, "plugin-init", [a, b]);
    I(a, "aoInitComplete", "init", [a, b])
  }

  function ib(a, b) {
    b = parseInt(b, 10);
    a._iDisplayLength = b;
    jb(a);
    I(a, null, "length", [a, b])
  }

  function Ib(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.aLengthMenu,
      f = Array.isArray(d[0]),
      e = f ? d[0] : d;
    d = f ? d[1] : d;
    f = k("<select/>", {
      name: c + "_length",
      "aria-controls": c,
      "class": b.sLengthSelect
    });
    for (var g = 0, h = e.length; g < h; g++) f[0][g] = new Option("number" ===
      typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], e[g]);
    var l = k("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (l[0].id = c + "_length");
    l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", f[0].outerHTML));
    k("select", l).val(a._iDisplayLength).on("change.DT", function (n) {
      ib(a, k(this).val());
      fa(a)
    });
    k(a.nTable).on("length.dt.DT", function (n, m, p) {
      a === m && k("select", l).val(p)
    });
    return l[0]
  }

  function Nb(a) {
    var b = a.sPaginationType,
      c = u.ext.pager[b],
      d = "function" === typeof c,
      f = function (g) {
        fa(g)
      };
    b = k("<div/>").addClass(a.oClasses.sPaging +
      b)[0];
    var e = a.aanFeatures;
    d || c.fnInit(a, b, f);
    e.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
      fn: function (g) {
        if (d) {
          var h = g._iDisplayStart,
            l = g._iDisplayLength,
            n = g.fnRecordsDisplay(),
            m = -1 === l;
          h = m ? 0 : Math.ceil(h / l);
          l = m ? 1 : Math.ceil(n / l);
          n = c(h, l);
          var p;
          m = 0;
          for (p = e.p.length; m < p; m++) eb(g, "pageButton")(g, e.p[m], m, n, h, l)
        } else c.fnUpdate(g, f)
      },
      sName: "pagination"
    }));
    return b
  }

  function kb(a, b, c) {
    var d = a._iDisplayStart,
      f = a._iDisplayLength,
      e = a.fnRecordsDisplay();
    0 === e || -1 === f ? d = 0 : "number" === typeof b ? (d = b *
      f, d > e && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= f ? d - f : 0, 0 > d && (d = 0)) : "next" == b ? d + f < e && (d += f) : "last" == b ? d = Math.floor((e - 1) / f) * f : aa(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (I(a, null, "page", [a]), c && fa(a));
    return b
  }

  function Kb(a) {
    return k("<div/>", {
      id: a.aanFeatures.r ? null : a.sTableId + "_processing",
      "class": a.oClasses.sProcessing
    }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
  }

  function U(a, b) {
    a.oFeatures.bProcessing && k(a.aanFeatures.r).css("display", b ? "block" :
      "none");
    I(a, null, "processing", [a, b])
  }

  function Lb(a) {
    var b = k(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
      f = c.sY,
      e = a.oClasses,
      g = b.children("caption"),
      h = g.length ? g[0]._captionSide : null,
      l = k(b[0].cloneNode(!1)),
      n = k(b[0].cloneNode(!1)),
      m = b.children("tfoot");
    m.length || (m = null);
    l = k("<div/>", {
      "class": e.sScrollWrapper
    }).append(k("<div/>", {
      "class": e.sScrollHead
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: d ? d ? K(d) : null : "100%"
    }).append(k("<div/>", {
      "class": e.sScrollHeadInner
    }).css({
      "box-sizing": "content-box",
      width: c.sXInner || "100%"
    }).append(l.removeAttr("id").css("margin-left", 0).append("top" === h ? g : null).append(b.children("thead"))))).append(k("<div/>", {
      "class": e.sScrollBody
    }).css({
      position: "relative",
      overflow: "auto",
      width: d ? K(d) : null
    }).append(b));
    m && l.append(k("<div/>", {
      "class": e.sScrollFoot
    }).css({
      overflow: "hidden",
      border: 0,
      width: d ? d ? K(d) : null : "100%"
    }).append(k("<div/>", {
      "class": e.sScrollFootInner
    }).append(n.removeAttr("id").css("margin-left",
      0).append("bottom" === h ? g : null).append(b.children("tfoot")))));
    b = l.children();
    var p = b[0];
    e = b[1];
    var t = m ? b[2] : null;
    if (d) k(e).on("scroll.DT", function (v) {
      v = this.scrollLeft;
      p.scrollLeft = v;
      m && (t.scrollLeft = v)
    });
    k(e).css("max-height", f);
    c.bCollapse || k(e).css("height", f);
    a.nScrollHead = p;
    a.nScrollBody = e;
    a.nScrollFoot = t;
    a.aoDrawCallback.push({
      fn: Ea,
      sName: "scrolling"
    });
    return l[0]
  }

  function Ea(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      f = b.sY;
    b = b.iBarWidth;
    var e = k(a.nScrollHead),
      g = e[0].style,
      h = e.children("div"),
      l =
      h[0].style,
      n = h.children("table");
    h = a.nScrollBody;
    var m = k(h),
      p = h.style,
      t = k(a.nScrollFoot).children("div"),
      v = t.children("table"),
      x = k(a.nTHead),
      r = k(a.nTable),
      A = r[0],
      E = A.style,
      H = a.nTFoot ? k(a.nTFoot) : null,
      W = a.oBrowser,
      M = W.bScrollOversize,
      C = T(a.aoColumns, "nTh"),
      B = [],
      ba = [],
      X = [],
      lb = [],
      Aa, Yb = function (F) {
        F = F.style;
        F.paddingTop = "0";
        F.paddingBottom = "0";
        F.borderTopWidth = "0";
        F.borderBottomWidth = "0";
        F.height = 0
      };
    var ha = h.scrollHeight > h.clientHeight;
    if (a.scrollBarVis !== ha && a.scrollBarVis !== q) a.scrollBarVis = ha, ra(a);
    else {
      a.scrollBarVis = ha;
      r.children("thead, tfoot").remove();
      if (H) {
        var ka = H.clone().prependTo(r);
        var la = H.find("tr");
        ka = ka.find("tr")
      }
      var mb = x.clone().prependTo(r);
      x = x.find("tr");
      ha = mb.find("tr");
      mb.find("th, td").removeAttr("tabindex");
      c || (p.width = "100%", e[0].style.width = "100%");
      k.each(Ka(a, mb), function (F, Y) {
        Aa = sa(a, F);
        Y.style.width = a.aoColumns[Aa].sWidth
      });
      H && Z(function (F) {
        F.style.width = ""
      }, ka);
      e = r.outerWidth();
      "" === c ? (E.width = "100%", M && (r.find("tbody").height() > h.offsetHeight || "scroll" == m.css("overflow-y")) &&
        (E.width = K(r.outerWidth() - b)), e = r.outerWidth()) : "" !== d && (E.width = K(d), e = r.outerWidth());
      Z(Yb, ha);
      Z(function (F) {
        X.push(F.innerHTML);
        B.push(K(k(F).css("width")))
      }, ha);
      Z(function (F, Y) {
        -1 !== k.inArray(F, C) && (F.style.width = B[Y])
      }, x);
      k(ha).height(0);
      H && (Z(Yb, ka), Z(function (F) {
        lb.push(F.innerHTML);
        ba.push(K(k(F).css("width")))
      }, ka), Z(function (F, Y) {
        F.style.width = ba[Y]
      }, la), k(ka).height(0));
      Z(function (F, Y) {
        F.innerHTML = '<div class="dataTables_sizing">' + X[Y] + "</div>";
        F.childNodes[0].style.height = "0";
        F.childNodes[0].style.overflow =
          "hidden";
        F.style.width = B[Y]
      }, ha);
      H && Z(function (F, Y) {
        F.innerHTML = '<div class="dataTables_sizing">' + lb[Y] + "</div>";
        F.childNodes[0].style.height = "0";
        F.childNodes[0].style.overflow = "hidden";
        F.style.width = ba[Y]
      }, ka);
      r.outerWidth() < e ? (la = h.scrollHeight > h.offsetHeight || "scroll" == m.css("overflow-y") ? e + b : e, M && (h.scrollHeight > h.offsetHeight || "scroll" == m.css("overflow-y")) && (E.width = K(la - b)), "" !== c && "" === d || aa(a, 1, "Possible column misalignment", 6)) : la = "100%";
      p.width = K(la);
      g.width = K(la);
      H && (a.nScrollFoot.style.width =
        K(la));
      !f && M && (p.height = K(A.offsetHeight + b));
      c = r.outerWidth();
      n[0].style.width = K(c);
      l.width = K(c);
      d = r.height() > h.clientHeight || "scroll" == m.css("overflow-y");
      f = "padding" + (W.bScrollbarLeft ? "Left" : "Right");
      l[f] = d ? b + "px" : "0px";
      H && (v[0].style.width = K(c), t[0].style.width = K(c), t[0].style[f] = d ? b + "px" : "0px");
      r.children("colgroup").insertBefore(r.children("thead"));
      m.trigger("scroll");
      !a.bSorted && !a.bFiltered || a._drawHold || (h.scrollTop = 0)
    }
  }

  function Z(a, b, c) {
    for (var d = 0, f = 0, e = b.length, g, h; f < e;) {
      g = b[f].firstChild;
      for (h = c ? c[f].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, h, d) : a(g, d), d++), g = g.nextSibling, h = c ? h.nextSibling : null;
      f++
    }
  }

  function Xa(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      f = d.sY,
      e = d.sX,
      g = d.sXInner,
      h = c.length,
      l = Fa(a, "bVisible"),
      n = k("th", a.nTHead),
      m = b.getAttribute("width"),
      p = b.parentNode,
      t = !1,
      v, x = a.oBrowser;
    d = x.bScrollOversize;
    (v = b.style.width) && -1 !== v.indexOf("%") && (m = v);
    for (v = 0; v < l.length; v++) {
      var r = c[l[v]];
      null !== r.sWidth && (r.sWidth = Zb(r.sWidthOrig, p), t = !0)
    }
    if (d || !t && !e && !f && h == na(a) && h == n.length)
      for (v =
        0; v < h; v++) l = sa(a, v), null !== l && (c[l].sWidth = K(n.eq(v).width()));
    else {
      h = k(b).clone().css("visibility", "hidden").removeAttr("id");
      h.find("tbody tr").remove();
      var A = k("<tr/>").appendTo(h.find("tbody"));
      h.find("thead, tfoot").remove();
      h.append(k(a.nTHead).clone()).append(k(a.nTFoot).clone());
      h.find("tfoot th, tfoot td").css("width", "");
      n = Ka(a, h.find("thead")[0]);
      for (v = 0; v < l.length; v++) r = c[l[v]], n[v].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? K(r.sWidthOrig) : "", r.sWidthOrig && e && k(n[v]).append(k("<div/>").css({
        width: r.sWidthOrig,
        margin: 0,
        padding: 0,
        border: 0,
        height: 1
      }));
      if (a.aoData.length)
        for (v = 0; v < l.length; v++) t = l[v], r = c[t], k($b(a, t)).clone(!1).append(r.sContentPadding).appendTo(A);
      k("[name]", h).removeAttr("name");
      r = k("<div/>").css(e || f ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}).append(h).appendTo(p);
      e && g ? h.width(g) : e ? (h.css("width", "auto"), h.removeAttr("width"), h.width() < p.clientWidth && m && h.width(p.clientWidth)) : f ? h.width(p.clientWidth) : m && h.width(m);
      for (v = f = 0; v < l.length; v++) p = k(n[v]), g = p.outerWidth() -
        p.width(), p = x.bBounding ? Math.ceil(n[v].getBoundingClientRect().width) : p.outerWidth(), f += p, c[l[v]].sWidth = K(p - g);
      b.style.width = K(f);
      r.remove()
    }
    m && (b.style.width = K(m));
    !m && !e || a._reszEvt || (b = function () {
      k(y).on("resize.DT-" + a.sInstance, fb(function () {
        ra(a)
      }))
    }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0)
  }

  function Zb(a, b) {
    if (!a) return 0;
    a = k("<div/>").css("width", K(a)).appendTo(b || z.body);
    b = a[0].offsetWidth;
    a.remove();
    return b
  }

  function $b(a, b) {
    var c = ac(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return d.nTr ? d.anCells[b] :
      k("<td/>").html(S(a, c, b, "display"))[0]
  }

  function ac(a, b) {
    for (var c, d = -1, f = -1, e = 0, g = a.aoData.length; e < g; e++) c = S(a, e, b, "display") + "", c = c.replace(sc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, f = e);
    return f
  }

  function K(a) {
    return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
  }

  function pa(a) {
    var b = [],
      c = a.aoColumns;
    var d = a.aaSortingFixed;
    var f = k.isPlainObject(d);
    var e = [];
    var g = function (m) {
      m.length && !Array.isArray(m[0]) ? e.push(m) : k.merge(e, m)
    };
    Array.isArray(d) && g(d);
    f && d.pre && g(d.pre);
    g(a.aaSorting);
    f && d.post && g(d.post);
    for (a = 0; a < e.length; a++) {
      var h = e[a][0];
      g = c[h].aDataSort;
      d = 0;
      for (f = g.length; d < f; d++) {
        var l = g[d];
        var n = c[l].sType || "string";
        e[a]._idx === q && (e[a]._idx = k.inArray(e[a][1], c[l].asSorting));
        b.push({
          src: h,
          col: l,
          dir: e[a][1],
          index: e[a]._idx,
          type: n,
          formatter: u.ext.type.order[n + "-pre"]
        })
      }
    }
    return b
  }

  function Gb(a) {
    var b, c = [],
      d = u.ext.type.order,
      f = a.aoData,
      e = 0,
      g = a.aiDisplayMaster;
    Ya(a);
    var h = pa(a);
    var l = 0;
    for (b = h.length; l < b; l++) {
      var n = h[l];
      n.formatter && e++;
      bc(a,
        n.col)
    }
    if ("ssp" != P(a) && 0 !== h.length) {
      l = 0;
      for (b = g.length; l < b; l++) c[g[l]] = l;
      e === h.length ? g.sort(function (m, p) {
        var t, v = h.length,
          x = f[m]._aSortData,
          r = f[p]._aSortData;
        for (t = 0; t < v; t++) {
          var A = h[t];
          var E = x[A.col];
          var H = r[A.col];
          E = E < H ? -1 : E > H ? 1 : 0;
          if (0 !== E) return "asc" === A.dir ? E : -E
        }
        E = c[m];
        H = c[p];
        return E < H ? -1 : E > H ? 1 : 0
      }) : g.sort(function (m, p) {
        var t, v = h.length,
          x = f[m]._aSortData,
          r = f[p]._aSortData;
        for (t = 0; t < v; t++) {
          var A = h[t];
          var E = x[A.col];
          var H = r[A.col];
          A = d[A.type + "-" + A.dir] || d["string-" + A.dir];
          E = A(E, H);
          if (0 !== E) return E
        }
        E =
          c[m];
        H = c[p];
        return E < H ? -1 : E > H ? 1 : 0
      })
    }
    a.bSorted = !0
  }

  function cc(a) {
    var b = a.aoColumns,
      c = pa(a);
    a = a.oLanguage.oAria;
    for (var d = 0, f = b.length; d < f; d++) {
      var e = b[d];
      var g = e.asSorting;
      var h = e.sTitle.replace(/<.*?>/g, "");
      var l = e.nTh;
      l.removeAttribute("aria-sort");
      e.bSortable && (0 < c.length && c[0].col == d ? (l.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), e = g[c[0].index + 1] || g[0]) : e = g[0], h += "asc" === e ? a.sSortAscending : a.sSortDescending);
      l.setAttribute("aria-label", h)
    }
  }

  function nb(a, b, c, d) {
    var f = a.aaSorting,
      e = a.aoColumns[b].asSorting,
      g = function (h, l) {
        var n = h._idx;
        n === q && (n = k.inArray(h[1], e));
        return n + 1 < e.length ? n + 1 : l ? null : 0
      };
    "number" === typeof f[0] && (f = a.aaSorting = [f]);
    c && a.oFeatures.bSortMulti ? (c = k.inArray(b, T(f, "0")), -1 !== c ? (b = g(f[c], !0), null === b && 1 === f.length && (b = 0), null === b ? f.splice(c, 1) : (f[c][1] = e[b], f[c]._idx = b)) : (f.push([b, e[0], 0]), f[f.length - 1]._idx = 0)) : f.length && f[0][0] == b ? (b = g(f[0]), f.length = 1, f[0][1] = e[b], f[0]._idx = b) : (f.length = 0, f.push([b, e[0]]), f[0]._idx = 0);
    ja(a);
    "function" == typeof d && d(a)
  }

  function db(a, b, c, d) {
    var f = a.aoColumns[c];
    ob(b, {}, function (e) {
      !1 !== f.bSortable && (a.oFeatures.bProcessing ? (U(a, !0), setTimeout(function () {
        nb(a, c, e.shiftKey, d);
        "ssp" !== P(a) && U(a, !1)
      }, 0)) : nb(a, c, e.shiftKey, d))
    })
  }

  function Pa(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = pa(a),
      f = a.oFeatures,
      e;
    if (f.bSort && f.bSortClasses) {
      f = 0;
      for (e = b.length; f < e; f++) {
        var g = b[f].src;
        k(T(a.aoData, "anCells", g)).removeClass(c + (2 > f ? f + 1 : 3))
      }
      f = 0;
      for (e = d.length; f < e; f++) g = d[f].src, k(T(a.aoData, "anCells", g)).addClass(c + (2 > f ? f + 1 : 3))
    }
    a.aLastSort =
      d
  }

  function bc(a, b) {
    var c = a.aoColumns[b],
      d = u.ext.order[c.sSortDataType],
      f;
    d && (f = d.call(a.oInstance, a, b, ta(a, b)));
    for (var e, g = u.ext.type.order[c.sType + "-pre"], h = 0, l = a.aoData.length; h < l; h++)
      if (c = a.aoData[h], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) e = d ? f[h] : S(a, h, b, "sort"), c._aSortData[b] = g ? g(e) : e
  }

  function Qa(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date,
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: k.extend(!0, [], a.aaSorting),
        search: Ub(a.oPreviousSearch),
        columns: k.map(a.aoColumns,
          function (c, d) {
            return {
              visible: c.bVisible,
              search: Ub(a.aoPreSearchCols[d])
            }
          })
      };
      I(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a, b)
    }
  }

  function dc(a, b, c) {
    var d, f, e = a.aoColumns;
    b = function (h) {
      if (h && h.time) {
        var l = I(a, "aoStateLoadParams", "stateLoadParams", [a, h]);
        if (-1 === k.inArray(!1, l) && (l = a.iStateDuration, !(0 < l && h.time < +new Date - 1E3 * l || h.columns && e.length !== h.columns.length))) {
          a.oLoadedState = k.extend(!0, {}, h);
          h.start !== q && (a._iDisplayStart = h.start, a.iInitDisplayStart =
            h.start);
          h.length !== q && (a._iDisplayLength = h.length);
          h.order !== q && (a.aaSorting = [], k.each(h.order, function (n, m) {
            a.aaSorting.push(m[0] >= e.length ? [0, m[1]] : m)
          }));
          h.search !== q && k.extend(a.oPreviousSearch, Vb(h.search));
          if (h.columns)
            for (d = 0, f = h.columns.length; d < f; d++) l = h.columns[d], l.visible !== q && (e[d].bVisible = l.visible), l.search !== q && k.extend(a.aoPreSearchCols[d], Vb(l.search));
          I(a, "aoStateLoaded", "stateLoaded", [a, h])
        }
      }
      c()
    };
    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !==
        q && b(g)
    } else c()
  }

  function Ra(a) {
    var b = u.settings;
    a = k.inArray(a, T(b, "nTable"));
    return -1 !== a ? b[a] : null
  }

  function aa(a, b, c, d) {
    c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
    d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
    if (b) y.console && console.log && console.log(c);
    else if (b = u.ext, b = b.sErrMode || b.errMode, a && I(a, null, "error", [a, d, c]), "alert" == b) alert(c);
    else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c)
    }
  }

  function V(a, b, c, d) {
    Array.isArray(c) ?
      k.each(c, function (f, e) {
        Array.isArray(e) ? V(a, b, e[0], e[1]) : V(a, b, e)
      }) : (d === q && (d = c), b[c] !== q && (a[d] = b[c]))
  }

  function pb(a, b, c) {
    var d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var f = b[d];
        k.isPlainObject(f) ? (k.isPlainObject(a[d]) || (a[d] = {}), k.extend(!0, a[d], f)) : c && "data" !== d && "aaData" !== d && Array.isArray(f) ? a[d] = f.slice() : a[d] = f
      } return a
  }

  function ob(a, b, c) {
    k(a).on("click.DT", b, function (d) {
      k(a).trigger("blur");
      c(d)
    }).on("keypress.DT", b, function (d) {
      13 === d.which && (d.preventDefault(), c(d))
    }).on("selectstart.DT", function () {
      return !1
    })
  }

  function Q(a, b, c, d) {
    c && a[b].push({
      fn: c,
      sName: d
    })
  }

  function I(a, b, c, d) {
    var f = [];
    b && (f = k.map(a[b].slice().reverse(), function (e, g) {
      return e.fn.apply(a.oInstance, d)
    }));
    null !== c && (b = k.Event(c + ".dt"), k(a.nTable).trigger(b, d), f.push(b.result));
    return f
  }

  function jb(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b
  }

  function eb(a, b) {
    a = a.renderer;
    var c = u.ext.renderer[b];
    return k.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] ||
      c._ : c._
  }

  function P(a) {
    return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
  }

  function Ba(a, b) {
    var c = ec.numbers_length,
      d = Math.floor(c / 2);
    b <= c ? a = qa(0, b) : a <= d ? (a = qa(0, c - 2), a.push("ellipsis"), a.push(b - 1)) : (a >= b - 1 - d ? a = qa(b - (c - 2), b) : (a = qa(a - d + 2, a + d - 1), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
    a.DT_el = "span";
    return a
  }

  function Va(a) {
    k.each({
      num: function (b) {
        return Sa(b, a)
      },
      "num-fmt": function (b) {
        return Sa(b, a, qb)
      },
      "html-num": function (b) {
        return Sa(b, a, Ta)
      },
      "html-num-fmt": function (b) {
        return Sa(b,
          a, Ta, qb)
      }
    }, function (b, c) {
      L.type.order[b + a + "-pre"] = c;
      b.match(/^html\-/) && (L.type.search[b + a] = L.type.search.html)
    })
  }

  function fc(a) {
    return function () {
      var b = [Ra(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
      return u.ext.internal[a].apply(this, b)
    }
  }
  var u = function (a) {
      this.$ = function (e, g) {
        return this.api(!0).$(e, g)
      };
      this._ = function (e, g) {
        return this.api(!0).rows(e, g).data()
      };
      this.api = function (e) {
        return e ? new D(Ra(this[L.iApiIndex])) : new D(this)
      };
      this.fnAddData = function (e, g) {
        var h = this.api(!0);
        e = Array.isArray(e) && (Array.isArray(e[0]) || k.isPlainObject(e[0])) ? h.rows.add(e) : h.row.add(e);
        (g === q || g) && h.draw();
        return e.flatten().toArray()
      };
      this.fnAdjustColumnSizing = function (e) {
        var g = this.api(!0).columns.adjust(),
          h = g.settings()[0],
          l = h.oScroll;
        e === q || e ? g.draw(!1) : ("" !== l.sX || "" !== l.sY) && Ea(h)
      };
      this.fnClearTable = function (e) {
        var g = this.api(!0).clear();
        (e === q || e) && g.draw()
      };
      this.fnClose = function (e) {
        this.api(!0).row(e).child.hide()
      };
      this.fnDeleteRow = function (e, g, h) {
        var l = this.api(!0);
        e = l.rows(e);
        var n =
          e.settings()[0],
          m = n.aoData[e[0][0]];
        e.remove();
        g && g.call(this, n, m);
        (h === q || h) && l.draw();
        return m
      };
      this.fnDestroy = function (e) {
        this.api(!0).destroy(e)
      };
      this.fnDraw = function (e) {
        this.api(!0).draw(e)
      };
      this.fnFilter = function (e, g, h, l, n, m) {
        n = this.api(!0);
        null === g || g === q ? n.search(e, h, l, m) : n.column(g).search(e, h, l, m);
        n.draw()
      };
      this.fnGetData = function (e, g) {
        var h = this.api(!0);
        if (e !== q) {
          var l = e.nodeName ? e.nodeName.toLowerCase() : "";
          return g !== q || "td" == l || "th" == l ? h.cell(e, g).data() : h.row(e).data() || null
        }
        return h.data().toArray()
      };
      this.fnGetNodes = function (e) {
        var g = this.api(!0);
        return e !== q ? g.row(e).node() : g.rows().nodes().flatten().toArray()
      };
      this.fnGetPosition = function (e) {
        var g = this.api(!0),
          h = e.nodeName.toUpperCase();
        return "TR" == h ? g.row(e).index() : "TD" == h || "TH" == h ? (e = g.cell(e).index(), [e.row, e.columnVisible, e.column]) : null
      };
      this.fnIsOpen = function (e) {
        return this.api(!0).row(e).child.isShown()
      };
      this.fnOpen = function (e, g, h) {
        return this.api(!0).row(e).child(g, h).show().child()[0]
      };
      this.fnPageChange = function (e, g) {
        e = this.api(!0).page(e);
        (g === q || g) && e.draw(!1)
      };
      this.fnSetColumnVis = function (e, g, h) {
        e = this.api(!0).column(e).visible(g);
        (h === q || h) && e.columns.adjust().draw()
      };
      this.fnSettings = function () {
        return Ra(this[L.iApiIndex])
      };
      this.fnSort = function (e) {
        this.api(!0).order(e).draw()
      };
      this.fnSortListener = function (e, g, h) {
        this.api(!0).order.listener(e, g, h)
      };
      this.fnUpdate = function (e, g, h, l, n) {
        var m = this.api(!0);
        h === q || null === h ? m.row(g).data(e) : m.cell(g, h).data(e);
        (n === q || n) && m.columns.adjust();
        (l === q || l) && m.draw();
        return 0
      };
      this.fnVersionCheck =
        L.fnVersionCheck;
      var b = this,
        c = a === q,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = L.internal;
      for (var f in u.ext.internal) f && (this[f] = fc(f));
      this.each(function () {
        var e = {},
          g = 1 < d ? pb(e, a, !0) : a,
          h = 0,
          l;
        e = this.getAttribute("id");
        var n = !1,
          m = u.defaults,
          p = k(this);
        if ("table" != this.nodeName.toLowerCase()) aa(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
        else {
          yb(m);
          zb(m.column);
          O(m, m, !0);
          O(m.column, m.column, !0);
          O(m, k.extend(g, p.data()), !0);
          var t = u.settings;
          h = 0;
          for (l = t.length; h < l; h++) {
            var v = t[h];
            if (v.nTable == this || v.nTHead && v.nTHead.parentNode == this || v.nTFoot && v.nTFoot.parentNode == this) {
              var x = g.bRetrieve !== q ? g.bRetrieve : m.bRetrieve;
              if (c || x) return v.oInstance;
              if (g.bDestroy !== q ? g.bDestroy : m.bDestroy) {
                v.oInstance.fnDestroy();
                break
              } else {
                aa(v, 0, "Cannot reinitialise DataTable", 3);
                return
              }
            }
            if (v.sTableId == this.id) {
              t.splice(h, 1);
              break
            }
          }
          if (null === e || "" === e) this.id = e = "DataTables_Table_" + u.ext._unique++;
          var r = k.extend(!0, {}, u.models.oSettings, {
            sDestroyWidth: p[0].style.width,
            sInstance: e,
            sTableId: e
          });
          r.nTable =
            this;
          r.oApi = b.internal;
          r.oInit = g;
          t.push(r);
          r.oInstance = 1 === b.length ? b : p.dataTable();
          yb(g);
          ma(g.oLanguage);
          g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = Array.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
          g = pb(k.extend(!0, {}, m), g);
          V(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
          V(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed",
            "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"]
          ]);
          V(r.oScroll, g, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"]
          ]);
          V(r.oLanguage, g, "fnInfoCallback");
          Q(r, "aoDrawCallback", g.fnDrawCallback,
            "user");
          Q(r, "aoServerParams", g.fnServerParams, "user");
          Q(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
          Q(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
          Q(r, "aoStateLoaded", g.fnStateLoaded, "user");
          Q(r, "aoRowCallback", g.fnRowCallback, "user");
          Q(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
          Q(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
          Q(r, "aoFooterCallback", g.fnFooterCallback, "user");
          Q(r, "aoInitComplete", g.fnInitComplete, "user");
          Q(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
          r.rowIdFn =
            ia(g.rowId);
          Ab(r);
          var A = r.oClasses;
          k.extend(A, u.ext.classes, g.oClasses);
          p.addClass(A.sTable);
          r.iInitDisplayStart === q && (r.iInitDisplayStart = g.iDisplayStart, r._iDisplayStart = g.iDisplayStart);
          null !== g.iDeferLoading && (r.bDeferLoading = !0, e = Array.isArray(g.iDeferLoading), r._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, r._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
          var E = r.oLanguage;
          k.extend(!0, E, g.oLanguage);
          E.sUrl && (k.ajax({
            dataType: "json",
            url: E.sUrl,
            success: function (C) {
              ma(C);
              O(m.oLanguage,
                C);
              k.extend(!0, E, C);
              za(r)
            },
            error: function () {
              za(r)
            }
          }), n = !0);
          null === g.asStripeClasses && (r.asStripeClasses = [A.sStripeOdd, A.sStripeEven]);
          e = r.asStripeClasses;
          var H = p.children("tbody").find("tr").eq(0); - 1 !== k.inArray(!0, k.map(e, function (C, B) {
            return H.hasClass(C)
          })) && (k("tbody tr", this).removeClass(e.join(" ")), r.asDestroyStripes = e.slice());
          e = [];
          t = this.getElementsByTagName("thead");
          0 !== t.length && (wa(r.aoHeader, t[0]), e = Ka(r));
          if (null === g.aoColumns)
            for (t = [], h = 0, l = e.length; h < l; h++) t.push(null);
          else t = g.aoColumns;
          h = 0;
          for (l = t.length; h < l; h++) Wa(r, e ? e[h] : null);
          Cb(r, g.aoColumnDefs, t, function (C, B) {
            Da(r, C, B)
          });
          if (H.length) {
            var W = function (C, B) {
              return null !== C.getAttribute("data-" + B) ? B : null
            };
            k(H[0]).children("th, td").each(function (C, B) {
              var ba = r.aoColumns[C];
              if (ba.mData === C) {
                var X = W(B, "sort") || W(B, "order");
                B = W(B, "filter") || W(B, "search");
                if (null !== X || null !== B) ba.mData = {
                  _: C + ".display",
                  sort: null !== X ? C + ".@data-" + X : q,
                  type: null !== X ? C + ".@data-" + X : q,
                  filter: null !== B ? C + ".@data-" + B : q
                }, Da(r, C)
              }
            })
          }
          var M = r.oFeatures;
          e = function () {
            if (g.aaSorting ===
              q) {
              var C = r.aaSorting;
              h = 0;
              for (l = C.length; h < l; h++) C[h][1] = r.aoColumns[h].asSorting[0]
            }
            Pa(r);
            M.bSort && Q(r, "aoDrawCallback", function () {
              if (r.bSorted) {
                var ba = pa(r),
                  X = {};
                k.each(ba, function (lb, Aa) {
                  X[Aa.src] = Aa.dir
                });
                I(r, null, "order", [r, ba, X]);
                cc(r)
              }
            });
            Q(r, "aoDrawCallback", function () {
              (r.bSorted || "ssp" === P(r) || M.bDeferRender) && Pa(r)
            }, "sc");
            C = p.children("caption").each(function () {
              this._captionSide = k(this).css("caption-side")
            });
            var B = p.children("thead");
            0 === B.length && (B = k("<thead/>").appendTo(p));
            r.nTHead = B[0];
            B = p.children("tbody");
            0 === B.length && (B = k("<tbody/>").appendTo(p));
            r.nTBody = B[0];
            B = p.children("tfoot");
            0 === B.length && 0 < C.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (B = k("<tfoot/>").appendTo(p));
            0 === B.length || 0 === B.children().length ? p.addClass(A.sNoFooter) : 0 < B.length && (r.nTFoot = B[0], wa(r.aoFooter, r.nTFoot));
            if (g.aaData)
              for (h = 0; h < g.aaData.length; h++) ea(r, g.aaData[h]);
            else(r.bDeferLoading || "dom" == P(r)) && Ga(r, k(r.nTBody).children("tr"));
            r.aiDisplay = r.aiDisplayMaster.slice();
            r.bInitialised = !0;
            !1 ===
              n && za(r)
          };
          g.bStateSave ? (M.bStateSave = !0, Q(r, "aoDrawCallback", Qa, "state_save"), dc(r, g, e)) : e()
        }
      });
      b = null;
      return this
    },
    L, w, J, rb = {},
    gc = /[\r\n\u2028]/g,
    Ta = /<.*?>/g,
    tc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    uc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
    qb = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
    ca = function (a) {
      return a && !0 !== a && "-" !== a ? !1 : !0
    },
    hc = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) && isFinite(a) ? b : null
    },
    ic = function (a, b) {
      rb[b] ||
        (rb[b] = new RegExp(hb(b), "g"));
      return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(rb[b], ".") : a
    },
    sb = function (a, b, c) {
      var d = "string" === typeof a;
      if (ca(a)) return !0;
      b && d && (a = ic(a, b));
      c && d && (a = a.replace(qb, ""));
      return !isNaN(parseFloat(a)) && isFinite(a)
    },
    jc = function (a, b, c) {
      return ca(a) ? !0 : ca(a) || "string" === typeof a ? sb(a.replace(Ta, ""), b, c) ? !0 : null : null
    },
    T = function (a, b, c) {
      var d = [],
        f = 0,
        e = a.length;
      if (c !== q)
        for (; f < e; f++) a[f] && a[f][b] && d.push(a[f][b][c]);
      else
        for (; f < e; f++) a[f] && d.push(a[f][b]);
      return d
    },
    Ca = function (a, b, c, d) {
      var f = [],
        e = 0,
        g = b.length;
      if (d !== q)
        for (; e < g; e++) a[b[e]][c] && f.push(a[b[e]][c][d]);
      else
        for (; e < g; e++) f.push(a[b[e]][c]);
      return f
    },
    qa = function (a, b) {
      var c = [];
      if (b === q) {
        b = 0;
        var d = a
      } else d = b, b = a;
      for (a = b; a < d; a++) c.push(a);
      return c
    },
    kc = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b
    },
    Ja = function (a) {
      a: {
        if (!(2 > a.length)) {
          var b = a.slice().sort();
          for (var c = b[0], d = 1, f = b.length; d < f; d++) {
            if (b[d] === c) {
              b = !1;
              break a
            }
            c = b[d]
          }
        }
        b = !0
      }
      if (b) return a.slice();b = [];f = a.length;
      var e,
        g = 0;d = 0;a: for (; d < f; d++) {
        c = a[d];
        for (e = 0; e < g; e++)
          if (b[e] === c) continue a;
        b.push(c);
        g++
      }
      return b
    },
    lc = function (a, b) {
      if (Array.isArray(b))
        for (var c = 0; c < b.length; c++) lc(a, b[c]);
      else a.push(b);
      return a
    };
  Array.isArray || (Array.isArray = function (a) {
    return "[object Array]" === Object.prototype.toString.call(a)
  });
  String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  });
  u.util = {
    throttle: function (a, b) {
      var c = b !== q ? b : 200,
        d, f;
      return function () {
        var e = this,
          g = +new Date,
          h = arguments;
        d && g < d + c ? (clearTimeout(f), f = setTimeout(function () {
          d = q;
          a.apply(e, h)
        }, c)) : (d = g, a.apply(e, h))
      }
    },
    escapeRegex: function (a) {
      return a.replace(uc, "\\$1")
    }
  };
  var R = function (a, b, c) {
      a[b] !== q && (a[c] = a[b])
    },
    ua = /\[.*?\]$/,
    oa = /\(\)$/,
    hb = u.util.escapeRegex,
    Oa = k("<div>")[0],
    rc = Oa.textContent !== q,
    sc = /<.*?>/g,
    fb = u.util.throttle,
    mc = [],
    N = Array.prototype,
    vc = function (a) {
      var b, c = u.settings,
        d = k.map(c, function (e, g) {
          return e.nTable
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
          var f =
            k.inArray(a, d);
          return -1 !== f ? [c[f]] : null
        }
        if (a && "function" === typeof a.settings) return a.settings().toArray();
        "string" === typeof a ? b = k(a) : a instanceof k && (b = a)
      } else return [];
      if (b) return b.map(function (e) {
        f = k.inArray(this, d);
        return -1 !== f ? c[f] : null
      }).toArray()
    };
  var D = function (a, b) {
    if (!(this instanceof D)) return new D(a, b);
    var c = [],
      d = function (g) {
        (g = vc(g)) && c.push.apply(c, g)
      };
    if (Array.isArray(a))
      for (var f = 0, e = a.length; f < e; f++) d(a[f]);
    else d(a);
    this.context = Ja(c);
    b && k.merge(this, b);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };
    D.extend(this, this, mc)
  };
  u.Api = D;
  k.extend(D.prototype, {
    any: function () {
      return 0 !== this.count()
    },
    concat: N.concat,
    context: [],
    count: function () {
      return this.flatten().length
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
      return this
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new D(b[a], this[a]) : null
    },
    filter: function (a) {
      var b = [];
      if (N.filter) b = N.filter.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
      return new D(this.context, b)
    },
    flatten: function () {
      var a = [];
      return new D(this.context, a.concat.apply(a, this.toArray()))
    },
    join: N.join,
    indexOf: N.indexOf || function (a, b) {
      b = b || 0;
      for (var c = this.length; b < c; b++)
        if (this[b] === a) return b;
      return -1
    },
    iterator: function (a, b, c, d) {
      var f = [],
        e, g, h = this.context,
        l, n = this.selector;
      "string" === typeof a && (d = c, c = b, b = a, a = !1);
      var m = 0;
      for (e = h.length; m < e; m++) {
        var p = new D(h[m]);
        if ("table" === b) {
          var t = c.call(p, h[m], m);
          t !== q && f.push(t)
        } else if ("columns" === b || "rows" === b) t = c.call(p, h[m],
          this[m], m), t !== q && f.push(t);
        else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          var v = this[m];
          "column-rows" === b && (l = Ua(h[m], n.opts));
          var x = 0;
          for (g = v.length; x < g; x++) t = v[x], t = "cell" === b ? c.call(p, h[m], t.row, t.column, m, x) : c.call(p, h[m], t, m, x, l), t !== q && f.push(t)
        }
      }
      return f.length || d ? (a = new D(h, a ? f.concat.apply([], f) : f), b = a.selector, b.rows = n.rows, b.cols = n.cols, b.opts = n.opts, a) : this
    },
    lastIndexOf: N.lastIndexOf || function (a, b) {
      return this.indexOf.apply(this.toArray.reverse(), arguments)
    },
    length: 0,
    map: function (a) {
      var b = [];
      if (N.map) b = N.map.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
      return new D(this.context, b)
    },
    pluck: function (a) {
      return this.map(function (b) {
        return b[a]
      })
    },
    pop: N.pop,
    push: N.push,
    reduce: N.reduce || function (a, b) {
      return Bb(this, a, b, 0, this.length, 1)
    },
    reduceRight: N.reduceRight || function (a, b) {
      return Bb(this, a, b, this.length - 1, -1, -1)
    },
    reverse: N.reverse,
    selector: null,
    shift: N.shift,
    slice: function () {
      return new D(this.context, this)
    },
    sort: N.sort,
    splice: N.splice,
    toArray: function () {
      return N.slice.call(this)
    },
    to$: function () {
      return k(this)
    },
    toJQuery: function () {
      return k(this)
    },
    unique: function () {
      return new D(this.context, Ja(this))
    },
    unshift: N.unshift
  });
  D.extend = function (a, b, c) {
    if (c.length && b && (b instanceof D || b.__dt_wrapper)) {
      var d, f = function (h, l, n) {
        return function () {
          var m = l.apply(h, arguments);
          D.extend(m, m, n.methodExt);
          return m
        }
      };
      var e = 0;
      for (d = c.length; e < d; e++) {
        var g = c[e];
        b[g.name] = "function" === g.type ? f(a, g.val, g) : "object" === g.type ? {} : g.val;
        b[g.name].__dt_wrapper = !0;
        D.extend(a, b[g.name], g.propExt)
      }
    }
  };
  D.register = w = function (a, b) {
    if (Array.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) D.register(a[c], b);
    else {
      d = a.split(".");
      var f = mc,
        e;
      a = 0;
      for (c = d.length; a < c; a++) {
        var g = (e = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
        a: {
          var h = 0;
          for (var l = f.length; h < l; h++)
            if (f[h].name === g) {
              h = f[h];
              break a
            } h = null
        }
        h || (h = {
          name: g,
          val: {},
          methodExt: [],
          propExt: [],
          type: "object"
        }, f.push(h));
        a === c - 1 ? (h.val = b, h.type = "function" === typeof b ? "function" : k.isPlainObject(b) ? "object" : "other") : f = e ?
          h.methodExt : h.propExt
      }
    }
  };
  D.registerPlural = J = function (a, b, c) {
    D.register(a, c);
    D.register(b, function () {
      var d = c.apply(this, arguments);
      return d === this ? this : d instanceof D ? d.length ? Array.isArray(d[0]) ? new D(d.context, d[0]) : d[0] : q : d
    })
  };
  var nc = function (a, b) {
    if (Array.isArray(a)) return k.map(a, function (d) {
      return nc(d, b)
    });
    if ("number" === typeof a) return [b[a]];
    var c = k.map(b, function (d, f) {
      return d.nTable
    });
    return k(c).filter(a).map(function (d) {
      d = k.inArray(this, c);
      return b[d]
    }).toArray()
  };
  w("tables()", function (a) {
    return a !==
      q && null !== a ? new D(nc(a, this.context)) : this
  });
  w("table()", function (a) {
    a = this.tables(a);
    var b = a.context;
    return b.length ? new D(b[0]) : a
  });
  J("tables().nodes()", "table().node()", function () {
    return this.iterator("table", function (a) {
      return a.nTable
    }, 1)
  });
  J("tables().body()", "table().body()", function () {
    return this.iterator("table", function (a) {
      return a.nTBody
    }, 1)
  });
  J("tables().header()", "table().header()", function () {
    return this.iterator("table", function (a) {
      return a.nTHead
    }, 1)
  });
  J("tables().footer()", "table().footer()",
    function () {
      return this.iterator("table", function (a) {
        return a.nTFoot
      }, 1)
    });
  J("tables().containers()", "table().container()", function () {
    return this.iterator("table", function (a) {
      return a.nTableWrapper
    }, 1)
  });
  w("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a ? fa(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), ja(b, !1 === a))
    })
  });
  w("page()", function (a) {
    return a === q ? this.page.info().page : this.iterator("table", function (b) {
      kb(b, a)
    })
  });
  w("page.info()", function (a) {
    if (0 === this.context.length) return q;
    a = this.context[0];
    var b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      f = -1 === c;
    return {
      page: f ? 0 : Math.floor(b / c),
      pages: f ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === P(a)
    }
  });
  w("page.len()", function (a) {
    return a === q ? 0 !== this.context.length ? this.context[0]._iDisplayLength : q : this.iterator("table", function (b) {
      ib(b, a)
    })
  });
  var oc = function (a, b, c) {
    if (c) {
      var d = new D(a);
      d.one("draw", function () {
        c(d.ajax.json())
      })
    }
    if ("ssp" ==
      P(a)) ja(a, b);
    else {
      U(a, !0);
      var f = a.jqXHR;
      f && 4 !== f.readyState && f.abort();
      La(a, [], function (e) {
        Ha(a);
        e = Ma(a, e);
        for (var g = 0, h = e.length; g < h; g++) ea(a, e[g]);
        ja(a, b);
        U(a, !1)
      })
    }
  };
  w("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json
  });
  w("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData
  });
  w("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      oc(c, !1 === b, a)
    })
  });
  w("ajax.url()", function (a) {
    var b = this.context;
    if (a === q) {
      if (0 === b.length) return q;
      b = b[0];
      return b.ajax ? k.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
    }
    return this.iterator("table", function (c) {
      k.isPlainObject(c.ajax) ? c.ajax.url = a : c.ajax = a
    })
  });
  w("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      oc(c, !1 === b, a)
    })
  });
  var tb = function (a, b, c, d, f) {
      var e = [],
        g, h, l;
      var n = typeof b;
      b && "string" !== n && "function" !== n && b.length !== q || (b = [b]);
      n = 0;
      for (h = b.length; n < h; n++) {
        var m = b[n] && b[n].split && !b[n].match(/[\[\(:]/) ? b[n].split(",") : [b[n]];
        var p = 0;
        for (l = m.length; p < l; p++)(g =
          c("string" === typeof m[p] ? m[p].trim() : m[p])) && g.length && (e = e.concat(g))
      }
      a = L.selector[a];
      if (a.length)
        for (n = 0, h = a.length; n < h; n++) e = a[n](d, f, e);
      return Ja(e)
    },
    ub = function (a) {
      a || (a = {});
      a.filter && a.search === q && (a.search = a.filter);
      return k.extend({
        search: "none",
        order: "current",
        page: "all"
      }, a)
    },
    vb = function (a) {
      for (var b = 0, c = a.length; b < c; b++)
        if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
      a.length = 0;
      return a
    },
    Ua = function (a, b) {
      var c = [],
        d = a.aiDisplay;
      var f = a.aiDisplayMaster;
      var e = b.search;
      var g = b.order;
      b = b.page;
      if ("ssp" == P(a)) return "removed" === e ? [] : qa(0, f.length);
      if ("current" == b)
        for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++) c.push(d[g]);
      else if ("current" == g || "applied" == g)
        if ("none" == e) c = f.slice();
        else if ("applied" == e) c = d.slice();
      else {
        if ("removed" == e) {
          var h = {};
          g = 0;
          for (a = d.length; g < a; g++) h[d[g]] = null;
          c = k.map(f, function (l) {
            return h.hasOwnProperty(l) ? null : l
          })
        }
      } else if ("index" == g || "original" == g)
        for (g = 0, a = a.aoData.length; g < a; g++) "none" == e ? c.push(g) : (f = k.inArray(g, d), (-1 ===
          f && "removed" == e || 0 <= f && "applied" == e) && c.push(g));
      return c
    },
    wc = function (a, b, c) {
      var d;
      return tb("row", b, function (f) {
        var e = hc(f),
          g = a.aoData;
        if (null !== e && !c) return [e];
        d || (d = Ua(a, c));
        if (null !== e && -1 !== k.inArray(e, d)) return [e];
        if (null === f || f === q || "" === f) return d;
        if ("function" === typeof f) return k.map(d, function (l) {
          var n = g[l];
          return f(l, n._aData, n.nTr) ? l : null
        });
        if (f.nodeName) {
          e = f._DT_RowIndex;
          var h = f._DT_CellIndex;
          if (e !== q) return g[e] && g[e].nTr === f ? [e] : [];
          if (h) return g[h.row] && g[h.row].nTr === f.parentNode ? [h.row] : [];
          e = k(f).closest("*[data-dt-row]");
          return e.length ? [e.data("dt-row")] : []
        }
        if ("string" === typeof f && "#" === f.charAt(0) && (e = a.aIds[f.replace(/^#/, "")], e !== q)) return [e.idx];
        e = kc(Ca(a.aoData, d, "nTr"));
        return k(e).filter(f).map(function () {
          return this._DT_RowIndex
        }).toArray()
      }, a, c)
    };
  w("rows()", function (a, b) {
    a === q ? a = "" : k.isPlainObject(a) && (b = a, a = "");
    b = ub(b);
    var c = this.iterator("table", function (d) {
      return wc(d, a, b)
    }, 1);
    c.selector.rows = a;
    c.selector.opts = b;
    return c
  });
  w("rows().nodes()", function () {
    return this.iterator("row",
      function (a, b) {
        return a.aoData[b].nTr || q
      }, 1)
  });
  w("rows().data()", function () {
    return this.iterator(!0, "rows", function (a, b) {
      return Ca(a.aoData, b, "_aData")
    }, 1)
  });
  J("rows().cache()", "row().cache()", function (a) {
    return this.iterator("row", function (b, c) {
      b = b.aoData[c];
      return "search" === a ? b._aFilterData : b._aSortData
    }, 1)
  });
  J("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row", function (b, c) {
      va(b, c, a)
    })
  });
  J("rows().indexes()", "row().index()", function () {
    return this.iterator("row", function (a,
      b) {
      return b
    }, 1)
  });
  J("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, f = c.length; d < f; d++)
      for (var e = 0, g = this[d].length; e < g; e++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][e]]._aData);
        b.push((!0 === a ? "#" : "") + h)
      }
    return new D(c, b)
  });
  J("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var f = b.aoData,
        e = f[c],
        g, h;
      f.splice(c, 1);
      var l = 0;
      for (g = f.length; l < g; l++) {
        var n = f[l];
        var m = n.anCells;
        null !== n.nTr && (n.nTr._DT_RowIndex = l);
        if (null !== m)
          for (n = 0, h = m.length; n <
            h; n++) m[n]._DT_CellIndex.row = l
      }
      Ia(b.aiDisplayMaster, c);
      Ia(b.aiDisplay, c);
      Ia(a[d], c, !1);
      0 < b._iRecordsDisplay && b._iRecordsDisplay--;
      jb(b);
      c = b.rowIdFn(e._aData);
      c !== q && delete b.aIds[c]
    });
    this.iterator("table", function (b) {
      for (var c = 0, d = b.aoData.length; c < d; c++) b.aoData[c].idx = c
    });
    return this
  });
  w("rows.add()", function (a) {
    var b = this.iterator("table", function (d) {
        var f, e = [];
        var g = 0;
        for (f = a.length; g < f; g++) {
          var h = a[g];
          h.nodeName && "TR" === h.nodeName.toUpperCase() ? e.push(Ga(d, h)[0]) : e.push(ea(d, h))
        }
        return e
      }, 1),
      c = this.rows(-1);
    c.pop();
    k.merge(c, b);
    return c
  });
  w("row()", function (a, b) {
    return vb(this.rows(a, b))
  });
  w("row().data()", function (a) {
    var b = this.context;
    if (a === q) return b.length && this.length ? b[0].aoData[this[0]]._aData : q;
    var c = b[0].aoData[this[0]];
    c._aData = a;
    Array.isArray(a) && c.nTr && c.nTr.id && da(b[0].rowId)(a, c.nTr.id);
    va(b[0], this[0], "data");
    return this
  });
  w("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
  });
  w("row.add()", function (a) {
    a instanceof
    k && a.length && (a = a[0]);
    var b = this.iterator("table", function (c) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase() ? Ga(c, a)[0] : ea(c, a)
    });
    return this.row(b[0])
  });
  var xc = function (a, b, c, d) {
      var f = [],
        e = function (g, h) {
          if (Array.isArray(g) || g instanceof k)
            for (var l = 0, n = g.length; l < n; l++) e(g[l], h);
          else g.nodeName && "tr" === g.nodeName.toLowerCase() ? f.push(g) : (l = k("<tr><td></td></tr>").addClass(h), k("td", l).addClass(h).html(g)[0].colSpan = na(a), f.push(l[0]))
        };
      e(c, d);
      b._details && b._details.detach();
      b._details = k(f);
      b._detailsShow &&
        b._details.insertAfter(b.nTr)
    },
    wb = function (a, b) {
      var c = a.context;
      c.length && (a = c[0].aoData[b !== q ? b : a[0]]) && a._details && (a._details.remove(), a._detailsShow = q, a._details = q)
    },
    pc = function (a, b) {
      var c = a.context;
      c.length && a.length && (a = c[0].aoData[a[0]], a._details && ((a._detailsShow = b) ? a._details.insertAfter(a.nTr) : a._details.detach(), yc(c[0])))
    },
    yc = function (a) {
      var b = new D(a),
        c = a.aoData;
      b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
      0 < T(c, "_details").length && (b.on("draw.dt.DT_details",
        function (d, f) {
          a === f && b.rows({
            page: "current"
          }).eq(0).each(function (e) {
            e = c[e];
            e._detailsShow && e._details.insertAfter(e.nTr)
          })
        }), b.on("column-visibility.dt.DT_details", function (d, f, e, g) {
        if (a === f)
          for (f = na(f), e = 0, g = c.length; e < g; e++) d = c[e], d._details && d._details.children("td[colspan]").attr("colspan", f)
      }), b.on("destroy.dt.DT_details", function (d, f) {
        if (a === f)
          for (d = 0, f = c.length; d < f; d++) c[d]._details && wb(b, d)
      }))
    };
  w("row().child()", function (a, b) {
    var c = this.context;
    if (a === q) return c.length && this.length ? c[0].aoData[this[0]]._details :
      q;
    !0 === a ? this.child.show() : !1 === a ? wb(this) : c.length && this.length && xc(c[0], c[0].aoData[this[0]], a, b);
    return this
  });
  w(["row().child.show()", "row().child().show()"], function (a) {
    pc(this, !0);
    return this
  });
  w(["row().child.hide()", "row().child().hide()"], function () {
    pc(this, !1);
    return this
  });
  w(["row().child.remove()", "row().child().remove()"], function () {
    wb(this);
    return this
  });
  w("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
  });
  var zc =
    /^([^:]+):(name|visIdx|visible)$/,
    qc = function (a, b, c, d, f) {
      c = [];
      d = 0;
      for (var e = f.length; d < e; d++) c.push(S(a, f[d], b));
      return c
    },
    Ac = function (a, b, c) {
      var d = a.aoColumns,
        f = T(d, "sName"),
        e = T(d, "nTh");
      return tb("column", b, function (g) {
        var h = hc(g);
        if ("" === g) return qa(d.length);
        if (null !== h) return [0 <= h ? h : d.length + h];
        if ("function" === typeof g) {
          var l = Ua(a, c);
          return k.map(d, function (p, t) {
            return g(t, qc(a, t, 0, 0, l), e[t]) ? t : null
          })
        }
        var n = "string" === typeof g ? g.match(zc) : "";
        if (n) switch (n[2]) {
          case "visIdx":
          case "visible":
            h = parseInt(n[1],
              10);
            if (0 > h) {
              var m = k.map(d, function (p, t) {
                return p.bVisible ? t : null
              });
              return [m[m.length + h]]
            }
            return [sa(a, h)];
          case "name":
            return k.map(f, function (p, t) {
              return p === n[1] ? t : null
            });
          default:
            return []
        }
        if (g.nodeName && g._DT_CellIndex) return [g._DT_CellIndex.column];
        h = k(e).filter(g).map(function () {
          return k.inArray(this, e)
        }).toArray();
        if (h.length || !g.nodeName) return h;
        h = k(g).closest("*[data-dt-column]");
        return h.length ? [h.data("dt-column")] : []
      }, a, c)
    };
  w("columns()", function (a, b) {
    a === q ? a = "" : k.isPlainObject(a) && (b = a,
      a = "");
    b = ub(b);
    var c = this.iterator("table", function (d) {
      return Ac(d, a, b)
    }, 1);
    c.selector.cols = a;
    c.selector.opts = b;
    return c
  });
  J("columns().header()", "column().header()", function (a, b) {
    return this.iterator("column", function (c, d) {
      return c.aoColumns[d].nTh
    }, 1)
  });
  J("columns().footer()", "column().footer()", function (a, b) {
    return this.iterator("column", function (c, d) {
      return c.aoColumns[d].nTf
    }, 1)
  });
  J("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", qc, 1)
  });
  J("columns().dataSrc()",
    "column().dataSrc()",
    function () {
      return this.iterator("column", function (a, b) {
        return a.aoColumns[b].mData
      }, 1)
    });
  J("columns().cache()", "column().cache()", function (a) {
    return this.iterator("column-rows", function (b, c, d, f, e) {
      return Ca(b.aoData, e, "search" === a ? "_aFilterData" : "_aSortData", c)
    }, 1)
  });
  J("columns().nodes()", "column().nodes()", function () {
    return this.iterator("column-rows", function (a, b, c, d, f) {
      return Ca(a.aoData, f, "anCells", b)
    }, 1)
  });
  J("columns().visible()", "column().visible()", function (a, b) {
    var c =
      this,
      d = this.iterator("column", function (f, e) {
        if (a === q) return f.aoColumns[e].bVisible;
        var g = f.aoColumns,
          h = g[e],
          l = f.aoData,
          n;
        if (a !== q && h.bVisible !== a) {
          if (a) {
            var m = k.inArray(!0, T(g, "bVisible"), e + 1);
            g = 0;
            for (n = l.length; g < n; g++) {
              var p = l[g].nTr;
              f = l[g].anCells;
              p && p.insertBefore(f[e], f[m] || null)
            }
          } else k(T(f.aoData, "anCells", e)).detach();
          h.bVisible = a
        }
      });
    a !== q && this.iterator("table", function (f) {
      xa(f, f.aoHeader);
      xa(f, f.aoFooter);
      f.aiDisplay.length || k(f.nTBody).find("td[colspan]").attr("colspan", na(f));
      Qa(f);
      c.iterator("column",
        function (e, g) {
          I(e, null, "column-visibility", [e, g, a, b])
        });
      (b === q || b) && c.columns.adjust()
    });
    return d
  });
  J("columns().indexes()", "column().index()", function (a) {
    return this.iterator("column", function (b, c) {
      return "visible" === a ? ta(b, c) : c
    }, 1)
  });
  w("columns.adjust()", function () {
    return this.iterator("table", function (a) {
      ra(a)
    }, 1)
  });
  w("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return sa(c, b);
      if ("fromData" === a || "toVisible" === a) return ta(c, b)
    }
  });
  w("column()", function (a, b) {
    return vb(this.columns(a, b))
  });
  var Bc = function (a, b, c) {
    var d = a.aoData,
      f = Ua(a, c),
      e = kc(Ca(d, f, "anCells")),
      g = k(lc([], e)),
      h, l = a.aoColumns.length,
      n, m, p, t, v, x;
    return tb("cell", b, function (r) {
      var A = "function" === typeof r;
      if (null === r || r === q || A) {
        n = [];
        m = 0;
        for (p = f.length; m < p; m++)
          for (h = f[m], t = 0; t < l; t++) v = {
            row: h,
            column: t
          }, A ? (x = d[h], r(v, S(a, h, t), x.anCells ? x.anCells[t] : null) && n.push(v)) : n.push(v);
        return n
      }
      if (k.isPlainObject(r)) return r.column !== q && r.row !== q && -1 !== k.inArray(r.row, f) ? [r] : [];
      A = g.filter(r).map(function (E, H) {
        return {
          row: H._DT_CellIndex.row,
          column: H._DT_CellIndex.column
        }
      }).toArray();
      if (A.length || !r.nodeName) return A;
      x = k(r).closest("*[data-dt-row]");
      return x.length ? [{
        row: x.data("dt-row"),
        column: x.data("dt-column")
      }] : []
    }, a, c)
  };
  w("cells()", function (a, b, c) {
    k.isPlainObject(a) && (a.row === q ? (c = a, a = null) : (c = b, b = null));
    k.isPlainObject(b) && (c = b, b = null);
    if (null === b || b === q) return this.iterator("table", function (m) {
      return Bc(m, a, ub(c))
    });
    var d = c ? {
        page: c.page,
        order: c.order,
        search: c.search
      } : {},
      f = this.columns(b, d),
      e = this.rows(a, d),
      g, h, l, n;
    d = this.iterator("table", function (m, p) {
      m = [];
      g = 0;
      for (h = e[p].length; g < h; g++)
        for (l = 0, n = f[p].length; l < n; l++) m.push({
          row: e[p][g],
          column: f[p][l]
        });
      return m
    }, 1);
    d = c && c.selected ? this.cells(d, c) : d;
    k.extend(d.selector, {
      cols: b,
      rows: a,
      opts: c
    });
    return d
  });
  J("cells().nodes()", "cell().node()", function () {
    return this.iterator("cell", function (a, b, c) {
      return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : q
    }, 1)
  });
  w("cells().data()", function () {
    return this.iterator("cell", function (a,
      b, c) {
      return S(a, b, c)
    }, 1)
  });
  J("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function (b, c, d) {
      return b.aoData[c][a][d]
    }, 1)
  });
  J("cells().render()", "cell().render()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      return S(b, c, d, a)
    }, 1)
  });
  J("cells().indexes()", "cell().index()", function () {
    return this.iterator("cell", function (a, b, c) {
      return {
        row: b,
        column: c,
        columnVisible: ta(a, c)
      }
    }, 1)
  });
  J("cells().invalidate()", "cell().invalidate()",
    function (a) {
      return this.iterator("cell", function (b, c, d) {
        va(b, c, a, d)
      })
    });
  w("cell()", function (a, b, c) {
    return vb(this.cells(a, b, c))
  });
  w("cell().data()", function (a) {
    var b = this.context,
      c = this[0];
    if (a === q) return b.length && c.length ? S(b[0], c[0].row, c[0].column) : q;
    Db(b[0], c[0].row, c[0].column, a);
    va(b[0], c[0].row, "data", c[0].column);
    return this
  });
  w("order()", function (a, b) {
    var c = this.context;
    if (a === q) return 0 !== c.length ? c[0].aaSorting : q;
    "number" === typeof a ? a = [
      [a, b]
    ] : a.length && !Array.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (d) {
      d.aaSorting = a.slice()
    })
  });
  w("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      db(d, a, b, c)
    })
  });
  w("order.fixed()", function (a) {
    if (!a) {
      var b = this.context;
      b = b.length ? b[0].aaSortingFixed : q;
      return Array.isArray(b) ? {
        pre: b
      } : b
    }
    return this.iterator("table", function (c) {
      c.aaSortingFixed = k.extend(!0, {}, a)
    })
  });
  w(["columns().order()", "column().order()"], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var f = [];
      k.each(b[d], function (e,
        g) {
        f.push([g, a])
      });
      c.aaSorting = f
    })
  });
  w("search()", function (a, b, c, d) {
    var f = this.context;
    return a === q ? 0 !== f.length ? f[0].oPreviousSearch.sSearch : q : this.iterator("table", function (e) {
      e.oFeatures.bFilter && ya(e, k.extend({}, e.oPreviousSearch, {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), 1)
    })
  });
  J("columns().search()", "column().search()", function (a, b, c, d) {
    return this.iterator("column", function (f, e) {
      var g = f.aoPreSearchCols;
      if (a === q) return g[e].sSearch;
      f.oFeatures.bFilter &&
        (k.extend(g[e], {
          sSearch: a + "",
          bRegex: null === b ? !1 : b,
          bSmart: null === c ? !0 : c,
          bCaseInsensitive: null === d ? !0 : d
        }), ya(f, f.oPreviousSearch, 1))
    })
  });
  w("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null
  });
  w("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {})
    })
  });
  w("state.loaded()", function () {
    return this.context.length ? this.context[0].oLoadedState : null
  });
  w("state.save()", function () {
    return this.iterator("table", function (a) {
      Qa(a)
    })
  });
  u.versionCheck = u.fnVersionCheck = function (a) {
    var b = u.version.split(".");
    a = a.split(".");
    for (var c, d, f = 0, e = a.length; f < e; f++)
      if (c = parseInt(b[f], 10) || 0, d = parseInt(a[f], 10) || 0, c !== d) return c > d;
    return !0
  };
  u.isDataTable = u.fnIsDataTable = function (a) {
    var b = k(a).get(0),
      c = !1;
    if (a instanceof u.Api) return !0;
    k.each(u.settings, function (d, f) {
      d = f.nScrollHead ? k("table", f.nScrollHead)[0] : null;
      var e = f.nScrollFoot ? k("table", f.nScrollFoot)[0] : null;
      if (f.nTable === b || d === b || e === b) c = !0
    });
    return c
  };
  u.tables = u.fnTables = function (a) {
    var b = !1;
    k.isPlainObject(a) && (b = a.api, a = a.visible);
    var c = k.map(u.settings, function (d) {
      if (!a || a && k(d.nTable).is(":visible")) return d.nTable
    });
    return b ? new D(c) : c
  };
  u.camelToHungarian = O;
  w("$()", function (a, b) {
    b = this.rows(b).nodes();
    b = k(b);
    return k([].concat(b.filter(a).toArray(), b.find(a).toArray()))
  });
  k.each(["on", "one", "off"], function (a, b) {
    w(b + "()", function () {
      var c = Array.prototype.slice.call(arguments);
      c[0] = k.map(c[0].split(/\s/), function (f) {
        return f.match(/\.dt\b/) ? f : f + ".dt"
      }).join(" ");
      var d = k(this.tables().nodes());
      d[b].apply(d, c);
      return this
    })
  });
  w("clear()", function () {
    return this.iterator("table", function (a) {
      Ha(a)
    })
  });
  w("settings()", function () {
    return new D(this.context, this.context)
  });
  w("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null
  });
  w("data()", function () {
    return this.iterator("table", function (a) {
      return T(a.aoData, "_aData")
    }).flatten()
  });
  w("destroy()", function (a) {
    a = a || !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
        d = b.oClasses,
        f = b.nTable,
        e = b.nTBody,
        g = b.nTHead,
        h = b.nTFoot,
        l = k(f);
      e = k(e);
      var n = k(b.nTableWrapper),
        m = k.map(b.aoData, function (t) {
          return t.nTr
        }),
        p;
      b.bDestroying = !0;
      I(b, "aoDestroyCallback", "destroy", [b]);
      a || (new D(b)).columns().visible(!0);
      n.off(".DT").find(":not(tbody *)").off(".DT");
      k(y).off(".DT-" + b.sInstance);
      f != g.parentNode && (l.children("thead").detach(), l.append(g));
      h && f != h.parentNode && (l.children("tfoot").detach(), l.append(h));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      Pa(b);
      k(m).removeClass(b.asStripeClasses.join(" "));
      k("th, td", g).removeClass(d.sSortable +
        " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
      e.children().detach();
      e.append(m);
      g = a ? "remove" : "detach";
      l[g]();
      n[g]();
      !a && c && (c.insertBefore(f, b.nTableReinsertBefore), l.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && e.children().each(function (t) {
        k(this).addClass(b.asDestroyStripes[t % p])
      }));
      c = k.inArray(b, u.settings); - 1 !== c && u.settings.splice(c, 1)
    })
  });
  k.each(["column", "row", "cell"], function (a, b) {
    w(b + "s().every()", function (c) {
      var d = this.selector.opts,
        f =
        this;
      return this.iterator(b, function (e, g, h, l, n) {
        c.call(f[b](g, "cell" === b ? h : d, "cell" === b ? d : q), g, h, l, n)
      })
    })
  });
  w("i18n()", function (a, b, c) {
    var d = this.context[0];
    a = ia(a)(d.oLanguage);
    a === q && (a = b);
    c !== q && k.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._);
    return a.replace("%d", c)
  });
  u.version = "1.10.22";
  u.settings = [];
  u.models = {};
  u.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0
  };
  u.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1
  };
  u.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null
  };
  u.defaults = {
    aaData: null,
    aaSorting: [
      [0, "asc"]
    ],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10,
      25, 50, 100
    ],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
      } catch (b) {
        return {}
      }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending"
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous"
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found"
    },
    oSearch: k.extend({}, u.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId"
  };
  G(u.defaults);
  u.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null
  };
  G(u.defaults.column);
  u.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null
    },
    oLanguage: {
      fnInfoCallback: null
    },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: q,
    oAjaxData: q,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return "ssp" == P(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
    },
    fnRecordsDisplay: function () {
      return "ssp" == P(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        f = this.oFeatures,
        e = f.bPaginate;
      return f.bServerSide ? !1 === e || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !e || c > d || -1 === a ? d : c
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null
  };
  u.ext = L = {
    buttons: {},
    classes: {},
    builder: "bs4/jszip-2.5.0/dt-1.10.22/af-2.3.5/b-1.6.5/b-colvis-1.6.5/b-flash-1.6.5/b-html5-1.6.5/b-print-1.6.5/cr-1.5.2/fc-3.3.1/fh-3.1.7/kt-2.5.3/r-2.2.6/rg-1.1.2/rr-1.2.7/sc-2.0.3/sb-1.0.0/sp-1.2.1/sl-1.3.1",
    errMode: "alert",
    feature: [],
    search: [],
    selector: {
      cell: [],
      column: [],
      row: []
    },
    internal: {},
    legacy: {
      ajax: null
    },
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    order: {},
    type: {
      detect: [],
      search: {},
      order: {}
    },
    _unique: 0,
    fnVersionCheck: u.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: u.version
  };
  k.extend(L, {
    afnFiltering: L.search,
    aTypes: L.type.detect,
    ofnSearch: L.type.search,
    oSort: L.type.order,
    afnSortData: L.order,
    aoFeatures: L.feature,
    oApi: L.internal,
    oStdClasses: L.classes,
    oPagination: L.pager
  });
  k.extend(u.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_asc_disabled",
    sSortableDesc: "sorting_desc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: ""
  });
  var ec = u.ext.pager;
  k.extend(ec, {
    simple: function (a, b) {
      return ["previous", "next"]
    },
    full: function (a, b) {
      return ["first", "previous", "next", "last"]
    },
    numbers: function (a, b) {
      return [Ba(a, b)]
    },
    simple_numbers: function (a, b) {
      return ["previous", Ba(a, b), "next"]
    },
    full_numbers: function (a, b) {
      return ["first", "previous", Ba(a, b), "next", "last"]
    },
    first_last_numbers: function (a, b) {
      return ["first", Ba(a, b), "last"]
    },
    _numbers: Ba,
    numbers_length: 7
  });
  k.extend(!0, u.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, f, e) {
        var g = a.oClasses,
          h = a.oLanguage.oPaginate,
          l = a.oLanguage.oAria.paginate || {},
          n, m, p = 0,
          t = function (x, r) {
            var A, E = g.sPageButtonDisabled,
              H = function (B) {
                kb(a, B.data.action, !0)
              };
            var W = 0;
            for (A = r.length; W < A; W++) {
              var M = r[W];
              if (Array.isArray(M)) {
                var C = k("<" + (M.DT_el || "div") + "/>").appendTo(x);
                t(C, M)
              } else {
                n = null;
                m = M;
                C = a.iTabIndex;
                switch (M) {
                  case "ellipsis":
                    x.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    n = h.sFirst;
                    0 === f && (C = -1, m += " " + E);
                    break;
                  case "previous":
                    n = h.sPrevious;
                    0 === f && (C = -1, m += " " + E);
                    break;
                  case "next":
                    n = h.sNext;
                    if (0 === e || f === e - 1) C = -1, m += " " + E;
                    break;
                  case "last":
                    n = h.sLast;
                    if (0 === e || f === e - 1) C = -1, m += " " + E;
                    break;
                  default:
                    n = a.fnFormatNumber(M + 1), m = f === M ? g.sPageButtonActive : ""
                }
                null !== n && (C = k("<a>", {
                  "class": g.sPageButton + " " + m,
                  "aria-controls": a.sTableId,
                  "aria-label": l[M],
                  "data-dt-idx": p,
                  tabindex: C,
                  id: 0 === c && "string" === typeof M ? a.sTableId + "_" + M : null
                }).html(n).appendTo(x), ob(C, {
                  action: M
                }, H), p++)
              }
            }
          };
        try {
          var v = k(b).find(z.activeElement).data("dt-idx")
        } catch (x) {}
        t(k(b).empty(), d);
        v !== q && k(b).find("[data-dt-idx=" + v + "]").trigger("focus")
      }
    }
  });
  k.extend(u.ext.type.detect, [function (a, b) {
    b = b.oLanguage.sDecimal;
    return sb(a, b) ? "num" + b : null
  }, function (a, b) {
    if (a && !(a instanceof Date) && !tc.test(a)) return null;
    b = Date.parse(a);
    return null !== b && !isNaN(b) || ca(a) ? "date" : null
  }, function (a,
    b) {
    b = b.oLanguage.sDecimal;
    return sb(a, b, !0) ? "num-fmt" + b : null
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return jc(a, b) ? "html-num" + b : null
  }, function (a, b) {
    b = b.oLanguage.sDecimal;
    return jc(a, b, !0) ? "html-num-fmt" + b : null
  }, function (a, b) {
    return ca(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
  }]);
  k.extend(u.ext.type.search, {
    html: function (a) {
      return ca(a) ? a : "string" === typeof a ? a.replace(gc, " ").replace(Ta, "") : ""
    },
    string: function (a) {
      return ca(a) ? a : "string" === typeof a ? a.replace(gc, " ") : a
    }
  });
  var Sa = function (a,
    b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = ic(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a
  };
  k.extend(L.type.order, {
    "date-pre": function (a) {
      a = Date.parse(a);
      return isNaN(a) ? -Infinity : a
    },
    "html-pre": function (a) {
      return ca(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
    },
    "string-pre": function (a) {
      return ca(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : ""
    },
    "string-asc": function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    },
    "string-desc": function (a, b) {
      return a <
        b ? 1 : a > b ? -1 : 0
    }
  });
  Va("");
  k.extend(!0, u.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        k(a.nTable).on("order.dt.DT", function (f, e, g, h) {
          a === e && (f = c.idx, b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[f] ? d.sSortAsc : "desc" == h[f] ? d.sSortDesc : c.sSortingClass))
        })
      },
      jqueryui: function (a, b, c, d) {
        k("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(k("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
        k(a.nTable).on("order.dt.DT", function (f, e, g, h) {
          a === e &&
            (f = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[f] ? d.sSortAsc : "desc" == h[f] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == h[f] ? d.sSortJUIAsc : "desc" == h[f] ? d.sSortJUIDesc : c.sSortingClassJUI))
        })
      }
    }
  });
  var xb = function (a) {
    return "string" === typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
  };
  u.render = {
    number: function (a, b, c, d, f) {
      return {
        display: function (e) {
          if ("number" !== typeof e && "string" !== typeof e) return e;
          var g = 0 > e ? "-" : "",
            h = parseFloat(e);
          if (isNaN(h)) return xb(e);
          h = h.toFixed(c);
          e = Math.abs(h);
          h = parseInt(e, 10);
          e = c ? b + (e - h).toFixed(c).substring(2) : "";
          return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + e + (f || "")
        }
      }
    },
    text: function () {
      return {
        display: xb,
        filter: xb
      }
    }
  };
  k.extend(u.ext.internal, {
    _fnExternApiFunc: fc,
    _fnBuildAjax: La,
    _fnAjaxUpdate: Fb,
    _fnAjaxParameters: Ob,
    _fnAjaxUpdateDraw: Pb,
    _fnAjaxDataSrc: Ma,
    _fnAddColumn: Wa,
    _fnColumnOptions: Da,
    _fnAdjustColumnSizing: ra,
    _fnVisibleToColumnIndex: sa,
    _fnColumnIndexToVisible: ta,
    _fnVisbleColumns: na,
    _fnGetColumns: Fa,
    _fnColumnTypes: Ya,
    _fnApplyColumnDefs: Cb,
    _fnHungarianMap: G,
    _fnCamelToHungarian: O,
    _fnLanguageCompat: ma,
    _fnBrowserDetect: Ab,
    _fnAddData: ea,
    _fnAddTr: Ga,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== q ? b._DT_RowIndex : null
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return k.inArray(c, a.aoData[b].anCells)
    },
    _fnGetCellData: S,
    _fnSetCellData: Db,
    _fnSplitObjNotation: ab,
    _fnGetObjectDataFn: ia,
    _fnSetObjectDataFn: da,
    _fnGetDataMaster: bb,
    _fnClearTable: Ha,
    _fnDeleteIndex: Ia,
    _fnInvalidate: va,
    _fnGetRowElements: $a,
    _fnCreateTr: Za,
    _fnBuildHead: Eb,
    _fnDrawHead: xa,
    _fnDraw: fa,
    _fnReDraw: ja,
    _fnAddOptionsHtml: Hb,
    _fnDetectHeader: wa,
    _fnGetUniqueThs: Ka,
    _fnFeatureHtmlFilter: Jb,
    _fnFilterComplete: ya,
    _fnFilterCustom: Sb,
    _fnFilterColumn: Rb,
    _fnFilter: Qb,
    _fnFilterCreateSearch: gb,
    _fnEscapeRegex: hb,
    _fnFilterData: Tb,
    _fnFeatureHtmlInfo: Mb,
    _fnUpdateInfo: Wb,
    _fnInfoMacros: Xb,
    _fnInitialise: za,
    _fnInitComplete: Na,
    _fnLengthChange: ib,
    _fnFeatureHtmlLength: Ib,
    _fnFeatureHtmlPaginate: Nb,
    _fnPageChange: kb,
    _fnFeatureHtmlProcessing: Kb,
    _fnProcessingDisplay: U,
    _fnFeatureHtmlTable: Lb,
    _fnScrollDraw: Ea,
    _fnApplyToChildren: Z,
    _fnCalculateColumnWidths: Xa,
    _fnThrottle: fb,
    _fnConvertToWidth: Zb,
    _fnGetWidestNode: $b,
    _fnGetMaxLenString: ac,
    _fnStringToCss: K,
    _fnSortFlatten: pa,
    _fnSort: Gb,
    _fnSortAria: cc,
    _fnSortListener: nb,
    _fnSortAttachListener: db,
    _fnSortingClasses: Pa,
    _fnSortData: bc,
    _fnSaveState: Qa,
    _fnLoadState: dc,
    _fnSettingsFromNode: Ra,
    _fnLog: aa,
    _fnMap: V,
    _fnBindAction: ob,
    _fnCallbackReg: Q,
    _fnCallbackFire: I,
    _fnLengthOverflow: jb,
    _fnRenderer: eb,
    _fnDataSource: P,
    _fnRowAttributes: cb,
    _fnExtend: pb,
    _fnCalculateEnd: function () {}
  });
  k.fn.dataTable = u;
  u.$ = k;
  k.fn.dataTableSettings = u.settings;
  k.fn.dataTableExt = u.ext;
  k.fn.DataTable = function (a) {
    return k(this).dataTable(a).api()
  };
  k.each(u, function (a, b) {
    k.fn.DataTable[a] = b
  });
  return k.fn.dataTable
});


/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));
  for (var e = a.length, d = 0; d < e; d++) {
    var f = a[d];
    if (b.call(c, f, d, a)) return {
      i: d,
      v: f
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[b] = c.value;
  return a
};
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) return a[b];
  c = a[c];
  return void 0 !== c ? c : a[b]
};
$jscomp.polyfill = function (a, b, c, e) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, e) : $jscomp.polyfillUnisolated(a, b, c, e))
};
$jscomp.polyfillUnisolated = function (a, b, c, e) {
  c = $jscomp.global;
  a = a.split(".");
  for (e = 0; e < a.length - 1; e++) {
    var d = a[e];
    if (!(d in c)) return;
    c = c[d]
  }
  a = a[a.length - 1];
  e = c[a];
  b = b(e);
  b != e && null != b && $jscomp.defineProperty(c, a, {
    configurable: !0,
    writable: !0,
    value: b
  })
};
$jscomp.polyfillIsolated = function (a, b, c, e) {
  var d = a.split(".");
  a = 1 === d.length;
  e = d[0];
  e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < d.length - 1; f++) {
    var l = d[f];
    if (!(l in e)) return;
    e = e[l]
  }
  d = d[d.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
  b = b(c);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, {
    configurable: !0,
    writable: !0,
    value: b
  }) : b !== c && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d, d =
    $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(e, d, {
      configurable: !0,
      writable: !0,
      value: b
    })))
};
$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (b, c) {
    return $jscomp.findInternal(this, b, c).v
  }
}, "es6", "es3");
(function (a) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (b) {
    return a(b, window, document)
  }) : "object" === typeof exports ? module.exports = function (b, c) {
    b || (b = window);
    c && c.fn.dataTable || (c = require("datatables.net")(b, c).$);
    return a(c, b, b.document)
  } : a(jQuery, window, document)
})(function (a, b, c, e) {
  var d = a.fn.dataTable;
  a.extend(!0, d.defaults, {
    dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
    renderer: "bootstrap"
  });
  a.extend(d.ext.classes, {
    sWrapper: "dataTables_wrapper dt-bootstrap4",
    sFilterInput: "form-control form-control-sm",
    sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
    sProcessing: "dataTables_processing card",
    sPageButton: "paginate_button page-item"
  });
  d.ext.renderer.pageButton.bootstrap = function (f, l, A, B, m, t) {
    var u = new d.Api(f),
      C = f.oClasses,
      n = f.oLanguage.oPaginate,
      D = f.oLanguage.oAria.paginate || {},
      h, k, v = 0,
      y = function (q, w) {
        var x, E = function (p) {
          p.preventDefault();
          a(p.currentTarget).hasClass("disabled") || u.page() == p.data.action || u.page(p.data.action).draw("page")
        };
        var r = 0;
        for (x = w.length; r < x; r++) {
          var g = w[r];
          if (Array.isArray(g)) y(q, g);
          else {
            k = h = "";
            switch (g) {
              case "ellipsis":
                h = "&#x2026;";
                k = "disabled";
                break;
              case "first":
                h = n.sFirst;
                k = g + (0 < m ? "" : " disabled");
                break;
              case "previous":
                h = n.sPrevious;
                k = g + (0 < m ? "" : " disabled");
                break;
              case "next":
                h = n.sNext;
                k = g + (m < t - 1 ? "" : " disabled");
                break;
              case "last":
                h = n.sLast;
                k = g + (m < t - 1 ? "" : " disabled");
                break;
              default:
                h = g + 1, k = m === g ? "active" : ""
            }
            if (h) {
              var F =
                a("<li>", {
                  "class": C.sPageButton + " " + k,
                  id: 0 === A && "string" === typeof g ? f.sTableId + "_" + g : null
                }).append(a("<a>", {
                  href: "#",
                  "aria-controls": f.sTableId,
                  "aria-label": D[g],
                  "data-dt-idx": v,
                  tabindex: f.iTabIndex,
                  "class": "page-link"
                }).html(h)).appendTo(q);
              f.oApi._fnBindAction(F, {
                action: g
              }, E);
              v++
            }
          }
        }
      };
    try {
      var z = a(l).find(c.activeElement).data("dt-idx")
    } catch (q) {}
    y(a(l).empty().html('<ul class="pagination"/>').children("ul"), B);
    z !== e && a(l).find("[data-dt-idx=" + z + "]").trigger("focus")
  };
  return d
});


/*!
   Copyright 2010-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 AutoFill 2.3.5
 ©2008-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (b) {
  var f = 0;
  return function () {
    return f < b.length ? {
      done: !1,
      value: b[f++]
    } : {
      done: !0
    }
  }
};
$jscomp.arrayIterator = function (b) {
  return {
    next: $jscomp.arrayIteratorImpl(b)
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, f, e) {
  b != Array.prototype && b != Object.prototype && (b[f] = e.value)
};
$jscomp.getGlobal = function (b) {
  b = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, b];
  for (var f = 0; f < b.length; ++f) {
    var e = b[f];
    if (e && e.Math == Math) return e
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.SymbolClass = function (b, f) {
  this.$jscomp$symbol$id_ = b;
  $jscomp.defineProperty(this, "description", {
    configurable: !0,
    writable: !0,
    value: f
  })
};
$jscomp.SymbolClass.prototype.toString = function () {
  return this.$jscomp$symbol$id_
};
$jscomp.Symbol = function () {
  function b(e) {
    if (this instanceof b) throw new TypeError("Symbol is not a constructor");
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (e || "") + "_" + f++, e)
  }
  var f = 0;
  return b
}();
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.iterator;
  b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[b] && $jscomp.defineProperty(Array.prototype, b, {
    configurable: !0,
    writable: !0,
    value: function () {
      return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
    }
  });
  $jscomp.initSymbolIterator = function () {}
};
$jscomp.initSymbolAsyncIterator = function () {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.asyncIterator;
  b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function () {}
};
$jscomp.iteratorPrototype = function (b) {
  $jscomp.initSymbolIterator();
  b = {
    next: b
  };
  b[$jscomp.global.Symbol.iterator] = function () {
    return this
  };
  return b
};
$jscomp.iteratorFromArray = function (b, f) {
  $jscomp.initSymbolIterator();
  b instanceof String && (b += "");
  var e = 0,
    m = {
      next: function () {
        if (e < b.length) {
          var k = e++;
          return {
            value: f(k, b[k]),
            done: !1
          }
        }
        m.next = function () {
          return {
            done: !0,
            value: void 0
          }
        };
        return m.next()
      }
    };
  m[Symbol.iterator] = function () {
    return m
  };
  return m
};
$jscomp.polyfill = function (b, f, e, m) {
  if (f) {
    e = $jscomp.global;
    b = b.split(".");
    for (m = 0; m < b.length - 1; m++) {
      var k = b[m];
      k in e || (e[k] = {});
      e = e[k]
    }
    b = b[b.length - 1];
    m = e[b];
    f = f(m);
    f != m && null != f && $jscomp.defineProperty(e, b, {
      configurable: !0,
      writable: !0,
      value: f
    })
  }
};
$jscomp.polyfill("Array.prototype.keys", function (b) {
  return b ? b : function () {
    return $jscomp.iteratorFromArray(this, function (b) {
      return b
    })
  }
}, "es6", "es3");
(function (b) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (f) {
    return b(f, window, document)
  }) : "object" === typeof exports ? module.exports = function (f, e) {
    f || (f = window);
    e && e.fn.dataTable || (e = require("datatables.net")(f, e).$);
    return b(e, f, f.document)
  } : b(jQuery, window, document)
})(function (b, f, e, m) {
  var k = b.fn.dataTable,
    x = 0,
    l = function (a, d) {
      if (!k.versionCheck || !k.versionCheck("1.10.8")) throw "Warning: AutoFill requires DataTables 1.10.8 or greater";
      this.c = b.extend(!0, {}, k.defaults.autoFill,
        l.defaults, d);
      this.s = {
        dt: new k.Api(a),
        namespace: ".autoFill" + x++,
        scroll: {},
        scrollInterval: null,
        handle: {
          height: 0,
          width: 0
        },
        enabled: !1
      };
      this.dom = {
        handle: b('<div class="dt-autofill-handle"/>'),
        select: {
          top: b('<div class="dt-autofill-select top"/>'),
          right: b('<div class="dt-autofill-select right"/>'),
          bottom: b('<div class="dt-autofill-select bottom"/>'),
          left: b('<div class="dt-autofill-select left"/>')
        },
        background: b('<div class="dt-autofill-background"/>'),
        list: b('<div class="dt-autofill-list">' + this.s.dt.i18n("autoFill.info",
          "") + "<ul/></div>"),
        dtScroll: null,
        offsetParent: null
      };
      this._constructor()
    };
  b.extend(l.prototype, {
    enabled: function () {
      return this.s.enabled
    },
    enable: function (a) {
      var d = this;
      if (!1 === a) return this.disable();
      this.s.enabled = !0;
      this._focusListener();
      this.dom.handle.on("mousedown", function (a) {
        d._mousedown(a);
        return !1
      });
      return this
    },
    disable: function () {
      this.s.enabled = !1;
      this._focusListenerRemove();
      return this
    },
    _constructor: function () {
      var a = this,
        d = this.s.dt,
        c = b("div.dataTables_scrollBody", this.s.dt.table().container());
      d.settings()[0].autoFill = this;
      c.length && (this.dom.dtScroll = c, "static" === c.css("position") && c.css("position", "relative"));
      !1 !== this.c.enable && this.enable();
      d.on("destroy.autoFill", function () {
        a._focusListenerRemove()
      })
    },
    _attach: function (a) {
      var d = this.s.dt,
        c = d.cell(a).index(),
        g = this.dom.handle,
        h = this.s.handle;
      c && -1 !== d.columns(this.c.columns).indexes().indexOf(c.column) ? (this.dom.offsetParent || (this.dom.offsetParent = b(d.table().node()).offsetParent()), h.height && h.width || (g.appendTo("body"), h.height =
        g.outerHeight(), h.width = g.outerWidth()), d = this._getPosition(a, this.dom.offsetParent), this.dom.attachedTo = a, g.css({
        top: d.top + a.offsetHeight - h.height,
        left: d.left + a.offsetWidth - h.width
      }).appendTo(this.dom.offsetParent)) : this._detach()
    },
    _actionSelector: function (a) {
      var d = this,
        c = this.s.dt,
        g = l.actions,
        h = [];
      b.each(g, function (d, b) {
        b.available(c, a) && h.push(d)
      });
      if (1 === h.length && !1 === this.c.alwaysAsk) {
        var e = g[h[0]].execute(c, a);
        this._update(e, a)
      } else if (1 < h.length) {
        var f = this.dom.list.children("ul").empty();
        h.push("cancel");
        b.each(h, function (h, e) {
          f.append(b("<li/>").append('<div class="dt-autofill-question">' + g[e].option(c, a) + "<div>").append(b('<div class="dt-autofill-button">').append(b('<button class="' + l.classes.btn + '">' + c.i18n("autoFill.button", "&gt;") + "</button>").on("click", function () {
            var h = g[e].execute(c, a, b(this).closest("li"));
            d._update(h, a);
            d.dom.background.remove();
            d.dom.list.remove()
          }))))
        });
        this.dom.background.appendTo("body");
        this.dom.list.appendTo("body");
        this.dom.list.css("margin-top",
          this.dom.list.outerHeight() / 2 * -1)
      }
    },
    _detach: function () {
      this.dom.attachedTo = null;
      this.dom.handle.detach()
    },
    _drawSelection: function (a, d) {
      var c = this.s.dt;
      d = this.s.start;
      var g = b(this.dom.start),
        h = {
          row: this.c.vertical ? c.rows({
            page: "current"
          }).nodes().indexOf(a.parentNode) : d.row,
          column: this.c.horizontal ? b(a).index() : d.column
        };
      a = c.column.index("toData", h.column);
      var e = c.row(":eq(" + h.row + ")", {
        page: "current"
      });
      e = b(c.cell(e.index(), a).node());
      if (c.cell(e).any() && -1 !== c.columns(this.c.columns).indexes().indexOf(a)) {
        this.s.end =
          h;
        c = d.row < h.row ? g : e;
        var f = d.row < h.row ? e : g;
        a = d.column < h.column ? g : e;
        g = d.column < h.column ? e : g;
        c = this._getPosition(c.get(0)).top;
        a = this._getPosition(a.get(0)).left;
        d = this._getPosition(f.get(0)).top + f.outerHeight() - c;
        g = this._getPosition(g.get(0)).left + g.outerWidth() - a;
        h = this.dom.select;
        h.top.css({
          top: c,
          left: a,
          width: g
        });
        h.left.css({
          top: c,
          left: a,
          height: d
        });
        h.bottom.css({
          top: c + d,
          left: a,
          width: g
        });
        h.right.css({
          top: c,
          left: a + g,
          height: d
        })
      }
    },
    _editor: function (a) {
      var d = this.s.dt,
        c = this.c.editor;
      if (c) {
        for (var b = {},
            h = [], e = c.fields(), f = 0, k = a.length; f < k; f++)
          for (var l = 0, p = a[f].length; l < p; l++) {
            var q = a[f][l],
              n = d.settings()[0].aoColumns[q.index.column],
              r = n.editField;
            if (r === m) {
              n = n.mData;
              for (var u = 0, y = e.length; u < y; u++) {
                var w = c.field(e[u]);
                if (w.dataSrc() === n) {
                  r = w.name();
                  break
                }
              }
            }
            if (!r) throw "Could not automatically determine field data. Please see https://datatables.net/tn/11";
            b[r] || (b[r] = {});
            n = d.row(q.index.row).id();
            b[r][n] = q.set;
            h.push(q.index)
          }
        c.bubble(h, !1).multiSet(b).submit()
      }
    },
    _emitEvent: function (a, d) {
      this.s.dt.iterator("table",
        function (c, g) {
          b(c.nTable).triggerHandler(a + ".dt", d)
        })
    },
    _focusListener: function () {
      var a = this,
        d = this.s.dt,
        c = this.s.namespace,
        g = null !== this.c.focus ? this.c.focus : d.init().keys || d.settings()[0].keytable ? "focus" : "hover";
      if ("focus" === g) d.on("key-focus.autoFill", function (c, b, d) {
        a._attach(d.node())
      }).on("key-blur.autoFill", function (c, b, d) {
        a._detach()
      });
      else if ("click" === g) b(d.table().body()).on("click" + c, "td, th", function (c) {
        a._attach(this)
      }), b(e.body).on("click" + c, function (c) {
        b(c.target).parents().filter(d.table().body()).length ||
          a._detach()
      });
      else b(d.table().body()).on("mouseenter" + c, "td, th", function (c) {
        a._attach(this)
      }).on("mouseleave" + c, function (c) {
        b(c.relatedTarget).hasClass("dt-autofill-handle") || a._detach()
      })
    },
    _focusListenerRemove: function () {
      var a = this.s.dt;
      a.off(".autoFill");
      b(a.table().body()).off(this.s.namespace);
      b(e.body).off(this.s.namespace)
    },
    _getPosition: function (a, d) {
      var c = 0,
        g = 0;
      d || (d = b(b(this.s.dt.table().node())[0].offsetParent));
      do {
        var h = a.offsetTop,
          e = a.offsetLeft;
        var f = b(a.offsetParent);
        c += h + 1 * parseInt(f.css("border-top-width"));
        g += e + 1 * parseInt(f.css("border-left-width"));
        if ("body" === a.nodeName.toLowerCase()) break;
        a = f.get(0)
      } while (f.get(0) !== d.get(0));
      return {
        top: c,
        left: g
      }
    },
    _mousedown: function (a) {
      var d = this,
        c = this.s.dt;
      this.dom.start = this.dom.attachedTo;
      this.s.start = {
        row: c.rows({
          page: "current"
        }).nodes().indexOf(b(this.dom.start).parent()[0]),
        column: b(this.dom.start).index()
      };
      b(e.body).on("mousemove.autoFill", function (a) {
        d._mousemove(a)
      }).on("mouseup.autoFill", function (a) {
        d._mouseup(a)
      });
      var g = this.dom.select;
      c = b(c.table().node()).offsetParent();
      g.top.appendTo(c);
      g.left.appendTo(c);
      g.right.appendTo(c);
      g.bottom.appendTo(c);
      this._drawSelection(this.dom.start, a);
      this.dom.handle.css("display", "none");
      a = this.dom.dtScroll;
      this.s.scroll = {
        windowHeight: b(f).height(),
        windowWidth: b(f).width(),
        dtTop: a ? a.offset().top : null,
        dtLeft: a ? a.offset().left : null,
        dtHeight: a ? a.outerHeight() : null,
        dtWidth: a ? a.outerWidth() : null
      }
    },
    _mousemove: function (a) {
      var b = a.target.nodeName.toLowerCase();
      if ("td" === b || "th" === b) this._drawSelection(a.target, a), this._shiftScroll(a)
    },
    _mouseup: function (a) {
      b(e.body).off(".autoFill");
      var d = this,
        c = this.s.dt,
        g = this.dom.select;
      g.top.remove();
      g.left.remove();
      g.right.remove();
      g.bottom.remove();
      this.dom.handle.css("display", "block");
      g = this.s.start;
      var h = this.s.end;
      if (g.row !== h.row || g.column !== h.column) {
        var f = c.cell(":eq(" + g.row + ")", g.column + ":visible", {
          page: "current"
        });
        if (b("div.DTE", f.node()).length) {
          var k = c.editor();
          k.on("submitSuccess.dtaf close.dtaf", function () {
            k.off(".dtaf");
            setTimeout(function () {
              d._mouseup(a)
            }, 100)
          }).on("submitComplete.dtaf preSubmitCancelled.dtaf close.dtaf",
            function () {
              k.off(".dtaf")
            });
          k.submit()
        } else {
          var l = this._range(g.row, h.row);
          g = this._range(g.column, h.column);
          h = [];
          for (var v = c.settings()[0], p = v.aoColumns, q = c.columns(this.c.columns).indexes(), n = 0; n < l.length; n++) h.push(b.map(g, function (a) {
            var b = c.row(":eq(" + l[n] + ")", {
              page: "current"
            });
            a = c.cell(b.index(), a + ":visible");
            b = a.data();
            var d = a.index(),
              g = p[d.column].editField;
            g !== m && (b = v.oApi._fnGetObjectDataFn(g)(c.row(d.row).data()));
            if (-1 !== q.indexOf(d.column)) return {
              cell: a,
              data: b,
              label: a.data(),
              index: d
            }
          }));
          this._actionSelector(h);
          clearInterval(this.s.scrollInterval);
          this.s.scrollInterval = null
        }
      }
    },
    _range: function (a, b) {
      var c = [];
      if (a <= b)
        for (; a <= b; a++) c.push(a);
      else
        for (; a >= b; a--) c.push(a);
      return c
    },
    _shiftScroll: function (a) {
      var b = this,
        c = this.s.scroll,
        g = !1,
        h = a.pageY - e.body.scrollTop,
        f = a.pageX - e.body.scrollLeft,
        k, l, m, p;
      65 > h ? k = -5 : h > c.windowHeight - 65 && (k = 5);
      65 > f ? l = -5 : f > c.windowWidth - 65 && (l = 5);
      null !== c.dtTop && a.pageY < c.dtTop + 65 ? m = -5 : null !== c.dtTop && a.pageY > c.dtTop + c.dtHeight - 65 && (m = 5);
      null !== c.dtLeft && a.pageX <
        c.dtLeft + 65 ? p = -5 : null !== c.dtLeft && a.pageX > c.dtLeft + c.dtWidth - 65 && (p = 5);
      k || l || m || p ? (c.windowVert = k, c.windowHoriz = l, c.dtVert = m, c.dtHoriz = p, g = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null);
      !this.s.scrollInterval && g && (this.s.scrollInterval = setInterval(function () {
        c.windowVert && (e.body.scrollTop += c.windowVert);
        c.windowHoriz && (e.body.scrollLeft += c.windowHoriz);
        if (c.dtVert || c.dtHoriz) {
          var a = b.dom.dtScroll[0];
          c.dtVert && (a.scrollTop += c.dtVert);
          c.dtHoriz && (a.scrollLeft +=
            c.dtHoriz)
        }
      }, 20))
    },
    _update: function (a, b) {
      if (!1 !== a) {
        a = this.s.dt;
        var c = a.columns(this.c.columns).indexes();
        this._emitEvent("preAutoFill", [a, b]);
        this._editor(b);
        if (null !== this.c.update ? this.c.update : !this.c.editor) {
          for (var d = 0, h = b.length; d < h; d++)
            for (var e = 0, f = b[d].length; e < f; e++) {
              var k = b[d][e]; - 1 !== c.indexOf(k.index.column) && k.cell.data(k.set)
            }
          a.draw(!1)
        }
        this._emitEvent("autoFill", [a, b])
      }
    }
  });
  l.actions = {
    increment: {
      available: function (a, b) {
        a = b[0][0].label;
        return !isNaN(a - parseFloat(a))
      },
      option: function (a,
        b) {
        return a.i18n("autoFill.increment", 'Increment / decrement each cell by: <input type="number" value="1">')
      },
      execute: function (a, d, c) {
        a = 1 * d[0][0].data;
        c = 1 * b("input", c).val();
        for (var g = 0, e = d.length; g < e; g++)
          for (var f = 0, k = d[g].length; f < k; f++) d[g][f].set = a, a += c
      }
    },
    fill: {
      available: function (a, b) {
        return !0
      },
      option: function (a, b) {
        return a.i18n("autoFill.fill", "Fill all cells with <i>" + b[0][0].label + "</i>")
      },
      execute: function (a, b, c) {
        a = b[0][0].data;
        c = 0;
        for (var d = b.length; c < d; c++)
          for (var e = 0, f = b[c].length; e < f; e++) b[c][e].set =
            a
      }
    },
    fillHorizontal: {
      available: function (a, b) {
        return 1 < b.length && 1 < b[0].length
      },
      option: function (a, b) {
        return a.i18n("autoFill.fillHorizontal", "Fill cells horizontally")
      },
      execute: function (a, b, c) {
        a = 0;
        for (c = b.length; a < c; a++)
          for (var d = 0, e = b[a].length; d < e; d++) b[a][d].set = b[a][0].data
      }
    },
    fillVertical: {
      available: function (a, b) {
        return 1 < b.length
      },
      option: function (a, b) {
        return a.i18n("autoFill.fillVertical", "Fill cells vertically")
      },
      execute: function (a, b, c) {
        a = 0;
        for (c = b.length; a < c; a++)
          for (var d = 0, e = b[a].length; d < e; d++) b[a][d].set =
            b[0][d].data
      }
    },
    cancel: {
      available: function () {
        return !1
      },
      option: function (a) {
        return a.i18n("autoFill.cancel", "Cancel")
      },
      execute: function () {
        return !1
      }
    }
  };
  l.version = "2.3.5";
  l.defaults = {
    alwaysAsk: !1,
    focus: null,
    columns: "",
    enable: !0,
    update: null,
    editor: null,
    vertical: !0,
    horizontal: !0
  };
  l.classes = {
    btn: "btn"
  };
  var t = b.fn.dataTable.Api;
  t.register("autoFill()", function () {
    return this
  });
  t.register("autoFill().enabled()", function () {
    var a = this.context[0];
    return a.autoFill ? a.autoFill.enabled() : !1
  });
  t.register("autoFill().enable()",
    function (a) {
      return this.iterator("table", function (b) {
        b.autoFill && b.autoFill.enable(a)
      })
    });
  t.register("autoFill().disable()", function () {
    return this.iterator("table", function (a) {
      a.autoFill && a.autoFill.disable()
    })
  });
  b(e).on("preInit.dt.autofill", function (a, d, c) {
    "dt" === a.namespace && (a = d.oInit.autoFill, c = k.defaults.autoFill, a || c) && (c = b.extend({}, a, c), !1 !== a && new l(d, c))
  });
  k.AutoFill = l;
  return k.AutoFill = l
});


/*!
 Bootstrap integration for DataTables' AutoFill
 ©2015 SpryMedia Ltd - datatables.net/license
*/
(function (b) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-autofill"], function (a) {
    return b(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, c) {
    a || (a = window);
    c && c.fn.dataTable || (c = require("datatables.net-bs4")(a, c).$);
    c.fn.dataTable.AutoFill || require("datatables.net-autofill")(a, c);
    return b(c, a, a.document)
  } : b(jQuery, window, document)
})(function (b, a, c, d) {
  b = b.fn.dataTable;
  b.AutoFill.classes.btn = "btn btn-primary";
  return b
});


/*!
 Buttons for DataTables 1.6.5
 ©2016-2020 SpryMedia Ltd - datatables.net/license
*/
(function (e) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (A) {
    return e(A, window, document)
  }) : "object" === typeof exports ? module.exports = function (A, z) {
    A || (A = window);
    z && z.fn.dataTable || (z = require("datatables.net")(A, z).$);
    return e(z, A, A.document)
  } : e(jQuery, window, document)
})(function (e, A, z, u) {
  function E(a, b, c) {
    e.fn.animate ? a.stop().fadeIn(b, c) : (a.css("display", "block"), c && c.call(a))
  }

  function F(a, b, c) {
    e.fn.animate ? a.stop().fadeOut(b, c) : (a.css("display", "none"), c && c.call(a))
  }

  function H(a, b) {
    a = new t.Api(a);
    b = b ? b : a.init().buttons || t.defaults.buttons;
    return (new w(a, b)).container()
  }
  var t = e.fn.dataTable,
    M = 0,
    N = 0,
    x = t.ext.buttons,
    w = function (a, b) {
      if (!(this instanceof w)) return function (c) {
        return (new w(c, a)).container()
      };
      "undefined" === typeof b && (b = {});
      !0 === b && (b = {});
      Array.isArray(b) && (b = {
        buttons: b
      });
      this.c = e.extend(!0, {}, w.defaults, b);
      b.buttons && (this.c.buttons = b.buttons);
      this.s = {
        dt: new t.Api(a),
        buttons: [],
        listenKeys: "",
        namespace: "dtb" + M++
      };
      this.dom = {
        container: e("<" + this.c.dom.container.tag +
          "/>").addClass(this.c.dom.container.className)
      };
      this._constructor()
    };
  e.extend(w.prototype, {
    action: function (a, b) {
      a = this._nodeToButton(a);
      if (b === u) return a.conf.action;
      a.conf.action = b;
      return this
    },
    active: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.button.active;
      c = e(c.node);
      if (b === u) return c.hasClass(a);
      c.toggleClass(a, b === u ? !0 : b);
      return this
    },
    add: function (a, b) {
      var c = this.s.buttons;
      if ("string" === typeof b) {
        b = b.split("-");
        var d = this.s;
        c = 0;
        for (var h = b.length - 1; c < h; c++) d = d.buttons[1 * b[c]];
        c = d.buttons;
        b = 1 * b[b.length - 1]
      }
      this._expandButton(c, a, d !== u, b);
      this._draw();
      return this
    },
    container: function () {
      return this.dom.container
    },
    disable: function (a) {
      a = this._nodeToButton(a);
      e(a.node).addClass(this.c.dom.button.disabled).attr("disabled", !0);
      return this
    },
    destroy: function () {
      e("body").off("keyup." + this.s.namespace);
      var a = this.s.buttons.slice(),
        b;
      var c = 0;
      for (b = a.length; c < b; c++) this.remove(a[c].node);
      this.dom.container.remove();
      a = this.s.dt.settings()[0];
      c = 0;
      for (b = a.length; c < b; c++)
        if (a.inst === this) {
          a.splice(c,
            1);
          break
        } return this
    },
    enable: function (a, b) {
      if (!1 === b) return this.disable(a);
      a = this._nodeToButton(a);
      e(a.node).removeClass(this.c.dom.button.disabled).removeAttr("disabled");
      return this
    },
    name: function () {
      return this.c.name
    },
    node: function (a) {
      if (!a) return this.dom.container;
      a = this._nodeToButton(a);
      return e(a.node)
    },
    processing: function (a, b) {
      var c = this.s.dt,
        d = this._nodeToButton(a);
      if (b === u) return e(d.node).hasClass("processing");
      e(d.node).toggleClass("processing", b);
      e(c.table().node()).triggerHandler("buttons-processing.dt",
        [b, c.button(a), c, e(a), d.conf]);
      return this
    },
    remove: function (a) {
      var b = this._nodeToButton(a),
        c = this._nodeToHost(a),
        d = this.s.dt;
      if (b.buttons.length)
        for (var h = b.buttons.length - 1; 0 <= h; h--) this.remove(b.buttons[h].node);
      b.conf.destroy && b.conf.destroy.call(d.button(a), d, e(a), b.conf);
      this._removeKey(b.conf);
      e(b.node).remove();
      a = e.inArray(b, c);
      c.splice(a, 1);
      return this
    },
    text: function (a, b) {
      var c = this._nodeToButton(a);
      a = this.c.dom.collection.buttonLiner;
      a = c.inCollection && a && a.tag ? a.tag : this.c.dom.buttonLiner.tag;
      var d = this.s.dt,
        h = e(c.node),
        f = function (k) {
          return "function" === typeof k ? k(d, h, c.conf) : k
        };
      if (b === u) return f(c.conf.text);
      c.conf.text = b;
      a ? h.children(a).html(f(b)) : h.html(f(b));
      return this
    },
    _constructor: function () {
      var a = this,
        b = this.s.dt,
        c = b.settings()[0],
        d = this.c.buttons;
      c._buttons || (c._buttons = []);
      c._buttons.push({
        inst: this,
        name: this.c.name
      });
      for (var h = 0, f = d.length; h < f; h++) this.add(d[h]);
      b.on("destroy", function (k, g) {
        g === c && a.destroy()
      });
      e("body").on("keyup." + this.s.namespace, function (k) {
        if (!z.activeElement ||
          z.activeElement === z.body) {
          var g = String.fromCharCode(k.keyCode).toLowerCase(); - 1 !== a.s.listenKeys.toLowerCase().indexOf(g) && a._keypress(g, k)
        }
      })
    },
    _addKey: function (a) {
      a.key && (this.s.listenKeys += e.isPlainObject(a.key) ? a.key.key : a.key)
    },
    _draw: function (a, b) {
      a || (a = this.dom.container, b = this.s.buttons);
      a.children().detach();
      for (var c = 0, d = b.length; c < d; c++) a.append(b[c].inserter), a.append(" "), b[c].buttons && b[c].buttons.length && this._draw(b[c].collection, b[c].buttons)
    },
    _expandButton: function (a, b, c, d) {
      var h =
        this.s.dt,
        f = 0;
      b = Array.isArray(b) ? b : [b];
      for (var k = 0, g = b.length; k < g; k++) {
        var m = this._resolveExtends(b[k]);
        if (m)
          if (Array.isArray(m)) this._expandButton(a, m, c, d);
          else {
            var l = this._buildButton(m, c);
            l && (d !== u && null !== d ? (a.splice(d, 0, l), d++) : a.push(l), l.conf.buttons && (l.collection = e("<" + this.c.dom.collection.tag + "/>"), l.conf._collection = l.collection, this._expandButton(l.buttons, l.conf.buttons, !0, d)), m.init && m.init.call(h.button(l.node), h, e(l.node), m), f++)
          }
      }
    },
    _buildButton: function (a, b) {
      var c = this.c.dom.button,
        d = this.c.dom.buttonLiner,
        h = this.c.dom.collection,
        f = this.s.dt,
        k = function (n) {
          return "function" === typeof n ? n(f, l, a) : n
        };
      b && h.button && (c = h.button);
      b && h.buttonLiner && (d = h.buttonLiner);
      if (a.available && !a.available(f, a)) return !1;
      var g = function (n, p, v, y) {
        y.action.call(p.button(v), n, p, v, y);
        e(p.table().node()).triggerHandler("buttons-action.dt", [p.button(v), p, v, y])
      };
      h = a.tag || c.tag;
      var m = a.clickBlurs === u ? !0 : a.clickBlurs,
        l = e("<" + h + "/>").addClass(c.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls",
          this.s.dt.table().node().id).on("click.dtb", function (n) {
          n.preventDefault();
          !l.hasClass(c.disabled) && a.action && g(n, f, l, a);
          m && l.trigger("blur")
        }).on("keyup.dtb", function (n) {
          13 === n.keyCode && !l.hasClass(c.disabled) && a.action && g(n, f, l, a)
        });
      "a" === h.toLowerCase() && l.attr("href", "#");
      "button" === h.toLowerCase() && l.attr("type", "button");
      d.tag ? (h = e("<" + d.tag + "/>").html(k(a.text)).addClass(d.className), "a" === d.tag.toLowerCase() && h.attr("href", "#"), l.append(h)) : l.html(k(a.text));
      !1 === a.enabled && l.addClass(c.disabled);
      a.className && l.addClass(a.className);
      a.titleAttr && l.attr("title", k(a.titleAttr));
      a.attr && l.attr(a.attr);
      a.namespace || (a.namespace = ".dt-button-" + N++);
      d = (d = this.c.dom.buttonContainer) && d.tag ? e("<" + d.tag + "/>").addClass(d.className).append(l) : l;
      this._addKey(a);
      this.c.buttonCreated && (d = this.c.buttonCreated(a, d));
      return {
        conf: a,
        node: l.get(0),
        inserter: d,
        buttons: [],
        inCollection: b,
        collection: null
      }
    },
    _nodeToButton: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, d = b.length; c < d; c++) {
        if (b[c].node === a) return b[c];
        if (b[c].buttons.length) {
          var h = this._nodeToButton(a, b[c].buttons);
          if (h) return h
        }
      }
    },
    _nodeToHost: function (a, b) {
      b || (b = this.s.buttons);
      for (var c = 0, d = b.length; c < d; c++) {
        if (b[c].node === a) return b;
        if (b[c].buttons.length) {
          var h = this._nodeToHost(a, b[c].buttons);
          if (h) return h
        }
      }
    },
    _keypress: function (a, b) {
      if (!b._buttonsHandled) {
        var c = function (d) {
          for (var h = 0, f = d.length; h < f; h++) {
            var k = d[h].conf,
              g = d[h].node;
            k.key && (k.key === a ? (b._buttonsHandled = !0, e(g).click()) : !e.isPlainObject(k.key) || k.key.key !== a || k.key.shiftKey &&
              !b.shiftKey || k.key.altKey && !b.altKey || k.key.ctrlKey && !b.ctrlKey || k.key.metaKey && !b.metaKey || (b._buttonsHandled = !0, e(g).click()));
            d[h].buttons.length && c(d[h].buttons)
          }
        };
        c(this.s.buttons)
      }
    },
    _removeKey: function (a) {
      if (a.key) {
        var b = e.isPlainObject(a.key) ? a.key.key : a.key;
        a = this.s.listenKeys.split("");
        b = e.inArray(b, a);
        a.splice(b, 1);
        this.s.listenKeys = a.join("")
      }
    },
    _resolveExtends: function (a) {
      var b = this.s.dt,
        c, d = function (g) {
          for (var m = 0; !e.isPlainObject(g) && !Array.isArray(g);) {
            if (g === u) return;
            if ("function" ===
              typeof g) {
              if (g = g(b, a), !g) return !1
            } else if ("string" === typeof g) {
              if (!x[g]) throw "Unknown button type: " + g;
              g = x[g]
            }
            m++;
            if (30 < m) throw "Buttons: Too many iterations";
          }
          return Array.isArray(g) ? g : e.extend({}, g)
        };
      for (a = d(a); a && a.extend;) {
        if (!x[a.extend]) throw "Cannot extend unknown button type: " + a.extend;
        var h = d(x[a.extend]);
        if (Array.isArray(h)) return h;
        if (!h) return !1;
        var f = h.className;
        a = e.extend({}, h, a);
        f && a.className !== f && (a.className = f + " " + a.className);
        var k = a.postfixButtons;
        if (k) {
          a.buttons || (a.buttons = []);
          f = 0;
          for (c = k.length; f < c; f++) a.buttons.push(k[f]);
          a.postfixButtons = null
        }
        if (k = a.prefixButtons) {
          a.buttons || (a.buttons = []);
          f = 0;
          for (c = k.length; f < c; f++) a.buttons.splice(f, 0, k[f]);
          a.prefixButtons = null
        }
        a.extend = h.extend
      }
      return a
    },
    _popover: function (a, b, c) {
      var d = this.c,
        h = e.extend({
          align: "button-left",
          autoClose: !1,
          background: !0,
          backgroundClassName: "dt-button-background",
          contentClassName: d.dom.collection.className,
          collectionLayout: "",
          collectionTitle: "",
          dropup: !1,
          fade: 400,
          rightAlignClassName: "dt-button-right",
          tag: d.dom.collection.tag
        }, c),
        f = b.node(),
        k = function () {
          F(e(".dt-button-collection"), h.fade, function () {
            e(this).detach()
          });
          e(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes()).attr("aria-expanded", "false");
          e("div.dt-button-background").off("click.dtb-collection");
          w.background(!1, h.backgroundClassName, h.fade, f);
          e("body").off(".dtb-collection");
          b.off("buttons-action.b-internal")
        };
      !1 === a && k();
      c = e(b.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes());
      c.length && (f = c.eq(0), k());
      c = e("<div/>").addClass("dt-button-collection").addClass(h.collectionLayout).css("display", "none");
      a = e(a).addClass(h.contentClassName).attr("role", "menu").appendTo(c);
      f.attr("aria-expanded", "true");
      f.parents("body")[0] !== z.body && (f = z.body.lastChild);
      h.collectionTitle && c.prepend('<div class="dt-button-collection-title">' + h.collectionTitle + "</div>");
      E(c.insertAfter(f), h.fade);
      d = e(b.table().container());
      var g = c.css("position");
      "dt-container" === h.align && (f = f.parent(), c.css("width", d.width()));
      if ("absolute" ===
        g && (c.hasClass(h.rightAlignClassName) || c.hasClass(h.leftAlignClassName) || "dt-container" === h.align)) {
        var m = f.position();
        c.css({
          top: m.top + f.outerHeight(),
          left: m.left
        });
        var l = c.outerHeight(),
          n = d.offset().top + d.height(),
          p = m.top + f.outerHeight() + l;
        n = p - n;
        p = m.top - l;
        var v = d.offset().top,
          y = m.top - l - 5;
        (n > v - p || h.dropup) && -y < v && c.css("top", y);
        m = d.offset().left;
        d = d.width();
        d = m + d;
        g = c.offset().left;
        var q = c.width();
        q = g + q;
        var r = f.offset().left,
          B = f.outerWidth();
        B = r + B;
        r = 0;
        c.hasClass(h.rightAlignClassName) ? (r = B - q, m > g +
          r && (g = m - (g + r), d -= q + r, r = g > d ? r + d : r + g)) : (r = m - g, d < q + r && (g = m - (g + r), d -= q + r, r = g > d ? r + d : r + g));
        c.css("left", c.position().left + r)
      } else "absolute" === g ? (m = f.position(), c.css({
        top: m.top + f.outerHeight(),
        left: m.left
      }), l = c.outerHeight(), g = f.offset().top, r = 0, r = f.offset().left, B = f.outerWidth(), B = r + B, g = c.offset().left, q = a.width(), q = g + q, y = m.top - l - 5, n = d.offset().top + d.height(), p = m.top + f.outerHeight() + l, n = p - n, p = m.top - l, v = d.offset().top, (n > v - p || h.dropup) && -y < v && c.css("top", y), r = "button-right" === h.align ? B - q : r - g, c.css("left",
        c.position().left + r)) : (g = c.height() / 2, g > e(A).height() / 2 && (g = e(A).height() / 2), c.css("marginTop", -1 * g));
      h.background && w.background(!0, h.backgroundClassName, h.fade, f);
      e("div.dt-button-background").on("click.dtb-collection", function () {});
      e("body").on("click.dtb-collection", function (C) {
        var I = e.fn.addBack ? "addBack" : "andSelf",
          J = e(C.target).parent()[0];
        (!e(C.target).parents()[I]().filter(a).length && !e(J).hasClass("dt-buttons") || e(C.target).hasClass("dt-button-background")) && k()
      }).on("keyup.dtb-collection",
        function (C) {
          27 === C.keyCode && k()
        });
      h.autoClose && setTimeout(function () {
        b.on("buttons-action.b-internal", function (C, I, J, O) {
          O[0] !== f[0] && k()
        })
      }, 0);
      e(c).trigger("buttons-popover.dt")
    }
  });
  w.background = function (a, b, c, d) {
    c === u && (c = 400);
    d || (d = z.body);
    a ? E(e("<div/>").addClass(b).css("display", "none").insertAfter(d), c) : F(e("div." + b), c, function () {
      e(this).removeClass(b).remove()
    })
  };
  w.instanceSelector = function (a, b) {
    if (a === u || null === a) return e.map(b, function (f) {
      return f.inst
    });
    var c = [],
      d = e.map(b, function (f) {
        return f.name
      }),
      h = function (f) {
        if (Array.isArray(f))
          for (var k = 0, g = f.length; k < g; k++) h(f[k]);
        else "string" === typeof f ? -1 !== f.indexOf(",") ? h(f.split(",")) : (f = e.inArray(f.trim(), d), -1 !== f && c.push(b[f].inst)) : "number" === typeof f && c.push(b[f].inst)
      };
    h(a);
    return c
  };
  w.buttonSelector = function (a, b) {
    for (var c = [], d = function (g, m, l) {
        for (var n, p, v = 0, y = m.length; v < y; v++)
          if (n = m[v]) p = l !== u ? l + v : v + "", g.push({
            node: n.node,
            name: n.conf.name,
            idx: p
          }), n.buttons && d(g, n.buttons, p + "-")
      }, h = function (g, m) {
        var l, n = [];
        d(n, m.s.buttons);
        var p = e.map(n, function (v) {
          return v.node
        });
        if (Array.isArray(g) || g instanceof e)
          for (p = 0, l = g.length; p < l; p++) h(g[p], m);
        else if (null === g || g === u || "*" === g)
          for (p = 0, l = n.length; p < l; p++) c.push({
            inst: m,
            node: n[p].node
          });
        else if ("number" === typeof g) c.push({
          inst: m,
          node: m.s.buttons[g].node
        });
        else if ("string" === typeof g)
          if (-1 !== g.indexOf(","))
            for (n = g.split(","), p = 0, l = n.length; p < l; p++) h(n[p].trim(), m);
          else if (g.match(/^\d+(\-\d+)*$/)) p = e.map(n, function (v) {
          return v.idx
        }), c.push({
          inst: m,
          node: n[e.inArray(g, p)].node
        });
        else if (-1 !== g.indexOf(":name"))
          for (g = g.replace(":name",
              ""), p = 0, l = n.length; p < l; p++) n[p].name === g && c.push({
            inst: m,
            node: n[p].node
          });
        else e(p).filter(g).each(function () {
          c.push({
            inst: m,
            node: this
          })
        });
        else "object" === typeof g && g.nodeName && (n = e.inArray(g, p), -1 !== n && c.push({
          inst: m,
          node: p[n]
        }))
      }, f = 0, k = a.length; f < k; f++) h(b, a[f]);
    return c
  };
  w.defaults = {
    buttons: ["copy", "excel", "csv", "pdf", "print"],
    name: "main",
    tabIndex: 0,
    dom: {
      container: {
        tag: "div",
        className: "dt-buttons"
      },
      collection: {
        tag: "div",
        className: ""
      },
      button: {
        tag: "ActiveXObject" in A ? "a" : "button",
        className: "dt-button",
        active: "active",
        disabled: "disabled"
      },
      buttonLiner: {
        tag: "span",
        className: ""
      }
    }
  };
  w.version = "1.6.5";
  e.extend(x, {
    collection: {
      text: function (a) {
        return a.i18n("buttons.collection", "Collection")
      },
      className: "buttons-collection",
      init: function (a, b, c) {
        b.attr("aria-expanded", !1)
      },
      action: function (a, b, c, d) {
        a.stopPropagation();
        d._collection.parents("body").length ? this.popover(!1, d) : this.popover(d._collection, d)
      },
      attr: {
        "aria-haspopup": !0
      }
    },
    copy: function (a, b) {
      if (x.copyHtml5) return "copyHtml5";
      if (x.copyFlash && x.copyFlash.available(a,
          b)) return "copyFlash"
    },
    csv: function (a, b) {
      if (x.csvHtml5 && x.csvHtml5.available(a, b)) return "csvHtml5";
      if (x.csvFlash && x.csvFlash.available(a, b)) return "csvFlash"
    },
    excel: function (a, b) {
      if (x.excelHtml5 && x.excelHtml5.available(a, b)) return "excelHtml5";
      if (x.excelFlash && x.excelFlash.available(a, b)) return "excelFlash"
    },
    pdf: function (a, b) {
      if (x.pdfHtml5 && x.pdfHtml5.available(a, b)) return "pdfHtml5";
      if (x.pdfFlash && x.pdfFlash.available(a, b)) return "pdfFlash"
    },
    pageLength: function (a) {
      a = a.settings()[0].aLengthMenu;
      var b = Array.isArray(a[0]) ?
        a[0] : a,
        c = Array.isArray(a[0]) ? a[1] : a;
      return {
        extend: "collection",
        text: function (d) {
          return d.i18n("buttons.pageLength", {
            "-1": "Show all rows",
            _: "Show %d rows"
          }, d.page.len())
        },
        className: "buttons-page-length",
        autoClose: !0,
        buttons: e.map(b, function (d, h) {
          return {
            text: c[h],
            className: "button-page-length",
            action: function (f, k) {
              k.page.len(d).draw()
            },
            init: function (f, k, g) {
              var m = this;
              k = function () {
                m.active(f.page.len() === d)
              };
              f.on("length.dt" + g.namespace, k);
              k()
            },
            destroy: function (f, k, g) {
              f.off("length.dt" + g.namespace)
            }
          }
        }),
        init: function (d, h, f) {
          var k = this;
          d.on("length.dt" + f.namespace, function () {
            k.text(f.text)
          })
        },
        destroy: function (d, h, f) {
          d.off("length.dt" + f.namespace)
        }
      }
    }
  });
  t.Api.register("buttons()", function (a, b) {
    b === u && (b = a, a = u);
    this.selector.buttonGroup = a;
    var c = this.iterator(!0, "table", function (d) {
      if (d._buttons) return w.buttonSelector(w.instanceSelector(a, d._buttons), b)
    }, !0);
    c._groupSelector = a;
    return c
  });
  t.Api.register("button()", function (a, b) {
    a = this.buttons(a, b);
    1 < a.length && a.splice(1, a.length);
    return a
  });
  t.Api.registerPlural("buttons().active()",
    "button().active()",
    function (a) {
      return a === u ? this.map(function (b) {
        return b.inst.active(b.node)
      }) : this.each(function (b) {
        b.inst.active(b.node, a)
      })
    });
  t.Api.registerPlural("buttons().action()", "button().action()", function (a) {
    return a === u ? this.map(function (b) {
      return b.inst.action(b.node)
    }) : this.each(function (b) {
      b.inst.action(b.node, a)
    })
  });
  t.Api.register(["buttons().enable()", "button().enable()"], function (a) {
    return this.each(function (b) {
      b.inst.enable(b.node, a)
    })
  });
  t.Api.register(["buttons().disable()",
    "button().disable()"
  ], function () {
    return this.each(function (a) {
      a.inst.disable(a.node)
    })
  });
  t.Api.registerPlural("buttons().nodes()", "button().node()", function () {
    var a = e();
    e(this.each(function (b) {
      a = a.add(b.inst.node(b.node))
    }));
    return a
  });
  t.Api.registerPlural("buttons().processing()", "button().processing()", function (a) {
    return a === u ? this.map(function (b) {
      return b.inst.processing(b.node)
    }) : this.each(function (b) {
      b.inst.processing(b.node, a)
    })
  });
  t.Api.registerPlural("buttons().text()", "button().text()", function (a) {
    return a ===
      u ? this.map(function (b) {
        return b.inst.text(b.node)
      }) : this.each(function (b) {
        b.inst.text(b.node, a)
      })
  });
  t.Api.registerPlural("buttons().trigger()", "button().trigger()", function () {
    return this.each(function (a) {
      a.inst.node(a.node).trigger("click")
    })
  });
  t.Api.register("button().popover()", function (a, b) {
    return this.map(function (c) {
      return c.inst._popover(a, this.button(this[0].node), b)
    })
  });
  t.Api.register("buttons().containers()", function () {
    var a = e(),
      b = this._groupSelector;
    this.iterator(!0, "table", function (c) {
      if (c._buttons) {
        c =
          w.instanceSelector(b, c._buttons);
        for (var d = 0, h = c.length; d < h; d++) a = a.add(c[d].container())
      }
    });
    return a
  });
  t.Api.register("buttons().container()", function () {
    return this.containers().eq(0)
  });
  t.Api.register("button().add()", function (a, b) {
    var c = this.context;
    c.length && (c = w.instanceSelector(this._groupSelector, c[0]._buttons), c.length && c[0].add(b, a));
    return this.button(this._groupSelector, a)
  });
  t.Api.register("buttons().destroy()", function () {
    this.pluck("inst").unique().each(function (a) {
      a.destroy()
    });
    return this
  });
  t.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
    this.each(function (a) {
      a.inst.remove(a.node)
    });
    return this
  });
  var D;
  t.Api.register("buttons.info()", function (a, b, c) {
    var d = this;
    if (!1 === a) return this.off("destroy.btn-info"), F(e("#datatables_buttons_info"), 400, function () {
      e(this).remove()
    }), clearTimeout(D), D = null, this;
    D && clearTimeout(D);
    e("#datatables_buttons_info").length && e("#datatables_buttons_info").remove();
    a = a ? "<h2>" + a + "</h2>" : "";
    E(e('<div id="datatables_buttons_info" class="dt-button-info"/>').html(a).append(e("<div/>")["string" ===
      typeof b ? "html" : "append"](b)).css("display", "none").appendTo("body"));
    c !== u && 0 !== c && (D = setTimeout(function () {
      d.buttons.info(!1)
    }, c));
    this.on("destroy.btn-info", function () {
      d.buttons.info(!1)
    });
    return this
  });
  t.Api.register("buttons.exportData()", function (a) {
    if (this.context.length) return P(new t.Api(this.context[0]), a)
  });
  t.Api.register("buttons.exportInfo()", function (a) {
    a || (a = {});
    var b = a;
    var c = "*" === b.filename && "*" !== b.title && b.title !== u && null !== b.title && "" !== b.title ? b.title : b.filename;
    "function" ===
    typeof c && (c = c());
    c === u || null === c ? c = null : (-1 !== c.indexOf("*") && (c = c.replace("*", e("head > title").text()).trim()), c = c.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, ""), (b = G(b.extension)) || (b = ""), c += b);
    b = G(a.title);
    b = null === b ? null : -1 !== b.indexOf("*") ? b.replace("*", e("head > title").text() || "Exported data") : b;
    return {
      filename: c,
      title: b,
      messageTop: K(this, a.message || a.messageTop, "top"),
      messageBottom: K(this, a.messageBottom, "bottom")
    }
  });
  var G = function (a) {
      return null === a || a === u ? null : "function" === typeof a ?
        a() : a
    },
    K = function (a, b, c) {
      b = G(b);
      if (null === b) return null;
      a = e("caption", a.table().container()).eq(0);
      return "*" === b ? a.css("caption-side") !== c ? null : a.length ? a.text() : "" : b
    },
    L = e("<textarea/>")[0],
    P = function (a, b) {
      var c = e.extend(!0, {}, {
          rows: null,
          columns: "",
          modifier: {
            search: "applied",
            order: "applied"
          },
          orthogonal: "display",
          stripHtml: !0,
          stripNewlines: !0,
          decodeEntities: !0,
          trim: !0,
          format: {
            header: function (q) {
              return d(q)
            },
            footer: function (q) {
              return d(q)
            },
            body: function (q) {
              return d(q)
            }
          },
          customizeData: null
        }, b),
        d = function (q) {
          if ("string" !==
            typeof q) return q;
          q = q.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
          q = q.replace(/<!\-\-.*?\-\->/g, "");
          c.stripHtml && (q = q.replace(/<([^>'"]*('[^']*'|"[^"]*")?)*>/g, ""));
          c.trim && (q = q.replace(/^\s+|\s+$/g, ""));
          c.stripNewlines && (q = q.replace(/\n/g, " "));
          c.decodeEntities && (L.innerHTML = q, q = L.value);
          return q
        };
      b = a.columns(c.columns).indexes().map(function (q) {
        var r = a.column(q).header();
        return c.format.header(r.innerHTML, q, r)
      }).toArray();
      var h = a.table().footer() ? a.columns(c.columns).indexes().map(function (q) {
          var r =
            a.column(q).footer();
          return c.format.footer(r ? r.innerHTML : "", q, r)
        }).toArray() : null,
        f = e.extend({}, c.modifier);
      a.select && "function" === typeof a.select.info && f.selected === u && a.rows(c.rows, e.extend({
        selected: !0
      }, f)).any() && e.extend(f, {
        selected: !0
      });
      f = a.rows(c.rows, f).indexes().toArray();
      var k = a.cells(f, c.columns);
      f = k.render(c.orthogonal).toArray();
      k = k.nodes().toArray();
      for (var g = b.length, m = [], l = 0, n = 0, p = 0 < g ? f.length / g : 0; n < p; n++) {
        for (var v = [g], y = 0; y < g; y++) v[y] = c.format.body(f[l], n, y, k[l]), l++;
        m[n] = v
      }
      b = {
        header: b,
        footer: h,
        body: m
      };
      c.customizeData && c.customizeData(b);
      return b
    };
  e.fn.dataTable.Buttons = w;
  e.fn.DataTable.Buttons = w;
  e(z).on("init.dt plugin-init.dt", function (a, b) {
    "dt" === a.namespace && (a = b.oInit.buttons || t.defaults.buttons) && !b._buttons && (new w(b, a)).container()
  });
  t.ext.feature.push({
    fnInit: H,
    cFeature: "B"
  });
  t.ext.features && t.ext.features.register("buttons", H);
  return w
});


/*!
 Bootstrap integration for DataTables' Buttons
 ©2016 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-buttons"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.Buttons || require("datatables.net-buttons")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, f) {
  a = c.fn.dataTable;
  c.extend(!0, a.Buttons.defaults, {
    dom: {
      container: {
        className: "dt-buttons btn-group flex-wrap"
      },
      button: {
        className: "btn btn-secondary"
      },
      collection: {
        tag: "div",
        className: "dropdown-menu",
        button: {
          tag: "a",
          className: "dt-button dropdown-item",
          active: "active",
          disabled: "disabled"
        }
      }
    },
    buttonCreated: function (e, d) {
      return e.buttons ? c('<div class="btn-group"/>').append(d) : d
    }
  });
  a.ext.buttons.collection.className += " dropdown-toggle";
  a.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right";
  return a.Buttons
});


/*!
 Column visibility buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license
*/
(function (g) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (e) {
    return g(e, window, document)
  }) : "object" === typeof exports ? module.exports = function (e, f) {
    e || (e = window);
    f && f.fn.dataTable || (f = require("datatables.net")(e, f).$);
    f.fn.dataTable.Buttons || require("datatables.net-buttons")(e, f);
    return g(f, e, e.document)
  } : g(jQuery, window, document)
})(function (g, e, f, l) {
  e = g.fn.dataTable;
  g.extend(e.ext.buttons, {
    colvis: function (b, a) {
      return {
        extend: "collection",
        text: function (c) {
          return c.i18n("buttons.colvis", "Column visibility")
        },
        className: "buttons-colvis",
        buttons: [{
          extend: "columnsToggle",
          columns: a.columns,
          columnText: a.columnText
        }]
      }
    },
    columnsToggle: function (b, a) {
      return b.columns(a.columns).indexes().map(function (c) {
        return {
          extend: "columnToggle",
          columns: c,
          columnText: a.columnText
        }
      }).toArray()
    },
    columnToggle: function (b, a) {
      return {
        extend: "columnVisibility",
        columns: a.columns,
        columnText: a.columnText
      }
    },
    columnsVisibility: function (b, a) {
      return b.columns(a.columns).indexes().map(function (c) {
        return {
          extend: "columnVisibility",
          columns: c,
          visibility: a.visibility,
          columnText: a.columnText
        }
      }).toArray()
    },
    columnVisibility: {
      columns: l,
      text: function (b, a, c) {
        return c._columnText(b, c)
      },
      className: "buttons-columnVisibility",
      action: function (b, a, c, d) {
        b = a.columns(d.columns);
        a = b.visible();
        b.visible(d.visibility !== l ? d.visibility : !(a.length && a[0]))
      },
      init: function (b, a, c) {
        var d = this;
        a.attr("data-cv-idx", c.columns);
        b.on("column-visibility.dt" + c.namespace, function (h, k) {
          k.bDestroying || k.nTable != b.settings()[0].nTable || d.active(b.column(c.columns).visible())
        }).on("column-reorder.dt" +
          c.namespace,
          function (h, k, m) {
            1 === b.columns(c.columns).count() && (d.text(c._columnText(b, c)), d.active(b.column(c.columns).visible()))
          });
        this.active(b.column(c.columns).visible())
      },
      destroy: function (b, a, c) {
        b.off("column-visibility.dt" + c.namespace).off("column-reorder.dt" + c.namespace)
      },
      _columnText: function (b, a) {
        var c = b.column(a.columns).index(),
          d = b.settings()[0].aoColumns[c].sTitle;
        d || (d = b.column(c).header().innerHTML);
        d = d.replace(/\n/g, " ").replace(/<br\s*\/?>/gi, " ").replace(/<select(.*?)<\/select>/g,
          "").replace(/<!\-\-.*?\-\->/g, "").replace(/<.*?>/g, "").replace(/^\s+|\s+$/g, "");
        return a.columnText ? a.columnText(b, c, d) : d
      }
    },
    colvisRestore: {
      className: "buttons-colvisRestore",
      text: function (b) {
        return b.i18n("buttons.colvisRestore", "Restore visibility")
      },
      init: function (b, a, c) {
        c._visOriginal = b.columns().indexes().map(function (d) {
          return b.column(d).visible()
        }).toArray()
      },
      action: function (b, a, c, d) {
        a.columns().every(function (h) {
          h = a.colReorder && a.colReorder.transpose ? a.colReorder.transpose(h, "toOriginal") : h;
          this.visible(d._visOriginal[h])
        })
      }
    },
    colvisGroup: {
      className: "buttons-colvisGroup",
      action: function (b, a, c, d) {
        a.columns(d.show).visible(!0, !1);
        a.columns(d.hide).visible(!1, !1);
        a.columns.adjust()
      },
      show: [],
      hide: []
    }
  });
  return e.Buttons
});


/*!
 Flash export buttons for Buttons and DataTables.
 2015-2017 SpryMedia Ltd - datatables.net/license

 ZeroClipbaord - MIT license
 Copyright (c) 2012 Joseph Huckaby
*/
(function (g) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (q) {
    return g(q, window, document)
  }) : "object" === typeof exports ? module.exports = function (q, r) {
    q || (q = window);
    r && r.fn.dataTable || (r = require("datatables.net")(q, r).$);
    r.fn.dataTable.Buttons || require("datatables.net-buttons")(q, r);
    return g(r, q, q.document)
  } : g(jQuery, window, document)
})(function (g, q, r, z) {
  function M(a) {
    for (var b = ""; 0 <= a;) b = String.fromCharCode(a % 26 + 65) + b, a = Math.floor(a / 26) - 1;
    return b
  }

  function t(a, b, c) {
    var d = a.createElement(b);
    c && (c.attr && g(d).attr(c.attr), c.children && g.each(c.children, function (f, e) {
      d.appendChild(e)
    }), null !== c.text && c.text !== z && d.appendChild(a.createTextNode(c.text)));
    return d
  }

  function S(a, b) {
    var c = a.header[b].length;
    a.footer && a.footer[b].length > c && (c = a.footer[b].length);
    for (var d = 0, f = a.body.length; d < f; d++) {
      var e = a.body[d][b];
      e = null !== e && e !== z ? e.toString() : ""; - 1 !== e.indexOf("\n") ? (e = e.split("\n"), e.sort(function (n, l) {
          return l.length - n.length
        }), e = e[0].length) :
        e = e.length;
      e > c && (c = e);
      if (40 < c) return 52
    }
    c *= 1.3;
    return 6 < c ? c : 6
  }

  function N(a) {
    G === z && (G = -1 === J.serializeToString(g.parseXML(A["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"));
    g.each(a, function (b, c) {
      if (g.isPlainObject(c)) N(c);
      else {
        if (G) {
          var d = c.childNodes[0],
            f, e = [];
          for (f = d.attributes.length - 1; 0 <= f; f--) {
            var n = d.attributes[f].nodeName;
            var l = d.attributes[f].nodeValue; - 1 !== n.indexOf(":") && (e.push({
              name: n,
              value: l
            }), d.removeAttribute(n))
          }
          f = 0;
          for (n = e.length; f < n; f++) l = c.createAttribute(e[f].name.replace(":",
            "_dt_b_namespace_token_")), l.value = e[f].value, d.setAttributeNode(l)
        }
        c = J.serializeToString(c);
        G && (-1 === c.indexOf("<?xml") && (c = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + c), c = c.replace(/_dt_b_namespace_token_/g, ":"));
        c = c.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        a[b] = c
      }
    })
  }
  var w = g.fn.dataTable,
    m = {
      version: "1.0.4-TableTools2",
      clients: {},
      moviePath: "",
      nextId: 1,
      $: function (a) {
        "string" == typeof a && (a = r.getElementById(a));
        a.addClass || (a.hide = function () {
            this.style.display = "none"
          }, a.show =
          function () {
            this.style.display = ""
          }, a.addClass = function (b) {
            this.removeClass(b);
            this.className += " " + b
          }, a.removeClass = function (b) {
            this.className = this.className.replace(new RegExp("\\s*" + b + "\\s*"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
          }, a.hasClass = function (b) {
            return !!this.className.match(new RegExp("\\s*" + b + "\\s*"))
          });
        return a
      },
      setMoviePath: function (a) {
        this.moviePath = a
      },
      dispatch: function (a, b, c) {
        (a = this.clients[a]) && a.receiveEvent(b, c)
      },
      log: function (a) {
        console.log("Flash: " + a)
      },
      register: function (a,
        b) {
        this.clients[a] = b
      },
      getDOMObjectPosition: function (a) {
        var b = {
          left: 0,
          top: 0,
          width: a.width ? a.width : a.offsetWidth,
          height: a.height ? a.height : a.offsetHeight
        };
        "" !== a.style.width && (b.width = a.style.width.replace("px", ""));
        "" !== a.style.height && (b.height = a.style.height.replace("px", ""));
        for (; a;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b
      },
      Client: function (a) {
        this.handlers = {};
        this.id = m.nextId++;
        this.movieId = "ZeroClipboard_TableToolsMovie_" + this.id;
        m.register(this.id, this);
        a && this.glue(a)
      }
    };
  m.Client.prototype = {
    id: 0,
    ready: !1,
    movie: null,
    clipText: "",
    fileName: "",
    action: "copy",
    handCursorEnabled: !0,
    cssEffects: !0,
    handlers: null,
    sized: !1,
    sheetName: "",
    glue: function (a, b) {
      this.domElement = m.$(a);
      a = 99;
      this.domElement.style.zIndex && (a = parseInt(this.domElement.style.zIndex, 10) + 1);
      var c = m.getDOMObjectPosition(this.domElement);
      this.div = r.createElement("div");
      var d = this.div.style;
      d.position = "absolute";
      d.left = "0px";
      d.top = "0px";
      d.width = c.width + "px";
      d.height = c.height + "px";
      d.zIndex = a;
      "undefined" != typeof b &&
        "" !== b && (this.div.title = b);
      0 !== c.width && 0 !== c.height && (this.sized = !0);
      this.domElement && (this.domElement.appendChild(this.div), this.div.innerHTML = this.getHTML(c.width, c.height).replace(/&/g, "&amp;"))
    },
    positionElement: function () {
      var a = m.getDOMObjectPosition(this.domElement),
        b = this.div.style;
      b.position = "absolute";
      b.width = a.width + "px";
      b.height = a.height + "px";
      0 !== a.width && 0 !== a.height && (this.sized = !0, b = this.div.childNodes[0], b.width = a.width, b.height = a.height)
    },
    getHTML: function (a, b) {
      var c = "",
        d = "id=" + this.id +
        "&width=" + a + "&height=" + b;
      if (navigator.userAgent.match(/MSIE/)) {
        var f = location.href.match(/^https/i) ? "https://" : "http://";
        c += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + f + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" width="' + a + '" height="' + b + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + m.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' +
          d + '"/><param name="wmode" value="transparent"/></object>'
      } else c += '<embed id="' + this.movieId + '" src="' + m.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + a + '" height="' + b + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + d + '" wmode="transparent" />';
      return c
    },
    hide: function () {
      this.div && (this.div.style.left = "-2000px")
    },
    show: function () {
      this.reposition()
    },
    destroy: function () {
      var a = this;
      this.domElement && this.div && (g(this.div).remove(), this.div = this.domElement = null, g.each(m.clients, function (b, c) {
        c === a && delete m.clients[b]
      }))
    },
    reposition: function (a) {
      a && ((this.domElement = m.$(a)) || this.hide());
      if (this.domElement && this.div) {
        a = m.getDOMObjectPosition(this.domElement);
        var b = this.div.style;
        b.left = "" + a.left + "px";
        b.top = "" + a.top + "px"
      }
    },
    clearText: function () {
      this.clipText = "";
      this.ready && this.movie.clearText()
    },
    appendText: function (a) {
      this.clipText +=
        a;
      this.ready && this.movie.appendText(a)
    },
    setText: function (a) {
      this.clipText = a;
      this.ready && this.movie.setText(a)
    },
    setFileName: function (a) {
      this.fileName = a;
      this.ready && this.movie.setFileName(a)
    },
    setSheetData: function (a) {
      this.ready && this.movie.setSheetData(JSON.stringify(a))
    },
    setAction: function (a) {
      this.action = a;
      this.ready && this.movie.setAction(a)
    },
    addEventListener: function (a, b) {
      a = a.toString().toLowerCase().replace(/^on/, "");
      this.handlers[a] || (this.handlers[a] = []);
      this.handlers[a].push(b)
    },
    setHandCursor: function (a) {
      this.handCursorEnabled =
        a;
      this.ready && this.movie.setHandCursor(a)
    },
    setCSSEffects: function (a) {
      this.cssEffects = !!a
    },
    receiveEvent: function (a, b) {
      a = a.toString().toLowerCase().replace(/^on/, "");
      switch (a) {
        case "load":
          this.movie = r.getElementById(this.movieId);
          if (!this.movie) {
            var c = this;
            setTimeout(function () {
              c.receiveEvent("load", null)
            }, 1);
            return
          }
          if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
            c = this;
            setTimeout(function () {
              c.receiveEvent("load", null)
            }, 100);
            this.ready = !0;
            return
          }
          this.ready = !0;
          this.movie.clearText();
          this.movie.appendText(this.clipText);
          this.movie.setFileName(this.fileName);
          this.movie.setAction(this.action);
          this.movie.setHandCursor(this.handCursorEnabled);
          break;
        case "mouseover":
          this.domElement && this.cssEffects && this.recoverActive && this.domElement.addClass("active");
          break;
        case "mouseout":
          this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0));
          break;
        case "mousedown":
          this.domElement &&
            this.cssEffects && this.domElement.addClass("active");
          break;
        case "mouseup":
          this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
      }
      if (this.handlers[a])
        for (var d = 0, f = this.handlers[a].length; d < f; d++) {
          var e = this.handlers[a][d];
          if ("function" == typeof e) e(this, b);
          else if ("object" == typeof e && 2 == e.length) e[0][e[1]](this, b);
          else if ("string" == typeof e) q[e](this, b)
        }
    }
  };
  m.hasFlash = function () {
    try {
      return new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), !0
    } catch (a) {
      if (navigator.mimeTypes &&
        navigator.mimeTypes["application/x-shockwave-flash"] !== z && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) return !0
    }
    return !1
  };
  q.ZeroClipboard_TableTools = m;
  var O = function (a, b) {
      b.attr("id");
      b.parents("html").length ? a.glue(b[0], "") : setTimeout(function () {
        O(a, b)
      }, 500)
    },
    T = function (a) {
      var b = "Sheet1";
      a.sheetName && (b = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, ""));
      return b
    },
    H = function (a, b) {
      b = b.match(/[\s\S]{1,8192}/g) || [];
      a.clearText();
      for (var c = 0, d = b.length; c < d; c++) a.appendText(b[c])
    },
    P = function (a) {
      return a.newline ?
        a.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n"
    },
    Q = function (a, b) {
      var c = P(b);
      a = a.buttons.exportData(b.exportOptions);
      var d = b.fieldBoundary,
        f = b.fieldSeparator,
        e = new RegExp(d, "g"),
        n = b.escapeChar !== z ? b.escapeChar : "\\",
        l = function (u) {
          for (var x = "", B = 0, h = u.length; B < h; B++) 0 < B && (x += f), x += d ? d + ("" + u[B]).replace(e, n + d) + d : u[B];
          return x
        },
        E = b.header ? l(a.header) + c : "";
      b = b.footer && a.footer ? c + l(a.footer) : "";
      for (var C = [], p = 0, v = a.body.length; p < v; p++) C.push(l(a.body[p]));
      return {
        str: E + C.join(c) + b,
        rows: C.length
      }
    },
    I = {
      available: function () {
        return m.hasFlash()
      },
      init: function (a, b, c) {
        m.moviePath = w.Buttons.swfPath;
        var d = new m.Client;
        d.setHandCursor(!0);
        d.addEventListener("mouseDown", function (f) {
          c._fromFlash = !0;
          a.button(b[0]).trigger();
          c._fromFlash = !1
        });
        O(d, b);
        c._flash = d
      },
      destroy: function (a, b, c) {
        c._flash.destroy()
      },
      fieldSeparator: ",",
      fieldBoundary: '"',
      exportOptions: {},
      title: "*",
      messageTop: "*",
      messageBottom: "*",
      filename: "*",
      extension: ".csv",
      header: !0,
      footer: !1
    },
    J = "";
  J = "undefined" === typeof q.XMLSerializer ? new function () {
    this.serializeToString =
      function (a) {
        return a.xml
      }
  } : new XMLSerializer;
  var G, A = {
      "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',
      "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="61"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
    },
    R = [{
      match: /^\-?\d+\.\d%$/,
      style: 60,
      fmt: function (a) {
        return a / 100
      }
    }, {
      match: /^\-?\d+\.?\d*%$/,
      style: 56,
      fmt: function (a) {
        return a / 100
      }
    }, {
      match: /^\-?\$[\d,]+.?\d*$/,
      style: 57
    }, {
      match: /^\-?£[\d,]+.?\d*$/,
      style: 58
    }, {
      match: /^\-?€[\d,]+.?\d*$/,
      style: 59
    }, {
      match: /^\([\d,]+\)$/,
      style: 61,
      fmt: function (a) {
        return -1 * a.replace(/[\(\)]/g, "")
      }
    }, {
      match: /^\([\d,]+\.\d{2}\)$/,
      style: 62,
      fmt: function (a) {
        return -1 * a.replace(/[\(\)]/g, "")
      }
    }, {
      match: /^[\d,]+$/,
      style: 63
    }, {
      match: /^[\d,]+\.\d{2}$/,
      style: 64
    }];
  w.Buttons.swfPath = "//cdn.datatables.net/buttons/" +
    w.Buttons.version + "/swf/flashExport.swf";
  w.Api.register("buttons.resize()", function () {
    g.each(m.clients, function (a, b) {
      b.domElement !== z && b.domElement.parentNode && b.positionElement()
    })
  });
  w.ext.buttons.copyFlash = g.extend({}, I, {
    className: "buttons-copy buttons-flash",
    text: function (a) {
      return a.i18n("buttons.copy", "Copy")
    },
    action: function (a, b, c, d) {
      if (d._fromFlash) {
        this.processing(!0);
        a = d._flash;
        var f = Q(b, d);
        c = b.buttons.exportInfo(d);
        var e = P(d);
        f = f.str;
        c.title && (f = c.title + e + e + f);
        c.messageTop && (f = c.messageTop +
          e + e + f);
        c.messageBottom && (f = f + e + e + c.messageBottom);
        d.customize && (f = d.customize(f, d, b));
        a.setAction("copy");
        H(a, f);
        this.processing(!1);
        b.buttons.info(b.i18n("buttons.copyTitle", "Copiado para área de transferência"), b.i18n("buttons.copySuccess", {
          _: "Copiada %d linhas para área de transferência",
          1: "Copiada 1 linha para área de transferência"
        }, data.rows), 3E3)
      }
    },
    fieldSeparator: "\t",
    fieldBoundary: ""
  });
  w.ext.buttons.csvFlash = g.extend({}, I, {
    className: "buttons-csv buttons-flash",
    text: function (a) {
      return a.i18n("buttons.csv", "CSV")
    },
    action: function (a, b, c, d) {
      a =
        d._flash;
      var f = Q(b, d);
      c = b.buttons.exportInfo(d);
      b = d.customize ? d.customize(f.str, d, b) : f.str;
      a.setAction("csv");
      a.setFileName(c.filename);
      H(a, b)
    },
    escapeChar: '"'
  });
  w.ext.buttons.excelFlash = g.extend({}, I, {
    className: "buttons-excel buttons-flash",
    text: function (a) {
      return a.i18n("buttons.excel", "Excel")
    },
    action: function (a, b, c, d) {
      this.processing(!0);
      a = d._flash;
      var f = 0,
        e = g.parseXML(A["xl/worksheets/sheet1.xml"]),
        n = e.getElementsByTagName("sheetData")[0];
      c = {
        _rels: {
          ".rels": g.parseXML(A["_rels/.rels"])
        },
        xl: {
          _rels: {
            "workbook.xml.rels": g.parseXML(A["xl/_rels/workbook.xml.rels"])
          },
          "workbook.xml": g.parseXML(A["xl/workbook.xml"]),
          "styles.xml": g.parseXML(A["xl/styles.xml"]),
          worksheets: {
            "sheet1.xml": e
          }
        },
        "[Content_Types].xml": g.parseXML(A["[Content_Types].xml"])
      };
      var l = b.buttons.exportData(d.exportOptions),
        E, C, p = function (h) {
          E = f + 1;
          C = t(e, "row", {
            attr: {
              r: E
            }
          });
          for (var k = 0, F = h.length; k < F; k++) {
            var K = M(k) + "" + E,
              y = null;
            if (null === h[k] || h[k] === z || "" === h[k])
              if (!0 === d.createEmptyCells) h[k] = "";
              else continue;
            h[k] = "function" === typeof h[k].trim ? h[k].trim() : h[k];
            for (var L = 0, U = R.length; L < U; L++) {
              var D =
                R[L];
              if (h[k].match && !h[k].match(/^0\d+/) && h[k].match(D.match)) {
                y = h[k].replace(/[^\d\.\-]/g, "");
                D.fmt && (y = D.fmt(y));
                y = t(e, "c", {
                  attr: {
                    r: K,
                    s: D.style
                  },
                  children: [t(e, "v", {
                    text: y
                  })]
                });
                break
              }
            }
            y || ("number" === typeof h[k] || h[k].match && h[k].match(/^-?\d+(\.\d+)?$/) && !h[k].match(/^0\d+/) ? y = t(e, "c", {
              attr: {
                t: "n",
                r: K
              },
              children: [t(e, "v", {
                text: h[k]
              })]
            }) : (D = h[k].replace ? h[k].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "") : h[k], y = t(e, "c", {
              attr: {
                t: "inlineStr",
                r: K
              },
              children: {
                row: t(e, "is", {
                  children: {
                    row: t(e, "t", {
                      text: D
                    })
                  }
                })
              }
            })));
            C.appendChild(y)
          }
          n.appendChild(C);
          f++
        };
      g("sheets sheet", c.xl["workbook.xml"]).attr("name", T(d));
      d.customizeData && d.customizeData(l);
      var v = function (h, k) {
          var F = g("mergeCells", e);
          F[0].appendChild(t(e, "mergeCell", {
            attr: {
              ref: "A" + h + ":" + M(k) + h
            }
          }));
          F.attr("count", F.attr("count") + 1);
          g("row:eq(" + (h - 1) + ") c", e).attr("s", "51")
        },
        u = b.buttons.exportInfo(d);
      u.title && (p([u.title], f), v(f, l.header.length - 1));
      u.messageTop && (p([u.messageTop], f), v(f, l.header.length - 1));
      d.header && (p(l.header, f), g("row:last c", e).attr("s",
        "2"));
      for (var x = 0, B = l.body.length; x < B; x++) p(l.body[x], f);
      d.footer && l.footer && (p(l.footer, f), g("row:last c", e).attr("s", "2"));
      u.messageBottom && (p([u.messageBottom], f), v(f, l.header.length - 1));
      p = t(e, "cols");
      g("worksheet", e).prepend(p);
      v = 0;
      for (x = l.header.length; v < x; v++) p.appendChild(t(e, "col", {
        attr: {
          min: v + 1,
          max: v + 1,
          width: S(l, v),
          customWidth: 1
        }
      }));
      d.customize && d.customize(c, d, b);
      N(c);
      a.setAction("excel");
      a.setFileName(u.filename);
      a.setSheetData(c);
      H(a, "");
      this.processing(!1)
    },
    extension: ".xlsx",
    createEmptyCells: !1
  });
  w.ext.buttons.pdfFlash = g.extend({}, I, {
    className: "buttons-pdf buttons-flash",
    text: function (a) {
      return a.i18n("buttons.pdf", "PDF")
    },
    action: function (a, b, c, d) {
      this.processing(!0);
      a = d._flash;
      c = b.buttons.exportData(d.exportOptions);
      var f = b.buttons.exportInfo(d),
        e = b.table().node().offsetWidth,
        n = b.columns(d.columns).indexes().map(function (l) {
          return b.column(l).header().offsetWidth / e
        });
      a.setAction("pdf");
      a.setFileName(f.filename);
      H(a, JSON.stringify({
        title: f.title || "",
        messageTop: f.messageTop || "",
        messageBottom: f.messageBottom ||
          "",
        colWidth: n.toArray(),
        orientation: d.orientation,
        size: d.pageSize,
        header: d.header ? c.header : null,
        footer: d.footer ? c.footer : null,
        body: c.body
      }));
      this.processing(!1)
    },
    extension: ".pdf",
    orientation: "portrait",
    pageSize: "A4",
    newline: "\n"
  });
  return w.Buttons
});


/*!
 HTML5 export buttons for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license

 FileSaver.js (1.3.3) - MIT license
 Copyright © 2016 Eli Grey - http://eligrey.com
*/
(function (n) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (u) {
    return n(u, window, document)
  }) : "object" === typeof exports ? module.exports = function (u, x, E, F) {
    u || (u = window);
    x && x.fn.dataTable || (x = require("datatables.net")(u, x).$);
    x.fn.dataTable.Buttons || require("datatables.net-buttons")(u, x);
    return n(x, u, u.document, E, F)
  } : n(jQuery, window, document)
})(function (n, u, x, E, F, B) {
  function I(a) {
    for (var c = ""; 0 <= a;) c = String.fromCharCode(a % 26 + 65) + c, a = Math.floor(a /
      26) - 1;
    return c
  }

  function O(a, c) {
    J === B && (J = -1 === M.serializeToString((new u.DOMParser).parseFromString(P["xl/worksheets/sheet1.xml"], "text/xml")).indexOf("xmlns:r"));
    n.each(c, function (d, b) {
      if (n.isPlainObject(b)) d = a.folder(d), O(d, b);
      else {
        if (J) {
          var m = b.childNodes[0],
            e, f = [];
          for (e = m.attributes.length - 1; 0 <= e; e--) {
            var g = m.attributes[e].nodeName;
            var p = m.attributes[e].nodeValue; - 1 !== g.indexOf(":") && (f.push({
              name: g,
              value: p
            }), m.removeAttribute(g))
          }
          e = 0;
          for (g = f.length; e < g; e++) p = b.createAttribute(f[e].name.replace(":",
            "_dt_b_namespace_token_")), p.value = f[e].value, m.setAttributeNode(p)
        }
        b = M.serializeToString(b);
        J && (-1 === b.indexOf("<?xml") && (b = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + b), b = b.replace(/_dt_b_namespace_token_/g, ":"), b = b.replace(/xmlns:NS[\d]+="" NS[\d]+:/g, ""));
        b = b.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>");
        a.file(d, b)
      }
    })
  }

  function y(a, c, d) {
    var b = a.createElement(c);
    d && (d.attr && n(b).attr(d.attr), d.children && n.each(d.children, function (m, e) {
        b.appendChild(e)
      }), null !== d.text && d.text !==
      B && b.appendChild(a.createTextNode(d.text)));
    return b
  }

  function V(a, c) {
    var d = a.header[c].length;
    a.footer && a.footer[c].length > d && (d = a.footer[c].length);
    for (var b = 0, m = a.body.length; b < m; b++) {
      var e = a.body[b][c];
      e = null !== e && e !== B ? e.toString() : ""; - 1 !== e.indexOf("\n") ? (e = e.split("\n"), e.sort(function (f, g) {
        return g.length - f.length
      }), e = e[0].length) : e = e.length;
      e > d && (d = e);
      if (40 < d) return 54
    }
    d *= 1.35;
    return 6 < d ? d : 6
  }
  var D = n.fn.dataTable;
  D.Buttons.pdfMake = function (a) {
    if (!a) return F || u.pdfMake;
    F = a
  };
  D.Buttons.jszip =
    function (a) {
      if (!a) return E || u.JSZip;
      E = a
    };
  var K = function (a) {
    if (!("undefined" === typeof a || "undefined" !== typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
      var c = a.document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
        d = "download" in c,
        b = /constructor/i.test(a.HTMLElement) || a.safari,
        m = /CriOS\/[\d]+/.test(navigator.userAgent),
        e = function (h) {
          (a.setImmediate || a.setTimeout)(function () {
            throw h;
          }, 0)
        },
        f = function (h) {
          setTimeout(function () {
            "string" === typeof h ? (a.URL || a.webkitURL || a).revokeObjectURL(h) :
              h.remove()
          }, 4E4)
        },
        g = function (h) {
          return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type) ? new Blob([String.fromCharCode(65279), h], {
            type: h.type
          }) : h
        },
        p = function (h, q, v) {
          v || (h = g(h));
          var r = this,
            w = "application/octet-stream" === h.type,
            C = function () {
              var l = ["writestart", "progress", "write", "writeend"];
              l = [].concat(l);
              for (var z = l.length; z--;) {
                var G = r["on" + l[z]];
                if ("function" === typeof G) try {
                  G.call(r, r)
                } catch (A) {
                  e(A)
                }
              }
            };
          r.readyState = r.INIT;
          if (d) {
            var k = (a.URL || a.webkitURL || a).createObjectURL(h);
            setTimeout(function () {
              c.href = k;
              c.download = q;
              var l = new MouseEvent("click");
              c.dispatchEvent(l);
              C();
              f(k);
              r.readyState = r.DONE
            })
          } else(function () {
            if ((m || w && b) && a.FileReader) {
              var l = new FileReader;
              l.onloadend = function () {
                var z = m ? l.result : l.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                a.open(z, "_blank") || (a.location.href = z);
                r.readyState = r.DONE;
                C()
              };
              l.readAsDataURL(h);
              r.readyState = r.INIT
            } else k || (k = (a.URL || a.webkitURL || a).createObjectURL(h)), w ? a.location.href = k : a.open(k, "_blank") || (a.location.href =
              k), r.readyState = r.DONE, C(), f(k)
          })()
        },
        t = p.prototype;
      if ("undefined" !== typeof navigator && navigator.msSaveOrOpenBlob) return function (h, q, v) {
        q = q || h.name || "download";
        v || (h = g(h));
        return navigator.msSaveOrOpenBlob(h, q)
      };
      t.abort = function () {};
      t.readyState = t.INIT = 0;
      t.WRITING = 1;
      t.DONE = 2;
      t.error = t.onwritestart = t.onprogress = t.onwrite = t.onabort = t.onerror = t.onwriteend = null;
      return function (h, q, v) {
        return new p(h, q || h.name || "download", v)
      }
    }
  }("undefined" !== typeof self && self || "undefined" !== typeof u && u || this.content);
  D.fileSave =
    K;
  var Q = function (a) {
      var c = "Sheet1";
      a.sheetName && (c = a.sheetName.replace(/[\[\]\*\/\\\?:]/g, ""));
      return c
    },
    R = function (a) {
      return a.newline ? a.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n"
    },
    S = function (a, c) {
      var d = R(c);
      a = a.buttons.exportData(c.exportOptions);
      var b = c.fieldBoundary,
        m = c.fieldSeparator,
        e = new RegExp(b, "g"),
        f = c.escapeChar !== B ? c.escapeChar : "\\",
        g = function (v) {
          for (var r = "", w = 0, C = v.length; w < C; w++) 0 < w && (r += m), r += b ? b + ("" + v[w]).replace(e, f + b) + b : v[w];
          return r
        },
        p = c.header ? g(a.header) + d : "";
      c =
        c.footer && a.footer ? d + g(a.footer) : "";
      for (var t = [], h = 0, q = a.body.length; h < q; h++) t.push(g(a.body[h]));
      return {
        str: p + t.join(d) + c,
        rows: t.length
      }
    },
    T = function () {
      if (-1 === navigator.userAgent.indexOf("Safari") || -1 !== navigator.userAgent.indexOf("Chrome") || -1 !== navigator.userAgent.indexOf("Opera")) return !1;
      var a = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
      return a && 1 < a.length && 603.1 > 1 * a[1] ? !0 : !1
    };
  try {
    var M = new XMLSerializer,
      J
  } catch (a) {}
  var P = {
      "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
      "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
      "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
      "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="68"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="14" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
    },
    U = [{
        match: /^\-?\d+\.\d%$/,
        style: 60,
        fmt: function (a) {
          return a / 100
        }
      }, {
        match: /^\-?\d+\.?\d*%$/,
        style: 56,
        fmt: function (a) {
          return a / 100
        }
      }, {
        match: /^\-?\$[\d,]+.?\d*$/,
        style: 57
      }, {
        match: /^\-?£[\d,]+.?\d*$/,
        style: 58
      }, {
        match: /^\-?€[\d,]+.?\d*$/,
        style: 59
      }, {
        match: /^\-?\d+$/,
        style: 65
      }, {
        match: /^\-?\d+\.\d{2}$/,
        style: 66
      }, {
        match: /^\([\d,]+\)$/,
        style: 61,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, "")
        }
      }, {
        match: /^\([\d,]+\.\d{2}\)$/,
        style: 62,
        fmt: function (a) {
          return -1 * a.replace(/[\(\)]/g, "")
        }
      }, {
        match: /^\-?[\d,]+$/,
        style: 63
      },
      {
        match: /^\-?[\d,]+\.\d{2}$/,
        style: 64
      }, {
        match: /^[\d]{4}\-[\d]{2}\-[\d]{2}$/,
        style: 67,
        fmt: function (a) {
          return Math.round(25569 + Date.parse(a) / 864E5)
        }
      }
    ];
  D.ext.buttons.copyHtml5 = {
    className: "buttons-copy buttons-html5",
    text: function (a) {
      return a.i18n("buttons.copy", "Copy")
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      var m = this;
      a = S(c, b);
      var e = c.buttons.exportInfo(b),
        f = R(b),
        g = a.str;
      d = n("<div/>").css({
        height: 1,
        width: 1,
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0
      });
      e.title && (g = e.title + f + f + g);
      e.messageTop &&
        (g = e.messageTop + f + f + g);
      e.messageBottom && (g = g + f + f + e.messageBottom);
      b.customize && (g = b.customize(g, b, c));
      b = n("<textarea readonly/>").val(g).appendTo(d);
      if (x.queryCommandSupported("copy")) {
        d.appendTo(c.table().container());
        b[0].focus();
        b[0].select();
        try {
          var p = x.execCommand("copy");
          d.remove();
          if (p) {
            c.buttons.info(c.i18n("buttons.copyTitle", "Copiado para área de transferência"), c.i18n("buttons.copySuccess", {
              1: "Copiada uma linha para área de transferência",
              _: "Copiada %d linhas para área de transferência"
            }, a.rows), 2E3);
            this.processing(!1);
            return
          }
        } catch (q) {}
      }
      p =
        n("<span>" + c.i18n("buttons.copyKeys", "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.") + "</span>").append(d);
      c.buttons.info(c.i18n("buttons.copyTitle", "Copiado para área de transferência"), p, 0);
      b[0].focus();
      b[0].select();
      var t = n(p).closest(".dt-button-info"),
        h = function () {
          t.off("click.buttons-copy");
          n(x).off(".buttons-copy");
          c.buttons.info(!1)
        };
      t.on("click.buttons-copy", h);
      n(x).on("keydown.buttons-copy", function (q) {
        27 ===
          q.keyCode && (h(), m.processing(!1))
      }).on("copy.buttons-copy cut.buttons-copy", function () {
        h();
        m.processing(!1)
      })
    },
    exportOptions: {},
    fieldSeparator: "\t",
    fieldBoundary: "",
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*"
  };
  D.ext.buttons.csvHtml5 = {
    bom: !1,
    className: "buttons-csv buttons-html5",
    available: function () {
      return u.FileReader !== B && u.Blob
    },
    text: function (a) {
      return a.i18n("buttons.csv", "CSV")
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      a = S(c, b).str;
      d = c.buttons.exportInfo(b);
      var m = b.charset;
      b.customize && (a = b.customize(a, b, c));
      !1 !== m ? (m || (m = x.characterSet || x.charset), m && (m = ";charset=" + m)) : m = "";
      b.bom && (a = "﻿" + a);
      K(new Blob([a], {
        type: "text/csv" + m
      }), d.filename, !0);
      this.processing(!1)
    },
    filename: "*",
    extension: ".csv",
    exportOptions: {},
    fieldSeparator: ",",
    fieldBoundary: '"',
    escapeChar: '"',
    charset: null,
    header: !0,
    footer: !1
  };
  D.ext.buttons.excelHtml5 = {
    className: "buttons-excel buttons-html5",
    available: function () {
      return u.FileReader !== B && (E || u.JSZip) !== B && !T() && M
    },
    text: function (a) {
      return a.i18n("buttons.excel",
        "Excel")
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      var m = this,
        e = 0;
      a = function (k) {
        return n.parseXML(P[k])
      };
      var f = a("xl/worksheets/sheet1.xml"),
        g = f.getElementsByTagName("sheetData")[0];
      a = {
        _rels: {
          ".rels": a("_rels/.rels")
        },
        xl: {
          _rels: {
            "workbook.xml.rels": a("xl/_rels/workbook.xml.rels")
          },
          "workbook.xml": a("xl/workbook.xml"),
          "styles.xml": a("xl/styles.xml"),
          worksheets: {
            "sheet1.xml": f
          }
        },
        "[Content_Types].xml": a("[Content_Types].xml")
      };
      var p = c.buttons.exportData(b.exportOptions),
        t, h, q = function (k) {
          t = e + 1;
          h =
            y(f, "row", {
              attr: {
                r: t
              }
            });
          for (var l = 0, z = k.length; l < z; l++) {
            var G = I(l) + "" + t,
              A = null;
            if (null === k[l] || k[l] === B || "" === k[l])
              if (!0 === b.createEmptyCells) k[l] = "";
              else continue;
            var H = k[l];
            k[l] = "function" === typeof k[l].trim ? k[l].trim() : k[l];
            for (var N = 0, W = U.length; N < W; N++) {
              var L = U[N];
              if (k[l].match && !k[l].match(/^0\d+/) && k[l].match(L.match)) {
                A = k[l].replace(/[^\d\.\-]/g, "");
                L.fmt && (A = L.fmt(A));
                A = y(f, "c", {
                  attr: {
                    r: G,
                    s: L.style
                  },
                  children: [y(f, "v", {
                    text: A
                  })]
                });
                break
              }
            }
            A || ("number" === typeof k[l] || k[l].match && k[l].match(/^-?\d+(\.\d+)?$/) &&
              !k[l].match(/^0\d+/) ? A = y(f, "c", {
                attr: {
                  t: "n",
                  r: G
                },
                children: [y(f, "v", {
                  text: k[l]
                })]
              }) : (H = H.replace ? H.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "") : H, A = y(f, "c", {
                attr: {
                  t: "inlineStr",
                  r: G
                },
                children: {
                  row: y(f, "is", {
                    children: {
                      row: y(f, "t", {
                        text: H,
                        attr: {
                          "xml:space": "preserve"
                        }
                      })
                    }
                  })
                }
              })));
            h.appendChild(A)
          }
          g.appendChild(h);
          e++
        };
      b.customizeData && b.customizeData(p);
      var v = function (k, l) {
          var z = n("mergeCells", f);
          z[0].appendChild(y(f, "mergeCell", {
            attr: {
              ref: "A" + k + ":" + I(l) + k
            }
          }));
          z.attr("count", parseFloat(z.attr("count")) +
            1);
          n("row:eq(" + (k - 1) + ") c", f).attr("s", "51")
        },
        r = c.buttons.exportInfo(b);
      r.title && (q([r.title], e), v(e, p.header.length - 1));
      r.messageTop && (q([r.messageTop], e), v(e, p.header.length - 1));
      b.header && (q(p.header, e), n("row:last c", f).attr("s", "2"));
      d = e;
      var w = 0;
      for (var C = p.body.length; w < C; w++) q(p.body[w], e);
      w = e;
      b.footer && p.footer && (q(p.footer, e), n("row:last c", f).attr("s", "2"));
      r.messageBottom && (q([r.messageBottom], e), v(e, p.header.length - 1));
      q = y(f, "cols");
      n("worksheet", f).prepend(q);
      v = 0;
      for (C = p.header.length; v <
        C; v++) q.appendChild(y(f, "col", {
        attr: {
          min: v + 1,
          max: v + 1,
          width: V(p, v),
          customWidth: 1
        }
      }));
      q = a.xl["workbook.xml"];
      n("sheets sheet", q).attr("name", Q(b));
      b.autoFilter && (n("mergeCells", f).before(y(f, "autoFilter", {
        attr: {
          ref: "A" + d + ":" + I(p.header.length - 1) + w
        }
      })), n("definedNames", q).append(y(q, "definedName", {
        attr: {
          name: "_xlnm._FilterDatabase",
          localSheetId: "0",
          hidden: 1
        },
        text: Q(b) + "!$A$" + d + ":" + I(p.header.length - 1) + w
      })));
      b.customize && b.customize(a, b, c);
      0 === n("mergeCells", f).children().length && n("mergeCells", f).remove();
      c = new(E || u.JSZip);
      d = {
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      };
      O(c, a);
      c.generateAsync ? c.generateAsync(d).then(function (k) {
        K(k, r.filename);
        m.processing(!1)
      }) : (K(c.generate(d), r.filename), this.processing(!1))
    },
    filename: "*",
    extension: ".xlsx",
    exportOptions: {},
    header: !0,
    footer: !1,
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    createEmptyCells: !1,
    autoFilter: !1,
    sheetName: ""
  };
  D.ext.buttons.pdfHtml5 = {
    className: "buttons-pdf buttons-html5",
    available: function () {
      return u.FileReader !==
        B && (F || u.pdfMake)
    },
    text: function (a) {
      return a.i18n("buttons.pdf", "PDF")
    },
    action: function (a, c, d, b) {
      this.processing(!0);
      d = c.buttons.exportData(b.exportOptions);
      a = c.buttons.exportInfo(b);
      var m = [];
      b.header && m.push(n.map(d.header, function (g) {
        return {
          text: "string" === typeof g ? g : g + "",
          style: "tableHeader"
        }
      }));
      for (var e = 0, f = d.body.length; e < f; e++) m.push(n.map(d.body[e], function (g) {
        if (null === g || g === B) g = "";
        return {
          text: "string" === typeof g ? g : g + "",
          style: e % 2 ? "tableBodyEven" : "tableBodyOdd"
        }
      }));
      b.footer && d.footer && m.push(n.map(d.footer,
        function (g) {
          return {
            text: "string" === typeof g ? g : g + "",
            style: "tableFooter"
          }
        }));
      d = {
        pageSize: b.pageSize,
        pageOrientation: b.orientation,
        content: [{
          table: {
            headerRows: 1,
            body: m
          },
          layout: "noBorders"
        }],
        styles: {
          tableHeader: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154",
            alignment: "center"
          },
          tableBodyEven: {},
          tableBodyOdd: {
            fillColor: "#f3f3f3"
          },
          tableFooter: {
            bold: !0,
            fontSize: 11,
            color: "white",
            fillColor: "#2d4154"
          },
          title: {
            alignment: "center",
            fontSize: 15
          },
          message: {}
        },
        defaultStyle: {
          fontSize: 10
        }
      };
      a.messageTop && d.content.unshift({
        text: a.messageTop,
        style: "message",
        margin: [0, 0, 0, 12]
      });
      a.messageBottom && d.content.push({
        text: a.messageBottom,
        style: "message",
        margin: [0, 0, 0, 12]
      });
      a.title && d.content.unshift({
        text: a.title,
        style: "title",
        margin: [0, 0, 0, 12]
      });
      b.customize && b.customize(d, b, c);
      c = (F || u.pdfMake).createPdf(d);
      "open" !== b.download || T() ? c.download(a.filename) : c.open();
      this.processing(!1)
    },
    title: "*",
    filename: "*",
    extension: ".pdf",
    exportOptions: {},
    orientation: "portrait",
    pageSize: "A4",
    header: !0,
    footer: !1,
    messageTop: "*",
    messageBottom: "*",
    customize: null,
    download: "download"
  };
  return D.Buttons
});


/*!
 Print button for Buttons and DataTables.
 2016 SpryMedia Ltd - datatables.net/license
*/
(function (b) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (c) {
    return b(c, window, document)
  }) : "object" === typeof exports ? module.exports = function (c, g) {
    c || (c = window);
    g && g.fn.dataTable || (g = require("datatables.net")(c, g).$);
    g.fn.dataTable.Buttons || require("datatables.net-buttons")(c, g);
    return b(g, c, c.document)
  } : b(jQuery, window, document)
})(function (b, c, g, y) {
  var u = b.fn.dataTable,
    n = g.createElement("a"),
    v = function (a) {
      n.href = a;
      a = n.host; - 1 === a.indexOf("/") &&
        0 !== n.pathname.indexOf("/") && (a += "/");
      return n.protocol + "//" + a + n.pathname + n.search
    };
  u.ext.buttons.print = {
    className: "buttons-print",
    text: function (a) {
      return a.i18n("buttons.print", "Print")
    },
    action: function (a, k, p, h) {
      a = k.buttons.exportData(b.extend({
        decodeEntities: !1
      }, h.exportOptions));
      p = k.buttons.exportInfo(h);
      var w = k.columns(h.exportOptions.columns).flatten().map(function (d) {
          return k.settings()[0].aoColumns[k.column(d).index()].sClass
        }).toArray(),
        r = function (d, e) {
          for (var x = "<tr>", l = 0, z = d.length; l < z; l++) x +=
            "<" + e + " " + (w[l] ? 'class="' + w[l] + '"' : "") + ">" + (null === d[l] || d[l] === y ? "" : d[l]) + "</" + e + ">";
          return x + "</tr>"
        },
        m = '<table class="' + k.table().node().className + '">';
      h.header && (m += "<thead>" + r(a.header, "th") + "</thead>");
      m += "<tbody>";
      for (var t = 0, A = a.body.length; t < A; t++) m += r(a.body[t], "td");
      m += "</tbody>";
      h.footer && a.footer && (m += "<tfoot>" + r(a.footer, "th") + "</tfoot>");
      m += "</table>";
      var f = c.open("", "");
      f.document.close();
      var q = "<title>" + p.title + "</title>";
      b("style, link").each(function () {
        var d = q,
          e = b(this).clone()[0];
        "link" === e.nodeName.toLowerCase() && (e.href = v(e.href));
        q = d + e.outerHTML
      });
      try {
        f.document.head.innerHTML = q
      } catch (d) {
        b(f.document.head).html(q)
      }
      f.document.body.innerHTML = "<h1>" + p.title + "</h1><div>" + (p.messageTop || "") + "</div>" + m + "<div>" + (p.messageBottom || "") + "</div>";
      b(f.document.body).addClass("dt-print-view");
      b("img", f.document.body).each(function (d, e) {
        e.setAttribute("src", v(e.getAttribute("src")))
      });
      h.customize && h.customize(f, h, k);
      a = function () {
        h.autoPrint && (f.print(), f.close())
      };
      navigator.userAgent.match(/Trident\/\d.\d/) ?
        a() : f.setTimeout(a, 1E3)
    },
    title: "*",
    messageTop: "*",
    messageBottom: "*",
    exportOptions: {},
    header: !0,
    footer: !1,
    autoPrint: !0,
    customize: null
  };
  return u.Buttons
});


/*!
   Copyright 2010-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 ColReorder 1.5.2
 ©2010-2019 SpryMedia Ltd - datatables.net/license
*/
(function (d) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
    return d(t, window, document)
  }) : "object" === typeof exports ? module.exports = function (t, r) {
    t || (t = window);
    r && r.fn.dataTable || (r = require("datatables.net")(t, r).$);
    return d(r, t, t.document)
  } : d(jQuery, window, document)
})(function (d, t, r, w) {
  function v(a) {
    for (var b = [], c = 0, d = a.length; c < d; c++) b[a[c]] = c;
    return b
  }

  function u(a, b, c) {
    b = a.splice(b, 1)[0];
    a.splice(c, 0, b)
  }

  function x(a, b, c) {
    for (var d = [], h = 0, f = a.childNodes.length; h <
      f; h++) 1 == a.childNodes[h].nodeType && d.push(a.childNodes[h]);
    b = d[b];
    null !== c ? a.insertBefore(b, d[c]) : a.appendChild(b)
  }
  var y = d.fn.dataTable;
  d.fn.dataTableExt.oApi.fnColReorder = function (a, b, c, g, h) {
    var f, p, n = a.aoColumns.length;
    var q = function (a, b, c) {
      if (a[b] && "function" !== typeof a[b]) {
        var e = a[b].split("."),
          d = e.shift();
        isNaN(1 * d) || (a[b] = c[1 * d] + "." + e.join("."))
      }
    };
    if (b != c)
      if (0 > b || b >= n) this.oApi._fnLog(a, 1, "ColReorder 'from' index is out of bounds: " + b);
      else if (0 > c || c >= n) this.oApi._fnLog(a, 1, "ColReorder 'to' index is out of bounds: " +
      c);
    else {
      var l = [];
      var e = 0;
      for (f = n; e < f; e++) l[e] = e;
      u(l, b, c);
      var k = v(l);
      e = 0;
      for (f = a.aaSorting.length; e < f; e++) a.aaSorting[e][0] = k[a.aaSorting[e][0]];
      if (null !== a.aaSortingFixed)
        for (e = 0, f = a.aaSortingFixed.length; e < f; e++) a.aaSortingFixed[e][0] = k[a.aaSortingFixed[e][0]];
      e = 0;
      for (f = n; e < f; e++) {
        var m = a.aoColumns[e];
        l = 0;
        for (p = m.aDataSort.length; l < p; l++) m.aDataSort[l] = k[m.aDataSort[l]];
        m.idx = k[m.idx]
      }
      d.each(a.aLastSort, function (b, c) {
        a.aLastSort[b].src = k[c.src]
      });
      e = 0;
      for (f = n; e < f; e++) m = a.aoColumns[e], "number" == typeof m.mData ?
        m.mData = k[m.mData] : d.isPlainObject(m.mData) && (q(m.mData, "_", k), q(m.mData, "filter", k), q(m.mData, "sort", k), q(m.mData, "type", k));
      if (a.aoColumns[b].bVisible) {
        q = this.oApi._fnColumnIndexToVisible(a, b);
        p = null;
        for (e = c < b ? c : c + 1; null === p && e < n;) p = this.oApi._fnColumnIndexToVisible(a, e), e++;
        l = a.nTHead.getElementsByTagName("tr");
        e = 0;
        for (f = l.length; e < f; e++) x(l[e], q, p);
        if (null !== a.nTFoot)
          for (l = a.nTFoot.getElementsByTagName("tr"), e = 0, f = l.length; e < f; e++) x(l[e], q, p);
        e = 0;
        for (f = a.aoData.length; e < f; e++) null !== a.aoData[e].nTr &&
          x(a.aoData[e].nTr, q, p)
      }
      u(a.aoColumns, b, c);
      e = 0;
      for (f = n; e < f; e++) a.oApi._fnColumnOptions(a, e, {});
      u(a.aoPreSearchCols, b, c);
      e = 0;
      for (f = a.aoData.length; e < f; e++) {
        p = a.aoData[e];
        if (m = p.anCells)
          for (u(m, b, c), l = 0, q = m.length; l < q; l++) m[l] && m[l]._DT_CellIndex && (m[l]._DT_CellIndex.column = l);
        "dom" !== p.src && d.isArray(p._aData) && u(p._aData, b, c)
      }
      e = 0;
      for (f = a.aoHeader.length; e < f; e++) u(a.aoHeader[e], b, c);
      if (null !== a.aoFooter)
        for (e = 0, f = a.aoFooter.length; e < f; e++) u(a.aoFooter[e], b, c);
      (h || h === w) && d.fn.dataTable.Api(a).rows().invalidate();
      e = 0;
      for (f = n; e < f; e++) d(a.aoColumns[e].nTh).off(".DT"), this.oApi._fnSortAttachListener(a, a.aoColumns[e].nTh, e);
      d(a.oInstance).trigger("column-reorder.dt", [a, {
        from: b,
        to: c,
        mapping: k,
        drop: g,
        iFrom: b,
        iTo: c,
        aiInvertMapping: k
      }])
    }
  };
  var k = function (a, b) {
    a = (new d.fn.dataTable.Api(a)).settings()[0];
    if (a._colReorder) return a._colReorder;
    !0 === b && (b = {});
    var c = d.fn.dataTable.camelToHungarian;
    c && (c(k.defaults, k.defaults, !0), c(k.defaults, b || {}));
    this.s = {
      dt: null,
      enable: null,
      init: d.extend(!0, {}, k.defaults, b),
      fixed: 0,
      fixedRight: 0,
      reorderCallback: null,
      mouse: {
        startX: -1,
        startY: -1,
        offsetX: -1,
        offsetY: -1,
        target: -1,
        targetIndex: -1,
        fromIndex: -1
      },
      aoTargets: []
    };
    this.dom = {
      drag: null,
      pointer: null
    };
    this.s.enable = this.s.init.bEnable;
    this.s.dt = a;
    this.s.dt._colReorder = this;
    this._fnConstruct();
    return this
  };
  d.extend(k.prototype, {
    fnEnable: function (a) {
      if (!1 === a) return fnDisable();
      this.s.enable = !0
    },
    fnDisable: function () {
      this.s.enable = !1
    },
    fnReset: function () {
      this._fnOrderColumns(this.fnOrder());
      return this
    },
    fnGetCurrentOrder: function () {
      return this.fnOrder()
    },
    fnOrder: function (a, b) {
      var c = [],
        g, h = this.s.dt.aoColumns;
      if (a === w) {
        b = 0;
        for (g = h.length; b < g; b++) c.push(h[b]._ColReorder_iOrigCol);
        return c
      }
      if (b) {
        h = this.fnOrder();
        b = 0;
        for (g = a.length; b < g; b++) c.push(d.inArray(a[b], h));
        a = c
      }
      this._fnOrderColumns(v(a));
      return this
    },
    fnTranspose: function (a, b) {
      b || (b = "toCurrent");
      var c = this.fnOrder(),
        g = this.s.dt.aoColumns;
      return "toCurrent" === b ? d.isArray(a) ? d.map(a, function (a) {
          return d.inArray(a, c)
        }) : d.inArray(a, c) : d.isArray(a) ? d.map(a, function (a) {
          return g[a]._ColReorder_iOrigCol
        }) :
        g[a]._ColReorder_iOrigCol
    },
    _fnConstruct: function () {
      var a = this,
        b = this.s.dt.aoColumns.length,
        c = this.s.dt.nTable,
        g;
      this.s.init.iFixedColumns && (this.s.fixed = this.s.init.iFixedColumns);
      this.s.init.iFixedColumnsLeft && (this.s.fixed = this.s.init.iFixedColumnsLeft);
      this.s.fixedRight = this.s.init.iFixedColumnsRight ? this.s.init.iFixedColumnsRight : 0;
      this.s.init.fnReorderCallback && (this.s.reorderCallback = this.s.init.fnReorderCallback);
      for (g = 0; g < b; g++) g > this.s.fixed - 1 && g < b - this.s.fixedRight && this._fnMouseListener(g,
        this.s.dt.aoColumns[g].nTh), this.s.dt.aoColumns[g]._ColReorder_iOrigCol = g;
      this.s.dt.oApi._fnCallbackReg(this.s.dt, "aoStateSaveParams", function (b, c) {
        a._fnStateSave.call(a, c)
      }, "ColReorder_State");
      var h = null;
      this.s.init.aiOrder && (h = this.s.init.aiOrder.slice());
      this.s.dt.oLoadedState && "undefined" != typeof this.s.dt.oLoadedState.ColReorder && this.s.dt.oLoadedState.ColReorder.length == this.s.dt.aoColumns.length && (h = this.s.dt.oLoadedState.ColReorder);
      if (h)
        if (a.s.dt._bInitComplete) b = v(h), a._fnOrderColumns.call(a,
          b);
        else {
          var f = !1;
          d(c).on("draw.dt.colReorder", function () {
            if (!a.s.dt._bInitComplete && !f) {
              f = !0;
              var b = v(h);
              a._fnOrderColumns.call(a, b)
            }
          })
        }
      else this._fnSetColumnIndexes();
      d(c).on("destroy.dt.colReorder", function () {
        d(c).off("destroy.dt.colReorder draw.dt.colReorder");
        d.each(a.s.dt.aoColumns, function (a, b) {
          d(b.nTh).off(".ColReorder");
          d(b.nTh).removeAttr("data-column-index")
        });
        a.s.dt._colReorder = null;
        a.s = null
      })
    },
    _fnOrderColumns: function (a) {
      var b = !1;
      if (a.length != this.s.dt.aoColumns.length) this.s.dt.oInstance.oApi._fnLog(this.s.dt,
        1, "ColReorder - array reorder does not match known number of columns. Skipping.");
      else {
        for (var c = 0, g = a.length; c < g; c++) {
          var h = d.inArray(c, a);
          c != h && (u(a, h, c), this.s.dt.oInstance.fnColReorder(h, c, !0, !1), b = !0)
        }
        this._fnSetColumnIndexes();
        b && (d.fn.dataTable.Api(this.s.dt).rows().invalidate(), "" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY || this.s.dt.oInstance.fnAdjustColumnSizing(!1), this.s.dt.oInstance.oApi._fnSaveState(this.s.dt), null !== this.s.reorderCallback && this.s.reorderCallback.call(this))
      }
    },
    _fnStateSave: function (a) {
      var b, c, g = this.s.dt.aoColumns;
      a.ColReorder = [];
      if (a.aaSorting) {
        for (b = 0; b < a.aaSorting.length; b++) a.aaSorting[b][0] = g[a.aaSorting[b][0]]._ColReorder_iOrigCol;
        var h = d.extend(!0, [], a.aoSearchCols);
        b = 0;
        for (c = g.length; b < c; b++) {
          var f = g[b]._ColReorder_iOrigCol;
          a.aoSearchCols[f] = h[b];
          a.abVisCols[f] = g[b].bVisible;
          a.ColReorder.push(f)
        }
      } else if (a.order) {
        for (b = 0; b < a.order.length; b++) a.order[b][0] = g[a.order[b][0]]._ColReorder_iOrigCol;
        h = d.extend(!0, [], a.columns);
        b = 0;
        for (c = g.length; b < c; b++) f =
          g[b]._ColReorder_iOrigCol, a.columns[f] = h[b], a.ColReorder.push(f)
      }
    },
    _fnMouseListener: function (a, b) {
      var c = this;
      d(b).on("mousedown.ColReorder", function (a) {
        c.s.enable && 1 === a.which && c._fnMouseDown.call(c, a, b)
      }).on("touchstart.ColReorder", function (a) {
        c.s.enable && c._fnMouseDown.call(c, a, b)
      })
    },
    _fnMouseDown: function (a, b) {
      var c = this,
        g = d(a.target).closest("th, td").offset();
      b = parseInt(d(b).attr("data-column-index"), 10);
      b !== w && (this.s.mouse.startX = this._fnCursorPosition(a, "pageX"), this.s.mouse.startY = this._fnCursorPosition(a,
        "pageY"), this.s.mouse.offsetX = this._fnCursorPosition(a, "pageX") - g.left, this.s.mouse.offsetY = this._fnCursorPosition(a, "pageY") - g.top, this.s.mouse.target = this.s.dt.aoColumns[b].nTh, this.s.mouse.targetIndex = b, this.s.mouse.fromIndex = b, this._fnRegions(), d(r).on("mousemove.ColReorder touchmove.ColReorder", function (a) {
        c._fnMouseMove.call(c, a)
      }).on("mouseup.ColReorder touchend.ColReorder", function (a) {
        c._fnMouseUp.call(c, a)
      }))
    },
    _fnMouseMove: function (a) {
      var b = this;
      if (null === this.dom.drag) {
        if (5 > Math.pow(Math.pow(this._fnCursorPosition(a,
            "pageX") - this.s.mouse.startX, 2) + Math.pow(this._fnCursorPosition(a, "pageY") - this.s.mouse.startY, 2), .5)) return;
        this._fnCreateDragNode()
      }
      this.dom.drag.css({
        left: this._fnCursorPosition(a, "pageX") - this.s.mouse.offsetX,
        top: this._fnCursorPosition(a, "pageY") - this.s.mouse.offsetY
      });
      var c = this.s.mouse.toIndex;
      a = this._fnCursorPosition(a, "pageX");
      for (var d = function (a) {
          for (; 0 <= a;) {
            a--;
            if (0 >= a) return null;
            if (b.s.aoTargets[a + 1].x !== b.s.aoTargets[a].x) return b.s.aoTargets[a]
          }
        }, h = function () {
          for (var a = 0; a < b.s.aoTargets.length -
            1; a++)
            if (b.s.aoTargets[a].x !== b.s.aoTargets[a + 1].x) return b.s.aoTargets[a]
        }, f = function () {
          for (var a = b.s.aoTargets.length - 1; 0 < a; a--)
            if (b.s.aoTargets[a].x !== b.s.aoTargets[a - 1].x) return b.s.aoTargets[a]
        }, k = 1; k < this.s.aoTargets.length; k++) {
        var n = d(k);
        n || (n = h());
        var q = n.x + (this.s.aoTargets[k].x - n.x) / 2;
        if (this._fnIsLtr()) {
          if (a < q) {
            var l = n;
            break
          }
        } else if (a > q) {
          l = n;
          break
        }
      }
      l ? (this.dom.pointer.css("left", l.x), this.s.mouse.toIndex = l.to) : (this.dom.pointer.css("left", f().x), this.s.mouse.toIndex = f().to);
      this.s.init.bRealtime &&
        c !== this.s.mouse.toIndex && (this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex), this.s.mouse.fromIndex = this.s.mouse.toIndex, "" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY || this.s.dt.oInstance.fnAdjustColumnSizing(!1), this._fnRegions())
    },
    _fnMouseUp: function (a) {
      d(r).off(".ColReorder");
      null !== this.dom.drag && (this.dom.drag.remove(), this.dom.pointer.remove(), this.dom.drag = null, this.dom.pointer = null, this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex,
        !0), this._fnSetColumnIndexes(), "" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY || this.s.dt.oInstance.fnAdjustColumnSizing(!1), this.s.dt.oInstance.oApi._fnSaveState(this.s.dt), null !== this.s.reorderCallback && this.s.reorderCallback.call(this))
    },
    _fnRegions: function () {
      var a = this.s.dt.aoColumns,
        b = this._fnIsLtr();
      this.s.aoTargets.splice(0, this.s.aoTargets.length);
      var c = d(this.s.dt.nTable).offset().left,
        g = [];
      d.each(a, function (a, f) {
        if (f.bVisible && "none" !== f.nTh.style.display) {
          f = d(f.nTh);
          var h = f.offset().left;
          b && (h += f.outerWidth());
          g.push({
            index: a,
            bound: h
          });
          c = h
        } else g.push({
          index: a,
          bound: c
        })
      });
      var h = g[0];
      a = d(a[h.index].nTh).outerWidth();
      this.s.aoTargets.push({
        to: 0,
        x: h.bound - a
      });
      for (h = 0; h < g.length; h++) {
        a = g[h];
        var f = a.index;
        a.index < this.s.mouse.fromIndex && f++;
        this.s.aoTargets.push({
          to: f,
          x: a.bound
        })
      }
      0 !== this.s.fixedRight && this.s.aoTargets.splice(this.s.aoTargets.length - this.s.fixedRight);
      0 !== this.s.fixed && this.s.aoTargets.splice(0, this.s.fixed)
    },
    _fnCreateDragNode: function () {
      var a = "" !== this.s.dt.oScroll.sX ||
        "" !== this.s.dt.oScroll.sY,
        b = this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,
        c = b.parentNode,
        g = c.parentNode,
        h = g.parentNode,
        f = d(b).clone();
      this.dom.drag = d(h.cloneNode(!1)).addClass("DTCR_clonedTable").append(d(g.cloneNode(!1)).append(d(c.cloneNode(!1)).append(f[0]))).css({
        position: "absolute",
        top: 0,
        left: 0,
        width: d(b).outerWidth(),
        height: d(b).outerHeight()
      }).appendTo("body");
      this.dom.pointer = d("<div></div>").addClass("DTCR_pointer").css({
        position: "absolute",
        top: a ? d("div.dataTables_scroll", this.s.dt.nTableWrapper).offset().top : d(this.s.dt.nTable).offset().top,
        height: a ? d("div.dataTables_scroll", this.s.dt.nTableWrapper).height() : d(this.s.dt.nTable).height()
      }).appendTo("body")
    },
    _fnSetColumnIndexes: function () {
      d.each(this.s.dt.aoColumns, function (a, b) {
        d(b.nTh).attr("data-column-index", a)
      })
    },
    _fnCursorPosition: function (a, b) {
      return -1 !== a.type.indexOf("touch") ? a.originalEvent.touches[0][b] : a[b]
    },
    _fnIsLtr: function () {
      return "rtl" !== d(this.s.dt.nTable).css("direction")
    }
  });
  k.defaults = {
    aiOrder: null,
    bEnable: !0,
    bRealtime: !0,
    iFixedColumnsLeft: 0,
    iFixedColumnsRight: 0,
    fnReorderCallback: null
  };
  k.version = "1.5.2";
  d.fn.dataTable.ColReorder = k;
  d.fn.DataTable.ColReorder = k;
  "function" == typeof d.fn.dataTable && "function" == typeof d.fn.dataTableExt.fnVersionCheck && d.fn.dataTableExt.fnVersionCheck("1.10.8") ? d.fn.dataTableExt.aoFeatures.push({
      fnInit: function (a) {
        var b = a.oInstance;
        a._colReorder ? b.oApi._fnLog(a, 1, "ColReorder attempted to initialise twice. Ignoring second") : (b = a.oInit, new k(a, b.colReorder || b.oColReorder || {}));
        return null
      },
      cFeature: "R",
      sFeature: "ColReorder"
    }) :
    alert("Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download");
  d(r).on("preInit.dt.colReorder", function (a, b) {
    if ("dt" === a.namespace) {
      a = b.oInit.colReorder;
      var c = y.defaults.colReorder;
      if (a || c) c = d.extend({}, a, c), !1 !== a && new k(b, c)
    }
  });
  d.fn.dataTable.Api.register("colReorder.reset()", function () {
    return this.iterator("table", function (a) {
      a._colReorder.fnReset()
    })
  });
  d.fn.dataTable.Api.register("colReorder.order()", function (a, b) {
    return a ? this.iterator("table", function (c) {
      c._colReorder.fnOrder(a,
        b)
    }) : this.context.length ? this.context[0]._colReorder.fnOrder() : null
  });
  d.fn.dataTable.Api.register("colReorder.transpose()", function (a, b) {
    return this.context.length && this.context[0]._colReorder ? this.context[0]._colReorder.fnTranspose(a, b) : a
  });
  d.fn.dataTable.Api.register("colReorder.move()", function (a, b, c, d) {
    this.context.length && (this.context[0]._colReorder.s.dt.oInstance.fnColReorder(a, b, c, d), this.context[0]._colReorder._fnSetColumnIndexes());
    return this
  });
  d.fn.dataTable.Api.register("colReorder.enable()",
    function (a) {
      return this.iterator("table", function (b) {
        b._colReorder && b._colReorder.fnEnable(a)
      })
    });
  d.fn.dataTable.Api.register("colReorder.disable()", function () {
    return this.iterator("table", function (a) {
      a._colReorder && a._colReorder.fnDisable()
    })
  });
  return k
});


/*!
 Bootstrap 4 styling wrapper for ColReorder
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-colreorder"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.ColReorder || require("datatables.net-colreorder")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, d) {
  return c.fn.dataTable
});


/*!
   Copyright 2010-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 FixedColumns 3.3.1
 ©2010-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (c, e, g) {
  c instanceof String && (c = String(c));
  for (var q = c.length, k = 0; k < q; k++) {
    var u = c[k];
    if (e.call(g, u, k, c)) return {
      i: k,
      v: u
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, e, g) {
  c != Array.prototype && c != Object.prototype && (c[e] = g.value)
};
$jscomp.getGlobal = function (c) {
  c = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, c];
  for (var e = 0; e < c.length; ++e) {
    var g = c[e];
    if (g && g.Math == Math) return g
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (c, e, g, q) {
  if (e) {
    g = $jscomp.global;
    c = c.split(".");
    for (q = 0; q < c.length - 1; q++) {
      var k = c[q];
      k in g || (g[k] = {});
      g = g[k]
    }
    c = c[c.length - 1];
    q = g[c];
    e = e(q);
    e != q && null != e && $jscomp.defineProperty(g, c, {
      configurable: !0,
      writable: !0,
      value: e
    })
  }
};
$jscomp.polyfill("Array.prototype.find", function (c) {
  return c ? c : function (c, g) {
    return $jscomp.findInternal(this, c, g).v
  }
}, "es6", "es3");
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (e) {
    return c(e, window, document)
  }) : "object" === typeof exports ? module.exports = function (e, g) {
    e || (e = window);
    g && g.fn.dataTable || (g = require("datatables.net")(e, g).$);
    return c(g, e, e.document)
  } : c(jQuery, window, document)
})(function (c, e, g, q) {
  var k = c.fn.dataTable,
    u, p = function (a, b) {
      var d = this;
      if (this instanceof p) {
        if (b === q || !0 === b) b = {};
        var h = c.fn.dataTable.camelToHungarian;
        h && (h(p.defaults, p.defaults, !0), h(p.defaults,
          b));
        a = (new c.fn.dataTable.Api(a)).settings()[0];
        this.s = {
          dt: a,
          iTableColumns: a.aoColumns.length,
          aiOuterWidths: [],
          aiInnerWidths: [],
          rtl: "rtl" === c(a.nTable).css("direction")
        };
        this.dom = {
          scroller: null,
          header: null,
          body: null,
          footer: null,
          grid: {
            wrapper: null,
            dt: null,
            left: {
              wrapper: null,
              head: null,
              body: null,
              foot: null
            },
            right: {
              wrapper: null,
              head: null,
              body: null,
              foot: null
            }
          },
          clone: {
            left: {
              header: null,
              body: null,
              footer: null
            },
            right: {
              header: null,
              body: null,
              footer: null
            }
          }
        };
        if (a._oFixedColumns) throw "FixedColumns already initialised on this table";
        a._oFixedColumns = this;
        a._bInitComplete ? this._fnConstruct(b) : a.oApi._fnCallbackReg(a, "aoInitComplete", function () {
          d._fnConstruct(b)
        }, "FixedColumns")
      } else alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.")
    };
  c.extend(p.prototype, {
    fnUpdate: function () {
      this._fnDraw(!0)
    },
    fnRedrawLayout: function () {
      this._fnColCalc();
      this._fnGridLayout();
      this.fnUpdate()
    },
    fnRecalculateHeight: function (a) {
      delete a._DTTC_iHeight;
      a.style.height = "auto"
    },
    fnSetRowHeight: function (a, b) {
      a.style.height =
        b + "px"
    },
    fnGetPosition: function (a) {
      var b = this.s.dt.oInstance;
      if (c(a).parents(".DTFC_Cloned").length) {
        if ("tr" === a.nodeName.toLowerCase()) return a = c(a).index(), b.fnGetPosition(c("tr", this.s.dt.nTBody)[a]);
        var d = c(a).index();
        a = c(a.parentNode).index();
        return [b.fnGetPosition(c("tr", this.s.dt.nTBody)[a]), d, b.oApi._fnVisibleToColumnIndex(this.s.dt, d)]
      }
      return b.fnGetPosition(a)
    },
    fnToFixedNode: function (a, b) {
      var d;
      b < this.s.iLeftColumns ? d = c(this.dom.clone.left.body).find("[data-dt-row=" + a + "][data-dt-column=" +
        b + "]") : b >= this.s.iRightColumns && (d = c(this.dom.clone.right.body).find("[data-dt-row=" + a + "][data-dt-column=" + b + "]"));
      return d && d.length ? d[0] : (new c.fn.dataTable.Api(this.s.dt)).cell(a, b).node()
    },
    _fnConstruct: function (a) {
      var b = this;
      if ("function" != typeof this.s.dt.oInstance.fnVersionCheck || !0 !== this.s.dt.oInstance.fnVersionCheck("1.8.0")) alert("FixedColumns " + p.VERSION + " required DataTables 1.8.0 or later. Please upgrade your DataTables installation");
      else if ("" === this.s.dt.oScroll.sX) this.s.dt.oInstance.oApi._fnLog(this.s.dt,
        1, "FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled");
      else {
        this.s = c.extend(!0, this.s, p.defaults, a);
        a = this.s.dt.oClasses;
        this.dom.grid.dt = c(this.s.dt.nTable).parents("div." + a.sScrollWrapper)[0];
        this.dom.scroller = c("div." + a.sScrollBody, this.dom.grid.dt)[0];
        this._fnColCalc();
        this._fnGridSetup();
        var d, h = !1;
        c(this.s.dt.nTableWrapper).on("mousedown.DTFC", function (a) {
          0 === a.button && (h = !0, c(g).one("mouseup",
            function () {
              h = !1
            }))
        });
        c(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC", function () {
          h || (d = "main")
        }).on("scroll.DTFC", function (a) {
          !d && a.originalEvent && (d = "main");
          if ("main" === d || "key" === d) 0 < b.s.iLeftColumns && (b.dom.grid.left.liner.scrollTop = b.dom.scroller.scrollTop), 0 < b.s.iRightColumns && (b.dom.grid.right.liner.scrollTop = b.dom.scroller.scrollTop)
        });
        var f = "onwheel" in g.createElement("div") ? "wheel.DTFC" : "mousewheel.DTFC";
        if (0 < b.s.iLeftColumns) c(b.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC",
          function () {
            h || "key" === d || (d = "left")
          }).on("scroll.DTFC", function (a) {
          !d && a.originalEvent && (d = "left");
          "left" === d && (b.dom.scroller.scrollTop = b.dom.grid.left.liner.scrollTop, 0 < b.s.iRightColumns && (b.dom.grid.right.liner.scrollTop = b.dom.grid.left.liner.scrollTop))
        }).on(f, function (a) {
          d = "left";
          b.dom.scroller.scrollLeft -= "wheel" === a.type ? -a.originalEvent.deltaX : a.originalEvent.wheelDeltaX
        });
        if (0 < b.s.iRightColumns) c(b.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC", function () {
          h || "key" === d || (d = "right")
        }).on("scroll.DTFC",
          function (a) {
            !d && a.originalEvent && (d = "right");
            "right" === d && (b.dom.scroller.scrollTop = b.dom.grid.right.liner.scrollTop, 0 < b.s.iLeftColumns && (b.dom.grid.left.liner.scrollTop = b.dom.grid.right.liner.scrollTop))
          }).on(f, function (a) {
          d = "left";
          b.dom.scroller.scrollLeft -= "wheel" === a.type ? -a.originalEvent.deltaX : a.originalEvent.wheelDeltaX
        });
        c(e).on("resize.DTFC", function () {
          b._fnGridLayout.call(b)
        });
        var m = !0,
          l = c(this.s.dt.nTable);
        l.on("draw.dt.DTFC", function () {
          b._fnColCalc();
          b._fnDraw.call(b, m);
          m = !1
        }).on("key-focus.dt.DTFC",
          function () {
            d = "key"
          }).on("column-sizing.dt.DTFC", function () {
          b._fnColCalc();
          b._fnGridLayout(b)
        }).on("column-visibility.dt.DTFC", function (a, c, d, f, h) {
          if (h === q || h) b._fnColCalc(), b._fnGridLayout(b), b._fnDraw(!0)
        }).on("select.dt.DTFC deselect.dt.DTFC", function (a, c, d, f) {
          "dt" === a.namespace && b._fnDraw(!1)
        }).on("position.dts.dt.DTFC", function (a, d) {
          b.dom.grid.left.body && c(b.dom.grid.left.body).find("table").eq(0).css("top", d);
          b.dom.grid.right.body && c(b.dom.grid.right.body).find("table").eq(0).css("top", d)
        }).on("destroy.dt.DTFC",
          function () {
            l.off(".DTFC");
            c(b.dom.scroller).off(".DTFC");
            c(e).off(".DTFC");
            c(b.s.dt.nTableWrapper).off(".DTFC");
            c(b.dom.grid.left.liner).off(".DTFC " + f);
            c(b.dom.grid.left.wrapper).remove();
            c(b.dom.grid.right.liner).off(".DTFC " + f);
            c(b.dom.grid.right.wrapper).remove()
          });
        this._fnGridLayout();
        this.s.dt.oInstance.fnDraw(!1)
      }
    },
    _fnColCalc: function () {
      var a = this,
        b = 0,
        d = 0;
      this.s.aiInnerWidths = [];
      this.s.aiOuterWidths = [];
      c.each(this.s.dt.aoColumns, function (h, f) {
        f = c(f.nTh);
        if (f.filter(":visible").length) {
          var m =
            f.outerWidth();
          if (0 === a.s.aiOuterWidths.length) {
            var l = c(a.s.dt.nTable).css("border-left-width");
            m += "string" === typeof l && -1 === l.indexOf("px") ? 1 : parseInt(l, 10)
          }
          a.s.aiOuterWidths.length === a.s.dt.aoColumns.length - 1 && (l = c(a.s.dt.nTable).css("border-right-width"), m += "string" === typeof l && -1 === l.indexOf("px") ? 1 : parseInt(l, 10));
          a.s.aiOuterWidths.push(m);
          a.s.aiInnerWidths.push(f.width());
          h < a.s.iLeftColumns && (b += m);
          a.s.iTableColumns - a.s.iRightColumns <= h && (d += m)
        } else a.s.aiInnerWidths.push(0), a.s.aiOuterWidths.push(0)
      });
      this.s.iLeftWidth = b;
      this.s.iRightWidth = d
    },
    _fnGridSetup: function () {
      var a = this._fnDTOverflow();
      this.dom.body = this.s.dt.nTable;
      this.dom.header = this.s.dt.nTHead.parentNode;
      this.dom.header.parentNode.parentNode.style.position = "relative";
      var b = c('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;" aria-hidden="true"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; height:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; right:0;" aria-hidden="true"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; height:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],
        d = b.childNodes[0],
        h = b.childNodes[1];
      this.dom.grid.dt.parentNode.insertBefore(b, this.dom.grid.dt);
      b.appendChild(this.dom.grid.dt);
      this.dom.grid.wrapper = b;
      0 < this.s.iLeftColumns && (this.dom.grid.left.wrapper = d, this.dom.grid.left.head = d.childNodes[0], this.dom.grid.left.body = d.childNodes[1], this.dom.grid.left.liner = c("div.DTFC_LeftBodyLiner", b)[0], b.appendChild(d));
      if (0 < this.s.iRightColumns) {
        this.dom.grid.right.wrapper = h;
        this.dom.grid.right.head = h.childNodes[0];
        this.dom.grid.right.body = h.childNodes[1];
        this.dom.grid.right.liner = c("div.DTFC_RightBodyLiner", b)[0];
        h.style.right = a.bar + "px";
        var f = c("div.DTFC_RightHeadBlocker", b)[0];
        f.style.width = a.bar + "px";
        f.style.right = -a.bar + "px";
        this.dom.grid.right.headBlock = f;
        f = c("div.DTFC_RightFootBlocker", b)[0];
        f.style.width = a.bar + "px";
        f.style.right = -a.bar + "px";
        this.dom.grid.right.footBlock = f;
        b.appendChild(h)
      }
      this.s.dt.nTFoot && (this.dom.footer = this.s.dt.nTFoot.parentNode, 0 < this.s.iLeftColumns && (this.dom.grid.left.foot = d.childNodes[2]), 0 < this.s.iRightColumns && (this.dom.grid.right.foot =
        h.childNodes[2]));
      this.s.rtl && c("div.DTFC_RightHeadBlocker", b).css({
        left: -a.bar + "px",
        right: ""
      })
    },
    _fnGridLayout: function () {
      var a = this,
        b = this.dom.grid;
      c(b.wrapper).width();
      var d = this.s.dt.nTable.parentNode.offsetHeight,
        h = this.s.dt.nTable.parentNode.parentNode.offsetHeight,
        f = this._fnDTOverflow(),
        m = this.s.iLeftWidth,
        l = this.s.iRightWidth,
        g = "rtl" === c(this.dom.body).css("direction"),
        e = function (b, d) {
          f.bar ? a._firefoxScrollError() ? 34 < c(b).height() && (b.style.width = d + f.bar + "px") : b.style.width = d + f.bar + "px" : (b.style.width =
            d + 20 + "px", b.style.paddingRight = "20px", b.style.boxSizing = "border-box")
        };
      f.x && (d -= f.bar);
      b.wrapper.style.height = h + "px";
      0 < this.s.iLeftColumns && (h = b.left.wrapper, h.style.width = m + "px", h.style.height = "1px", g ? (h.style.left = "", h.style.right = 0) : (h.style.left = 0, h.style.right = ""), b.left.body.style.height = d + "px", b.left.foot && (b.left.foot.style.top = (f.x ? f.bar : 0) + "px"), e(b.left.liner, m), b.left.liner.style.height = d + "px", b.left.liner.style.maxHeight = d + "px");
      0 < this.s.iRightColumns && (h = b.right.wrapper, h.style.width =
        l + "px", h.style.height = "1px", this.s.rtl ? (h.style.left = f.y ? f.bar + "px" : 0, h.style.right = "") : (h.style.left = "", h.style.right = f.y ? f.bar + "px" : 0), b.right.body.style.height = d + "px", b.right.foot && (b.right.foot.style.top = (f.x ? f.bar : 0) + "px"), e(b.right.liner, l), b.right.liner.style.height = d + "px", b.right.liner.style.maxHeight = d + "px", b.right.headBlock.style.display = f.y ? "block" : "none", b.right.footBlock.style.display = f.y ? "block" : "none")
    },
    _fnDTOverflow: function () {
      var a = this.s.dt.nTable,
        b = a.parentNode,
        c = {
          x: !1,
          y: !1,
          bar: this.s.dt.oScroll.iBarWidth
        };
      a.offsetWidth > b.clientWidth && (c.x = !0);
      a.offsetHeight > b.clientHeight && (c.y = !0);
      return c
    },
    _fnDraw: function (a) {
      this._fnGridLayout();
      this._fnCloneLeft(a);
      this._fnCloneRight(a);
      null !== this.s.fnDrawCallback && this.s.fnDrawCallback.call(this, this.dom.clone.left, this.dom.clone.right);
      c(this).trigger("draw.dtfc", {
        leftClone: this.dom.clone.left,
        rightClone: this.dom.clone.right
      })
    },
    _fnCloneRight: function (a) {
      if (!(0 >= this.s.iRightColumns)) {
        var b, c = [];
        for (b = this.s.iTableColumns - this.s.iRightColumns; b < this.s.iTableColumns; b++) this.s.dt.aoColumns[b].bVisible &&
          c.push(b);
        this._fnClone(this.dom.clone.right, this.dom.grid.right, c, a)
      }
    },
    _fnCloneLeft: function (a) {
      if (!(0 >= this.s.iLeftColumns)) {
        var b, c = [];
        for (b = 0; b < this.s.iLeftColumns; b++) this.s.dt.aoColumns[b].bVisible && c.push(b);
        this._fnClone(this.dom.clone.left, this.dom.grid.left, c, a)
      }
    },
    _fnCopyLayout: function (a, b, d) {
      for (var h = [], f = [], m = [], l = 0, g = a.length; l < g; l++) {
        var e = [];
        e.nTr = c(a[l].nTr).clone(d, !1)[0];
        for (var w = 0, n = this.s.iTableColumns; w < n; w++)
          if (-1 !== c.inArray(w, b)) {
            var k = c.inArray(a[l][w].cell, m); - 1 === k ? (k =
              c(a[l][w].cell).clone(d, !1)[0], f.push(k), m.push(a[l][w].cell), e.push({
                cell: k,
                unique: a[l][w].unique
              })) : e.push({
              cell: f[k],
              unique: a[l][w].unique
            })
          } h.push(e)
      }
      return h
    },
    _fnClone: function (a, b, d, h) {
      var f = this,
        m, l, e = this.s.dt;
      if (h) {
        c(a.header).remove();
        a.header = c(this.dom.header).clone(!0, !1)[0];
        a.header.className += " DTFC_Cloned";
        a.header.style.width = "100%";
        b.head.appendChild(a.header);
        var g = this._fnCopyLayout(e.aoHeader, d, !0);
        var k = c(">thead", a.header);
        k.empty();
        var n = 0;
        for (m = g.length; n < m; n++) k[0].appendChild(g[n].nTr);
        e.oApi._fnDrawHead(e, g, !0)
      } else {
        g = this._fnCopyLayout(e.aoHeader, d, !1);
        var p = [];
        e.oApi._fnDetectHeader(p, c(">thead", a.header)[0]);
        n = 0;
        for (m = g.length; n < m; n++) {
          var t = 0;
          for (k = g[n].length; t < k; t++) p[n][t].cell.className = g[n][t].cell.className, c("span.DataTables_sort_icon", p[n][t].cell).each(function () {
            this.className = c("span.DataTables_sort_icon", g[n][t].cell)[0].className
          })
        }
      }
      this._fnEqualiseHeights("thead", this.dom.header, a.header);
      "auto" == this.s.sHeightMatch && c(">tbody>tr", f.dom.body).css("height", "auto");
      null !== a.body && (c(a.body).remove(), a.body = null);
      a.body = c(this.dom.body).clone(!0)[0];
      a.body.className += " DTFC_Cloned";
      a.body.style.paddingBottom = e.oScroll.iBarWidth + "px";
      a.body.style.marginBottom = 2 * e.oScroll.iBarWidth + "px";
      null !== a.body.getAttribute("id") && a.body.removeAttribute("id");
      c(">thead>tr", a.body).empty();
      c(">tfoot", a.body).remove();
      var u = c("tbody", a.body)[0];
      c(u).empty();
      if (0 < e.aiDisplay.length) {
        m = c(">thead>tr", a.body)[0];
        for (l = 0; l < d.length; l++) {
          var v = d[l];
          var r = c(e.aoColumns[v].nTh).clone(!0)[0];
          r.innerHTML = "";
          k = r.style;
          k.paddingTop = "0";
          k.paddingBottom = "0";
          k.borderTopWidth = "0";
          k.borderBottomWidth = "0";
          k.height = 0;
          k.width = f.s.aiInnerWidths[v] + "px";
          m.appendChild(r)
        }
        c(">tbody>tr", f.dom.body).each(function (a) {
          a = !1 === f.s.dt.oFeatures.bServerSide ? f.s.dt.aiDisplay[f.s.dt._iDisplayStart + a] : a;
          var b = f.s.dt.aoData[a].anCells || c(this).children("td, th"),
            e = this.cloneNode(!1);
          e.removeAttribute("id");
          e.setAttribute("data-dt-row", a);
          for (l = 0; l < d.length; l++) v = d[l], 0 < b.length && (r = c(b[v]).clone(!0, !0)[0], r.removeAttribute("id"),
            r.setAttribute("data-dt-row", a), r.setAttribute("data-dt-column", v), e.appendChild(r));
          u.appendChild(e)
        })
      } else c(">tbody>tr", f.dom.body).each(function (a) {
        r = this.cloneNode(!0);
        r.className += " DTFC_NoData";
        c("td", r).html("");
        u.appendChild(r)
      });
      a.body.style.width = "100%";
      a.body.style.margin = "0";
      a.body.style.padding = "0";
      e.oScroller !== q && (m = e.oScroller.dom.force, b.forcer ? b.forcer.style.height = m.style.height : (b.forcer = m.cloneNode(!0), b.liner.appendChild(b.forcer)));
      b.liner.appendChild(a.body);
      this._fnEqualiseHeights("tbody",
        f.dom.body, a.body);
      if (null !== e.nTFoot) {
        if (h) {
          null !== a.footer && a.footer.parentNode.removeChild(a.footer);
          a.footer = c(this.dom.footer).clone(!0, !0)[0];
          a.footer.className += " DTFC_Cloned";
          a.footer.style.width = "100%";
          b.foot.appendChild(a.footer);
          g = this._fnCopyLayout(e.aoFooter, d, !0);
          b = c(">tfoot", a.footer);
          b.empty();
          n = 0;
          for (m = g.length; n < m; n++) b[0].appendChild(g[n].nTr);
          e.oApi._fnDrawHead(e, g, !0)
        } else
          for (g = this._fnCopyLayout(e.aoFooter, d, !1), b = [], e.oApi._fnDetectHeader(b, c(">tfoot", a.footer)[0]), n = 0, m = g.length; n <
            m; n++)
            for (t = 0, k = g[n].length; t < k; t++) b[n][t].cell.className = g[n][t].cell.className;
        this._fnEqualiseHeights("tfoot", this.dom.footer, a.footer)
      }
      b = e.oApi._fnGetUniqueThs(e, c(">thead", a.header)[0]);
      c(b).each(function (a) {
        v = d[a];
        this.style.width = f.s.aiInnerWidths[v] + "px"
      });
      null !== f.s.dt.nTFoot && (b = e.oApi._fnGetUniqueThs(e, c(">tfoot", a.footer)[0]), c(b).each(function (a) {
        v = d[a];
        this.style.width = f.s.aiInnerWidths[v] + "px"
      }))
    },
    _fnGetTrNodes: function (a) {
      for (var b = [], c = 0, e = a.childNodes.length; c < e; c++) "TR" == a.childNodes[c].nodeName.toUpperCase() &&
        b.push(a.childNodes[c]);
      return b
    },
    _fnEqualiseHeights: function (a, b, d) {
      if ("none" != this.s.sHeightMatch || "thead" === a || "tfoot" === a) {
        var e = b.getElementsByTagName(a)[0];
        d = d.getElementsByTagName(a)[0];
        a = c(">" + a + ">tr:eq(0)", b).children(":first");
        a.outerHeight();
        a.height();
        e = this._fnGetTrNodes(e);
        b = this._fnGetTrNodes(d);
        var f = [];
        d = 0;
        for (a = b.length; d < a; d++) {
          var g = e[d].offsetHeight;
          var k = b[d].offsetHeight;
          g = k > g ? k : g;
          "semiauto" == this.s.sHeightMatch && (e[d]._DTTC_iHeight = g);
          f.push(g)
        }
        d = 0;
        for (a = b.length; d < a; d++) b[d].style.height =
          f[d] + "px", e[d].style.height = f[d] + "px"
      }
    },
    _firefoxScrollError: function () {
      if (u === q) {
        var a = c("<div/>").css({
          position: "absolute",
          top: 0,
          left: 0,
          height: 10,
          width: 50,
          overflow: "scroll"
        }).appendTo("body");
        u = a[0].clientWidth === a[0].offsetWidth && 0 !== this._fnDTOverflow().bar;
        a.remove()
      }
      return u
    }
  });
  p.defaults = {
    iLeftColumns: 1,
    iRightColumns: 0,
    fnDrawCallback: null,
    sHeightMatch: "semiauto"
  };
  p.version = "3.3.1";
  k.Api.register("fixedColumns()", function () {
    return this
  });
  k.Api.register("fixedColumns().update()", function () {
    return this.iterator("table",
      function (a) {
        a._oFixedColumns && a._oFixedColumns.fnUpdate()
      })
  });
  k.Api.register("fixedColumns().relayout()", function () {
    return this.iterator("table", function (a) {
      a._oFixedColumns && a._oFixedColumns.fnRedrawLayout()
    })
  });
  k.Api.register("rows().recalcHeight()", function () {
    return this.iterator("row", function (a, b) {
      a._oFixedColumns && a._oFixedColumns.fnRecalculateHeight(this.row(b).node())
    })
  });
  k.Api.register("fixedColumns().rowIndex()", function (a) {
    a = c(a);
    return a.parents(".DTFC_Cloned").length ? this.rows({
        page: "current"
      }).indexes()[a.index()] :
      this.row(a).index()
  });
  k.Api.register("fixedColumns().cellIndex()", function (a) {
    a = c(a);
    if (a.parents(".DTFC_Cloned").length) {
      var b = a.parent().index();
      b = this.rows({
        page: "current"
      }).indexes()[b];
      a = a.parents(".DTFC_LeftWrapper").length ? a.index() : this.columns().flatten().length - this.context[0]._oFixedColumns.s.iRightColumns + a.index();
      return {
        row: b,
        column: this.column.index("toData", a),
        columnVisible: a
      }
    }
    return this.cell(a).index()
  });
  k.Api.registerPlural("cells().fixedNodes()", "cell().fixedNode()", function () {
    return this.iterator("cell",
      function (a, b, c) {
        return a._oFixedColumns ? a._oFixedColumns.fnToFixedNode(b, c) : this.cell(b, c).node()
      }, 1)
  });
  c(g).on("init.dt.fixedColumns", function (a, b) {
    if ("dt" === a.namespace) {
      a = b.oInit.fixedColumns;
      var d = k.defaults.fixedColumns;
      if (a || d) d = c.extend({}, a, d), !1 !== a && new p(b, d)
    }
  });
  c.fn.dataTable.FixedColumns = p;
  return c.fn.DataTable.FixedColumns = p
});


/*!
 Bootstrap 4 styling wrapper for FixedColumns
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-fixedcolumns"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.FixedColumns || require("datatables.net-fixedcolumns")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, d) {
  return c.fn.dataTable
});


/*!
   Copyright 2009-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 FixedHeader 3.1.7
 ©2009-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (c, d, f) {
  c instanceof String && (c = String(c));
  for (var h = c.length, g = 0; g < h; g++) {
    var m = c[g];
    if (d.call(f, m, g, c)) return {
      i: g,
      v: m
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, d, f) {
  c != Array.prototype && c != Object.prototype && (c[d] = f.value)
};
$jscomp.getGlobal = function (c) {
  c = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, c];
  for (var d = 0; d < c.length; ++d) {
    var f = c[d];
    if (f && f.Math == Math) return f
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (c, d, f, h) {
  if (d) {
    f = $jscomp.global;
    c = c.split(".");
    for (h = 0; h < c.length - 1; h++) {
      var g = c[h];
      g in f || (f[g] = {});
      f = f[g]
    }
    c = c[c.length - 1];
    h = f[c];
    d = d(h);
    d != h && null != d && $jscomp.defineProperty(f, c, {
      configurable: !0,
      writable: !0,
      value: d
    })
  }
};
$jscomp.polyfill("Array.prototype.find", function (c) {
  return c ? c : function (c, f) {
    return $jscomp.findInternal(this, c, f).v
  }
}, "es6", "es3");
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (d) {
    return c(d, window, document)
  }) : "object" === typeof exports ? module.exports = function (d, f) {
    d || (d = window);
    f && f.fn.dataTable || (f = require("datatables.net")(d, f).$);
    return c(f, d, d.document)
  } : c(jQuery, window, document)
})(function (c, d, f, h) {
  var g = c.fn.dataTable,
    m = 0,
    l = function (a, b) {
      if (!(this instanceof l)) throw "FixedHeader must be initialised with the 'new' keyword.";
      !0 === b && (b = {});
      a = new g.Api(a);
      this.c = c.extend(!0, {}, l.defaults, b);
      this.s = {
        dt: a,
        position: {
          theadTop: 0,
          tbodyTop: 0,
          tfootTop: 0,
          tfootBottom: 0,
          width: 0,
          left: 0,
          tfootHeight: 0,
          theadHeight: 0,
          windowHeight: c(d).height(),
          visible: !0
        },
        headerMode: null,
        footerMode: null,
        autoWidth: a.settings()[0].oFeatures.bAutoWidth,
        namespace: ".dtfc" + m++,
        scrollLeft: {
          header: -1,
          footer: -1
        },
        enable: !0
      };
      this.dom = {
        floatingHeader: null,
        thead: c(a.table().header()),
        tbody: c(a.table().body()),
        tfoot: c(a.table().footer()),
        header: {
          host: null,
          floating: null,
          placeholder: null
        },
        footer: {
          host: null,
          floating: null,
          placeholder: null
        }
      };
      this.dom.header.host = this.dom.thead.parent();
      this.dom.footer.host = this.dom.tfoot.parent();
      a = a.settings()[0];
      if (a._fixedHeader) throw "FixedHeader already initialised on table " + a.nTable.id;
      a._fixedHeader = this;
      this._constructor()
    };
  c.extend(l.prototype, {
    destroy: function () {
      this.s.dt.off(".dtfc");
      c(d).off(this.s.namespace);
      this.c.header && this._modeChange("in-place", "header", !0);
      this.c.footer && this.dom.tfoot.length && this._modeChange("in-place", "footer", !0)
    },
    enable: function (a, b) {
      this.s.enable =
        a;
      if (b || b === h) this._positions(), this._scroll(!0)
    },
    enabled: function () {
      return this.s.enable
    },
    headerOffset: function (a) {
      a !== h && (this.c.headerOffset = a, this.update());
      return this.c.headerOffset
    },
    footerOffset: function (a) {
      a !== h && (this.c.footerOffset = a, this.update());
      return this.c.footerOffset
    },
    update: function () {
      var a = this.s.dt.table().node();
      c(a).is(":visible") ? this.enable(!0, !1) : this.enable(!1, !1);
      this._positions();
      this._scroll(!0)
    },
    _constructor: function () {
      var a = this,
        b = this.s.dt;
      c(d).on("scroll" + this.s.namespace,
        function () {
          a._scroll()
        }).on("resize" + this.s.namespace, g.util.throttle(function () {
        a.s.position.windowHeight = c(d).height();
        a.update()
      }, 50));
      var k = c(".fh-fixedHeader");
      !this.c.headerOffset && k.length && (this.c.headerOffset = k.outerHeight());
      k = c(".fh-fixedFooter");
      !this.c.footerOffset && k.length && (this.c.footerOffset = k.outerHeight());
      b.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc responsive-display.dt.dtfc", function () {
        a.update()
      });
      b.on("destroy.dtfc", function () {
        a.destroy()
      });
      this._positions();
      this._scroll()
    },
    _clone: function (a, b) {
      var k = this.s.dt,
        e = this.dom[a],
        f = "header" === a ? this.dom.thead : this.dom.tfoot;
      !b && e.floating ? e.floating.removeClass("fixedHeader-floating fixedHeader-locked") : (e.floating && (e.placeholder.remove(), this._unsize(a), e.floating.children().detach(), e.floating.remove()), e.floating = c(k.table().node().cloneNode(!1)).css("table-layout", "fixed").attr("aria-hidden", "true").removeAttr("id").append(f).appendTo("body"), e.placeholder = f.clone(!1), e.placeholder.find("*[id]").removeAttr("id"),
        e.host.prepend(e.placeholder), this._matchWidths(e.placeholder, e.floating))
    },
    _matchWidths: function (a, b) {
      var k = function (b) {
          return c(b, a).map(function () {
            return c(this).width()
          }).toArray()
        },
        e = function (a, e) {
          c(a, b).each(function (a) {
            c(this).css({
              width: e[a],
              minWidth: e[a]
            })
          })
        },
        f = k("th");
      k = k("td");
      e("th", f);
      e("td", k)
    },
    _unsize: function (a) {
      var b = this.dom[a].floating;
      b && ("footer" === a || "header" === a && !this.s.autoWidth) ? c("th, td", b).css({
        width: "",
        minWidth: ""
      }) : b && "header" === a && c("th, td", b).css("min-width", "")
    },
    _horizontal: function (a, b) {
      var c = this.dom[a],
        e = this.s.position,
        f = this.s.scrollLeft;
      c.floating && f[a] !== b && (c.floating.css("left", e.left - b), f[a] = b)
    },
    _modeChange: function (a, b, k) {
      var e = this.dom[b],
        d = this.s.position,
        g = function (a) {
          e.floating.attr("style", function (b, c) {
            return (c || "") + "width: " + a + "px !important;"
          })
        },
        h = this.dom["footer" === b ? "tfoot" : "thead"],
        l = c.contains(h[0], f.activeElement) ? f.activeElement : null;
      l && l.blur();
      "in-place" === a ? (e.placeholder && (e.placeholder.remove(), e.placeholder = null), this._unsize(b),
        "header" === b ? e.host.prepend(h) : e.host.append(h), e.floating && (e.floating.remove(), e.floating = null)) : "in" === a ? (this._clone(b, k), e.floating.addClass("fixedHeader-floating").css("header" === b ? "top" : "bottom", this.c[b + "Offset"]).css("left", d.left + "px"), g(d.width), "footer" === b && e.floating.css("top", "")) : "below" === a ? (this._clone(b, k), e.floating.addClass("fixedHeader-locked").css("top", d.tfootTop - d.theadHeight).css("left", d.left + "px"), g(d.width)) : "above" === a && (this._clone(b, k), e.floating.addClass("fixedHeader-locked").css("top",
        d.tbodyTop).css("left", d.left + "px"), g(d.width));
      l && l !== f.activeElement && setTimeout(function () {
        l.focus()
      }, 10);
      this.s.scrollLeft.header = -1;
      this.s.scrollLeft.footer = -1;
      this.s[b + "Mode"] = a
    },
    _positions: function () {
      var a = this.s.dt.table(),
        b = this.s.position,
        f = this.dom;
      a = c(a.node());
      var e = a.children("thead"),
        d = a.children("tfoot");
      f = f.tbody;
      b.visible = a.is(":visible");
      b.width = a.outerWidth();
      b.left = a.offset().left;
      b.theadTop = e.offset().top;
      b.tbodyTop = f.offset().top;
      b.tbodyHeight = f.outerHeight();
      b.theadHeight =
        b.tbodyTop - b.theadTop;
      d.length ? (b.tfootTop = d.offset().top, b.tfootBottom = b.tfootTop + d.outerHeight(), b.tfootHeight = b.tfootBottom - b.tfootTop) : (b.tfootTop = b.tbodyTop + f.outerHeight(), b.tfootBottom = b.tfootTop, b.tfootHeight = b.tfootTop)
    },
    _scroll: function (a) {
      var b = c(f).scrollTop(),
        d = c(f).scrollLeft(),
        e = this.s.position;
      if (this.c.header) {
        var g = this.s.enable ? !e.visible || b <= e.theadTop - this.c.headerOffset ? "in-place" : b <= e.tfootTop - e.theadHeight - this.c.headerOffset ? "in" : "below" : "in-place";
        (a || g !== this.s.headerMode) &&
        this._modeChange(g, "header", a);
        this._horizontal("header", d)
      }
      this.c.footer && this.dom.tfoot.length && (b = this.s.enable ? !e.visible || b + e.windowHeight >= e.tfootBottom + this.c.footerOffset ? "in-place" : e.windowHeight + b > e.tbodyTop + e.tfootHeight + this.c.footerOffset ? "in" : "above" : "in-place", (a || b !== this.s.footerMode) && this._modeChange(b, "footer", a), this._horizontal("footer", d))
    }
  });
  l.version = "3.1.7";
  l.defaults = {
    header: !0,
    footer: !1,
    headerOffset: 0,
    footerOffset: 0
  };
  c.fn.dataTable.FixedHeader = l;
  c.fn.DataTable.FixedHeader =
    l;
  c(f).on("init.dt.dtfh", function (a, b, d) {
    "dt" === a.namespace && (a = b.oInit.fixedHeader, d = g.defaults.fixedHeader, !a && !d || b._fixedHeader || (d = c.extend({}, d, a), !1 !== a && new l(b, d)))
  });
  g.Api.register("fixedHeader()", function () {});
  g.Api.register("fixedHeader.adjust()", function () {
    return this.iterator("table", function (a) {
      (a = a._fixedHeader) && a.update()
    })
  });
  g.Api.register("fixedHeader.enable()", function (a) {
    return this.iterator("table", function (b) {
      b = b._fixedHeader;
      a = a !== h ? a : !0;
      b && a !== b.enabled() && b.enable(a)
    })
  });
  g.Api.register("fixedHeader.enabled()", function () {
    if (this.context.length) {
      var a = this.content[0]._fixedHeader;
      if (a) return a.enabled()
    }
    return !1
  });
  g.Api.register("fixedHeader.disable()", function () {
    return this.iterator("table", function (a) {
      (a = a._fixedHeader) && a.enabled() && a.enable(!1)
    })
  });
  c.each(["header", "footer"], function (a, b) {
    g.Api.register("fixedHeader." + b + "Offset()", function (a) {
      var c = this.context;
      return a === h ? c.length && c[0]._fixedHeader ? c[0]._fixedHeader[b + "Offset"]() : h : this.iterator("table", function (c) {
        if (c =
          c._fixedHeader) c[b + "Offset"](a)
      })
    })
  });
  return l
});


/*!
 Bootstrap 4 styling wrapper for FixedHeader
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-fixedheader"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.FixedHeader || require("datatables.net-fixedheader")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, d) {
  return c.fn.dataTable
});


/*!
   Copyright 2009-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 KeyTable 2.5.3
 ©2009-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (b) {
  var g = 0;
  return function () {
    return g < b.length ? {
      done: !1,
      value: b[g++]
    } : {
      done: !0
    }
  }
};
$jscomp.arrayIterator = function (b) {
  return {
    next: $jscomp.arrayIteratorImpl(b)
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, g, k) {
  if (b == Array.prototype || b == Object.prototype) return b;
  b[g] = k.value;
  return b
};
$jscomp.getGlobal = function (b) {
  b = ["object" == typeof globalThis && globalThis, b, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var g = 0; g < b.length; ++g) {
    var k = b[g];
    if (k && k.Math == Math) return k
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (b, g) {
  var k = $jscomp.propertyToPolyfillSymbol[g];
  if (null == k) return b[g];
  k = b[k];
  return void 0 !== k ? k : b[g]
};
$jscomp.polyfill = function (b, g, k, n) {
  g && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(b, g, k, n) : $jscomp.polyfillUnisolated(b, g, k, n))
};
$jscomp.polyfillUnisolated = function (b, g, k, n) {
  k = $jscomp.global;
  b = b.split(".");
  for (n = 0; n < b.length - 1; n++) {
    var m = b[n];
    if (!(m in k)) return;
    k = k[m]
  }
  b = b[b.length - 1];
  n = k[b];
  g = g(n);
  g != n && null != g && $jscomp.defineProperty(k, b, {
    configurable: !0,
    writable: !0,
    value: g
  })
};
$jscomp.polyfillIsolated = function (b, g, k, n) {
  var m = b.split(".");
  b = 1 === m.length;
  n = m[0];
  n = !b && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var u = 0; u < m.length - 1; u++) {
    var w = m[u];
    if (!(w in n)) return;
    n = n[w]
  }
  m = m[m.length - 1];
  k = $jscomp.IS_SYMBOL_NATIVE && "es6" === k ? n[m] : null;
  g = g(k);
  null != g && (b ? $jscomp.defineProperty($jscomp.polyfills, m, {
    configurable: !0,
    writable: !0,
    value: g
  }) : g !== k && ($jscomp.propertyToPolyfillSymbol[m] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(m) : $jscomp.POLYFILL_PREFIX + m, m =
    $jscomp.propertyToPolyfillSymbol[m], $jscomp.defineProperty(n, m, {
      configurable: !0,
      writable: !0,
      value: g
    })))
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill("Symbol", function (b) {
  if (b) return b;
  var g = function (m, u) {
    this.$jscomp$symbol$id_ = m;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: u
    })
  };
  g.prototype.toString = function () {
    return this.$jscomp$symbol$id_
  };
  var k = 0,
    n = function (m) {
      if (this instanceof n) throw new TypeError("Symbol is not a constructor");
      return new g("jscomp_symbol_" + (m || "") + "_" + k++, m)
    };
  return n
}, "es6", "es3");
$jscomp.initSymbolIterator = function () {};
$jscomp.polyfill("Symbol.iterator", function (b) {
    if (b) return b;
    b = Symbol("Symbol.iterator");
    for (var g = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), k = 0; k < g.length; k++) {
      var n = $jscomp.global[g[k]];
      "function" === typeof n && "function" != typeof n.prototype[b] && $jscomp.defineProperty(n.prototype, b, {
        configurable: !0,
        writable: !0,
        value: function () {
          return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
      })
    }
    return b
  }, "es6",
  "es3");
$jscomp.initSymbolAsyncIterator = function () {};
$jscomp.iteratorPrototype = function (b) {
  b = {
    next: b
  };
  b[Symbol.iterator] = function () {
    return this
  };
  return b
};
$jscomp.iteratorFromArray = function (b, g) {
  b instanceof String && (b += "");
  var k = 0,
    n = {
      next: function () {
        if (k < b.length) {
          var m = k++;
          return {
            value: g(m, b[m]),
            done: !1
          }
        }
        n.next = function () {
          return {
            done: !0,
            value: void 0
          }
        };
        return n.next()
      }
    };
  n[Symbol.iterator] = function () {
    return n
  };
  return n
};
$jscomp.polyfill("Array.prototype.keys", function (b) {
  return b ? b : function () {
    return $jscomp.iteratorFromArray(this, function (g) {
      return g
    })
  }
}, "es6", "es3");
(function (b) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (g) {
    return b(g, window, document)
  }) : "object" === typeof exports ? module.exports = function (g, k) {
    g || (g = window);
    k && k.fn.dataTable || (k = require("datatables.net")(g, k).$);
    return b(k, g, g.document)
  } : b(jQuery, window, document)
})(function (b, g, k, n) {
  var m = b.fn.dataTable,
    u = 0,
    w = 0,
    t = function (a, c) {
      if (!m.versionCheck || !m.versionCheck("1.10.8")) throw "KeyTable requires DataTables 1.10.8 or newer";
      this.c = b.extend(!0, {}, m.defaults.keyTable,
        t.defaults, c);
      this.s = {
        dt: new m.Api(a),
        enable: !0,
        focusDraw: !1,
        waitingForDraw: !1,
        lastFocus: null,
        namespace: ".keyTable-" + u++,
        tabInput: null
      };
      this.dom = {};
      a = this.s.dt.settings()[0];
      if (c = a.keytable) return c;
      a.keytable = this;
      this._constructor()
    };
  b.extend(t.prototype, {
    blur: function () {
      this._blur()
    },
    enable: function (a) {
      this.s.enable = a
    },
    focus: function (a, c) {
      this._focus(this.s.dt.cell(a, c))
    },
    focused: function (a) {
      if (!this.s.lastFocus) return !1;
      var c = this.s.lastFocus.cell.index();
      return a.row === c.row && a.column === c.column
    },
    _constructor: function () {
      this._tabInput();
      var a = this,
        c = this.s.dt,
        e = b(c.table().node()),
        d = this.s.namespace,
        h = !1;
      "static" === e.css("position") && e.css("position", "relative");
      b(c.table().body()).on("click" + d, "th, td", function (f) {
        if (!1 !== a.s.enable) {
          var q = c.cell(this);
          q.any() && a._focus(q, null, !1, f)
        }
      });
      b(k).on("keydown" + d, function (f) {
        h || a._key(f)
      });
      if (this.c.blurable) b(k).on("mousedown" + d, function (f) {
        b(f.target).parents(".dataTables_filter").length && a._blur();
        b(f.target).parents().filter(c.table().container()).length ||
          b(f.target).parents("div.DTE").length || b(f.target).parents("div.editor-datetime").length || b(f.target).parents().filter(".DTFC_Cloned").length || a._blur()
      });
      if (this.c.editor) {
        var p = this.c.editor;
        p.on("open.keyTableMain", function (f, q, r) {
          "inline" !== q && a.s.enable && (a.enable(!1), p.one("close" + d, function () {
            a.enable(!0)
          }))
        });
        if (this.c.editOnFocus) c.on("key-focus" + d + " key-refocus" + d, function (f, q, r, v) {
          a._editor(null, v, !0)
        });
        c.on("key" + d, function (f, q, r, v, x) {
          a._editor(r, x, !1)
        });
        b(c.table().body()).on("dblclick" +
          d, "th, td",
          function (f) {
            !1 !== a.s.enable && c.cell(this).any() && (a.s.lastFocus && this !== a.s.lastFocus.cell.node() || a._editor(null, f, !0))
          });
        p.on("preSubmit", function () {
          h = !0
        }).on("preSubmitCancelled", function () {
          h = !1
        }).on("submitComplete", function () {
          h = !1
        })
      }
      if (c.settings()[0].oFeatures.bStateSave) c.on("stateSaveParams" + d, function (f, q, r) {
        r.keyTable = a.s.lastFocus ? a.s.lastFocus.cell.index() : null
      });
      c.on("column-visibility" + d, function (f) {
        a._tabInput()
      });
      c.on("draw" + d, function (f) {
        a._tabInput();
        if (!a.s.focusDraw &&
          a.s.lastFocus) {
          var q = a.s.lastFocus.relative,
            r = c.page.info(),
            v = q.row + r.start;
          0 !== r.recordsDisplay && (v >= r.recordsDisplay && (v = r.recordsDisplay - 1), a._focus(v, q.column, !0, f))
        }
      });
      this.c.clipboard && this._clipboard();
      c.on("destroy" + d, function () {
        a._blur(!0);
        c.off(d);
        b(c.table().body()).off("click" + d, "th, td").off("dblclick" + d, "th, td");
        b(k).off("mousedown" + d).off("keydown" + d).off("copy" + d).off("paste" + d)
      });
      var l = c.state.loaded();
      if (l && l.keyTable) c.one("init", function () {
        var f = c.cell(l.keyTable);
        f.any() && f.focus()
      });
      else this.c.focus && c.cell(this.c.focus).focus()
    },
    _blur: function (a) {
      if (this.s.enable && this.s.lastFocus) {
        var c = this.s.lastFocus.cell;
        b(c.node()).removeClass(this.c.className);
        this.s.lastFocus = null;
        a || (this._updateFixedColumns(c.index().column), this._emitEvent("key-blur", [this.s.dt, c]))
      }
    },
    _clipboard: function () {
      var a = this.s.dt,
        c = this,
        e = this.s.namespace;
      g.getSelection && (b(k).on("copy" + e, function (d) {
        d = d.originalEvent;
        var h = g.getSelection().toString(),
          p = c.s.lastFocus;
        !h && p && (d.clipboardData.setData("text/plain",
          p.cell.render(c.c.clipboardOrthogonal)), d.preventDefault())
      }), b(k).on("paste" + e, function (d) {
        d = d.originalEvent;
        var h = c.s.lastFocus,
          p = k.activeElement,
          l = c.c.editor,
          f;
        !h || p && "body" !== p.nodeName.toLowerCase() || (d.preventDefault(), g.clipboardData && g.clipboardData.getData ? f = g.clipboardData.getData("Text") : d.clipboardData && d.clipboardData.getData && (f = d.clipboardData.getData("text/plain")), l ? l.inline(h.cell.index()).set(l.displayed()[0], f).submit() : (h.cell.data(f), a.draw(!1)))
      }))
    },
    _columns: function () {
      var a =
        this.s.dt,
        c = a.columns(this.c.columns).indexes(),
        e = [];
      a.columns(":visible").every(function (d) {
        -1 !== c.indexOf(d) && e.push(d)
      });
      return e
    },
    _editor: function (a, c, e) {
      if (this.s.lastFocus) {
        var d = this,
          h = this.s.dt,
          p = this.c.editor,
          l = this.s.lastFocus.cell,
          f = this.s.namespace + "e" + w++;
        if (!(b("div.DTE", l.node()).length || null !== a && (0 <= a && 9 >= a || 11 === a || 12 === a || 14 <= a && 31 >= a || 112 <= a && 123 >= a || 127 <= a && 159 >= a))) {
          c.stopPropagation();
          13 === a && c.preventDefault();
          var q = function () {
            p.one("open" + f, function () {
              p.off("cancelOpen" + f);
              e || b("div.DTE_Field_InputControl input, div.DTE_Field_InputControl textarea").select();
              h.keys.enable(e ? "tab-only" : "navigation-only");
              h.on("key-blur.editor", function (r, v, x) {
                p.displayed() && x.node() === l.node() && p.submit()
              });
              e && b(h.table().container()).addClass("dtk-focus-alt");
              p.on("preSubmitCancelled" + f, function () {
                setTimeout(function () {
                  d._focus(l, null, !1)
                }, 50)
              });
              p.on("submitUnsuccessful" + f, function () {
                d._focus(l, null, !1)
              });
              p.one("close" + f, function () {
                h.keys.enable(!0);
                h.off("key-blur.editor");
                p.off(f);
                b(h.table().container()).removeClass("dtk-focus-alt")
              })
            }).one("cancelOpen" + f, function () {
              p.off(f)
            }).inline(l.index())
          };
          13 === a ? (e = !0, b(k).one("keyup", function () {
            q()
          })) : q()
        }
      }
    },
    _emitEvent: function (a, c) {
      this.s.dt.iterator("table", function (e, d) {
        b(e.nTable).triggerHandler(a, c)
      })
    },
    _focus: function (a, c, e, d) {
      var h = this,
        p = this.s.dt,
        l = p.page.info(),
        f = this.s.lastFocus;
      d || (d = null);
      if (this.s.enable) {
        if ("number" !== typeof a) {
          if (!a.any()) return;
          var q = a.index();
          c = q.column;
          a = p.rows({
            filter: "applied",
            order: "applied"
          }).indexes().indexOf(q.row);
          if (0 > a) return;
          l.serverSide && (a += l.start)
        }
        if (-1 !== l.length && (a < l.start || a >= l.start + l.length)) this.s.focusDraw = !0, this.s.waitingForDraw = !0, p.one("draw", function () {
          h.s.focusDraw = !1;
          h.s.waitingForDraw = !1;
          h._focus(a, c, n, d)
        }).page(Math.floor(a / l.length)).draw(!1);
        else if (-1 !== b.inArray(c, this._columns())) {
          l.serverSide && (a -= l.start);
          l = p.cells(null, c, {
            search: "applied",
            order: "applied"
          }).flatten();
          l = p.cell(l[a]);
          if (f) {
            if (f.node === l.node()) {
              this._emitEvent("key-refocus", [this.s.dt, l, d || null]);
              return
            }
            this._blur()
          }
          this._removeOtherFocus();
          f = b(l.node());
          f.addClass(this.c.className);
          this._updateFixedColumns(c);
          if (e === n || !0 === e) this._scroll(b(g), b(k.body), f, "offset"), e = p.table().body().parentNode, e !== p.table().header().parentNode && (e = b(e.parentNode), this._scroll(e, e, f, "position"));
          this.s.lastFocus = {
            cell: l,
            node: l.node(),
            relative: {
              row: p.rows({
                page: "current"
              }).indexes().indexOf(l.index().row),
              column: l.index().column
            }
          };
          this._emitEvent("key-focus", [this.s.dt, l, d || null]);
          p.state.save()
        }
      }
    },
    _key: function (a) {
      if (this.s.waitingForDraw) a.preventDefault();
      else {
        var c = this.s.enable,
          e = !0 === c || "navigation-only" === c;
        if (c && (!(0 === a.keyCode || a.ctrlKey || a.metaKey || a.altKey) || a.ctrlKey && a.altKey)) {
          var d = this.s.lastFocus;
          if (d)
            if (this.s.dt.cell(d.node).any()) {
              d = this.s.dt;
              var h = this.s.dt.settings()[0].oScroll.sY ? !0 : !1;
              if (!this.c.keys || -1 !== b.inArray(a.keyCode, this.c.keys)) switch (a.keyCode) {
                case 9:
                  this._shift(a, a.shiftKey ? "left" : "right", !0);
                  break;
                case 27:
                  this.s.blurable && !0 === c && this._blur();
                  break;
                case 33:
                case 34:
                  e && !h && (a.preventDefault(), d.page(33 === a.keyCode ?
                    "previous" : "next").draw(!1));
                  break;
                case 35:
                case 36:
                  e && (a.preventDefault(), c = d.cells({
                    page: "current"
                  }).indexes(), e = this._columns(), this._focus(d.cell(c[35 === a.keyCode ? c.length - 1 : e[0]]), null, !0, a));
                  break;
                case 37:
                  e && this._shift(a, "left");
                  break;
                case 38:
                  e && this._shift(a, "up");
                  break;
                case 39:
                  e && this._shift(a, "right");
                  break;
                case 40:
                  e && this._shift(a, "down");
                  break;
                case 113:
                  if (this.c.editor) {
                    this._editor(null, a, !0);
                    break
                  }
                  default:
                    !0 === c && this._emitEvent("key", [d, a.keyCode, this.s.lastFocus.cell, a])
              }
            } else this.s.lastFocus =
              null
        }
      }
    },
    _removeOtherFocus: function () {
      var a = this.s.dt.table().node();
      b.fn.dataTable.tables({
        api: !0
      }).iterator("table", function (c) {
        this.table().node() !== a && this.cell.blur()
      })
    },
    _scroll: function (a, c, e, d) {
      var h = e[d](),
        p = e.outerHeight(),
        l = e.outerWidth(),
        f = c.scrollTop(),
        q = c.scrollLeft(),
        r = a.height();
      a = a.width();
      "position" === d && (h.top += parseInt(e.closest("table").css("top"), 10));
      h.top < f && c.scrollTop(h.top);
      h.left < q && c.scrollLeft(h.left);
      h.top + p > f + r && p < r && c.scrollTop(h.top + p - r);
      h.left + l > q + a && l < a && c.scrollLeft(h.left +
        l - a)
    },
    _shift: function (a, c, e) {
      var d = this.s.dt,
        h = d.page.info(),
        p = h.recordsDisplay,
        l = this.s.lastFocus.cell,
        f = this._columns();
      if (l) {
        var q = d.rows({
          filter: "applied",
          order: "applied"
        }).indexes().indexOf(l.index().row);
        h.serverSide && (q += h.start);
        d = d.columns(f).indexes().indexOf(l.index().column);
        h = f[d];
        "right" === c ? d >= f.length - 1 ? (q++, h = f[0]) : h = f[d + 1] : "left" === c ? 0 === d ? (q--, h = f[f.length - 1]) : h = f[d - 1] : "up" === c ? q-- : "down" === c && q++;
        0 <= q && q < p && -1 !== b.inArray(h, f) ? (a && a.preventDefault(), this._focus(q, h, !0, a)) : e && this.c.blurable ?
          this._blur() : a && a.preventDefault()
      }
    },
    _tabInput: function () {
      var a = this,
        c = this.s.dt,
        e = null !== this.c.tabIndex ? this.c.tabIndex : c.settings()[0].iTabIndex; - 1 != e && (this.s.tabInput || (e = b('<div><input type="text" tabindex="' + e + '"/></div>').css({
          position: "absolute",
          height: 1,
          width: 0,
          overflow: "hidden"
        }), e.children().on("focus", function (d) {
          var h = c.cell(":eq(0)", a._columns(), {
            page: "current"
          });
          h.any() && a._focus(h, null, !0, d)
        }), this.s.tabInput = e), (e = this.s.dt.cell(":eq(0)", "0:visible", {
          page: "current",
          order: "current"
        }).node()) &&
        b(e).prepend(this.s.tabInput))
    },
    _updateFixedColumns: function (a) {
      var c = this.s.dt,
        e = c.settings()[0];
      if (e._oFixedColumns) {
        var d = e.aoColumns.length - e._oFixedColumns.s.iRightColumns;
        (a < e._oFixedColumns.s.iLeftColumns || a >= d) && c.fixedColumns().update()
      }
    }
  });
  t.defaults = {
    blurable: !0,
    className: "focus",
    clipboard: !0,
    clipboardOrthogonal: "display",
    columns: "",
    editor: null,
    editOnFocus: !1,
    focus: null,
    keys: null,
    tabIndex: null
  };
  t.version = "2.5.3";
  b.fn.dataTable.KeyTable = t;
  b.fn.DataTable.KeyTable = t;
  m.Api.register("cell.blur()",
    function () {
      return this.iterator("table", function (a) {
        a.keytable && a.keytable.blur()
      })
    });
  m.Api.register("cell().focus()", function () {
    return this.iterator("cell", function (a, c, e) {
      a.keytable && a.keytable.focus(c, e)
    })
  });
  m.Api.register("keys.disable()", function () {
    return this.iterator("table", function (a) {
      a.keytable && a.keytable.enable(!1)
    })
  });
  m.Api.register("keys.enable()", function (a) {
    return this.iterator("table", function (c) {
      c.keytable && c.keytable.enable(a === n ? !0 : a)
    })
  });
  m.Api.register("keys.move()", function (a) {
    return this.iterator("table",
      function (c) {
        c.keytable && c.keytable._shift(null, a, !1)
      })
  });
  m.ext.selector.cell.push(function (a, c, e) {
    c = c.focused;
    a = a.keytable;
    var d = [];
    if (!a || c === n) return e;
    for (var h = 0, p = e.length; h < p; h++)(!0 === c && a.focused(e[h]) || !1 === c && !a.focused(e[h])) && d.push(e[h]);
    return d
  });
  b(k).on("preInit.dt.dtk", function (a, c, e) {
    "dt" === a.namespace && (a = c.oInit.keys, e = m.defaults.keys, a || e) && (e = b.extend({}, e, a), !1 !== a && new t(c, e))
  });
  return t
});


/*!
 Bootstrap 4 styling wrapper for KeyTable
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-keytable"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.KeyTable || require("datatables.net-keytable")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, d) {
  return c.fn.dataTable
});


/*!
   Copyright 2014-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 Responsive 2.2.6
 2014-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (b, k, m) {
  b instanceof String && (b = String(b));
  for (var n = b.length, p = 0; p < n; p++) {
    var y = b[p];
    if (k.call(m, y, p, b)) return {
      i: p,
      v: y
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, k, m) {
  if (b == Array.prototype || b == Object.prototype) return b;
  b[k] = m.value;
  return b
};
$jscomp.getGlobal = function (b) {
  b = ["object" == typeof globalThis && globalThis, b, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var k = 0; k < b.length; ++k) {
    var m = b[k];
    if (m && m.Math == Math) return m
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (b, k) {
  var m = $jscomp.propertyToPolyfillSymbol[k];
  if (null == m) return b[k];
  m = b[m];
  return void 0 !== m ? m : b[k]
};
$jscomp.polyfill = function (b, k, m, n) {
  k && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(b, k, m, n) : $jscomp.polyfillUnisolated(b, k, m, n))
};
$jscomp.polyfillUnisolated = function (b, k, m, n) {
  m = $jscomp.global;
  b = b.split(".");
  for (n = 0; n < b.length - 1; n++) {
    var p = b[n];
    if (!(p in m)) return;
    m = m[p]
  }
  b = b[b.length - 1];
  n = m[b];
  k = k(n);
  k != n && null != k && $jscomp.defineProperty(m, b, {
    configurable: !0,
    writable: !0,
    value: k
  })
};
$jscomp.polyfillIsolated = function (b, k, m, n) {
  var p = b.split(".");
  b = 1 === p.length;
  n = p[0];
  n = !b && n in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var y = 0; y < p.length - 1; y++) {
    var z = p[y];
    if (!(z in n)) return;
    n = n[z]
  }
  p = p[p.length - 1];
  m = $jscomp.IS_SYMBOL_NATIVE && "es6" === m ? n[p] : null;
  k = k(m);
  null != k && (b ? $jscomp.defineProperty($jscomp.polyfills, p, {
    configurable: !0,
    writable: !0,
    value: k
  }) : k !== m && ($jscomp.propertyToPolyfillSymbol[p] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(p) : $jscomp.POLYFILL_PREFIX + p, p =
    $jscomp.propertyToPolyfillSymbol[p], $jscomp.defineProperty(n, p, {
      configurable: !0,
      writable: !0,
      value: k
    })))
};
$jscomp.polyfill("Array.prototype.find", function (b) {
  return b ? b : function (k, m) {
    return $jscomp.findInternal(this, k, m).v
  }
}, "es6", "es3");
(function (b) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (k) {
    return b(k, window, document)
  }) : "object" === typeof exports ? module.exports = function (k, m) {
    k || (k = window);
    m && m.fn.dataTable || (m = require("datatables.net")(k, m).$);
    return b(m, k, k.document)
  } : b(jQuery, window, document)
})(function (b, k, m, n) {
  function p(a, c, d) {
    var f = c + "-" + d;
    if (A[f]) return A[f];
    var g = [];
    a = a.cell(c, d).node().childNodes;
    c = 0;
    for (d = a.length; c < d; c++) g.push(a[c]);
    return A[f] = g
  }

  function y(a, c, d) {
    var f = c + "-" +
      d;
    if (A[f]) {
      a = a.cell(c, d).node();
      d = A[f][0].parentNode.childNodes;
      c = [];
      for (var g = 0, l = d.length; g < l; g++) c.push(d[g]);
      d = 0;
      for (g = c.length; d < g; d++) a.appendChild(c[d]);
      A[f] = n
    }
  }
  var z = b.fn.dataTable,
    u = function (a, c) {
      if (!z.versionCheck || !z.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer";
      this.s = {
        dt: new z.Api(a),
        columns: [],
        current: []
      };
      this.s.dt.settings()[0].responsive || (c && "string" === typeof c.details ? c.details = {
          type: c.details
        } : c && !1 === c.details ? c.details = {
          type: !1
        } : c &&
        !0 === c.details && (c.details = {
          type: "inline"
        }), this.c = b.extend(!0, {}, u.defaults, z.defaults.responsive, c), a.responsive = this, this._constructor())
    };
  b.extend(u.prototype, {
    _constructor: function () {
      var a = this,
        c = this.s.dt,
        d = c.settings()[0],
        f = b(k).innerWidth();
      c.settings()[0]._responsive = this;
      b(k).on("resize.dtr orientationchange.dtr", z.util.throttle(function () {
        var g = b(k).innerWidth();
        g !== f && (a._resize(), f = g)
      }));
      d.oApi._fnCallbackReg(d, "aoRowCreatedCallback", function (g, l, h) {
        -1 !== b.inArray(!1, a.s.current) && b(">td, >th",
          g).each(function (e) {
          e = c.column.index("toData", e);
          !1 === a.s.current[e] && b(this).css("display", "none")
        })
      });
      c.on("destroy.dtr", function () {
        c.off(".dtr");
        b(c.table().body()).off(".dtr");
        b(k).off("resize.dtr orientationchange.dtr");
        c.cells(".dtr-control").nodes().to$().removeClass("dtr-control");
        b.each(a.s.current, function (g, l) {
          !1 === l && a._setColumnVis(g, !0)
        })
      });
      this.c.breakpoints.sort(function (g, l) {
        return g.width < l.width ? 1 : g.width > l.width ? -1 : 0
      });
      this._classLogic();
      this._resizeAuto();
      d = this.c.details;
      !1 !==
        d.type && (a._detailsInit(), c.on("column-visibility.dtr", function () {
          a._timer && clearTimeout(a._timer);
          a._timer = setTimeout(function () {
            a._timer = null;
            a._classLogic();
            a._resizeAuto();
            a._resize(!0);
            a._redrawChildren()
          }, 100)
        }), c.on("draw.dtr", function () {
          a._redrawChildren()
        }), b(c.table().node()).addClass("dtr-" + d.type));
      c.on("column-reorder.dtr", function (g, l, h) {
        a._classLogic();
        a._resizeAuto();
        a._resize(!0)
      });
      c.on("column-sizing.dtr", function () {
        a._resizeAuto();
        a._resize()
      });
      c.on("preXhr.dtr", function () {
        var g = [];
        c.rows().every(function () {
          this.child.isShown() && g.push(this.id(!0))
        });
        c.one("draw.dtr", function () {
          a._resizeAuto();
          a._resize();
          c.rows(g).every(function () {
            a._detailsDisplay(this, !1)
          })
        })
      });
      c.on("draw.dtr", function () {
        a._controlClass()
      }).on("init.dtr", function (g, l, h) {
        "dt" === g.namespace && (a._resizeAuto(), a._resize(), b.inArray(!1, a.s.current) && c.columns.adjust())
      });
      this._resize()
    },
    _columnsVisiblity: function (a) {
      var c = this.s.dt,
        d = this.s.columns,
        f, g = d.map(function (t, v) {
          return {
            columnIdx: v,
            priority: t.priority
          }
        }).sort(function (t,
          v) {
          return t.priority !== v.priority ? t.priority - v.priority : t.columnIdx - v.columnIdx
        }),
        l = b.map(d, function (t, v) {
          return !1 === c.column(v).visible() ? "not-visible" : t.auto && null === t.minWidth ? !1 : !0 === t.auto ? "-" : -1 !== b.inArray(a, t.includeIn)
        }),
        h = 0;
      var e = 0;
      for (f = l.length; e < f; e++) !0 === l[e] && (h += d[e].minWidth);
      e = c.settings()[0].oScroll;
      e = e.sY || e.sX ? e.iBarWidth : 0;
      h = c.table().container().offsetWidth - e - h;
      e = 0;
      for (f = l.length; e < f; e++) d[e].control && (h -= d[e].minWidth);
      var r = !1;
      e = 0;
      for (f = g.length; e < f; e++) {
        var q = g[e].columnIdx;
        "-" === l[q] && !d[q].control && d[q].minWidth && (r || 0 > h - d[q].minWidth ? (r = !0, l[q] = !1) : l[q] = !0, h -= d[q].minWidth)
      }
      g = !1;
      e = 0;
      for (f = d.length; e < f; e++)
        if (!d[e].control && !d[e].never && !1 === l[e]) {
          g = !0;
          break
        } e = 0;
      for (f = d.length; e < f; e++) d[e].control && (l[e] = g), "not-visible" === l[e] && (l[e] = !1); - 1 === b.inArray(!0, l) && (l[0] = !0);
      return l
    },
    _classLogic: function () {
      var a = this,
        c = this.c.breakpoints,
        d = this.s.dt,
        f = d.columns().eq(0).map(function (h) {
          var e = this.column(h),
            r = e.header().className;
          h = d.settings()[0].aoColumns[h].responsivePriority;
          e = e.header().getAttribute("data-priority");
          h === n && (h = e === n || null === e ? 1E4 : 1 * e);
          return {
            className: r,
            includeIn: [],
            auto: !1,
            control: !1,
            never: r.match(/\bnever\b/) ? !0 : !1,
            priority: h
          }
        }),
        g = function (h, e) {
          h = f[h].includeIn; - 1 === b.inArray(e, h) && h.push(e)
        },
        l = function (h, e, r, q) {
          if (!r) f[h].includeIn.push(e);
          else if ("max-" === r)
            for (q = a._find(e).width, e = 0, r = c.length; e < r; e++) c[e].width <= q && g(h, c[e].name);
          else if ("min-" === r)
            for (q = a._find(e).width, e = 0, r = c.length; e < r; e++) c[e].width >= q && g(h, c[e].name);
          else if ("not-" === r)
            for (e =
              0, r = c.length; e < r; e++) - 1 === c[e].name.indexOf(q) && g(h, c[e].name)
        };
      f.each(function (h, e) {
        for (var r = h.className.split(" "), q = !1, t = 0, v = r.length; t < v; t++) {
          var B = r[t].trim();
          if ("all" === B) {
            q = !0;
            h.includeIn = b.map(c, function (w) {
              return w.name
            });
            return
          }
          if ("none" === B || h.never) {
            q = !0;
            return
          }
          if ("control" === B || "dtr-control" === B) {
            q = !0;
            h.control = !0;
            return
          }
          b.each(c, function (w, D) {
            w = D.name.split("-");
            var x = B.match(new RegExp("(min\\-|max\\-|not\\-)?(" + w[0] + ")(\\-[_a-zA-Z0-9])?"));
            x && (q = !0, x[2] === w[0] && x[3] === "-" + w[1] ? l(e,
              D.name, x[1], x[2] + x[3]) : x[2] !== w[0] || x[3] || l(e, D.name, x[1], x[2]))
          })
        }
        q || (h.auto = !0)
      });
      this.s.columns = f
    },
    _controlClass: function () {
      if ("inline" === this.c.details.type) {
        var a = this.s.dt,
          c = b.inArray(!0, this.s.current);
        a.cells(null, function (d) {
          return d !== c
        }, {
          page: "current"
        }).nodes().to$().filter(".dtr-control").removeClass("dtr-control");
        a.cells(null, c, {
          page: "current"
        }).nodes().to$().addClass("dtr-control")
      }
    },
    _detailsDisplay: function (a, c) {
      var d = this,
        f = this.s.dt,
        g = this.c.details;
      if (g && !1 !== g.type) {
        var l = g.display(a,
          c,
          function () {
            return g.renderer(f, a[0], d._detailsObj(a[0]))
          });
        !0 !== l && !1 !== l || b(f.table().node()).triggerHandler("responsive-display.dt", [f, a, l, c])
      }
    },
    _detailsInit: function () {
      var a = this,
        c = this.s.dt,
        d = this.c.details;
      "inline" === d.type && (d.target = "td.dtr-control, th.dtr-control");
      c.on("draw.dtr", function () {
        a._tabIndexes()
      });
      a._tabIndexes();
      b(c.table().body()).on("keyup.dtr", "td, th", function (g) {
        13 === g.keyCode && b(this).data("dtr-keyboard") && b(this).click()
      });
      var f = d.target;
      d = "string" === typeof f ? f : "td, th";
      if (f !== n || null !== f) b(c.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", d, function (g) {
        if (b(c.table().node()).hasClass("collapsed") && -1 !== b.inArray(b(this).closest("tr").get(0), c.rows().nodes().toArray())) {
          if ("number" === typeof f) {
            var l = 0 > f ? c.columns().eq(0).length + f : f;
            if (c.cell(this).index().column !== l) return
          }
          l = c.row(b(this).closest("tr"));
          "click" === g.type ? a._detailsDisplay(l, !1) : "mousedown" === g.type ? b(this).css("outline", "none") : "mouseup" === g.type && b(this).trigger("blur").css("outline", "")
        }
      })
    },
    _detailsObj: function (a) {
      var c = this,
        d = this.s.dt;
      return b.map(this.s.columns, function (f, g) {
        if (!f.never && !f.control) return f = d.settings()[0].aoColumns[g], {
          className: f.sClass,
          columnIndex: g,
          data: d.cell(a, g).render(c.c.orthogonal),
          hidden: d.column(g).visible() && !c.s.current[g],
          rowIndex: a,
          title: null !== f.sTitle ? f.sTitle : b(d.column(g).header()).text()
        }
      })
    },
    _find: function (a) {
      for (var c = this.c.breakpoints, d = 0, f = c.length; d < f; d++)
        if (c[d].name === a) return c[d]
    },
    _redrawChildren: function () {
      var a = this,
        c = this.s.dt;
      c.rows({
        page: "current"
      }).iterator("row",
        function (d, f) {
          c.row(f);
          a._detailsDisplay(c.row(f), !0)
        })
    },
    _resize: function (a) {
      var c = this,
        d = this.s.dt,
        f = b(k).innerWidth(),
        g = this.c.breakpoints,
        l = g[0].name,
        h = this.s.columns,
        e, r = this.s.current.slice();
      for (e = g.length - 1; 0 <= e; e--)
        if (f <= g[e].width) {
          l = g[e].name;
          break
        } var q = this._columnsVisiblity(l);
      this.s.current = q;
      g = !1;
      e = 0;
      for (f = h.length; e < f; e++)
        if (!1 === q[e] && !h[e].never && !h[e].control && !1 === !d.column(e).visible()) {
          g = !0;
          break
        } b(d.table().node()).toggleClass("collapsed", g);
      var t = !1,
        v = 0;
      d.columns().eq(0).each(function (B,
        w) {
        !0 === q[w] && v++;
        if (a || q[w] !== r[w]) t = !0, c._setColumnVis(B, q[w])
      });
      t && (this._redrawChildren(), b(d.table().node()).trigger("responsive-resize.dt", [d, this.s.current]), 0 === d.page.info().recordsDisplay && b("td", d.table().body()).eq(0).attr("colspan", v));
      c._controlClass()
    },
    _resizeAuto: function () {
      var a = this.s.dt,
        c = this.s.columns;
      if (this.c.auto && -1 !== b.inArray(!0, b.map(c, function (e) {
          return e.auto
        }))) {
        b.isEmptyObject(A) || b.each(A, function (e) {
          e = e.split("-");
          y(a, 1 * e[0], 1 * e[1])
        });
        a.table().node();
        var d = a.table().node().cloneNode(!1),
          f = b(a.table().header().cloneNode(!1)).appendTo(d),
          g = b(a.table().body()).clone(!1, !1).empty().appendTo(d);
        d.style.width = "auto";
        var l = a.columns().header().filter(function (e) {
          return a.column(e).visible()
        }).to$().clone(!1).css("display", "table-cell").css("width", "auto").css("min-width", 0);
        b(g).append(b(a.rows({
          page: "current"
        }).nodes()).clone(!1)).find("th, td").css("display", "");
        if (g = a.table().footer()) {
          g = b(g.cloneNode(!1)).appendTo(d);
          var h = a.columns().footer().filter(function (e) {
            return a.column(e).visible()
          }).to$().clone(!1).css("display",
            "table-cell");
          b("<tr/>").append(h).appendTo(g)
        }
        b("<tr/>").append(l).appendTo(f);
        "inline" === this.c.details.type && b(d).addClass("dtr-inline collapsed");
        b(d).find("[name]").removeAttr("name");
        b(d).css("position", "relative");
        d = b("<div/>").css({
          width: 1,
          height: 1,
          overflow: "hidden",
          clear: "both"
        }).append(d);
        d.insertBefore(a.table().node());
        l.each(function (e) {
          e = a.column.index("fromVisible", e);
          c[e].minWidth = this.offsetWidth || 0
        });
        d.remove()
      }
    },
    _responsiveOnlyHidden: function () {
      var a = this.s.dt;
      return b.map(this.s.current,
        function (c, d) {
          return !1 === a.column(d).visible() ? !0 : c
        })
    },
    _setColumnVis: function (a, c) {
      var d = this.s.dt;
      c = c ? "" : "none";
      b(d.column(a).header()).css("display", c);
      b(d.column(a).footer()).css("display", c);
      d.column(a).nodes().to$().css("display", c);
      b.isEmptyObject(A) || d.cells(null, a).indexes().each(function (f) {
        y(d, f.row, f.column)
      })
    },
    _tabIndexes: function () {
      var a = this.s.dt,
        c = a.cells({
          page: "current"
        }).nodes().to$(),
        d = a.settings()[0],
        f = this.c.details.target;
      c.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]");
      "number" === typeof f ? a.cells(null, f, {
        page: "current"
      }).nodes().to$().attr("tabIndex", d.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === f && (f = ">td:first-child, >th:first-child"), b(f, a.rows({
        page: "current"
      }).nodes()).attr("tabIndex", d.iTabIndex).data("dtr-keyboard", 1))
    }
  });
  u.breakpoints = [{
    name: "desktop",
    width: Infinity
  }, {
    name: "tablet-l",
    width: 1024
  }, {
    name: "tablet-p",
    width: 768
  }, {
    name: "mobile-l",
    width: 480
  }, {
    name: "mobile-p",
    width: 320
  }];
  u.display = {
    childRow: function (a, c, d) {
      if (c) {
        if (b(a.node()).hasClass("parent")) return a.child(d(),
          "child").show(), !0
      } else {
        if (a.child.isShown()) return a.child(!1), b(a.node()).removeClass("parent"), !1;
        a.child(d(), "child").show();
        b(a.node()).addClass("parent");
        return !0
      }
    },
    childRowImmediate: function (a, c, d) {
      if (!c && a.child.isShown() || !a.responsive.hasHidden()) return a.child(!1), b(a.node()).removeClass("parent"), !1;
      a.child(d(), "child").show();
      b(a.node()).addClass("parent");
      return !0
    },
    modal: function (a) {
      return function (c, d, f) {
        if (d) b("div.dtr-modal-content").empty().append(f());
        else {
          var g = function () {
              l.remove();
              b(m).off("keypress.dtr")
            },
            l = b('<div class="dtr-modal"/>').append(b('<div class="dtr-modal-display"/>').append(b('<div class="dtr-modal-content"/>').append(f())).append(b('<div class="dtr-modal-close">&times;</div>').click(function () {
              g()
            }))).append(b('<div class="dtr-modal-background"/>').click(function () {
              g()
            })).appendTo("body");
          b(m).on("keyup.dtr", function (h) {
            27 === h.keyCode && (h.stopPropagation(), g())
          })
        }
        a && a.header && b("div.dtr-modal-content").prepend("<h2>" + a.header(c) + "</h2>")
      }
    }
  };
  var A = {};
  u.renderer = {
    listHiddenNodes: function () {
      return function (a, c, d) {
        var f = b('<ul data-dtr-index="' + c + '" class="dtr-details"/>'),
          g = !1;
        b.each(d, function (l, h) {
          h.hidden && (b("<li " + (h.className ? 'class="' + h.className + '"' : "") + ' data-dtr-index="' + h.columnIndex + '" data-dt-row="' + h.rowIndex + '" data-dt-column="' + h.columnIndex + '"><span class="dtr-title">' + h.title + "</span> </li>").append(b('<span class="dtr-data"/>').append(p(a, h.rowIndex, h.columnIndex))).appendTo(f), g = !0)
        });
        return g ? f : !1
      }
    },
    listHidden: function () {
      return function (a,
        c, d) {
        return (a = b.map(d, function (f) {
          var g = f.className ? 'class="' + f.className + '"' : "";
          return f.hidden ? "<li " + g + ' data-dtr-index="' + f.columnIndex + '" data-dt-row="' + f.rowIndex + '" data-dt-column="' + f.columnIndex + '"><span class="dtr-title">' + f.title + '</span> <span class="dtr-data">' + f.data + "</span></li>" : ""
        }).join("")) ? b('<ul data-dtr-index="' + c + '" class="dtr-details"/>').append(a) : !1
      }
    },
    tableAll: function (a) {
      a = b.extend({
        tableClass: ""
      }, a);
      return function (c, d, f) {
        c = b.map(f, function (g) {
          return "<tr " + (g.className ?
            'class="' + g.className + '"' : "") + ' data-dt-row="' + g.rowIndex + '" data-dt-column="' + g.columnIndex + '"><td>' + g.title + ":</td> <td>" + g.data + "</td></tr>"
        }).join("");
        return b('<table class="' + a.tableClass + ' dtr-details" width="100%"/>').append(c)
      }
    }
  };
  u.defaults = {
    breakpoints: u.breakpoints,
    auto: !0,
    details: {
      display: u.display.childRow,
      renderer: u.renderer.listHidden(),
      target: 0,
      type: "inline"
    },
    orthogonal: "display"
  };
  var C = b.fn.dataTable.Api;
  C.register("responsive()", function () {
    return this
  });
  C.register("responsive.index()",
    function (a) {
      a = b(a);
      return {
        column: a.data("dtr-index"),
        row: a.parent().data("dtr-index")
      }
    });
  C.register("responsive.rebuild()", function () {
    return this.iterator("table", function (a) {
      a._responsive && a._responsive._classLogic()
    })
  });
  C.register("responsive.recalc()", function () {
    return this.iterator("table", function (a) {
      a._responsive && (a._responsive._resizeAuto(), a._responsive._resize())
    })
  });
  C.register("responsive.hasHidden()", function () {
    var a = this.context[0];
    return a._responsive ? -1 !== b.inArray(!1, a._responsive._responsiveOnlyHidden()) :
      !1
  });
  C.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function () {
    return this.iterator("column", function (a, c) {
      return a._responsive ? a._responsive._responsiveOnlyHidden()[c] : !1
    }, 1)
  });
  u.version = "2.2.6";
  b.fn.dataTable.Responsive = u;
  b.fn.DataTable.Responsive = u;
  b(m).on("preInit.dt.dtr", function (a, c, d) {
    "dt" === a.namespace && (b(c.nTable).hasClass("responsive") || b(c.nTable).hasClass("dt-responsive") || c.oInit.responsive || z.defaults.responsive) && (a = c.oInit.responsive, !1 !== a && new u(c,
      b.isPlainObject(a) ? a : {}))
  });
  return u
});


/*!
 Bootstrap 4 integration for DataTables' Responsive
 ©2016 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, b, c) {
  a instanceof String && (a = String(a));
  for (var e = a.length, d = 0; d < e; d++) {
    var f = a[d];
    if (b.call(c, f, d, a)) return {
      i: d,
      v: f
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[b] = c.value;
  return a
};
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) return c
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) return a[b];
  c = a[c];
  return void 0 !== c ? c : a[b]
};
$jscomp.polyfill = function (a, b, c, e) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, e) : $jscomp.polyfillUnisolated(a, b, c, e))
};
$jscomp.polyfillUnisolated = function (a, b, c, e) {
  c = $jscomp.global;
  a = a.split(".");
  for (e = 0; e < a.length - 1; e++) {
    var d = a[e];
    if (!(d in c)) return;
    c = c[d]
  }
  a = a[a.length - 1];
  e = c[a];
  b = b(e);
  b != e && null != b && $jscomp.defineProperty(c, a, {
    configurable: !0,
    writable: !0,
    value: b
  })
};
$jscomp.polyfillIsolated = function (a, b, c, e) {
  var d = a.split(".");
  a = 1 === d.length;
  e = d[0];
  e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < d.length - 1; f++) {
    var g = d[f];
    if (!(g in e)) return;
    e = e[g]
  }
  d = d[d.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
  b = b(c);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, {
    configurable: !0,
    writable: !0,
    value: b
  }) : b !== c && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d, d =
    $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(e, d, {
      configurable: !0,
      writable: !0,
      value: b
    })))
};
$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (b, c) {
    return $jscomp.findInternal(this, b, c).v
  }
}, "es6", "es3");
(function (a) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-responsive"], function (b) {
    return a(b, window, document)
  }) : "object" === typeof exports ? module.exports = function (b, c) {
    b || (b = window);
    c && c.fn.dataTable || (c = require("datatables.net-bs4")(b, c).$);
    c.fn.dataTable.Responsive || require("datatables.net-responsive")(b, c);
    return a(c, b, b.document)
  } : a(jQuery, window, document)
})(function (a, b, c, e) {
  b = a.fn.dataTable;
  c = b.Responsive.display;
  var d = c.modal,
    f = a('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
  c.modal = function (g) {
    return function (k, h, l) {
      if (!a.fn.modal) d(k, h, l);
      else if (!h) {
        if (g && g.header) {
          h = f.find("div.modal-header");
          var m = h.find("button").detach();
          h.empty().append('<h4 class="modal-title">' + g.header(k) + "</h4>").append(m)
        }
        f.find("div.modal-body").empty().append(l());
        f.appendTo("body").modal()
      }
    }
  };
  return b.Responsive
});


/*!
   Copyright 2017-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 RowGroup 1.1.2
 ©2017-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, c, d) {
  a instanceof String && (a = String(a));
  for (var f = a.length, e = 0; e < f; e++) {
    var g = a[e];
    if (c.call(d, g, e, a)) return {
      i: e,
      v: g
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, d) {
  a != Array.prototype && a != Object.prototype && (a[c] = d.value)
};
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
  for (var c = 0; c < a.length; ++c) {
    var d = a[c];
    if (d && d.Math == Math) return d
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, c, d, f) {
  if (c) {
    d = $jscomp.global;
    a = a.split(".");
    for (f = 0; f < a.length - 1; f++) {
      var e = a[f];
      e in d || (d[e] = {});
      d = d[e]
    }
    a = a[a.length - 1];
    f = d[a];
    c = c(f);
    c != f && null != c && $jscomp.defineProperty(d, a, {
      configurable: !0,
      writable: !0,
      value: c
    })
  }
};
$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, d) {
    return $jscomp.findInternal(this, a, d).v
  }
}, "es6", "es3");
(function (a) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (c) {
    return a(c, window, document)
  }) : "object" === typeof exports ? module.exports = function (c, d) {
    c || (c = window);
    d && d.fn.dataTable || (d = require("datatables.net")(c, d).$);
    return a(d, c, c.document)
  } : a(jQuery, window, document)
})(function (a, c, d, f) {
  var e = a.fn.dataTable,
    g = function (b, h) {
      if (!e.versionCheck || !e.versionCheck("1.10.8")) throw "RowGroup requires DataTables 1.10.8 or newer";
      this.c = a.extend(!0, {}, e.defaults.rowGroup,
        g.defaults, h);
      this.s = {
        dt: new e.Api(b)
      };
      this.dom = {};
      b = this.s.dt.settings()[0];
      if (h = b.rowGroup) return h;
      b.rowGroup = this;
      this._constructor()
    };
  a.extend(g.prototype, {
    dataSrc: function (b) {
      if (b === f) return this.c.dataSrc;
      var h = this.s.dt;
      this.c.dataSrc = b;
      a(h.table().node()).triggerHandler("rowgroup-datasrc.dt", [h, b]);
      return this
    },
    disable: function () {
      this.c.enable = !1;
      return this
    },
    enable: function (b) {
      if (!1 === b) return this.disable();
      this.c.enable = !0;
      return this
    },
    enabled: function () {
      return this.c.enable
    },
    _constructor: function () {
      var b =
        this,
        a = this.s.dt,
        d = a.settings()[0];
      a.on("draw.dtrg", function (a, h) {
        b.c.enable && d === h && b._draw()
      });
      a.on("column-visibility.dt.dtrg responsive-resize.dt.dtrg", function () {
        b._adjustColspan()
      });
      a.on("destroy", function () {
        a.off(".dtrg")
      })
    },
    _adjustColspan: function () {
      a("tr." + this.c.className, this.s.dt.table().body()).find("td:visible").attr("colspan", this._colspan())
    },
    _colspan: function () {
      return this.s.dt.columns().visible().reduce(function (b, a) {
        return b + a
      }, 0)
    },
    _draw: function () {
      var b = this._group(0, this.s.dt.rows({
        page: "current"
      }).indexes());
      this._groupDisplay(0, b)
    },
    _group: function (b, d) {
      for (var h = a.isArray(this.c.dataSrc) ? this.c.dataSrc : [this.c.dataSrc], c = e.ext.oApi._fnGetObjectDataFn(h[b]), g = this.s.dt, l, n, m = [], k = 0, p = d.length; k < p; k++) {
        var q = d[k];
        l = g.row(q).data();
        l = c(l);
        if (null === l || l === f) l = this.c.emptyDataGroup;
        if (n === f || l !== n) m.push({
          dataPoint: l,
          rows: []
        }), n = l;
        m[m.length - 1].rows.push(q)
      }
      if (h[b + 1] !== f)
        for (k = 0, p = m.length; k < p; k++) m[k].children = this._group(b + 1, m[k].rows);
      return m
    },
    _groupDisplay: function (b, a) {
      for (var d = this.s.dt, c, h = 0, e =
          a.length; h < e; h++) {
        var f = a[h],
          g = f.dataPoint,
          k = f.rows;
        this.c.startRender && (c = this.c.startRender.call(this, d.rows(k), g, b), (c = this._rowWrap(c, this.c.startClassName, b)) && c.insertBefore(d.row(k[0]).node()));
        this.c.endRender && (c = this.c.endRender.call(this, d.rows(k), g, b), (c = this._rowWrap(c, this.c.endClassName, b)) && c.insertAfter(d.row(k[k.length - 1]).node()));
        f.children && this._groupDisplay(b + 1, f.children)
      }
    },
    _rowWrap: function (b, d, c) {
      if (null === b || "" === b) b = this.c.emptyDataGroup;
      return b === f || null === b ? null : ("object" ===
        typeof b && b.nodeName && "tr" === b.nodeName.toLowerCase() ? a(b) : b instanceof a && b.length && "tr" === b[0].nodeName.toLowerCase() ? b : a("<tr/>").append(a("<td/>").attr("colspan", this._colspan()).append(b))).addClass(this.c.className).addClass(d).addClass("dtrg-level-" + c)
    }
  });
  g.defaults = {
    className: "dtrg-group",
    dataSrc: 0,
    emptyDataGroup: "No group",
    enable: !0,
    endClassName: "dtrg-end",
    endRender: null,
    startClassName: "dtrg-start",
    startRender: function (b, a) {
      return a
    }
  };
  g.version = "1.1.2";
  a.fn.dataTable.RowGroup = g;
  a.fn.DataTable.RowGroup =
    g;
  e.Api.register("rowGroup()", function () {
    return this
  });
  e.Api.register("rowGroup().disable()", function () {
    return this.iterator("table", function (a) {
      a.rowGroup && a.rowGroup.enable(!1)
    })
  });
  e.Api.register("rowGroup().enable()", function (a) {
    return this.iterator("table", function (b) {
      b.rowGroup && b.rowGroup.enable(a === f ? !0 : a)
    })
  });
  e.Api.register("rowGroup().enabled()", function () {
    var a = this.context;
    return a.length && a[0].rowGroup ? a[0].rowGroup.enabled() : !1
  });
  e.Api.register("rowGroup().dataSrc()", function (a) {
    return a ===
      f ? this.context[0].rowGroup.dataSrc() : this.iterator("table", function (b) {
        b.rowGroup && b.rowGroup.dataSrc(a)
      })
  });
  a(d).on("preInit.dt.dtrg", function (b, d, c) {
    "dt" === b.namespace && (b = d.oInit.rowGroup, c = e.defaults.rowGroup, b || c) && (c = a.extend({}, c, b), !1 !== b && new g(d, c))
  });
  return g
});


/*!
 Bootstrap 4 styling wrapper for RowGroup
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-rowgroup"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.RowGroup || require("datatables.net-rowgroup")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, d) {
  return c.fn.dataTable
});


/*!
   Copyright 2015-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 RowReorder 1.2.7
 2015-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (a, f, d) {
  a instanceof String && (a = String(a));
  for (var k = a.length, g = 0; g < k; g++) {
    var h = a[g];
    if (f.call(d, h, g, a)) return {
      i: g,
      v: h
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, f, d) {
  a != Array.prototype && a != Object.prototype && (a[f] = d.value)
};
$jscomp.getGlobal = function (a) {
  a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
  for (var f = 0; f < a.length; ++f) {
    var d = a[f];
    if (d && d.Math == Math) return d
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (a, f, d, k) {
  if (f) {
    d = $jscomp.global;
    a = a.split(".");
    for (k = 0; k < a.length - 1; k++) {
      var g = a[k];
      g in d || (d[g] = {});
      d = d[g]
    }
    a = a[a.length - 1];
    k = d[a];
    f = f(k);
    f != k && null != f && $jscomp.defineProperty(d, a, {
      configurable: !0,
      writable: !0,
      value: f
    })
  }
};
$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (a, d) {
    return $jscomp.findInternal(this, a, d).v
  }
}, "es6", "es3");
(function (a) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (f) {
    return a(f, window, document)
  }) : "object" === typeof exports ? module.exports = function (f, d) {
    f || (f = window);
    d && d.fn.dataTable || (d = require("datatables.net")(f, d).$);
    return a(d, f, f.document)
  } : a(jQuery, window, document)
})(function (a, f, d, k) {
  var g = a.fn.dataTable,
    h = function (b, e) {
      if (!g.versionCheck || !g.versionCheck("1.10.8")) throw "DataTables RowReorder requires DataTables 1.10.8 or newer";
      this.c = a.extend(!0, {}, g.defaults.rowReorder,
        h.defaults, e);
      this.s = {
        bodyTop: null,
        dt: new g.Api(b),
        getDataFn: g.ext.oApi._fnGetObjectDataFn(this.c.dataSrc),
        middles: null,
        scroll: {},
        scrollInterval: null,
        setDataFn: g.ext.oApi._fnSetObjectDataFn(this.c.dataSrc),
        start: {
          top: 0,
          left: 0,
          offsetTop: 0,
          offsetLeft: 0,
          nodes: []
        },
        windowHeight: 0,
        documentOuterHeight: 0,
        domCloneOuterHeight: 0
      };
      this.dom = {
        clone: null,
        dtScroll: a("div.dataTables_scrollBody", this.s.dt.table().container())
      };
      b = this.s.dt.settings()[0];
      if (e = b.rowreorder) return e;
      this.dom.dtScroll.length || (this.dom.dtScroll =
        a(this.s.dt.table().container(), "tbody"));
      b.rowreorder = this;
      this._constructor()
    };
  a.extend(h.prototype, {
    _constructor: function () {
      var b = this,
        e = this.s.dt,
        c = a(e.table().node());
      "static" === c.css("position") && c.css("position", "relative");
      a(e.table().container()).on("mousedown.rowReorder touchstart.rowReorder", this.c.selector, function (c) {
        if (b.c.enable) {
          if (a(c.target).is(b.c.excludedChildren)) return !0;
          var d = a(this).closest("tr"),
            f = e.row(d);
          if (f.any()) return b._emitEvent("pre-row-reorder", {
              node: f.node(),
              index: f.index()
            }),
            b._mouseDown(c, d), !1
        }
      });
      e.on("destroy.rowReorder", function () {
        a(e.table().container()).off(".rowReorder");
        e.off(".rowReorder")
      })
    },
    _cachePositions: function () {
      var b = this.s.dt,
        e = a(b.table().node()).find("thead").outerHeight(),
        c = a.unique(b.rows({
          page: "current"
        }).nodes().toArray());
      c = a.map(c, function (b, c) {
        c = a(b).position().top - e;
        return (c + c + a(b).outerHeight()) / 2
      });
      this.s.middles = c;
      this.s.bodyTop = a(b.table().body()).offset().top;
      this.s.windowHeight = a(f).height();
      this.s.documentOuterHeight = a(d).outerHeight()
    },
    _clone: function (b) {
      var e = a(this.s.dt.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(b.clone(!1)),
        c = b.outerWidth(),
        d = b.outerHeight(),
        f = b.children().map(function () {
          return a(this).width()
        });
      e.width(c).height(d).find("tr").children().each(function (a) {
        this.style.width = f[a] + "px"
      });
      e.appendTo("body");
      this.dom.clone = e;
      this.s.domCloneOuterHeight = e.outerHeight()
    },
    _clonePosition: function (a) {
      var b = this.s.start,
        c = this._eventToPage(a, "Y") - b.top;
      a = this._eventToPage(a, "X") -
        b.left;
      var d = this.c.snapX;
      c += b.offsetTop;
      b = !0 === d ? b.offsetLeft : "number" === typeof d ? b.offsetLeft + d : a + b.offsetLeft;
      0 > c ? c = 0 : c + this.s.domCloneOuterHeight > this.s.documentOuterHeight && (c = this.s.documentOuterHeight - this.s.domCloneOuterHeight);
      this.dom.clone.css({
        top: c,
        left: b
      })
    },
    _emitEvent: function (b, e) {
      this.s.dt.iterator("table", function (c, d) {
        a(c.nTable).triggerHandler(b + ".dt", e)
      })
    },
    _eventToPage: function (a, e) {
      return -1 !== a.type.indexOf("touch") ? a.originalEvent.touches[0]["page" + e] : a["page" + e]
    },
    _mouseDown: function (b,
      e) {
      var c = this,
        w = this.s.dt,
        g = this.s.start,
        n = e.offset();
      g.top = this._eventToPage(b, "Y");
      g.left = this._eventToPage(b, "X");
      g.offsetTop = n.top;
      g.offsetLeft = n.left;
      g.nodes = a.unique(w.rows({
        page: "current"
      }).nodes().toArray());
      this._cachePositions();
      this._clone(e);
      this._clonePosition(b);
      this.dom.target = e;
      e.addClass("dt-rowReorder-moving");
      a(d).on("mouseup.rowReorder touchend.rowReorder", function (a) {
        c._mouseUp(a)
      }).on("mousemove.rowReorder touchmove.rowReorder", function (a) {
        c._mouseMove(a)
      });
      a(f).width() === a(d).width() &&
        a(d.body).addClass("dt-rowReorder-noOverflow");
      b = this.dom.dtScroll;
      this.s.scroll = {
        windowHeight: a(f).height(),
        windowWidth: a(f).width(),
        dtTop: b.length ? b.offset().top : null,
        dtLeft: b.length ? b.offset().left : null,
        dtHeight: b.length ? b.outerHeight() : null,
        dtWidth: b.length ? b.outerWidth() : null
      }
    },
    _mouseMove: function (b) {
      this._clonePosition(b);
      for (var e = this._eventToPage(b, "Y") - this.s.bodyTop, c = this.s.middles, d = null, f = this.s.dt, g = 0, m = c.length; g < m; g++)
        if (e < c[g]) {
          d = g;
          break
        } null === d && (d = c.length);
      if (null === this.s.lastInsert ||
        this.s.lastInsert !== d) e = a.unique(f.rows({
        page: "current"
      }).nodes().toArray()), d > this.s.lastInsert ? this.dom.target.insertAfter(e[d - 1]) : this.dom.target.insertBefore(e[d]), this._cachePositions(), this.s.lastInsert = d;
      this._shiftScroll(b)
    },
    _mouseUp: function (b) {
      var e = this,
        c = this.s.dt,
        f, g = this.c.dataSrc;
      this.dom.clone.remove();
      this.dom.clone = null;
      this.dom.target.removeClass("dt-rowReorder-moving");
      a(d).off(".rowReorder");
      a(d.body).removeClass("dt-rowReorder-noOverflow");
      clearInterval(this.s.scrollInterval);
      this.s.scrollInterval = null;
      var n = this.s.start.nodes,
        m = a.unique(c.rows({
          page: "current"
        }).nodes().toArray()),
        k = {},
        h = [],
        p = [],
        q = this.s.getDataFn,
        x = this.s.setDataFn;
      var l = 0;
      for (f = n.length; l < f; l++)
        if (n[l] !== m[l]) {
          var r = c.row(m[l]).id(),
            y = c.row(m[l]).data(),
            t = c.row(n[l]).data();
          r && (k[r] = q(t));
          h.push({
            node: m[l],
            oldData: q(y),
            newData: q(t),
            newPosition: l,
            oldPosition: a.inArray(m[l], n)
          });
          p.push(m[l])
        } var u = [h, {
        dataSrc: g,
        nodes: p,
        values: k,
        triggerRow: c.row(this.dom.target),
        originalEvent: b
      }];
      this._emitEvent("row-reorder",
        u);
      var v = function () {
        if (e.c.update) {
          l = 0;
          for (f = h.length; l < f; l++) {
            var a = c.row(h[l].node).data();
            x(a, h[l].newData);
            c.columns().every(function () {
              this.dataSrc() === g && c.cell(h[l].node, this.index()).invalidate("data")
            })
          }
          e._emitEvent("row-reordered", u);
          c.draw(!1)
        }
      };
      this.c.editor ? (this.c.enable = !1, this.c.editor.edit(p, !1, a.extend({
        submit: "changed"
      }, this.c.formOptions)).multiSet(g, k).one("preSubmitCancelled.rowReorder", function () {
        e.c.enable = !0;
        e.c.editor.off(".rowReorder");
        c.draw(!1)
      }).one("submitUnsuccessful.rowReorder",
        function () {
          c.draw(!1)
        }).one("submitSuccess.rowReorder", function () {
        v()
      }).one("submitComplete", function () {
        e.c.enable = !0;
        e.c.editor.off(".rowReorder")
      }).submit()) : v()
    },
    _shiftScroll: function (b) {
      var e = this,
        c = this.s.scroll,
        g = !1,
        h = b.pageY - d.body.scrollTop,
        k, m;
      h < a(f).scrollTop() + 65 ? k = -5 : h > c.windowHeight + a(f).scrollTop() - 65 && (k = 5);
      null !== c.dtTop && b.pageY < c.dtTop + 65 ? m = -5 : null !== c.dtTop && b.pageY > c.dtTop + c.dtHeight - 65 && (m = 5);
      k || m ? (c.windowVert = k, c.dtVert = m, g = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval),
        this.s.scrollInterval = null);
      !this.s.scrollInterval && g && (this.s.scrollInterval = setInterval(function () {
        if (c.windowVert) {
          var b = a(d).scrollTop();
          a(d).scrollTop(b + c.windowVert);
          b !== a(d).scrollTop() && (b = parseFloat(e.dom.clone.css("top")), e.dom.clone.css("top", b + c.windowVert))
        }
        c.dtVert && (b = e.dom.dtScroll[0], c.dtVert && (b.scrollTop += c.dtVert))
      }, 20))
    }
  });
  h.defaults = {
    dataSrc: 0,
    editor: null,
    enable: !0,
    formOptions: {},
    selector: "td:first-child",
    snapX: !1,
    update: !0,
    excludedChildren: "a"
  };
  var p = a.fn.dataTable.Api;
  p.register("rowReorder()",
    function () {
      return this
    });
  p.register("rowReorder.enable()", function (a) {
    a === k && (a = !0);
    return this.iterator("table", function (b) {
      b.rowreorder && (b.rowreorder.c.enable = a)
    })
  });
  p.register("rowReorder.disable()", function () {
    return this.iterator("table", function (a) {
      a.rowreorder && (a.rowreorder.c.enable = !1)
    })
  });
  h.version = "1.2.6";
  a.fn.dataTable.RowReorder = h;
  a.fn.DataTable.RowReorder = h;
  a(d).on("init.dt.dtr", function (b, d, c) {
    "dt" === b.namespace && (b = d.oInit.rowReorder, c = g.defaults.rowReorder, b || c) && (c = a.extend({}, b,
      c), !1 !== b && new h(d, c))
  });
  return h
});


/*!
 Bootstrap 4 styling wrapper for RowReorder
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-rowreorder"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.RowReorder || require("datatables.net-rowreorder")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, d) {
  return c.fn.dataTable
});


/*!
   Copyright 2011-2020 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 Scroller 2.0.3
 ©2011-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (d, f, g) {
  d instanceof String && (d = String(d));
  for (var h = d.length, k = 0; k < h; k++) {
    var m = d[k];
    if (f.call(g, m, k, d)) return {
      i: k,
      v: m
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (d, f, g) {
  if (d == Array.prototype || d == Object.prototype) return d;
  d[f] = g.value;
  return d
};
$jscomp.getGlobal = function (d) {
  d = ["object" == typeof globalThis && globalThis, d, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var f = 0; f < d.length; ++f) {
    var g = d[f];
    if (g && g.Math == Math) return g
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (d, f) {
  var g = $jscomp.propertyToPolyfillSymbol[f];
  if (null == g) return d[f];
  g = d[g];
  return void 0 !== g ? g : d[f]
};
$jscomp.polyfill = function (d, f, g, h) {
  f && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(d, f, g, h) : $jscomp.polyfillUnisolated(d, f, g, h))
};
$jscomp.polyfillUnisolated = function (d, f, g, h) {
  g = $jscomp.global;
  d = d.split(".");
  for (h = 0; h < d.length - 1; h++) {
    var k = d[h];
    if (!(k in g)) return;
    g = g[k]
  }
  d = d[d.length - 1];
  h = g[d];
  f = f(h);
  f != h && null != f && $jscomp.defineProperty(g, d, {
    configurable: !0,
    writable: !0,
    value: f
  })
};
$jscomp.polyfillIsolated = function (d, f, g, h) {
  var k = d.split(".");
  d = 1 === k.length;
  h = k[0];
  h = !d && h in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var m = 0; m < k.length - 1; m++) {
    var q = k[m];
    if (!(q in h)) return;
    h = h[q]
  }
  k = k[k.length - 1];
  g = $jscomp.IS_SYMBOL_NATIVE && "es6" === g ? h[k] : null;
  f = f(g);
  null != f && (d ? $jscomp.defineProperty($jscomp.polyfills, k, {
    configurable: !0,
    writable: !0,
    value: f
  }) : f !== g && ($jscomp.propertyToPolyfillSymbol[k] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(k) : $jscomp.POLYFILL_PREFIX + k, k =
    $jscomp.propertyToPolyfillSymbol[k], $jscomp.defineProperty(h, k, {
      configurable: !0,
      writable: !0,
      value: f
    })))
};
$jscomp.polyfill("Array.prototype.find", function (d) {
  return d ? d : function (f, g) {
    return $jscomp.findInternal(this, f, g).v
  }
}, "es6", "es3");
(function (d) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (f) {
    return d(f, window, document)
  }) : "object" === typeof exports ? module.exports = function (f, g) {
    f || (f = window);
    g && g.fn.dataTable || (g = require("datatables.net")(f, g).$);
    return d(g, f, f.document)
  } : d(jQuery, window, document)
})(function (d, f, g, h) {
  var k = d.fn.dataTable,
    m = function (a, b) {
      this instanceof m ? (b === h && (b = {}), a = d.fn.dataTable.Api(a), this.s = {
          dt: a.settings()[0],
          dtApi: a,
          tableTop: 0,
          tableBottom: 0,
          redrawTop: 0,
          redrawBottom: 0,
          autoHeight: !0,
          viewportRows: 0,
          stateTO: null,
          stateSaveThrottle: function () {},
          drawTO: null,
          heights: {
            jump: null,
            page: null,
            virtual: null,
            scroll: null,
            row: null,
            viewport: null,
            labelFactor: 1
          },
          topRowFloat: 0,
          scrollDrawDiff: null,
          loaderVisible: !1,
          forceReposition: !1,
          baseRowTop: 0,
          baseScrollTop: 0,
          mousedown: !1,
          lastScrollTop: 0
        }, this.s = d.extend(this.s, m.oDefaults, b), this.s.heights.row = this.s.rowHeight, this.dom = {
          force: g.createElement("div"),
          label: d('<div class="dts_label">0</div>'),
          scroller: null,
          table: null,
          loader: null
        }, this.s.dt.oScroller ||
        (this.s.dt.oScroller = this, this.construct())) : alert("Scroller warning: Scroller must be initialised with the 'new' keyword.")
    };
  d.extend(m.prototype, {
    measure: function (a) {
      this.s.autoHeight && this._calcRowHeight();
      var b = this.s.heights;
      b.row && (b.viewport = this._parseHeight(d(this.dom.scroller).css("max-height")), this.s.viewportRows = parseInt(b.viewport / b.row, 10) + 1, this.s.dt._iDisplayLength = this.s.viewportRows * this.s.displayBuffer);
      var c = this.dom.label.outerHeight();
      b.labelFactor = (b.viewport - c) / b.scroll;
      (a ===
        h || a) && this.s.dt.oInstance.fnDraw(!1)
    },
    pageInfo: function () {
      var a = this.dom.scroller.scrollTop,
        b = this.s.dt.fnRecordsDisplay(),
        c = Math.ceil(this.pixelsToRow(a + this.s.heights.viewport, !1, this.s.ani));
      return {
        start: Math.floor(this.pixelsToRow(a, !1, this.s.ani)),
        end: b < c ? b - 1 : c - 1
      }
    },
    pixelsToRow: function (a, b, c) {
      a -= this.s.baseScrollTop;
      c = c ? (this._domain("physicalToVirtual", this.s.baseScrollTop) + a) / this.s.heights.row : a / this.s.heights.row + this.s.baseRowTop;
      return b || b === h ? parseInt(c, 10) : c
    },
    rowToPixels: function (a,
      b, c) {
      a -= this.s.baseRowTop;
      c = c ? this._domain("virtualToPhysical", this.s.baseScrollTop) : this.s.baseScrollTop;
      c += a * this.s.heights.row;
      return b || b === h ? parseInt(c, 10) : c
    },
    scrollToRow: function (a, b) {
      var c = this,
        e = !1,
        l = this.rowToPixels(a),
        n = a - (this.s.displayBuffer - 1) / 2 * this.s.viewportRows;
      0 > n && (n = 0);
      (l > this.s.redrawBottom || l < this.s.redrawTop) && this.s.dt._iDisplayStart !== n && (e = !0, l = this._domain("virtualToPhysical", a * this.s.heights.row), this.s.redrawTop < l && l < this.s.redrawBottom && (this.s.forceReposition = !0, b = !1));
      b === h || b ? (this.s.ani = e, d(this.dom.scroller).animate({
        scrollTop: l
      }, function () {
        setTimeout(function () {
          c.s.ani = !1
        }, 250)
      })) : d(this.dom.scroller).scrollTop(l)
    },
    construct: function () {
      var a = this,
        b = this.s.dtApi;
      if (this.s.dt.oFeatures.bPaginate) {
        this.dom.force.style.position = "relative";
        this.dom.force.style.top = "0px";
        this.dom.force.style.left = "0px";
        this.dom.force.style.width = "1px";
        this.dom.scroller = d("div." + this.s.dt.oClasses.sScrollBody, this.s.dt.nTableWrapper)[0];
        this.dom.scroller.appendChild(this.dom.force);
        this.dom.scroller.style.position = "relative";
        this.dom.table = d(">table", this.dom.scroller)[0];
        this.dom.table.style.position = "absolute";
        this.dom.table.style.top = "0px";
        this.dom.table.style.left = "0px";
        d(b.table().container()).addClass("dts DTS");
        this.s.loadingIndicator && (this.dom.loader = d('<div class="dataTables_processing dts_loading">' + this.s.dt.oLanguage.sLoadingRecords + "</div>").css("display", "none"), d(this.dom.scroller.parentNode).css("position", "relative").append(this.dom.loader));
        this.dom.label.appendTo(this.dom.scroller);
        this.s.heights.row && "auto" != this.s.heights.row && (this.s.autoHeight = !1);
        this.s.ingnoreScroll = !0;
        d(this.dom.scroller).on("scroll.dt-scroller", function (l) {
          a._scroll.call(a)
        });
        d(this.dom.scroller).on("touchstart.dt-scroller", function () {
          a._scroll.call(a)
        });
        d(this.dom.scroller).on("mousedown.dt-scroller", function () {
          a.s.mousedown = !0
        }).on("mouseup.dt-scroller", function () {
          a.s.labelVisible = !1;
          a.s.mousedown = !1;
          a.dom.label.css("display", "none")
        });
        d(f).on("resize.dt-scroller", function () {
          a.measure(!1);
          a._info()
        });
        var c = !0,
          e = b.state.loaded();
        b.on("stateSaveParams.scroller", function (l, n, p) {
          c && e ? (p.scroller = e.scroller, c = !1) : p.scroller = {
            topRow: a.s.topRowFloat,
            baseScrollTop: a.s.baseScrollTop,
            baseRowTop: a.s.baseRowTop,
            scrollTop: a.s.lastScrollTop
          }
        });
        e && e.scroller && (this.s.topRowFloat = e.scroller.topRow, this.s.baseScrollTop = e.scroller.baseScrollTop, this.s.baseRowTop = e.scroller.baseRowTop);
        this.measure(!1);
        a.s.stateSaveThrottle = a.s.dt.oApi._fnThrottle(function () {
          a.s.dtApi.state.save()
        }, 500);
        b.on("init.scroller", function () {
          a.measure(!1);
          a.s.scrollType = "jump";
          a._draw();
          b.on("draw.scroller", function () {
            a._draw()
          })
        });
        b.on("preDraw.dt.scroller", function () {
          a._scrollForce()
        });
        b.on("destroy.scroller", function () {
          d(f).off("resize.dt-scroller");
          d(a.dom.scroller).off(".dt-scroller");
          d(a.s.dt.nTable).off(".scroller");
          d(a.s.dt.nTableWrapper).removeClass("DTS");
          d("div.DTS_Loading", a.dom.scroller.parentNode).remove();
          a.dom.table.style.position = "";
          a.dom.table.style.top = "";
          a.dom.table.style.left = ""
        })
      } else this.s.dt.oApi._fnLog(this.s.dt, 0, "Pagination must be enabled for Scroller")
    },
    _calcRowHeight: function () {
      var a = this.s.dt,
        b = a.nTable,
        c = b.cloneNode(!1),
        e = d("<tbody/>").appendTo(c),
        l = d('<div class="' + a.oClasses.sWrapper + ' DTS"><div class="' + a.oClasses.sScrollWrapper + '"><div class="' + a.oClasses.sScrollBody + '"></div></div></div>');
      d("tbody tr:lt(4)", b).clone().appendTo(e);
      var n = d("tr", e).length;
      if (1 === n) e.prepend("<tr><td>&#160;</td></tr>"), e.append("<tr><td>&#160;</td></tr>");
      else
        for (; 3 > n; n++) e.append("<tr><td>&#160;</td></tr>");
      d("div." + a.oClasses.sScrollBody, l).append(c);
      a = this.s.dt.nHolding ||
        b.parentNode;
      d(a).is(":visible") || (a = "body");
      l.find("input").removeAttr("name");
      l.appendTo(a);
      this.s.heights.row = d("tr", e).eq(1).outerHeight();
      l.remove()
    },
    _draw: function () {
      var a = this,
        b = this.s.heights,
        c = this.dom.scroller.scrollTop,
        e = d(this.s.dt.nTable).height(),
        l = this.s.dt._iDisplayStart,
        n = this.s.dt._iDisplayLength,
        p = this.s.dt.fnRecordsDisplay();
      this.s.skip = !0;
      !this.s.dt.bSorted && !this.s.dt.bFiltered || 0 !== l || this.s.dt._drawHold || (this.s.topRowFloat = 0);
      c = "jump" === this.s.scrollType ? this._domain("virtualToPhysical",
        this.s.topRowFloat * b.row) : c;
      this.s.baseScrollTop = c;
      this.s.baseRowTop = this.s.topRowFloat;
      var r = c - (this.s.topRowFloat - l) * b.row;
      0 === l ? r = 0 : l + n >= p && (r = b.scroll - e);
      this.dom.table.style.top = r + "px";
      this.s.tableTop = r;
      this.s.tableBottom = e + this.s.tableTop;
      e = (c - this.s.tableTop) * this.s.boundaryScale;
      this.s.redrawTop = c - e;
      this.s.redrawBottom = c + e > b.scroll - b.viewport - b.row ? b.scroll - b.viewport - b.row : c + e;
      this.s.skip = !1;
      this.s.dt.oFeatures.bStateSave && null !== this.s.dt.oLoadedState && "undefined" != typeof this.s.dt.oLoadedState.scroller ?
        ((b = !this.s.dt.sAjaxSource && !a.s.dt.ajax || this.s.dt.oFeatures.bServerSide ? !1 : !0) && 2 == this.s.dt.iDraw || !b && 1 == this.s.dt.iDraw) && setTimeout(function () {
          d(a.dom.scroller).scrollTop(a.s.dt.oLoadedState.scroller.scrollTop);
          setTimeout(function () {
            a.s.ingnoreScroll = !1
          }, 0)
        }, 0) : a.s.ingnoreScroll = !1;
      this.s.dt.oFeatures.bInfo && setTimeout(function () {
        a._info.call(a)
      }, 0);
      this.dom.loader && this.s.loaderVisible && (this.dom.loader.css("display", "none"), this.s.loaderVisible = !1)
    },
    _domain: function (a, b) {
      var c = this.s.heights;
      if (c.virtual === c.scroll || 1E4 > b) return b;
      if ("virtualToPhysical" === a && b >= c.virtual - 1E4) return a = c.virtual - b, c.scroll - a;
      if ("physicalToVirtual" === a && b >= c.scroll - 1E4) return a = c.scroll - b, c.virtual - a;
      c = (c.virtual - 1E4 - 1E4) / (c.scroll - 1E4 - 1E4);
      var e = 1E4 - 1E4 * c;
      return "virtualToPhysical" === a ? (b - e) / c : c * b + e
    },
    _info: function () {
      if (this.s.dt.oFeatures.bInfo) {
        var a = this.s.dt,
          b = a.oLanguage,
          c = this.dom.scroller.scrollTop,
          e = Math.floor(this.pixelsToRow(c, !1, this.s.ani) + 1),
          l = a.fnRecordsTotal(),
          n = a.fnRecordsDisplay();
        c = Math.ceil(this.pixelsToRow(c +
          this.s.heights.viewport, !1, this.s.ani));
        c = n < c ? n : c;
        var p = a.fnFormatNumber(e),
          r = a.fnFormatNumber(c),
          t = a.fnFormatNumber(l),
          u = a.fnFormatNumber(n);
        p = 0 === a.fnRecordsDisplay() && a.fnRecordsDisplay() == a.fnRecordsTotal() ? b.sInfoEmpty + b.sInfoPostFix : 0 === a.fnRecordsDisplay() ? b.sInfoEmpty + " " + b.sInfoFiltered.replace("_MAX_", t) + b.sInfoPostFix : a.fnRecordsDisplay() == a.fnRecordsTotal() ? b.sInfo.replace("_START_", p).replace("_END_", r).replace("_MAX_", t).replace("_TOTAL_", u) + b.sInfoPostFix : b.sInfo.replace("_START_",
          p).replace("_END_", r).replace("_MAX_", t).replace("_TOTAL_", u) + " " + b.sInfoFiltered.replace("_MAX_", a.fnFormatNumber(a.fnRecordsTotal())) + b.sInfoPostFix;
        (b = b.fnInfoCallback) && (p = b.call(a.oInstance, a, e, c, l, n, p));
        e = a.aanFeatures.i;
        if ("undefined" != typeof e)
          for (l = 0, n = e.length; l < n; l++) d(e[l]).html(p);
        d(a.nTable).triggerHandler("info.dt")
      }
    },
    _parseHeight: function (a) {
      var b, c = /^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(px|em|rem|vh)$/.exec(a);
      if (null === c) return 0;
      a = parseFloat(c[1]);
      c = c[2];
      "px" === c ? b = a : "vh" === c ? b = a / 100 *
        d(f).height() : "rem" === c ? b = a * parseFloat(d(":root").css("font-size")) : "em" === c && (b = a * parseFloat(d("body").css("font-size")));
      return b ? b : 0
    },
    _scroll: function () {
      var a = this,
        b = this.s.heights,
        c = this.dom.scroller.scrollTop;
      if (!this.s.skip && !this.s.ingnoreScroll && c !== this.s.lastScrollTop)
        if (this.s.dt.bFiltered || this.s.dt.bSorted) this.s.lastScrollTop = 0;
        else {
          this._info();
          clearTimeout(this.s.stateTO);
          this.s.stateTO = setTimeout(function () {
            a.s.dtApi.state.save()
          }, 250);
          this.s.scrollType = Math.abs(c - this.s.lastScrollTop) >
            b.viewport ? "jump" : "cont";
          this.s.topRowFloat = "cont" === this.s.scrollType ? this.pixelsToRow(c, !1, !1) : this._domain("physicalToVirtual", c) / b.row;
          0 > this.s.topRowFloat && (this.s.topRowFloat = 0);
          if (this.s.forceReposition || c < this.s.redrawTop || c > this.s.redrawBottom) {
            var e = Math.ceil((this.s.displayBuffer - 1) / 2 * this.s.viewportRows);
            e = parseInt(this.s.topRowFloat, 10) - e;
            this.s.forceReposition = !1;
            0 >= e ? e = 0 : e + this.s.dt._iDisplayLength > this.s.dt.fnRecordsDisplay() ? (e = this.s.dt.fnRecordsDisplay() - this.s.dt._iDisplayLength,
              0 > e && (e = 0)) : 0 !== e % 2 && e++;
            this.s.targetTop = e;
            e != this.s.dt._iDisplayStart && (this.s.tableTop = d(this.s.dt.nTable).offset().top, this.s.tableBottom = d(this.s.dt.nTable).height() + this.s.tableTop, e = function () {
              a.s.dt._iDisplayStart = a.s.targetTop;
              a.s.dt.oApi._fnDraw(a.s.dt)
            }, this.s.dt.oFeatures.bServerSide ? (this.s.forceReposition = !0, clearTimeout(this.s.drawTO), this.s.drawTO = setTimeout(e, this.s.serverWait)) : e(), this.dom.loader && !this.s.loaderVisible && (this.dom.loader.css("display", "block"), this.s.loaderVisible = !0))
          } else this.s.topRowFloat = this.pixelsToRow(c, !1, !0);
          this.s.lastScrollTop = c;
          this.s.stateSaveThrottle();
          "jump" === this.s.scrollType && this.s.mousedown && (this.s.labelVisible = !0);
          this.s.labelVisible && this.dom.label.html(this.s.dt.fnFormatNumber(parseInt(this.s.topRowFloat, 10) + 1)).css("top", c + c * b.labelFactor).css("display", "block")
        }
    },
    _scrollForce: function () {
      var a = this.s.heights;
      a.virtual = a.row * this.s.dt.fnRecordsDisplay();
      a.scroll = a.virtual;
      1E6 < a.scroll && (a.scroll = 1E6);
      this.dom.force.style.height = a.scroll >
        this.s.heights.row ? a.scroll + "px" : this.s.heights.row + "px"
    }
  });
  m.defaults = {
    boundaryScale: .5,
    displayBuffer: 9,
    loadingIndicator: !1,
    rowHeight: "auto",
    serverWait: 200
  };
  m.oDefaults = m.defaults;
  m.version = "2.0.3";
  d(g).on("preInit.dt.dtscroller", function (a, b) {
    if ("dt" === a.namespace) {
      a = b.oInit.scroller;
      var c = k.defaults.scroller;
      if (a || c) c = d.extend({}, a, c), !1 !== a && new m(b, c)
    }
  });
  d.fn.dataTable.Scroller = m;
  d.fn.DataTable.Scroller = m;
  var q = d.fn.dataTable.Api;
  q.register("scroller()", function () {
    return this
  });
  q.register("scroller().rowToPixels()",
    function (a, b, c) {
      var e = this.context;
      if (e.length && e[0].oScroller) return e[0].oScroller.rowToPixels(a, b, c)
    });
  q.register("scroller().pixelsToRow()", function (a, b, c) {
    var e = this.context;
    if (e.length && e[0].oScroller) return e[0].oScroller.pixelsToRow(a, b, c)
  });
  q.register(["scroller().scrollToRow()", "scroller.toPosition()"], function (a, b) {
    this.iterator("table", function (c) {
      c.oScroller && c.oScroller.scrollToRow(a, b)
    });
    return this
  });
  q.register("row().scrollTo()", function (a) {
    var b = this;
    this.iterator("row", function (c,
      e) {
      c.oScroller && (e = b.rows({
        order: "applied",
        search: "applied"
      }).indexes().indexOf(e), c.oScroller.scrollToRow(e, a))
    });
    return this
  });
  q.register("scroller.measure()", function (a) {
    this.iterator("table", function (b) {
      b.oScroller && b.oScroller.measure(a)
    });
    return this
  });
  q.register("scroller.page()", function () {
    var a = this.context;
    if (a.length && a[0].oScroller) return a[0].oScroller.pageInfo()
  });
  return m
});


/*!
 Bootstrap 4 styling wrapper for Scroller
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-scroller"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.Scroller || require("datatables.net-scroller")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, d) {
  return c.fn.dataTable
});


/*!
 DateTime picker for DataTables.net v0.0.8

 ©2020 SpryMedia Ltd, all rights reserved.
 License: MIT datatables.net/license/mit
 SearchBuilder 1.0.0
 ©2020 SpryMedia Ltd - datatables.net/license/mit
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function (k, p, r) {
  k instanceof String && (k = String(k));
  for (var f = k.length, x = 0; x < f; x++) {
    var y = k[x];
    if (p.call(r, y, x, k)) return {
      i: x,
      v: y
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (k, p, r) {
  if (k == Array.prototype || k == Object.prototype) return k;
  k[p] = r.value;
  return k
};
$jscomp.getGlobal = function (k) {
  k = ["object" == typeof globalThis && globalThis, k, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var p = 0; p < k.length; ++p) {
    var r = k[p];
    if (r && r.Math == Math) return r
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (k, p) {
  var r = $jscomp.propertyToPolyfillSymbol[p];
  if (null == r) return k[p];
  r = k[r];
  return void 0 !== r ? r : k[p]
};
$jscomp.polyfill = function (k, p, r, f) {
  p && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(k, p, r, f) : $jscomp.polyfillUnisolated(k, p, r, f))
};
$jscomp.polyfillUnisolated = function (k, p, r, f) {
  r = $jscomp.global;
  k = k.split(".");
  for (f = 0; f < k.length - 1; f++) {
    var x = k[f];
    if (!(x in r)) return;
    r = r[x]
  }
  k = k[k.length - 1];
  f = r[k];
  p = p(f);
  p != f && null != p && $jscomp.defineProperty(r, k, {
    configurable: !0,
    writable: !0,
    value: p
  })
};
$jscomp.polyfillIsolated = function (k, p, r, f) {
  var x = k.split(".");
  k = 1 === x.length;
  f = x[0];
  f = !k && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var y = 0; y < x.length - 1; y++) {
    var C = x[y];
    if (!(C in f)) return;
    f = f[C]
  }
  x = x[x.length - 1];
  r = $jscomp.IS_SYMBOL_NATIVE && "es6" === r ? f[x] : null;
  p = p(r);
  null != p && (k ? $jscomp.defineProperty($jscomp.polyfills, x, {
    configurable: !0,
    writable: !0,
    value: p
  }) : p !== r && ($jscomp.propertyToPolyfillSymbol[x] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(x) : $jscomp.POLYFILL_PREFIX + x, x =
    $jscomp.propertyToPolyfillSymbol[x], $jscomp.defineProperty(f, x, {
      configurable: !0,
      writable: !0,
      value: p
    })))
};
$jscomp.polyfill("Array.prototype.find", function (k) {
  return k ? k : function (p, r) {
    return $jscomp.findInternal(this, p, r).v
  }
}, "es6", "es3");
$jscomp.checkEs6ConformanceViaProxy = function () {
  try {
    var k = {},
      p = Object.create(new $jscomp.global.Proxy(k, {
        get: function (r, f, x) {
          return r == k && "q" == f && x == p
        }
      }));
    return !0 === p.q
  } catch (r) {
    return !1
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.arrayIteratorImpl = function (k) {
  var p = 0;
  return function () {
    return p < k.length ? {
      done: !1,
      value: k[p++]
    } : {
      done: !0
    }
  }
};
$jscomp.arrayIterator = function (k) {
  return {
    next: $jscomp.arrayIteratorImpl(k)
  }
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill("Symbol", function (k) {
  if (k) return k;
  var p = function (x, y) {
    this.$jscomp$symbol$id_ = x;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: y
    })
  };
  p.prototype.toString = function () {
    return this.$jscomp$symbol$id_
  };
  var r = 0,
    f = function (x) {
      if (this instanceof f) throw new TypeError("Symbol is not a constructor");
      return new p("jscomp_symbol_" + (x || "") + "_" + r++, x)
    };
  return f
}, "es6", "es3");
$jscomp.initSymbolIterator = function () {};
$jscomp.polyfill("Symbol.iterator", function (k) {
    if (k) return k;
    k = Symbol("Symbol.iterator");
    for (var p = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), r = 0; r < p.length; r++) {
      var f = $jscomp.global[p[r]];
      "function" === typeof f && "function" != typeof f.prototype[k] && $jscomp.defineProperty(f.prototype, k, {
        configurable: !0,
        writable: !0,
        value: function () {
          return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
      })
    }
    return k
  }, "es6",
  "es3");
$jscomp.initSymbolAsyncIterator = function () {};
$jscomp.iteratorPrototype = function (k) {
  k = {
    next: k
  };
  k[Symbol.iterator] = function () {
    return this
  };
  return k
};
$jscomp.makeIterator = function (k) {
  var p = "undefined" != typeof Symbol && Symbol.iterator && k[Symbol.iterator];
  return p ? p.call(k) : $jscomp.arrayIterator(k)
};
$jscomp.owns = function (k, p) {
  return Object.prototype.hasOwnProperty.call(k, p)
};
$jscomp.polyfill("WeakMap", function (k) {
  function p() {
    if (!k || !Object.seal) return !1;
    try {
      var t = Object.seal({}),
        n = Object.seal({}),
        z = new k([
          [t, 2],
          [n, 3]
        ]);
      if (2 != z.get(t) || 3 != z.get(n)) return !1;
      z.delete(t);
      z.set(n, 4);
      return !z.has(t) && 4 == z.get(n)
    } catch (K) {
      return !1
    }
  }

  function r() {}

  function f(t) {
    var n = typeof t;
    return "object" === n && null !== t || "function" === n
  }

  function x(t) {
    if (!$jscomp.owns(t, C)) {
      var n = new r;
      $jscomp.defineProperty(t, C, {
        value: n
      })
    }
  }

  function y(t) {
    if (!$jscomp.ISOLATE_POLYFILLS) {
      var n = Object[t];
      n && (Object[t] =
        function (z) {
          if (z instanceof r) return z;
          Object.isExtensible(z) && x(z);
          return n(z)
        })
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (k && $jscomp.ES6_CONFORMANCE) return k
  } else if (p()) return k;
  var C = "$jscomp_hidden_" + Math.random();
  y("freeze");
  y("preventExtensions");
  y("seal");
  var q = 0,
    u = function (t) {
      this.id_ = (q += Math.random() + 1).toString();
      if (t) {
        t = $jscomp.makeIterator(t);
        for (var n; !(n = t.next()).done;) n = n.value, this.set(n[0], n[1])
      }
    };
  u.prototype.set = function (t, n) {
    if (!f(t)) throw Error("Invalid WeakMap key");
    x(t);
    if (!$jscomp.owns(t, C)) throw Error("WeakMap key fail: " + t);
    t[C][this.id_] = n;
    return this
  };
  u.prototype.get = function (t) {
    return f(t) && $jscomp.owns(t, C) ? t[C][this.id_] : void 0
  };
  u.prototype.has = function (t) {
    return f(t) && $jscomp.owns(t, C) && $jscomp.owns(t[C], this.id_)
  };
  u.prototype.delete = function (t) {
    return f(t) && $jscomp.owns(t, C) && $jscomp.owns(t[C], this.id_) ? delete t[C][this.id_] : !1
  };
  return u
}, "es6", "es3");
$jscomp.MapEntry = function () {};
$jscomp.polyfill("Map", function (k) {
  function p() {
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !k || "function" != typeof k || !k.prototype.entries || "function" != typeof Object.seal) return !1;
    try {
      var u = Object.seal({
          x: 4
        }),
        t = new k($jscomp.makeIterator([
          [u, "s"]
        ]));
      if ("s" != t.get(u) || 1 != t.size || t.get({
          x: 4
        }) || t.set({
          x: 4
        }, "t") != t || 2 != t.size) return !1;
      var n = t.entries(),
        z = n.next();
      if (z.done || z.value[0] != u || "s" != z.value[1]) return !1;
      z = n.next();
      return z.done || 4 != z.value[0].x || "t" != z.value[1] || !n.next().done ? !1 : !0
    } catch (K) {
      return !1
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (k && $jscomp.ES6_CONFORMANCE) return k
  } else if (p()) return k;
  var r = new WeakMap,
    f = function (u) {
      this.data_ = {};
      this.head_ = C();
      this.size = 0;
      if (u) {
        u = $jscomp.makeIterator(u);
        for (var t; !(t = u.next()).done;) t = t.value, this.set(t[0], t[1])
      }
    };
  f.prototype.set = function (u, t) {
    u = 0 === u ? 0 : u;
    var n = x(this, u);
    n.list || (n.list = this.data_[n.id] = []);
    n.entry ? n.entry.value = t : (n.entry = {
        next: this.head_,
        previous: this.head_.previous,
        head: this.head_,
        key: u,
        value: t
      }, n.list.push(n.entry),
      this.head_.previous.next = n.entry, this.head_.previous = n.entry, this.size++);
    return this
  };
  f.prototype.delete = function (u) {
    u = x(this, u);
    return u.entry && u.list ? (u.list.splice(u.index, 1), u.list.length || delete this.data_[u.id], u.entry.previous.next = u.entry.next, u.entry.next.previous = u.entry.previous, u.entry.head = null, this.size--, !0) : !1
  };
  f.prototype.clear = function () {
    this.data_ = {};
    this.head_ = this.head_.previous = C();
    this.size = 0
  };
  f.prototype.has = function (u) {
    return !!x(this, u).entry
  };
  f.prototype.get = function (u) {
    return (u =
      x(this, u).entry) && u.value
  };
  f.prototype.entries = function () {
    return y(this, function (u) {
      return [u.key, u.value]
    })
  };
  f.prototype.keys = function () {
    return y(this, function (u) {
      return u.key
    })
  };
  f.prototype.values = function () {
    return y(this, function (u) {
      return u.value
    })
  };
  f.prototype.forEach = function (u, t) {
    for (var n = this.entries(), z; !(z = n.next()).done;) z = z.value, u.call(t, z[1], z[0], this)
  };
  f.prototype[Symbol.iterator] = f.prototype.entries;
  var x = function (u, t) {
      var n = t && typeof t;
      "object" == n || "function" == n ? r.has(t) ? n = r.get(t) :
        (n = "" + ++q, r.set(t, n)) : n = "p_" + t;
      var z = u.data_[n];
      if (z && $jscomp.owns(u.data_, n))
        for (u = 0; u < z.length; u++) {
          var K = z[u];
          if (t !== t && K.key !== K.key || t === K.key) return {
            id: n,
            list: z,
            index: u,
            entry: K
          }
        }
      return {
        id: n,
        list: z,
        index: -1,
        entry: void 0
      }
    },
    y = function (u, t) {
      var n = u.head_;
      return $jscomp.iteratorPrototype(function () {
        if (n) {
          for (; n.head != u.head_;) n = n.previous;
          for (; n.next != n.head;) return n = n.next, {
            done: !1,
            value: t(n)
          };
          n = null
        }
        return {
          done: !0,
          value: void 0
        }
      })
    },
    C = function () {
      var u = {};
      return u.previous = u.next = u.head = u
    },
    q = 0;
  return f
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (k) {
  return k ? k : function (p, r, f) {
    r = null != r ? r : function (q) {
      return q
    };
    var x = [],
      y = "undefined" != typeof Symbol && Symbol.iterator && p[Symbol.iterator];
    if ("function" == typeof y) {
      p = y.call(p);
      for (var C = 0; !(y = p.next()).done;) x.push(r.call(f, y.value, C++))
    } else
      for (y = p.length, C = 0; C < y; C++) x.push(r.call(f, p[C], C));
    return x
  }
}, "es6", "es3");
$jscomp.iteratorFromArray = function (k, p) {
  k instanceof String && (k += "");
  var r = 0,
    f = {
      next: function () {
        if (r < k.length) {
          var x = r++;
          return {
            value: p(x, k[x]),
            done: !1
          }
        }
        f.next = function () {
          return {
            done: !0,
            value: void 0
          }
        };
        return f.next()
      }
    };
  f[Symbol.iterator] = function () {
    return f
  };
  return f
};
$jscomp.polyfill("Array.prototype.keys", function (k) {
  return k ? k : function () {
    return $jscomp.iteratorFromArray(this, function (p) {
      return p
    })
  }
}, "es6", "es3");
$jscomp.polyfill("Object.is", function (k) {
  return k ? k : function (p, r) {
    return p === r ? 0 !== p || 1 / p === 1 / r : p !== p && r !== r
  }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function (k) {
  return k ? k : function (p, r) {
    var f = this;
    f instanceof String && (f = String(f));
    var x = f.length;
    r = r || 0;
    for (0 > r && (r = Math.max(r + x, 0)); r < x; r++) {
      var y = f[r];
      if (y === p || Object.is(y, p)) return !0
    }
    return !1
  }
}, "es7", "es3");
$jscomp.checkStringArgs = function (k, p, r) {
  if (null == k) throw new TypeError("The 'this' value for String.prototype." + r + " must not be null or undefined");
  if (p instanceof RegExp) throw new TypeError("First argument to String.prototype." + r + " must not be a regular expression");
  return k + ""
};
$jscomp.polyfill("String.prototype.includes", function (k) {
  return k ? k : function (p, r) {
    return -1 !== $jscomp.checkStringArgs(this, p, "includes").indexOf(p, r || 0)
  }
}, "es6", "es3");
(function () {
  function k(c) {
    f = c;
    x = c.fn.dataTable
  }

  function p(c) {
    q = c;
    u = c.fn.dataTable
  }

  function r(c) {
    n = c;
    z = c.fn.DataTable
  }(function (c) {
    "function" === typeof define && define.amd ? define(["jquery"], function (a) {
      return c(a, window, document)
    }) : "object" === typeof exports ? module.exports = function (a, b) {
      a || (a = window);
      return c(b, a, a.document)
    } : c(jQuery, window, document)
  })(function (c, a, b, e) {
    var g = a.moment ? a.moment : a.dayjs ? a.dayjs : null,
      l = function (d, h) {
        this.c = c.extend(!0, {}, l.defaults, h);
        h = this.c.classPrefix;
        var m = this.c.i18n;
        if (!g && "YYYY-MM-DD" !== this.c.format) throw "DateTime: Without momentjs or dayjs only the format 'YYYY-MM-DD' can be used";
        "string" === typeof this.c.minDate && (this.c.minDate = new Date(this.c.minDate));
        "string" === typeof this.c.maxDate && (this.c.maxDate = new Date(this.c.maxDate));
        m = c('<div class="' + h + '"><div class="' + h + '-date"><div class="' + h + '-title"><div class="' + h + '-iconLeft"><button>' + m.previous + '</button></div><div class="' + h + '-iconRight"><button>' + m.next + '</button></div><div class="' + h + '-label"><span></span><select class="' +
          h + '-month"></select></div><div class="' + h + '-label"><span></span><select class="' + h + '-year"></select></div></div><div class="' + h + '-calendar"></div></div><div class="' + h + '-time"><div class="' + h + '-hours"></div><div class="' + h + '-minutes"></div><div class="' + h + '-seconds"></div></div><div class="' + h + '-error"></div></div>');
        this.dom = {
          container: m,
          date: m.find("." + h + "-date"),
          title: m.find("." + h + "-title"),
          calendar: m.find("." + h + "-calendar"),
          time: m.find("." + h + "-time"),
          error: m.find("." + h + "-error"),
          input: c(d)
        };
        this.s = {
          d: null,
          display: null,
          minutesRange: null,
          secondsRange: null,
          namespace: "dateime-" + l._instance++,
          parts: {
            date: null !== this.c.format.match(/[YMD]|L(?!T)|l/),
            time: null !== this.c.format.match(/[Hhm]|LT|LTS/),
            seconds: -1 !== this.c.format.indexOf("s"),
            hours12: null !== this.c.format.match(/[haA]/)
          }
        };
        this.dom.container.append(this.dom.date).append(this.dom.time).append(this.dom.error);
        this.dom.date.append(this.dom.title).append(this.dom.calendar);
        this._constructor()
      };
    c.extend(l.prototype, {
      destroy: function () {
        this._hide();
        this.dom.container.off().empty();
        this.dom.input.off(".datetime")
      },
      errorMsg: function (d) {
        var h = this.dom.error;
        d ? h.html(d) : h.empty();
        return this
      },
      hide: function () {
        this._hide();
        return this
      },
      max: function (d) {
        this.c.maxDate = "string" === typeof d ? new Date(d) : d;
        this._optionsTitle();
        this._setCalander();
        return this
      },
      min: function (d) {
        this.c.minDate = "string" === typeof d ? new Date(d) : d;
        this._optionsTitle();
        this._setCalander();
        return this
      },
      owns: function (d) {
        return 0 < c(d).parents().filter(this.dom.container).length
      },
      val: function (d,
        h) {
        if (d === e) return this.s.d;
        if (d instanceof Date) this.s.d = this._dateToUtc(d);
        else if (null === d || "" === d) this.s.d = null;
        else if ("--now" === d) this.s.d = new Date;
        else if ("string" === typeof d)
          if (g) {
            var m = g.utc(d, this.c.format, this.c.locale, this.c.strict);
            this.s.d = m.isValid() ? m.toDate() : null
          } else m = d.match(/(\d{4})\-(\d{2})\-(\d{2})/), this.s.d = m ? new Date(Date.UTC(m[1], m[2] - 1, m[3])) : null;
        if (h || h === e) this.s.d ? this._writeOutput() : this.dom.input.val(d);
        this.s.d || (this.s.d = this._dateToUtc(new Date));
        this.s.display =
          new Date(this.s.d.toString());
        this.s.display.setUTCDate(1);
        this._setTitle();
        this._setCalander();
        this._setTime();
        return this
      },
      _constructor: function () {
        var d = this,
          h = this.c.classPrefix,
          m = function () {
            d.c.onChange.call(d, d.dom.input.val(), d.s.d, d.dom.input)
          };
        this.s.parts.date || this.dom.date.css("display", "none");
        this.s.parts.time || this.dom.time.css("display", "none");
        this.s.parts.seconds || (this.dom.time.children("div." + h + "-seconds").remove(), this.dom.time.children("span").eq(1).remove());
        this._optionsTitle();
        this.dom.input.attr("autocomplete", "off").on("focus.datetime click.datetime", function () {
          d.dom.container.is(":visible") || d.dom.input.is(":disabled") || (d.val(d.dom.input.val(), !1), d._show())
        }).on("keyup.datetime", function () {
          d.dom.container.is(":visible") && d.val(d.dom.input.val(), !1)
        });
        this.dom.container.on("change", "select", function () {
          var v = c(this),
            w = v.val();
          v.hasClass(h + "-month") ? (d._correctMonth(d.s.display, w), d._setTitle(), d._setCalander()) : v.hasClass(h + "-year") ? (d.s.display.setUTCFullYear(w), d._setTitle(),
            d._setCalander()) : v.hasClass(h + "-hours") || v.hasClass(h + "-ampm") ? (d.s.parts.hours12 ? (v = 1 * c(d.dom.container).find("." + h + "-hours").val(), w = "pm" === c(d.dom.container).find("." + h + "-ampm").val(), d.s.d.setUTCHours(12 !== v || w ? w && 12 !== v ? v + 12 : v : 0)) : d.s.d.setUTCHours(w), d._setTime(), d._writeOutput(!0), m()) : v.hasClass(h + "-minutes") ? (d.s.d.setUTCMinutes(w), d._setTime(), d._writeOutput(!0), m()) : v.hasClass(h + "-seconds") && (d.s.d.setSeconds(w), d._setTime(), d._writeOutput(!0), m());
          d.dom.input.focus();
          d._position()
        }).on("click",
          function (v) {
            var w = d.s.d,
              A = v.target.nodeName.toLowerCase(),
              B = "span" === A ? v.target.parentNode : v.target;
            A = B.nodeName.toLowerCase();
            if ("select" !== A)
              if (v.stopPropagation(), "button" === A)
                if (B = c(B), v = B.parent(), v.hasClass("disabled") && !v.hasClass("range")) B.blur();
                else if (v.hasClass(h + "-iconLeft")) d.s.display.setUTCMonth(d.s.display.getUTCMonth() - 1), d._setTitle(), d._setCalander(), d.dom.input.focus();
            else if (v.hasClass(h + "-iconRight")) d._correctMonth(d.s.display, d.s.display.getUTCMonth() + 1), d._setTitle(), d._setCalander(),
              d.dom.input.focus();
            else {
              if (B.parents("." + h + "-time").length) {
                A = B.data("value");
                B = B.data("unit");
                if ("minutes" === B) {
                  if (v.hasClass("disabled") && v.hasClass("range")) {
                    d.s.minutesRange = A;
                    d._setTime();
                    return
                  }
                  d.s.minutesRange = null
                }
                if ("seconds" === B) {
                  if (v.hasClass("disabled") && v.hasClass("range")) {
                    d.s.secondsRange = A;
                    d._setTime();
                    return
                  }
                  d.s.secondsRange = null
                }
                if ("am" === A)
                  if (12 <= w.getUTCHours()) A = w.getUTCHours() - 12;
                  else return;
                else if ("pm" === A)
                  if (12 > w.getUTCHours()) A = w.getUTCHours() + 12;
                  else return;
                w["hours" ===
                  B ? "setUTCHours" : "minutes" === B ? "setUTCMinutes" : "setSeconds"](A);
                d._setTime();
                d._writeOutput(!0)
              } else w || (w = d._dateToUtc(new Date)), w.setUTCDate(1), w.setUTCFullYear(B.data("year")), w.setUTCMonth(B.data("month")), w.setUTCDate(B.data("day")), d._writeOutput(!0), d.s.parts.time ? d._setCalander() : setTimeout(function () {
                d._hide()
              }, 10);
              m()
            } else d.dom.input.focus()
          })
      },
      _compareDates: function (d, h) {
        return this._dateToUtcString(d) === this._dateToUtcString(h)
      },
      _correctMonth: function (d, h) {
        var m = this._daysInMonth(d.getUTCFullYear(),
            h),
          v = d.getUTCDate() > m;
        d.setUTCMonth(h);
        v && (d.setUTCDate(m), d.setUTCMonth(h))
      },
      _daysInMonth: function (d, h) {
        return [31, 0 !== d % 4 || 0 === d % 100 && 0 !== d % 400 ? 28 : 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][h]
      },
      _dateToUtc: function (d) {
        return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()))
      },
      _dateToUtcString: function (d) {
        return d.getUTCFullYear() + "-" + this._pad(d.getUTCMonth() + 1) + "-" + this._pad(d.getUTCDate())
      },
      _hide: function () {
        var d = this.s.namespace;
        this.dom.container.detach();
        c(a).off("." + d);
        c(b).off("keydown." + d);
        c("div.dataTables_scrollBody").off("scroll." + d);
        c("div.DTE_Body_Content").off("scroll." + d);
        c("body").off("click." + d)
      },
      _hours24To12: function (d) {
        return 0 === d ? 12 : 12 < d ? d - 12 : d
      },
      _htmlDay: function (d) {
        if (d.empty) return '<td class="empty"></td>';
        var h = ["selectable"],
          m = this.c.classPrefix;
        d.disabled && h.push("disabled");
        d.today && h.push("now");
        d.selected && h.push("selected");
        return '<td data-day="' + d.day + '" class="' + h.join(" ") + '"><button class="' + m + "-button " + m + '-day" type="button" data-year="' +
          d.year + '" data-month="' + d.month + '" data-day="' + d.day + '"><span>' + d.day + "</span></button></td>"
      },
      _htmlMonth: function (d, h) {
        var m = this._dateToUtc(new Date),
          v = this._daysInMonth(d, h),
          w = (new Date(Date.UTC(d, h, 1))).getUTCDay(),
          A = [],
          B = [];
        0 < this.c.firstDay && (w -= this.c.firstDay, 0 > w && (w += 7));
        for (var G = v + w, E = G; 7 < E;) E -= 7;
        G += 7 - E;
        var H = this.c.minDate;
        E = this.c.maxDate;
        H && (H.setUTCHours(0), H.setUTCMinutes(0), H.setSeconds(0));
        E && (E.setUTCHours(23), E.setUTCMinutes(59), E.setSeconds(59));
        for (var D = 0, F = 0; D < G; D++) {
          var I =
            new Date(Date.UTC(d, h, 1 + (D - w))),
            N = this.s.d ? this._compareDates(I, this.s.d) : !1,
            J = this._compareDates(I, m),
            O = D < w || D >= v + w,
            M = H && I < H || E && I > E,
            L = this.c.disableDays;
          c.isArray(L) && -1 !== c.inArray(I.getUTCDay(), L) ? M = !0 : "function" === typeof L && !0 === L(I) && (M = !0);
          B.push(this._htmlDay({
            day: 1 + (D - w),
            month: h,
            year: d,
            selected: N,
            today: J,
            disabled: M,
            empty: O
          }));
          7 === ++F && (this.c.showWeekNumber && B.unshift(this._htmlWeekOfYear(D - w, h, d)), A.push("<tr>" + B.join("") + "</tr>"), B = [], F = 0)
        }
        m = this.c.classPrefix;
        v = m + "-table";
        this.c.showWeekNumber &&
          (v += " weekNumber");
        H && (H = H >= new Date(Date.UTC(d, h, 1, 0, 0, 0)), this.dom.title.find("div." + m + "-iconLeft").css("display", H ? "none" : "block"));
        E && (d = E < new Date(Date.UTC(d, h + 1, 1, 0, 0, 0)), this.dom.title.find("div." + m + "-iconRight").css("display", d ? "none" : "block"));
        return '<table class="' + v + '"><thead>' + this._htmlMonthHead() + "</thead><tbody>" + A.join("") + "</tbody></table>"
      },
      _htmlMonthHead: function () {
        var d = [],
          h = this.c.firstDay,
          m = this.c.i18n,
          v = function (A) {
            for (A += h; 7 <= A;) A -= 7;
            return m.weekdays[A]
          };
        this.c.showWeekNumber &&
          d.push("<th></th>");
        for (var w = 0; 7 > w; w++) d.push("<th>" + v(w) + "</th>");
        return d.join("")
      },
      _htmlWeekOfYear: function (d, h, m) {
        d = new Date(m, h, d, 0, 0, 0, 0);
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        return '<td class="' + this.c.classPrefix + '-week">' + Math.ceil(((d - new Date(m, 0, 1)) / 864E5 + 1) / 7) + "</td>"
      },
      _options: function (d, h, m) {
        m || (m = h);
        d = this.dom.container.find("select." + this.c.classPrefix + "-" + d);
        d.empty();
        for (var v = 0, w = h.length; v < w; v++) d.append('<option value="' + h[v] + '">' + m[v] + "</option>")
      },
      _optionSet: function (d,
        h) {
        var m = this.dom.container.find("select." + this.c.classPrefix + "-" + d);
        d = m.parent().children("span");
        m.val(h);
        h = m.find("option:selected");
        d.html(0 !== h.length ? h.text() : this.c.i18n.unknown)
      },
      _optionsTime: function (d, h, m, v, w) {
        var A = this.c.classPrefix,
          B = this.dom.container.find("div." + A + "-" + d),
          G = 12 === h ? function (J) {
            return J
          } : this._pad;
        A = this.c.classPrefix;
        var E = A + "-table",
          H = this.c.i18n;
        if (B.length) {
          var D = "";
          var F = 10;
          var I = function (J, O, M) {
            12 === h && 12 <= m && "number" === typeof J && (J += 12);
            var L = m === J || "am" === J && 12 >
              m || "pm" === J && 12 <= m ? "selected" : "";
            v && -1 === c.inArray(J, v) && (L += " disabled");
            M && (L += " " + M);
            return '<td class="selectable ' + L + '"><button class="' + A + "-button " + A + '-day" type="button" data-unit="' + d + '" data-value="' + J + '"><span>' + O + "</span></button></td>"
          };
          if (12 === h) {
            D += "<tr>";
            for (w = 1; 6 >= w; w++) D += I(w, G(w));
            D += I("am", H.amPm[0]);
            D += "</tr><tr>";
            for (w = 7; 12 >= w; w++) D += I(w, G(w));
            D += I("pm", H.amPm[1]);
            D += "</tr>";
            F = 7
          } else {
            if (24 === h) {
              var N = 0;
              for (F = 0; 4 > F; F++) {
                D += "<tr>";
                for (w = 0; 6 > w; w++) D += I(N, G(N)), N++;
                D += "</tr>"
              }
            } else {
              D +=
                "<tr>";
              for (F = 0; 60 > F; F += 10) D += I(F, G(F), "range");
              w = null !== w ? w : 10 * Math.floor(m / 10);
              D = D + '</tr></tbody></thead><table class="' + (E + " " + E + '-nospace"><tbody><tr>');
              for (F = w + 1; F < w + 10; F++) D += I(F, G(F));
              D += "</tr>"
            }
            F = 6
          }
          B.empty().append('<table class="' + E + '"><thead><tr><th colspan="' + F + '">' + H[d] + "</th></tr></thead><tbody>" + D + "</tbody></table>")
        }
      },
      _optionsTitle: function () {
        var d = this.c.i18n,
          h = this.c.minDate,
          m = this.c.maxDate;
        h = h ? h.getFullYear() : null;
        m = m ? m.getFullYear() : null;
        h = null !== h ? h : (new Date).getFullYear() - this.c.yearRange;
        m = null !== m ? m : (new Date).getFullYear() + this.c.yearRange;
        this._options("month", this._range(0, 11), d.months);
        this._options("year", this._range(h, m))
      },
      _pad: function (d) {
        return 10 > d ? "0" + d : d
      },
      _position: function () {
        var d = "input" === this.c.attachTo ? this.dom.input.position() : this.dom.input.offset(),
          h = this.dom.container,
          m = this.dom.input.outerHeight();
        this.s.parts.date && this.s.parts.time && 550 < c(a).width() ? h.addClass("horizontal") : h.removeClass("horizontal");
        "input" === this.c.attachTo ? h.css({
            top: d.top + m,
            left: d.left
          }).insertAfter(this.dom.input) :
          h.css({
            top: d.top + m,
            left: d.left
          }).appendTo("body");
        var v = h.outerHeight(),
          w = h.outerWidth(),
          A = c(a).scrollTop();
        d.top + m + v - A > c(a).height() && (m = d.top - v, h.css("top", 0 > m ? 0 : m));
        w + d.left > c(a).width() && (d = c(a).width() - w, h.css("left", 0 > d ? 0 : d))
      },
      _range: function (d, h, m) {
        var v = [];
        for (m || (m = 1); d <= h; d += m) v.push(d);
        return v
      },
      _setCalander: function () {
        this.s.display && this.dom.calendar.empty().append(this._htmlMonth(this.s.display.getUTCFullYear(), this.s.display.getUTCMonth()))
      },
      _setTitle: function () {
        this._optionSet("month",
          this.s.display.getUTCMonth());
        this._optionSet("year", this.s.display.getUTCFullYear())
      },
      _setTime: function () {
        var d = this,
          h = this.s.d,
          m = h ? h.getUTCHours() : 0,
          v = function (w) {
            return d.c[w + "Available"] ? d.c[w + "Available"] : d._range(0, 59, d.c[w + "Increment"])
          };
        this._optionsTime("hours", this.s.parts.hours12 ? 12 : 24, m, this.c.hoursAvailable);
        this._optionsTime("minutes", 60, h ? h.getUTCMinutes() : 0, v("minutes"), this.s.minutesRange);
        this._optionsTime("seconds", 60, h ? h.getSeconds() : 0, v("seconds"), this.s.secondsRange)
      },
      _show: function () {
        var d =
          this,
          h = this.s.namespace;
        this._position();
        c(a).on("scroll." + h + " resize." + h, function () {
          d._hide()
        });
        c("div.DTE_Body_Content").on("scroll." + h, function () {
          d._hide()
        });
        c("div.dataTables_scrollBody").on("scroll." + h, function () {
          d._hide()
        });
        var m = this.dom.input[0].offsetParent;
        if (m !== b.body) c(m).on("scroll." + h, function () {
          d._hide()
        });
        c(b).on("keydown." + h, function (v) {
          9 !== v.keyCode && 27 !== v.keyCode && 13 !== v.keyCode || d._hide()
        });
        setTimeout(function () {
          c("body").on("click." + h, function (v) {
            c(v.target).parents().filter(d.dom.container).length ||
              v.target === d.dom.input[0] || d._hide()
          })
        }, 10)
      },
      _writeOutput: function (d) {
        var h = this.s.d,
          m = g ? g.utc(h, e, this.c.locale, this.c.strict).format(this.c.format) : h.getUTCFullYear() + "-" + this._pad(h.getUTCMonth() + 1) + "-" + this._pad(h.getUTCDate());
        this.dom.input.val(m).trigger("change", {
          write: h
        });
        d && this.dom.input.focus()
      }
    });
    l.use = function (d) {
      g = d
    };
    l._instance = 0;
    l.defaults = {
      attachTo: "body",
      classPrefix: "dt-datetime",
      disableDays: null,
      firstDay: 1,
      format: "YYYY-MM-DD",
      hoursAvailable: null,
      i18n: {
        previous: "Previous",
        next: "Next",
        months: "January February March April May June July August September October November December".split(" "),
        weekdays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
        amPm: ["am", "pm"],
        hours: "Hour",
        minutes: "Minute",
        seconds: "Second",
        unknown: "-"
      },
      maxDate: null,
      minDate: null,
      minutesAvailable: null,
      minutesIncrement: 1,
      strict: !0,
      locale: "en",
      onChange: function () {},
      secondsAvailable: null,
      secondsIncrement: 1,
      showWeekNumber: !1,
      yearRange: 25
    };
    a.DateTime || (a.DateTime = l);
    c.fn.dtDateTime = function (d) {
      return this.each(function () {
        new l(this,
          d)
      })
    };
    c.dataTable && (c.dataTable.DateTime = l, c.DataTable.DateTime = l);
    return l
  });
  var f, x, y = window.moment,
    C = function () {
      function c(a, b, e, g, l) {
        var d = this;
        void 0 === g && (g = 0);
        void 0 === l && (l = 1);
        if (!x || !x.versionCheck || !x.versionCheck("1.10.0")) throw Error("SearchPane requires DataTables 1.10 or newer");
        this.classes = f.extend(!0, {}, c.classes);
        this.c = f.extend(!0, {}, c.defaults, f.fn.dataTable.ext.searchBuilder, b);
        this.s = {
          condition: void 0,
          conditions: new Map,
          data: void 0,
          dataIdx: -1,
          dataPoints: [],
          depth: l,
          dt: a,
          filled: !1,
          index: g,
          momentFormat: !1,
          topGroup: e,
          type: "",
          value: []
        };
        this.dom = {
          buttons: f("<div/>").addClass(this.classes.buttonContainer),
          condition: f("<select disabled/>").addClass(this.classes.condition).addClass(this.classes.dropDown).addClass(this.classes.italic),
          conditionTitle: f('<option value="" disabled selected hidden/>').text(this.s.dt.i18n("searchBuilder.condition", "Condition")),
          container: f("<div/>").addClass(this.classes.container),
          data: f("<select/>").addClass(this.classes.data).addClass(this.classes.dropDown).addClass(this.classes.italic),
          dataTitle: f('<option value="" disabled selected hidden/>').text(this.s.dt.i18n("searchBuilder.data", "Data")),
          defaultValue: f("<select disabled/>").addClass(this.classes.value).addClass(this.classes.dropDown),
          "delete": f("<button>&times</button>").addClass(this.classes["delete"]).addClass(this.classes.button).attr("title", this.s.dt.i18n("searchBuilder.deleteTitle", "Delete filtering rule")),
          left: f("<button><</button>").addClass(this.classes.left).addClass(this.classes.button).attr("title", this.s.dt.i18n("searchBuilder.leftTitle",
            "Outdent criteria")),
          right: f("<button>></button>").addClass(this.classes.right).addClass(this.classes.button).attr("title", this.s.dt.i18n("searchBuilder.rightTitle", "Indent criteria")),
          value: [f("<select disabled/>").addClass(this.classes.value).addClass(this.classes.dropDown).addClass(this.classes.italic)],
          valueTitle: f('<option value="" disabled selected hidden/>').text(this.s.dt.i18n("searchBuilder.value", "Value"))
        };
        if (this.c.greyscale)
          for (f(this.dom.data).addClass(this.classes.greyscale), f(this.dom.condition).addClass(this.classes.greyscale),
            a = 0, b = this.dom.value; a < b.length; a++) f(b[a]).addClass(this.classes.greyscale);
        this.s.dt.on("draw.dtsp", function () {
          d._adjustCriteria()
        });
        this.s.dt.on("buttons-action", function () {
          d._adjustCriteria()
        });
        f(window).on("resize.dtsp", x.util.throttle(function () {
          d._adjustCriteria()
        }));
        this._buildCriteria();
        return this
      }
      c.prototype.updateArrows = function (a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = !0);
        f(this.dom.container).empty().append(this.dom.data).append(this.dom.condition).append(this.dom.value[0]);
        f(this.dom.value[0]).trigger("dtsb-inserted");
        for (var e = 1; e < this.dom.value.length; e++) f(this.dom.container).append(this.dom.value[e]), f(this.dom.value[e]).trigger("dtsb-inserted");
        1 < this.s.depth && f(this.dom.buttons).append(this.dom.left);
        (!1 === this.c.depthLimit || this.s.depth < this.c.depthLimit) && a && f(this.dom.buttons).append(this.dom.right);
        f(this.dom.buttons).append(this.dom["delete"]);
        f(this.dom.container).append(this.dom.buttons);
        b && this._adjustCriteria()
      };
      c.prototype.destroy = function () {
        f(this.dom.data).off(".dtsb");
        f(this.dom.condition).off(".dtsb");
        f(this.dom["delete"]).off(".dtsb");
        for (var a = 0, b = this.dom.value; a < b.length; a++) f(b[a]).off(".dtsb");
        f(this.dom.container).remove()
      };
      c.prototype.search = function (a) {
        var b = this.s.conditions.get(this.s.condition);
        if (void 0 !== this.s.condition && void 0 !== b) return b.search(a[this.s.dataIdx], this.s.value, this)
      };
      c.prototype.getDetails = function () {
        return {
          condition: this.s.condition,
          data: this.s.data,
          value: this.s.value
        }
      };
      c.prototype.getNode = function () {
        return this.dom.container
      };
      c.prototype.populate = function () {
        this._populateData(); -
        1 !== this.s.dataIdx && (this._populateCondition(), void 0 !== this.s.condition && this._populateValue())
      };
      c.prototype.rebuild = function (a) {
        var b = !1,
          e;
        this._populateData();
        if (void 0 !== a.data) {
          var g = this.classes.italic,
            l = this.dom.data;
          f(this.dom.data).children("option").each(function () {
            f(this).text() === a.data && (f(this).attr("selected", !0), f(l).removeClass(g), b = !0, e = f(this).val())
          })
        }
        if (b) {
          this.s.data = a.data;
          this.s.dataIdx = e;
          f(this.dom.dataTitle).remove();
          this._populateCondition();
          f(this.dom.conditionTitle).remove();
          var d;
          f(this.dom.condition).children("option").each(function () {
            void 0 !== a.condition && f(this).val() === a.condition && "string" === typeof a.condition && (f(this).attr("selected", !0), d = f(this).val())
          });
          this.s.condition = d;
          void 0 !== this.s.condition ? (f(this.dom.conditionTitle).remove(), f(this.dom.condition).removeClass(this.classes.italic), this._populateValue(a)) : f(this.dom.conditionTitle).prependTo(this.dom.condition).attr("selected", !0)
        }
      };
      c.prototype.setListeners = function () {
        var a = this;
        f(this.dom.data).unbind("input").on("input",
          function () {
            f(a.dom.dataTitle).attr("selected", !1);
            f(a.dom.data).removeClass(a.classes.italic);
            a.s.dataIdx = f(a.dom.data).children("option:selected").val();
            a.s.data = f(a.dom.data).children("option:selected").text();
            a._clearCondition();
            a._clearValue();
            a._populateCondition();
            a.s.filled && (a.s.filled = !1, a.s.dt.draw(), a.setListeners());
            a.s.dt.state.save()
          });
        f(this.dom.condition).unbind("input").on("input", function () {
          f(a.dom.conditionTitle).attr("selected", !1);
          f(a.dom.condition).removeClass(a.classes.italic);
          for (var b = f(a.dom.condition).children("option:selected").val(), e = 0, g = Array.from(a.s.conditions.keys()); e < g.length; e++)
            if (g[e] === b) {
              a.s.condition = b;
              break
            } a._clearValue();
          a._populateValue();
          b = 0;
          for (e = a.dom.value; b < e.length; b++) g = e[b], a.s.filled && 0 !== f(a.dom.container).has(g).length && (a.s.filled = !1, a.s.dt.draw(), a.setListeners());
          a.s.dt.draw()
        })
      };
      c.prototype._adjustCriteria = function () {
        if (0 !== f(document).has(this.dom.container).length) {
          var a = this.dom.value[this.dom.value.length - 1];
          if (0 !== f(this.dom.container).has(a).length) {
            var b =
              f(a).outerWidth(!0);
            a = f(a).offset().left + b;
            var e = f(this.dom.left).offset(),
              g = f(this.dom.right).offset(),
              l = f(this.dom["delete"]).offset(),
              d = 0 !== f(this.dom.container).has(this.dom.left).length,
              h = 0 !== f(this.dom.container).has(this.dom.right).length,
              m = d ? e.left : h ? g.left : l.left;
            15 > m - a || d && e.top !== l.top || h && g.top !== l.top ? (f(this.dom.container).parent().addClass(this.classes.vertical), f(this.s.topGroup).trigger("dtsb-redrawContents")) : 15 < m - (f(this.dom.data).offset().left + f(this.dom.data).outerWidth(!0) + f(this.dom.condition).outerWidth(!0) +
              b) && (f(this.dom.container).parent().removeClass(this.classes.vertical), f(this.s.topGroup).trigger("dtsb-redrawContents"))
          }
        }
      };
      c.prototype._buildCriteria = function () {
        f(this.dom.data).append(this.dom.dataTitle);
        f(this.dom.condition).append(this.dom.conditionTitle);
        f(this.dom.container).append(this.dom.data).append(this.dom.condition);
        for (var a = 0, b = this.dom.value; a < b.length; a++) {
          var e = b[a];
          f(e).append(this.dom.valueTitle);
          f(this.dom.container).append(e)
        }
        f(this.dom.container).append(this.dom["delete"]).append(this.dom.right);
        this.setListeners()
      };
      c.prototype._clearCondition = function () {
        f(this.dom.condition).empty();
        f(this.dom.conditionTitle).attr("selected", !0).attr("disabled", !0);
        f(this.dom.condition).append(this.dom.conditionTitle);
        this.s.conditions = new Map;
        this.s.condition = void 0
      };
      c.prototype._clearValue = function () {
        if (void 0 !== this.s.condition) {
          for (var a = 0, b = this.dom.value; a < b.length; a++) {
            var e = b[a];
            f(e).remove()
          }
          e = this.s.conditions.get(this.s.condition).init(this, c.updateListener);
          this.dom.value = Array.isArray(e) ? e : [e];
          f(this.dom.value[0]).insertAfter(this.dom.condition).trigger("dtsb-inserted");
          for (e = 1; e < this.dom.value.length; e++) f(this.dom.value[e]).insertAfter(this.dom.value[e - 1]).trigger("dtsb-inserted")
        } else {
          a = 0;
          for (b = this.dom.value; a < b.length; a++) e = b[a], f(e).remove();
          f(this.dom.valueTitle).attr("selected", !0).attr("disabled", !1);
          f(this.dom.defaultValue).append(this.dom.valueTitle).insertAfter(this.dom.condition)
        }
        this.s.value = []
      };
      c.prototype._populateCondition = function () {
        var a = [];
        if (0 === this.s.conditions.size) {
          var b =
            f(this.dom.data).children("option:selected").val();
          this.s.type = this.s.dt.columns().type().toArray()[b];
          null === this.s.type && (this.s.dt.draw(), this.setListeners(), this.s.type = this.s.dt.columns().type().toArray()[b]);
          f(this.dom.condition).attr("disabled", !1).empty().append(this.dom.conditionTitle).addClass(this.classes.italic);
          f(this.dom.conditionTitle).attr("selected", !0);
          var e = void 0 !== this.c.conditions[this.s.type] ? this.c.conditions[this.s.type] : -1 !== this.s.type.indexOf("moment") && void 0 !== f.fn.dataTable.moment ?
            this.c.conditions.moment : this.c.conditions.string; - 1 !== this.s.type.indexOf("moment") && (this.s.momentFormat = this.s.type.replace(/moment\-/g, ""));
          for (var g = 0, l = Object.keys(e); g < l.length; g++) b = l[g], null !== e[b] && (this.s.conditions.set(b, e[b]), a.push(f("<option>", {
            text: e[b].conditionName,
            value: b
          }).addClass(this.classes.option).addClass(this.classes.notItalic)))
        } else if (0 < this.s.conditions.size)
          for (f(this.dom.condition).empty().attr("disabled", !1).addClass(this.classes.italic), e = 0, g = Array.from(this.s.conditions.keys()); e <
            g.length; e++) b = g[e], l = this.s.conditions.get(b).conditionName, b = f("<option>", {
            text: l,
            value: b
          }).addClass(this.classes.option).addClass(this.classes.notItalic), void 0 !== this.s.condition && this.s.condition === l && (f(b).attr("selected", !0), f(this.dom.condition).removeClass(this.classes.italic)), a.push(b);
        else {
          f(this.dom.condition).attr("disabled", !0).addClass(this.classes.italic);
          return
        }
        a.sort(function (d, h) {
          return f(d).val() < f(h).val() ? -1 : f(d).val() < f(h).val() ? 1 : 0
        });
        for (b = 0; b < a.length; b++) e = a[b], f(this.dom.condition).append(e)
      };
      c.prototype._populateData = function () {
        var a = this;
        f(this.dom.data).empty().append(this.dom.dataTitle);
        if (0 === this.s.dataPoints.length) this.s.dt.columns().every(function (d) {
          if (!0 === a.c.columns || -1 !== a.s.dt.columns(a.c.columns).indexes().toArray().indexOf(d)) {
            for (var h = !1, m = 0, v = a.s.dataPoints; m < v.length; m++)
              if (v[m].index === d) {
                h = !0;
                break
              } h || (d = {
              text: a.s.dt.settings()[0].aoColumns[d].sTitle,
              index: d
            }, a.s.dataPoints.push(d), f(a.dom.data).append(f("<option>", {
              text: d.text,
              value: d.index
            }).addClass(a.classes.option).addClass(a.classes.notItalic)))
          }
        });
        else
          for (var b = function (d) {
              e.s.dt.columns().every(function (m) {
                a.s.dt.settings()[0].aoColumns[m].sTitle === d.text && (d.index = m)
              });
              var h = f("<option>", {
                text: d.text,
                value: d.index
              }).addClass(e.classes.option).addClass(e.classes.notItalic);
              e.s.data === d.text && (e.s.dataIdx = d.index, f(h).attr("selected", !0), f(e.dom.data).removeClass(e.classes.italic));
              f(e.dom.data).append(h)
            }, e = this, g = 0, l = this.s.dataPoints; g < l.length; g++) b(l[g])
      };
      c.prototype._populateValue = function (a) {
        var b = this,
          e = this.s.filled;
        this.s.filled = !1;
        f(this.dom.defaultValue).remove();
        for (var g = 0, l = this.dom.value; g < l.length; g++) f(l[g]).remove();
        g = f(this.dom.container).children();
        if (3 < g.length)
          for (l = 2; l < g.length - 1; l++) f(g[l]).remove();
        void 0 !== a && this.s.dt.columns().every(function (d) {
          b.s.dt.settings()[0].aoColumns[d].sTitle === a.data && (b.s.dataIdx = d)
        });
        g = this.s.conditions.get(this.s.condition).init(this, c.updateListener, void 0 !== a ? a.value : void 0);
        void 0 !== a && void 0 !== a.value && (this.s.value = a.value);
        this.dom.value = Array.isArray(g) ? g : [g];
        f(this.dom.value[0]).insertAfter(this.dom.condition).trigger("dtsb-inserted");
        for (l = 1; l < this.dom.value.length; l++) f(this.dom.value[l]).insertAfter(this.dom.value[l - 1]).trigger("dtsb-inserted");
        this.s.filled = this.s.conditions.get(this.s.condition).isInputValid(this.dom.value, this);
        this.setListeners();
        e !== this.s.filled && (this.s.dt.draw(), this.setListeners())
      };
      c.version = "0.0.1";
      c.classes = {
        button: "dtsb-button",
        buttonContainer: "dtsb-buttonContainer",
        condition: "dtsb-condition",
        container: "dtsb-criteria",
        data: "dtsb-data",
        "delete": "dtsb-delete",
        dropDown: "dtsb-dropDown",
        greyscale: "dtsb-greyscale",
        input: "dtsb-input",
        italic: "dtsb-italic",
        joiner: "dtsp-joiner",
        left: "dtsb-left",
        notItalic: "dtsb-notItalic",
        option: "dtsb-option",
        right: "dtsb-right",
        value: "dtsb-value",
        vertical: "dtsb-vertical"
      };
      c.initSelect = function (a, b, e) {
        void 0 === e && (e = null);
        for (var g = f(a.dom.data).children("option:selected").val(), l = a.s.dt.rows().indexes().toArray(), d = a.s.dt.settings()[0], h = f("<select/>").addClass(c.classes.value).addClass(c.classes.dropDown).addClass(c.classes.italic).append(a.dom.valueTitle).on("input", function () {
            f(this).removeClass(c.classes.italic);
            b(a, this)
          }), m = [], v = [], w = 0; w < l.length; w++) {
          var A = l[w],
            B = d.oApi._fnGetCellData(d, A, g, a.c.orthogonal.search);
          A = d.oApi._fnGetCellData(d, A, g, "display");
          B = f("<option>", {
            text: a.s.type.includes("html") ? A.replace(/(<([^>]+)>)/ig, "") : A,
            value: a.s.type.includes("html") ? B.replace(/(<([^>]+)>)/ig, "") : B
          }).addClass(a.classes.option).addClass(a.classes.notItalic);
          A = f(B).val(); - 1 === m.indexOf(A) && (m.push(A), v.push(B), null !== e && B.val() === e[0] && (B.attr("selected", !0), a.dom.valueTitle.remove(), f(h).removeClass(c.classes.italic)))
        }
        v.sort(function (G,
          E) {
          if ("string" === a.s.type || "num" === a.s.type || "html" === a.s.type || "html-num" === a.s.type) return f(G).val() < f(E).val() ? -1 : f(G).val() < f(E).val() ? 1 : 0;
          if ("num-fmt" === a.s.type || "html-num-fmt" === a.s.type) return +f(G).val().replace(/[^0-9.]/g, "") < +f(E).val().replace(/[^0-9.]/g, "") ? -1 : +f(G).val().replace(/[^0-9.]/g, "") < +f(E).val().replace(/[^0-9.]/g, "") ? 1 : 0
        });
        for (e = 0; e < v.length; e++) B = v[e], f(h).append(B);
        return h
      };
      c.initInput = function (a, b, e) {
        void 0 === e && (e = null);
        var g = f("<input/>").addClass(c.classes.value).addClass(c.classes.input).on("input",
          function () {
            b(a, this)
          });
        null !== e && f(g).val(e[0]);
        return g
      };
      c.init2Input = function (a, b, e) {
        void 0 === e && (e = null);
        var g = [f("<input/>").addClass(c.classes.value).addClass(c.classes.input).on("input", function () {
          b(a, this)
        }), f("<span>").addClass(a.classes.joiner).text("and"), f("<input/>").addClass(c.classes.value).addClass(c.classes.input).on("input", function () {
          b(a, this)
        })];
        null !== e && (f(g[0]).val(e[0]), f(g[2]).val(e[1]));
        return g
      };
      c.initDate = function (a, b, e) {
        void 0 === e && (e = null);
        var g = f("<input/>").addClass(c.classes.value).addClass(c.classes.input).dtDateTime({
          attachTo: "input",
          format: a.s.momentFormat ? a.s.momentFormat : void 0
        }).on("input change", function () {
          b(a, this)
        });
        null !== e && f(g).val(e[0]);
        return g
      };
      c.init2Date = function (a, b, e) {
        void 0 === e && (e = null);
        var g = [f("<input/>").addClass(c.classes.value).addClass(c.classes.input).dtDateTime({
          attachTo: "input",
          format: a.s.momentFormat ? a.s.momentFormat : void 0
        }).on("input change", function () {
          b(a, this)
        }), f("<span>").addClass(a.classes.joiner).text("and"), f("<input/>").addClass(c.classes.value).addClass(c.classes.input).dtDateTime({
          attachTo: "input",
          format: a.s.momentFormat ? a.s.momentFormat : void 0
        }).on("input change", function () {
          b(a, this)
        })];
        null !== e && 0 < e.length && (f(g[0]).val(e[0]), f(g[2]).val(e[1]));
        return g
      };
      c.isInputValidSelect = function (a) {
        for (var b = !0, e = 0; e < a.length; e++) {
          var g = a[e];
          f(g).children("option:selected").length === f(g).children("option").length - f(g).children("option." + c.classes.notItalic).length && 1 === f(g).children("option:selected").length && f(g).children("option:selected")[0] === f(g).children("option:hidden")[0] && (b = !1)
        }
        return b
      };
      c.isInputValidInput =
        function (a) {
          for (var b = !0, e = 0; e < a.length; e++) {
            var g = a[e];
            f(g).is("input") && 0 === f(g).val().length && (b = !1)
          }
          return b
        };
      c.inputValueSelect = function (a) {
        for (var b = [], e = 0; e < a.length; e++) {
          var g = a[e];
          f(g).is("select") && b.push(f(g).children("option:selected").val())
        }
        return b
      };
      c.inputValueInput = function (a) {
        for (var b = [], e = 0; e < a.length; e++) {
          var g = a[e];
          f(g).is("input") && b.push(f(g).val())
        }
        return b
      };
      c.updateListener = function (a, b) {
        var e = a.s.conditions.get(a.s.condition);
        a.s.filled = e.isInputValid(a.dom.value, a);
        a.s.value =
          e.inputValue(a.dom.value, a);
        Array.isArray(a.s.value) || (a.s.value = [a.s.value]);
        for (var g = e = null, l = 0; l < a.dom.value.length; l++) b === a.dom.value[l][0] && (e = l, void 0 !== b.selectionStart && (g = b.selectionStart));
        a.s.dt.draw();
        null !== e && (f(a.dom.value[e]).removeClass(a.classes.italic), f(a.dom.value[e]).focus(), null !== g && f(a.dom.value[e])[0].setSelectionRange(g, g))
      };
      c.dateConditions = {
        "!=": {
          conditionName: "Not",
          init: c.initDate,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a =
              a.replace(/(\/|\-|,)/g, "-");
            return a !== b[0]
          }
        },
        "!between": {
          conditionName: "Not Between",
          init: c.init2Date,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/(\/|\-|,)/g, "-");
            return b[0] < b[1] ? !(b[0] <= a && a <= b[1]) : !(b[1] <= a && a <= b[0])
          }
        },
        "!null": {
          conditionName: "Not Empty",
          isInputValid: function () {
            return !0
          },
          init: function () {},
          inputValue: function () {},
          search: function (a, b) {
            return !(null === a || void 0 === a || 0 === a.length)
          }
        },
        "<": {
          conditionName: "Before",
          init: c.initDate,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/(\/|\-|,)/g, "-");
            return a < b[0]
          }
        },
        "=": {
          conditionName: "Equals",
          init: c.initDate,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/(\/|\-|,)/g, "-");
            return a === b[0]
          }
        },
        ">": {
          conditionName: "After",
          init: c.initDate,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/(\/|\-|,)/g, "-");
            return a > b[0]
          }
        },
        between: {
          conditionName: "Between",
          init: c.init2Date,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/(\/|\-|,)/g, "-");
            return b[0] < b[1] ? b[0] <= a && a <= b[1] : b[1] <= a && a <= b[0]
          }
        },
        "null": {
          conditionName: "Empty",
          isInputValid: function () {
            return !0
          },
          init: function () {},
          inputValue: function () {},
          search: function (a, b) {
            return null === a || void 0 === a || 0 === a.length
          }
        }
      };
      c.momentDateConditions = {
        "!=": {
          conditionName: "Not",
          init: c.initDate,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b, e) {
            return y(a, e.s.momentFormat).valueOf() !==
              y(b[0], e.s.momentFormat).valueOf()
          }
        },
        "!between": {
          conditionName: "Not Between",
          init: c.init2Date,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b, e) {
            a = y(a, e.s.momentFormat).valueOf();
            var g = y(b[0], e.s.momentFormat).valueOf();
            b = y(b[1], e.s.momentFormat).valueOf();
            return g < b ? !(+g <= +a && +a <= +b) : !(+b <= +a && +a <= +g)
          }
        },
        "!null": {
          conditionName: "Not Empty",
          isInputValid: function () {
            return !0
          },
          init: function () {},
          inputValue: function () {},
          search: function (a, b) {
            return !(null === a || void 0 === a ||
              0 === a.length)
          }
        },
        "<": {
          conditionName: "Before",
          init: c.initDate,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b, e) {
            return y(a, e.s.momentFormat).valueOf() < y(b[0], e.s.momentFormat).valueOf()
          }
        },
        "=": {
          conditionName: "Equals",
          init: c.initDate,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b, e) {
            return y(a, e.s.momentFormat).valueOf() === y(b[0], e.s.momentFormat).valueOf()
          }
        },
        ">": {
          conditionName: "After",
          init: c.initDate,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b, e) {
            return y(a, e.s.momentFormat).valueOf() > y(b[0], e.s.momentFormat).valueOf()
          }
        },
        between: {
          conditionName: "Between",
          init: c.init2Date,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b, e) {
            a = y(a, e.s.momentFormat).valueOf();
            var g = y(b[0], e.s.momentFormat).valueOf();
            b = y(b[1], e.s.momentFormat).valueOf();
            return g < b ? g <= a && a <= b : b <= a && a <= g
          }
        },
        "null": {
          conditionName: "Empty",
          isInputValid: function () {
            return !0
          },
          init: function () {},
          inputValue: function () {},
          search: function (a,
            b) {
            return null === a || void 0 === a || 0 === a.length
          }
        }
      };
      c.numConditions = {
        "!=": {
          conditionName: "Not",
          init: c.initSelect,
          inputValue: c.inputValueSelect,
          isInputValid: c.isInputValidSelect,
          search: function (a, b) {
            return +a !== +b[0]
          }
        },
        "!between": {
          conditionName: "Not Between",
          init: c.init2Input,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return +b[0] < +b[1] ? !(+b[0] <= +a && +a <= +b[1]) : !(+b[1] <= +a && +a <= +b[0])
          }
        },
        "!null": {
          conditionName: "Not Empty",
          isInputValid: function () {
            return !0
          },
          init: function () {},
          inputValue: function () {},
          search: function (a, b) {
            return !(null === a || void 0 === a || 0 === a.length)
          }
        },
        "<": {
          conditionName: "Less Than",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return +a < +b[0]
          }
        },
        "<=": {
          conditionName: "Less Than Equal To",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return +a <= +b[0]
          }
        },
        "=": {
          conditionName: "Equals",
          init: c.initSelect,
          inputValue: c.inputValueSelect,
          isInputValid: c.isInputValidSelect,
          search: function (a, b) {
            return +a === +b[0]
          }
        },
        ">": {
          conditionName: "Greater Than",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return +a > +b[0]
          }
        },
        ">=": {
          conditionName: "Greater Than Equal To",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return +a >= +b[0]
          }
        },
        between: {
          conditionName: "Between",
          init: c.init2Input,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return +b[0] < +b[1] ?
              +b[0] <= +a && +a <= +b[1] : +b[1] <= +a && +a <= +b[0]
          }
        },
        "null": {
          conditionName: "Empty",
          init: function () {},
          inputValue: function () {},
          isInputValid: function () {
            return !0
          },
          search: function (a, b) {
            return null === a || void 0 === a || 0 === a.length
          }
        }
      };
      c.numFmtConditions = {
        "!=": {
          conditionName: "Not",
          init: c.initSelect,
          inputValue: c.inputValueSelect,
          isInputValid: c.isInputValidSelect,
          search: function (a, b) {
            a = a.replace(/[^0-9.]/g, "");
            b = b[0].replace(/[^0-9.]/g, "");
            return +a !== +b
          }
        },
        "!between": {
          conditionName: "Not Between",
          init: c.init2Input,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/[^0-9.]/g, "");
            var e = b[0].replace(/[^0-9.]/g, "");
            b = b[1].replace(/[^0-9.]/g, "");
            return e < b ? !(+e <= +a && +a <= +b) : !(+b <= +a && +a <= +e)
          }
        },
        "!null": {
          conditionName: "Not Empty",
          isInputValid: function () {
            return !0
          },
          init: function () {},
          inputValue: function () {},
          search: function (a, b) {
            return !(null === a || void 0 === a || 0 === a.length)
          }
        },
        "<": {
          conditionName: "Less Than",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a =
              a.replace(/[^0-9.]/g, "");
            b = b[0].replace(/[^0-9.]/g, "");
            return +a < +b
          }
        },
        "<=": {
          conditionName: "Less Than Equal To",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/[^0-9.]/g, "");
            b = b[0].replace(/[^0-9.]/g, "");
            return +a <= +b
          }
        },
        "=": {
          conditionName: "Equals",
          init: c.initSelect,
          inputValue: c.inputValueSelect,
          isInputValid: c.isInputValidSelect,
          search: function (a, b) {
            a = a.replace(/[^0-9.]/g, "");
            b = b[0].replace(/[^0-9.]/g, "");
            return +a === +b
          }
        },
        ">": {
          conditionName: "Greater Than",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/[^0-9.]/g, "");
            b = b[0].replace(/[^0-9.]/g, "");
            return +a > +b
          }
        },
        ">=": {
          conditionName: "Greater Than Equal To",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            a = a.replace(/[^0-9.]/g, "");
            b = b[0].replace(/[^0-9.]/g, "");
            return +a >= +b
          }
        },
        between: {
          conditionName: "Between",
          init: c.init2Input,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a,
            b) {
            a = a.replace(/[^0-9.]/g, "");
            var e = b[0].replace(/[^0-9.]/g, "");
            b = b[1].replace(/[^0-9.]/g, "");
            return e < b ? +e <= +a && +a <= +b : +b <= +a && +a <= +e
          }
        },
        "null": {
          conditionName: "Empty",
          init: function () {},
          inputValue: function () {},
          isInputValid: function () {
            return !0
          },
          search: function (a, b) {
            return null === a || void 0 === a || 0 === a.length
          }
        }
      };
      c.stringConditions = {
        "!=": {
          conditionName: "Not",
          init: c.initSelect,
          inputValue: c.inputValueSelect,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return a !== b[0]
          }
        },
        "!null": {
          conditionName: "Not Empty",
          isInputValid: function () {
            return !0
          },
          init: function () {},
          inputValue: function () {},
          search: function (a, b) {
            return !(null === a || void 0 === a || 0 === a.length)
          }
        },
        "=": {
          conditionName: "Equals",
          init: c.initSelect,
          inputValue: c.inputValueSelect,
          isInputValid: c.isInputValidSelect,
          search: function (a, b) {
            return a === b[0]
          }
        },
        contains: {
          conditionName: "Contains",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return a.toLowerCase().includes(b[0].toLowerCase())
          }
        },
        ends: {
          conditionName: "Ends With",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return a.toLowerCase().indexOf(b[0].toLowerCase()) === a.length - b[0].length
          }
        },
        "null": {
          conditionName: "Empty",
          init: function () {},
          inputValue: function () {},
          isInputValid: function () {
            return !0
          },
          search: function (a, b) {
            return null === a || void 0 === a || 0 === a.length
          }
        },
        starts: {
          conditionName: "Starts With",
          init: c.initInput,
          inputValue: c.inputValueInput,
          isInputValid: c.isInputValidInput,
          search: function (a, b) {
            return 0 === a.toLowerCase().indexOf(b[0].toLowerCase())
          }
        }
      };
      c.defaults = {
        columns: !0,
        conditions: {
          date: c.dateConditions,
          html: c.stringConditions,
          "html-num": c.numConditions,
          "html-num-fmt": c.numFmtConditions,
          moment: c.momentDateConditions,
          num: c.numConditions,
          "num-fmt": c.numFmtConditions,
          string: c.stringConditions
        },
        depthLimit: !1,
        greyscale: !1,
        orthogonal: {
          conditionName: "Condition Name",
          search: "filter"
        }
      };
      return c
    }(),
    q, u, t = function () {
      function c(a, b, e, g, l, d) {
        void 0 === g && (g = 0);
        void 0 === l && (l = !1);
        void 0 === d && (d = 1);
        if (!u || !u.versionCheck || !u.versionCheck("1.10.0")) throw Error("SearchBuilder requires DataTables 1.10 or newer");
        this.classes = q.extend(!0, {}, c.classes);
        this.c = q.extend(!0, {}, c.defaults, b);
        this.s = {
          criteria: [],
          depth: d,
          dt: a,
          index: g,
          isChild: l,
          logic: void 0,
          opts: b,
          toDrop: void 0,
          topGroup: e
        };
        this.dom = {
          add: q("<button/>").addClass(this.classes.add).addClass(this.classes.button),
          clear: q("<button>&times</button>").addClass(this.classes.button).addClass(this.classes.clearGroup),
          container: q("<div/>").addClass(this.classes.group),
          logic: q("<button/>").addClass(this.classes.logic).addClass(this.classes.button),
          logicContainer: q("<div/>").addClass(this.classes.logicContainer)
        };
        void 0 === this.s.topGroup && (this.s.topGroup = this.dom.container);
        this._setup();
        return this
      }
      c.prototype.destroy = function () {
        q(this.dom.add).off(".dtsb");
        q(this.dom.logic).off(".dtsb");
        q(this.dom.container).trigger("dtsb-destroy").remove();
        this.s.criteria = []
      };
      c.prototype.getDetails = function () {
        if (0 === this.s.criteria.length) return {};
        for (var a = {
            criteria: [],
            logic: this.s.logic
          }, b = 0, e = this.s.criteria; b < e.length; b++) a.criteria.push(e[b].criteria.getDetails());
        return a
      };
      c.prototype.getNode = function () {
        return this.dom.container
      };
      c.prototype.rebuild = function (a) {
        if (void 0 !== a.criteria && null !== a.criteria && 0 !== a.criteria.length) {
          this.s.logic = a.logic;
          q(this.dom.logic).text("OR" === this.s.logic ? this.s.dt.i18n("searchBuilder.logicOr", "Or") : this.s.dt.i18n("searchBuilder.logicAnd", "And"));
          for (var b = 0, e = a.criteria; b < e.length; b++) a = e[b], void 0 !== a.logic ? this._addPrevGroup(a) : void 0 === a.logic && this._addPrevCriteria(a);
          b = 0;
          for (e = this.s.criteria; b < e.length; b++) a = e[b], void 0 === a.logic && (a.criteria.updateArrows(1 < this.s.criteria.length, !1),
            this._setCriteriaListeners(a.criteria))
        }
      };
      c.prototype.redrawContents = function () {
        q(this.dom.container).empty().append(this.dom.logicContainer).append(this.dom.add);
        this.s.criteria.sort(function (b, e) {
          return b.criteria.s.index < e.criteria.s.index ? -1 : b.criteria.s.index > e.criteria.s.index ? 1 : 0
        });
        this.setListeners();
        for (var a = 0; a < this.s.criteria.length; a++) void 0 === this.s.criteria[a].logic ? (this.s.criteria[a].index = a, this.s.criteria[a].criteria.s.index = a, q(this.s.criteria[a].criteria.dom.container).insertBefore(this.dom.add),
          this._setCriteriaListeners(this.s.criteria[a].criteria), this.s.criteria[a].criteria.rebuild(this.s.criteria[a].criteria.getDetails())) : 0 < this.s.criteria[a].criteria.s.criteria.length ? (this.s.criteria[a].index = a, this.s.criteria[a].criteria.s.index = a, q(this.s.criteria[a].criteria.dom.container).insertBefore(this.dom.add), this.s.criteria[a].criteria.redrawContents(), this._setGroupListeners(this.s.criteria[a].criteria)) : (this.s.criteria.splice(a, 1), a--);
        this.setupLogic()
      };
      c.prototype.search = function (a) {
        return "AND" ===
          this.s.logic ? this._andSearch(a) : "OR" === this.s.logic ? this._orSearch(a) : !0
      };
      c.prototype.setupLogic = function () {
        q(this.dom.logicContainer).remove();
        q(this.dom.clear).remove();
        if (1 > this.s.criteria.length) this.s.isChild || (q(this.dom.container).trigger("dtsb-destroy"), q(this.dom.container).css("margin-left", 0));
        else {
          var a = q(this.dom.container).height() - 2;
          q(this.dom.clear).height("0px");
          q(this.dom.logicContainer).append(this.dom.clear).width(a);
          q(this.dom.container).prepend(this.dom.logicContainer);
          this._setLogicListener();
          q(this.dom.container).css("margin-left", q(this.dom.logicContainer).outerHeight(!0));
          a = q(this.dom.logicContainer).offset();
          var b = a.left,
            e = q(this.dom.container).offset().left;
          b = b - (b - e) - q(this.dom.logicContainer).outerHeight(!0);
          q(this.dom.logicContainer).offset({
            left: b
          });
          b = q(this.dom.logicContainer).next();
          a = a.top;
          b = q(b).offset().top;
          a -= a - b;
          q(this.dom.logicContainer).offset({
            top: a
          });
          q(this.dom.clear).outerHeight(q(this.dom.logicContainer).height());
          this._setClearListener()
        }
      };
      c.prototype.setListeners =
        function () {
          var a = this;
          q(this.dom.add).unbind("click");
          q(this.dom.add).on("click", function () {
            a.s.isChild || q(a.dom.container).prepend(a.dom.logicContainer);
            a.addCriteria();
            q(a.dom.container).trigger("dtsb-add");
            a.s.dt.state.save();
            return !1
          });
          for (var b = 0, e = this.s.criteria; b < e.length; b++) e[b].criteria.setListeners();
          this._setClearListener();
          this._setLogicListener()
        };
      c.prototype.addCriteria = function (a, b) {
        void 0 === a && (a = null);
        void 0 === b && (b = !0);
        var e = null === a ? this.s.criteria.length : a.s.index,
          g = new C(this.s.dt,
            this.s.opts, this.s.topGroup, e, this.s.depth);
        null !== a && (g.c = a.c, g.s = a.s, g.s.depth = this.s.depth, g.classes = a.classes);
        g.populate();
        a = !1;
        for (var l = 0; l < this.s.criteria.length; l++) 0 === l && this.s.criteria[l].criteria.s.index > g.s.index ? (q(g.getNode()).insertBefore(this.s.criteria[l].criteria.dom.container), a = !0) : l < this.s.criteria.length - 1 && this.s.criteria[l].criteria.s.index < g.s.index && this.s.criteria[l + 1].criteria.s.index > g.s.index && (q(g.getNode()).insertAfter(this.s.criteria[l].criteria.dom.container), a = !0);
        a || q(g.getNode()).insertBefore(this.dom.add);
        this.s.criteria.push({
          criteria: g,
          index: e
        });
        this.s.criteria = this.s.criteria.sort(function (d, h) {
          return d.criteria.s.index - h.criteria.s.index
        });
        e = 0;
        for (a = this.s.criteria; e < a.length; e++) l = a[e], void 0 === l.logic && l.criteria.updateArrows(1 < this.s.criteria.length, b);
        this._setCriteriaListeners(g);
        g.setListeners();
        this.setupLogic()
      };
      c.prototype.checkFilled = function () {
        for (var a = 0, b = this.s.criteria; a < b.length; a++) {
          var e = b[a];
          if (void 0 === e.logic && e.criteria.s.filled ||
            void 0 !== e.logic && e.criteria.checkFilled()) return !0
        }
        return !1
      };
      c.prototype.count = function () {
        for (var a = 0, b = 0, e = this.s.criteria; b < e.length; b++) {
          var g = e[b];
          void 0 !== g.logic ? a += g.criteria.count() : a++
        }
        return a
      };
      c.prototype._addPrevGroup = function (a) {
        var b = this.s.criteria.length,
          e = new c(this.s.dt, this.c, this.s.topGroup, b, !0, this.s.depth + 1);
        this.s.criteria.push({
          criteria: e,
          index: b,
          logic: e.s.logic
        });
        e.rebuild(a);
        this.s.criteria[b].criteria = e;
        q(this.s.topGroup).trigger("dtsb-redrawContents");
        this._setGroupListeners(e)
      };
      c.prototype._addPrevCriteria = function (a) {
        var b = this.s.criteria.length,
          e = new C(this.s.dt, this.s.opts, this.s.topGroup, b, this.s.depth);
        e.populate();
        this.s.criteria.push({
          criteria: e,
          index: b
        });
        e.rebuild(a);
        this.s.criteria[b].criteria = e;
        q(this.s.topGroup).trigger("dtsb-redrawContents")
      };
      c.prototype._andSearch = function (a) {
        if (0 === this.s.criteria.length) return !0;
        for (var b = 0, e = this.s.criteria; b < e.length; b++) {
          var g = e[b];
          if ((void 0 !== g.logic || g.criteria.s.filled) && !g.criteria.search(a)) return !1
        }
        return !0
      };
      c.prototype._orSearch =
        function (a) {
          if (0 === this.s.criteria.length) return !0;
          for (var b = !1, e = 0, g = this.s.criteria; e < g.length; e++) {
            var l = g[e];
            if (l.criteria.s.filled) {
              if (b = !0, l.criteria.search(a)) return !0
            } else if (void 0 !== l.logic && l.criteria.checkFilled() && (b = !0, l.criteria.search(a))) return !0
          }
          return !b
        };
      c.prototype._removeCriteria = function (a, b) {
        void 0 === b && (b = !1);
        if (1 >= this.s.criteria.length && this.s.isChild) this.destroy();
        else {
          for (var e = void 0, g = 0; g < this.s.criteria.length; g++) this.s.criteria[g].index === a.s.index && (!b || this.s.criteria[g].criteria instanceof c) && (e = g);
          void 0 !== e && this.s.criteria.splice(e, 1);
          for (g = 0; g < this.s.criteria.length; g++) this.s.criteria[g].index = g, this.s.criteria[g].criteria.s.index = g
        }
      };
      c.prototype._setCriteriaListeners = function (a) {
        var b = this;
        q(a.dom["delete"]).unbind("click").on("click", function () {
          b._removeCriteria(a);
          q(a.dom.container).remove();
          b.setupLogic();
          for (var e = 0, g = b.s.criteria; e < g.length; e++) {
            var l = g[e];
            void 0 === l.logic && l.criteria.updateArrows(1 < b.s.criteria.length)
          }
          a.destroy();
          b.s.dt.draw();
          q(b.s.topGroup).trigger("dtsb-updateTitle");
          return !1
        });
        q(a.dom.right).unbind("click").on("click", function () {
          var e = a.s.index,
            g = new c(b.s.dt, b.s.opts, b.s.topGroup, a.s.index, !0, b.s.depth + 1);
          g.addCriteria(a);
          b.s.criteria[e].criteria = g;
          b.s.criteria[e].logic = "AND";
          q(b.s.topGroup).trigger("dtsb-redrawContents");
          b._setGroupListeners(g);
          return !1
        });
        q(a.dom.left).unbind("click").on("click", function () {
          b.s.toDrop = new C(b.s.dt, b.s.opts, b.s.topGroup, a.s.index);
          b.s.toDrop.s = a.s;
          b.s.toDrop.c = a.c;
          b.s.toDrop.classes = a.classes;
          b.s.toDrop.populate();
          var e = b.s.toDrop.s.index;
          q(b.dom.container).trigger("dtsb-dropCriteria");
          a.s.index = e;
          b._removeCriteria(a);
          q(b.s.topGroup).trigger("dtsb-redrawContents");
          b.s.dt.draw();
          return !1
        })
      };
      c.prototype._setClearListener = function () {
        var a = this;
        q(this.dom.clear).unbind("click").on("click", function () {
          if (!a.s.isChild) return q(a.dom.container).trigger("dtsb-clearContents"), !1;
          a.destroy();
          q(a.s.topGroup).trigger("dtsb-updateTitle");
          q(a.s.topGroup).trigger("dtsb-redrawContents");
          return !1
        })
      };
      c.prototype._setGroupListeners = function (a) {
        var b =
          this;
        q(a.dom.add).unbind("click").on("click", function () {
          b.setupLogic();
          q(b.dom.container).trigger("dtsb-add");
          return !1
        });
        q(a.dom.container).unbind("dtsb-add").on("dtsb-add", function () {
          b.setupLogic();
          q(b.dom.container).trigger("dtsb-add");
          return !1
        });
        q(a.dom.container).unbind("dtsb-destroy").on("dtsb-destroy", function () {
          b._removeCriteria(a, !0);
          q(a.dom.container).remove();
          b.setupLogic();
          return !1
        });
        q(a.dom.container).unbind("dtsb-dropCriteria").on("dtsb-dropCriteria", function () {
          var e = a.s.toDrop;
          e.s.index =
            a.s.index;
          e.updateArrows(1 < b.s.criteria.length, !1);
          b.addCriteria(e, !1);
          return !1
        });
        a.setListeners()
      };
      c.prototype._setup = function () {
        this.setListeners();
        q(this.dom.add).text(this.s.dt.i18n("searchBuilder.add", "Add Condition"));
        q(this.dom.logic).text("OR" === this.c.logic ? this.s.dt.i18n("searchBuilder.logicOr", "Or") : this.s.dt.i18n("searchBuilder.logicAnd", "And"));
        this.s.logic = "OR" === this.c.logic ? "OR" : "AND";
        this.c.greyscale && q(this.dom.logic).addClass(this.classes.greyscale);
        q(this.dom.logicContainer).append(this.dom.logic).append(this.dom.clear);
        this.s.isChild && q(this.dom.container).append(this.dom.logicContainer);
        q(this.dom.container).append(this.dom.add)
      };
      c.prototype._setLogicListener = function () {
        var a = this;
        q(this.dom.logic).unbind("click").on("click", function () {
          a._toggleLogic();
          a.s.dt.draw();
          for (var b = 0, e = a.s.criteria; b < e.length; b++) e[b].criteria.setListeners()
        })
      };
      c.prototype._toggleLogic = function () {
        "OR" === this.s.logic ? (this.s.logic = "AND", q(this.dom.logic).text(this.s.dt.i18n("searchBuilder.logicAnd", "And"))) : "AND" === this.s.logic && (this.s.logic =
          "OR", q(this.dom.logic).text(this.s.dt.i18n("searchBuilder.logicOr", "Or")))
      };
      c.version = "0.0.1";
      c.classes = {
        add: "dtsb-add",
        button: "dtsb-button",
        clearGroup: "dtsb-clearGroup",
        greyscale: "dtsb-greyscale",
        group: "dtsb-group",
        inputButton: "dtsb-iptbtn",
        logic: "dtsb-logic",
        logicContainer: "dtsb-logicContainer"
      };
      c.defaults = {
        depthLimit: !1,
        greyscale: !1,
        logic: "AND"
      };
      return c
    }(),
    n, z, K = function () {
      function c(a, b) {
        var e = this;
        if (!z || !z.versionCheck || !z.versionCheck("1.10.0")) throw Error("SearchBuilder requires DataTables 1.10 or newer");
        a = new z.Api(a);
        this.classes = n.extend(!0, {}, c.classes);
        this.c = n.extend(!0, {}, c.defaults, b);
        this.dom = {
          clearAll: n('<button type="button">' + a.i18n("searchBuilder.clearAll", "Clear All") + "</button>").addClass(this.classes.clearAll).addClass(this.classes.button),
          container: n("<div/>").addClass(this.classes.container),
          title: n("<div/>").addClass(this.classes.title),
          titleRow: n("<div/>").addClass(this.classes.titleRow),
          topGroup: void 0
        };
        this.s = {
          dt: a,
          opts: b,
          search: void 0,
          topGroup: void 0
        };
        if (void 0 === a.settings()[0]._searchBuilder) {
          a.settings()[0]._searchBuilder =
            this;
          if (this.s.dt.settings()[0]._bInitComplete) this._setUp();
          else a.one("init.dt", function () {
            e._setUp()
          });
          return this
        }
      }
      c.prototype.getDetails = function () {
        return this.s.topGroup.getDetails()
      };
      c.prototype.getNode = function () {
        return this.dom.container
      };
      c.prototype.rebuild = function (a) {
        n(this.dom.clearAll).click();
        if (void 0 === a || null === a) return this;
        this.s.topGroup.rebuild(a);
        this.s.dt.draw();
        this.s.topGroup.setListeners();
        return this
      };
      c.prototype._applyPreDefDefaults = function (a) {
        var b = this;
        void 0 !== a.criteria &&
          void 0 === a.logic && (a.logic = "AND");
        for (var e = function (h) {
            void 0 !== h.criteria ? h = g._applyPreDefDefaults(h) : g.s.dt.columns().every(function (m) {
              b.s.dt.settings()[0].aoColumns[m].sTitle === h.data && (h.dataIdx = m)
            })
          }, g = this, l = 0, d = a.criteria; l < d.length; l++) e(d[l]);
        return a
      };
      c.prototype._setUp = function (a) {
        var b = this;
        void 0 === a && (a = !0);
        this.s.topGroup = new t(this.s.dt, this.c, void 0);
        this._setClearListener();
        this.s.dt.on("stateSaveParams", function (e, g, l) {
          l.searchBuilder = b.getDetails();
          l.page = b.s.dt.page()
        });
        this._build();
        a && (a = this.s.dt.state.loaded(), null !== a && void 0 !== a.searchBuilder ? (this.s.topGroup.rebuild(a.searchBuilder), n(this.s.topGroup.dom.container).trigger("dtsb-redrawContents"), this.s.dt.page(a.page).draw("page"), this.s.topGroup.setListeners()) : !1 !== this.c.preDefined && (this.c.preDefined = this._applyPreDefDefaults(this.c.preDefined), this.rebuild(this.c.preDefined)));
        this._setEmptyListener();
        this.s.dt.state.save()
      };
      c.prototype._updateTitle = function (a) {
        n(this.dom.title).text(this.s.dt.i18n("searchBuilder.title", {
          0: "Custom Search Builder",
          _: "Custom Search Builder (%d)"
        }, a))
      };
      c.prototype._build = function () {
        var a = this;
        n(this.dom.clearAll).remove();
        n(this.dom.container).empty();
        var b = this.s.topGroup.count();
        this._updateTitle(b);
        n(this.dom.titleRow).append(this.dom.title);
        n(this.dom.container).append(this.dom.titleRow);
        this.dom.topGroup = this.s.topGroup.getNode();
        n(this.dom.container).append(this.dom.topGroup);
        this._setRedrawListener();
        var e = this.s.dt.table(0).node(); - 1 === n.fn.dataTable.ext.search.indexOf(this.s.search) &&
          (this.s.search = function (g, l, d, h) {
            return g.nTable !== e ? !0 : a.s.topGroup.search(l)
          }, n.fn.dataTable.ext.search.push(this.s.search));
        n.fn.DataTable.Api.registerPlural("columns().type()", "column().type()", function (g, l) {
          return this.iterator("column", function (d, h) {
            return d.aoColumns[h].sType
          }, 1)
        });
        this.s.dt.on("destroy.dt", function () {
          n(a.dom.container).remove();
          n(a.dom.clearAll).remove();
          for (var g = n.fn.dataTable.ext.search.indexOf(a.s.search); - 1 !== g;) n.fn.dataTable.ext.search.splice(g, 1), g = n.fn.dataTable.ext.search.indexOf(a.s.search)
        })
      };
      c.prototype._checkClear = function () {
        0 < this.s.topGroup.s.criteria.length ? (n(this.dom.clearAll).insertAfter(this.dom.title), this._setClearListener()) : n(this.dom.clearAll).remove()
      };
      c.prototype._setClearListener = function () {
        var a = this;
        n(this.dom.clearAll).unbind("click");
        n(this.dom.clearAll).on("click", function () {
          a.s.topGroup = new t(a.s.dt, a.s.opts, void 0);
          a._build();
          a.s.dt.draw();
          a.s.topGroup.setListeners();
          n(a.dom.clearAll).remove();
          a._setEmptyListener();
          void 0 !== a.c.filterChanged && "function" === typeof a.c.filterChanged &&
            a.c.filterChanged(0);
          return !1
        })
      };
      c.prototype._setRedrawListener = function () {
        var a = this;
        n(this.s.topGroup.dom.container).unbind("dtsb-redrawContents");
        n(this.s.topGroup.dom.container).on("dtsb-redrawContents", function () {
          a._checkClear();
          a.s.topGroup.redrawContents();
          a.s.topGroup.setupLogic();
          a._setEmptyListener();
          var b = a.s.topGroup.count();
          a._updateTitle(b);
          void 0 !== a.c.filterChanged && "function" === typeof a.c.filterChanged && a.c.filterChanged(b);
          a.s.dt.state.save()
        });
        n(this.s.topGroup.dom.container).unbind("dtsb-clearContents");
        n(this.s.topGroup.dom.container).on("dtsb-clearContents", function () {
          a._setUp(!1);
          void 0 !== a.c.filterChanged && "function" === typeof a.c.filterChanged && a.c.filterChanged(0);
          a.s.dt.draw()
        });
        n(this.s.topGroup.dom.container).on("dtsb-updateTitle", function () {
          var b = a.s.topGroup.count();
          a._updateTitle(b);
          void 0 !== a.c.filterChanged && "function" === typeof a.c.filterChanged && a.c.filterChanged(b)
        })
      };
      c.prototype._setEmptyListener = function () {
        var a = this;
        n(this.s.topGroup.dom.add).on("click", function () {
          a._checkClear()
        });
        n(this.s.topGroup.dom.container).on("dtsb-destroy", function () {
          n(a.dom.clearAll).remove()
        })
      };
      c.version = "0.0.1";
      c.classes = {
        button: "dtsb-button",
        clearAll: "dtsb-clearAll",
        container: "dtsb-searchBuilder",
        inputButton: "dtsb-iptbtn",
        title: "dtsb-title",
        titleRow: "dtsb-titleRow"
      };
      c.defaults = {
        filterChanged: void 0,
        preDefined: !1
      };
      return c
    }();
  (function (c) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) {
      return c(a, window, document)
    }) : "object" === typeof exports ? module.exports = function (a,
      b) {
      a || (a = window);
      b && b.fn.dataTable || (b = require("datatables.net")(a, b).$);
      return c(b, a, a.document)
    } : c(window.jQuery, window, document)
  })(function (c, a, b) {
    function e(l) {
      l = new g.Api(l);
      var d = l.init().searchBuilder || g.defaults.searchBuilder;
      return (new K(l, d)).getNode()
    }
    r(c);
    p(c);
    k(c);
    var g = c.fn.dataTable;
    c.fn.dataTable.SearchBuilder = K;
    c.fn.DataTable.SearchBuilder = K;
    c.fn.dataTable.Group = t;
    c.fn.DataTable.Group = t;
    c.fn.dataTable.Criteria = C;
    c.fn.DataTable.Criteria = C;
    a = c.fn.dataTable.Api.register;
    c.fn.dataTable.ext.searchBuilder = {
      conditions: {}
    };
    c.fn.dataTable.ext.buttons.searchBuilder = {
      action: function (l, d, h, m) {
        l.stopPropagation();
        this.popover(m._searchBuilder.getNode(), {
          align: "dt-container"
        })
      },
      config: {},
      init: function (l, d, h) {
        var m = new c.fn.dataTable.SearchBuilder(l, c.extend({
            filterChanged: function (w) {
              l.button(d).text(l.i18n("searchBuilder.button", {
                0: "Search Builder",
                _: "Search Builder (%d)"
              }, w))
            }
          }, h.config)),
          v = l.i18n("searchBuilder.button", "Search Builder", 0);
        l.button(d).text(v);
        h._searchBuilder = m
      },
      text: "Search Builder"
    };
    a("searchBuilder.getDetails()",
      function () {
        return this.context[0]._searchBuilder.getDetails()
      });
    a("searchBuilder.rebuild()", function (l) {
      this.context[0]._searchBuilder.rebuild(l);
      return this
    });
    a("searchBuilder.container()", function () {
      return this.context[0]._searchBuilder.getNode()
    });
    c(b).on("preInit.dt.dtsp", function (l, d, h) {
      "dt" === l.namespace && (d.oInit.searchBuilder || g.defaults.searchBuilder) && (d._searchBuilder || e(d))
    });
    g.ext.feature.push({
      cFeature: "Q",
      fnInit: e
    });
    g.ext.features && g.ext.features.register("searchBuilder", e)
  })
})();


(function (b) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-searchbuilder"], function (a) {
    return b(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, c) {
    a || (a = window);
    c && c.fn.dataTable || (c = require("datatables.net-bs4")(a, c).$);
    c.fn.dataTable.searchBuilder || require("datatables.net-searchbuilder")(a, c);
    return b(c, a, a.document)
  } : b(jQuery, window, document)
})(function (b, a, c) {
  a = b.fn.dataTable;
  b.extend(!0, a.SearchBuilder.classes, {
    clearAll: "btn btn-light dtsb-clearAll"
  });
  b.extend(!0, a.Group.classes, {
    add: "btn btn-light dtsb-add",
    clearGroup: "btn btn-light dtsb-clearGroup",
    logic: "btn btn-light dtsb-logic"
  });
  b.extend(!0, a.Criteria.classes, {
    condition: "form-control dtsb-condition",
    data: "form-control dtsb-data",
    "delete": "btn btn-light dtsb-delete",
    left: "btn btn-light dtsb-left",
    right: "btn btn-light dtsb-right",
    value: "form-control dtsb-value"
  });
  return a.searchPanes
});


/*!
 SearchPanes 1.2.1
 2019-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.getGlobal = function (m) {
  m = ["object" == typeof globalThis && globalThis, m, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var t = 0; t < m.length; ++t) {
    var g = m[t];
    if (g && g.Math == Math) return g
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.checkEs6ConformanceViaProxy = function () {
  try {
    var m = {},
      t = Object.create(new $jscomp.global.Proxy(m, {
        get: function (g, r, u) {
          return g == m && "q" == r && u == t
        }
      }));
    return !0 === t.q
  } catch (g) {
    return !1
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.arrayIteratorImpl = function (m) {
  var t = 0;
  return function () {
    return t < m.length ? {
      done: !1,
      value: m[t++]
    } : {
      done: !0
    }
  }
};
$jscomp.arrayIterator = function (m) {
  return {
    next: $jscomp.arrayIteratorImpl(m)
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (m, t, g) {
  if (m == Array.prototype || m == Object.prototype) return m;
  m[t] = g.value;
  return m
};
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (m, t) {
  var g = $jscomp.propertyToPolyfillSymbol[t];
  if (null == g) return m[t];
  g = m[g];
  return void 0 !== g ? g : m[t]
};
$jscomp.polyfill = function (m, t, g, r) {
  t && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(m, t, g, r) : $jscomp.polyfillUnisolated(m, t, g, r))
};
$jscomp.polyfillUnisolated = function (m, t, g, r) {
  g = $jscomp.global;
  m = m.split(".");
  for (r = 0; r < m.length - 1; r++) {
    var u = m[r];
    if (!(u in g)) return;
    g = g[u]
  }
  m = m[m.length - 1];
  r = g[m];
  t = t(r);
  t != r && null != t && $jscomp.defineProperty(g, m, {
    configurable: !0,
    writable: !0,
    value: t
  })
};
$jscomp.polyfillIsolated = function (m, t, g, r) {
  var u = m.split(".");
  m = 1 === u.length;
  r = u[0];
  r = !m && r in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var q = 0; q < u.length - 1; q++) {
    var y = u[q];
    if (!(y in r)) return;
    r = r[y]
  }
  u = u[u.length - 1];
  g = $jscomp.IS_SYMBOL_NATIVE && "es6" === g ? r[u] : null;
  t = t(g);
  null != t && (m ? $jscomp.defineProperty($jscomp.polyfills, u, {
    configurable: !0,
    writable: !0,
    value: t
  }) : t !== g && ($jscomp.propertyToPolyfillSymbol[u] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(u) : $jscomp.POLYFILL_PREFIX + u, u =
    $jscomp.propertyToPolyfillSymbol[u], $jscomp.defineProperty(r, u, {
      configurable: !0,
      writable: !0,
      value: t
    })))
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill("Symbol", function (m) {
  if (m) return m;
  var t = function (u, q) {
    this.$jscomp$symbol$id_ = u;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: q
    })
  };
  t.prototype.toString = function () {
    return this.$jscomp$symbol$id_
  };
  var g = 0,
    r = function (u) {
      if (this instanceof r) throw new TypeError("Symbol is not a constructor");
      return new t("jscomp_symbol_" + (u || "") + "_" + g++, u)
    };
  return r
}, "es6", "es3");
$jscomp.initSymbolIterator = function () {};
$jscomp.polyfill("Symbol.iterator", function (m) {
    if (m) return m;
    m = Symbol("Symbol.iterator");
    for (var t = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), g = 0; g < t.length; g++) {
      var r = $jscomp.global[t[g]];
      "function" === typeof r && "function" != typeof r.prototype[m] && $jscomp.defineProperty(r.prototype, m, {
        configurable: !0,
        writable: !0,
        value: function () {
          return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
      })
    }
    return m
  }, "es6",
  "es3");
$jscomp.initSymbolAsyncIterator = function () {};
$jscomp.iteratorPrototype = function (m) {
  m = {
    next: m
  };
  m[Symbol.iterator] = function () {
    return this
  };
  return m
};
$jscomp.makeIterator = function (m) {
  var t = "undefined" != typeof Symbol && Symbol.iterator && m[Symbol.iterator];
  return t ? t.call(m) : $jscomp.arrayIterator(m)
};
$jscomp.owns = function (m, t) {
  return Object.prototype.hasOwnProperty.call(m, t)
};
$jscomp.polyfill("WeakMap", function (m) {
  function t() {
    if (!m || !Object.seal) return !1;
    try {
      var a = Object.seal({}),
        b = Object.seal({}),
        c = new m([
          [a, 2],
          [b, 3]
        ]);
      if (2 != c.get(a) || 3 != c.get(b)) return !1;
      c.delete(a);
      c.set(b, 4);
      return !c.has(a) && 4 == c.get(b)
    } catch (d) {
      return !1
    }
  }

  function g() {}

  function r(a) {
    var b = typeof a;
    return "object" === b && null !== a || "function" === b
  }

  function u(a) {
    if (!$jscomp.owns(a, y)) {
      var b = new g;
      $jscomp.defineProperty(a, y, {
        value: b
      })
    }
  }

  function q(a) {
    if (!$jscomp.ISOLATE_POLYFILLS) {
      var b = Object[a];
      b && (Object[a] =
        function (c) {
          if (c instanceof g) return c;
          Object.isExtensible(c) && u(c);
          return b(c)
        })
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (m && $jscomp.ES6_CONFORMANCE) return m
  } else if (t()) return m;
  var y = "$jscomp_hidden_" + Math.random();
  q("freeze");
  q("preventExtensions");
  q("seal");
  var G = 0,
    h = function (a) {
      this.id_ = (G += Math.random() + 1).toString();
      if (a) {
        a = $jscomp.makeIterator(a);
        for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
      }
    };
  h.prototype.set = function (a, b) {
    if (!r(a)) throw Error("Invalid WeakMap key");
    u(a);
    if (!$jscomp.owns(a, y)) throw Error("WeakMap key fail: " + a);
    a[y][this.id_] = b;
    return this
  };
  h.prototype.get = function (a) {
    return r(a) && $jscomp.owns(a, y) ? a[y][this.id_] : void 0
  };
  h.prototype.has = function (a) {
    return r(a) && $jscomp.owns(a, y) && $jscomp.owns(a[y], this.id_)
  };
  h.prototype.delete = function (a) {
    return r(a) && $jscomp.owns(a, y) && $jscomp.owns(a[y], this.id_) ? delete a[y][this.id_] : !1
  };
  return h
}, "es6", "es3");
$jscomp.MapEntry = function () {};
$jscomp.polyfill("Map", function (m) {
  function t() {
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !m || "function" != typeof m || !m.prototype.entries || "function" != typeof Object.seal) return !1;
    try {
      var h = Object.seal({
          x: 4
        }),
        a = new m($jscomp.makeIterator([
          [h, "s"]
        ]));
      if ("s" != a.get(h) || 1 != a.size || a.get({
          x: 4
        }) || a.set({
          x: 4
        }, "t") != a || 2 != a.size) return !1;
      var b = a.entries(),
        c = b.next();
      if (c.done || c.value[0] != h || "s" != c.value[1]) return !1;
      c = b.next();
      return c.done || 4 != c.value[0].x || "t" != c.value[1] || !b.next().done ? !1 : !0
    } catch (d) {
      return !1
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (m && $jscomp.ES6_CONFORMANCE) return m
  } else if (t()) return m;
  var g = new WeakMap,
    r = function (h) {
      this.data_ = {};
      this.head_ = y();
      this.size = 0;
      if (h) {
        h = $jscomp.makeIterator(h);
        for (var a; !(a = h.next()).done;) a = a.value, this.set(a[0], a[1])
      }
    };
  r.prototype.set = function (h, a) {
    h = 0 === h ? 0 : h;
    var b = u(this, h);
    b.list || (b.list = this.data_[b.id] = []);
    b.entry ? b.entry.value = a : (b.entry = {
        next: this.head_,
        previous: this.head_.previous,
        head: this.head_,
        key: h,
        value: a
      }, b.list.push(b.entry),
      this.head_.previous.next = b.entry, this.head_.previous = b.entry, this.size++);
    return this
  };
  r.prototype.delete = function (h) {
    h = u(this, h);
    return h.entry && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.data_[h.id], h.entry.previous.next = h.entry.next, h.entry.next.previous = h.entry.previous, h.entry.head = null, this.size--, !0) : !1
  };
  r.prototype.clear = function () {
    this.data_ = {};
    this.head_ = this.head_.previous = y();
    this.size = 0
  };
  r.prototype.has = function (h) {
    return !!u(this, h).entry
  };
  r.prototype.get = function (h) {
    return (h =
      u(this, h).entry) && h.value
  };
  r.prototype.entries = function () {
    return q(this, function (h) {
      return [h.key, h.value]
    })
  };
  r.prototype.keys = function () {
    return q(this, function (h) {
      return h.key
    })
  };
  r.prototype.values = function () {
    return q(this, function (h) {
      return h.value
    })
  };
  r.prototype.forEach = function (h, a) {
    for (var b = this.entries(), c; !(c = b.next()).done;) c = c.value, h.call(a, c[1], c[0], this)
  };
  r.prototype[Symbol.iterator] = r.prototype.entries;
  var u = function (h, a) {
      var b = a && typeof a;
      "object" == b || "function" == b ? g.has(a) ? b = g.get(a) :
        (b = "" + ++G, g.set(a, b)) : b = "p_" + a;
      var c = h.data_[b];
      if (c && $jscomp.owns(h.data_, b))
        for (h = 0; h < c.length; h++) {
          var d = c[h];
          if (a !== a && d.key !== d.key || a === d.key) return {
            id: b,
            list: c,
            index: h,
            entry: d
          }
        }
      return {
        id: b,
        list: c,
        index: -1,
        entry: void 0
      }
    },
    q = function (h, a) {
      var b = h.head_;
      return $jscomp.iteratorPrototype(function () {
        if (b) {
          for (; b.head != h.head_;) b = b.previous;
          for (; b.next != b.head;) return b = b.next, {
            done: !1,
            value: a(b)
          };
          b = null
        }
        return {
          done: !0,
          value: void 0
        }
      })
    },
    y = function () {
      var h = {};
      return h.previous = h.next = h.head = h
    },
    G = 0;
  return r
}, "es6", "es3");
$jscomp.findInternal = function (m, t, g) {
  m instanceof String && (m = String(m));
  for (var r = m.length, u = 0; u < r; u++) {
    var q = m[u];
    if (t.call(g, q, u, m)) return {
      i: u,
      v: q
    }
  }
  return {
    i: -1,
    v: void 0
  }
};
$jscomp.polyfill("Array.prototype.find", function (m) {
  return m ? m : function (t, g) {
    return $jscomp.findInternal(this, t, g).v
  }
}, "es6", "es3");
$jscomp.iteratorFromArray = function (m, t) {
  m instanceof String && (m += "");
  var g = 0,
    r = {
      next: function () {
        if (g < m.length) {
          var u = g++;
          return {
            value: t(u, m[u]),
            done: !1
          }
        }
        r.next = function () {
          return {
            done: !0,
            value: void 0
          }
        };
        return r.next()
      }
    };
  r[Symbol.iterator] = function () {
    return r
  };
  return r
};
$jscomp.polyfill("Array.prototype.keys", function (m) {
  return m ? m : function () {
    return $jscomp.iteratorFromArray(this, function (t) {
      return t
    })
  }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.findIndex", function (m) {
  return m ? m : function (t, g) {
    return $jscomp.findInternal(this, t, g).i
  }
}, "es6", "es3");
(function () {
  function m(h) {
    g = h;
    r = h.fn.dataTable
  }

  function t(h) {
    q = h;
    y = h.fn.dataTable
  }
  var g, r, u = function () {
      function h(a, b, c, d, e, k) {
        var f = this;
        void 0 === k && (k = null);
        if (!r || !r.versionCheck || !r.versionCheck("1.10.0")) throw Error("SearchPane requires DataTables 1.10 or newer");
        if (!r.select) throw Error("SearchPane requires Select");
        a = new r.Api(a);
        this.classes = g.extend(!0, {}, h.classes);
        this.c = g.extend(!0, {}, h.defaults, b);
        this.customPaneSettings = k;
        this.s = {
          cascadeRegen: !1,
          clearing: !1,
          colOpts: [],
          deselect: !1,
          displayed: !1,
          dt: a,
          dtPane: void 0,
          filteringActive: !1,
          index: c,
          indexes: [],
          lastCascade: !1,
          lastSelect: !1,
          listSet: !1,
          name: void 0,
          redraw: !1,
          rowData: {
            arrayFilter: [],
            arrayOriginal: [],
            arrayTotals: [],
            bins: {},
            binsOriginal: {},
            binsTotal: {},
            filterMap: new Map,
            totalOptions: 0
          },
          scrollTop: 0,
          searchFunction: void 0,
          selectPresent: !1,
          serverSelect: [],
          serverSelecting: !1,
          showFiltered: !1,
          tableLength: null,
          updating: !1
        };
        b = a.columns().eq(0).toArray().length;
        this.colExists = this.s.index < b;
        this.c.layout = d;
        b = parseInt(d.split("-")[1], 10);
        this.dom = {
          buttonGroup: g("<div/>").addClass(this.classes.buttonGroup),
          clear: g('<button type="button">&#215;</button>').addClass(this.classes.dull).addClass(this.classes.paneButton).addClass(this.classes.clearButton),
          container: g("<div/>").addClass(this.classes.container).addClass(this.classes.layout + (10 > b ? d : d.split("-")[0] + "-9")),
          countButton: g('<button type="button"></button>').addClass(this.classes.paneButton).addClass(this.classes.countButton),
          dtP: g("<table><thead><tr><th>" + (this.colExists ? g(a.column(this.colExists ?
            this.s.index : 0).header()).text() : this.customPaneSettings.header || "Custom Pane") + "</th><th/></tr></thead></table>"),
          lower: g("<div/>").addClass(this.classes.subRow2).addClass(this.classes.narrowButton),
          nameButton: g('<button type="button"></button>').addClass(this.classes.paneButton).addClass(this.classes.nameButton),
          panesContainer: e,
          searchBox: g("<input/>").addClass(this.classes.paneInputButton).addClass(this.classes.search),
          searchButton: g('<button type = "button" class="' + this.classes.searchIcon + '"></button>').addClass(this.classes.paneButton),
          searchCont: g("<div/>").addClass(this.classes.searchCont),
          searchLabelCont: g("<div/>").addClass(this.classes.searchLabelCont),
          topRow: g("<div/>").addClass(this.classes.topRow),
          upper: g("<div/>").addClass(this.classes.subRow1).addClass(this.classes.narrowSearch)
        };
        this.s.displayed = !1;
        a = this.s.dt;
        this.selections = [];
        this.s.colOpts = this.colExists ? this._getOptions() : this._getBonusOptions();
        var l = this.s.colOpts;
        d = g('<button type="button">X</button>').addClass(this.classes.paneButton);
        g(d).text(a.i18n("searchPanes.clearPane",
          "X"));
        this.dom.container.addClass(l.className);
        this.dom.container.addClass(null !== this.customPaneSettings && void 0 !== this.customPaneSettings.className ? this.customPaneSettings.className : "");
        this.s.name = void 0 !== this.s.colOpts.name ? this.s.colOpts.name : null !== this.customPaneSettings && void 0 !== this.customPaneSettings.name ? this.customPaneSettings.name : this.colExists ? g(a.column(this.s.index).header()).text() : this.customPaneSettings.header || "Custom Pane";
        g(e).append(this.dom.container);
        var p = a.table(0).node();
        this.s.searchFunction = function (n, w, z, x) {
          if (0 === f.selections.length || n.nTable !== p) return !0;
          n = null;
          f.colExists && (n = w[f.s.index], "filter" !== l.orthogonal.filter && (n = f.s.rowData.filterMap.get(z), n instanceof g.fn.dataTable.Api && (n = n.toArray())));
          return f._search(n, z)
        };
        g.fn.dataTable.ext.search.push(this.s.searchFunction);
        if (this.c.clear) g(d).on("click", function () {
          f.dom.container.find(f.classes.search).each(function () {
            g(this).val("");
            g(this).trigger("input")
          });
          f.clearPane()
        });
        a.on("draw.dtsp", function () {
          f._adjustTopRow()
        });
        a.on("buttons-action", function () {
          f._adjustTopRow()
        });
        g(window).on("resize.dtsp", r.util.throttle(function () {
          f._adjustTopRow()
        }));
        a.on("column-reorder.dtsp", function (n, w, z) {
          f.s.index = z.mapping[f.s.index]
        });
        return this
      }
      h.prototype.clearData = function () {
        this.s.rowData = {
          arrayFilter: [],
          arrayOriginal: [],
          arrayTotals: [],
          bins: {},
          binsOriginal: {},
          binsTotal: {},
          filterMap: new Map,
          totalOptions: 0
        }
      };
      h.prototype.clearPane = function () {
        this.s.dtPane.rows({
          selected: !0
        }).deselect();
        this.updateTable();
        return this
      };
      h.prototype.destroy =
        function () {
          g(this.s.dtPane).off(".dtsp");
          g(this.s.dt).off(".dtsp");
          g(this.dom.nameButton).off(".dtsp");
          g(this.dom.countButton).off(".dtsp");
          g(this.dom.clear).off(".dtsp");
          g(this.dom.searchButton).off(".dtsp");
          g(this.dom.container).remove();
          for (var a = g.fn.dataTable.ext.search.indexOf(this.s.searchFunction); - 1 !== a;) g.fn.dataTable.ext.search.splice(a, 1), a = g.fn.dataTable.ext.search.indexOf(this.s.searchFunction);
          void 0 !== this.s.dtPane && this.s.dtPane.destroy();
          this.s.listSet = !1
        };
      h.prototype.getPaneCount =
        function () {
          return void 0 !== this.s.dtPane ? this.s.dtPane.rows({
            selected: !0
          }).data().toArray().length : 0
        };
      h.prototype.rebuildPane = function (a, b, c, d) {
        void 0 === a && (a = !1);
        void 0 === b && (b = null);
        void 0 === c && (c = null);
        void 0 === d && (d = !1);
        this.clearData();
        var e = [];
        this.s.serverSelect = [];
        var k = null;
        void 0 !== this.s.dtPane && (d && (this.s.dt.page.info().serverSide ? this.s.serverSelect = this.s.dtPane.rows({
            selected: !0
          }).data().toArray() : e = this.s.dtPane.rows({
            selected: !0
          }).data().toArray()), this.s.dtPane.clear().destroy(),
          k = g(this.dom.container).prev(), this.destroy(), this.s.dtPane = void 0, g.fn.dataTable.ext.search.push(this.s.searchFunction));
        this.dom.container.removeClass(this.classes.hidden);
        this.s.displayed = !1;
        this._buildPane(this.s.dt.page.info().serverSide ? this.s.serverSelect : e, a, b, c, k);
        return this
      };
      h.prototype.removePane = function () {
        this.s.displayed = !1;
        g(this.dom.container).hide()
      };
      h.prototype.setCascadeRegen = function (a) {
        this.s.cascadeRegen = a
      };
      h.prototype.setClear = function (a) {
        this.s.clearing = a
      };
      h.prototype.updatePane =
        function (a) {
          void 0 === a && (a = !1);
          this.s.updating = !0;
          this._updateCommon(a);
          this.s.updating = !1
        };
      h.prototype.updateTable = function () {
        this.selections = this.s.dtPane.rows({
          selected: !0
        }).data().toArray();
        this._searchExtras();
        (this.c.cascadePanes || this.c.viewTotal) && this.updatePane()
      };
      h.prototype._setListeners = function () {
        var a = this,
          b = this.s.rowData,
          c;
        this.s.dtPane.on("select.dtsp", function () {
          clearTimeout(c);
          a.s.dt.page.info().serverSide && !a.s.updating ? a.s.serverSelecting || (a.s.serverSelect = a.s.dtPane.rows({
              selected: !0
            }).data().toArray(),
            a.s.scrollTop = g(a.s.dtPane.table().node()).parent()[0].scrollTop, a.s.selectPresent = !0, a.s.dt.draw(!1)) : (g(a.dom.clear).removeClass(a.classes.dull), a.s.selectPresent = !0, a.s.updating || a._makeSelection(), a.s.selectPresent = !1)
        });
        this.s.dtPane.on("deselect.dtsp", function () {
          c = setTimeout(function () {
            a.s.dt.page.info().serverSide && !a.s.updating ? a.s.serverSelecting || (a.s.serverSelect = a.s.dtPane.rows({
              selected: !0
            }).data().toArray(), a.s.deselect = !0, a.s.dt.draw(!1)) : (a.s.deselect = !0, 0 === a.s.dtPane.rows({
                selected: !0
              }).data().toArray().length &&
              g(a.dom.clear).addClass(a.classes.dull), a._makeSelection(), a.s.deselect = !1, a.s.dt.state.save())
          }, 50)
        });
        this.s.dt.on("stateSaveParams.dtsp", function (d, e, k) {
          if (g.isEmptyObject(k)) a.s.dtPane.state.clear();
          else {
            d = [];
            if (void 0 !== a.s.dtPane) {
              d = a.s.dtPane.rows({
                selected: !0
              }).data().map(function (w) {
                return w.filter.toString()
              }).toArray();
              var f = g(a.dom.searchBox).val();
              var l = a.s.dtPane.order();
              var p = b.binsOriginal;
              var n = b.arrayOriginal
            }
            void 0 === k.searchPanes && (k.searchPanes = {});
            void 0 === k.searchPanes.panes &&
              (k.searchPanes.panes = []);
            k.searchPanes.panes.push({
              arrayFilter: n,
              bins: p,
              id: a.s.index,
              order: l,
              searchTerm: f,
              selected: d
            })
          }
        });
        this.s.dtPane.on("user-select.dtsp", function (d, e, k, f, l) {
          l.stopPropagation()
        });
        this.s.dtPane.on("draw.dtsp", function () {
          a._adjustTopRow()
        });
        g(this.dom.nameButton).on("click.dtsp", function () {
          var d = a.s.dtPane.order()[0][1];
          a.s.dtPane.order([0, "asc" === d ? "desc" : "asc"]).draw();
          a.s.dt.state.save()
        });
        g(this.dom.countButton).on("click.dtsp", function () {
          var d = a.s.dtPane.order()[0][1];
          a.s.dtPane.order([1,
            "asc" === d ? "desc" : "asc"
          ]).draw();
          a.s.dt.state.save()
        });
        g(this.dom.clear).on("click.dtsp", function () {
          a.dom.container.find("." + a.classes.search).each(function () {
            g(this).val("");
            g(this).trigger("input")
          });
          a.clearPane()
        });
        g(this.dom.searchButton).on("click.dtsp", function () {
          g(a.dom.searchBox).focus()
        });
        g(this.dom.searchBox).on("input.dtsp", function () {
          a.s.dtPane.search(g(a.dom.searchBox).val()).draw();
          a.s.dt.state.save()
        });
        this.s.dt.state.save();
        return !0
      };
      h.prototype._addOption = function (a, b, c, d, e, k) {
        if (Array.isArray(a) ||
          a instanceof r.Api)
          if (a instanceof r.Api && (a = a.toArray(), b = b.toArray()), a.length === b.length)
            for (var f = 0; f < a.length; f++) k[a[f]] ? k[a[f]]++ : (k[a[f]] = 1, e.push({
              display: b[f],
              filter: a[f],
              sort: c[f],
              type: d[f]
            })), this.s.rowData.totalOptions++;
          else throw Error("display and filter not the same length");
        else "string" === typeof this.s.colOpts.orthogonal ? (k[a] ? k[a]++ : (k[a] = 1, e.push({
          display: b,
          filter: a,
          sort: c,
          type: d
        })), this.s.rowData.totalOptions++) : e.push({
          display: b,
          filter: a,
          sort: c,
          type: d
        })
      };
      h.prototype._addRow =
        function (a, b, c, d, e, k, f) {
          for (var l, p = 0, n = this.s.indexes; p < n.length; p++) {
            var w = n[p];
            w.filter === b && (l = w.index)
          }
          void 0 === l && (l = this.s.indexes.length, this.s.indexes.push({
            filter: b,
            index: l
          }));
          return this.s.dtPane.row.add({
            className: f,
            display: "" !== a ? a : !1 !== this.s.colOpts.emptyMessage ? this.s.colOpts.emptyMessage : this.c.emptyMessage,
            filter: b,
            index: l,
            shown: c,
            sort: "" !== e ? e : !1 !== this.s.colOpts.emptyMessage ? this.s.colOpts.emptyMessage : this.c.emptyMessage,
            total: d,
            type: k
          })
        };
      h.prototype._adjustTopRow = function () {
        var a =
          this.dom.container.find("." + this.classes.subRowsContainer),
          b = this.dom.container.find(".dtsp-subRow1"),
          c = this.dom.container.find(".dtsp-subRow2"),
          d = this.dom.container.find("." + this.classes.topRow);
        (252 > g(a[0]).width() || 252 > g(d[0]).width()) && 0 !== g(a[0]).width() ? (g(a[0]).addClass(this.classes.narrow), g(b[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowSearch), g(c[0]).addClass(this.classes.narrowSub).removeClass(this.classes.narrowButton)) : (g(a[0]).removeClass(this.classes.narrow),
          g(b[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowSearch), g(c[0]).removeClass(this.classes.narrowSub).addClass(this.classes.narrowButton))
      };
      h.prototype._buildPane = function (a, b, c, d, e) {
        var k = this;
        void 0 === a && (a = []);
        void 0 === b && (b = !1);
        void 0 === c && (c = null);
        void 0 === d && (d = null);
        void 0 === e && (e = null);
        this.selections = [];
        var f = this.s.dt,
          l = f.column(this.colExists ? this.s.index : 0),
          p = this.s.colOpts,
          n = this.s.rowData,
          w = f.i18n("searchPanes.count", "{total}"),
          z = f.i18n("searchPanes.countFiltered",
            "{shown} ({total})"),
          x = f.state.loaded();
        this.s.listSet && (x = f.state());
        if (this.colExists) {
          var A = -1;
          if (x && x.searchPanes && x.searchPanes.panes)
            for (var v = 0; v < x.searchPanes.panes.length; v++)
              if (x.searchPanes.panes[v].id === this.s.index) {
                A = v;
                break
              } if ((!1 === p.show || void 0 !== p.show && !0 !== p.show) && -1 === A) return this.dom.container.addClass(this.classes.hidden), this.s.displayed = !1;
          if (!0 === p.show || -1 !== A) this.s.displayed = !0;
          if (!this.s.dt.page.info().serverSide && null === c) {
            if (0 === n.arrayFilter.length)
              if (this._populatePane(b),
                this.s.rowData.totalOptions = 0, this._detailsPane(), x && x.searchPanes && x.searchPanes.panes)
                if (-1 !== A) n.binsOriginal = x.searchPanes.panes[A].bins, n.arrayOriginal = x.searchPanes.panes[A].arrayFilter;
                else {
                  this.dom.container.addClass(this.classes.hidden);
                  this.s.displayed = !1;
                  return
                }
            else n.arrayOriginal = n.arrayTotals, n.binsOriginal = n.binsTotal;
            v = Object.keys(n.binsOriginal).length;
            c = this._uniqueRatio(v, f.rows()[0].length);
            if (!1 === this.s.displayed && ((void 0 === p.show && null === p.threshold ? c > this.c.threshold : c > p.threshold) ||
                !0 !== p.show && 1 >= v)) {
              this.dom.container.addClass(this.classes.hidden);
              this.s.displayed = !1;
              return
            }
            this.c.viewTotal && 0 === n.arrayTotals.length ? (this.s.rowData.totalOptions = 0, this._detailsPane()) : n.binsTotal = n.bins;
            this.dom.container.addClass(this.classes.show);
            this.s.displayed = !0
          } else if (null !== c) {
            if (void 0 !== c.tableLength) this.s.tableLength = c.tableLength, this.s.rowData.totalOptions = this.s.tableLength;
            else if (null === this.s.tableLength || f.rows()[0].length > this.s.tableLength) this.s.tableLength = f.rows()[0].length,
              this.s.rowData.totalOptions = this.s.tableLength;
            b = f.column(this.s.index).dataSrc();
            if (void 0 !== c[b])
              for (v = 0, c = c[b]; v < c.length; v++) b = c[v], this.s.rowData.arrayFilter.push({
                display: b.label,
                filter: b.value,
                sort: b.label,
                type: b.label
              }), this.s.rowData.bins[b.value] = this.c.viewTotal || this.c.cascadePanes ? b.count : b.total, this.s.rowData.binsTotal[b.value] = b.total;
            v = Object.keys(n.binsTotal).length;
            c = this._uniqueRatio(v, this.s.tableLength);
            if (!1 === this.s.displayed && ((void 0 === p.show && null === p.threshold ? c > this.c.threshold :
                c > p.threshold) || !0 !== p.show && 1 >= v)) {
              this.dom.container.addClass(this.classes.hidden);
              this.s.displayed = !1;
              return
            }
            this.s.rowData.arrayOriginal = this.s.rowData.arrayFilter;
            this.s.rowData.binsOriginal = this.s.rowData.bins;
            this.s.displayed = !0
          }
        } else this.s.displayed = !0;
        this._displayPane();
        if (!this.s.listSet) this.dom.dtP.on("stateLoadParams.dt", function (E, F, D) {
          g.isEmptyObject(f.state.loaded()) && g.each(D, function (B, H) {
            delete D[B]
          })
        });
        null !== e && 0 < g(this.dom.panesContainer).has(e).length ? g(this.dom.container).insertAfter(e) :
          g(this.dom.panesContainer).prepend(this.dom.container);
        v = g.fn.dataTable.ext.errMode;
        g.fn.dataTable.ext.errMode = "none";
        e = r.Scroller;
        this.s.dtPane = g(this.dom.dtP).DataTable(g.extend(!0, {
            columnDefs: [{
              className: "dtsp-nameColumn",
              data: "display",
              render: function (E, F, D) {
                if ("sort" === F) return D.sort;
                if ("type" === F) return D.type;
                var B;
                (k.s.filteringActive || k.s.showFiltered) && k.c.viewTotal ? B = z.replace(/{total}/, D.total) : B = w.replace(/{total}/, D.total);
                for (B = B.replace(/{shown}/, D.shown); - 1 !== B.indexOf("{total}");) B =
                  B.replace(/{total}/, D.total);
                for (; - 1 !== B.indexOf("{shown}");) B = B.replace(/{shown}/, D.shown);
                F = '<span class="' + k.classes.pill + '">' + B + "</span>";
                if (k.c.hideCount || p.hideCount) F = "";
                return '<div class="' + k.classes.nameCont + '"><span title="' + ("string" === typeof E && null !== E.match(/<[^>]*>/) ? E.replace(/<[^>]*>/g, "") : E) + '" class="' + k.classes.name + '">' + E + "</span>" + F + "</div>"
              },
              targets: 0,
              type: void 0 !== f.settings()[0].aoColumns[this.s.index] ? f.settings()[0].aoColumns[this.s.index]._sManualType : null
            }, {
              className: "dtsp-countColumn " +
                this.classes.badgePill,
              data: "shown",
              orderData: [1, 2],
              targets: 1,
              visible: !1
            }, {
              data: "total",
              targets: 2,
              visible: !1
            }],
            deferRender: !0,
            dom: "t",
            info: !1,
            language: this.s.dt.settings()[0].oLanguage,
            paging: e ? !0 : !1,
            scrollX: !1,
            scrollY: "200px",
            scroller: e ? !0 : !1,
            select: !0,
            stateSave: f.settings()[0].oFeatures.bStateSave ? !0 : !1
          }, this.c.dtOpts, void 0 !== p ? p.dtOpts : {}, void 0 === this.s.colOpts.options && this.colExists ? void 0 : {
            createdRow: function (E, F, D) {
              g(E).addClass(F.className)
            }
          }, null !== this.customPaneSettings && void 0 !== this.customPaneSettings.dtOpts ?
          this.customPaneSettings.dtOpts : {}));
        g(this.dom.dtP).addClass(this.classes.table);
        g(this.dom.searchBox).attr("placeholder", void 0 !== p.header ? p.header : this.colExists ? f.settings()[0].aoColumns[this.s.index].sTitle : this.customPaneSettings.header || "Custom Pane");
        g.fn.dataTable.select.init(this.s.dtPane);
        g.fn.dataTable.ext.errMode = v;
        if (this.colExists) {
          l = (l = l.search()) ? l.substr(1, l.length - 2).split("|") : [];
          var C = 0;
          n.arrayFilter.forEach(function (E) {
            "" === E.filter && C++
          });
          v = 0;
          for (e = n.arrayFilter.length; v < e; v++) {
            l = !1;
            b = 0;
            for (A = this.s.serverSelect; b < A.length; b++) c = A[b], c.filter === n.arrayFilter[v].filter && (l = !0);
            if (this.s.dt.page.info().serverSide && (!this.c.cascadePanes || this.c.cascadePanes && 0 !== n.bins[n.arrayFilter[v].filter] || this.c.cascadePanes && null !== d || l))
              for (l = this._addRow(n.arrayFilter[v].display, n.arrayFilter[v].filter, d ? n.binsTotal[n.arrayFilter[v].filter] : n.bins[n.arrayFilter[v].filter], this.c.viewTotal || d ? String(n.binsTotal[n.arrayFilter[v].filter]) : n.bins[n.arrayFilter[v].filter], n.arrayFilter[v].sort,
                  n.arrayFilter[v].type), b = 0, A = this.s.serverSelect; b < A.length; b++) c = A[b], c.filter === n.arrayFilter[v].filter && (this.s.serverSelecting = !0, l.select(), this.s.serverSelecting = !1);
            else this.s.dt.page.info().serverSide || !n.arrayFilter[v] || void 0 === n.bins[n.arrayFilter[v].filter] && this.c.cascadePanes ? this.s.dt.page.info().serverSide || this._addRow("", C, C, "", "", "") : this._addRow(n.arrayFilter[v].display, n.arrayFilter[v].filter, n.bins[n.arrayFilter[v].filter], n.binsTotal[n.arrayFilter[v].filter], n.arrayFilter[v].sort,
              n.arrayFilter[v].type)
          }
        }
        r.select.init(this.s.dtPane);
        (void 0 !== p.options || null !== this.customPaneSettings && void 0 !== this.customPaneSettings.options) && this._getComparisonRows();
        this.s.dtPane.draw();
        this._adjustTopRow();
        this.s.listSet || (this._setListeners(), this.s.listSet = !0);
        for (d = 0; d < a.length; d++)
          if (n = a[d], void 0 !== n)
            for (v = 0, e = this.s.dtPane.rows().indexes().toArray(); v < e.length; v++) l = e[v], void 0 !== this.s.dtPane.row(l).data() && n.filter === this.s.dtPane.row(l).data().filter && (this.s.dt.page.info().serverSide ?
              (this.s.serverSelecting = !0, this.s.dtPane.row(l).select(), this.s.serverSelecting = !1) : this.s.dtPane.row(l).select());
        this.s.dt.page.info().serverSide && this.s.dtPane.search(g(this.dom.searchBox).val()).draw();
        if (x && x.searchPanes && x.searchPanes.panes)
          for (this.c.cascadePanes || this._reloadSelect(x), a = 0, x = x.searchPanes.panes; a < x.length; a++) d = x[a], d.id === this.s.index && (g(this.dom.searchBox).val(d.searchTerm), g(this.dom.searchBox).trigger("input"), this.s.dtPane.order(d.order).draw());
        this.s.dt.state.save();
        return !0
      };
      h.prototype._detailsPane = function () {
        var a = this.s.dt;
        this.s.rowData.arrayTotals = [];
        this.s.rowData.binsTotal = {};
        var b = this.s.dt.settings()[0];
        a = a.rows().indexes();
        if (!this.s.dt.page.info().serverSide)
          for (var c = 0; c < a.length; c++) this._populatePaneArray(a[c], this.s.rowData.arrayTotals, b, this.s.rowData.binsTotal)
      };
      h.prototype._displayPane = function () {
        var a = this.dom.container,
          b = this.s.colOpts,
          c = parseInt(this.c.layout.split("-")[1], 10);
        g(this.dom.topRow).empty();
        g(this.dom.dtP).empty();
        g(this.dom.topRow).addClass(this.classes.topRow);
        3 < c && g(this.dom.container).addClass(this.classes.smallGap);
        g(this.dom.topRow).addClass(this.classes.subRowsContainer);
        g(this.dom.upper).appendTo(this.dom.topRow);
        g(this.dom.lower).appendTo(this.dom.topRow);
        g(this.dom.searchCont).appendTo(this.dom.upper);
        g(this.dom.buttonGroup).appendTo(this.dom.lower);
        (!1 === this.c.dtOpts.searching || void 0 !== b.dtOpts && !1 === b.dtOpts.searching || !this.c.controls || !b.controls || null !== this.customPaneSettings && void 0 !== this.customPaneSettings.dtOpts && void 0 !== this.customPaneSettings.dtOpts.searching &&
          !this.customPaneSettings.dtOpts.searching) && g(this.dom.searchBox).attr("disabled", "disabled").removeClass(this.classes.paneInputButton).addClass(this.classes.disabledButton);
        g(this.dom.searchBox).appendTo(this.dom.searchCont);
        this._searchContSetup();
        this.c.clear && this.c.controls && b.controls && g(this.dom.clear).appendTo(this.dom.buttonGroup);
        this.c.orderable && b.orderable && this.c.controls && b.controls && g(this.dom.nameButton).appendTo(this.dom.buttonGroup);
        !this.c.hideCount && !b.hideCount && this.c.orderable &&
          b.orderable && this.c.controls && b.controls && g(this.dom.countButton).appendTo(this.dom.buttonGroup);
        g(this.dom.topRow).prependTo(this.dom.container);
        g(a).append(this.dom.dtP);
        g(a).show()
      };
      h.prototype._getBonusOptions = function () {
        return g.extend(!0, {}, h.defaults, {
          orthogonal: {
            threshold: null
          },
          threshold: null
        }, void 0 !== this.c ? this.c : {})
      };
      h.prototype._getComparisonRows = function () {
        var a = this.s.colOpts;
        a = void 0 !== a.options ? a.options : null !== this.customPaneSettings && void 0 !== this.customPaneSettings.options ? this.customPaneSettings.options :
          void 0;
        if (void 0 !== a) {
          var b = this.s.dt.rows({
              search: "applied"
            }).data().toArray(),
            c = this.s.dt.rows({
              search: "applied"
            }),
            d = this.s.dt.rows().data().toArray(),
            e = this.s.dt.rows(),
            k = [];
          this.s.dtPane.clear();
          for (var f = 0; f < a.length; f++) {
            var l = a[f],
              p = "" !== l.label ? l.label : this.c.emptyMessage,
              n = l.className,
              w = p,
              z = "function" === typeof l.value ? l.value : [],
              x = 0,
              A = p,
              v = 0;
            if ("function" === typeof l.value) {
              for (var C = 0; C < b.length; C++) l.value.call(this.s.dt, b[C], c[0][C]) && x++;
              for (C = 0; C < d.length; C++) l.value.call(this.s.dt, d[C],
                e[0][C]) && v++;
              "function" !== typeof z && z.push(l.filter)
            }(!this.c.cascadePanes || this.c.cascadePanes && 0 !== x) && k.push(this._addRow(w, z, x, v, A, p, n))
          }
          return k
        }
      };
      h.prototype._getOptions = function () {
        return g.extend(!0, {}, h.defaults, {
          emptyMessage: !1,
          orthogonal: {
            threshold: null
          },
          threshold: null
        }, this.s.dt.settings()[0].aoColumns[this.s.index].searchPanes)
      };
      h.prototype._makeSelection = function () {
        this.updateTable();
        this.s.updating = !0;
        this.s.dt.draw();
        this.s.updating = !1
      };
      h.prototype._populatePane = function (a) {
        void 0 ===
          a && (a = !1);
        var b = this.s.dt;
        this.s.rowData.arrayFilter = [];
        this.s.rowData.bins = {};
        var c = this.s.dt.settings()[0];
        if (!this.s.dt.page.info().serverSide) {
          var d = 0;
          for (a = (!this.c.cascadePanes && !this.c.viewTotal || this.s.clearing || a ? b.rows().indexes() : b.rows({
              search: "applied"
            }).indexes()).toArray(); d < a.length; d++) this._populatePaneArray(a[d], this.s.rowData.arrayFilter, c)
        }
      };
      h.prototype._populatePaneArray = function (a, b, c, d) {
        void 0 === d && (d = this.s.rowData.bins);
        var e = this.s.colOpts;
        if ("string" === typeof e.orthogonal) c =
          c.oApi._fnGetCellData(c, a, this.s.index, e.orthogonal), this.s.rowData.filterMap.set(a, c), this._addOption(c, c, c, c, b, d);
        else {
          var k = c.oApi._fnGetCellData(c, a, this.s.index, e.orthogonal.search);
          "string" === typeof k && (k = k.replace(/<[^>]*>/g, ""));
          this.s.rowData.filterMap.set(a, k);
          d[k] ? d[k]++ : (d[k] = 1, this._addOption(k, c.oApi._fnGetCellData(c, a, this.s.index, e.orthogonal.display), c.oApi._fnGetCellData(c, a, this.s.index, e.orthogonal.sort), c.oApi._fnGetCellData(c, a, this.s.index, e.orthogonal.type), b, d));
          this.s.rowData.totalOptions++
        }
      };
      h.prototype._reloadSelect = function (a) {
        if (void 0 !== a) {
          for (var b, c = 0; c < a.searchPanes.panes.length; c++)
            if (a.searchPanes.panes[c].id === this.s.index) {
              b = c;
              break
            } if (void 0 !== b) {
            c = this.s.dtPane;
            var d = c.rows({
                order: "index"
              }).data().map(function (f) {
                return null !== f.filter ? f.filter.toString() : null
              }).toArray(),
              e = 0;
            for (a = a.searchPanes.panes[b].selected; e < a.length; e++) {
              b = a[e];
              var k = -1;
              null !== b && (k = d.indexOf(b.toString())); - 1 < k && (c.row(k).select(), this.s.dt.state.save())
            }
          }
        }
      };
      h.prototype._search = function (a, b) {
        for (var c =
            this.s.colOpts, d = this.s.dt, e = 0, k = this.selections; e < k.length; e++) {
          var f = k[e];
          if (Array.isArray(a)) {
            if (-1 !== a.indexOf(f.filter)) return !0
          } else if ("function" === typeof f.filter)
            if (f.filter.call(d, d.row(b).data(), b)) {
              if ("or" === c.combiner) return !0
            } else {
              if ("and" === c.combiner) return !1
            }
          else if (a === f.filter || ("string" !== typeof a || 0 !== a.length) && a == f.filter || null === f.filter && "string" === typeof a && "" === a) return !0
        }
        return "and" === c.combiner ? !0 : !1
      };
      h.prototype._searchContSetup = function () {
        this.c.controls && this.s.colOpts.controls &&
          g(this.dom.searchButton).appendTo(this.dom.searchLabelCont);
        !1 === this.c.dtOpts.searching || !1 === this.s.colOpts.dtOpts.searching || null !== this.customPaneSettings && void 0 !== this.customPaneSettings.dtOpts && void 0 !== this.customPaneSettings.dtOpts.searching && !this.customPaneSettings.dtOpts.searching || g(this.dom.searchLabelCont).appendTo(this.dom.searchCont)
      };
      h.prototype._searchExtras = function () {
        var a = this.s.updating;
        this.s.updating = !0;
        var b = this.s.dtPane.rows({
            selected: !0
          }).data().pluck("filter").toArray(),
          c = b.indexOf(!1 !== this.s.colOpts.emptyMessage ? this.s.colOpts.emptyMessage : this.c.emptyMessage),
          d = g(this.s.dtPane.table().container()); - 1 < c && (b[c] = "");
        0 < b.length ? d.addClass(this.classes.selected) : 0 === b.length && d.removeClass(this.classes.selected);
        this.s.updating = a
      };
      h.prototype._uniqueRatio = function (a, b) {
        return 0 < b && (0 < this.s.rowData.totalOptions && !this.s.dt.page.info().serverSide || this.s.dt.page.info().serverSide && 0 < this.s.tableLength) ? a / this.s.rowData.totalOptions : 1
      };
      h.prototype._updateCommon = function (a) {
        void 0 ===
          a && (a = !1);
        if (!(this.s.dt.page.info().serverSide || void 0 === this.s.dtPane || this.s.filteringActive && !this.c.cascadePanes && !0 !== a || !0 === this.c.cascadePanes && !0 === this.s.selectPresent || this.s.lastSelect && this.s.lastCascade)) {
          var b = this.s.colOpts,
            c = this.s.dtPane.rows({
              selected: !0
            }).data().toArray();
          a = g(this.s.dtPane.table().node()).parent()[0].scrollTop;
          var d = this.s.rowData;
          this.s.dtPane.clear();
          if (this.colExists) {
            0 === d.arrayFilter.length ? this._populatePane() : this.c.cascadePanes && this.s.dt.rows().data().toArray().length ===
              this.s.dt.rows({
                search: "applied"
              }).data().toArray().length ? (d.arrayFilter = d.arrayOriginal, d.bins = d.binsOriginal) : (this.c.viewTotal || this.c.cascadePanes) && this._populatePane();
            this.c.viewTotal ? this._detailsPane() : d.binsTotal = d.bins;
            this.c.viewTotal && !this.c.cascadePanes && (d.arrayFilter = d.arrayTotals);
            for (var e = function (p) {
                if (p && (void 0 !== d.bins[p.filter] && 0 !== d.bins[p.filter] && k.c.cascadePanes || !k.c.cascadePanes || k.s.clearing)) {
                  var n = k._addRow(p.display, p.filter, k.c.viewTotal ? void 0 !== d.bins[p.filter] ?
                      d.bins[p.filter] : 0 : d.bins[p.filter], k.c.viewTotal ? String(d.binsTotal[p.filter]) : d.bins[p.filter], p.sort, p.type),
                    w = c.findIndex(function (z) {
                      return z.filter === p.filter
                    }); - 1 !== w && (n.select(), c.splice(w, 1))
                }
              }, k = this, f = 0, l = d.arrayFilter; f < l.length; f++) e(l[f])
          }
          if (void 0 !== b.searchPanes && void 0 !== b.searchPanes.options || void 0 !== b.options || null !== this.customPaneSettings && void 0 !== this.customPaneSettings.options)
            for (e = function (p) {
                var n = c.findIndex(function (w) {
                  if (w.display === p.data().display) return !0
                }); - 1 !==
                  n && (p.select(), c.splice(n, 1))
              }, f = 0, l = this._getComparisonRows(); f < l.length; f++) b = l[f], e(b);
          for (e = 0; e < c.length; e++) b = c[e], b = this._addRow(b.display, b.filter, 0, this.c.viewTotal ? b.total : 0, b.display, b.display), this.s.updating = !0, b.select(), this.s.updating = !1;
          this.s.dtPane.draw();
          this.s.dtPane.table().node().parentNode.scrollTop = a
        }
      };
      h.version = "1.1.0";
      h.classes = {
        buttonGroup: "dtsp-buttonGroup",
        buttonSub: "dtsp-buttonSub",
        clear: "dtsp-clear",
        clearAll: "dtsp-clearAll",
        clearButton: "clearButton",
        container: "dtsp-searchPane",
        countButton: "dtsp-countButton",
        disabledButton: "dtsp-disabledButton",
        dull: "dtsp-dull",
        hidden: "dtsp-hidden",
        hide: "dtsp-hide",
        layout: "dtsp-",
        name: "dtsp-name",
        nameButton: "dtsp-nameButton",
        nameCont: "dtsp-nameCont",
        narrow: "dtsp-narrow",
        paneButton: "dtsp-paneButton",
        paneInputButton: "dtsp-paneInputButton",
        pill: "dtsp-pill",
        search: "dtsp-search",
        searchCont: "dtsp-searchCont",
        searchIcon: "dtsp-searchIcon",
        searchLabelCont: "dtsp-searchButtonCont",
        selected: "dtsp-selected",
        smallGap: "dtsp-smallGap",
        subRow1: "dtsp-subRow1",
        subRow2: "dtsp-subRow2",
        subRowsContainer: "dtsp-subRowsContainer",
        title: "dtsp-title",
        topRow: "dtsp-topRow"
      };
      h.defaults = {
        cascadePanes: !1,
        clear: !0,
        combiner: "or",
        controls: !0,
        container: function (a) {
          return a.table().container()
        },
        dtOpts: {},
        emptyMessage: "<i>No Data</i>",
        hideCount: !1,
        layout: "columns-3",
        name: void 0,
        orderable: !0,
        orthogonal: {
          display: "display",
          filter: "filter",
          hideCount: !1,
          search: "filter",
          show: void 0,
          sort: "sort",
          threshold: .6,
          type: "type"
        },
        preSelect: [],
        threshold: .6,
        viewTotal: !1
      };
      return h
    }(),
    q, y, G = function () {
      function h(a,
        b, c) {
        var d = this;
        void 0 === c && (c = !1);
        this.regenerating = !1;
        if (!y || !y.versionCheck || !y.versionCheck("1.10.0")) throw Error("SearchPane requires DataTables 1.10 or newer");
        if (!y.select) throw Error("SearchPane requires Select");
        var e = new y.Api(a);
        this.classes = q.extend(!0, {}, h.classes);
        this.c = q.extend(!0, {}, h.defaults, b);
        this.dom = {
          clearAll: q('<button type="button">Clear All</button>').addClass(this.classes.clearAll),
          container: q("<div/>").addClass(this.classes.panes).text(e.i18n("searchPanes.loadMessage",
            "Loading Search Panes...")),
          emptyMessage: q("<div/>").addClass(this.classes.emptyMessage),
          options: q("<div/>").addClass(this.classes.container),
          panes: q("<div/>").addClass(this.classes.container),
          title: q("<div/>").addClass(this.classes.title),
          titleRow: q("<div/>").addClass(this.classes.titleRow),
          wrapper: q("<div/>")
        };
        this.s = {
          colOpts: [],
          dt: e,
          filterPane: -1,
          panes: [],
          selectionList: [],
          serverData: {},
          stateRead: !1,
          updating: !1
        };
        if (void 0 === e.settings()[0]._searchPanes) {
          e.on("xhr", function (k, f, l, p) {
            l.searchPanes &&
              l.searchPanes.options && (d.s.serverData = l.searchPanes.options, d.s.serverData.tableLength = l.recordsTotal, d._serverTotals())
          });
          e.settings()[0]._searchPanes = this;
          this.dom.clearAll.text(e.i18n("searchPanes.clearMessage", "Clear All"));
          this._getState();
          if (this.s.dt.settings()[0]._bInitComplete || c) this._paneDeclare(e, a, b);
          else e.one("preInit.dt", function (k) {
            d._paneDeclare(e, a, b)
          });
          return this
        }
      }
      h.prototype.clearSelections = function () {
        this.dom.container.find(this.classes.search).each(function () {
          q(this).val("");
          q(this).trigger("input")
        });
        for (var a = [], b = 0, c = this.s.panes; b < c.length; b++) {
          var d = c[b];
          void 0 !== d.s.dtPane && a.push(d.clearPane())
        }
        this.s.dt.draw();
        return a
      };
      h.prototype.getNode = function () {
        return this.dom.container
      };
      h.prototype.rebuild = function (a, b) {
        void 0 === a && (a = !1);
        void 0 === b && (b = !1);
        q(this.dom.emptyMessage).remove();
        var c = [];
        !1 === a && q(this.dom.panes).empty();
        for (var d = 0, e = this.s.panes; d < e.length; d++) {
          var k = e[d];
          if (!1 === a || k.s.index === a) k.clearData(), c.push(k.rebuildPane(void 0 !== this.s.selectionList[this.s.selectionList.length -
            1] ? k.s.index === this.s.selectionList[this.s.selectionList.length - 1].index : !1, this.s.dt.page.info().serverSide ? this.s.serverData : void 0, null, b)), q(this.dom.panes).append(k.dom.container)
        }
        this.s.dt.page.info().serverSide || this.s.dt.draw();
        this.c.cascadePanes || this.c.viewTotal ? this.redrawPanes(!0) : this._updateSelection();
        this._updateFilterCount();
        this._attachPaneContainer();
        this.s.dt.draw();
        return 1 === c.length ? c[0] : c
      };
      h.prototype.redrawPanes = function (a) {
        void 0 === a && (a = !1);
        var b = this.s.dt;
        if (!this.s.updating &&
          !this.s.dt.page.info().serverSide) {
          var c = !0,
            d = this.s.filterPane;
          if (b.rows({
              search: "applied"
            }).data().toArray().length === b.rows().data().toArray().length) c = !1;
          else if (this.c.viewTotal)
            for (var e = 0, k = this.s.panes; e < k.length; e++) {
              var f = k[e];
              if (void 0 !== f.s.dtPane) {
                var l = f.s.dtPane.rows({
                  selected: !0
                }).data().toArray().length;
                if (0 === l)
                  for (var p = 0, n = this.s.selectionList; p < n.length; p++) {
                    var w = n[p];
                    w.index === f.s.index && 0 !== w.rows.length && (l = w.rows.length)
                  }
                0 < l && -1 === d ? d = f.s.index : 0 < l && (d = null)
              }
            }
          k = void 0;
          e = [];
          if (this.regenerating) {
            k = -1;
            1 === e.length && (k = e[0].index);
            a = 0;
            for (e = this.s.panes; a < e.length; a++)
              if (f = e[a], void 0 !== f.s.dtPane) {
                b = !0;
                f.s.filteringActive = !0;
                if (-1 !== d && null !== d && d === f.s.index || !1 === c || f.s.index === k) b = !1, f.s.filteringActive = !1;
                f.updatePane(b ? c : b)
              } this._updateFilterCount()
          } else {
            l = 0;
            for (p = this.s.panes; l < p.length; l++)
              if (f = p[l], f.s.selectPresent) {
                this.s.selectionList.push({
                  index: f.s.index,
                  rows: f.s.dtPane.rows({
                    selected: !0
                  }).data().toArray(),
                  protect: !1
                });
                b.state.save();
                break
              } else f.s.deselect &&
                (k = f.s.index, n = f.s.dtPane.rows({
                  selected: !0
                }).data().toArray(), 0 < n.length && this.s.selectionList.push({
                  index: f.s.index,
                  rows: n,
                  protect: !0
                }));
            if (0 < this.s.selectionList.length)
              for (b = this.s.selectionList[this.s.selectionList.length - 1].index, l = 0, p = this.s.panes; l < p.length; l++) f = p[l], f.s.lastSelect = f.s.index === b;
            for (f = 0; f < this.s.selectionList.length; f++)
              if (this.s.selectionList[f].index !== k || !0 === this.s.selectionList[f].protect) {
                b = !1;
                for (l = f + 1; l < this.s.selectionList.length; l++) this.s.selectionList[l].index ===
                  this.s.selectionList[f].index && (b = !0);
                b || (e.push(this.s.selectionList[f]), this.s.selectionList[f].protect = !1)
              } k = -1;
            1 === e.length && (k = e[0].index);
            l = 0;
            for (p = this.s.panes; l < p.length; l++)
              if (f = p[l], void 0 !== f.s.dtPane) {
                b = !0;
                f.s.filteringActive = !0;
                if (-1 !== d && null !== d && d === f.s.index || !1 === c || f.s.index === k) b = !1, f.s.filteringActive = !1;
                f.updatePane(b ? c : !1)
              } this._updateFilterCount();
            if (0 < e.length && (e.length < this.s.selectionList.length || a))
              for (this._cascadeRegen(e), b = e[e.length - 1].index, d = 0, a = this.s.panes; d < a.length; d++) f =
                a[d], f.s.lastSelect = f.s.index === b;
            else if (0 < e.length)
              for (f = 0, a = this.s.panes; f < a.length; f++)
                if (e = a[f], void 0 !== e.s.dtPane) {
                  b = !0;
                  e.s.filteringActive = !0;
                  if (-1 !== d && null !== d && d === e.s.index || !1 === c) b = !1, e.s.filteringActive = !1;
                  e.updatePane(b ? c : b)
                }
          }
          c || (this.s.selectionList = [])
        }
      };
      h.prototype._attach = function () {
        var a = this;
        q(this.dom.container).removeClass(this.classes.hide);
        q(this.dom.titleRow).removeClass(this.classes.hide);
        q(this.dom.titleRow).remove();
        q(this.dom.title).appendTo(this.dom.titleRow);
        this.c.clear &&
          (q(this.dom.clearAll).appendTo(this.dom.titleRow), q(this.dom.clearAll).on("click.dtsps", function () {
            a.clearSelections()
          }));
        q(this.dom.titleRow).appendTo(this.dom.container);
        for (var b = 0, c = this.s.panes; b < c.length; b++) q(c[b].dom.container).appendTo(this.dom.panes);
        q(this.dom.panes).appendTo(this.dom.container);
        0 === q("div." + this.classes.container).length && q(this.dom.container).prependTo(this.s.dt);
        return this.dom.container
      };
      h.prototype._attachExtras = function () {
        q(this.dom.container).removeClass(this.classes.hide);
        q(this.dom.titleRow).removeClass(this.classes.hide);
        q(this.dom.titleRow).remove();
        q(this.dom.title).appendTo(this.dom.titleRow);
        this.c.clear && q(this.dom.clearAll).appendTo(this.dom.titleRow);
        q(this.dom.titleRow).appendTo(this.dom.container);
        return this.dom.container
      };
      h.prototype._attachMessage = function () {
        try {
          var a = this.s.dt.i18n("searchPanes.emptyPanes", "No SearchPanes")
        } catch (b) {
          a = null
        }
        if (null === a) q(this.dom.container).addClass(this.classes.hide), q(this.dom.titleRow).removeClass(this.classes.hide);
        else return q(this.dom.container).removeClass(this.classes.hide), q(this.dom.titleRow).addClass(this.classes.hide), q(this.dom.emptyMessage).text(a), this.dom.emptyMessage.appendTo(this.dom.container), this.dom.container
      };
      h.prototype._attachPaneContainer = function () {
        for (var a = 0, b = this.s.panes; a < b.length; a++)
          if (!0 === b[a].s.displayed) return this._attach();
        return this._attachMessage()
      };
      h.prototype._cascadeRegen = function (a) {
        this.regenerating = !0;
        var b = -1;
        1 === a.length && (b = a[0].index);
        for (var c = 0, d = this.s.panes; c <
          d.length; c++) {
          var e = d[c];
          e.setCascadeRegen(!0);
          e.setClear(!0);
          (void 0 !== e.s.dtPane && e.s.index === b || void 0 !== e.s.dtPane) && e.clearPane();
          e.setClear(!1)
        }
        this._makeCascadeSelections(a);
        this.s.selectionList = a;
        a = 0;
        for (b = this.s.panes; a < b.length; a++) e = b[a], e.setCascadeRegen(!1);
        this.regenerating = !1
      };
      h.prototype._checkMessage = function () {
        for (var a = 0, b = this.s.panes; a < b.length; a++)
          if (!0 === b[a].s.displayed) return;
        return this._attachMessage()
      };
      h.prototype._getState = function () {
        var a = this.s.dt.state.loaded();
        a &&
          a.searchPanes && void 0 !== a.searchPanes.selectionList && (this.s.selectionList = a.searchPanes.selectionList)
      };
      h.prototype._makeCascadeSelections = function (a) {
        for (var b = 0; b < a.length; b++)
          for (var c = function (f) {
              if (f.s.index === a[b].index && void 0 !== f.s.dtPane) {
                b === a.length - 1 && (f.s.lastCascade = !0);
                0 < f.s.dtPane.rows({
                  selected: !0
                }).data().toArray().length && void 0 !== f.s.dtPane && (f.setClear(!0), f.clearPane(), f.setClear(!1));
                for (var l = function (w) {
                    f.s.dtPane.rows().every(function (z) {
                      void 0 !== f.s.dtPane.row(z).data() &&
                        void 0 !== w && f.s.dtPane.row(z).data().filter === w.filter && f.s.dtPane.row(z).select()
                    })
                  }, p = 0, n = a[b].rows; p < n.length; p++) l(n[p]);
                d._updateFilterCount();
                f.s.lastCascade = !1
              }
            }, d = this, e = 0, k = this.s.panes; e < k.length; e++) c(k[e]);
        this.s.dt.state.save()
      };
      h.prototype._paneDeclare = function (a, b, c) {
        var d = this;
        a.columns(0 < this.c.columns.length ? this.c.columns : void 0).eq(0).each(function (l) {
          d.s.panes.push(new u(b, c, l, d.c.layout, d.dom.panes))
        });
        for (var e = a.columns().eq(0).toArray().length, k = this.c.panes.length, f = 0; f <
          k; f++) this.s.panes.push(new u(b, c, e + f, this.c.layout, this.dom.panes, this.c.panes[f]));
        if (0 < this.c.order.length)
          for (e = this.c.order.map(function (l, p, n) {
              return d._findPane(l)
            }), this.dom.panes.empty(), this.s.panes = e, e = 0, k = this.s.panes; e < k.length; e++) this.dom.panes.append(k[e].dom.container);
        this.s.dt.settings()[0]._bInitComplete ? this._startup(a) : this.s.dt.settings()[0].aoInitComplete.push({
          fn: function () {
            d._startup(a)
          }
        })
      };
      h.prototype._findPane = function (a) {
        for (var b = 0, c = this.s.panes; b < c.length; b++) {
          var d =
            c[b];
          if (a === d.s.name) return d
        }
      };
      h.prototype._serverTotals = function () {
        for (var a = !1, b = !1, c = this.s.dt, d = 0, e = this.s.panes; d < e.length; d++) {
          var k = e[d];
          if (k.s.selectPresent) {
            this.s.selectionList.push({
              index: k.s.index,
              rows: k.s.dtPane.rows({
                selected: !0
              }).data().toArray(),
              protect: !1
            });
            c.state.save();
            k.s.selectPresent = !1;
            a = !0;
            break
          } else k.s.deselect && (b = k.s.dtPane.rows({
            selected: !0
          }).data().toArray(), 0 < b.length && this.s.selectionList.push({
            index: k.s.index,
            rows: b,
            protect: !0
          }), b = a = !0)
        }
        if (a) {
          k = [];
          for (c = 0; c < this.s.selectionList.length; c++) {
            d = !1;
            for (e = c + 1; e < this.s.selectionList.length; e++) this.s.selectionList[e].index === this.s.selectionList[c].index && (d = !0);
            !d && 0 < this.s.panes[this.s.selectionList[c].index].s.dtPane.rows({
              selected: !0
            }).data().toArray().length && k.push(this.s.selectionList[c])
          }
          this.s.selectionList = k
        } else this.s.selectionList = [];
        c = -1;
        if (b && 1 === this.s.selectionList.length)
          for (b = 0, d = this.s.panes; b < d.length; b++) k = d[b], k.s.lastSelect = !1, k.s.deselect = !1, void 0 !== k.s.dtPane && 0 < k.s.dtPane.rows({
              selected: !0
            }).data().toArray().length &&
            (c = k.s.index);
        else if (0 < this.s.selectionList.length)
          for (b = this.s.selectionList[this.s.selectionList.length - 1].index, d = 0, e = this.s.panes; d < e.length; d++) k = e[d], k.s.lastSelect = k.s.index === b, k.s.deselect = !1;
        else if (0 === this.s.selectionList.length)
          for (b = 0, d = this.s.panes; b < d.length; b++) k = d[b], k.s.lastSelect = !1, k.s.deselect = !1;
        q(this.dom.panes).empty();
        b = 0;
        for (d = this.s.panes; b < d.length; b++) k = d[b], k.s.lastSelect ? k._setListeners() : k.rebuildPane(void 0, this.s.dt.page.info().serverSide ? this.s.serverData : void 0,
          k.s.index === c ? !0 : null, !0), q(this.dom.panes).append(k.dom.container), void 0 !== k.s.dtPane && (q(k.s.dtPane.table().node()).parent()[0].scrollTop = k.s.scrollTop, q.fn.dataTable.select.init(k.s.dtPane));
        this.s.dt.page.info().serverSide || this.s.dt.draw()
      };
      h.prototype._startup = function (a) {
        var b = this;
        q(this.dom.container).text("");
        this._attachExtras();
        q(this.dom.container).append(this.dom.panes);
        q(this.dom.panes).empty();
        var c = this.s.dt.state.loaded();
        if (this.c.viewTotal && !this.c.cascadePanes && null !== c && void 0 !==
          c && void 0 !== c.searchPanes && void 0 !== c.searchPanes.panes) {
          for (var d = !1, e = 0, k = c.searchPanes.panes; e < k.length; e++) {
            var f = k[e];
            if (0 < f.selected.length) {
              d = !0;
              break
            }
          }
          if (d)
            for (d = 0, e = this.s.panes; d < e.length; d++) f = e[d], f.s.showFiltered = !0
        }
        d = 0;
        for (e = this.s.panes; d < e.length; d++) f = e[d], f.rebuildPane(void 0, 0 < Object.keys(this.s.serverData).length ? this.s.serverData : void 0), q(this.dom.panes).append(f.dom.container);
        this.s.dt.page.info().serverSide || this.s.dt.draw();
        this.s.stateRead || null === c || void 0 === c || (this.s.dt.page(c.start /
          this.s.dt.page.len()), this.s.dt.draw("page"));
        this.s.stateRead = !0;
        if (this.c.viewTotal && !this.c.cascadePanes)
          for (c = 0, d = this.s.panes; c < d.length; c++) f = d[c], f.updatePane();
        this._updateFilterCount();
        this._checkMessage();
        a.on("preDraw.dtsps", function () {
          b._updateFilterCount();
          !b.c.cascadePanes && !b.c.viewTotal || b.s.dt.page.info().serverSide ? b._updateSelection() : b.redrawPanes();
          b.s.filterPane = -1
        });
        this.s.dt.on("stateSaveParams.dtsp", function (l, p, n) {
          void 0 === n.searchPanes && (n.searchPanes = {});
          n.searchPanes.selectionList =
            b.s.selectionList
        });
        this.s.dt.on("xhr", function () {
          var l = !1;
          if (!b.s.dt.page.info().serverSide) b.s.dt.one("preDraw", function () {
            if (!l) {
              l = !0;
              q(b.dom.panes).empty();
              for (var p = 0, n = b.s.panes; p < n.length; p++) {
                var w = n[p];
                w.clearData();
                w.rebuildPane(void 0 !== b.s.selectionList[b.s.selectionList.length - 1] ? w.s.index === b.s.selectionList[b.s.selectionList.length - 1].index : !1, void 0, void 0, !0);
                q(b.dom.panes).append(w.dom.container)
              }
              b.s.dt.page.info().serverSide || b.s.dt.draw();
              b.c.cascadePanes || b.c.viewTotal ? b.redrawPanes(b.c.cascadePanes) :
                b._updateSelection();
              b._checkMessage()
            }
          })
        });
        c = 0;
        for (d = this.s.panes; c < d.length; c++)
          if (f = d[c], void 0 !== f && void 0 !== f.s.dtPane && (void 0 !== f.s.colOpts.preSelect || void 0 !== f.customPaneSettings.preSelect)) {
            e = f.s.dtPane.rows().data().toArray().length;
            for (k = 0; k < e; k++)(-1 !== f.s.colOpts.preSelect.indexOf(f.s.dtPane.cell(k, 0).data()) || null !== f.customPaneSettings && void 0 !== f.customPaneSettings.preSelect && -1 !== f.customPaneSettings.preSelect.indexOf(f.s.dtPane.cell(k, 0).data())) && f.s.dtPane.row(k).select();
            f.updateTable()
          } if (void 0 !==
          this.s.selectionList && 0 < this.s.selectionList.length)
          for (c = this.s.selectionList[this.s.selectionList.length - 1].index, d = 0, e = this.s.panes; d < e.length; d++) f = e[d], f.s.lastSelect = f.s.index === c;
        0 < this.s.selectionList.length && this.c.cascadePanes && this._cascadeRegen(this.s.selectionList);
        this._updateFilterCount();
        a.on("destroy.dtsps", function () {
          for (var l = 0, p = b.s.panes; l < p.length; l++) p[l].destroy();
          a.off(".dtsps");
          q(b.dom.clearAll).off(".dtsps");
          q(b.dom.container).remove();
          b.clearSelections()
        });
        if (this.c.clear) q(this.dom.clearAll).on("click.dtsps",
          function () {
            b.clearSelections()
          });
        if (this.s.dt.page.info().serverSide) a.on("preXhr.dt", function (l, p, n) {
          void 0 === n.searchPanes && (n.searchPanes = {});
          l = 0;
          for (p = b.s.panes; l < p.length; l++) {
            var w = p[l],
              z = b.s.dt.column(w.s.index).dataSrc();
            void 0 === n.searchPanes[z] && (n.searchPanes[z] = {});
            if (void 0 !== w.s.dtPane) {
              w = w.s.dtPane.rows({
                selected: !0
              }).data().toArray();
              for (var x = 0; x < w.length; x++) n.searchPanes[z][x] = w[x].filter
            }
          }
          b.c.viewTotal && b._prepViewTotal()
        });
        else a.on("preXhr.dt", function (l, p, n) {
          l = 0;
          for (p = b.s.panes; l <
            p.length; l++) p[l].clearData()
        });
        a.settings()[0]._searchPanes = this
      };
      h.prototype._prepViewTotal = function () {
        for (var a = this.s.filterPane, b = !1, c = 0, d = this.s.panes; c < d.length; c++) {
          var e = d[c];
          if (void 0 !== e.s.dtPane) {
            var k = e.s.dtPane.rows({
              selected: !0
            }).data().toArray().length;
            0 < k && -1 === a ? (a = e.s.index, b = !0) : 0 < k && (a = null)
          }
        }
        c = 0;
        for (d = this.s.panes; c < d.length; c++)
          if (e = d[c], void 0 !== e.s.dtPane && (e.s.filteringActive = !0, -1 !== a && null !== a && a === e.s.index || !1 === b)) e.s.filteringActive = !1
      };
      h.prototype._updateFilterCount =
        function () {
          for (var a = 0, b = 0, c = this.s.panes; b < c.length; b++) {
            var d = c[b];
            void 0 !== d.s.dtPane && (a += d.getPaneCount())
          }
          b = this.s.dt.i18n("searchPanes.title", "Filters Active - %d", a);
          q(this.dom.title).text(b);
          void 0 !== this.c.filterChanged && "function" === typeof this.c.filterChanged && this.c.filterChanged.call(this.s.dt, a)
        };
      h.prototype._updateSelection = function () {
        this.s.selectionList = [];
        for (var a = 0, b = this.s.panes; a < b.length; a++) {
          var c = b[a];
          void 0 !== c.s.dtPane && this.s.selectionList.push({
            index: c.s.index,
            rows: c.s.dtPane.rows({
              selected: !0
            }).data().toArray(),
            protect: !1
          })
        }
        this.s.dt.state.save()
      };
      h.version = "1.2.1";
      h.classes = {
        clear: "dtsp-clear",
        clearAll: "dtsp-clearAll",
        container: "dtsp-searchPanes",
        emptyMessage: "dtsp-emptyMessage",
        hide: "dtsp-hidden",
        panes: "dtsp-panesContainer",
        search: "dtsp-search",
        title: "dtsp-title",
        titleRow: "dtsp-titleRow"
      };
      h.defaults = {
        cascadePanes: !1,
        clear: !0,
        container: function (a) {
          return a.table().container()
        },
        columns: [],
        filterChanged: void 0,
        layout: "columns-3",
        order: [],
        panes: [],
        viewTotal: !1
      };
      return h
    }();
  (function (h) {
    "function" === typeof define &&
      define.amd ? define(["jquery", "datatables.net"], function (a) {
        return h(a, window, document)
      }) : "object" === typeof exports ? module.exports = function (a, b) {
        a || (a = window);
        b && b.fn.dataTable || (b = require("datatables.net")(a, b).$);
        return h(b, a, a.document)
      } : h(window.jQuery, window, document)
  })(function (h, a, b) {
    function c(e, k) {
      void 0 === k && (k = !1);
      e = new d.Api(e);
      var f = e.init().searchPanes || d.defaults.searchPanes;
      return (new G(e, f, k)).getNode()
    }
    m(h);
    t(h);
    var d = h.fn.dataTable;
    h.fn.dataTable.SearchPanes = G;
    h.fn.DataTable.SearchPanes =
      G;
    h.fn.dataTable.SearchPane = u;
    h.fn.DataTable.SearchPane = u;
    a = h.fn.dataTable.Api.register;
    a("searchPanes()", function () {
      return this
    });
    a("searchPanes.clearSelections()", function () {
      return this.iterator("table", function (e) {
        e._searchPanes && e._searchPanes.clearSelections()
      })
    });
    a("searchPanes.rebuildPane()", function (e, k) {
      return this.iterator("table", function (f) {
        f._searchPanes && f._searchPanes.rebuild(e, k)
      })
    });
    a("searchPanes.container()", function () {
      var e = this.context[0];
      return e._searchPanes ? e._searchPanes.getNode() :
        null
    });
    h.fn.dataTable.ext.buttons.searchPanesClear = {
      text: "Clear Panes",
      action: function (e, k, f, l) {
        k.searchPanes.clearSelections()
      }
    };
    h.fn.dataTable.ext.buttons.searchPanes = {
      action: function (e, k, f, l) {
        e.stopPropagation();
        this.popover(l._panes.getNode(), {
          align: "dt-container"
        });
        l._panes.rebuild(void 0, !0)
      },
      config: {},
      init: function (e, k, f) {
        var l = new h.fn.dataTable.SearchPanes(e, h.extend({
            filterChanged: function (n) {
              e.button(k).text(e.i18n("searchPanes.collapse", {
                0: "SearchPanes",
                _: "SearchPanes (%d)"
              }, n))
            }
          }, f.config)),
          p = e.i18n("searchPanes.collapse", "SearchPanes", 0);
        e.button(k).text(p);
        f._panes = l
      },
      text: "Search Panes"
    };
    h(b).on("preInit.dt.dtsp", function (e, k, f) {
      "dt" === e.namespace && (k.oInit.searchPanes || d.defaults.searchPanes) && (k._searchPanes || c(k, !0))
    });
    d.ext.feature.push({
      cFeature: "P",
      fnInit: c
    });
    d.ext.features && d.ext.features.register("searchPanes", c)
  })
})();


(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-searchpanes"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    console.log(b.fn.dataTable);
    b.fn.dataTable.SearchPanes || (console.log("not present"), require("datatables.net-searchpanes")(a, b));
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b) {
  a = c.fn.dataTable;
  c.extend(!0, a.SearchPane.classes, {
    buttonGroup: "btn-group col justify-content-end",
    disabledButton: "disabled",
    dull: "",
    narrow: "col",
    pane: {
      container: "table"
    },
    paneButton: "btn btn-light",
    pill: "pill badge badge-pill badge-secondary",
    search: "col-sm form-control search",
    searchCont: "input-group col-sm",
    searchLabelCont: "input-group-append",
    subRow1: "dtsp-subRow1",
    subRow2: "dtsp-subRow2",
    table: "table table-sm table-borderless",
    topRow: "dtsp-topRow row"
  });
  c.extend(!0, a.SearchPanes.classes, {
    clearAll: "dtsp-clearAll col-auto btn btn-light",
    container: "dtsp-searchPanes",
    panes: "dtsp-panes dtsp-container",
    title: "dtsp-title col",
    titleRow: "dtsp-titleRow row"
  });
  return a.searchPanes
});


/*!
   Copyright 2015-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net/extensions/select
 Select for DataTables 1.3.1
 2015-2019 SpryMedia Ltd - datatables.net/license/mit
*/
(function (f) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function (k) {
    return f(k, window, document)
  }) : "object" === typeof exports ? module.exports = function (k, p) {
    k || (k = window);
    p && p.fn.dataTable || (p = require("datatables.net")(k, p).$);
    return f(p, k, k.document)
  } : f(jQuery, window, document)
})(function (f, k, p, h) {
  function z(a, b, c) {
    var d = function (c, b) {
      if (c > b) {
        var d = b;
        b = c;
        c = d
      }
      var e = !1;
      return a.columns(":visible").indexes().filter(function (a) {
        a === c && (e = !0);
        return a === b ? (e = !1, !0) : e
      })
    };
    var e =
      function (c, b) {
        var d = a.rows({
          search: "applied"
        }).indexes();
        if (d.indexOf(c) > d.indexOf(b)) {
          var e = b;
          b = c;
          c = e
        }
        var f = !1;
        return d.filter(function (a) {
          a === c && (f = !0);
          return a === b ? (f = !1, !0) : f
        })
      };
    a.cells({
      selected: !0
    }).any() || c ? (d = d(c.column, b.column), c = e(c.row, b.row)) : (d = d(0, b.column), c = e(0, b.row));
    c = a.cells(c, d).flatten();
    a.cells(b, {
      selected: !0
    }).any() ? a.cells(c).deselect() : a.cells(c).select()
  }

  function v(a) {
    var b = a.settings()[0]._select.selector;
    f(a.table().container()).off("mousedown.dtSelect", b).off("mouseup.dtSelect",
      b).off("click.dtSelect", b);
    f("body").off("click.dtSelect" + a.table().node().id.replace(/[^a-zA-Z0-9\-_]/g, "-"))
  }

  function A(a) {
    var b = f(a.table().container()),
      c = a.settings()[0],
      d = c._select.selector,
      e;
    b.on("mousedown.dtSelect", d, function (a) {
      if (a.shiftKey || a.metaKey || a.ctrlKey) b.css("-moz-user-select", "none").one("selectstart.dtSelect", d, function () {
        return !1
      });
      k.getSelection && (e = k.getSelection())
    }).on("mouseup.dtSelect", d, function () {
      b.css("-moz-user-select", "")
    }).on("click.dtSelect", d, function (c) {
      var b =
        a.select.items();
      if (e) {
        var d = k.getSelection();
        if ((!d.anchorNode || f(d.anchorNode).closest("table")[0] === a.table().node()) && d !== e) return
      }
      d = a.settings()[0];
      var l = f.trim(a.settings()[0].oClasses.sWrapper).replace(/ +/g, ".");
      if (f(c.target).closest("div." + l)[0] == a.table().container() && (l = a.cell(f(c.target).closest("td, th")), l.any())) {
        var g = f.Event("user-select.dt");
        m(a, g, [b, l, c]);
        g.isDefaultPrevented() || (g = l.index(), "row" === b ? (b = g.row, w(c, a, d, "row", b)) : "column" === b ? (b = l.index().column, w(c, a, d, "column",
          b)) : "cell" === b && (b = l.index(), w(c, a, d, "cell", b)), d._select_lastCell = g)
      }
    });
    f("body").on("click.dtSelect" + a.table().node().id.replace(/[^a-zA-Z0-9\-_]/g, "-"), function (b) {
      !c._select.blurable || f(b.target).parents().filter(a.table().container()).length || 0 === f(b.target).parents("html").length || f(b.target).parents("div.DTE").length || r(c, !0)
    })
  }

  function m(a, b, c, d) {
    if (!d || a.flatten().length) "string" === typeof b && (b += ".dt"), c.unshift(a), f(a.table().node()).trigger(b, c)
  }

  function B(a) {
    var b = a.settings()[0];
    if (b._select.info &&
      b.aanFeatures.i && "api" !== a.select.style()) {
      var c = a.rows({
          selected: !0
        }).flatten().length,
        d = a.columns({
          selected: !0
        }).flatten().length,
        e = a.cells({
          selected: !0
        }).flatten().length,
        l = function (b, c, d) {
          b.append(f('<span class="select-item"/>').append(a.i18n("select." + c + "s", {
            _: "%d " + c + "s selecionadas",
            0: "",
            1: "1 " + c + " selecionada"
          }, d)))
        };
      f.each(b.aanFeatures.i, function (b, a) {
        a = f(a);
        b = f('<span class="select-info"/>');
        l(b, "linha", c);
        l(b, "coluna", d);
        l(b, "célula", e);
        var g = a.children("span.select-info");
        g.length && g.remove();
        "" !== b.text() && a.append(b)
      })
    }
  }

  function D(a) {
    var b = new g.Api(a);
    a.aoRowCreatedCallback.push({
      fn: function (b, d, e) {
        d = a.aoData[e];
        d._select_selected && f(b).addClass(a._select.className);
        b = 0;
        for (e = a.aoColumns.length; b < e; b++)(a.aoColumns[b]._select_selected || d._selected_cells && d._selected_cells[b]) && f(d.anCells[b]).addClass(a._select.className)
      },
      sName: "select-deferRender"
    });
    b.on("preXhr.dt.dtSelect", function () {
      var a = b.rows({
          selected: !0
        }).ids(!0).filter(function (b) {
          return b !== h
        }),
        d = b.cells({
          selected: !0
        }).eq(0).map(function (a) {
          var c =
            b.row(a.row).id(!0);
          return c ? {
            row: c,
            column: a.column
          } : h
        }).filter(function (b) {
          return b !== h
        });
      b.one("draw.dt.dtSelect", function () {
        b.rows(a).select();
        d.any() && d.each(function (a) {
          b.cells(a.row, a.column).select()
        })
      })
    });
    b.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function () {
      B(b)
    });
    b.on("destroy.dtSelect", function () {
      v(b);
      b.off(".dtSelect")
    })
  }

  function C(a, b, c, d) {
    var e = a[b + "s"]({
      search: "applied"
    }).indexes();
    d = f.inArray(d, e);
    var g = f.inArray(c, e);
    if (a[b + "s"]({
        selected: !0
      }).any() ||
      -1 !== d) {
      if (d > g) {
        var u = g;
        g = d;
        d = u
      }
      e.splice(g + 1, e.length);
      e.splice(0, d)
    } else e.splice(f.inArray(c, e) + 1, e.length);
    a[b](c, {
      selected: !0
    }).any() ? (e.splice(f.inArray(c, e), 1), a[b + "s"](e).deselect()) : a[b + "s"](e).select()
  }

  function r(a, b) {
    if (b || "single" === a._select.style) a = new g.Api(a), a.rows({
      selected: !0
    }).deselect(), a.columns({
      selected: !0
    }).deselect(), a.cells({
      selected: !0
    }).deselect()
  }

  function w(a, b, c, d, e) {
    var f = b.select.style(),
      g = b.select.toggleable(),
      h = b[d](e, {
        selected: !0
      }).any();
    if (!h || g) "os" === f ? a.ctrlKey ||
      a.metaKey ? b[d](e).select(!h) : a.shiftKey ? "cell" === d ? z(b, e, c._select_lastCell || null) : C(b, d, e, c._select_lastCell ? c._select_lastCell[d] : null) : (a = b[d + "s"]({
        selected: !0
      }), h && 1 === a.flatten().length ? b[d](e).deselect() : (a.deselect(), b[d](e).select())) : "multi+shift" == f ? a.shiftKey ? "cell" === d ? z(b, e, c._select_lastCell || null) : C(b, d, e, c._select_lastCell ? c._select_lastCell[d] : null) : b[d](e).select(!h) : b[d](e).select(!h)
  }

  function t(a, b) {
    return function (c) {
      return c.i18n("buttons." + a, b)
    }
  }

  function x(a) {
    a = a._eventNamespace;
    return "draw.dt.DT" + a + " select.dt.DT" + a + " deselect.dt.DT" + a
  }

  function E(a, b) {
    return -1 !== f.inArray("rows", b.limitTo) && a.rows({
      selected: !0
    }).any() || -1 !== f.inArray("columns", b.limitTo) && a.columns({
      selected: !0
    }).any() || -1 !== f.inArray("cells", b.limitTo) && a.cells({
      selected: !0
    }).any() ? !0 : !1
  }
  var g = f.fn.dataTable;
  g.select = {};
  g.select.version = "1.3.1";
  g.select.init = function (a) {
    var b = a.settings()[0],
      c = b.oInit.select,
      d = g.defaults.select;
    c = c === h ? d : c;
    d = "row";
    var e = "api",
      l = !1,
      u = !0,
      k = !0,
      m = "td, th",
      p = "selected",
      n = !1;
    b._select = {};
    !0 === c ? (e = "os", n = !0) : "string" === typeof c ? (e = c, n = !0) : f.isPlainObject(c) && (c.blurable !== h && (l = c.blurable), c.toggleable !== h && (u = c.toggleable), c.info !== h && (k = c.info), c.items !== h && (d = c.items), e = c.style !== h ? c.style : "os", n = !0, c.selector !== h && (m = c.selector), c.className !== h && (p = c.className));
    a.select.selector(m);
    a.select.items(d);
    a.select.style(e);
    a.select.blurable(l);
    a.select.toggleable(u);
    a.select.info(k);
    b._select.className = p;
    f.fn.dataTable.ext.order["select-checkbox"] = function (b, a) {
      return this.api().column(a, {
        order: "index"
      }).nodes().map(function (a) {
        return "row" === b._select.items ? f(a).parent().hasClass(b._select.className) : "cell" === b._select.items ? f(a).hasClass(b._select.className) : !1
      })
    };
    !n && f(a.table().node()).hasClass("selectable") && a.select.style("os")
  };
  f.each([{
    type: "row",
    prop: "aoData"
  }, {
    type: "column",
    prop: "aoColumns"
  }], function (a, b) {
    g.ext.selector[b.type].push(function (a, d, e) {
      d = d.selected;
      var c = [];
      if (!0 !== d && !1 !== d) return e;
      for (var f = 0, g = e.length; f < g; f++) {
        var h = a[b.prop][e[f]];
        (!0 === d && !0 === h._select_selected ||
          !1 === d && !h._select_selected) && c.push(e[f])
      }
      return c
    })
  });
  g.ext.selector.cell.push(function (a, b, c) {
    b = b.selected;
    var d = [];
    if (b === h) return c;
    for (var e = 0, f = c.length; e < f; e++) {
      var g = a.aoData[c[e].row];
      (!0 === b && g._selected_cells && !0 === g._selected_cells[c[e].column] || !(!1 !== b || g._selected_cells && g._selected_cells[c[e].column])) && d.push(c[e])
    }
    return d
  });
  var n = g.Api.register,
    q = g.Api.registerPlural;
  n("select()", function () {
    return this.iterator("table", function (a) {
      g.select.init(new g.Api(a))
    })
  });
  n("select.blurable()",
    function (a) {
      return a === h ? this.context[0]._select.blurable : this.iterator("table", function (b) {
        b._select.blurable = a
      })
    });
  n("select.toggleable()", function (a) {
    return a === h ? this.context[0]._select.toggleable : this.iterator("table", function (b) {
      b._select.toggleable = a
    })
  });
  n("select.info()", function (a) {
    return B === h ? this.context[0]._select.info : this.iterator("table", function (b) {
      b._select.info = a
    })
  });
  n("select.items()", function (a) {
    return a === h ? this.context[0]._select.items : this.iterator("table", function (b) {
      b._select.items =
        a;
      m(new g.Api(b), "selectItems", [a])
    })
  });
  n("select.style()", function (a) {
    return a === h ? this.context[0]._select.style : this.iterator("table", function (b) {
      b._select.style = a;
      b._select_init || D(b);
      var c = new g.Api(b);
      v(c);
      "api" !== a && A(c);
      m(new g.Api(b), "selectStyle", [a])
    })
  });
  n("select.selector()", function (a) {
    return a === h ? this.context[0]._select.selector : this.iterator("table", function (b) {
      v(new g.Api(b));
      b._select.selector = a;
      "api" !== b._select.style && A(new g.Api(b))
    })
  });
  q("rows().select()", "row().select()", function (a) {
    var b =
      this;
    if (!1 === a) return this.deselect();
    this.iterator("row", function (b, a) {
      r(b);
      b.aoData[a]._select_selected = !0;
      f(b.aoData[a].nTr).addClass(b._select.className)
    });
    this.iterator("table", function (a, d) {
      m(b, "select", ["row", b[d]], !0)
    });
    return this
  });
  q("columns().select()", "column().select()", function (a) {
    var b = this;
    if (!1 === a) return this.deselect();
    this.iterator("column", function (b, a) {
      r(b);
      b.aoColumns[a]._select_selected = !0;
      a = (new g.Api(b)).column(a);
      f(a.header()).addClass(b._select.className);
      f(a.footer()).addClass(b._select.className);
      a.nodes().to$().addClass(b._select.className)
    });
    this.iterator("table", function (a, d) {
      m(b, "select", ["column", b[d]], !0)
    });
    return this
  });
  q("cells().select()", "cell().select()", function (a) {
    var b = this;
    if (!1 === a) return this.deselect();
    this.iterator("cell", function (b, a, e) {
      r(b);
      a = b.aoData[a];
      a._selected_cells === h && (a._selected_cells = []);
      a._selected_cells[e] = !0;
      a.anCells && f(a.anCells[e]).addClass(b._select.className)
    });
    this.iterator("table", function (a, d) {
      m(b, "select", ["cell", b[d]], !0)
    });
    return this
  });
  q("rows().deselect()",
    "row().deselect()",
    function () {
      var a = this;
      this.iterator("row", function (a, c) {
        a.aoData[c]._select_selected = !1;
        f(a.aoData[c].nTr).removeClass(a._select.className)
      });
      this.iterator("table", function (b, c) {
        m(a, "deselect", ["row", a[c]], !0)
      });
      return this
    });
  q("columns().deselect()", "column().deselect()", function () {
    var a = this;
    this.iterator("column", function (a, c) {
      a.aoColumns[c]._select_selected = !1;
      var b = new g.Api(a),
        e = b.column(c);
      f(e.header()).removeClass(a._select.className);
      f(e.footer()).removeClass(a._select.className);
      b.cells(null, c).indexes().each(function (b) {
        var c = a.aoData[b.row],
          d = c._selected_cells;
        !c.anCells || d && d[b.column] || f(c.anCells[b.column]).removeClass(a._select.className)
      })
    });
    this.iterator("table", function (b, c) {
      m(a, "deselect", ["column", a[c]], !0)
    });
    return this
  });
  q("cells().deselect()", "cell().deselect()", function () {
    var a = this;
    this.iterator("cell", function (a, c, d) {
      c = a.aoData[c];
      c._selected_cells[d] = !1;
      c.anCells && !a.aoColumns[d]._select_selected && f(c.anCells[d]).removeClass(a._select.className)
    });
    this.iterator("table",
      function (b, c) {
        m(a, "deselect", ["cell", a[c]], !0)
      });
    return this
  });
  var y = 0;
  f.extend(g.ext.buttons, {
    selected: {
      text: t("selected", "Selected"),
      className: "buttons-selected",
      limitTo: ["rows", "columns", "cells"],
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace = ".select" + y++;
        a.on(x(c), function () {
          d.enable(E(a, c))
        });
        this.disable()
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace)
      }
    },
    selectedSingle: {
      text: t("selectedSingle", "Selected single"),
      className: "buttons-selected-single",
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace =
          ".select" + y++;
        a.on(x(c), function () {
          var b = a.rows({
            selected: !0
          }).flatten().length + a.columns({
            selected: !0
          }).flatten().length + a.cells({
            selected: !0
          }).flatten().length;
          d.enable(1 === b)
        });
        this.disable()
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace)
      }
    },
    selectAll: {
      text: t("selectAll", "Select all"),
      className: "buttons-select-all",
      action: function () {
        this[this.select.items() + "s"]().select()
      }
    },
    selectNone: {
      text: t("selectNone", "Deselect all"),
      className: "buttons-select-none",
      action: function () {
        r(this.settings()[0],
          !0)
      },
      init: function (a, b, c) {
        var d = this;
        c._eventNamespace = ".select" + y++;
        a.on(x(c), function () {
          var b = a.rows({
            selected: !0
          }).flatten().length + a.columns({
            selected: !0
          }).flatten().length + a.cells({
            selected: !0
          }).flatten().length;
          d.enable(0 < b)
        });
        this.disable()
      },
      destroy: function (a, b, c) {
        a.off(c._eventNamespace)
      }
    }
  });
  f.each(["Row", "Column", "Cell"], function (a, b) {
    var c = b.toLowerCase();
    g.ext.buttons["select" + b + "s"] = {
      text: t("select" + b + "s", "Select " + c + "s"),
      className: "buttons-select-" + c + "s",
      action: function () {
        this.select.items(c)
      },
      init: function (a) {
        var b = this;
        a.on("selectItems.dt.DT", function (a, d, e) {
          b.active(e === c)
        })
      }
    }
  });
  f(p).on("preInit.dt.dtSelect", function (a, b) {
    "dt" === a.namespace && g.select.init(new g.Api(b))
  });
  return g.select
});


/*!
 Bootstrap 4 styling wrapper for Select
 ©2018 SpryMedia Ltd - datatables.net/license
*/
(function (c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-select"], function (a) {
    return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function (a, b) {
    a || (a = window);
    b && b.fn.dataTable || (b = require("datatables.net-bs4")(a, b).$);
    b.fn.dataTable.select || require("datatables.net-select")(a, b);
    return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function (c, a, b, d) {
  return c.fn.dataTable
});