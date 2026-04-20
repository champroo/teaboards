const keyboards = [
    {
        brand: "Perry", 
        model: "IU", 
        layout: "80% WKL TKL",
        case: "Aluminum",
        weight: "Aluminum",
        mount: "O-ring",
        plate: "Polycarbonate",
        switches: 
        {
            switchName: "Cherry MX Brown",
            switchType: "Light-tactile",
            actuationForce: "55g"
        },
        keycap: 
        {
            keycapManu: "GMK",
            keycapName: "Modo Light"
        },
        description: "A keyboard inspired by the Korean idol, IU. Its bright lilac anodization is a nod to her 'Lilac' album along with the subtle engraving of her logo above the arrow keys.\
                      This board was designed by one of my friends and builds off of classic mechanical keyboard designs and boasts excellent machining and finish. \
                      It features a clear, poppy sound and a solid typing experience.",
        images: ["https://i.imgur.com/2F9HVSe.jpeg",
                 "https://i.imgur.com/KDTGUbA.jpeg",
                 "https://i.imgur.com/4qo2A8y.jpeg",
                 "https://i.imgur.com/nm4d23U.jpeg",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/68195383-67b3-44bb-9a47-27af84f0a7fe/D1316691.jpg?format=2500w"]
    },

    {
        brand: "Matrix Lab", 
        model: "8XV 3.0", 
        layout: "80% WKL TKL",
        case: "Aluminum",
        weight: "Brass",
        mount: "Gasket",
        plate: "Polycarbonate",
        switches:
        {
            switchName: "43 Studios OPBlack",
            switchType: "Linear",
            actuationForce: "60g"
        },
        keycap: 
        {
            keycapManu: "GMK",
            keycapName: "Apollo"
        },
        description: "Matrix is known for their flashy and eye-catching design, clearly exemplified by this specific board. It features a dark grey coating with subtle glistening speckles to replicate a nebula aesthetic. \
                      It also features a small screen above the arrow keys that can be customized with any GIF you'd like. The brass weight on the back is uncoated and patinas over time, making every board uninque to the user.\
                      The 8XV 3.0 has an extremely soft and bouncy typing experience that gives it a marbly sound.",
        images: ["https://i.imgur.com/a5bCgRR.jpeg",
                 "https://i.imgur.com/b1wXpyE.jpeg",
                 "https://i.imgur.com/Zgd5gSO.jpeg",
                 "https://i.imgur.com/QDGNblA.jpeg",
                 "https://i.imgur.com/Z634V4I.jpeg",]
    },

    {
        brand: "SingaKBD", 
        model: "Kohaku R2", 
        layout: "65%",
        case: "Aluminum",
        weight: "Brass",
        mount: "Gasket",
        plate: "Polycarbonate",
        switches:
        {
            switchName: "43 Studios OPBlack",
            switchType: "Linear",
            actuationForce: "60g"
        },
        keycap: 
        {
            keycapManu: "GMK",
            keycapName: "Apollo"
        },
        description: "SingaKBD's Kohaku is a 65% keyboard that is known for its exceptional build quality and minimalist aesthetic that revolves around a koi fish aesthetic.\
                      The board's mounting style gives it a soft and bouncy typing experience, with a deep and muted 'thocky' sound. \
                      This board was only obtainable through raffles and is highly coveted in the community.",
        images: ["https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/5ff9e415-cbf4-4504-a3e3-382b44abddcd/2_63_4575.jpg?format=2500w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/169ee77c-611f-4f2d-bbfb-97b70bac8d5e/2_63_4530.jpg?format=2500w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/342884fa-8158-4ca7-8405-d4186c9ee4f6/2_63_4451.jpg?format=2500w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/f96e7bff-b0e5-4c04-9580-161271e0fe44/2_63_4479.jpg?format=2500w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/3f9d4ce9-c0ea-4c37-89e2-37501c411da6/2_63_4571.jpg?format=2500w"]
    },

    {
        brand: "Vertex", 
        model: "Intro S100", 
        layout: "100% WKL",
        case: "Aluminum",
        weight: "Brass",
        mount: "Top-mount",
        plate: "Aluminum",
        switches:
        {
            switchName: "Cherry MX Orange",
            switchType: "Linear",
            actuationForce: "70g"
        },
        keycap: 
        {
            keycapManu: "SP",
            keycapName: "Carbon"
        },
        description: "The S100 is a 100% full-size 104/108 (switchable) standard layout, which directly laid the foundation for the modern keyboard configuration. \
                      The board builds off classic designs to create a solid typing experience with a slightly snappy 'clack' sound. \
                      The S100 is known for its clean and practical designs, prioritizing an easy build experience and classy aesthetics, while also having a great price/performance ratio.",
        images: ["https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/2cf4d842-b040-4824-adb0-6043e08d989a/_MG_0038.jpg?format=1500w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/f14443c4-b0a8-4741-bf91-9cd669fdaa33/_MG_0075.jpg?format=1500w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/1795755d-3ee1-4b1b-a464-eec2522a6946/_MG_0082.jpg?format=1500w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/8237bcc5-4525-4940-b203-cb93315983c8/_MG_0100.jpg?format=1500w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/40049e3c-341e-42d6-b7a2-bde5a696d8c4/_MG_0064.jpg?format=1500w"]
    },

    {
        brand: "Chicken Man", 
        model: "Ciel60", 
        layout: "60% WKL",
        case: "Brass",
        weight: "Brass",
        mount: "O-ring",
        plate: "Brass",
        switches:
        {
            switchName: "Cherry MX Orange",
            switchType: "Linear",
            actuationForce: "70g"
        },
        keycap: 
        {
            keycapManu: "GMK",
            keycapName: "Cluck"
        },
        description: "My friend Chicken Man designed this board and created a special edition made completely out of brass! This is a 60% board with a case and weight made both from brass. \
                      The aesthetics of the board play into his 'chicken' theme and features an engraving of a chicken on the back, as well as a chicken themed keycap set.\
                      Although it's a smaller form factor, the brass materials make the board very dense and heavy, followed by a deep, but clacky sound signature. \
                      The brass case and weight are uncoated brass and patina over time or can be polished, making its finish extremely unique!",
        images: ["https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/beb9ee49-803c-4e04-b903-ecf6b52c84f5/D1252729.jpg?format=750w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/bb7625e1-89fd-4d5b-a353-ab11fabcb97d/D1252753.jpg?format=750w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/59774659-6f7c-40c9-9af3-5f03c2868b09/D1252931.jpg?format=750w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/608317f9-3c46-4f14-9419-a4ec4fffadc9/D1252805.jpg?format=750w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/db79ca9b-3245-456d-b2a4-7e8cfe57b07b/D1252914.jpg?format=750w"]
    },

    {
        brand: "HHKB", 
        model: "Professional 2", 
        layout: "60% HHKB",
        case: "Plastic",
        weight: "N/a",
        mount: "Top",
        plate: "Aluminum",
        switches:
        {
            switchName: "TOPRE",
            switchType: "Rubber Dome",
            actuationForce: "50g"
        },
        keycap: 
        {
            keycapManu: "HHKB",
            keycapName: "Stock"
        },
        description: "The HHKB Professional 2 is a 60% keyboard from Japanese manufacturer PFU, widely regarded as one of the most influential keyboards ever made. Its cult status stems from its use of Topre switches. \
                      Topre switches utilize a unique electrostatic capacitive mechanism that combines a rubber dome with a spring, producing a typing feel unlike anything in the mechanical keyboard world. \
                      Rather than a traditional mechanical click or bump, Topre switches offer a smooth, progressive keystroke. Furthermore, its unique layout prioritizes ergonomics by minimizing finger movement for maximum typing efficiency.",
        images: ["https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/1719809681967-KTTSZZ7JMV37ULXPT91F/topreme-mod-1.jpg?format=750w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/90e1e1fa-2a7a-4a8a-b303-7273a871f68d/_63_7766.jpg?format=750w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/4a286bc4-ab25-467e-ab60-22c1902046d1/topreme-mod-2.jpg?format=750w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/508f9401-08f5-4a6b-be59-7982e4133959/topreme-mod-4.jpg?format=750w",
                 "https://images.squarespace-cdn.com/content/v1/667533f8c80fda5732ebbf73/90e3177b-d1b4-4ab6-a8e9-16c56e172423/topreme-mod-3.jpg?format=750w"]
    },
];