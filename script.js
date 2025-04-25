const products = [
  {
    name: "Spyroid v7.7",
    price: "$49",
    image: "https://media-hosting.imagekit.io/c1193cf35c424ac8/1000008877.jpg?Expires=1840156748&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bHCOx1DMr-cMUL5MRru50aAQzWlF59ThlZeRl-NrPIeRfXia5NyieqMIwmBGavZSavV-e5crbvkQbuZwP7lWA-0oirmnIcC3GYO5CwEQQDctd-siuomSS6HpbVDYd488SQIKEZwHwZ1lOY7m02QdvDv6dz7tQrBdSMBszQmAzeYG7p4im4Mdt4Q-zpQE6a2z9frjnfYWJVtJmc-7hdJKj-5ewLr2GJzxdWmJbRL-qs6SbiXsbMQ__"
  },
  {
    name: "BTMOB RAT",
    price: "$45",
    image: "https://media-hosting.imagekit.io/69da0514eda741ad/1000008894.jpg?Expires=1840170772&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0T~1uckSGthl~vtqq8WdEAUaovxEEgEc94GVneVfiQDp-BhGaOnLxt80qx~VQhXJmrZv5ze44ZeTzclwarkdTX~I1vvZaPPdVsQTcHlaEZNqvZ38lSjA2HheRtbp2wprT~vxR71gaUOeMg3m~oSHnpEDvipFXvEAf3oO05r2NHs1SAGN5Cu4m-T8205dn-t~kGMho525HZxpzGyI95mC1u7od6DOFUtwgOZmix3TfOcgptdo89Gm4lAhbd66wTg1MaCZwiIoMLfLw2AQTD-nSLO5itmkkYR2nCmxBpLUOMaQhH6oU~192MKXeL6u6JRs6LA~qrDeCr4IZfPejE9pdg__"
  },
  {
    name: "Ghost RAT",
    price: "$39",
    image: "https://media-hosting.imagekit.io/df28559e56be4ca5/1000008876.jpg?Expires=1840156251&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pWsSciNTqSCZGsGTO4oaFLc9~ytDhJou3478n6ZC~3GiwPRa-d8-0MC2~UgDlcmVm0pn8Cgs0LQZ5igNPbZvICC40unyIzSwFd0rvOAwu0o5qAjfGyR4kJeypE0fbWytU2iohPVHKXOaefcbbOr-zHRUx3RNhfycT80K9wEwGgr3pNpDDi-l-bnly6n6ZfcML6OIKCG5cMzk1W2pC0XXq8e65MTEytxInWLqZCHGGbs8X~0oG4AW2eHnfAL9D9~w-LYW47uH1TC0oxpJkvSot2X~ixKs~D5D8idzyn9-BwON5iUCBhoG74TW9yddAxD-vlbWGgJHmjT7iXacRwc9Ow__"
  },
  {
    name: "Craxs RAT v7.6",
    price: "$79",
    image: "https://media-hosting.imagekit.io/9de25cd5229a4e38/1000008871.jpg?Expires=1840154469&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=u16Ic5xr9w-mWTC7XEvIoBV57Owva5inKDNx6rjGdO2M1hrkxZcSYdWU0wJKd7QpeAUsDX3JiAU0Kpznd8rjraXGTBYSzFiZqN1BZuH6ZmsAfXuv2NrVrqjdoRdalCGJkIiaHDg5-TJX6z11n0IEkPRDNhm3pU12pdGFQBT-HYniac6uf1FVuTI9Yn22x4TElhVycZG356BuC0RY5lax4nFR-9hzWq5qOuXd~~~fxLK1XuiKqCMeTkTfbK8ijHBS3cDSLCjv245Zd2hfKz-bhQmEl5HXkug8lsSRGj6lkAgNIg__"
  },
  {
    name: "Big Shark RAT",
    price: "$59",
    image: "https://media-hosting.imagekit.io/4f463e12cc97426c/1000008872.jpg?Expires=1840154626&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pkHpcj2DnFT1PNEz8zHIA6MbUskyizDTCDr0VXDzKLG6OL9sS5eKN8kV3EchJFSSnfaIdWEoqo5TjOTGgh3KC5hLHPOVy6Yama-xRan8iSh2U8Vu9n4iY8pmusO3U3kdMhxFBEUNDNCPIW2bizXaNEKuUTrTc5TkRGrP9~VXPBxK4Aa4SCdDm1vDpZTsa5ybEcaCir09fVoGV89gnyI--5FfehZZtTtKEIAh5cH8asyijUvvYU7-CYINQJyruRPUJu5I-NAsTsllQ__"
  },
  {
    name: "Violet RAT",
    price: "$65",
    image: "https://media-hosting.imagekit.io/d2654da1b38c4617/1000008874.jpg?Expires=1840155143&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YX71fskWF7ortsB8LtFDw1tvkXT3-8ZX9U15yXOcocojRqAIT3p9tX2iIlWYBuV3m-HZxbz0MtV7d9P999lvQc6-7ruVF7BSLAweBA8kWWHX32XhjrrdSFxBaonGZ6PaW26qzdQwDXUgtkTq95p-JGZH9XnX0c3LfAz6xRFqOkmeBKbqrIEzwKfAfAyo-MPVwkoj1AGB1cgXqa1HcvNJHkjiHSW~5CC2yXvep3DKUR9umgnMO7pcRk3WrSY93NFW7xZ~GOC6vUUZQl0STZ-eplKoVGbNc8KMzrn~KbG2IJh6-Xn4zio6L04M0FLiYPp9yo3BzwFLpzu9-KuniIXprQ__"
  },
  {
    name: "Tianxian66 License RAT",
    price: "$75",
    image: "https://media-hosting.imagekit.io/b031b5aa444b469e/1000008898.jpg?Expires=1840171266&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pVXwa1C-ZJ~QTQ5tIDMvH9VTjPk03xwXuR9yoMQIufbJubGvV~DlxA5ZTdwBRLbqZIXJ9sVgUh2NNLZ~u5ZCGCnFjdcay9AqFl3XBK44jQB2h0lZBbtZybcSeLQ8Sn7p-HMmyE6QfUwjEbsz5BUSlf5ru2mHP1fv1VUTCI2AbTD3aB9p6KZkejhjoGSWQDPZGTB8axZew6yvfk8uS5jrfgGSp8edr-mOiu8wH3KHLl5bbSBTb0dAGv9TpxuyWMjWeXA5ha8h24cpce9IMpylPqLU4kBJxRg71flZp~Ds-yxqvvod-CQUvs6d20Z6To6OMUDFG2zN-nm5BSkRUK9eqQ__"
  }, // <-- Yahan comma laga diya
  {
    name: "G700 RAT",
    price: "$99",
    image: "https://media-hosting.imagekit.io/99a185b6956d48ea/1000008880.jpg?Expires=1840168781&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=J~Epo01pn2V51hdsOj9pTNhIktjNjzE62fVEtclbzuu1VyuL46gUWJFLIq9FatFcANKu8CugZ2wCG~NRBbiA78Eej5X~YzyYsnHq1QiA82~JwqvPbiamQ0l-fJA7LLsENsH0EJb32-H2fB7ZQWZVNAx-3BYXaEG-jdlbB2BKI-pPnAbkKflFDkYIaRpy6CSgDhGSwm5Yn73iYMVyH04wet1eAQE9c3u53c1AjoB1ay3L8n2V-KQ6SANxjP4TANOmJjL7vA3~b8h8DcF0PGDIeBcsG~W4PvkBX8Eb4oPgoyEvXLIEuQr37aWLn0GXHHxwsG8fNekR07JdvBR-WjW1Mg__"
  },
  {
    name: "DEMONIC RAT",
    price: "$60",
    image: "https://media-hosting.imagekit.io/12c5a4b5581645e8/1000008887.jpg?Expires=1840168871&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r9X8aEn52h4VOs-RUoftzeC0JONK9BhoJ2EFYXyU2I3lAH91TGFiUGLJdyVcgvQQDCncDNDsjK6rhtsjcdW3unjs6gFOaMdRISkoCfR1sfz5pmf~lJu0wPaW7g8IxGykx620Inz6Y7HyWLeMmFjx-mAmkUlzg5R8Ny2W1cytSjUdmTULsgG~kgvjnnnYIHfMq2kyTBfeiM7gWE884fRyCbEsQLO8uLd000H0mzSfQm~YUDozDzcFXHrmApAiaB38k-lr2wH-MQoz5oNUT~pUJbPF4zEkesX2eEUXwCC2lXmfup4PsBfDSVLrNO8lS5So7lCty7JCv~PZbi70~b4rEA__"
  },
  {
    name: "G5 RAT",
    price: "$75",
    image: "https://media-hosting.imagekit.io/07303cb3fc154431/1000008888.jpg?Expires=1840169142&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0Af3MF7eDMOnxRfQ2XHcr0tpP-W84uFYmNcJ~fRKVUklTkeB1kpe~5IOAbIq6DBtlrNUC32XXMGh5SRAG~qXEe5WBicWGF2GmUz3bJ1Ek2WRmbpy7JZdRx61KfyJykbQwfJ99rJysnhg4rKeAE4CIRS-dXP~EPqUXaKn7Dcmemm3RhNK7wXsdOT-kXYW-Dhddl0l3RazMsc6TIuubV8gGIv9x1yyQstt5E7mekiwVN1n~nH9Bs9mLiUzb88LQ4SwS6IsKUi1r3ROJS4Tl3odlPxPlxHeAwrynjlj~1plh1fPrFL9ySX-LcBa8e37RMFPa-ltY-vA5Tw44G8313HR4g__"
  }
];

const container = document.getElementById("products");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Price: ${p.price}</p>
    <button onclick="buyNow('${p.name}')">Buy on Telegram</button>
  `;
  container.appendChild(div);
});

function buyNow(productName) {
  window.open("https://t.me/CIPHERNOVAX909", "_blank");
}