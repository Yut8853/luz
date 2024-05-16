import Preloader from "./components/Preloader";
import Header from "./components/Header";
import MenuOverlay from "./components/MenuOverlay";
import MenuClassic from "./components/MenuClassic";
import SliderFullpageBackgroundsMask from "./components/SliderFullpageBackgroundsMask";
import SliderFullpageBackgroundsSlide from "./components/SliderFullpageBackgroundsSlide";
import SliderTestimonials from "./components/SliderTestimonials";
import InfiniteList from "./components/InfiniteList";
import CurtainsBase from "./components/CurtainsBase";
import SplitCounter from "./components/SplitCounter";
import MarqueeHeader from "./components/MarqueeHeader";
import MarqueeHeadingsHover from "./components/MarqueeHeadingsHover";
import ScreensWall from "./components/ScreensWall";
import RotatingButton from "./components/RotatingButton";
import ArcImages from "./components/ArcImages";
import Scroll from "./components/Scroll";
import AJAX from "./components/AJAX";
import Masthead from "./components/Masthead";
import Content from "./components/Content";
import Parallax from "./components/Parallax";
import HorizontalScroll from "./components/HorizontalScroll";
import CursorFollower from "./components/CursorFollower";
import PSWP from "./components/PSWP";
import GMap from "./components/GMap";
import FormAJAX from "./components/FormAJAX";
import Grid from "./components/Grid";
import AutoScrollNext from "./components/AutoScrollNext";
import FixedHeader from "./components/FixedHeader";
import FixedWall from "./components/FixedWall";
import CounterUp from "./components/CounterUp";
import SliderImages from "./components/SliderImages";
import ClickAndHold from "./components/ClickAndHold";
import Mask from "./components/Mask";
import Gui from "./components/Gui";
import MyCustomComponent from "./components/MyCustomComponent";
import deepmerge from "deepmerge";

const componentsMap = {
  Preloader: Preloader,
  Header: Header,
  MenuOverlay: MenuOverlay,
  MenuClassic: MenuClassic,
  SliderFullpageBackgroundsMask: SliderFullpageBackgroundsMask,
  SliderFullpageBackgroundsSlide: SliderFullpageBackgroundsSlide,
  SliderTestimonials: SliderTestimonials,
  InfiniteList: InfiniteList,
  CurtainsBase: CurtainsBase,
  SplitCounter: SplitCounter,
  MarqueeHeader: MarqueeHeader,
  MarqueeHeadingsHover: MarqueeHeadingsHover,
  ScreensWall: ScreensWall,
  RotatingButton: RotatingButton,
  ArcImages: ArcImages,
  Scroll: Scroll,
  AJAX: AJAX,
  Masthead: Masthead,
  Content: Content,
  Parallax: Parallax,
  HorizontalScroll: HorizontalScroll,
  CursorFollower: CursorFollower,
  PSWP: PSWP,
  GMap: GMap,
  FormAJAX: FormAJAX,
  Grid: Grid,
  AutoScrollNext: AutoScrollNext,
  FixedHeader: FixedHeader,
  FixedWall: FixedWall,
  CounterUp: CounterUp,
  SliderImages: SliderImages,
  ClickAndHold: ClickAndHold,
  Mask: Mask,
  Gui: Gui,
  MyCustomComponent: MyCustomComponent,
};

class Animations {
  constructor(
    { duration } = {
      duration: 1.2,
    }
  ) {
    this.defaults = {
      duration,
    };
    this.splitTextPresets = {
      sliderLines: {
        init: true,
        type: "lines",
        wrap: "lines",
        set: false,
      },
      sliderChars: {
        type: "lines,chars",
        wrap: "chars",
        set: false,
      },
      counterChars: {
        init: true,
        type: "chars",
        set: false,
        wrap: false,
      },
      animatedLines: {
        init: true,
        type: "lines",
        set: {
          type: "lines",
          direction: "y",
          distance: "103%",
          opacity: false,
        },
        wrap: "lines",
        wrapClass: "overflow-hidden",
      },
      overlayMenuItem: {
        init: true,
        type: "lines",
        set: {
          type: "lines",
          direction: "y",
          distance: "-103%",
          opacity: false,
        },
        wrap: "lines",
        wrapClass: "overflow-hidden",
      },
      animatedChars: {
        init: true,
        type: "lines,words,chars",
        set: {
          type: "chars",
          direction: "y",
          distance: "103%",
          opacity: false,
        },
        wrap: "lines",
        wrapClass: "overflow-hidden",
      },
      animatedCharsRandom: {
        init: true,
        type: "lines,words,chars",
        set: {
          type: "chars",
          direction: "y",
          distance: "103%",
          opacity: 1,
        },
        wrap: "lines",
        wrapClass: "overflow-hidden",
      },
      animatedCounterChars: {
        init: true,
        type: "chars",
        set: {
          type: "chars",
          direction: "y",
          distance: "40%",
          opacity: 0,
        },
        wrap: false,
      },
    };

    this._animateTranslate();

    this._animateScale();

    this._animateMask();
    this._hideMask();

    this._animateCurtain();
    this._hideCurtain();
  }

  _animateTranslate() {
    gsap.registerEffect({
      name: "animateTranslate",
      effect: (target, config) => {
        const tl = gsap.timeline();

        if (target && target[0]) {
          let initialConfig = {},
            targetConfig = {
              xPercent: 0,
              yPercent: 0,
              duration: config.duration,
              ease: config.ease,
              stagger: config.stagger,
            };

          switch (config.animateFrom) {
            case "top":
              initialConfig.yPercent = -100;
              break;
            case "right":
              initialConfig.xPercent = 100;
              break;
            case "left":
              initialConfig.xPercent = -100;
              break;
            case "bottom":
              initialConfig.yPercent = 100;
              break;
          }

          if (typeof config.xPercent === "number") {
            initialConfig.xPercent = config.xPercent;
          }

          if (typeof config.yPercent === "number") {
            initialConfig.yPercent = config.yPercent;
          }

          if (!!config.animateOpacity) {
            initialConfig.opacity = 0;
            targetConfig.opacity = 1;
          }

          gsap.set(target, initialConfig);
          tl.to(target, targetConfig);

          if (!!config.clearProps && config.clearProps.length) {
            tl.set(target, {
              clearProps: config.clearProps,
            });
          }
        }

        return tl;
      },
      defaults: {
        animateFrom: "bottom",
        animateOpacity: false,
        animateSkew: false,
        xPercent: false,
        yPercent: false,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
        transformOrigin: "center center",
        clearProps: "transform,transformOrigin,opacity",
      },
      extendTimeline: true,
    });
  }

  _animateScale() {
    gsap.registerEffect({
      name: "animateScale",
      effect: (target, config) => {
        const tl = gsap.timeline();

        if (target && target[0]) {
          let initialConfig = {},
            targetConfig = {
              duration: config.duration,
              ease: config.ease,
              stagger: config.stagger,
            };

          switch (config.animateFrom) {
            case "top":
              targetConfig.transformOrigin = "center top";
              // initialConfig.scaleY = 0;
              targetConfig.scaleY = 1;
              break;
            case "right":
              targetConfig.transformOrigin = "right center";
              // initialConfig.scaleX = 0;
              targetConfig.scaleX = 1;
              break;
            case "left":
              targetConfig.transformOrigin = "left center";
              // initialConfig.scaleX = 0;
              targetConfig.scaleX = 1;
              break;
            case "bottom":
              targetConfig.transformOrigin = "center bottom";
              // initialConfig.scaleY = 0;
              targetConfig.scaleY = 1;
              break;
            case "center":
              targetConfig.transformOrigin = "center center";
              // initialConfig.scale = 0;
              targetConfig.scale = 1;
              break;
          }

          if (typeof config.scaleX === "number") {
            // initialConfig.scaleX = config.scaleX;
            targetConfig.scaleX = 1;
          }

          if (typeof config.scaleY === "number") {
            // initialConfig.scaleY = config.scaleY;
            targetConfig.scaleY = 1;
          }

          if (typeof config.scale === "number") {
            // initialConfig.scale = config.scale;
            targetConfig.scale = 1;
          }

          // gsap.set(target, initialConfig);
          tl.to(target, targetConfig);

          if (!!config.clearProps && config.clearProps.length) {
            tl.set(target, {
              clearProps: config.clearProps,
            });
          }
        }

        return tl;
      },
      defaults: {
        scaleX: false,
        scaleY: false,
        scale: false,
        animateFrom: "center",
        duration: 0.6,
        ease: "power4.out",
        clearProps: "transform",
      },
      extendTimeline: true,
    });
  }

  _animateMask() {
    gsap.registerEffect({
      name: "animateMask",
      effect: (target, config) => {
        const tl = gsap.timeline({
          onStart: config.onStart,
          onComplete: config.onComplete,
        });

        if (target && target[0]) {
          let initialCP;

          if (config.shape === "circle") {
            initialCP = `circle(0% at 50% 50%)`;
          } else if (config.shape === "ellipse") {
            initialCP = `ellipse(50% 0% at 50% 50%)`;
          } else {
            // rectangle
            switch (config.animateFrom) {
              case "top":
                initialCP = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
                break;
              case "right":
                initialCP = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
                break;
              case "left":
                initialCP = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
                break;
              case "center":
                initialCP = "inset(50%)";
                break;
              default:
                initialCP = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
                break;
            }
          }

          if (!!config.clipPathFrom) {
            gsap.set(target, {
              clipPath: initialCP,
              overwrite: config.overwrite,
            });
          }

          let innerElement;

          if (typeof config.scaleInner === "string") {
            innerElement = target[0].querySelector(config.scaleInner);
          }

          if (innerElement && !!config.scale) {
            gsap.set(innerElement, {
              transformOrigin: "center center",
              scale: config.scale,
            });
          }

          let clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

          if (config.animateFrom === "center") {
            clipPath = `inset(0%)`;
          }

          if (config.shape === "circle") {
            clipPath = `circle(100% at 50% 50%)`;
          } else if (config.shape === "ellipse") {
            clipPath = `ellipse(100% 100% at 50% 50%)`;
          }

          tl.to(target, {
            x: config.x,
            y: config.y,
            clipPath,
            duration: config.duration,
            ease: config.ease,
            stagger: config.stagger,
          });

          if (innerElement && !!config.scale) {
            tl.to(
              innerElement,
              {
                scale: 1,
                duration: config.duration * 1.25,
                ease: config.ease,
              },
              "<"
            );
          }

          if (!!config.clearProps && config.clearProps.length) {
            tl.set(target, {
              clearProps: config.clearProps,
            });

            if (innerElement && !!config.scale) {
              tl.set(innerElement, {
                clearProps: "transform",
              });
            }
          }
        }

        return tl;
      },
      defaults: {
        x: undefined,
        y: undefined,
        shape: "rectangle",
        duration: this.defaults.duration,
        scale: 1.05,
        scaleInner: "img,video",
        ease: "expo.inOut",
        stagger: 0,
        animateFrom: "bottom",
        clearProps: "clipPath",
        clipPathFrom: true,
        overwrite: true,
      },
      extendTimeline: true,
    });
  }

  _hideMask() {
    gsap.registerEffect({
      name: "hideMask",
      effect: (target, config) => {
        const tl = gsap.timeline({
          onStart: config.onStart,
          onComplete: config.onComplete,
        });

        if (target && target[0]) {
          switch (config.animateTo) {
            case "top":
              config.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
              break;
            case "right":
              config.clipPath =
                "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
              break;
            case "left":
              config.clipPath = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
              break;
            case "center":
              config.clipPath = "inset(50%)";
              break;
            default:
              config.clipPath =
                "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
              break;
          }

          if (!!config.clipPathFrom) {
            gsap.set(target, {
              clipPath: config.clipPathFrom,
              overwrite: config.overwrite,
            });
          }

          let innerElement;

          if (typeof config.scaleInner === "string") {
            innerElement = target[0].querySelector(config.scaleInner);
          }

          if (typeof config.duration === "number" && config.duration > 0) {
            tl.to(target, {
              x: config.x,
              y: config.y,
              clipPath: config.clipPath,
              duration: config.duration,
              ease: config.ease,
              stagger: config.stagger,
            });

            if (innerElement && !!config.scale) {
              tl.to(
                innerElement,
                {
                  scale: config.scale,
                  duration: config.duration,
                  ease: config.ease,
                },
                "<"
              );
            }
          } else {
            tl.set(target, {
              x: config.x,
              y: config.y,
              clipPath: config.clipPath,
            });

            if (innerElement && !!config.scale) {
              tl.set(
                innerElement,
                {
                  scale: config.scale,
                },
                "<"
              );
            }
          }

          if (!!config.clearProps && config.clearProps.length) {
            tl.set(target, {
              clearProps: config.clearProps,
            });

            if (innerElement && !!config.scale) {
              tl.set(innerElement, {
                clearProps: "transform",
              });
            }
          }
        }

        return tl;
      },
      defaults: {
        x: undefined,
        y: undefined,
        duration: this.defaults.duration,
        scale: 1.1,
        scaleInner: "img,video",
        ease: "expo.inOut",
        animateTo: "bottom",
        clearProps: "clipPath",
        clipPathFrom: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        overwrite: true,
      },
      extendTimeline: true,
    });
  }

  _animateCurtain() {
    gsap.registerEffect({
      name: "animateCurtain",
      effect: (target, config) => {
        if (!app.options.animations.curvedMasks) {
          Object.assign(config, {
            overwrite: false,
          });

          return gsap.effects.animateMask(target, config);
        }
        const tl = gsap.timeline({
          onStart: config.onStart,
          onComplete: config.onComplete,
        });
        let shouldForceRepaint = false;

        if (
          typeof app.options.animations.curvedMasksForceRepaint === "function"
        ) {
          shouldForceRepaint = app.options.animations.curvedMasksForceRepaint();
        } else if (app.options.animations.curvedMasksForceRepaint === "auto") {
          shouldForceRepaint = typeof window.safari !== "undefined";
        } else {
          shouldForceRepaint = !!app.options.animations.curvedMasksForceRepaint;
        }

        if (target && target[0]) {
          const clipPathTarget = "url('#curtain-clip')",
            clip = document.querySelector("#curtain-clip"),
            path = clip.querySelector("#curtain-clip__path");

          let transformOrigin = "center bottom",
            morphSVGFrom =
              "M0,0.5 C0.167,0.167,0.333,0,0.5,0 C0.667,0,0.833,0.167,1,0.5 L1,1 L0,1 L0,0.5",
            morphSVGTo =
              "M0,0 C0.167,0,0.333,0,0.5,0 C0.667,0,0.833,0,1,0 L1,1 L0,1 L0,0";

          if (config.animateFrom === "top") {
            transformOrigin = "center top";
            morphSVGFrom =
              "M0,0 L1,0 L1,0.5 C0.833,0.833,0.667,1,0.5,1 C0.333,1,0.167,0.833,0,0.5 L0,0";
            morphSVGTo =
              "M0,0 L1,0 L1,1 C0.833,1,0.667,1,0.5,1 C0.333,1,0.167,1,0,1 L0,0";
          }

          tl.set(target[0], {
            clipPath: clipPathTarget,
            inset: "0px",
          })
            .set(path, {
              clearProps: "all",
            })
            .fromTo(
              path,
              {
                morphSVG: morphSVGFrom,
                scaleY: 0,
                transformOrigin,
                immediateRender: true,
              },
              {
                morphSVG: morphSVGTo,
                scaleY: 1.01,
                transformOrigin,
                ease: config.ease,
                duration: config.duration,
                onUpdate: () => {
                  if (shouldForceRepaint) {
                    target[0].style.clipPath = "none";
                    target[0].offsetWidth;
                    target[0].style.clipPath = "url('#curtain-clip')";
                  }
                },
              }
            )
            .set(target[0], {
              clearProps: config.clearProps,
            })
            .set(path, {
              clearProps: "all",
            });
        }

        return tl;
      },
      defaults: {
        duration: this.defaults.duration,
        ease: "expo.inOut",
        animateFrom: "bottom",
        clearProps: "clipPath,inset",
      },
      extendTimeline: true,
    });
  }

  _hideCurtain() {
    gsap.registerEffect({
      name: "hideCurtain",
      effect: (target, config) => {
        if (!app.options.animations.curvedMasks) {
          Object.assign(config, {
            overwrite: false,
          });

          return gsap.effects.hideMask(target, config);
        }

        const tl = gsap.timeline({
          onStart: config.onStart,
          onComplete: config.onComplete,
        });
        let shouldForceRepaint = false;

        if (
          typeof app.options.animations.curvedMasksForceRepaint === "function"
        ) {
          shouldForceRepaint = app.options.animations.curvedMasksForceRepaint();
        } else if (app.options.animations.curvedMasksForceRepaint === "auto") {
          shouldForceRepaint = typeof window.safari !== "undefined";
        } else {
          shouldForceRepaint = !!app.options.animations.curvedMasksForceRepaint;
        }

        if (target && target[0]) {
          const clipPathTarget = "url('#curtain-clip')",
            clip = document.querySelector("#curtain-clip"),
            path = clip.querySelector("#curtain-clip__path");

          let transformOrigin = "center bottom",
            morphSVGTo =
              "M0,0.5 C0.167,0.167,0.333,0,0.5,0 C0.667,0,0.833,0.167,1,0.5 L1,1 L0,1 L0,0.5",
            morphSVGFrom =
              "M0,0 C0.167,0,0.333,0,0.5,0 C0.667,0,0.833,0,1,0 L1,1 L0,1 L0,0";

          if (config.animateTo === "top") {
            transformOrigin = "center top";
            morphSVGTo =
              "M0,0 L1,0 L1,0.5 C0.833,0.833,0.667,1,0.5,1 C0.333,1,0.167,0.833,0,0.5 L0,0";
            morphSVGFrom =
              "M0,0 L1,0 L1,1 C0.833,1,0.667,1,0.5,1 C0.333,1,0.167,1,0,1 L0,0";
          }

          tl.set(target[0], {
            clipPath: clipPathTarget,
            inset: "0px",
          })
            .set(path, {
              clearProps: "all",
            })
            .fromTo(
              path,
              {
                morphSVG: morphSVGFrom,
                scaleY: 1,
                transformOrigin,
                immediateRender: true,
              },
              {
                morphSVG: morphSVGTo,
                scaleY: 0,
                transformOrigin,
                ease: config.ease,
                duration: config.duration,
                onUpdate: () => {
                  if (shouldForceRepaint) {
                    target[0].style.clipPath = "none";
                    target[0].offsetWidth;
                    target[0].style.clipPath = clipPathTarget;
                  }
                },
                // onComplete: config.onComplete
              }
            )
            .set(target[0], {
              clearProps: config.clearProps,
            })
            .set(path, {
              clearProps: "all",
            });
        }

        return tl;
      },
      defaults: {
        duration: this.defaults.duration,
        ease: "expo.inOut",
        animateTo: "top",
        clearProps: "clipPath,inset",
        onComplete: undefined,
      },
      extendTimeline: true,
    });
  }
}

class AssetsManager {
  constructor() {
    this.promises = [];
  }

  load({
    type = undefined, // script | stylesheet
    src = null,
    id = null, // id attribute in DOM
    inline = null,
    preload = false,
    refElement,
    version = null,
    timeout = 30000,
    cache = true,
    cb = null,
  }) {
    return new Promise((resolve, reject) => {
      // Don't load asset that is pending to load
      if (cache && id in this.promises) {
        // return existing loading promise
        this.promises[id].then(resolve, reject);
        return;
      }

      // CSS
      if (type === "style") {
        const stylePromise = this._loadStyle({
          src,
          id,
          inline,
          preload,
          refElement,
          timeout,
          version,
          cb,
        });

        this.promises[id] = stylePromise;
        return stylePromise.then(resolve, reject);
      } else if (type === "script") {
        // JS
        const scriptPromise = this._loadScript({
          src,
          id,
          inline,
          preload,
          refElement,
          timeout,
          version,
          cb,
        });

        this.promises[id] = scriptPromise;

        return scriptPromise.then(resolve, reject);
      } else {
        // Unknown type
        reject(new TypeError('Resource type "style" or "script" is missing.'));
      }
    });
  }

  _loadScript({
    src = null,
    id = null,
    inline = null,
    preload = false,
    refElement = document.body,
    version = null,
    timeout = 15000,
    cb = null,
  }) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(`script[src="${src}"]`),
        head = document.getElementsByTagName("head")[0];

      let script, timer, preloadEl;

      if ((typeof element === "undefined" || element === null) && !inline) {
        if (src && version) {
          src += `?ver=${version}`;
        }

        if (src && preload) {
          preloadEl = document.createElement("link");
          preloadEl.setAttribute("rel", "preload");
          preloadEl.setAttribute("href", src);
          preloadEl.setAttribute("as", "script");
          preloadEl.setAttribute("type", "text/javascript");
          head.prepend(preloadEl);
        }

        script = document.createElement("script");
        script.setAttribute("type", "text/javascript");

        if (src) {
          script.setAttribute("async", "async");
          script.setAttribute("src", src);
          script.setAttribute("crossorigin", "anonymous");
        }

        if (!id) {
          const timestamp = Math.round(new Date().getTime() / 1000);
          id = `ajax-asset-${timestamp}-js`;
        }

        script.setAttribute("id", id);

        if (typeof inline === "string" && inline.length) {
          script.innerHTML = inline;
        }

        refElement.append(script);

        if (src) {
          script.onerror = (error) => {
            cleanup();
            refElement.removeChild(script);
            script = null;
            reject(
              new Error(
                `A network error occured while trying to load resouce ${src}`
              )
            );
          };

          if (script.onreadystatechange === undefined) {
            script.onload = onload;
          } else {
            script.onreadystatechange = onload;
          }

          timer = setTimeout(script.onerror, timeout);
        } else {
          resolve(script);
        }
      } else {
        resolve(element);
      }

      function cleanup() {
        clearTimeout(timer);
        timer = null;
        script.onerror = script.onreadystatechange = script.onload = null;
      }

      function onload() {
        cleanup();
        if (
          !script.onreadystatechange ||
          (script.readyState && script.readyState === "complete")
        ) {
          if (typeof cb === "function") {
            cb();
          }

          resolve(script);
          return;
        }
      }
    });
  }

  _loadStyle({
    src = null,
    id = null,
    inline = null,
    preload = false,
    refElement,
    version = null,
    timeout = 15000,
    cb = null,
  }) {
    return new Promise((resolve, reject) => {
      const isInlineStyle = typeof inline === "string" && inline.length;

      if (!id) {
        reject(new TypeError("Resource ID attribute is missing."));
      }

      const sameIdElement = document.getElementById(id),
        sameSrcElement =
          src && !isInlineStyle
            ? document.querySelector(`link[href*="${src}"]`)
            : undefined;

      if (!sameIdElement && !sameSrcElement) {
        let timer, element, preloadEl;
        const head = document.getElementsByTagName("head")[0];

        if (src && version && !isInlineStyle) {
          src += `?ver=${version}`;
        }

        if (src && preload) {
          preloadEl = document.createElement("link");
          preloadEl.setAttribute("rel", "preload");
          preloadEl.setAttribute("href", src);
          preloadEl.setAttribute("as", "style");
          head.prepend(preloadEl);
        }

        element = document.createElement(isInlineStyle ? "style" : "link");

        element.onerror = function () {
          cleanup();

          refElement.removeChild(element);

          element = null;

          reject(
            new Error(
              `A network error occured while trying to load resouce ${src}`
            )
          );
        };

        element.onload = function () {
          cleanup();

          if (typeof cb === "function") {
            cb();
          }

          resolve(element);
          return;
        };

        if (isInlineStyle) {
          element.innerHTML = inline;
        } else {
          element.href = src;
          element.rel = "stylesheet";
          element.type = "text/css";
        }

        if (timeout) {
          timer = setTimeout(element.onerror, timeout);
        }

        element.setAttribute("id", id);

        refElement.appendChild(element);
      } else {
        resolve(sameIdElement || sameSrcElement);
      }

      function cleanup() {
        clearTimeout(timer);

        element.onerror = element.onload = null;
      }
    });
  }
}

class App {
  constructor({ animations = true } = {}) {
    Object.assign(this, {
      options: {
        animations,
        debug: false,
      },
    });
  }

  init() {
    this.animations = new Animations();
    this.assetsManager = new AssetsManager();

    this.assetsManager
      .load({
        type: "script",
        src: "https://example.com/external-script.js",
        id: "external-script",
      })
      .then(() => {
        console.log("Script loaded successfully!");
      })
      .catch((error) => {
        console.error("Error loading script:", error);
      });
  }
}

const app = new App({
  animations: {
    enabled: true,
    curvedMasks: true,
    curvedMasksForceRepaint: "auto",
  },
});

export default app;

export { componentsMap };
