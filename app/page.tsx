"use client";

import { ArrowRight, CalendarCheck, Check, CircleDollarSign, Clock3, Heart, MessageCircle, MoonStar, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const zaloUrl = "https://zalo.me/0947181857";

const packages = {
  tarot: [["01 cau hoi", "50k"], ["03 cau hoi", "80k"], ["Bang cau hoi", "130k"], ["01 tieng", "200k"]],
  iching: [["01 cau hoi", "59k"], ["03 cau hoi", "100k"], ["01 tieng", "219k"]],
  astrology: [["Than so hoc", "300k"], ["Ban do sao", "450k"], ["Tien kiep Draconic", "650k"]],
};

function PackageList({ items }: { items: string[][] }) {
  return <div className="package-list">{items.map(([name, price]) => <div key={name}><span>{name}</span><strong>{price}</strong></div>)}</div>;
}

export default function Home() {
  return <main>
    <nav className="nav-shell" aria-label="Dieu huong chinh">
      <a className="brand" href="#top"><MoonStar size={20} /> FREYA TAROT</a>
      <div className="nav-links"><a href="#dich-vu">Dich vu</a><a href="#bang-gia">Bang gia</a><a href="#quy-trinh">Dat lich</a></div>
      <Button asChild className="nav-cta"><a href={zaloUrl} target="_blank" rel="noreferrer">Nhan tin Zalo <ArrowRight /></a></Button>
    </nav>

    <section className="hero" id="top">
      <div className="hero-stars" aria-hidden="true">* . * . * . *</div>
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={15} /> Tarot & chiem tinh ca nhan</p>
        <h1>Mot cuoc hen de ban lang nghe chinh minh.</h1>
        <p className="hero-description">Freya dong hanh cung ban qua Tarot, Kinh Dich va ban do sao - bang mot cuoc tro chuyen rieng tu, cham va that.</p>
        <div className="hero-actions"><Button asChild size="lg" className="primary-button"><a href="#quy-trinh"><CalendarCheck /> Dat lich xem</a></Button><Button asChild variant="outline" size="lg" className="secondary-button"><a href="#bang-gia">Xem bang gia</a></Button></div>
        <div className="trust-row"><span><Star fill="currentColor" /> 6 nam dong hanh</span><span><Heart fill="currentColor" /> Online 1-1</span><span><Clock3 /> Co ghi am buoi xem</span></div>
      </div>
      <div className="hero-art" aria-label="Anh minh hoa Freya Tarot">
        <div className="sun-burst" /><div className="portrait-frame"><img src="/freya-course.png" alt="Chan dung dai dien Freya Tarot" /></div>
        <div className="orbit orbit-one" aria-hidden="true">*</div><div className="orbit orbit-two" aria-hidden="true">C</div>
        <div className="art-label"><span>FREYA</span><small>Tarot reader</small></div>
      </div>
    </section>

    <section className="marquee"><span>Tarot phuong Tay</span><i>*</i><span>Kinh Dich phuong Dong</span><i>*</i><span>Ban do sao</span><i>*</i><span>Draconic</span><i>*</i><span>Chua lanh 1-1</span></section>

    <section className="section intro-section" id="dich-vu">
      <div className="section-heading"><p className="eyebrow"><Sparkles size={15} /> Chon cach minh dong hanh</p><h2>Moi cau hoi deu xung dang co mot khong gian rieng.</h2></div>
      <div className="service-grid">
        <article className="service-card tarot-card"><span className="card-number">01</span><MoonStar size={29} /><h3>Tarot phuong Tay</h3><p>Goi mo van de dang quan tam qua trai bai, buoi xem theo gio, hoac tong quan theo moc thoi gian.</p><a href="#bang-gia">Xem goi Tarot <ArrowRight size={16} /></a></article>
        <article className="service-card iching-card"><span className="card-number">02</span><Sparkles size={29} /><h3>Kinh Dich</h3><p>Mot cach soi chieu theo phuong Dong de ban nhin ro tinh huong, lua chon va huong di phu hop.</p><a href="#bang-gia">Xem goi Kinh Dich <ArrowRight size={16} /></a></article>
        <article className="service-card natal-card"><span className="card-number">03</span><Star size={29} /><h3>Tu vi & chiem tinh</h3><p>Than so hoc, ban do sao va goc nhin Draconic cho hanh trinh hieu minh sau hon.</p><a href="#draconic">Kham pha Draconic <ArrowRight size={16} /></a></article>
      </div>
    </section>

    <section className="section pricing-section" id="bang-gia">
      <div className="pricing-aside"><p className="eyebrow"><CircleDollarSign size={15} /> Dich vu & chi phi</p><h2>Bang gia ro rang, de ban chon dung dieu minh can.</h2><p>Ban co the nhan tin truc tiep de Freya tu van goi phu hop voi cau hoi cua ban.</p><Button asChild variant="outline" className="secondary-button"><a href={zaloUrl} target="_blank" rel="noreferrer"><MessageCircle /> Tu van qua Zalo</a></Button></div>
      <Tabs defaultValue="tarot" className="price-tabs">
        <TabsList className="price-tab-list"><TabsTrigger value="tarot">Tarot</TabsTrigger><TabsTrigger value="iching">Kinh Dich</TabsTrigger><TabsTrigger value="astrology">Chiem tinh</TabsTrigger></TabsList>
        <TabsContent value="tarot" className="price-panel"><p className="panel-kicker">Tarot phuong Tay</p><h3>Chon mot cau hoi, hoac mot khoang thoi gian de soi chieu.</h3><PackageList items={packages.tarot} /><div className="panel-note"><strong>Tong quan:</strong> 1 thang 80k · 3 thang 120k · 6 thang 150k · 1 nam 200k</div><div className="panel-note"><strong>Offline:</strong> 350k/nguoi/60 phut. Phu thu quan xa tren 8km; giam gia tu 2 nguoi.</div></TabsContent>
        <TabsContent value="iching" className="price-panel"><p className="panel-kicker">Kinh Dich phuong Dong</p><h3>Du dung mot cau hoi hay mot buoi hen dai hon, van co cho de ban cham lai.</h3><PackageList items={packages.iching} /><div className="panel-note"><strong>Hinh thuc:</strong> Online 1-1, hen lich truoc qua Zalo.</div></TabsContent>
        <TabsContent value="astrology" className="price-panel"><p className="panel-kicker">Tu vi trong doi</p><h3>Doc lai nhung mau hinh lon trong cau chuyen va hanh trinh cua ban.</h3><PackageList items={packages.astrology} /><div className="panel-note"><strong>Bao gom:</strong> File ket qua va cuoc goi giai thich.</div></TabsContent>
      </Tabs>
    </section>

    <section className="healing-section">
      <div className="healing-image"><img src="/freya-course.png" alt="Thong tin khoa hoc 7 ngay chua lanh Freya Tarot" /></div>
      <div className="healing-copy"><p className="eyebrow"><Heart size={15} /> Chuong trinh 1-1</p><h2>7 ngay chua lanh: khoa hoc ve ban than.</h2><p>Mot hanh trinh danh cho nguoi muon dung lai, soi chieu sau hon va ket noi voi chinh minh.</p><ul><li><Check /> 7 ngay lien tiep, 60 phut moi buoi</li><li><Check /> Soi chieu qua than so hoc, ban do sao, Draconic va Ky Trang</li><li><Check /> Online 1-1; can so ghi chep va thoi gian yen tinh</li></ul><div className="healing-bottom"><strong>2.500.000d</strong><span>/ 7 ngay chuyen sau</span></div><Button asChild className="primary-button"><a href={zaloUrl} target="_blank" rel="noreferrer">Hen tu van khoa hoc <ArrowRight /></a></Button></div>
    </section>

    <section className="section draconic-section" id="draconic">
      <div className="draconic-heading"><p className="eyebrow"><MoonStar size={15} /> Dich vu moi 2026</p><h2>Soi tien kiep Draconic, nhin lai dieu van dang goi ten ban.</h2><p>Ban do sao Draconic mang den mot goc nhin ve nhung dau vet cam xuc va khuynh huong sau ben trong.</p></div>
      <div className="draconic-items"><article><span>01</span><div><h3>Thoi quen cu</h3><p>Nhung hanh vi, noi so hoac tai nang bam sinh ma ban mang sang hien tai.</p></div></article><article><span>02</span><div><h3>Bai hoc dang do</h3><p>Nhung van de cam xuc va moi quan he chua kip duoc giai quyet.</p></div></article><article><span>03</span><div><h3>Khao khat cot loi</h3><p>Dieu khien ban luon bi thu hut boi mot loi song, vung dat hay ly tuong.</p></div></article></div>
    </section>

    <section className="booking-section" id="quy-trinh"><div className="booking-heading"><p className="eyebrow"><CalendarCheck size={15} /> Dat lich cung Freya</p><h2>Hen mot buoi xem, nhe nhang thoi.</h2><p>Chi can de lai loi nhan, Freya se phan hoi de cung ban chon khung gio va goi phu hop.</p></div><ol className="booking-steps"><li><span>1</span><div><h3>Chon goi xem</h3><p>Nhan tin de chia se dieu ban dang can hoi.</p></div></li><li><span>2</span><div><h3>Hen lich & chuyen khoan</h3><p>Freya xac nhan khung gio sau khi nhan thong tin.</p></div></li><li><span>3</span><div><h3>Gui ho ten & cau hoi</h3><p>Chuan bi khong gian yen tinh cho buoi hen cua minh.</p></div></li><li><span>4</span><div><h3>Bat dau soi chieu</h3><p>Freya ghi am, chup bai va dong hanh cung ban.</p></div></li></ol><div className="booking-cta"><p>San sang bat dau?</p><Button asChild size="lg" className="primary-button"><a href={zaloUrl} target="_blank" rel="noreferrer"><MessageCircle /> Nhan tin qua Zalo</a></Button></div></section>
    <footer><div className="footer-brand"><MoonStar size={20} /> FREYA TAROT</div><p>Mot goc nho de ban tro ve voi nhung cau hoi cua minh.</p><div className="footer-links"><span>Fanpage: Freya Tarot</span><a href="https://www.tiktok.com/@uyenvuong0111" target="_blank" rel="noreferrer">TikTok @uyenvuong0111</a><a href={zaloUrl} target="_blank" rel="noreferrer">Zalo 0947181857</a></div></footer>
    <a className="mobile-cta" href={zaloUrl} target="_blank" rel="noreferrer"><MessageCircle /> Dat lich qua Zalo</a>
  </main>;
}
