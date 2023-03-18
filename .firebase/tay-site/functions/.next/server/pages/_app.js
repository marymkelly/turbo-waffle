(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,214];
exports.modules = {

/***/ 1350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/components/layout/PageHead.tsx


function HeadSection() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Taylor Hamill Art Porfolio"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "Website showcasing Artwork by Taylor Hamill's"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            })
        ]
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/logo/WrenchBrush.tsx

function WrenchBrushLogo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "45",
        height: "44",
        viewBox: "0 0 45 44",
        fill: "none",
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_217_197)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18.6308 14.9086C14.9213 11.5455 11.2387 8.20494 7.51009 4.82296C5.56522 6.89056 3.63952 8.93557 1.70232 10.9956C2.17031 11.4739 2.61913 11.9296 3.06411 12.3816C3.05261 12.4042 3.03726 12.4268 3.02575 12.4531C2.71503 12.2573 2.40815 12.0577 2.0629 11.8392C3.80447 13.5792 5.52686 15.3041 7.24924 17.029C7.23006 17.0478 7.21088 17.0629 7.1917 17.0817C5.89512 15.997 4.60237 14.9086 3.30578 13.8278C2.61913 13.2553 1.92481 12.6866 1.22665 12.1368C1.08471 12.0238 0.762485 11.9146 0.754813 11.956C0.72796 12.0953 0.74714 12.3062 0.866058 12.4946C0.984975 12.6829 1.24199 12.8825 1.44914 13.067C4.70978 16.0272 7.97042 18.9836 11.2349 21.9438C11.3576 22.0567 11.4919 22.1584 11.6684 22.3091C13.993 19.8385 16.2985 17.383 18.627 14.9049L18.6308 14.9086Z",
                        stroke: "#CCA48A",
                        strokeOpacity: "0.8",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M24.1127 24.7043C23.3877 25.4764 22.6933 26.2145 21.9722 26.9828C26.165 31.1896 30.3616 35.3964 34.5544 39.6069C34.7155 39.7764 36.5913 41.7686 38.3943 42.3486C39.0503 42.5595 39.6755 42.6235 39.6755 42.6235C40.3392 42.6913 40.88 42.6348 41.2521 42.5633C41.348 42.1867 41.4516 41.5653 41.325 40.7894C41.3212 40.7631 41.2176 40.1605 40.9222 39.4977C40.1742 37.8255 38.494 36.4735 38.0337 36.1157C33.3921 32.3119 28.7543 28.5081 24.1127 24.7006V24.7043ZM37.7307 40.2697C37.2243 39.8291 37.0747 39.1888 37.3969 38.8386C37.6808 38.5298 38.3905 38.5938 38.8316 38.9666C39.3111 39.3734 39.4799 40.0513 39.1884 40.4091C38.8891 40.7819 38.2485 40.7179 37.7307 40.2697Z",
                        stroke: "#CCA48A",
                        strokeOpacity: "0.8",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M23.5484 24.226C22.0639 22.2488 21.5614 20.475 21.6956 18.9045C21.7685 18.0496 21.5537 17.3867 20.4642 16.5695C20.0308 16.2456 19.6433 15.8351 19.1792 15.4171C16.9006 17.8424 14.6411 20.2452 12.3472 22.6819C13.1259 23.3899 13.8662 24.0867 14.6411 24.742C14.8137 24.8851 15.1475 24.9491 15.3278 24.9303C16.7701 24.7495 18.2815 24.7683 20.1689 25.7287C20.5793 25.9396 20.9898 26.1919 21.4501 26.4556C22.1291 25.7325 22.8272 24.9905 23.5484 24.226V24.226Z",
                        stroke: "#CCA48A",
                        strokeOpacity: "0.8",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M23.5485 24.226L24.3925 24.9341L22.2136 27.2239L21.0513 26.2258L23.5485 24.226Z",
                        stroke: "#CCA48A",
                        strokeOpacity: "0.8",
                        strokeMiterlimit: "10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M9.43661 42.2638C8.49295 41.9851 7.54928 41.7064 6.60561 41.4277C6.33709 40.5351 6.06857 39.6426 5.79621 38.75C6.46368 38.0796 7.12731 37.413 7.79479 36.7427C8.78449 36.9875 9.77419 37.2323 10.7677 37.4808C11.0094 38.3998 11.2472 39.3149 11.4889 40.2339C10.8061 40.9118 10.1194 41.5897 9.43661 42.2676V42.2638ZM44.0109 11.1142C42.9675 11.698 41.8819 12.2139 40.8999 12.8843C40.1211 13.4153 39.5611 13.2044 38.7593 12.9144C37.2633 12.3683 37.2556 11.3213 37.2901 10.0861C37.3093 9.46841 37.4666 9.09556 38.0267 8.79427C39.2235 8.15403 40.3858 7.44977 41.8167 6.62499C39.8373 6.16552 38.1532 6.0676 36.45 6.43291C34.9808 6.74927 33.972 7.55898 33.6229 9.0692C33.4196 9.96177 33.1395 10.8393 32.9055 11.7281C32.5104 13.2345 31.8468 14.5941 30.6883 15.6863C23.9522 22.0247 17.2238 28.3668 10.4723 34.6901C10.2307 34.9161 9.76268 35.0818 9.43278 35.0441C6.68233 34.7353 4.39221 36.4564 4.16205 39.0588C3.9434 41.5256 6.39463 43.7401 8.91875 43.8117C11.4774 43.8795 13.733 41.1829 13.2496 38.9835C13.1998 38.7538 13.2266 38.5052 13.3417 38.2981C13.4568 38.0909 13.6102 37.9817 13.7867 37.816C20.4576 31.4626 26.9251 25.3087 33.6536 19.0155C35.3376 17.4413 37.3438 16.4244 39.7951 16.4357C40.3513 16.4357 41.0111 16.1081 41.4484 15.7315C42.8332 14.5414 43.5966 12.9483 44.218 11.2912L44.0071 11.118L44.0109 11.1142Z",
                        stroke: "#CCA48A",
                        strokeOpacity: "0.8",
                        strokeMiterlimit: "10"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_217_197",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "44.4444",
                        height: "40",
                        fill: "currentColor",
                        transform: "translate(0 4)"
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const WrenchBrush = (WrenchBrushLogo);

;// CONCATENATED MODULE: ./src/components/icons/Facebook.tsx

function FacebookIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "35",
        height: "35",
        viewBox: "0 0 35 35",
        fill: "none",
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.4987 0C27.1637 0 34.9975 7.88238 34.9975 17.6073H35C35 26.3958 28.601 33.68 20.2354 35V22.6983H24.3068H24.3093L24.3097 22.6956H24.3116L25.0867 17.6047H20.2329V14.3009C20.2329 13.4851 20.4659 12.6807 21.0975 12.1549C21.5426 11.7858 22.1851 11.5549 23.0827 11.5549H25.2901V11.5522H25.2924V7.21858C25.2924 7.21858 23.2881 6.87532 21.3742 6.87532C19.2256 6.87532 17.4775 7.57939 16.32 8.91546C15.322 10.0659 14.7623 11.6854 14.7623 13.7281V17.6047H10.3222V17.6074H10.3199V22.6983H14.7623V34.9996C6.39783 33.6786 0 26.395 0 17.6073C0 7.88238 7.83379 0 17.4987 0Z",
            fill: "currentColor"
        })
    });
}
/* harmony default export */ const Facebook = (FacebookIcon);

;// CONCATENATED MODULE: ./src/components/icons/Pinterest.tsx

function PinterestIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "35",
        height: "35",
        viewBox: "0 0 35 35",
        fill: "none",
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 17.4987C0 7.8338 7.8338 0 17.4987 0L17.5013 0.00251087C27.1662 0.00251087 35 7.8363 35 17.5012C35 27.1662 27.1662 35 17.5013 35C15.6952 35 13.9493 34.7241 12.3088 34.2148C12.347 34.1546 12.3853 34.0944 12.4237 34.0342C12.572 33.8013 12.7206 33.568 12.8582 33.3269C13.802 31.6556 14.0356 30.7214 14.7418 27.8982C14.8709 27.3823 15.0157 26.8033 15.1835 26.1453C15.1958 26.1007 15.209 26.057 15.2232 26.0102C15.2321 25.981 15.2413 25.9505 15.251 25.9179C15.3061 25.986 15.358 26.0539 15.409 26.1205C15.4421 26.1638 15.4748 26.2065 15.5077 26.2484C15.561 26.3166 15.6149 26.3826 15.6721 26.4453C15.6918 26.467 15.7119 26.4883 15.7325 26.5091C15.7981 26.576 15.866 26.6407 15.936 26.7032C18.2774 28.7996 22.9936 28.4609 25.9346 24.8133C28.5659 21.5448 28.7716 16.9218 28.4856 15.048C28.0437 12.147 26.2461 9.48885 23.3643 7.96058C22.1564 7.31913 20.758 6.87633 19.1891 6.69764C14.7442 6.19345 9.8753 7.85402 7.25651 11.9603C4.89357 15.6652 5.40529 20.0424 7.19128 22.2549C7.40689 22.522 7.64329 22.7629 7.90082 22.9758C8.27022 23.2815 8.68316 23.5295 9.14067 23.7146C9.53449 23.8751 9.86311 23.7322 9.97097 23.3409C10.0622 23.0106 10.1436 22.6783 10.225 22.346C10.2734 22.1482 10.3218 21.9504 10.3723 21.753C10.4513 21.4484 10.2928 21.2514 10.0666 20.9702C10.0414 20.9388 10.0153 20.9063 9.98855 20.8726C7.88398 18.2337 8.94252 12.4568 13.6032 10.3021C16.6011 8.91499 20.8714 9.23785 23.0468 11.8447C23.8203 12.7733 24.3283 13.9913 24.4192 15.5248C24.5948 18.4546 23.6717 22.591 21.2937 24.3143C19.7948 25.402 18.1476 25.2421 17.158 24.4141C16.447 23.8175 16.0767 22.8752 16.3474 21.8032C16.5831 20.8649 16.8403 20.0183 17.0739 19.2493C17.6136 17.4729 18.0275 16.1107 17.7596 14.9903C17.5666 14.1872 17.0925 13.6555 16.5003 13.397C15.176 12.8169 13.2587 13.6031 12.5719 15.7781C12.1129 17.2355 12.2182 18.6728 12.7425 20.0901C12.7901 20.218 12.8252 20.3334 12.7926 20.4739C12.4336 21.983 12.1277 23.2609 11.867 24.3502C10.5337 29.9209 10.3801 30.5625 10.3318 31.985C10.3153 32.4499 10.3343 32.9126 10.3534 33.3752C10.3546 33.4043 10.3558 33.4334 10.3569 33.4625C10.3579 33.4629 10.3588 33.4633 10.3597 33.4637C10.3598 33.4641 10.3598 33.4645 10.3598 33.4648C4.2568 30.7307 0 24.6176 0 17.4987Z",
            fill: "currentColor"
        })
    });
}
/* harmony default export */ const Pinterest = (PinterestIcon);

;// CONCATENATED MODULE: ./src/components/icons/Instagram.tsx

function InstagramIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "35",
        height: "35",
        viewBox: "0 0 35 35",
        fill: "none",
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5ZM21.7277 12.0837C21.7277 11.4189 22.267 10.8796 22.9318 10.8796C23.5965 10.8796 24.1359 11.4189 24.1359 12.0837C24.1359 12.7485 23.5965 13.2878 22.9318 13.2878C22.267 13.2878 21.7277 12.7485 21.7277 12.0837ZM17.5837 12.4224C14.7966 12.4224 12.5313 14.6902 12.5313 17.4748C12.5313 20.2593 14.7991 22.5271 17.5837 22.5271C20.3682 22.5271 22.6359 20.2593 22.6359 17.4748C22.6359 14.6902 20.3682 12.4224 17.5837 12.4224ZM17.5837 20.7134C15.7975 20.7134 14.3475 19.2609 14.3475 17.4773C14.3475 15.6936 15.8 14.2412 17.5837 14.2412C19.3673 14.2412 20.8197 15.6936 20.8197 17.4773C20.8197 19.2609 19.3673 20.7134 17.5837 20.7134ZM13.4011 27.735H21.5943C24.9934 27.735 27.7579 24.9705 27.7579 21.5714V13.3783C27.7579 9.97912 24.9934 7.21465 21.5943 7.21465H13.4011C10.002 7.21465 7.23755 9.97912 7.23755 13.3783V21.5714C7.23755 24.9705 10.002 27.735 13.4011 27.735ZM9.16916 13.3783C9.16916 11.0453 11.0681 9.14627 13.4011 9.14627H21.5943C23.9273 9.14627 25.8262 11.0428 25.8262 13.3783V21.5714C25.8262 23.9044 23.9273 25.8034 21.5943 25.8034H13.4011C11.0681 25.8034 9.16916 23.9044 9.16916 21.5714V13.3783Z",
            fill: "currentColor"
        })
    });
}
/* harmony default export */ const Instagram = (InstagramIcon);

;// CONCATENATED MODULE: ./src/components/Sidebar.tsx








function Sidebar() {
    const router = (0,router_.useRouter)();
    const [activeLink, setActiveLink] = (0,external_react_.useState)();
    const links = [
        {
            name: "Home",
            href: "/",
            public: true
        },
        {
            name: "Gallery",
            href: "/gallery",
            public: true
        },
        {
            name: "About",
            href: "#",
            public: true
        },
        {
            name: "Store",
            href: "#",
            public: false
        },
        {
            name: "Contact",
            href: "#",
            public: true
        }
    ];
    (0,external_react_.useEffect)(()=>{
        if (router.isReady) {
            setActiveLink(router.pathname);
        }
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "sidebar",
        className: "w-[380px] lg:min-w-[380px] bg-dark-darkest h-full p-8 pt-10 pb-12 lg:p-12 flex flex-col justify-between",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex pt-11 mb-8 lg:mb-12",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(WrenchBrush, {
                                className: "w-7 h-7 md:h-9 md:w-9 lg:w-11 lg:h-11 mt-1.5 mr-4 md:mr-6 lg:mr-8 text-bronze"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "font-novecento-wide uppercase text-white font-medium text-[24px] md:text-[28px] lg:text-[37px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tracking-[0.018em] w-fit",
                                        children: "Taylor"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "tracking-wider w-fit",
                                        children: "Hamill"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col p-8 lg:p-12 ml-3 md:ml-8",
                        children: links.map((link, i)=>{
                            return link.public ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: link.href,
                                onClick: ()=>{
                                    setActiveLink(link.href);
                                },
                                className: `font-avenir tracking-wide mb-9 ${activeLink === link.href ? "text-lg lg:text-[22px] font-semibold text-bronze hover:text-bronze/[85%]" : "text-[17px] lg:text-xl text-heather font-normal hover:text-bronze/75"}`,
                                children: link.name
                            }, `link-${i}`) : null;
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center mb-2.5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Facebook, {
                        className: "w-9 h-9 text-bronze/50 hover:text-bronze/70 mr-7 lg:mr-9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pinterest, {
                        className: "w-9 h-9 text-bronze/50 hover:text-bronze/70 mr-7 lg:mr-9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Instagram, {
                        className: "w-9 h-9 text-bronze/50 hover:text-bronze/70"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/pages/gallery.tsx
var gallery = __webpack_require__(4927);
;// CONCATENATED MODULE: ./src/components/icons/MenuBars.tsx

function MenuBarsIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props.className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
/* harmony default export */ const MenuBars = (MenuBarsIcon);

;// CONCATENATED MODULE: ./src/components/icons/XMark.tsx

function XMarkIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        className: props.className,
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M4.5 19.5L19.5 4.5M4.5 4.5L19.5 19.5",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    });
}
/* harmony default export */ const XMark = (XMarkIcon);

;// CONCATENATED MODULE: ./src/components/MobileNav.tsx










function MobileNav({ isMobile  }) {
    const router = (0,router_.useRouter)();
    const [activeLink, setActiveLink] = (0,external_react_.useState)();
    const [open, setOpen] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!isMobile && open) {
            setOpen(false);
        }
    }, [
        isMobile
    ]);
    const links = [
        {
            name: "Home",
            href: "/",
            public: true
        },
        {
            name: "Gallery",
            href: "/gallery",
            public: true
        },
        {
            name: "About",
            href: "#",
            public: false
        },
        {
            name: "Store",
            href: "#",
            public: false
        },
        {
            name: "Contact",
            href: "#",
            public: false
        }
    ];
    (0,external_react_.useEffect)(()=>{
        if (router.isReady) {
            setActiveLink(router.pathname);
        }
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-[75px] bg-dark-darkest relative md:hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-full flex items-center justify-center mb-8 lg:mb-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(WrenchBrush, {
                            className: "w-8 h-8 mt-1.5 mr-4 md:mr-6 lg:mr-8 text-bronze -ml-2.5"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center justify-center mt-[5px] font-novecento-wide uppercase text-white tracking-wider font-medium text-[24px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-fit mr-2.5",
                                    children: "Taylor"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-fit",
                                    children: "Hamill"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `w-full md:w-[380px] lg:min-w-[380px] bg-dark-darkest h-full absolute z-20 p-8 pt-10 pb-12 lg:p-12 flex flex-col justify-between items-center transition-all duration-500 ${open ? "translate-y-0" : "-translate-y-full"}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col flex-auto",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex pt-11 mb-12",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(WrenchBrush, {
                                        className: "w-7 h-7 md:h-9 md:w-9 lg:w-11 lg:h-11 mt-1.5 mr-4 md:mr-6 lg:mr-8 text-bronze"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex font-novecento-wide uppercase text-white font-medium text-[24px] md:text-[28px] lg:text-[37px] mt-0.5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "tracking-[0.018em] w-fit mr-2.5",
                                                children: "Taylor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "tracking-wider w-fit",
                                                children: "Hamill"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col p-8 lg:p-12 ml-3 md:ml-8 w-full flex-auto justify-center justify-items-center items-center max-h-[480px]",
                                children: links.map((link, i)=>{
                                    return link.public ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: link.href,
                                        onClick: ()=>{
                                            setActiveLink(link.href);
                                            setOpen(false);
                                        },
                                        className: `font-avenir tracking-wide mb-12 ${activeLink === link.href ? "text-3xl lg:text-[22px] font-semibold text-bronze hover:text-bronze/[85%]" : "text-[28px] lg:text-xl text-heather font-normal hover:text-bronze/75"}`,
                                        children: link.name
                                    }, `link-${i}`) : null;
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between max-w-[240px] mb-32 lg:mb-2.5 w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Facebook, {
                                className: "w-11 h-11 text-bronze/50 hover:text-bronze/70 lg:mr-9"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Pinterest, {
                                className: "w-11 h-11 text-bronze/50 hover:text-bronze/70 lg:mr-9"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Instagram, {
                                className: "w-11 h-11 text-bronze/50 hover:text-bronze/70"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>{
                    setOpen(!open);
                },
                className: "z-40 absolute bottom-12 right-8 h-14 w-14 bronze-gradient rounded-full flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "h-full w-full flex items-center justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(XMark, {
                            className: `absolute text-yellow-gold h-7 w-7 stroke-[2px] ml-px transition-all duration-500 flex-none ${open ? "delay-[250ms] opacity-100 rotate-[360deg]" : "opacity-0 rotate-0"}	`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MenuBars, {
                            className: `absolute text-yellow-gold h-8 w-8 stroke-[1.5px] transition-all duration-500 ${open ? "opacity-0 rotate-0" : "delay-[250ms] opacity-100 -rotate-[360deg]"}	`
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx






function Layout(props) {
    const router = (0,router_.useRouter)();
    const [isMobile, setIsMobile] = (0,external_react_.useState)(false);
    const [showHomeGallery, setShowHomeGallery] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        function handleResize(e) {
            if (e.target.visualViewport.width < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        // if (router.pathname === "/") {
        // 	e.target.visualViewport.width < 1400
        // 		? setShowHomeGallery(true)
        // 		: setShowHomeGallery(false);
        // }
        }
        handleResize({
            target: window
        });
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col md:flex-row primary-bg-gradient w-full h-full",
            children: [
                !isMobile ? /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}) : /*#__PURE__*/ jsx_runtime_.jsx(MobileNav, {
                    isMobile: isMobile
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-auto w-full h-full overflow-auto",
                    children: router.pathname === "/" && showHomeGallery ? /*#__PURE__*/ jsx_runtime_.jsx(gallery["default"], {}) : props.children
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeadSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                ...pageProps,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,202,927], () => (__webpack_exec__(1350)));
module.exports = __webpack_exports__;

})();