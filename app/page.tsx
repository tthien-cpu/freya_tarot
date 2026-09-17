"use client";

import { useEffect } from "react";
import { ArrowDownRight, ArrowRight, CalendarDays, Check, Clock3, MessageCircle, MoonStar, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const zaloUrl = "https://zalo.me/0947181857";

const tarotPrices = [
  ["1 câu hỏi", "50.000đ"], ["3 câu hỏi", "80.000đ"], ["Bảng câu hỏi", "130.000đ"], ["1 tiếng", "200.000đ"],
];
const ichingPrices = [["1 câu hỏi", "59.000đ"], ["3 câu hỏi", "100.000đ"], ["1 tiếng", "219.000đ"]];
const astrologyPrices = [["Thần số học", "300.000đ"], ["Bản đồ sao", "450.000đ"], ["Tiền kiếp Draconic", "650.000đ"]];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <div data-reveal className={className} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>{children}</div>;
}

function PriceRows({ prices }: { prices: string[][] }) {
  return <div className="price-rows">{prices.map(([name, price]) => <div key={name}><span>{name}</span><strong>{price}</strong></div>)}</div>;
}

export default function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -48px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main>
    <nav className="nav" aria-label="Điều hướng chính">
      <a href="#đầu-trang" className="brand"><MoonStar size={19} /> FREYA TAROT</a>
      <div className="nav-links"><a href="#dịch-vụ">Dịch vụ</a><a href="#bảng-giá">Bảng giá</a><a href="#đặt-lịch">Đặt lịch</a></div>
      <a className="nav-message" href={zaloUrl} target="_blank" rel="noreferrer">Nhắn Zalo <ArrowRight size={15} /></a>
    </nav>

    <section className="hero" id="đầu-trang">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <Reveal className="hero-copy">
          <p className="kicker"><Sparkles size={15} /> TAROT & CHIÊM TINH CÁ NHÂN</p>
          <h1>Lắng nghe câu chuyện<br /><em>của chính mình.</em></h1>
          <p className="hero-lead">Một khoảng dừng riêng tư để bạn nhìn rõ hơn những điều đang diễn ra, qua Tarot, Kinh Dịch và bản đồ sao.</p>
          <div className="hero-actions"><Button asChild size="lg" className="gold-button"><a href="#đặt-lịch"><CalendarDays /> Đặt lịch xem</a></Button><a className="text-link" href="#bảng-giá">Xem bảng giá <ArrowDownRight size={18} /></a></div>
          <div className="proof"><span><Star fill="currentColor" /> 6 năm đồng hành</span><span><Clock3 /> Online 1-1</span><span><Check /> Có ghi âm buổi xem</span></div>
        </Reveal>
        <Reveal className="hero-visual" delay={160}>
          <div className="halo" aria-hidden="true" />
          <div className="portrait"><img src="/freya-course.png" alt="Hình ảnh đại diện Freya Tarot" /></div>
          <div className="visual-note note-top">CHỌN<br />SỰ RÕ RÀNG</div>
          <div className="visual-note note-bottom">FREYA<br /><small>Tarot reader</small></div>
          <span className="star star-a" aria-hidden="true">✦</span><span className="star star-b" aria-hidden="true">✧</span>
        </Reveal>
      </div>
      <div className="scroll-cue"><span /> CUỘN ĐỂ KHÁM PHÁ</div>
    </section>

    <section className="signature-line"><span>Tarot phương Tây</span><i>✦</i><span>Kinh Dịch phương Đông</span><i>✦</i><span>Thần số học</span><i>✦</i><span>Bản đồ sao</span><i>✦</i><span>Draconic</span></section>

    <section className="section services" id="dịch-vụ">
      <Reveal className="section-head"><p className="kicker"><Sparkles size={15} /> CÁCH FREYA ĐỒNG HÀNH</p><h2>Mỗi câu hỏi đều cần<br />một không gian riêng.</h2></Reveal>
      <div className="service-list">
        <Reveal delay={40}><article className="service-item"><span className="service-index">01</span><div><h3>Tarot phương Tây</h3><p>Soi chiếu chuyện tình cảm, công việc, lựa chọn hiện tại và những điều bạn đang cần gọi tên.</p></div><a href="#bảng-giá" aria-label="Xem giá Tarot"><ArrowRight /></a></article></Reveal>
        <Reveal delay={130}><article className="service-item"><span className="service-index">02</span><div><h3>Kinh Dịch phương Đông</h3><p>Một góc nhìn điềm tĩnh để hiểu rõ tình huống, thời điểm và hướng đi phù hợp hơn.</p></div><a href="#bảng-giá" aria-label="Xem giá Kinh Dịch"><ArrowRight /></a></article></Reveal>
        <Reveal delay={220}><article className="service-item"><span className="service-index">03</span><div><h3>Tử vi & chiêm tinh</h3><p>Thần số học, bản đồ sao và Draconic để đọc sâu hơn về hành trình riêng của bạn.</p></div><a href="#bảng-giá" aria-label="Xem giá chiêm tinh"><ArrowRight /></a></article></Reveal>
      </div>
    </section>

    <section className="section pricing" id="bảng-giá">
      <Reveal className="section-head price-head"><p className="kicker"><Sparkles size={15} /> BẢNG GIÁ DỊCH VỤ</p><h2>Chọn gói xem<br />phù hợp với bạn.</h2><p>Tất cả các buổi xem đều được hẹn lịch trước qua Zalo.</p></Reveal>
      <div className="price-grid">
        <Reveal delay={40}><article className="price-card"><p className="card-label">01 / TAROT</p><h3>Tarot phương Tây</h3><PriceRows prices={tarotPrices} /><p className="price-extra"><b>Tổng quan</b><br />1 tháng 80.000đ · 3 tháng 120.000đ<br />6 tháng 150.000đ · 1 năm 200.000đ</p><p className="price-extra"><b>Offline:</b> 350.000đ/người/60 phút</p></article></Reveal>
        <Reveal delay={130}><article className="price-card featured"><p className="card-label">02 / KINH DỊCH</p><h3>Kinh Dịch<br />phương Đông</h3><PriceRows prices={ichingPrices} /><div className="price-card-mark">SOI CHIẾU<br />DỊU DÀNG</div></article></Reveal>
        <Reveal delay={220}><article className="price-card"><p className="card-label">03 / CHIÊM TINH</p><h3>Hồ sơ trong đời</h3><PriceRows prices={astrologyPrices} /><p className="price-extra">Bao gồm file kết quả và cuộc gọi giải thích.</p></article></Reveal>
      </div>
    </section>

    <section className="healing">
      <Reveal className="healing-art"><img src="/freya-course.png" alt="Khóa học 7 ngày chữa lành" /><div className="healing-number">07</div></Reveal>
      <Reveal className="healing-copy" delay={120}><p className="kicker"><Sparkles size={15} /> CHƯƠNG TRÌNH 1-1</p><h2>7 ngày chữa lành,<br />học lại về bản thân.</h2><p>Một hành trình chuyên sâu dành cho người muốn dừng lại, lắng nghe và kết nối với chính mình.</p><ul><li><Check /> 7 ngày liên tiếp, 60 phút mỗi buổi</li><li><Check /> Thần số học, bản đồ sao, Draconic, Kỳ Trăng</li><li><Check /> Online 1-1, chuẩn bị sổ ghi chép và thời gian yên tĩnh</li></ul><div className="healing-price"><strong>2.500.000đ</strong><span>/ 7 ngày chuyên sâu</span></div><Button asChild className="gold-button"><a href={zaloUrl} target="_blank" rel="noreferrer">Hẹn tư vấn khóa học <ArrowRight /></a></Button></Reveal>
    </section>

    <section className="section draconic">
      <Reveal className="draconic-intro"><p className="kicker"><MoonStar size={15} /> SOI TIỀN KIẾP DRACONIC</p><h2>Điều gì vẫn đang<br />gọi tên bạn?</h2><p>Draconic là một góc nhìn để bạn nhận ra những khuynh hướng cảm xúc, bài học và khao khát sâu bên trong.</p></Reveal>
      <div className="draconic-points">
        <Reveal delay={40}><article><span>01</span><h3>Thói quen cũ</h3><p>Những hành vi, nỗi sợ hay tài năng bẩm sinh vẫn đi cùng bạn đến hiện tại.</p></article></Reveal>
        <Reveal delay={140}><article><span>02</span><h3>Bài học dang dở</h3><p>Những vấn đề cảm xúc và mối quan hệ cần được nhìn lại một cách dịu dàng.</p></article></Reveal>
        <Reveal delay={240}><article><span>03</span><h3>Khao khát cốt lõi</h3><p>Điều khiến bạn luôn bị thu hút bởi một lối sống, một vùng đất hay lý tưởng nhất định.</p></article></Reveal>
      </div>
    </section>

    <section className="booking" id="đặt-lịch">
      <Reveal className="booking-copy"><p className="kicker"><CalendarDays size={15} /> ĐẶT LỊCH CÙNG FREYA</p><h2>Một buổi hẹn,<br />nhẹ nhàng thôi.</h2><p>Bạn chỉ cần để lại tin nhắn. Freya sẽ phản hồi để cùng bạn chọn gói xem và khung giờ phù hợp.</p><Button asChild className="gold-button"><a href={zaloUrl} target="_blank" rel="noreferrer"><MessageCircle /> Nhắn tin qua Zalo</a></Button></Reveal>
      <Reveal className="booking-side" delay={160}><ol><li><span>1</span><div><b>Chọn gói xem</b><p>Chia sẻ điều bạn đang cần hỏi.</p></div></li><li><span>2</span><div><b>Hẹn lịch & chuyển khoản</b><p>Freya xác nhận khung giờ cho bạn.</p></div></li><li><span>3</span><div><b>Gửi họ tên & câu hỏi</b><p>Chuẩn bị không gian yên tĩnh.</p></div></li><li><span>4</span><div><b>Bắt đầu soi chiếu</b><p>Ghi âm và chụp bài sau buổi xem.</p></div></li></ol><div className="payment-preview"><img src="/freya-payment.png" alt="Thông tin thanh toán Freya Tarot" /><div><span>THANH TOÁN</span><b>Quét mã sau khi Freya xác nhận lịch</b></div></div></Reveal>
    </section>

    <footer><div className="brand"><MoonStar size={19} /> FREYA TAROT</div><p>Tarot & chiêm tinh cá nhân</p><div><span>Fanpage: Freya Tarot</span><a href="https://www.tiktok.com/@uyenvuong0111" target="_blank" rel="noreferrer">TikTok @uyenvuong0111</a><a href={zaloUrl} target="_blank" rel="noreferrer">Zalo 0947181857</a></div></footer>
    <a href={zaloUrl} target="_blank" rel="noreferrer" className="mobile-book"><MessageCircle size={18} /> Đặt lịch qua Zalo</a>
  </main>;
}
