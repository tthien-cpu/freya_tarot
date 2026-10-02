"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollCardAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;
    const sidePercent = isMobile ? 80 : 90;
    const centerPercent = isMobile ? 70 : 85;

    // Góc nghiêng hướng vào giữa trang:
    // - Thẻ bên trái nghiêng theo chiều / (xoay theo chiều kim đồng hồ: +28°)
    // - Thẻ bên phải nghiêng theo chiều \ (xoay ngược chiều kim đồng hồ: -28°)
    // - Khi vào trong đúng vị trí sẽ thẳng dần từ từ về 0°
    const tiltAngle = isMobile ? 16 : 28;

    const ctx = gsap.context(() => {
      if (isMobile) {
        // MOBILE OPTIMIZATION:
        // Trên điện thoại (các thẻ xếp dọc 1 cột), mỗi thẻ sẽ trượt nhẹ êm ái từ dưới lên
        // và sáng rõ dần khi người dùng cuộn đến đúng vị trí của thẻ đó.
        const mobileSelectors = [
          ".pricing-col-1",
          ".pricing-col-2",
          ".pricing-col-3",
          ".service-col-1",
          ".service-col-2",
          ".roadmap-step-1",
          ".roadmap-step-2",
          ".roadmap-step-3",
          ".roadmap-step-4",
          ".consult-col-1",
          ".consult-col-2",
        ];

        mobileSelectors.forEach((selector) => {
          const el = document.querySelector(selector);
          if (el) {
            gsap.fromTo(
              el,
              {
                y: 35,
                opacity: 0.35,
                filter: "blur(2px)",
              },
              {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 92%",
                  end: "top 68%",
                  scrub: 1,
                },
              }
            );
          }
        });
      } else {
        // DESKTOP:
        // Giữ nguyên 100% hiệu ứng trượt 90% từ 2 bên rìa vào và xoay nghiêng ~60° (28°) hướng vào tâm trang
        // 1. SECTION 3: BẢNG GIÁ (3 KHUNG)
        const pricingTrigger = document.querySelector(".pricing-grid-3");
        if (pricingTrigger) {
          const pricingTl = gsap.timeline({
            scrollTrigger: {
              trigger: pricingTrigger,
              start: "top 96%",
              end: "top 38%",
              scrub: 1.5,
            },
          });

          pricingTl
            .fromTo(
              ".pricing-col-1",
              {
                xPercent: -sidePercent,
                rotation: tiltAngle,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              {
                xPercent: 0,
                rotation: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power2.out",
              },
              0
            )
            .fromTo(
              ".pricing-col-2",
              {
                yPercent: centerPercent,
                rotation: 0,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "center center",
              },
              {
                yPercent: 0,
                rotation: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power2.out",
              },
              0
            )
            .fromTo(
              ".pricing-col-3",
              {
                xPercent: sidePercent,
                rotation: -tiltAngle,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              {
                xPercent: 0,
                rotation: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power2.out",
              },
              0
            );
        }

        // 2. SECTION 2: DỊCH VỤ (2 KHUNG)
        const servicesTrigger = document.querySelector(".services-grid-2");
        if (servicesTrigger) {
          const servicesTl = gsap.timeline({
            scrollTrigger: {
              trigger: servicesTrigger,
              start: "top 96%",
              end: "top 40%",
              scrub: 1.5,
            },
          });

          servicesTl
            .fromTo(
              ".service-col-1",
              {
                xPercent: -sidePercent,
                rotation: tiltAngle * 0.9,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              {
                xPercent: 0,
                rotation: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power2.out",
              },
              0
            )
            .fromTo(
              ".service-col-2",
              {
                xPercent: sidePercent,
                rotation: -tiltAngle * 0.9,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              {
                xPercent: 0,
                rotation: 0,
                opacity: 1,
                filter: "blur(0px)",
                ease: "power2.out",
              },
              0
            );
        }

        // 3. SECTION 4: QUY TRÌNH 4 BƯỚC (4 KHUNG)
        const roadmapTrigger = document.querySelector(".roadmap-grid-4");
        if (roadmapTrigger) {
          const roadmapTl = gsap.timeline({
            scrollTrigger: {
              trigger: roadmapTrigger,
              start: "top 96%",
              end: "top 48%",
              scrub: 1.5,
            },
          });

          roadmapTl
            .fromTo(
              ".roadmap-step-1",
              {
                xPercent: -sidePercent,
                rotation: tiltAngle * 0.6,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              { xPercent: 0, rotation: 0, opacity: 1, filter: "blur(0px)", ease: "power2.out" },
              0
            )
            .fromTo(
              ".roadmap-step-2",
              {
                xPercent: -sidePercent * 0.45,
                rotation: tiltAngle * 0.3,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              { xPercent: 0, rotation: 0, opacity: 1, filter: "blur(0px)", ease: "power2.out" },
              0
            )
            .fromTo(
              ".roadmap-step-3",
              {
                xPercent: sidePercent * 0.45,
                rotation: -tiltAngle * 0.3,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              { xPercent: 0, rotation: 0, opacity: 1, filter: "blur(0px)", ease: "power2.out" },
              0
            )
            .fromTo(
              ".roadmap-step-4",
              {
                xPercent: sidePercent,
                rotation: -tiltAngle * 0.6,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              { xPercent: 0, rotation: 0, opacity: 1, filter: "blur(0px)", ease: "power2.out" },
              0
            );
        }

        // 4. SECTION 4: FORM & THANH TOÁN (2 KHUNG)
        const consultTrigger = document.querySelector(".consult-grid-2");
        if (consultTrigger) {
          const consultTl = gsap.timeline({
            scrollTrigger: {
              trigger: consultTrigger,
              start: "top 96%",
              end: "top 42%",
              scrub: 1.5,
            },
          });

          consultTl
            .fromTo(
              ".consult-col-1",
              {
                xPercent: -sidePercent * 0.85,
                rotation: tiltAngle * 0.6,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              { xPercent: 0, rotation: 0, opacity: 1, filter: "blur(0px)", ease: "power2.out" },
              0
            )
            .fromTo(
              ".consult-col-2",
              {
                xPercent: sidePercent * 0.85,
                rotation: -tiltAngle * 0.6,
                opacity: 0.5,
                filter: "blur(2px)",
                transformOrigin: "50% 80%",
              },
              { xPercent: 0, rotation: 0, opacity: 1, filter: "blur(0px)", ease: "power2.out" },
              0
            );
        }
      }
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return null;
}
